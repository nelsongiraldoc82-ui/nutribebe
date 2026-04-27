// Datos estáticos de introducción de alimentos
// Basados en recomendaciones OMS, UNICEF y AEPAP
// Plan de alimentación desde 6 hasta 24 meses con recetas

export interface IntroStep {
  id: string
  weekNumber: number
  dayNumber: number
  title: string
  description: string
  foodGroup?: string
  specificFood?: string
  portionSize?: string
  frequency?: string
  breastmilkNote?: string
  tips?: string
  warnings?: string
  ageRange?: string
  mealProgression?: string
  recipe?: {
    name: string
    ingredients: string[]
    steps: string[]
    prepTime?: string
    cookTime?: string
  }
}

// Función para generar pasos automáticamente
function generateSteps(): IntroStep[] {
  const steps: IntroStep[] = []
  
  // ===== MESES 6-8: INTRODUCCIÓN =====
  
  // SEMANA 1 - Verduras suaves (1 comida: almuerzo)
  steps.push(
    { 
      id: 'w1d1', weekNumber: 1, dayNumber: 1, 
      title: '¡Primer día! Puré de calabacín', 
      description: 'Hoy comienza la alimentación complementaria. Solo ALMUERZO con calabacín.', 
      foodGroup: 'Verduras', 
      specificFood: 'Calabacín', 
      portionSize: '2-3 cucharaditas', 
      frequency: '1 comida (ALMUERZO)', 
      ageRange: '6-8', 
      mealProgression: '1 COMIDA: Solo almuerzo con puré. Leche materna/formula el resto del día.',
      breastmilkNote: 'La leche sigue siendo el 90% de la nutrición. El puré es solo una introducción.',
      tips: JSON.stringify(['Elige un momento tranquilo', 'Usa cuchara pequeña de silicona', 'No te preocupes si escupe', 'Mantén las 5-6 tomas de leche']),
      warnings: JSON.stringify(['No añadas sal ni azúcar', 'Observa reacciones alérgicas']),
      recipe: {
        name: 'Puré de Calabacín Básico',
        ingredients: [
          '50g de calabacín (sin piel ni semillas)',
          'Agua para cocinar'
        ],
        steps: [
          'Lava bien el calabacín bajo el grifo',
          'Pela el calabacín con un pelador',
          'Corta en trozos pequeños y quita las semillas',
          'Cocina al vapor durante 10-12 minutos hasta que esté muy tierno',
          'Tritura con la batidora hasta obtener un puré muy líquido',
          'Añade agua de cocción si queda muy espeso',
          'Deja enfriar a temperatura ambiente antes de dar'
        ],
        prepTime: '5 min',
        cookTime: '12 min'
      }
    },
    { 
      id: 'w1d2', weekNumber: 1, dayNumber: 2, 
      title: 'Día 2: Seguimos con calabacín', 
      description: 'Continúa con puré de calabacín en el ALMUERZO.', 
      foodGroup: 'Verduras', 
      specificFood: 'Calabacín', 
      portionSize: '3-4 cucharadas', 
      frequency: '1 comida (ALMUERZO)', 
      ageRange: '6-8', 
      mealProgression: '1 COMIDA',
      recipe: {
        name: 'Puré de Calabacín',
        ingredients: ['70g de calabacín', 'Agua'],
        steps: [
          'Pela y corta el calabacín',
          'Cocina al vapor 10-12 min',
          'Tritura muy bien hasta textura líquida',
          'Puede quedar un poco más espeso que el primer día'
        ],
        prepTime: '5 min',
        cookTime: '12 min'
      }
    },
    { 
      id: 'w1d3', weekNumber: 1, dayNumber: 3, 
      title: 'Día 3: Calabacín', 
      description: 'Último día de prueba con calabacín solo.', 
      foodGroup: 'Verduras', 
      specificFood: 'Calabacín', 
      portionSize: '4-5 cucharadas', 
      frequency: '1 comida (ALMUERZO)', 
      ageRange: '6-8', 
      mealProgression: '1 COMIDA',
      recipe: {
        name: 'Puré de Calabacín Cremoso',
        ingredients: ['80g de calabacín', 'Agua de cocción'],
        steps: [
          'Pela y trocea el calabacín',
          'Cocina al vapor hasta muy tierno',
          'Tritura con un poco de agua de cocción',
          'Textura cremosa pero sin grumos'
        ],
        prepTime: '5 min',
        cookTime: '12 min'
      }
    },
    { 
      id: 'w1d4', weekNumber: 1, dayNumber: 4, 
      title: 'Nuevo: Puré de Calabaza', 
      description: 'Introducimos calabaza en el almuerzo.', 
      foodGroup: 'Verduras', 
      specificFood: 'Calabaza', 
      portionSize: '2-3 cucharadas', 
      frequency: '1 comida (ALMUERZO)', 
      ageRange: '6-8', 
      mealProgression: '1 COMIDA',
      recipe: {
        name: 'Puré de Calabaza Dulce',
        ingredients: [
          '60g de calabaza (tipo butternut o violín)',
          'Agua para cocinar'
        ],
        steps: [
          'Pela la calabaza con un cuchillo fuerte',
          'Quita las semillas y fibras del centro',
          'Corta en cubos pequeños de 1-2 cm',
          'Cocina al vapor durante 20-25 minutos hasta muy tierna',
          'Tritura hasta obtener un puré suave y naranja',
          'La calabaza es naturalmente dulce, ideal para bebés'
        ],
        prepTime: '5 min',
        cookTime: '25 min'
      }
    },
    { 
      id: 'w1d5', weekNumber: 1, dayNumber: 5, 
      title: 'Continúa con calabaza', 
      description: 'Sigue con calabaza en el almuerzo.', 
      foodGroup: 'Verduras', 
      specificFood: 'Calabaza', 
      portionSize: '3-4 cucharadas', 
      frequency: '1 comida (ALMUERZO)', 
      ageRange: '6-8', 
      mealProgression: '1 COMIDA',
      recipe: {
        name: 'Crema de Calabaza',
        ingredients: ['80g de calabaza', 'Agua'],
        steps: [
          'Pela y corta la calabaza',
          'Cocina al vapor 20-25 min',
          'Tritura con agua de cocción',
          'Textura suave y cremosa'
        ],
        prepTime: '5 min',
        cookTime: '25 min'
      }
    },
    { 
      id: 'w1d6', weekNumber: 1, dayNumber: 6, 
      title: 'Último día de calabaza', 
      description: 'Finalizamos la prueba de calabaza.', 
      foodGroup: 'Verduras', 
      specificFood: 'Calabaza', 
      portionSize: '4-5 cucharadas', 
      frequency: '1 comida (ALMUERZO)', 
      ageRange: '6-8', 
      mealProgression: '1 COMIDA',
      recipe: {
        name: 'Puré de Calabaza',
        ingredients: ['100g de calabaza', 'Agua'],
        steps: [
          'Cocina la calabaza al vapor',
          'Tritura muy bien',
          'Aumenta la cantidad gradualmente'
        ],
        prepTime: '5 min',
        cookTime: '25 min'
      }
    },
    { 
      id: 'w1d7', weekNumber: 1, dayNumber: 7, 
      title: 'Nuevo: Puré de Zanahoria', 
      description: 'Introducimos zanahoria, rica en vitamina A.', 
      foodGroup: 'Verduras', 
      specificFood: 'Zanahoria', 
      portionSize: '2-3 cucharadas', 
      frequency: '1 comida (ALMUERZO)', 
      ageRange: '6-8', 
      mealProgression: '1 COMIDA',
      recipe: {
        name: 'Puré de Zanahoria',
        ingredients: [
          '50g de zanahoria',
          'Agua para cocinar'
        ],
        steps: [
          'Pela la zanahoria con pelador',
          'Corta en rodajas finas o cubos pequeños',
          'Cocina al vapor durante 25-30 minutos (debe estar muy tierna)',
          'Tritura muy bien hasta eliminar todos los grumos',
          'Añade agua de cocción para ajustar textura',
          'La zanahoria tarda más en cocinarse que otras verduras'
        ],
        prepTime: '5 min',
        cookTime: '30 min'
      }
    }
  )

  // SEMANA 2 - Continúa con 1 comida (almuerzo)
  steps.push(
    { 
      id: 'w2d1', weekNumber: 2, dayNumber: 1, 
      title: 'Zanahoria día 2', 
      description: 'Continúa con zanahoria.', 
      foodGroup: 'Verduras', 
      specificFood: 'Zanahoria', 
      portionSize: '3-4 cucharadas', 
      frequency: '1 comida (ALMUERZO)', 
      ageRange: '6-8', 
      mealProgression: '1 COMIDA',
      recipe: {
        name: 'Puré de Zanahoria',
        ingredients: ['70g de zanahoria', 'Agua'],
        steps: [
          'Pela y corta la zanahoria',
          'Cocina 25-30 min al vapor',
          'Tritura hasta puré muy suave'
        ],
        prepTime: '5 min',
        cookTime: '30 min'
      }
    },
    { 
      id: 'w2d2', weekNumber: 2, dayNumber: 2, 
      title: 'Mezcla de verduras', 
      description: 'Prueba mezcla de verduras ya conocidas.', 
      foodGroup: 'Verduras', 
      specificFood: 'Calabacín + Calabaza + Zanahoria', 
      portionSize: '5-6 cucharadas', 
      frequency: '1 comida (ALMUERZO)', 
      ageRange: '6-8', 
      mealProgression: '1 COMIDA',
      recipe: {
        name: 'Puré Multiverduras',
        ingredients: [
          '30g de calabacín',
          '30g de calabaza',
          '30g de zanahoria',
          'Agua'
        ],
        steps: [
          'Pela todas las verduras',
          'Corta en trozos pequeños',
          'Cocina la zanahoria primero (10 min)',
          'Añade calabaza (otros 15 min)',
          'Añade calabacín los últimos 10 min',
          'Tritura todo junto hasta obtener puré suave'
        ],
        prepTime: '10 min',
        cookTime: '30 min'
      }
    },
    { 
      id: 'w2d3', weekNumber: 2, dayNumber: 3, 
      title: 'Nuevo: Puré de Patata', 
      description: 'La patata es excelente base para purés.', 
      foodGroup: 'Verduras', 
      specificFood: 'Patata', 
      portionSize: '3-4 cucharadas', 
      frequency: '1 comida (ALMUERZO)', 
      ageRange: '6-8', 
      mealProgression: '1 COMIDA',
      recipe: {
        name: 'Puré de Patata Cremoso',
        ingredients: [
          '80g de patata',
          'Agua o leche materna'
        ],
        steps: [
          'Pela la patata y quita cualquier parte verde',
          'Corta en cubos pequeños',
          'Cocina al vapor o hervida 20-25 min',
          'Aplasta con tenedor o tritura ligeramente',
          'NO uses batidora mucho tiempo (queda pegajoso)',
          'Añade agua o leche materna para cremosidad'
        ],
        prepTime: '5 min',
        cookTime: '25 min'
      }
    },
    { 
      id: 'w2d4', weekNumber: 2, dayNumber: 4, 
      title: 'Patata + verduras', 
      description: 'Mezcla patata con verduras ya conocidas.', 
      foodGroup: 'Verduras', 
      specificFood: 'Patata + Calabacín', 
      portionSize: '5-6 cucharadas', 
      frequency: '1 comida (ALMUERZO)', 
      ageRange: '6-8', 
      mealProgression: '1 COMIDA',
      recipe: {
        name: 'Puré de Patata y Calabacín',
        ingredients: [
          '50g de patata',
          '50g de calabacín',
          'Agua'
        ],
        steps: [
          'Pela y corta la patata en cubos',
          'Pela y corta el calabacín',
          'Cocina patata 15 min al vapor',
          'Añade calabacín otros 10 min',
          'Tritura juntos hasta textura suave'
        ],
        prepTime: '10 min',
        cookTime: '25 min'
      }
    },
    { 
      id: 'w2d5', weekNumber: 2, dayNumber: 5, 
      title: 'Nuevo: Judías Verdes', 
      description: 'Las judías verdes aportan fibra.', 
      foodGroup: 'Verduras', 
      specificFood: 'Judías verdes', 
      portionSize: '3-4 cucharadas', 
      frequency: '1 comida (ALMUERZO)', 
      ageRange: '6-8', 
      mealProgression: '1 COMIDA',
      recipe: {
        name: 'Puré de Judías Verdes',
        ingredients: [
          '60g de judías verdes frescas',
          'Agua'
        ],
        steps: [
          'Lava las judías bajo el grifo',
          'Quita las puntas y las hebras laterales',
          'Corta en trozos pequeños',
          'Cocina al vapor 15-20 min hasta muy tiernas',
          'Tritura muy bien para eliminar hilos',
          'Pasa por el pasapurés si quedan hebras'
        ],
        prepTime: '10 min',
        cookTime: '20 min'
      }
    },
    { 
      id: 'w2d6', weekNumber: 2, dayNumber: 6, 
      title: 'Mezcla completa', 
      description: 'Puré con todas las verduras introducidas.', 
      foodGroup: 'Verduras', 
      specificFood: 'Mezcla de verduras', 
      portionSize: '6-7 cucharadas', 
      frequency: '1 comida (ALMUERZO)', 
      ageRange: '6-8', 
      mealProgression: '1 COMIDA',
      recipe: {
        name: 'Puré de Verduras Variadas',
        ingredients: [
          '30g de patata',
          '30g de calabacín',
          '20g de zanahoria',
          '20g de judías verdes'
        ],
        steps: [
          'Pela y trocea todas las verduras',
          'Cocina por orden: zanahoria 10 min, patata y judías 15 min, calabacín 10 min',
          'Tritura todo junto',
          'Ajusta textura con agua de cocción'
        ],
        prepTime: '15 min',
        cookTime: '25 min'
      }
    },
    { 
      id: 'w2d7', weekNumber: 2, dayNumber: 7, 
      title: 'Nuevo: Puerro', 
      description: 'El puerro aporta sabor suave.', 
      foodGroup: 'Verduras', 
      specificFood: 'Puerro', 
      portionSize: '3-4 cucharadas', 
      frequency: '1 comida (ALMUERZO)', 
      ageRange: '6-8', 
      mealProgression: '1 COMIDA',
      recipe: {
        name: 'Crema de Puerro',
        ingredients: [
          '50g de puerro (solo parte blanca)',
          '30g de patata',
          'Agua'
        ],
        steps: [
          'Lava muy bien el puerro (tiene tierra entre capas)',
          'Usa solo la parte blanca, más suave',
          'Corta en rodajas finas',
          'Cocina al vapor con patata 20 min',
          'Tritura hasta textura suave'
        ],
        prepTime: '10 min',
        cookTime: '20 min'
      }
    }
  )

  // SEMANA 3 - AÑADIMOS SEGUNDA COMIDA (MERIENDA con FRUTAS)
  steps.push(
    { 
      id: 'w3d1', weekNumber: 3, dayNumber: 1, 
      title: '¡SEGUNDA COMIDA! Pera en merienda', 
      description: 'Hoy añadimos la MERIENDA con fruta. Ahora son 2 comidas al día: ALMUERZO (verduras) + MERIENDA (frutas).', 
      foodGroup: 'Frutas', 
      specificFood: 'Pera', 
      portionSize: '2-3 cucharadas', 
      frequency: '2 COMIDAS: Almuerzo (verduras) + Merienda (fruta)', 
      ageRange: '6-8', 
      mealProgression: '2 COMIDAS: Almuerzo con puré de verduras + Merienda con fruta',
      breastmilkNote: 'Mantén 4-5 tomas de leche. Las comidas sólidas complementan, no sustituyen.',
      tips: JSON.stringify(['Almuerzo: puré de verduras ya conocidas', 'Merienda: introduce la pera', 'Espacia las comidas 3-4 horas', 'Ofrece leche después de cada comida sólida']),
      recipe: {
        name: 'Compota de Pera',
        ingredients: [
          '1 pera madura (variedad Conference o Blanquilla)',
          'Opcional: 1-2 cucharadas de agua'
        ],
        steps: [
          'Pela la pera con cuidado',
          'Quita el corazón y las semillas',
          'Corta en trozos pequeños',
          'Opción 1 CRUDA: Ralla finamente con rallador',
          'Opción 2 COCIDA: Cocina con poca agua 8-10 min',
          'Tritura hasta obtener puré suave',
          'La pera es muy digestiva y dulce naturalmente'
        ],
        prepTime: '5 min',
        cookTime: '10 min'
      }
    },
    { 
      id: 'w3d2', weekNumber: 3, dayNumber: 2, 
      title: 'Pera día 2', 
      description: 'Continúa con pera en la merienda + verduras en almuerzo.', 
      foodGroup: 'Frutas', 
      specificFood: 'Pera', 
      portionSize: '3-4 cucharadas', 
      frequency: '2 COMIDAS', 
      ageRange: '6-8', 
      mealProgression: '2 COMIDAS',
      tips: JSON.stringify(['Almuerzo: puré de verduras variadas', 'Merienda: papilla de pera']),
      recipe: {
        name: 'Papilla de Pera',
        ingredients: ['1 pera madura'],
        steps: [
          'Pela y quita el corazón',
          'Ralla o tritura hasta puré',
          'Aumenta la cantidad gradualmente'
        ],
        prepTime: '5 min',
        cookTime: '0 min'
      }
    },
    { 
      id: 'w3d3', weekNumber: 3, dayNumber: 3, 
      title: 'Nuevo: Manzana', 
      description: 'Manzana en la merienda.', 
      foodGroup: 'Frutas', 
      specificFood: 'Manzana', 
      portionSize: '2-3 cucharadas', 
      frequency: '2 COMIDAS', 
      ageRange: '6-8', 
      mealProgression: '2 COMIDAS',
      tips: JSON.stringify(['Almuerzo: puré de verduras', 'Merienda: manzana cocida']),
      recipe: {
        name: 'Compota de Manzana',
        ingredients: [
          '1 manzana (tipo Golden o Reineta)',
          '1-2 cucharadas de agua'
        ],
        steps: [
          'Pela la manzana',
          'Quita el corazón y semillas',
          'Corta en cubos pequeños',
          'Cocina al vapor o con poca agua 12-15 min',
          'Tritura hasta textura suave',
          'La manzana cocida es más digestiva al principio'
        ],
        prepTime: '5 min',
        cookTime: '15 min'
      }
    },
    { 
      id: 'w3d4', weekNumber: 3, dayNumber: 4, 
      title: 'Mezcla pera-manzana', 
      description: 'Mezcla de frutas en merienda.', 
      foodGroup: 'Frutas', 
      specificFood: 'Pera + Manzana', 
      portionSize: '4-5 cucharadas', 
      frequency: '2 COMIDAS', 
      ageRange: '6-8', 
      mealProgression: '2 COMIDAS',
      recipe: {
        name: 'Papilla de Frutas Mixtas',
        ingredients: [
          'Media pera madura',
          'Media manzana'
        ],
        steps: [
          'Pela y trocea ambas frutas',
          'Cocina la manzana (la pera puede ser cruda)',
          'Mezcla y tritura todo junto',
          'Proporción 50-50 de cada fruta'
        ],
        prepTime: '10 min',
        cookTime: '12 min'
      }
    },
    { 
      id: 'w3d5', weekNumber: 3, dayNumber: 5, 
      title: 'Nuevo: Plátano', 
      description: 'Plátano en la merienda.', 
      foodGroup: 'Frutas', 
      specificFood: 'Plátano', 
      portionSize: 'Medio plátano pequeño', 
      frequency: '2 COMIDAS', 
      ageRange: '6-8', 
      mealProgression: '2 COMIDAS',
      tips: JSON.stringify(['No necesita cocción', 'Tritura con tenedor', 'Almuerzo: verduras + Merienda: plátano']),
      recipe: {
        name: 'Papilla de Plátano',
        ingredients: [
          'Medio plátano maduro'
        ],
        steps: [
          'Pela el plátano',
          'Corta en trozos',
          'Aplasta con un tenedor hasta obtener puré',
          'NO necesita batidora ni cocción',
          'El plátano maduro es más dulce y digestivo',
          'Se oxida rápido, prepáralo justo antes de dar'
        ],
        prepTime: '2 min',
        cookTime: '0 min'
      }
    },
    { 
      id: 'w3d6', weekNumber: 3, dayNumber: 6, 
      title: 'Papilla tres frutas', 
      description: 'Mezcla de frutas en merienda.', 
      foodGroup: 'Frutas', 
      specificFood: 'Pera + Manzana + Plátano', 
      portionSize: '5-6 cucharadas', 
      frequency: '2 COMIDAS', 
      ageRange: '6-8', 
      mealProgression: '2 COMIDAS',
      recipe: {
        name: 'Papilla de Tres Frutas',
        ingredients: [
          '1/3 de pera',
          '1/3 de manzana',
          '1/3 de plátano'
        ],
        steps: [
          'Pela y trocea pera y manzana',
          'Cocina manzana al vapor 10 min',
          'Añade pera los últimos 5 min',
          'Tritura con el plátano crudo',
          'El plátano aporta cremosidad'
        ],
        prepTime: '10 min',
        cookTime: '10 min'
      }
    },
    { 
      id: 'w3d7', weekNumber: 3, dayNumber: 7, 
      title: 'Resumen: 2 comidas establecidas', 
      description: 'Ya tienes rutina de 2 comidas: verduras al almuerzo, frutas en merienda.', 
      foodGroup: 'Mixto', 
      specificFood: 'Verduras + Frutas', 
      portionSize: 'Almuerzo: 50-60g / Merienda: 40-50g', 
      frequency: '2 COMIDAS', 
      ageRange: '6-8', 
      mealProgression: '2 COMIDAS estables',
      tips: JSON.stringify(['Rutina establecida', 'Almuerzo: 12:00-13:00', 'Merienda: 16:00-17:00', 'Leche el resto del día']),
      recipe: {
        name: 'Menú del Día Ejemplo',
        ingredients: [
          'ALMUERZO: Puré de verduras variadas',
          'MERIENDA: Papilla de frutas'
        ],
        steps: [
          'Almuerzo: Mezcla patata, calabacín, zanahoria',
          'Cocina y tritura las verduras',
          'Merienda: Mezcla pera, manzana, plátano',
          'Aplasta y sirve'
        ],
        prepTime: '20 min',
        cookTime: '25 min'
      }
    }
  )

  // SEMANA 4 - Continúa con 2 comidas
  steps.push(
    { 
      id: 'w4d1', weekNumber: 4, dayNumber: 1, 
      title: 'Nuevo: Aguacate', 
      description: 'Aguacate en la merienda.', 
      foodGroup: 'Frutas', 
      specificFood: 'Aguacate', 
      portionSize: '2-3 cucharadas', 
      frequency: '2 COMIDAS', 
      ageRange: '6-8', 
      mealProgression: '2 COMIDAS',
      recipe: {
        name: 'Puré de Aguacate',
        ingredients: [
          'Medio aguacate maduro'
        ],
        steps: [
          'Elige un aguacate maduro (cede al apretar suavemente)',
          'Corta por la mitad y quita el hueso',
          'Saca la pulpa con cuchara',
          'Aplasta con tenedor hasta puré cremoso',
          'NO necesita cocción ni batidora',
          'Su textura natural es perfecta para bebés',
          'Sirve inmediatamente (se oxida y pone negro)'
        ],
        prepTime: '3 min',
        cookTime: '0 min'
      }
    },
    { 
      id: 'w4d2', weekNumber: 4, dayNumber: 2, 
      title: 'Aguacate + plátano', 
      description: 'Mezcla cremosa en merienda.', 
      foodGroup: 'Frutas', 
      specificFood: 'Aguacate + Plátano', 
      portionSize: '4-5 cucharadas', 
      frequency: '2 COMIDAS', 
      ageRange: '6-8', 
      mealProgression: '2 COMIDAS',
      recipe: {
        name: 'Crema de Aguacate y Plátano',
        ingredients: [
          'Cuarto de aguacate',
          'Cuarto de plátano'
        ],
        steps: [
          'Aplasta el aguacate con tenedor',
          'Aplasta el plátano',
          'Mezcla ambos hasta obtener crema homogénea',
          'Muy nutritiva y saciante'
        ],
        prepTime: '5 min',
        cookTime: '0 min'
      }
    },
    { 
      id: 'w4d3', weekNumber: 4, dayNumber: 3, 
      title: 'Nuevo: Cereales de arroz', 
      description: 'Añade cereales al puré de almuerzo.', 
      foodGroup: 'Cereales', 
      specificFood: 'Cereales de arroz', 
      portionSize: '1-2 cucharadas en el puré', 
      frequency: '2 COMIDAS', 
      ageRange: '6-8', 
      mealProgression: '2 COMIDAS',
      tips: JSON.stringify(['Añade cereales al puré del almuerzo', 'Espesa la consistencia', 'Sin gluten']),
      recipe: {
        name: 'Puré con Cereales de Arroz',
        ingredients: [
          'Puré de verduras (60g)',
          '1-2 cucharadas de cereales de arroz infantiles'
        ],
        steps: [
          'Prepara el puré de verduras como siempre',
          'Añade los cereales poco a poco',
          'Remueve bien hasta integrar',
          'Deja reposar 1 minuto para que espese',
          'Ajusta textura con agua si es muy espeso'
        ],
        prepTime: '2 min extra',
        cookTime: '0 min'
      }
    },
    { 
      id: 'w4d4', weekNumber: 4, dayNumber: 4, 
      title: 'Cereales con frutas', 
      description: 'Cereales también en la merienda.', 
      foodGroup: 'Cereales', 
      specificFood: 'Cereales + Frutas', 
      portionSize: '2-3 cucharadas', 
      frequency: '2 COMIDAS', 
      ageRange: '6-8', 
      mealProgression: '2 COMIDAS',
      recipe: {
        name: 'Papilla de Cereales y Frutas',
        ingredients: [
          'Papilla de frutas (50g)',
          '1 cucharada de cereales de arroz'
        ],
        steps: [
          'Prepara la papilla de frutas',
          'Añade cereales y remueve',
          'Queda más espesa y nutritiva'
        ],
        prepTime: '2 min',
        cookTime: '0 min'
      }
    },
    { 
      id: 'w4d5', weekNumber: 4, dayNumber: 5, 
      title: 'Nuevo: Melocotón', 
      description: 'Melocotón en merienda.', 
      foodGroup: 'Frutas', 
      specificFood: 'Melocotón', 
      portionSize: '3-4 cucharadas', 
      frequency: '2 COMIDAS', 
      ageRange: '6-8', 
      mealProgression: '2 COMIDAS',
      recipe: {
        name: 'Compota de Melocotón',
        ingredients: [
          '1 melocotón maduro',
          '1 cucharada de agua'
        ],
        steps: [
          'Escalda el melocotón 30 seg en agua hirviendo',
          'Pela con facilidad',
          'Quita el hueso',
          'Tritura o cocina con agua 5 min',
          'El melocotón es hidratante y dulce'
        ],
        prepTime: '5 min',
        cookTime: '5 min'
      }
    },
    { 
      id: 'w4d6', weekNumber: 4, dayNumber: 6, 
      title: 'Puré completo con cereales', 
      description: 'Puré de verduras con cereales en almuerzo.', 
      foodGroup: 'Mixto', 
      specificFood: 'Verduras + Cereales', 
      portionSize: '60-70g', 
      frequency: '2 COMIDAS', 
      ageRange: '6-8', 
      mealProgression: '2 COMIDAS',
      recipe: {
        name: 'Puré Completo con Cereales',
        ingredients: [
          '40g de patata',
          '30g de calabacín',
          '20g de zanahoria',
          '2 cucharadas de cereales de arroz'
        ],
        steps: [
          'Cocina las verduras al vapor',
          'Tritura hasta puré suave',
          'Añade cereales y remueve',
          'Comida muy completa y nutritiva'
        ],
        prepTime: '15 min',
        cookTime: '25 min'
      }
    },
    { 
      id: 'w4d7', weekNumber: 4, dayNumber: 7, 
      title: 'Resumen mes 1', 
      description: '¡Primer mes completado! Rutina de 2 comidas establecida.', 
      foodGroup: 'Mixto', 
      specificFood: 'Variedad', 
      portionSize: 'Almuerzo: 60-70g / Merienda: 50-60g', 
      frequency: '2 COMIDAS', 
      ageRange: '6-8', 
      mealProgression: '2 COMIDAS',
      tips: JSON.stringify(['Alimentos introducidos: calabacín, calabaza, zanahoria, patata, judías, puerro, pera, manzana, plátano, aguacate, melocotón, cereales arroz', 'Próximo: introducir proteínas']),
      recipe: {
        name: 'Ejemplo de Menú Semanal',
        ingredients: [
          'Verduras: calabacín, calabaza, zanahoria, patata, judías, puerro',
          'Frutas: pera, manzana, plátano, aguacate, melocotón',
          'Cereales: arroz'
        ],
        steps: [
          'Puedes congelar purés en cubitos',
          'Descongela solo lo necesario',
          'Varía las combinaciones',
          'El bebé ya tiene rutina de 2 comidas'
        ],
        prepTime: 'varios',
        cookTime: 'varios'
      }
    }
  )

  // SEMANA 5 - Proteínas
  steps.push(
    { 
      id: 'w5d1', weekNumber: 5, dayNumber: 1, 
      title: '¡PROTEÍNAS! Pollo en almuerzo', 
      description: 'Introducimos pollo en el puré del almuerzo. Continúa con fruta en merienda.', 
      foodGroup: 'Proteínas', 
      specificFood: 'Pollo', 
      portionSize: '20-30g de pollo', 
      frequency: '2 COMIDAS', 
      ageRange: '6-8', 
      mealProgression: '2 COMIDAS: Almuerzo con proteína + Merienda con fruta',
      tips: JSON.stringify(['Pechuga sin piel ni huesos', 'Bien cocida y triturada', 'Mezcla con verduras del almuerzo']),
      recipe: {
        name: 'Puré de Pollo con Verduras',
        ingredients: [
          '30g de pechuga de pollo',
          '50g de verduras (patata, zanahoria, calabacín)',
          'Agua o caldo sin sal'
        ],
        steps: [
          'Corta el pollo en trozos pequeños',
          'Cocina el pollo al vapor o hervido 15-20 min',
          'Asegúrate de que esté muy bien cocido',
          'Cocina las verduras aparte',
          'Tritura pollo y verduras juntos',
          'Añade agua o caldo para textura suave',
          'NO añadas sal'
        ],
        prepTime: '10 min',
        cookTime: '20 min'
      }
    },
    { 
      id: 'w5d2', weekNumber: 5, dayNumber: 2, 
      title: 'Pollo + verduras', 
      description: 'Puré de pollo con verduras en almuerzo.', 
      foodGroup: 'Proteínas', 
      specificFood: 'Pollo + Verduras', 
      portionSize: '30-40g pollo + 50g verduras', 
      frequency: '2 COMIDAS', 
      ageRange: '6-8', 
      mealProgression: '2 COMIDAS',
      recipe: {
        name: 'Crema de Pollo y Verduras',
        ingredients: [
          '40g de pechuga de pollo',
          '40g de patata',
          '30g de calabacín',
          '20g de zanahoria'
        ],
        steps: [
          'Cocina el pollo 20 min hasta muy tierno',
          'Cocina las verduras al vapor',
          'Tritura todo junto con agua de cocción',
          'Proporción: 1 parte pollo, 2 partes verduras'
        ],
        prepTime: '15 min',
        cookTime: '25 min'
      }
    },
    { 
      id: 'w5d3', weekNumber: 5, dayNumber: 3, 
      title: 'Nuevo: Cereales de maíz', 
      description: 'Cereales de maíz (sin gluten).', 
      foodGroup: 'Cereales', 
      specificFood: 'Maíz', 
      portionSize: '1-2 cucharadas', 
      frequency: '2 COMIDAS', 
      ageRange: '6-8', 
      mealProgression: '2 COMIDAS',
      recipe: {
        name: 'Papilla de Cereales de Maíz',
        ingredients: [
          '2 cucharadas de cereales de maíz infantiles',
          'Leche materna, fórmula o agua'
        ],
        steps: [
          'Mezcla cereales con líquido tibio',
          'Remueve hasta obtener papilla homogénea',
          'Deja reposar 1 minuto',
          'El maíz es naturalmente dulce'
        ],
        prepTime: '2 min',
        cookTime: '0 min'
      }
    },
    { 
      id: 'w5d4', weekNumber: 5, dayNumber: 4, 
      title: 'Nuevo: Ternera', 
      description: 'Ternera en el almuerzo.', 
      foodGroup: 'Proteínas', 
      specificFood: 'Ternera', 
      portionSize: '20-30g', 
      frequency: '2 COMIDAS', 
      ageRange: '6-8', 
      mealProgression: '2 COMIDAS',
      recipe: {
        name: 'Puré de Ternera con Verduras',
        ingredients: [
          '30g de carne de ternera magra',
          '50g de verduras variadas',
          'Agua'
        ],
        steps: [
          'Usa carne magra sin grasa (lomo o babilla)',
          'Corta en trozos pequeños',
          'Cocina la carne 20-25 min hasta muy tierna',
          'Cocina las verduras aparte',
          'Tritura todo junto muy bien',
          'La ternera es rica en hierro, importante para bebés'
        ],
        prepTime: '10 min',
        cookTime: '25 min'
      }
    },
    { 
      id: 'w5d5', weekNumber: 5, dayNumber: 5, 
      title: 'Ternera + verduras', 
      description: 'Puré de ternera con verduras.', 
      foodGroup: 'Proteínas', 
      specificFood: 'Ternera + Verduras', 
      portionSize: '30-40g + 50g', 
      frequency: '2 COMIDAS', 
      ageRange: '6-8', 
      mealProgression: '2 COMIDAS',
      recipe: {
        name: 'Puré de Ternera con Patata y Zanahoria',
        ingredients: [
          '40g de ternera magra',
          '40g de patata',
          '30g de zanahoria'
        ],
        steps: [
          'Cocina la ternera hasta muy tierna',
          'Cocina patata y zanahoria al vapor',
          'Tritura todo con agua de cocción',
          'Comida muy nutritiva rica en hierro'
        ],
        prepTime: '15 min',
        cookTime: '25 min'
      }
    },
    { 
      id: 'w5d6', weekNumber: 5, dayNumber: 6, 
      title: 'Nuevo: Avena', 
      description: 'Avena en papilla (contiene gluten).', 
      foodGroup: 'Cereales', 
      specificFood: 'Avena', 
      portionSize: '1-2 cucharadas', 
      frequency: '2 COMIDAS', 
      ageRange: '6-8', 
      mealProgression: '2 COMIDAS',
      warnings: JSON.stringify(['Contiene gluten - observa reacciones digestivas']),
      recipe: {
        name: 'Papilla de Avena con Frutas',
        ingredients: [
          '2 cucharadas de copos de avena finos',
          'Papilla de frutas (50g)',
          'Agua o leche'
        ],
        steps: [
          'Cocina la avena con agua o leche 5 min',
          'Remueve hasta que espese',
          'Deja enfriar ligeramente',
          'Mezcla con la papilla de frutas',
          'Vigila posibles reacciones al gluten'
        ],
        prepTime: '5 min',
        cookTime: '5 min'
      }
    },
    { 
      id: 'w5d7', weekNumber: 5, dayNumber: 7, 
      title: 'Resumen semana 5', 
      description: 'Ya comes proteínas en el almuerzo. 2 comidas al día consolidadas.', 
      foodGroup: 'Mixto', 
      specificFood: 'Variedad con proteínas', 
      portionSize: 'Almuerzo: 70-80g / Merienda: 50-60g', 
      frequency: '2 COMIDAS', 
      ageRange: '6-8', 
      mealProgression: '2 COMIDAS',
      recipe: {
        name: 'Menú con Proteínas',
        ingredients: [
          'Proteínas: pollo, ternera',
          'Verduras: patata, zanahoria, calabacín, judías',
          'Frutas: pera, manzana, plátano, aguacate',
          'Cereales: arroz, maíz, avena'
        ],
        steps: [
          'Alterna pollo y ternera durante la semana',
          'El pescado viene próximamente',
          'La proteína aumenta saciedad'
        ],
        prepTime: 'varios',
        cookTime: 'varios'
      }
    }
  )

  // SEMANA 6 - Añadimos CENA (3 comidas)
  steps.push(
    { 
      id: 'w6d1', weekNumber: 6, dayNumber: 1, 
      title: '¡TERCERA COMIDA! Cena ligera', 
      description: 'Añadimos una CENA ligera. Ahora son 3 comidas: DESAYUNO papilla, ALMUERZO puré con proteína, CENA puré ligero.', 
      foodGroup: 'Mixto', 
      specificFood: 'Papilla de cereales', 
      portionSize: 'Desayuno: 50g / Almuerzo: 80g / Cena: 50g', 
      frequency: '3 COMIDAS', 
      ageRange: '6-8', 
      mealProgression: '3 COMIDAS: Desayuno (papilla) + Almuerzo (puré proteína) + Cena (puré ligero)',
      breastmilkNote: 'Mantén 3-4 tomas de leche. Ahora las sólidas son más importantes.',
      tips: JSON.stringify(['Desayuno (8:00): papilla de cereales con fruta', 'Almuerzo (12:30): puré con proteína y verduras', 'Cena (19:00): puré ligero de verduras', 'Leche entre comidas y antes de dormir']),
      recipe: {
        name: 'Menú de 3 Comidas',
        ingredients: [
          'DESAYUNO: Cereales + fruta',
          'ALMUERZO: Pollo/ternera + verduras',
          'CENA: Puré de verduras ligero'
        ],
        steps: [
          'Desayuno: Papilla de cereales con pera o plátano',
          'Almuerzo: Puré de pollo con patata y zanahoria',
          'Cena: Puré suave de calabacín y patata (sin proteína)',
          'Ofrece leche después de cada comida'
        ],
        prepTime: '30 min total',
        cookTime: '40 min total'
      }
    },
    { 
      id: 'w6d2', weekNumber: 6, dayNumber: 2, 
      title: 'Nuevo: Brócoli', 
      description: 'Brócoli en el almuerzo o cena.', 
      foodGroup: 'Verduras', 
      specificFood: 'Brócoli', 
      portionSize: '3-4 cucharadas', 
      frequency: '3 COMIDAS', 
      ageRange: '6-8', 
      mealProgression: '3 COMIDAS',
      tips: JSON.stringify(['Cocinar muy bien hasta que esté muy tierno', 'Triturar completamente']),
      recipe: {
        name: 'Puré de Brócoli con Patata',
        ingredients: [
          '50g de brócoli (solo los floretes)',
          '40g de patata',
          'Agua'
        ],
        steps: [
          'Lava el brócoli y separa los floretes',
          'Pela y corta la patata',
          'Cocina ambos al vapor 15-20 min',
          'El brócoli debe estar muy tierno',
          'Tritura hasta eliminar todos los grumos',
          'Mezcla con patata para suavizar el sabor'
        ],
        prepTime: '10 min',
        cookTime: '20 min'
      }
    },
    { 
      id: 'w6d3', weekNumber: 6, dayNumber: 3, 
      title: 'Nuevo: Coliflor', 
      description: 'Coliflor en puré.', 
      foodGroup: 'Verduras', 
      specificFood: 'Coliflor', 
      portionSize: '3-4 cucharadas', 
      frequency: '3 COMIDAS', 
      ageRange: '6-8', 
      mealProgression: '3 COMIDAS',
      recipe: {
        name: 'Crema de Coliflor',
        ingredients: [
          '60g de coliflor',
          '40g de patata',
          'Agua'
        ],
        steps: [
          'Lava y separa los floretes de coliflor',
          'Cocina al vapor 15-20 min hasta muy tierna',
          'Tritura con patata cocida',
          'Textura suave y cremosa'
        ],
        prepTime: '10 min',
        cookTime: '20 min'
      }
    },
    { 
      id: 'w6d4', weekNumber: 6, dayNumber: 4, 
      title: 'Nuevo: Espinacas', 
      description: 'Espinacas bien cocidas.', 
      foodGroup: 'Verduras', 
      specificFood: 'Espinacas', 
      portionSize: '2-3 cucharadas', 
      frequency: '3 COMIDAS', 
      ageRange: '6-8', 
      mealProgression: '3 COMIDAS',
      tips: JSON.stringify(['Ricas en hierro', 'Mezclar con otras verduras']),
      recipe: {
        name: 'Puré de Espinacas con Patata',
        ingredients: [
          '40g de espinacas frescas',
          '50g de patata',
          'Agua'
        ],
        steps: [
          'Lava muy bien las espinacas',
          'Quita los tallos duros',
          'Cocina al vapor 10-12 min',
          'Cocina la patata aparte',
          'Tritura todo junto',
          'Las espinacas son ricas en hierro'
        ],
        prepTime: '10 min',
        cookTime: '20 min'
      }
    },
    { 
      id: 'w6d5', weekNumber: 6, dayNumber: 5, 
      title: 'Nuevo: Pavo', 
      description: 'Pavo en el almuerzo.', 
      foodGroup: 'Proteínas', 
      specificFood: 'Pavo', 
      portionSize: '30-40g', 
      frequency: '3 COMIDAS', 
      ageRange: '6-8', 
      mealProgression: '3 COMIDAS',
      recipe: {
        name: 'Puré de Pavo con Verduras',
        ingredients: [
          '40g de pechuga de pavo',
          '50g de verduras variadas',
          'Agua'
        ],
        steps: [
          'Cocina el pavo 18-20 min hasta muy tierno',
          'Cocina las verduras aparte',
          'Tritura todo junto',
          'El pavo es carne muy magra y suave'
        ],
        prepTime: '10 min',
        cookTime: '25 min'
      }
    },
    { 
      id: 'w6d6', weekNumber: 6, dayNumber: 6, 
      title: 'Nuevo: Naranja', 
      description: 'Gajos de naranja sin pepitas.', 
      foodGroup: 'Frutas', 
      specificFood: 'Naranja', 
      portionSize: 'Medio gajo o 2-3 cucharadas', 
      frequency: '3 COMIDAS', 
      ageRange: '6-8', 
      mealProgression: '3 COMIDAS',
      tips: JSON.stringify(['Vitamina C ayuda a absorber hierro', 'Ideal en el desayuno o merienda']),
      recipe: {
        name: 'Zumo de Naranja Natural',
        ingredients: [
          'Media naranja'
        ],
        steps: [
          'Exprime media naranja manualmente',
          'Cuela para quitar pepitas y pulpa',
          'Diluye con un poco de agua si es muy ácido',
          'La vitamina C ayuda a absorber el hierro de las verduras',
          'Ideal en el desayuno con cereales'
        ],
        prepTime: '3 min',
        cookTime: '0 min'
      }
    },
    { 
      id: 'w6d7', weekNumber: 6, dayNumber: 7, 
      title: 'Resumen: 3 comidas al día', 
      description: 'Rutina completa de 3 comidas establecida.', 
      foodGroup: 'Mixto', 
      specificFood: 'Dieta variada', 
      portionSize: 'Desayuno: 50-60g / Almuerzo: 80-100g / Cena: 60-70g', 
      frequency: '3 COMIDAS', 
      ageRange: '6-8', 
      mealProgression: '3 COMIDAS completas',
      tips: JSON.stringify(['Desayuno: cereales + fruta', 'Almuerzo: proteína + verduras + cereales', 'Cena: verduras + cereales', 'Leche: 3-4 tomas aún']),
      recipe: {
        name: 'Ejemplo de Menú con 3 Comidas',
        ingredients: [
          'DESAYUNO: Cereales con zumo de naranja',
          'ALMUERZO: Pollo con patata, zanahoria y espinacas',
          'CENA: Puré suave de calabacín y patata'
        ],
        steps: [
          'Desayuno 8:00: Papilla de cereales + zumo naranja',
          'Almuerzo 12:30: Puré de pollo con verduras',
          'Cena 19:00: Puré ligero de verduras',
          'Leche antes de dormir'
        ],
        prepTime: 'varios',
        cookTime: 'varios'
      }
    }
  )

  // SEMANAS 7-8: 3 comidas consolidadas, introducimos pescado
  const foods6_8_extra = [
    { food: 'Mandarina', group: 'Frutas', tip: 'Sin pepitas, gajos pequeños', recipe: { name: 'Gajos de Mandarina', ingredients: ['1 mandarina pequeña'], steps: ['Pela la mandarina', 'Separa los gajos', 'Quita las pepitas', 'Cada gajo en trocitos pequeños'] }},
    { food: 'Merluza', group: 'Pescados', tip: 'Primer pescado blanco, sin espinas', recipe: { name: 'Puré de Merluza con Verduras', ingredients: ['40g de merluza fresca', '50g de patata', '30g de zanahoria'], steps: ['Cocina la merluza al vapor 10-12 min', 'Verifica que no tenga espinas', 'Cocina las verduras', 'Tritura todo junto', 'El pescado blanco es suave y digestivo'] }},
    { food: 'Lenguado', group: 'Pescados', tip: 'Pescado blanco suave', recipe: { name: 'Puré de Lenguado', ingredients: ['40g de lenguado', '50g de verduras'], steps: ['Cocina el lenguado al vapor', 'Quita piel y espinas', 'Tritura con verduras cocidas', 'Pescado muy suave'] }},
    { food: 'Arroz', group: 'Cereales', tip: 'Bien cocido, en puré o cremoso', recipe: { name: 'Crema de Arroz con Verduras', ingredients: ['30g de arroz', '50g de verduras', 'Agua'], steps: ['Lava el arroz', 'Cocina 20-25 min hasta muy blando', 'Tritura con verduras', 'Puede quedar algo de textura granulada'] }},
    { food: 'Fideos finos', group: 'Cereales', tip: 'Muy cocidos, trocitos pequeños', recipe: { name: 'Puré de Fideos con Pollo', ingredients: ['30g de fideos finos', '40g de pollo', 'Verduras'], steps: ['Cocina los fideos 12-15 min hasta muy blandos', 'Cocina pollo y verduras', 'Tritura todo junto', 'Los fideos aportan carbohidratos'] }},
    { food: 'Acelgas', group: 'Verduras', tip: 'Bien cocidas, solo hojas', recipe: { name: 'Puré de Acelgas', ingredients: ['50g de acelgas (hojas)', '40g de patata'], steps: ['Lava las acelgas', 'Usa solo las hojas, no los tallos', 'Cocina 15 min', 'Tritura con patata cocida'] }},
    { food: 'Chirivía', group: 'Verduras', tip: 'Sabor dulce, como zanahoria', recipe: { name: 'Puré de Chirivía', ingredients: ['60g de chirivía', '30g de patata'], steps: ['Pela la chirivía', 'Corta y cocina 20 min', 'Tritura con patata', 'Sabor dulce similar a zanahoria'] }},
  ]

  for (let week = 7; week <= 8; week++) {
    for (let day = 1; day <= 7; day++) {
      const foodIndex = (week - 7) * 7 + day - 1
      const foodItem = foods6_8_extra[foodIndex % foods6_8_extra.length]
      steps.push({
        id: `w${week}d${day}`,
        weekNumber: week,
        dayNumber: day,
        title: `${foodItem.food} - 3 comidas`,
        description: `${foodItem.food}. ${foodItem.tip}. Rutina de 3 comidas consolidada.`,
        foodGroup: foodItem.group,
        specificFood: foodItem.food,
        portionSize: 'Desayuno: 60g / Almuerzo: 100g / Cena: 70g',
        frequency: '3 COMIDAS',
        ageRange: '6-8',
        mealProgression: '3 COMIDAS',
        tips: JSON.stringify([foodItem.tip, 'Alternar proteínas: pollo, ternera, pavo, pescado', 'Pescado 2-3 veces por semana']),
        recipe: foodItem.recipe
      })
    }
  }

  // ===== MESES 8-10: EXPLORACIÓN (Semanas 9-17) =====
  const foods8_10 = [
    { food: 'Huevo (yema)', group: 'Proteínas', tip: 'Solo yema bien cocida al principio', recipe: { name: 'Puré con Yema de Huevo', ingredients: ['1 yema de huevo', 'Puré de verduras (60g)'], steps: ['Hierve el huevo 10-12 min hasta muy cocido', 'Separa la yema de la clara', 'Aplasta la yema con tenedor', 'Mezcla con el puré de verduras', 'Introduce yema primero, clara más tarde'] }},
    { food: 'Huevo (completo)', group: 'Proteínas', tip: 'Tras tolerar yema, introducir clara', recipe: { name: 'Tortilla Francesa Blanda', ingredients: ['1 huevo pequeño'], steps: ['Bate el huevo entero', 'Cocina en sartén con poco aceite', 'Debe quedar muy cocida, no líquida', 'Corta en trocitos pequeños o tritura'] }},
    { food: 'Yogur natural', group: 'Lácteos', tip: 'Sin azúcar, natural entero', recipe: { name: 'Yogur con Frutas', ingredients: ['Medio yogur natural entero', 'Fruta triturada'], steps: ['Usa yogur natural sin azúcar', 'Mezcla con fruta triturada', 'Ideal para merienda', 'Aporta calcio y probióticos'] }},
    { food: 'Queso fresco', group: 'Lácteos', tip: 'Bajo en sal, trocitos blandos', recipe: { name: 'Queso Fresco con Fruta', ingredients: ['30g de queso fresco tipo Burgos', 'Fruta troceada'], steps: ['Corta el queso en cubitos muy pequeños', 'Asegúrate que es bajo en sal', 'Sirve con fruta o en el puré', 'Puede aplastarse si prefiere'] }},
    { food: 'Lentejas', group: 'Legumbres', tip: 'Bien cocidas, en puré o cremoso', recipe: { name: 'Crema de Lentejas', ingredients: ['40g de lentejas', '30g de zanahoria', '30g de patata'], steps: ['Lava las lentejas', 'Cocina con verduras 30-40 min', 'Deben quedar muy tiernas', 'Tritura hasta puré suave', 'Ricas en hierro vegetal'] }},
    { food: 'Garbanzos', group: 'Legumbres', tip: 'En puré o hummus muy suave', recipe: { name: 'Crema de Garbanzos', ingredients: ['40g de garbanzos cocidos', 'Un poco de aceite de oliva'], steps: ['Usa garbanzos ya cocidos', 'Aplasta con tenedor o tritura', 'Añade un chorrito de aceite de oliva', 'Puedes añadir verduras trituradas'] }},
    { food: 'Arroz integral', group: 'Cereales', tip: 'Más fibra, bien cocido', recipe: { name: 'Arroz Integral con Verduras', ingredients: ['30g de arroz integral', 'Verduras variadas'], steps: ['Lava el arroz', 'Cocina 25-30 min hasta muy tierno', 'Tritura con verduras', 'Más nutritivo que el blanco'] }},
    { food: 'Pan (sin sal)', group: 'Cereales', tip: 'Puede masticar trocitos blandos', recipe: { name: 'Pan con Puré', ingredients: ['Trozo de pan del día anterior', 'Puré o papilla'], steps: ['Usa pan sin sal añadida', 'Moja en el puré para ablandar', 'Deja que el bebé lo agarre', 'Fomenta la masticación'] }},
    { food: 'Pasta pequeña', group: 'Cereales', tip: 'Muy cocida, formatos pequeños', recipe: { name: 'Pasta con Verduras Trituradas', ingredients: ['30g de pasta pequeña (estrellas, letras)', 'Verduras cocidas'], steps: ['Cocina la pasta 12-15 min hasta muy tierna', 'No quede al dente, muy blanda', 'Mezcla con verduras trituradas', 'Los formatos pequeños son más seguros'] }},
    { food: 'Piña', group: 'Frutas', tip: 'Trozos pequeños, sin centro duro', recipe: { name: 'Piña Troceada', ingredients: ['Trozos de piña madura'], steps: ['Usa piña bien madura', 'Quita el centro duro', 'Corta en trocitos muy pequeños', 'Puede ser un poco ácida, introduce poco a poco'] }},
    { food: 'Sandía', group: 'Frutas', tip: 'Sin pepitas, trocitos', recipe: { name: 'Trozos de Sandía', ingredients: ['Sandía sin pepitas'], steps: ['Quita todas las pepitas', 'Corta en trocitos pequeños', 'Muy hidratante para días calurosos', 'Textura suave'] }},
    { food: 'Melón', group: 'Frutas', tip: 'Hidratante y dulce', recipe: { name: 'Melón en Trozos', ingredients: ['Melón maduro'], steps: ['Pela el melón', 'Quita las pepitas', 'Corta en trocitos', 'Dulce y refrescante'] }},
    { food: 'Albaricoque', group: 'Frutas', tip: 'Maduro, sin hueso', recipe: { name: 'Compota de Albaricoque', ingredients: ['2 albaricoques maduros'], steps: ['Lava y parte los albaricoques', 'Quita el hueso', 'Cocina con poca agua 8 min', 'Tritura hasta puré'] }},
    { food: 'Ciruela', group: 'Frutas', tip: 'Madura, sin hueso', recipe: { name: 'Compota de Ciruela', ingredients: ['2 ciruelas maduras'], steps: ['Pela y quita el hueso', 'Cocina con agua 8-10 min', 'Tritura bien', 'Ayuda al tránsito intestinal'] }},
  ]

  for (let week = 9; week <= 17; week++) {
    for (let day = 1; day <= 7; day++) {
      const foodIndex = (week - 9) * 7 + day - 1
      const foodItem = foods8_10[foodIndex % foods8_10.length]
      steps.push({
        id: `w${week}d${day}`,
        weekNumber: week,
        dayNumber: day,
        title: `${foodItem.food} - Exploración`,
        description: `${foodItem.tip}. Texturas más gruesas. El bebé puede agarrar trocitos.`,
        foodGroup: foodItem.group,
        specificFood: foodItem.food,
        portionSize: 'Desayuno: 80g / Almuerzo: 120g / Cena: 100g',
        frequency: '3 COMIDAS + 1 SNACK opcional',
        ageRange: '8-10',
        mealProgression: '3 COMIDAS + snack',
        tips: JSON.stringify([foodItem.tip, 'Texturas más gruesas', 'Fomentar autoalimentación', 'Puede agarrar trozos blandos']),
        recipe: foodItem.recipe
      })
    }
  }

  // ===== MESES 10-12: TRANSICIÓN (Semanas 18-26) =====
  const foods10_12 = [
    { food: 'Salmón', group: 'Pescados', tip: 'Rico en omega-3, bien cocido', recipe: { name: 'Salmón con Verduras', ingredients: ['40g de salmón fresco', 'Verduras al vapor'], steps: ['Cocina el salmón al vapor 10-12 min', 'Desmenuza verificando espinas', 'Sirve con verduras', 'Rico en omega-3 para el cerebro'] }},
    { food: 'Atún fresco', group: 'Pescados', tip: 'No enlatado por sal', recipe: { name: 'Atún a la Plancha', ingredients: ['40g de atún fresco'], steps: ['Cocina el atún a la plancha', 'Debe quedar bien cocido', 'Desmenuza en trocitos', 'Sirve con verduras'] }},
    { food: 'Sardinas', group: 'Pescados', tip: 'Sin espinas, ricas en calcio', recipe: { name: 'Sardinas con Pan', ingredients: ['2 sardinas frescas pequeñas', 'Pan'], steps: ['Asa las sardinas', 'Quita cabeza, espinas y piel', 'Desmenuza la carne', 'Sirve con pan o en puré'] }},
    { food: 'Cordero tierno', group: 'Proteínas', tip: 'Carne suave, bien cocida', recipe: { name: 'Puré de Cordero', ingredients: ['40g de carne de cordero tierna', 'Verduras'], steps: ['Cocina el cordero hasta muy tierno', 'Tritura con verduras', 'Carne más grasa, dar con moderación'] }},
    { food: 'Cerdo (lomo)', group: 'Proteínas', tip: 'Magro, bien cocido', recipe: { name: 'Lomo de Cerdo con Verduras', ingredients: ['40g de lomo de cerdo', 'Verduras variadas'], steps: ['Cocina el lomo bien hecho', 'Tritura con verduras', 'Carne magra y tierna'] }},
    { food: 'Tofu', group: 'Proteínas', tip: 'Textura suave, versátil', recipe: { name: 'Tofu con Verduras', ingredients: ['50g de tofu blando', 'Verduras'], steps: ['Escurre el tofu', 'Corta en cubitos pequeños', 'Puede servirse crudo o cocinado', 'Aporta proteína vegetal'] }},
    { food: 'Judiones/Alubias', group: 'Legumbres', tip: 'Bien cocidas, aplastadas', recipe: { name: 'Puré de Alubias', ingredients: ['40g de alubias cocidas', 'Verduras'], steps: ['Cocina las alubias hasta muy tiernas', 'Aplasta o tritura ligeramente', 'Mezcla con verduras'] }},
    { food: 'Quinoa', group: 'Cereales', tip: 'Proteína completa', recipe: { name: 'Quinoa con Verduras', ingredients: ['30g de quinoa', 'Verduras variadas'], steps: ['Lava bien la quinoa', 'Cocina 15-20 min', 'Mezcla con verduras', 'Aporta proteína completa'] }},
    { food: 'Cuscús', group: 'Cereales', tip: 'Fácil de preparar y comer', recipe: { name: 'Cuscús con Verduras', ingredients: ['30g de cuscús', 'Caldo de verduras', 'Verduras'], steps: ['Hierve caldo de verduras', 'Vierte sobre el cuscús', 'Tapar 5 min', 'Mezcla con verduras troceadas'] }},
    { food: 'Remolacha', group: 'Verduras', tip: 'Colorida, cocida y troceada', recipe: { name: 'Ensalada de Remolacha', ingredients: ['Remolacha cocida'], steps: ['Cocina la remolacha 45-60 min', 'Pela y corta en cubitos', 'Mancha mucho, cuidado con la ropa', 'Dulce y colorida'] }},
    { food: 'Pimiento rojo', group: 'Verduras', tip: 'Bien cocido, sin piel', recipe: { name: 'Pimientos Asados', ingredients: ['Pimiento rojo'], steps: ['Asa el pimiento hasta piel negra', 'Pela bajo agua fría', 'Quita semillas', 'Corta en tiras o trocitos'] }},
    { food: 'Berenjena', group: 'Verduras', tip: 'Suave cuando muy cocida', recipe: { name: 'Crema de Berenjena', ingredients: ['Berenjena', 'Otras verduras'], steps: ['Asa o cocina la berenjena 30 min', 'Debe quedar muy tierna', 'Tritura con otras verduras', 'Sabor suave cuando bien cocida'] }},
    { food: 'Guisantes', group: 'Verduras', tip: 'Aplastados para evitar atragante', recipe: { name: 'Puré de Guisantes', ingredients: ['Guisantes frescos o congelados'], steps: ['Cocina los guisantes 10-12 min', 'Aplasta con tenedor', 'No dar enteros', 'Dulces y nutritivos'] }},
    { food: 'Maíz dulce', group: 'Verduras', tip: 'Aplastado, no entero', recipe: { name: 'Crema de Maíz', ingredients: ['Maíz dulce'], steps: ['Usa maíz cocido', 'Tritura bien', 'No dar granos enteros', 'Pueden atragantar'] }},
  ]

  for (let week = 18; week <= 26; week++) {
    for (let day = 1; day <= 7; day++) {
      const foodIndex = (week - 18) * 7 + day - 1
      const foodItem = foods10_12[foodIndex % foods10_12.length]
      steps.push({
        id: `w${week}d${day}`,
        weekNumber: week,
        dayNumber: day,
        title: `${foodItem.food} - Transición`,
        description: `${foodItem.tip}. Comidas familiares adaptadas. Menos puré, más trozos.`,
        foodGroup: foodItem.group,
        specificFood: foodItem.food,
        portionSize: 'Desayuno: 100g / Almuerzo: 150g / Cena: 120g',
        frequency: '3 COMIDAS + 2 SNACKS',
        ageRange: '10-12',
        mealProgression: '3 COMIDAS + 2 snacks',
        tips: JSON.stringify([foodItem.tip, 'Ofrecer trozos para agarrar', 'Comidas familiares adaptadas', 'Menos puré, más textura', 'Snacks: fruta, yogur, trocitos de pan']),
        recipe: foodItem.recipe
      })
    }
  }

  // ===== MESES 12-18: CONSOLIDACIÓN (Semanas 27-52) =====
  const foods12_18 = [
    { food: 'Fresas', group: 'Frutas', tip: 'Lavar bien, trocitos', recipe: { name: 'Fresas Troceadas', ingredients: ['Fresas frescas'], steps: ['Lava muy bien las fresas', 'Quita el tallo', 'Corta en trocitos pequeños', 'Dulces y ricas en vitamina C'] }},
    { food: 'Arándanos', group: 'Frutas', tip: 'Antioxidantes, trocear', recipe: { name: 'Arándanos con Yogur', ingredients: ['Arándanos', 'Yogur natural'], steps: ['Lava los arándanos', 'Aplasta ligeramente o corta', 'Mezcla con yogur', 'Ricos en antioxidantes'] }},
    { food: 'Cerezas', group: 'Frutas', tip: 'Sin hueso, troceadas', recipe: { name: 'Cerezas sin Hueso', ingredients: ['Cerezas maduras'], steps: ['Lava las cerezas', 'Quita el hueso con deshuesador', 'Corta en trocitos', 'Dulces y jugosas'] }},
    { food: 'Uvas (CUARTOS)', group: 'Frutas', tip: 'PELIGRO: siempre cortar en cuartos', recipe: { name: 'Uvas en Cuartos', ingredients: ['Uvas'], steps: ['Lava las uvas', 'PELIGRO DE ATRAGANTAMIENTO', 'CORTA SIEMPRE EN CUARTOS longitudinalmente', 'Nunca dar uvas enteras'] }},
    { food: 'Kiwi', group: 'Frutas', tip: 'Maduro, vitamina C', recipe: { name: 'Kiwi Troceado', ingredients: ['Medio kiwi maduro'], steps: ['Pela el kiwi', 'Corta en trocitos pequeños', 'Rico en vitamina C', 'Puede ser un poco ácido'] }},
    { food: 'Mango', group: 'Frutas', tip: 'Maduro, troceado', recipe: { name: 'Mango en Cubos', ingredients: ['Medio mango maduro'], steps: ['Pela el mango', 'Corta la pulpa en cubos', 'Dulce y cremoso', 'Uno de los favoritos'] }},
    { food: 'Papaya', group: 'Frutas', tip: 'Digestiva y dulce', recipe: { name: 'Papaya Troceada', ingredients: ['Papaya madura'], steps: ['Pela y quita pepitas', 'Corta en cubos', 'Muy digestiva', 'Ayuda al tránsito intestinal'] }},
    { food: 'Miel (12m+)', group: 'Otros', tip: 'Solo después de 12 meses', recipe: { name: 'Tostada con Miel', ingredients: ['Pan', 'Miel'], steps: ['Solo después de cumplir 12 meses', 'Antes hay riesgo de botulismo', 'Unta fina capa en pan', 'Mejor en el desayuno'] }},
    { food: 'Crema de cacahuete', group: 'Proteínas', tip: 'Capa fina, vigilar alergia', recipe: { name: 'Pan con Crema de Cacahuete', ingredients: ['Pan', 'Crema de cacahuete 100%'], steps: ['Usa crema de cacahuete sin azúcar', 'Unta capa muy fina', 'Vigilar reacción alérgica', 'Primer alimento potencialmente alergénico'] }},
    { food: 'Frutos secos triturados', group: 'Otros', tip: 'Solo bien triturados en preparaciones', recipe: { name: 'Yogur con Nueces Trituradas', ingredients: ['Yogur', 'Nueces molidas'], steps: ['Tritura las nueces muy fino', 'Mezcla con yogur o papilla', 'NUNCA dar enteros', 'Riesgo de atragantamiento'] }},
  ]

  for (let week = 27; week <= 52; week++) {
    for (let day = 1; day <= 7; day++) {
      const foodIndex = (week - 27) * 7 + day - 1
      const foodItem = foods12_18[foodIndex % foods12_18.length]
      steps.push({
        id: `w${week}d${day}`,
        weekNumber: week,
        dayNumber: day,
        title: `${foodItem.food} - Consolidación`,
        description: `${foodItem.tip}. Dieta variada y casi completa.`,
        foodGroup: foodItem.group,
        specificFood: foodItem.food,
        portionSize: 'Desayuno: 150g / Almuerzo: 200g / Cena: 150g',
        frequency: '3 COMIDAS + 2 SNACKS',
        ageRange: '12-18',
        mealProgression: '3 COMIDAS + 2 snacks',
        tips: JSON.stringify([foodItem.tip, 'Dieta cada vez más variada', 'Puede comer casi todo lo de la familia', 'Vigilar sal y azúcar añadidos']),
        recipe: foodItem.recipe
      })
    }
  }

  // ===== MESES 18-24: MADUREZ (Semanas 53-104) =====
  const foods18_24 = [
    { food: 'Dieta familiar completa', group: 'Mixto', tip: 'Adaptar solo sal y azúcar', recipe: { name: 'Menú Familiar Adaptado', ingredients: ['Lo que come la familia'], steps: ['Prepara la comida familiar', 'Separa la porción del bebé ANTES de añadir sal', 'Trocea en tamaño apropiado', 'Verifica temperatura'] }},
    { food: 'Ensaladas variadas', group: 'Verduras', tip: 'Trozos pequeños', recipe: { name: 'Ensalada Mixta', ingredients: ['Lechuga', 'Tomate', 'Pepino', 'Zanahoria rallada'], steps: ['Lava todo muy bien', 'Corta en trozos pequeños', 'Mezcla con un poco de aceite', 'Sin sal añadida'] }},
    { food: 'Sopas y cremas', group: 'Verduras', tip: 'Nutritivas y reconfortantes', recipe: { name: 'Sopa de Verduras', ingredients: ['Verduras variadas', 'Fideos pequeños', 'Caldo'], steps: ['Prepara caldo de verduras casero', 'Añade fideos pequeños', 'Incluye verduras troceadas', 'Servir tibio'] }},
    { food: 'Platos combinados', group: 'Mixto', tip: 'Proteína + verdura + carbohidrato', recipe: { name: 'Plato Completo', ingredients: ['Proteína (carne/pescado/legumbres)', 'Verdura', 'Arroz/pasta/patata'], steps: ['Incluye los 3 grupos en cada comida', 'Un tercio de cada uno', 'Varía los ingredientes', 'Comida equilibrada'] }},
    { food: 'Bocadillos saludables', group: 'Mixto', tip: 'Pan integral con opciones nutritivas', recipe: { name: 'Bocadillo de Queso y Tomate', ingredients: ['Pan integral', 'Queso bajo en sal', 'Tomate'], steps: ['Usa pan integral', 'Pon queso en láminas finas', 'Añade tomate en rodajas', 'Bocadillo nutritivo'] }},
    { food: 'Batidos caseros', group: 'Frutas', tip: 'Sin azúcar añadido', recipe: { name: 'Batido de Frutas', ingredients: ['Plátano', 'Fresas', 'Leche'], steps: ['Tritura las frutas', 'Añade leche', 'Mezcla bien', 'Sin azúcar añadido'] }},
    { food: 'Postres caseros', group: 'Otros', tip: 'Ocasionales y caseros', recipe: { name: 'Galletas Caseras', ingredients: ['Harina', 'Plátano maduro', 'Aceite'], steps: ['Aplasta el plátano', 'Mezcla con harina y aceite', 'Forma galletas', 'Hornea 15 min a 180°C'] }},
  ]

  for (let week = 53; week <= 104; week++) {
    for (let day = 1; day <= 7; day++) {
      const foodIndex = (week - 53) * 7 + day - 1
      const foodItem = foods18_24[foodIndex % foods18_24.length]
      steps.push({
        id: `w${week}d${day}`,
        weekNumber: week,
        dayNumber: day,
        title: `${foodItem.food} - Madurez`,
        description: `${foodItem.tip}. Dieta completa similar a la familia.`,
        foodGroup: foodItem.group,
        specificFood: foodItem.food,
        portionSize: 'Porciones familiares adaptadas',
        frequency: '3 COMIDAS + 2 SNACKS',
        ageRange: '18-24',
        mealProgression: '3 COMIDAS + 2 snacks (dieta completa)',
        tips: JSON.stringify([foodItem.tip, 'Dieta casi igual que adultos', 'Evitar exceso de sal y azúcar', 'Fomentar autonomía en la comida']),
        recipe: foodItem.recipe
      })
    }
  }

  return steps
}

export const introStepsData: IntroStep[] = generateSteps()

// Función para filtrar por rango de edad
export function filterByAgeRange(steps: IntroStep[], ageRange: string): IntroStep[] {
  return steps.filter(step => step.ageRange === ageRange)
}

// Función para obtener rangos de edad disponibles
export function getAvailableAgeRanges(): { value: string; label: string; description: string }[] {
  return [
    { value: '6-8', label: '6-8 meses', description: 'Iniciación (1→3 comidas)' },
    { value: '8-10', label: '8-10 meses', description: 'Exploración (3 comidas + snacks)' },
    { value: '10-12', label: '10-12 meses', description: 'Transición (3 comidas + 2 snacks)' },
    { value: '12-18', label: '12-18 meses', description: 'Consolidación' },
    { value: '18-24', label: '18-24 meses', description: 'Madurez' },
  ]
}

// Función para agrupar por semana
export function groupStepsByWeek(steps: IntroStep[]): Record<number, IntroStep[]> {
  return steps.reduce((acc, step) => {
    if (!acc[step.weekNumber]) {
      acc[step.weekNumber] = []
    }
    acc[step.weekNumber].push(step)
    return acc
  }, {} as Record<number, IntroStep[]>)
}

// Función para obtener el número total de semanas por rango de edad
export function getWeeksByAgeRange(ageRange: string): { start: number; end: number } {
  const ranges: Record<string, { start: number; end: number }> = {
    '6-8': { start: 1, end: 8 },
    '8-10': { start: 9, end: 17 },
    '10-12': { start: 18, end: 26 },
    '12-18': { start: 27, end: 52 },
    '18-24': { start: 53, end: 104 },
  }
  return ranges[ageRange] || { start: 1, end: 8 }
}
