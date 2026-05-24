import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const ageMonths = searchParams.get('ageMonths')

    if (!ageMonths) {
      return NextResponse.json(
        { error: 'Se requiere la edad del bebé' },
        { status: 400 }
      )
    }

    const months = parseInt(ageMonths, 10)

    // Obtener recetas apropiadas para la edad
    const recipes = await db.recipe.findMany({
      where: {
        minAgeMonths: { lte: months },
      },
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

    // Agrupar recetas por tipo de comida
    const desayunos = recipes.filter(r => r.mealType === 'desayuno')
    const almuerzos = recipes.filter(r => r.mealType === 'almuerzo')
    const meriendas = recipes.filter(r => r.mealType === 'merienda')
    const cenas = recipes.filter(r => r.mealType === 'cena')

    // Función para seleccionar recetas aleatorias
    const getRandomRecipe = (list: typeof recipes) => {
      if (list.length === 0) return null
      return list[Math.floor(Math.random() * list.length)]
    }

    // Generar plan del día
    const mealPlan = {
      date: new Date().toLocaleDateString('es-ES', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      ageMonths: months,
      meals: {
        desayuno: getRandomRecipe(desayunos) || getRandomRecipe(meriendas),
        almuerzo: getRandomRecipe(almuerzos) || getRandomRecipe(recipes),
        merienda: getRandomRecipe(meriendas) || getRandomRecipe(desayunos),
        cena: getRandomRecipe(cenas) || getRandomRecipe(recipes),
      },
      nutritionalSummary: getNutritionalSummary(months),
      tips: getTipsForAge(months),
    }

    return NextResponse.json(mealPlan)
  } catch (error) {
    console.error('Error generating meal plan:', error)
    return NextResponse.json(
      { error: 'Error al generar el plan de comidas' },
      { status: 500 }
    )
  }
}

function getNutritionalSummary(ageMonths: number) {
  if (ageMonths < 8) {
    return {
      protein: '2-3 raciones pequeñas al día',
      iron: 'Introducir carne para el hierro',
      vitamins: 'Variedad de frutas y verduras',
      hydration: 'Pecho o biberón a demanda',
    }
  } else if (ageMonths < 10) {
    return {
      protein: '3-4 raciones pequeñas al día',
      iron: 'Incluir legumbres y carnes',
      vitamins: 'Ampliar variedad de verduras',
      hydration: 'Agua en meals, leche matural o fórmula',
    }
  } else {
    return {
      protein: '4 raciones pequeñas al día',
      iron: 'Combinar hierro vegetal y animal',
      vitamins: 'Máxima variedad de colores',
      hydration: 'Agua con las comidas',
    }
  }
}

function getTipsForAge(ageMonths: number): string[] {
  if (ageMonths < 8) {
    return [
      'Introduce un alimento nuevo cada 3-4 días para detectar alergias.',
      'Las texturas deben ser muy suaves y líquidas.',
      'La leche materna o fórmula sigue siendo el alimento principal.',
      'Ofrece pequeñas cantidades (1-2 cucharadas al principio).',
    ]
  } else if (ageMonths < 10) {
    return [
      'Las texturas pueden ser más gruesas con pequeños grumos.',
      'Introduce el huevo: primero la yema cocida, luego la clara.',
      'El pescado blanco puede introducirse vigilando alergias.',
      'Fomenta que el bebé toque y explore los alimentos.',
    ]
  } else {
    return [
      'Los alimentos pueden estar troceados en piezas pequeñas.',
      'Fomenta el autoconsumo con alimentos que pueda coger.',
      'La leche materna o fórmula sigue siendo importante.',
      'Nunca miel antes de los 12 meses por riesgo de botulismo.',
    ]
  }
}
