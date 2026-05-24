import { NextRequest, NextResponse } from 'next/server'
import { supabase, generateFamilyCode, isSupabaseConfigured } from '@/lib/supabase'

// Crear una nueva familia
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, babyName, babyBirthDate } = body

    // Si Supabase no está configurado, usar modo demo con localStorage sincronizado
    if (!isSupabaseConfigured()) {
      const demoFamily = {
        id: 'demo-' + Date.now(),
        code: generateFamilyCode(),
        name: name || 'Mi Familia',
        baby_name: babyName || '',
        baby_birth_date: babyBirthDate || null,
        created_at: new Date().toISOString(),
      }
      return NextResponse.json({ success: true, family: demoFamily })
    }

    const code = generateFamilyCode()

    const { data, error } = await supabase!
      .from('families')
      .insert([
        {
          code,
          name: name || 'Mi Familia',
          baby_name: babyName || null,
          baby_birth_date: babyBirthDate || null,
        }
      ])
      .select()
      .single()

    if (error) {
      console.error('Error creating family:', error)
      return NextResponse.json({ error: 'Error al crear la familia' }, { status: 500 })
    }

    return NextResponse.json({ success: true, family: data })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Error interno' }, { status: 500 })
  }
}

// Obtener familia por código
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const code = searchParams.get('code')

    if (!code) {
      return NextResponse.json({ error: 'Código requerido' }, { status: 400 })
    }

    // Si Supabase no está configurado
    if (!isSupabaseConfigured()) {
      // En modo demo, aceptamos cualquier código
      const demoFamily = {
        id: 'demo-' + code,
        code: code.toUpperCase(),
        name: 'Familia Demo',
        baby_name: '',
        baby_birth_date: null,
        created_at: new Date().toISOString(),
      }
      return NextResponse.json({ success: true, family: demoFamily })
    }

    const { data, error } = await supabase!
      .from('families')
      .select('*')
      .eq('code', code.toUpperCase())
      .single()

    if (error) {
      if (error.code === 'PGRST116') {
        return NextResponse.json({ error: 'Código no encontrado' }, { status: 404 })
      }
      console.error('Error fetching family:', error)
      return NextResponse.json({ error: 'Error al buscar la familia' }, { status: 500 })
    }

    return NextResponse.json({ success: true, family: data })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Error interno' }, { status: 500 })
  }
}

// Actualizar familia
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, name, babyName, babyBirthDate } = body

    // Si Supabase no está configurado
    if (!isSupabaseConfigured()) {
      return NextResponse.json({ 
        success: true, 
        family: { id, name, baby_name: babyName, baby_birth_date: babyBirthDate } 
      })
    }

    const { data, error } = await supabase!
      .from('families')
      .update({
        name,
        baby_name: babyName,
        baby_birth_date: babyBirthDate,
      })
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error('Error updating family:', error)
      return NextResponse.json({ error: 'Error al actualizar' }, { status: 500 })
    }

    return NextResponse.json({ success: true, family: data })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Error interno' }, { status: 500 })
  }
}
