import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Limpiar datos existentes
  await prisma.recipeIngredient.deleteMany()
  await prisma.recipe.deleteMany()
  await prisma.introStep.deleteMany()
  await prisma.breastfeedingGuide.deleteMany()
  await prisma.ingredient.deleteMany()
  await prisma.foodCategory.deleteMany()
  await prisma.ageStage.deleteMany()

  // Crear etapas de edad
  const ageStages = await Promise.all([
    prisma.ageStage.create({
      data: {
        name: '6-8 meses',
        minMonths: 6,
        maxMonths: 8,
        description: 'Etapa de iniciación. Comienza la alimentación complementaria con purés muy suaves y líquidos. Un alimento nuevo cada 3-4 días.',
      },
    }),
    prisma.ageStage.create({
      data: {
        name: '8-10 meses',
        minMonths: 8,
        maxMonths: 10,
        description: 'Etapa de exploración. Texturas más gruesas y nuevos sabores. Introducción de proteínas y alérgenos.',
      },
    }),
    prisma.ageStage.create({
      data: {
        name: '10-12 meses',
        minMonths: 10,
        maxMonths: 12,
        description: 'Etapa de transición. Comidas más sólidas y troceadas. Preparación para comida familiar.',
      },
    }),
  ])

  console.log('✅ Etapas de edad creadas')

  // Crear categorías de alimentos
  const categories = await Promise.all([
    prisma.foodCategory.create({
      data: {
        name: 'Frutas',
        description: 'Frutas frescas y naturales',
        icon: '🍎',
        color: '#FF6B6B',
      },
    }),
    prisma.foodCategory.create({
      data: {
        name: 'Verduras',
        description: 'Verduras y hortalizas',
        icon: '🥕',
        color: '#4ECDC4',
      },
    }),
    prisma.foodCategory.create({
      data: {
        name: 'Proteínas',
        description: 'Carnes, pescados y legumbres',
        icon: '🍗',
        color: '#FFE66D',
      },
    }),
    prisma.foodCategory.create({
      data: {
        name: 'Cereales',
        description: 'Cereales y derivados',
        icon: '🌾',
        color: '#95E1D3',
      },
    }),
    prisma.foodCategory.create({
      data: {
        name: 'Lácteos',
        description: 'Productos lácteos',
        icon: '🥛',
        color: '#F38181',
      },
    }),
  ])

  console.log('✅ Categorías creadas')

  // Crear ingredientes con semana de introducción
  const ingredients = await Promise.all([
    // VERDURAS - Semanas 1-2 (primeras en introducir)
    prisma.ingredient.create({
      data: {
        name: 'Calabacín',
        categoryId: categories[1].id,
        isAllergen: false,
        minAgeMonths: 6,
        introWeek: 1,
        introOrder: 1,
        description: 'Verdura suave y digestiva, ideal para empezar',
        nutritionalInfo: 'Vitamina C, Potasio, Fibra',
      },
    }),
    prisma.ingredient.create({
      data: {
        name: 'Calabaza',
        categoryId: categories[1].id,
        isAllergen: false,
        minAgeMonths: 6,
        introWeek: 1,
        introOrder: 2,
        description: 'Dulce y suave, ideal para bebés',
        nutritionalInfo: 'Vitamina A, Fibra, Potasio',
      },
    }),
    prisma.ingredient.create({
      data: {
        name: 'Zanahoria',
        categoryId: categories[1].id,
        isAllergen: false,
        minAgeMonths: 6,
        introWeek: 1,
        introOrder: 3,
        description: 'Dulce y rica en betacarotenos',
        nutritionalInfo: 'Vitamina A, Fibra, Antioxidantes',
      },
    }),
    prisma.ingredient.create({
      data: {
        name: 'Patata',
        categoryId: categories[1].id,
        isAllergen: false,
        minAgeMonths: 6,
        introWeek: 2,
        introOrder: 1,
        description: 'Base para muchos purés',
        nutritionalInfo: 'Carbohidratos, Vitamina C, Potasio',
      },
    }),
    prisma.ingredient.create({
      data: {
        name: 'Judías verdes',
        categoryId: categories[1].id,
        isAllergen: false,
        minAgeMonths: 6,
        introWeek: 2,
        introOrder: 2,
        description: 'Verdura tierna y suave',
        nutritionalInfo: 'Vitamina K, Fibra, Vitamina C',
      },
    }),
    prisma.ingredient.create({
      data: {
        name: 'Puerro',
        categoryId: categories[1].id,
        isAllergen: false,
        minAgeMonths: 6,
        introWeek: 2,
        introOrder: 3,
        description: 'Sabor suave, ideal para caldos',
        nutritionalInfo: 'Vitamina K, Vitamina C, Folato',
      },
    }),
    // FRUTAS - Semanas 3-4
    prisma.ingredient.create({
      data: {
        name: 'Pera',
        categoryId: categories[0].id,
        isAllergen: false,
        minAgeMonths: 6,
        introWeek: 3,
        introOrder: 1,
        description: 'Muy digestiva y dulce naturalmente',
        nutritionalInfo: 'Fibra, Vitamina C, Potasio',
      },
    }),
    prisma.ingredient.create({
      data: {
        name: 'Manzana',
        categoryId: categories[0].id,
        isAllergen: false,
        minAgeMonths: 6,
        introWeek: 3,
        introOrder: 2,
        description: 'Suave y digestiva, ideal para empezar',
        nutritionalInfo: 'Vitamina C, Fibra, Antioxidantes',
      },
    }),
    prisma.ingredient.create({
      data: {
        name: 'Plátano',
        categoryId: categories[0].id,
        isAllergen: false,
        minAgeMonths: 6,
        introWeek: 3,
        introOrder: 3,
        description: 'Rico en potasio y energía',
        nutritionalInfo: 'Potasio, Vitamina B6, Fibra',
      },
    }),
    prisma.ingredient.create({
      data: {
        name: 'Aguacate',
        categoryId: categories[0].id,
        isAllergen: false,
        minAgeMonths: 6,
        introWeek: 4,
        introOrder: 1,
        description: 'Rico en grasas saludables',
        nutritionalInfo: 'Grasas monoinsaturadas, Vitamina E, Fibra',
      },
    }),
    prisma.ingredient.create({
      data: {
        name: 'Melocotón',
        categoryId: categories[0].id,
        isAllergen: false,
        minAgeMonths: 6,
        introWeek: 4,
        introOrder: 2,
        description: 'Dulce y refrescante',
        nutritionalInfo: 'Vitamina C, Vitamina A, Fibra',
      },
    }),
    // CEREALES - Semana 4-5
    prisma.ingredient.create({
      data: {
        name: 'Arroz',
        categoryId: categories[3].id,
        isAllergen: false,
        minAgeMonths: 6,
        introWeek: 4,
        introOrder: 3,
        description: 'Cereal suave, ideal para empezar (sin gluten)',
        nutritionalInfo: 'Carbohidratos, Vitaminas B',
      },
    }),
    prisma.ingredient.create({
      data: {
        name: 'Maíz',
        categoryId: categories[3].id,
        isAllergen: false,
        minAgeMonths: 6,
        introWeek: 5,
        introOrder: 1,
        description: 'Cereal sin gluten',
        nutritionalInfo: 'Carbohidratos, Fibra, Vitamina B',
      },
    }),
    prisma.ingredient.create({
      data: {
        name: 'Avena',
        categoryId: categories[3].id,
        isAllergen: false,
        minAgeMonths: 6,
        introWeek: 5,
        introOrder: 2,
        description: 'Rica en fibra y energía (puede contener gluten por contaminación cruzada)',
        nutritionalInfo: 'Fibra, Proteínas, Hierro',
      },
    }),
    // PROTEÍNAS - Semanas 5-6
    prisma.ingredient.create({
      data: {
        name: 'Pollo',
        categoryId: categories[2].id,
        isAllergen: false,
        minAgeMonths: 6,
        introWeek: 5,
        introOrder: 3,
        description: 'Proteína suave y digestible',
        nutritionalInfo: 'Proteínas, Vitamina B6, Niacina',
      },
    }),
    prisma.ingredient.create({
      data: {
        name: 'Ternera',
        categoryId: categories[2].id,
        isAllergen: false,
        minAgeMonths: 6,
        introWeek: 6,
        introOrder: 1,
        description: 'Rica en hierro y zinc',
        nutritionalInfo: 'Hierro, Zinc, Proteínas, Vitamina B12',
      },
    }),
    prisma.ingredient.create({
      data: {
        name: 'Conejo',
        categoryId: categories[2].id,
        isAllergen: false,
        minAgeMonths: 6,
        introWeek: 6,
        introOrder: 2,
        description: 'Carne magra y digestible',
        nutritionalInfo: 'Proteínas, Vitamina B12, Hierro',
      },
    }),
    // Ingredientes para 8+ meses
    prisma.ingredient.create({
      data: {
        name: 'Guisantes',
        categoryId: categories[1].id,
        isAllergen: false,
        minAgeMonths: 8,
        description: 'Ricos en proteínas vegetales',
        nutritionalInfo: 'Proteínas, Fibra, Vitamina K',
      },
    }),
    prisma.ingredient.create({
      data: {
        name: 'Brócoli',
        categoryId: categories[1].id,
        isAllergen: false,
        minAgeMonths: 8,
        description: 'Rico en vitaminas y fibra',
        nutritionalInfo: 'Vitamina C, Vitamina K, Fibra',
      },
    }),
    prisma.ingredient.create({
      data: {
        name: 'Espinacas',
        categoryId: categories[1].id,
        isAllergen: false,
        minAgeMonths: 8,
        description: 'Ricas en hierro',
        nutritionalInfo: 'Hierro, Vitamina K, Ácido fólico',
      },
    }),
    prisma.ingredient.create({
      data: {
        name: 'Pescado blanco',
        categoryId: categories[2].id,
        isAllergen: true,
        minAgeMonths: 8,
        description: 'Merluza, lenguado o pescadilla. Introducir con cuidado por posible alergia',
        nutritionalInfo: 'Proteínas, Omega-3, Vitamina D',
      },
    }),
    prisma.ingredient.create({
      data: {
        name: 'Lentejas',
        categoryId: categories[2].id,
        isAllergen: false,
        minAgeMonths: 8,
        description: 'Legumbre rica en hierro y fibra',
        nutritionalInfo: 'Hierro, Proteínas, Fibra, Ácido fólico',
      },
    }),
    prisma.ingredient.create({
      data: {
        name: 'Huevo',
        categoryId: categories[2].id,
        isAllergen: true,
        minAgeMonths: 8,
        description: 'Introducir primero la yema, luego la clara. Vigilar alergias',
        nutritionalInfo: 'Proteínas, Vitamina D, Colina',
      },
    }),
    prisma.ingredient.create({
      data: {
        name: 'Pan',
        categoryId: categories[3].id,
        isAllergen: true,
        minAgeMonths: 8,
        description: 'Contiene gluten, introducir con cuidado',
        nutritionalInfo: 'Carbohidratos, Fibra',
      },
    }),
    prisma.ingredient.create({
      data: {
        name: 'Pasta',
        categoryId: categories[3].id,
        isAllergen: true,
        minAgeMonths: 8,
        description: 'Contiene gluten, ideal para texturas más sólidas',
        nutritionalInfo: 'Carbohidratos, Fibra',
      },
    }),
    prisma.ingredient.create({
      data: {
        name: 'Yogur natural',
        categoryId: categories[4].id,
        isAllergen: true,
        minAgeMonths: 8,
        description: 'Introducir yogures sin azúcar añadido',
        nutritionalInfo: 'Calcio, Proteínas, Probióticos',
      },
    }),
    prisma.ingredient.create({
      data: {
        name: 'Queso fresco',
        categoryId: categories[4].id,
        isAllergen: true,
        minAgeMonths: 8,
        description: 'Queso tipo burgos o requesón',
        nutritionalInfo: 'Calcio, Proteínas',
      },
    }),
    prisma.ingredient.create({
      data: {
        name: 'Mango',
        categoryId: categories[0].id,
        isAllergen: false,
        minAgeMonths: 8,
        description: 'Dulce y rico en vitaminas',
        nutritionalInfo: 'Vitamina A, Vitamina C, Fibra',
      },
    }),
  ])

  console.log('✅ Ingredientes creados con semanas de introducción')

  // Crear guía de introducción paso a paso - SEMANA 1
  const introSteps = []
  
  // SEMANA 1 - Verduras suaves (primeros 7 días)
  const week1Steps = [
    {
      weekNumber: 1,
      dayNumber: 1,
      title: '¡Primer día de alimentación complementaria!',
      description: 'Hoy comienza una nueva etapa. Ofrece tu primera cucharada de puré de calabacín. Solo 2-3 cucharaditas es suficiente.',
      foodGroup: 'Verduras',
      specificFood: 'Calabacín',
      portionSize: '2-3 cucharaditas (10-15g)',
      frequency: 'Una sola comida (almuerzo)',
      breastmilkNote: 'Continúa con la lactancia materna a demanda. El puré es COMPLEMENTARIO, no sustituye ninguna toma de leche.',
      tips: JSON.stringify([
        'Elige un momento tranquilo, cuando el bebé esté despierto y contento',
        'Siéntalo en una silla alta o en tu regazo',
        'Usa una cuchara pequeña de plástico o silicona suave',
        'No te preocupes si escupe la comida, es normal',
        'Puede que solo acepte 1-2 cucharadas el primer día'
      ]),
      warnings: JSON.stringify([
        'No añadas sal ni azúcar',
        'La textura debe ser muy líquida, casi como una sopa',
        'Observa si hay alguna reacción alérgica en las próximas 24-48 horas'
      ]),
      ageStageId: ageStages[0].id,
    },
    {
      weekNumber: 1,
      dayNumber: 2,
      title: 'Segundo día con calabacín',
      description: 'Continúa ofreciendo puré de calabacín. Aumenta ligeramente la cantidad si el bebé lo acepta.',
      foodGroup: 'Verduras',
      specificFood: 'Calabacín',
      portionSize: '3-4 cucharadas (20-30g)',
      frequency: 'Una comida (almuerzo)',
      breastmilkNote: 'La lactancia sigue siendo la fuente principal de nutrición. Ofrece el pecho antes o después del puré según prefiera tu bebé.',
      tips: JSON.stringify([
        'Intenta que el bebé abra la boca mostrándole la cuchara',
        'Habla suavemente y sonríe durante la comida',
        'No fuerces la comida, deja que el bebé marque el ritmo'
      ]),
      warnings: JSON.stringify([
        'Observa si hay sarpullidos, vómitos o diarrea',
        'Consulta al pediatra si notas algo inusual'
      ]),
      ageStageId: ageStages[0].id,
    },
    {
      weekNumber: 1,
      dayNumber: 3,
      title: 'Tercer día con calabacín',
      description: 'Último día de prueba con calabacín. Si todo va bien, mañana podrás introducir un nuevo alimento.',
      foodGroup: 'Verduras',
      specificFood: 'Calabacín',
      portionSize: '4-5 cucharadas (30-40g)',
      frequency: 'Una comida (almuerzo)',
      breastmilkNote: 'Mantén las tomas de pecho habituales. El bebé debe seguir recibiendo al menos 4-6 tomas de leche materna al día.',
      tips: JSON.stringify([
        'El bebé ya debería estar más acostumbrado a la cuchara',
        'Celebra cada pequeño progreso con sonrisas',
        'Puedes ofrecer el puré un poco más espeso si lo tolera bien'
      ]),
      warnings: JSON.stringify([
        'Si no ha habido reacciones adversas, el calabacín está aprobado',
        'Anota en tu diario cualquier observación importante'
      ]),
      ageStageId: ageStages[0].id,
    },
    {
      weekNumber: 1,
      dayNumber: 4,
      title: 'Nuevo alimento: Calabaza',
      description: 'Hoy introducimos la calabaza. Es dulce y suave, ideal para bebés. Prepara un puré solo de calabaza.',
      foodGroup: 'Verduras',
      specificFood: 'Calabaza',
      portionSize: '2-3 cucharadas (15-20g)',
      frequency: 'Una comida (almuerzo)',
      breastmilkNote: 'Amamanta a demanda. La leche materna sigue siendo el alimento principal.',
      tips: JSON.stringify([
        'La calabaza es naturalmente dulce, suele gustar mucho',
        'Cocina al vapor para conservar nutrientes',
        'Tritura muy bien hasta que no queden grumos'
      ]),
      warnings: JSON.stringify([
        'Es un alimento nuevo: observa durante 2-3 días',
        'No mezcles con otros alimentos nuevos todavía'
      ]),
      ageStageId: ageStages[0].id,
    },
    {
      weekNumber: 1,
      dayNumber: 5,
      title: 'Continúa con calabaza',
      description: 'Sigue probando la calabaza. El bebé se acostumbra a nuevos sabores.',
      foodGroup: 'Verduras',
      specificFood: 'Calabaza',
      portionSize: '3-4 cucharadas (25-35g)',
      frequency: 'Una comida (almuerzo)',
      breastmilkNote: 'Ofrece el pecho antes del puré para asegurar que reciba suficientes nutrientes de la leche.',
      tips: JSON.stringify([
        'Puedes mezclar un poco de calabacín del día anterior si quieres',
        'La consistencia debe ser suave pero no líquida',
        'Deja que el bebé toque la comida con las manos'
      ]),
      warnings: JSON.stringify([
        'Observa las heces del bebé, pueden cambiar de color',
        'La calabaza puede dar un tono anaranjado a las deposiciones'
      ]),
      ageStageId: ageStages[0].id,
    },
    {
      weekNumber: 1,
      dayNumber: 6,
      title: 'Último día de calabaza',
      description: 'Finalizamos la prueba de calabaza. Si todo está bien, mañana un nuevo alimento.',
      foodGroup: 'Verduras',
      specificFood: 'Calabaza',
      portionSize: '4-5 cucharadas (35-45g)',
      frequency: 'Una comida (almuerzo)',
      breastmilkNote: 'La lactancia materna proporciona anticuerpos que protegen al bebé mientras prueba nuevos alimentos.',
      tips: JSON.stringify([
        'El bebé puede empezar a mostrar preferencias',
        'No te preocupes si come más o menos un día',
        'Cada bebé tiene su propio ritmo'
      ]),
      warnings: JSON.stringify([
        'Si no ha habido reacciones, la calabaza está aprobada',
        'Añádela a tu lista de alimentos seguros'
      ]),
      ageStageId: ageStages[0].id,
    },
    {
      weekNumber: 1,
      dayNumber: 7,
      title: 'Nuevo alimento: Zanahoria',
      description: 'Introducimos la zanahoria, rica en vitamina A. Debe estar muy bien cocida y triturada.',
      foodGroup: 'Verduras',
      specificFood: 'Zanahoria',
      portionSize: '2-3 cucharadas (15-20g)',
      frequency: 'Una comida (almuerzo)',
      breastmilkNote: 'Continúa amamantando a demanda. La leche materna aporta grasas esenciales para la absorción de vitamina A.',
      tips: JSON.stringify([
        'La zanahoria tarda más en cocinarse, asegúrate de que esté muy blanda',
        'Su dulzor natural la hace atractiva para el bebé',
        'No añadas aceite todavía'
      ]),
      warnings: JSON.stringify([
        'La zanahoria puede causar estreñimiento en algunos bebés',
        'Observa si hay cambios en las deposiciones'
      ]),
      ageStageId: ageStages[0].id,
    },
  ]

  for (const step of week1Steps) {
    introSteps.push(await prisma.introStep.create({ data: step }))
  }

  // SEMANA 2 - Más verduras + patata
  const week2Steps = [
    {
      weekNumber: 2,
      dayNumber: 1,
      title: 'Continúa con zanahoria',
      description: 'Segundo día con zanahoria. Observa cómo responde el bebé.',
      foodGroup: 'Verduras',
      specificFood: 'Zanahoria',
      portionSize: '3-4 cucharadas (25-35g)',
      frequency: 'Una comida (almuerzo)',
      breastmilkNote: 'Ofrece el pecho después del puré para "cerrar" la comida. Es reconfortante para el bebé.',
      tips: JSON.stringify([
        'Puedes empezar a mezclar: zanahoria + calabacín',
        'Mezclar alimentos ya conocidos ayuda a aceptar nuevos sabores',
        'Proporción: 2 partes zanahoria, 1 parte calabacín'
      ]),
      warnings: JSON.stringify([
        'Solo mezcla alimentos ya probados y aprobados',
        'No introduzcas más de un alimento nuevo cada 3 días'
      ]),
      ageStageId: ageStages[0].id,
    },
    {
      weekNumber: 2,
      dayNumber: 2,
      title: 'Mezcla de verduras',
      description: 'Prueba una mezcla suave de verduras ya conocidas.',
      foodGroup: 'Verduras',
      specificFood: 'Calabacín + Calabaza + Zanahoria',
      portionSize: '5-6 cucharadas (40-50g)',
      frequency: 'Una comida (almuerzo)',
      breastmilkNote: 'Mantén al menos 4-5 tomas de leche materna al día.',
      tips: JSON.stringify([
        'Esta mezcla es nutritiva y colorida',
        'El bebé empieza a conocer diferentes sabores',
        'Puedes preparar más cantidad y congelar en cubitos'
      ]),
      warnings: JSON.stringify([
        'Descongela solo la cantidad necesaria',
        'No recalentar más de una vez'
      ]),
      ageStageId: ageStages[0].id,
    },
    {
      weekNumber: 2,
      dayNumber: 3,
      title: 'Nuevo alimento: Patata',
      description: 'Introducimos la patata, excelente base para purés.',
      foodGroup: 'Verduras',
      specificFood: 'Patata',
      portionSize: '2-3 cucharadas (20-30g)',
      frequency: 'Una comida (almuerzo)',
      breastmilkNote: 'La patata es muy saciante. Asegúrate de que el bebé siga tomando suficiente leche.',
      tips: JSON.stringify([
        'Cocina la patata al vapor o hervida',
        'Añade un poco de agua de cocción para obtener textura suave',
        'La patata puede quedar pegajosa si se bate mucho'
      ]),
      warnings: JSON.stringify([
        'No uses patatas verdes o con brotes',
        'Observa durante 2-3 días como con cualquier alimento nuevo'
      ]),
      ageStageId: ageStages[0].id,
    },
    {
      weekNumber: 2,
      dayNumber: 4,
      title: 'Patata + verduras',
      description: 'Mezcla patata con verduras ya conocidas.',
      foodGroup: 'Verduras',
      specificFood: 'Patata + Calabacín',
      portionSize: '4-5 cucharadas (35-45g)',
      frequency: 'Una comida (almuerzo)',
      breastmilkNote: 'La combinación de patata y leche materna proporciona energía sostenida.',
      tips: JSON.stringify([
        'La patata suaviza sabores más fuertes',
        'Es una buena forma de introducir verduras menos aceptadas',
        'El puré debe quedar cremoso, no grumoso'
      ]),
      warnings: JSON.stringify([
        'No añadas mantequilla ni leche de vaca',
        'La leche materna o fórmula es suficiente'
      ]),
      ageStageId: ageStages[0].id,
    },
    {
      weekNumber: 2,
      dayNumber: 5,
      title: 'Nuevo alimento: Judías verdes',
      description: 'Las judías verdes aportan fibra y vitaminas. Deben estar muy bien cocidas.',
      foodGroup: 'Verduras',
      specificFood: 'Judías verdes',
      portionSize: '2-3 cucharadas (15-20g)',
      frequency: 'Una comida (almuerzo)',
      breastmilkNote: 'Continúa con la lactancia a demanda. El bebé puede mostrar preferencia por el pecho antes de comer.',
      tips: JSON.stringify([
        'Quita las hebras y puntas antes de cocinar',
        'Cocina hasta que estén muy tiernas',
        'Tritura muy bien, pueden quedar hilos'
      ]),
      warnings: JSON.stringify([
        'Algunos bebés no aceptan el sabor al principio',
        'Mezcla con patata para suavizar'
      ]),
      ageStageId: ageStages[0].id,
    },
    {
      weekNumber: 2,
      dayNumber: 6,
      title: 'Mezcla completa de verduras',
      description: 'Prepara un puré con todas las verduras ya introducidas.',
      foodGroup: 'Verduras',
      specificFood: 'Mezcla de verduras',
      portionSize: '5-6 cucharadas (50-60g)',
      frequency: 'Una comida (almuerzo)',
      breastmilkNote: 'El bebé debe seguir recibiendo entre 500-600ml de leche materna al día.',
      tips: JSON.stringify([
        'Proporción: 2 partes patata, 1 parte otras verduras',
        'Varía las proporciones para diferentes sabores',
        'El bebé está aprendiendo a comer, celebra sus logros'
      ]),
      warnings: JSON.stringify([
        'Si notas rechazo hacia algún alimento, reintrodúcelo más tarde',
        'No fuerces nunca al bebé a comer'
      ]),
      ageStageId: ageStages[0].id,
    },
    {
      weekNumber: 2,
      dayNumber: 7,
      title: 'Puerro - nuevo sabor',
      description: 'El puerro aporta un sabor suave diferente. Ideal para caldos y purés.',
      foodGroup: 'Verduras',
      specificFood: 'Puerro',
      portionSize: '2-3 cucharadas (15-20g)',
      frequency: 'Una comida (almuerzo)',
      breastmilkNote: 'La lactancia materna aporta el 80-90% de los nutrientes necesarios a esta edad.',
      tips: JSON.stringify([
        'Usa solo la parte blanca, más suave',
        'El puerro da un sabor interesante a los purés',
        'Mezcla con patata para suavizar'
      ]),
      warnings: JSON.stringify([
        'Lava bien el puerro, puede tener tierra entre capas',
        'Cocina completamente para evitar irritación digestiva'
      ]),
      ageStageId: ageStages[0].id,
    },
  ]

  for (const step of week2Steps) {
    introSteps.push(await prisma.introStep.create({ data: step }))
  }

  // SEMANA 3 - FRUTAS
  const week3Steps = [
    {
      weekNumber: 3,
      dayNumber: 1,
      title: '¡Llegaron las frutas! - Pera',
      description: 'Introducimos la primera fruta: la pera. Dulce, digestiva y suave.',
      foodGroup: 'Frutas',
      specificFood: 'Pera',
      portionSize: '2-3 cucharadas (20-30g)',
      frequency: 'Una comida (puede ser merienda)',
      breastmilkNote: 'Puedes ofrecer fruta en la merienda y el puré de verduras en el almuerzo. Mantén la lactancia.',
      tips: JSON.stringify([
        'Usa peras maduras (variedad Conference o Blanquilla)',
        'Puedes ofrecerla cruda rallada o cocida en puré',
        'La pera es muy digestiva y suele gustar mucho'
      ]),
      warnings: JSON.stringify([
        'Observa si hay reacciones como en cualquier alimento nuevo',
        'La fruta cruda tiene más vitaminas pero cocida es más digestiva'
      ]),
      ageStageId: ageStages[0].id,
    },
    {
      weekNumber: 3,
      dayNumber: 2,
      title: 'Continúa con pera',
      description: 'El bebé se acostumbra al dulzor natural de la fruta.',
      foodGroup: 'Frutas',
      specificFood: 'Pera',
      portionSize: '3-4 cucharadas (30-40g)',
      frequency: 'Una comida (merienda)',
      breastmilkNote: 'Después de la fruta, ofrece el pecho. El bebé puede querer menos leche.',
      tips: JSON.stringify([
        'Varía entre pera cruda rallada y cocida',
        'Puedes añadir un poco de cereales de arroz para espesar',
        'La fruta es un excelente postre o merienda'
      ]),
      warnings: JSON.stringify([
        'No añadas azúcar ni miel',
        'La fruta ya es dulce naturalmente'
      ]),
      ageStageId: ageStages[0].id,
    },
    {
      weekNumber: 3,
      dayNumber: 3,
      title: 'Nuevo alimento: Manzana',
      description: 'La manzana es suave y versátil. Cocida es más digestiva al principio.',
      foodGroup: 'Frutas',
      specificFood: 'Manzana',
      portionSize: '2-3 cucharadas (20-30g)',
      frequency: 'Una comida (merienda)',
      breastmilkNote: 'La vitamina C de la manzana ayuda a absorber el hierro de la leche materna.',
      tips: JSON.stringify([
        'Usa manzanas tipo Golden o Reineta, más suaves',
        'Cocina al vapor con piel y luego retírala',
        'La manzana cocida es ideal para empezar'
      ]),
      warnings: JSON.stringify([
        'La manzana cruda puede ser difícil de digerir al principio',
        'Empieza con manzana cocida'
      ]),
      ageStageId: ageStages[0].id,
    },
    {
      weekNumber: 3,
      dayNumber: 4,
      title: 'Mezcla de frutas',
      description: 'Combina pera y manzana para una papilla deliciosa.',
      foodGroup: 'Frutas',
      specificFood: 'Pera + Manzana',
      portionSize: '4-5 cucharadas (40-50g)',
      frequency: 'Una comida (merienda)',
      breastmilkNote: 'Ahora el bebé tiene dos comidas al día: verduras (almuerzo) y frutas (merienda).',
      tips: JSON.stringify([
        'Mezcla mitad pera, mitad manzana',
        'Puedes triturar juntas o por separado',
        'Añade cereales de arroz si quieres más consistencia'
      ]),
      warnings: JSON.stringify([
        'No ofrezcas zumos, solo fruta triturada',
        'Los zumos no tienen fibra y pueden causar diarrea'
      ]),
      ageStageId: ageStages[0].id,
    },
    {
      weekNumber: 3,
      dayNumber: 5,
      title: 'Nuevo alimento: Plátano',
      description: 'El plátano es muy nutritivo y fácil de preparar. No necesita cocción.',
      foodGroup: 'Frutas',
      specificFood: 'Plátano',
      portionSize: 'Medio plátano pequeño triturado (30-40g)',
      frequency: 'Una comida (merienda)',
      breastmilkNote: 'El plátano es muy saciante. Asegúrate de que el bebé siga tomando leche.',
      tips: JSON.stringify([
        'Tritura con un tenedor, no necesita batidora',
        'El plátano maduro es más dulce y digestivo',
        'Se oxida rápido, prepáralo justo antes de darlo'
      ]),
      warnings: JSON.stringify([
        'El plátano puede estreñir si se da en exceso',
        'No des más de medio plátano al día'
      ]),
      ageStageId: ageStages[0].id,
    },
    {
      weekNumber: 3,
      dayNumber: 6,
      title: 'Papilla de tres frutas',
      description: 'Combina las tres frutas ya conocidas.',
      foodGroup: 'Frutas',
      specificFood: 'Pera + Manzana + Plátano',
      portionSize: '5-6 cucharadas (50-60g)',
      frequency: 'Una comida (merienda)',
      breastmilkNote: 'Esta papilla es muy nutritiva y energética. El bebé puede dormir mejor por las noches.',
      tips: JSON.stringify([
        'Proporción: 1/3 de cada fruta',
        'El plátano aporta cremosidad',
        'Puedes preparar y congelar en cubitos'
      ]),
      warnings: JSON.stringify([
        'El plátano congelado pierde textura, mejor fresco',
        'Descongela la mezcla de pera-manzana y añade plátano fresco'
      ]),
      ageStageId: ageStages[0].id,
    },
    {
      weekNumber: 3,
      dayNumber: 7,
      title: 'Resumen de la semana',
      description: 'El bebé ya conoce verduras y frutas básicas. Prueba diferentes combinaciones.',
      foodGroup: 'Mixto',
      specificFood: 'Combinaciones variadas',
      portionSize: 'Almuerzo: 50-60g verduras / Merienda: 50-60g frutas',
      frequency: 'Dos comidas al día',
      breastmilkNote: 'Mantén al menos 4-5 tomas de leche materna. La leche sigue siendo el alimento principal.',
      tips: JSON.stringify([
        'El bebé empieza a tener rutina: verduras al mediodía, frutas por la tarde',
        'Celebra que ya conoces muchos alimentos seguros',
        'Anota qué le gusta más al bebé'
      ]),
      warnings: JSON.stringify([
        'No introduzcas nuevos alimentos hoy',
        'Descansa y observa cómo ha evolucionado el bebé'
      ]),
      ageStageId: ageStages[0].id,
    },
  ]

  for (const step of week3Steps) {
    introSteps.push(await prisma.introStep.create({ data: step }))
  }

  // SEMANA 4 - Más frutas + cereales
  const week4Steps = [
    {
      weekNumber: 4,
      dayNumber: 1,
      title: 'Nuevo alimento: Aguacate',
      description: 'El aguacate es único: una fruta rica en grasas saludables.',
      foodGroup: 'Frutas',
      specificFood: 'Aguacate',
      portionSize: '2-3 cucharadas (20-30g)',
      frequency: 'Una comida (merienda)',
      breastmilkNote: 'Las grasas del aguacate son excelentes para el desarrollo cerebral, igual que la leche materna.',
      tips: JSON.stringify([
        'Tritura con un tenedor, textura cremosa natural',
        'El aguacate debe estar maduro pero no pasado',
        'Puedes mezclarlo con plátano para más dulzor'
      ]),
      warnings: JSON.stringify([
        'El aguacate se oxida muy rápido (se pone negro)',
        'Añade unas gotas de limón si vas a guardar un rato',
        'Sirve inmediatamente si es posible'
      ]),
      ageStageId: ageStages[0].id,
    },
    {
      weekNumber: 4,
      dayNumber: 2,
      title: 'Aguacate + frutas',
      description: 'Combina aguacate con otras frutas ya conocidas.',
      foodGroup: 'Frutas',
      specificFood: 'Aguacate + Plátano',
      portionSize: '4-5 cucharadas (40-50g)',
      frequency: 'Una comida (merienda)',
      breastmilkNote: 'Esta combinación es muy saciante. El bebé puede querer menos leche después.',
      tips: JSON.stringify([
        'Mezcla mitad aguacate, mitad plátano',
        'Es cremosa y nutritiva, ideal para el crecimiento',
        'El bebé puede necesitar menos cantidad por lo saciante'
      ]),
      warnings: JSON.stringify([
        'No ofrezcas demasiado aguacate de una vez',
        'Puede ser pesado si se combina con otros alimentos grasos'
      ]),
      ageStageId: ageStages[0].id,
    },
    {
      weekNumber: 4,
      dayNumber: 3,
      title: 'Nuevo alimento: Cereales de arroz',
      description: 'Los cereales de arroz (sin gluten) son ideales para espesar purés y papillas.',
      foodGroup: 'Cereales',
      specificFood: 'Cereales de arroz',
      portionSize: '1-2 cucharadas (5-10g) en el puré',
      frequency: 'Añadir al almuerzo o merienda',
      breastmilkNote: 'Puedes preparar los cereales con leche materna extraída para mayor aceptación.',
      tips: JSON.stringify([
        'Empieza con poca cantidad para que el bebé se acostumbre',
        'Espesan los purés y aportan energía',
        'El arroz no tiene gluten, es seguro'
      ]),
      warnings: JSON.stringify([
        'No uses cereales con gluten todavía (trigo, cebada, centeno)',
        'Los cereales de arroz son de digestión fácil'
      ]),
      ageStageId: ageStages[0].id,
    },
    {
      weekNumber: 4,
      dayNumber: 4,
      title: 'Cereales con frutas',
      description: 'Añade cereales de arroz a la papilla de frutas.',
      foodGroup: 'Cereales',
      specificFood: 'Cereales de arroz + Frutas',
      portionSize: '2-3 cucharadas de cereales en la papilla',
      frequency: 'Una comida (merienda)',
      breastmilkNote: 'Los cereales aportan energía extra. El bebé puede dormir más tiempo por la noche.',
      tips: JSON.stringify([
        'La papilla quedará más espesa',
        'Ajusta la textura añadiendo más o menos cereales',
        'Puedes usar agua, leche materna o fórmula para preparar'
      ]),
      warnings: JSON.stringify([
        'No añadas azúcar ni miel a los cereales',
        'El sabor natural de la fruta es suficiente'
      ]),
      ageStageId: ageStages[0].id,
    },
    {
      weekNumber: 4,
      dayNumber: 5,
      title: 'Nuevo alimento: Melocotón',
      description: 'El melocotón aporta un sabor dulce y refrescante.',
      foodGroup: 'Frutas',
      specificFood: 'Melocotón',
      portionSize: '2-3 cucharadas (20-30g)',
      frequency: 'Una comida (merienda)',
      breastmilkNote: 'El melocotón es hidratante. En días calurosos es especialmente bueno.',
      tips: JSON.stringify([
        'Usa melocotones maduros y jugosos',
        'Pela bien antes de triturar',
        'Combina bien con manzana o pera'
      ]),
      warnings: JSON.stringify([
        'Algunos bebés pueden ser alérgicos al melocotón (raro)',
        'Observa si hay reacciones en piel alrededor de la boca'
      ]),
      ageStageId: ageStages[0].id,
    },
    {
      weekNumber: 4,
      dayNumber: 6,
      title: 'Puré mixto con cereales',
      description: 'Prepara un puré de verduras con cereales de arroz.',
      foodGroup: 'Mixto',
      specificFood: 'Verduras + Cereales de arroz',
      portionSize: 'Almuerzo: 60-70g puré con cereales',
      frequency: 'Almuerzo completo',
      breastmilkNote: 'Este puré es muy completo. El bebé puede empezar a reducir una toma de leche.',
      tips: JSON.stringify([
        'Los cereales en el puré de verduras aportan saciedad',
        'El puré quedará más cremoso',
        'Es una comida muy nutritiva'
      ]),
      warnings: JSON.stringify([
        'No sustituyas todas las tomas de leche',
        'La leche materna sigue siendo esencial'
      ]),
      ageStageId: ageStages[0].id,
    },
    {
      weekNumber: 4,
      dayNumber: 7,
      title: 'Resumen del primer mes',
      description: '¡Felicidades! Has completado el primer mes de alimentación complementaria.',
      foodGroup: 'Mixto',
      specificFood: 'Variedad de alimentos seguros',
      portionSize: 'Almuerzo: 60-70g / Merienda: 50-60g',
      frequency: 'Dos comidas al día',
      breastmilkNote: 'La OMS recomienda continuar la lactancia materna hasta los 2 años o más, junto con alimentos complementarios.',
      tips: JSON.stringify([
        'Alimentos aprobados: calabacín, calabaza, zanahoria, patata, judías verdes, puerro, pera, manzana, plátano, aguacate, melocotón, cereales de arroz',
        'El bebé ya tiene una rutina establecida',
        'Próximamente: proteínas (pollo, ternera)'
      ]),
      warnings: JSON.stringify([
        'Aún no: huevo, pescado, lácteos, gluten, miel',
        'Continúa introduciendo un alimento nuevo cada 3 días'
      ]),
      ageStageId: ageStages[0].id,
    },
  ]

  for (const step of week4Steps) {
    introSteps.push(await prisma.introStep.create({ data: step }))
  }

  // SEMANA 5-6 - PROTEÍNAS
  const week5Steps = [
    {
      weekNumber: 5,
      dayNumber: 1,
      title: '¡Llegaron las proteínas! - Pollo',
      description: 'El pollo es la primera carne que introducimos. Suave y fácil de digerir.',
      foodGroup: 'Proteínas',
      specificFood: 'Pollo',
      portionSize: '20-30g de pollo en el puré',
      frequency: 'Una comida (almuerzo)',
      breastmilkNote: 'El hierro de la carne se absorbe mejor que el de las verduras. Combínalo con la lactancia.',
      tips: JSON.stringify([
        'Usa pechuga de pollo sin piel ni huesos',
        'Cuece bien y tritura con las verduras',
        'Empieza con poca cantidad para que acepte el sabor'
      ]),
      warnings: JSON.stringify([
        'La carne debe estar muy bien cocida',
        'Tritura completamente para evitar trozos',
        'No añadas sal'
      ]),
      ageStageId: ageStages[0].id,
    },
    {
      weekNumber: 5,
      dayNumber: 2,
      title: 'Puré de pollo con verduras',
      description: 'Combina pollo con las verduras ya conocidas.',
      foodGroup: 'Proteínas',
      specificFood: 'Pollo + Verduras',
      portionSize: '30-40g de pollo + 50g verduras',
      frequency: 'Una comida (almuerzo)',
      breastmilkNote: 'El pollo aumenta la saciedad. El bebé puede dormir mejor.',
      tips: JSON.stringify([
        'Proporción: 1 parte pollo, 2 partes verduras',
        'El puré debe quedar cremoso',
        'Puedes usar el caldo de cocción para triturar'
      ]),
      warnings: JSON.stringify([
        'El caldo de pollo puede ser salado, usa poca cantidad',
        'Mejor triturar con agua o leche materna'
      ]),
      ageStageId: ageStages[0].id,
    },
    {
      weekNumber: 5,
      dayNumber: 3,
      title: 'Nuevo cereal: Maíz',
      description: 'El maíz es otro cereal sin gluten, aporta variedad.',
      foodGroup: 'Cereales',
      specificFood: 'Maíz (harina o cereales)',
      portionSize: '1-2 cucharadas en el puré',
      frequency: 'Una comida',
      breastmilkNote: 'El maíz es energético pero bajo en proteínas. La leche materna complementa.',
      tips: JSON.stringify([
        'Usa harina de maíz o cereales de maíz',
        'Tiene un sabor ligeramente dulce',
        'Combina bien con verduras'
      ]),
      warnings: JSON.stringify([
        'El maíz no contiene gluten',
        'Es seguro para celíacos'
      ]),
      ageStageId: ageStages[0].id,
    },
    {
      weekNumber: 5,
      dayNumber: 4,
      title: 'Nuevo alimento: Ternera',
      description: 'La ternera es rica en hierro, esencial para el desarrollo.',
      foodGroup: 'Proteínas',
      specificFood: 'Ternera',
      portionSize: '20-30g de ternera en el puré',
      frequency: 'Una comida (almuerzo)',
      breastmilkNote: 'El hierro de la carne es de alta absorción. Importante junto con la lactancia.',
      tips: JSON.stringify([
        'Usa carne magra sin grasa',
        'Cuece hasta que esté muy tierna',
        'Tritura muy bien con las verduras'
      ]),
      warnings: JSON.stringify([
        'La ternera puede ser más pesada que el pollo',
        'No des todos los días, alterna con pollo'
      ]),
      ageStageId: ageStages[0].id,
    },
    {
      weekNumber: 5,
      dayNumber: 5,
      title: 'Alterna proteínas',
      description: 'Alterna entre pollo y ternera para variedad.',
      foodGroup: 'Proteínas',
      specificFood: 'Pollo o Ternera + Verduras',
      portionSize: '30-40g proteína + 50g verduras',
      frequency: 'Una comida (almuerzo)',
      breastmilkNote: 'Con las proteínas, el bebé necesita menos cantidad de leche, pero sigue siendo importante.',
      tips: JSON.stringify([
        'Días alternos: hoy pollo, mañana ternera',
        'El bebé desarrolla preferencias',
        'Observa cuál acepta mejor'
      ]),
      warnings: JSON.stringify([
        'No des más de 40g de carne al día',
        'El exceso de proteína puede sobrecargar los riñones'
      ]),
      ageStageId: ageStages[0].id,
    },
    {
      weekNumber: 5,
      dayNumber: 6,
      title: 'Nuevo alimento: Avena',
      description: 'La avena es nutritiva y rica en fibra. Introducir con precaución por posible gluten.',
      foodGroup: 'Cereales',
      specificFood: 'Avena',
      portionSize: '1-2 cucharadas en papilla',
      frequency: 'Una comida (desayuno o merienda)',
      breastmilkNote: 'La avena tradicionalmente se considera sin gluten, pero puede contaminarse. Usa avena certificada.',
      tips: JSON.stringify([
        'Usa avena certificada sin gluten si es posible',
        'Es muy nutritiva y saciante',
        'Combina bien con frutas'
      ]),
      warnings: JSON.stringify([
        'Algunos bebés sensibles al gluten pueden reaccionar',
        'Observa si hay cambios en las deposiciones'
      ]),
      ageStageId: ageStages[0].id,
    },
    {
      weekNumber: 5,
      dayNumber: 7,
      title: 'Resumen: 5 semanas completadas',
      description: 'El bebé ya come proteínas, verduras, frutas y cereales. ¡Gran progreso!',
      foodGroup: 'Mixto',
      specificFood: 'Dieta variada',
      portionSize: 'Almuerzo: 80-100g / Merienda: 60-70g',
      frequency: 'Dos comidas al día',
      breastmilkNote: 'Continúa la lactancia materna a demanda. El bebé necesita al menos 400-500ml de leche al día.',
      tips: JSON.stringify([
        'Próximos pasos: aumentar textura, introducir más proteínas',
        'El bebé está creciendo sano y fuerte',
        'Celebra cada logro'
      ]),
      warnings: JSON.stringify([
        'Aún evita: huevo, pescado, lácteos con lactosa, miel',
        'Consulta con tu pediatra sobre el ritmo de introducción'
      ]),
      ageStageId: ageStages[0].id,
    },
  ]

  for (const step of week5Steps) {
    introSteps.push(await prisma.introStep.create({ data: step }))
  }

  console.log('✅ Guía de introducción creada')

  // Crear guía de lactancia
  const breastfeedingGuides = await Promise.all([
    prisma.breastfeedingGuide.create({
      data: {
        ageMonths: 6,
        title: 'Inicio de la alimentación complementaria',
        description: 'La leche materna sigue siendo el alimento principal. Los purés son COMPLEMENTARIOS.',
        frequency: '4-6 tomas al día, a demanda',
        amount: 'Al menos 600-800ml de leche materna al día',
        tips: JSON.stringify([
          'Ofrece el pecho antes o después del puré, según prefiera tu bebé',
          'La lactancia a demanda asegura la producción de leche',
          'El bebé puede rechazar temporalmente el pecho al probar sabores nuevos, es normal',
          'Continúa las tomas nocturnas si el bebé las necesita'
        ]),
        importantNotes: JSON.stringify([
          'La OMS recomienda lactancia materna exclusiva los primeros 6 meses',
          'Continuar con lactancia hasta los 2 años o más junto con alimentos',
          'La leche materna aporta anticuerpos que protegen de enfermedades',
          'El hierro de la leche materna se absorbe mejor que el de fórmulas'
        ]),
      },
    }),
    prisma.breastfeedingGuide.create({
      data: {
        ageMonths: 7,
        title: 'Estableciendo rutinas',
        description: 'El bebé tiene 2 comidas al día. La leche sigue siendo fundamental.',
        frequency: '4-5 tomas al día',
        amount: '500-700ml de leche materna al día',
        tips: JSON.stringify([
          'Establece horarios regulares para las comidas',
          'Ofrece el pecho después de cada comida principal',
          'Las tomas nocturnas pueden reducirse gradualmente',
          'Si el bebé come bien, puede reducir una toma de día'
        ]),
        importantNotes: JSON.stringify([
          'No sustituyas tomas de pecho por agua o zumos',
          'El bebé necesita la grasa de la leche para su desarrollo cerebral',
          'La lactancia materna sigue aportando el 70% de las calorías necesarias'
        ]),
      },
    }),
    prisma.breastfeedingGuide.create({
      data: {
        ageMonths: 8,
        title: 'Tres comidas al día',
        description: 'El bebé puede empezar a tener desayuno, almuerzo y merienda.',
        frequency: '3-4 tomas al día',
        amount: '400-600ml de leche materna al día',
        tips: JSON.stringify([
          'Introduce el desayuno con cereales y frutas',
          'Mantén una toma por la mañana, otra por la tarde y otra antes de dormir',
          'El bebé puede empezar a beber agua en pequeño vaso',
          'Las tomas pueden ser más cortas pero siguen siendo importantes'
        ]),
        importantNotes: JSON.stringify([
          'A esta edad se pueden introducir yogur natural sin azúcar',
          'La leche de vaca NO debe darse como bebida principal hasta el año',
          'Continúa la lactancia para asegurar nutrientes y anticuerpos'
        ]),
      },
    }),
    prisma.breastfeedingGuide.create({
      data: {
        ageMonths: 10,
        title: 'Transición a comida familiar',
        description: 'El bebé come casi todo. La leche sigue siendo importante.',
        frequency: '3-4 tomas al día',
        amount: '350-500ml de leche materna al día',
        tips: JSON.stringify([
          'El bebé puede comer versiones suaves de la comida familiar',
          'Ofrece alimentos que pueda coger con las manos',
          'Las tomas de pecho pueden ser antes del desayuno y antes de dormir',
          'Mantén al menos una toma nocturna si el bebé la necesita'
        ]),
        importantNotes: JSON.stringify([
          'Nunca forzar al bebé a comer',
          'Respetar las señales de saciedad del bebé',
          'La leche materna sigue aportando nutrientes únicos'
        ]),
      },
    }),
    prisma.breastfeedingGuide.create({
      data: {
        ageMonths: 12,
        title: 'Primer cumpleaños',
        description: 'El bebé puede tomar leche de vaca, pero la leche materna sigue siendo beneficiosa.',
        frequency: '2-3 tomas al día (o a demanda)',
        amount: '300-400ml de leche (materna o de vaca) al día',
        tips: JSON.stringify([
          'Puedes introducir leche de vaca entera como bebida',
          'La lactancia materna puede continuar tanto como madre y bebé deseen',
          'Ofrece leche en vaso, no en biberón',
          'El bebé puede comer prácticamente de todo'
        ]),
        importantNotes: JSON.stringify([
          'Ahora SÍ puede tomar miel (antes prohibida por botulismo)',
          'La OMS recomienda continuar la lactancia hasta los 2 años o más',
          'La leche materna sigue aportando inmunidad y nutrientes'
        ]),
      },
    }),
  ])

  console.log('✅ Guías de lactancia creadas')

  // Crear recetas (versión resumida, las principales)
  // Recetas 6-8 meses
  const recipe1 = await prisma.recipe.create({
    data: {
      name: 'Puré de Calabacín (Primer puré)',
      description: 'El primer puré ideal para empezar la alimentación complementaria',
      ageStageId: ageStages[0].id,
      minAgeMonths: 6,
      prepTime: 5,
      cookTime: 15,
      servings: 4,
      instructions: JSON.stringify([
        'Lavar bien el calabacín (no hace falta pelarlo).',
        'Cortar en rodajas finas.',
        'Cocinar al vapor durante 12-15 minutos hasta que esté muy tierno.',
        'Triturar con batidora hasta obtener una crema muy suave.',
        'Añadir agua de cocción si es necesario para ajustar la textura.',
        'La textura debe ser casi líquida al principio.'
      ]),
      tips: JSON.stringify([
        'Primer día: solo 2-3 cucharaditas',
        'Ofrecer en el almuerzo, momento tranquilo del día',
        'No añadir sal ni aceite',
        'Puedes congelar en cubitos para futuras tomas'
      ]),
      nutritionalValue: 'Rico en agua, potasio y fácil digestión. Ideal para empezar.',
      mealType: 'almuerzo',
    },
  })

  const recipe2 = await prisma.recipe.create({
    data: {
      name: 'Puré de Verduras Mixto',
      description: 'Puré con varias verduras ya introducidas, nutritivo y suave',
      ageStageId: ageStages[0].id,
      minAgeMonths: 6,
      prepTime: 10,
      cookTime: 20,
      servings: 6,
      instructions: JSON.stringify([
        'Pelar y cortar 100g de patata en cubos.',
        'Cortar 50g de calabacín y 50g de zanahoria.',
        'Cocinar todo al vapor durante 20 minutos.',
        'Triturar hasta obtener una crema suave.',
        'Añadir agua de cocción para ajustar textura.'
      ]),
      tips: JSON.stringify([
        'Usar solo verduras ya probadas individualmente',
        'Proporción: 2 partes patata, 1 parte otras verduras',
        'No añadir sal'
      ]),
      nutritionalValue: 'Equilibrado en carbohidratos, vitaminas y fibra.',
      mealType: 'almuerzo',
    },
  })

  const recipe3 = await prisma.recipe.create({
    data: {
      name: 'Papilla de Frutas',
      description: 'Papilla con frutas ya introducidas, dulce naturalmente',
      ageStageId: ageStages[0].id,
      minAgeMonths: 6,
      prepTime: 5,
      cookTime: 0,
      servings: 1,
      instructions: JSON.stringify([
        'Pelar y triturar media pera.',
        'Pelar y rallar media manzana (o triturar si está cocida).',
        'Triturar medio plátano maduro.',
        'Mezclar todas las frutas.',
        'Añadir cereales de arroz si se desea más espeso.'
      ]),
      tips: JSON.stringify([
        'Ofrecer en la merienda',
        'El plátano aporta cremosidad',
        'No añadir azúcar ni miel'
      ]),
      nutritionalValue: 'Rica en vitaminas, potasio y energía natural.',
      mealType: 'merienda',
    },
  })

  const recipe4 = await prisma.recipe.create({
    data: {
      name: 'Puré de Pollo con Verduras',
      description: 'Primer puré con proteínas, introducido a partir de la semana 5',
      ageStageId: ageStages[0].id,
      minAgeMonths: 6,
      prepTime: 15,
      cookTime: 25,
      servings: 4,
      instructions: JSON.stringify([
        'Cortar 60g de pechuga de pollo en trocitos pequeños.',
        'Pelar y cortar 80g de patata y 40g de zanahoria.',
        'Cocer el pollo en agua sin sal durante 15 minutos.',
        'Añadir las verduras y cocer todo 15 minutos más.',
        'Triturar todo hasta conseguir una crema suave.',
        'Añadir agua de cocción para ajustar la textura.'
      ]),
      tips: JSON.stringify([
        'Introducir solo después de probar pollo solo durante 2-3 días',
        'El pollo debe estar muy bien cocido',
        'No añadir sal'
      ]),
      nutritionalValue: 'Alto en proteínas de alta calidad, hierro y zinc.',
      mealType: 'almuerzo',
    },
  })

  console.log('✅ Recetas creadas')

  // Añadir ingredientes a las recetas
  await prisma.recipeIngredient.createMany({
    data: [
      { recipeId: recipe1.id, ingredientId: ingredients.find(i => i.name === 'Calabacín')!.id, quantity: '1 unidad pequeña', unit: 'unidad' },
      { recipeId: recipe2.id, ingredientId: ingredients.find(i => i.name === 'Patata')!.id, quantity: '100g', unit: 'g' },
      { recipeId: recipe2.id, ingredientId: ingredients.find(i => i.name === 'Calabacín')!.id, quantity: '50g', unit: 'g' },
      { recipeId: recipe2.id, ingredientId: ingredients.find(i => i.name === 'Zanahoria')!.id, quantity: '50g', unit: 'g' },
      { recipeId: recipe3.id, ingredientId: ingredients.find(i => i.name === 'Pera')!.id, quantity: '1/2 unidad', unit: 'unidad' },
      { recipeId: recipe3.id, ingredientId: ingredients.find(i => i.name === 'Manzana')!.id, quantity: '1/2 unidad', unit: 'unidad' },
      { recipeId: recipe3.id, ingredientId: ingredients.find(i => i.name === 'Plátano')!.id, quantity: '1/2 unidad', unit: 'unidad' },
      { recipeId: recipe4.id, ingredientId: ingredients.find(i => i.name === 'Pollo')!.id, quantity: '60g', unit: 'g' },
      { recipeId: recipe4.id, ingredientId: ingredients.find(i => i.name === 'Patata')!.id, quantity: '80g', unit: 'g' },
      { recipeId: recipe4.id, ingredientId: ingredients.find(i => i.name === 'Zanahoria')!.id, quantity: '40g', unit: 'g' },
    ],
  })

  console.log('✅ Ingredientes de recetas creados')
  console.log('🌱 Base de datos poblada correctamente con guía de introducción')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
