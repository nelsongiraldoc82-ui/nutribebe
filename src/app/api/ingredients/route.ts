import { NextRequest, NextResponse } from 'next/server'
import { ingredientsList } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const category = searchParams.get('category')

    let ingredients = [...ingredientsList]
    
    if (category) {
      ingredients = ingredients.filter(i => i.category === category)
    }

    return NextResponse.json(ingredients)
  } catch (error) {
    console.error('Error fetching ingredients:', error)
    return NextResponse.json(
      { error: 'Error al obtener ingredientes' },
      { status: 500 }
    )
  }
}
