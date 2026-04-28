import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { ingredients, ageMonths = 6, strictMode = false } = body

    if (!ingredients || !Array.isArray(ingredients) || ingredients.length === 0) {
      return NextResponse.json(
        { error: 'Se requieren ingredientes para sugerir recetas' },
        { status: 400 }
      )
    }

    const zai = await ZAI.create()

    // Prompt diferente según si es modo estricto (solo alimentos del día) o modo libre
    const basePrompt = strictMode 
      ? `Eres un nutricionista infantil especializado en alimentación complementaria para bebés de ${ageMonths} meses.

REGLA CRÍTICA - INTRODUCCIÓN GRADUAL:
El bebé está en proceso de introducción gradual de alimentos. SOLO debe comer los alimentos que ya se le han dado.
El alimento del día es: ${ingredients.join(' y ')}

IMPORTANTE - INGREDIENTES PERMITIDOS:
- SOLO puedes usar: ${ingredients.join(', ')}
- Puedes agregar agua para la cocción/textura
- NADA de sal, azúcar, ni otros ingredientes
- NO agregues aceite, mantequilla, leche de vaca u otros alimentos

La receta debe ser EXCLUSIVAMENTE a base del alimento indicado (${ingredients.join(' y ')}).
Esto es porque el bebé está probando este alimento por primera vez y debemos detectar posibles alergias.`
      : `Eres un nutricionista infantil especializado en alimentación complementaria para bebés de ${ageMonths} meses.

El usuario tiene estos ingredientes disponibles: ${ingredients.join(', ')}

Genera 2 recetas apropiadas para un bebé de ${ageMonths} meses usando principalmente estos ingredientes.
Puedes agregar ingredientes básicos como agua, pero evita agregar muchos ingredientes nuevos.`

    const prompt = `${basePrompt}

TEXTURA SEGÚN EDAD:
- 6-8 meses: Purés muy suaves y líquidos, casi como sopa. Sin grumos.
- 8-10 meses: Texturas más espesas, pequeños trozos muy blandos
- 10-12 meses: Trozos pequeños, alimentos que pueda agarrar con los dedos

PROHIBIDO:
- Sal (los riñones del bebé no la procesan)
- Azúcar
- Miel (prohibida hasta los 12 meses por riesgo de botulismo)
- Alimentos enteros que causen ahogo (nueces, uvas enteras, etc.)

INSTRUCCIONES:
- Incluir cantidades específicas en gramos o cucharadas
- Tiempos de cocción reales
- Pasos detallados de preparación

Responde SOLO con un JSON válido con esta estructura:
{
  "recipes": [
    {
      "name": "Nombre de la receta",
      "description": "Descripción breve",
      "minAgeMonths": 6,
      "prepTime": 5,
      "cookTime": 15,
      "servings": 2,
      "ingredients": [
        {"name": "ingrediente", "quantity": "50g", "notes": "opcional"}
      ],
      "instructions": [
        "Paso 1",
        "Paso 2"
      ],
      "tips": ["Consejo 1"],
      "nutritionalValue": "Información nutricional",
      "mealType": "almuerzo"
    }
  ]
}

Genera ahora las 2 recetas en formato JSON:`

    const completion = await zai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `Eres un experto nutricionista infantil especializado en alimentación complementaria.
${strictMode ? 'MODO ESTRICTO: Solo puedes usar el alimento indicado, agua para cocción, y NADA más. No agregues ningún otro ingrediente.' : ''}
Responde SOLO con JSON válido, sin texto adicional ni bloques de código.`
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 2000
    })

    const content = completion.choices[0]?.message?.content
    
    if (!content) {
      return NextResponse.json(
        { error: 'No se pudieron generar recetas' },
        { status: 500 }
      )
    }

    // Parse the JSON response
    let recipes
    try {
      // Remove potential markdown code blocks
      const cleanContent = content.replace(/```json\n?|\n?```/g, '').trim()
      recipes = JSON.parse(cleanContent)
    } catch (parseError) {
      console.error('Error parsing AI response:', content)
      return NextResponse.json(
        { error: 'Error al procesar las recetas generadas' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      recipes: recipes.recipes || [],
      ingredients: ingredients,
      ageMonths: ageMonths,
      strictMode: strictMode
    })

  } catch (error) {
    console.error('Error suggesting recipes:', error)
    return NextResponse.json(
      { error: 'Error al sugerir recetas' },
      { status: 500 }
    )
  }
}
