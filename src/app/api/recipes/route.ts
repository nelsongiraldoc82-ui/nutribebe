import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const ageMonths = searchParams.get('ageMonths')
    const mealType = searchParams.get('mealType')
    const recipeId = searchParams.get('id')

    // Si se pide una receta específica
    if (recipeId) {
      const recipe = await db.recipe.findUnique({
        where: { id: recipeId },
        include: {
          ageStage: true,
          ingredients: {
            include: {
              ingredient: {
                include: {
                  category: true,
                },
              },
            },
          },
        },
      })

      if (!recipe) {
        return NextResponse.json({ error: 'Receta no encontrada' }, { status: 404 })
      }

      return NextResponse.json(recipe)
    }

    // Construir filtros
    const where: Record<string, unknown> = {}

    if (ageMonths) {
      const months = parseInt(ageMonths, 10)
      where.minAgeMonths = { lte: months }
    }

    if (mealType) {
      where.mealType = mealType
    }

    const recipes = await db.recipe.findMany({
      where,
      include: {
        ageStage: true,
        ingredients: {
          include: {
            ingredient: {
              include: {
                category: true,
              },
            },
          },
        },
      },
      orderBy: [
        { minAgeMonths: 'asc' },
        { name: 'asc' },
      ],
    })

    return NextResponse.json(recipes)
  } catch (error) {
    console.error('Error fetching recipes:', error)
    return NextResponse.json(
      { error: 'Error al obtener recetas' },
      { status: 500 }
    )
  }
}
