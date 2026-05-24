import { NextRequest, NextResponse } from 'next/server'
import { supabase, isSupabaseConfigured } from '@/lib/supabase'

// Obtener reacciones de una familia
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const familyId = searchParams.get('familyId')

    if (!familyId) {
      return NextResponse.json({ error: 'ID de familia requerido' }, { status: 400 })
    }

    // Si Supabase no está configurado, devolver array vacío
    // El frontend usará localStorage en este caso
    if (!isSupabaseConfigured()) {
      return NextResponse.json({ 
        success: true, 
        reactions: [],
        message: 'Modo demo - datos guardados localmente'
      })
    }

    const { data, error } = await supabase!
      .from('family_reactions')
      .select('*')
      .eq('family_id', familyId)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching reactions:', error)
      return NextResponse.json({ error: 'Error al obtener reacciones' }, { status: 500 })
    }

    return NextResponse.json({ success: true, reactions: data })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Error interno' }, { status: 500 })
  }
}

// Guardar una reacción
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { familyId, introStepId, foodName, reaction, notes, includeInDiet } = body

    if (!familyId || !introStepId || !foodName || !reaction) {
      return NextResponse.json({ error: 'Faltan datos requeridos' }, { status: 400 })
    }

    // Si Supabase no está configurado
    if (!isSupabaseConfigured()) {
      const demoReaction = {
        id: 'demo-' + Date.now(),
        family_id: familyId,
        intro_step_id: introStepId,
        food_name: foodName,
        reaction,
        notes: notes || null,
        include_in_diet: includeInDiet,
        reaction_date: new Date().toISOString(),
        created_at: new Date().toISOString(),
      }
      return NextResponse.json({ success: true, reaction: demoReaction })
    }

    // Verificar si ya existe una reacción para este alimento
    const { data: existing } = await supabase!
      .from('family_reactions')
      .select('*')
      .eq('family_id', familyId)
      .eq('intro_step_id', introStepId)
      .eq('food_name', foodName)
      .single()

    if (existing) {
      // Actualizar existente
      const { data, error } = await supabase!
        .from('family_reactions')
        .update({
          reaction,
          notes: notes || null,
          include_in_diet: includeInDiet,
          reaction_date: new Date().toISOString(),
        })
        .eq('id', existing.id)
        .select()
        .single()

      if (error) {
        console.error('Error updating reaction:', error)
        return NextResponse.json({ error: 'Error al actualizar' }, { status: 500 })
      }

      return NextResponse.json({ success: true, reaction: data })
    }

    // Crear nueva
    const { data, error } = await supabase!
      .from('family_reactions')
      .insert([
        {
          family_id: familyId,
          intro_step_id: introStepId,
          food_name: foodName,
          reaction,
          notes: notes || null,
          include_in_diet: includeInDiet,
        }
      ])
      .select()
      .single()

    if (error) {
      console.error('Error creating reaction:', error)
      return NextResponse.json({ error: 'Error al guardar' }, { status: 500 })
    }

    return NextResponse.json({ success: true, reaction: data })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Error interno' }, { status: 500 })
  }
}

// Actualizar reacción (cambiar include_in_diet)
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, includeInDiet } = body

    // Si Supabase no está configurado
    if (!isSupabaseConfigured()) {
      return NextResponse.json({ success: true })
    }

    const { error } = await supabase!
      .from('family_reactions')
      .update({ include_in_diet: includeInDiet })
      .eq('id', id)

    if (error) {
      console.error('Error updating reaction:', error)
      return NextResponse.json({ error: 'Error al actualizar' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Error interno' }, { status: 500 })
  }
}

// Eliminar reacción
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json({ error: 'ID requerido' }, { status: 400 })
    }

    // Si Supabase no está configurado
    if (!isSupabaseConfigured()) {
      return NextResponse.json({ success: true })
    }

    const { error } = await supabase!
      .from('family_reactions')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Error deleting reaction:', error)
      return NextResponse.json({ error: 'Error al eliminar' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Error interno' }, { status: 500 })
  }
}
