// Datos estáticos de introducción de alimentos
// Basados en recomendaciones OMS, UNICEF y AEPAP

// Interfaz para cada comida individual
export interface Meal {
  type: 'desayuno' | 'almuerzo' | 'merienda' | 'cena'
  title: string
  food: string
  portion: string
  recipe: string
}

export interface IntroStep {
  id: string
  weekNumber: number
  dayNumber: number
  monthNumber: number // 6-24 meses
  ageRange: '6-8m' | '8-12m' | '12-24m'
  title: string
  description: string
  foodGroup?: string
  specificFood?: string
  portionSize?: string
  frequency?: string
  mealsPerDay: number // 1, 2, o 3+ comidas al día
  meals: Meal[] // Array de comidas para el día
  breastmilkNote?: string
  tips?: string
  warnings?: string
}

export const ageRangeInfo = {
  '6-8m': {
    title: '6-8 meses',
    subtitle: 'Primeras comidas',
    startDay: 1,
    endDay: 30,
    mealsPerDay: 1, // Empezando con 1 comida, luego 2
    color: 'orange',
    bgClass: 'bg-orange-50',
    borderClass: 'border-orange-200',
    textClass: 'text-orange-700',
    icon: '🍼',
    description: 'Introducción gradual de alimentos. Texturas muy suaves.'
  },
  '8-12m': {
    title: '8-12 meses',
    subtitle: 'Ampliando variedad',
    startDay: 31,
    endDay: 60,
    mealsPerDay: 2, // 2 comidas al día
    color: 'green',
    bgClass: 'bg-green-50',
    borderClass: 'border-green-200',
    textClass: 'text-green-700',
    icon: '🥄',
    description: 'Más variedad y texturas. Dos comidas al día.'
  },
  '12-24m': {
    title: '12-24 meses',
    subtitle: 'Comida familiar',
    startDay: 61,
    endDay: 72,
    mealsPerDay: 3, // 3+ comidas al día
    color: 'blue',
    bgClass: 'bg-blue-50',
    borderClass: 'border-blue-200',
    textClass: 'text-blue-700',
    icon: '🍽️',
    description: 'Transición a comida familiar. Tres comidas + snacks.'
  }
}

export function getAgeRangeForDay(day: number): '6-8m' | '8-12m' | '12-24m' {
  if (day <= 30) return '6-8m'
  if (day <= 60) return '8-12m'
  return '12-24m'
}

export function groupStepsByWeek(steps: IntroStep[]): Record<number, IntroStep[]> {
  const grouped: Record<number, IntroStep[]> = {}
  steps.forEach(step => {
    if (!grouped[step.weekNumber]) {
      grouped[step.weekNumber] = []
    }
    grouped[step.weekNumber].push(step)
  })
  return grouped
}

// Función para obtener el número de mes basado en el día
function getMonthForDay(dayNumber: number): number {
  // Días 1-30 = Mes 6, Días 31-60 = Mes 7, etc.
  // Aproximadamente 30 días por mes
  return Math.floor((dayNumber - 1) / 30) + 6
}

export const introStepsData: IntroStep[] = [
  // ==================== MES 6 (Días 1-30) ====================
  // DÍA 1-3: Calabacín (1 comida al día - ALMUERZO)
  {
    id: 'day1',
    weekNumber: 1,
    dayNumber: 1,
    monthNumber: 6,
    ageRange: '6-8m',
    title: '¡Primer día de alimentación complementaria!',
    description: 'Hoy comienza una nueva etapa. Ofrece tu primera cucharada de puré de calabacín.',
    foodGroup: 'Verduras',
    specificFood: 'Calabacín',
    portionSize: '2-3 cucharaditas (10-15g)',
    frequency: '1 comida al día (almuerzo)',
    mealsPerDay: 1,
    meals: [
      {
        type: 'almuerzo',
        title: 'Puré de Calabacín',
        food: 'Calabacín',
        portion: '2-3 cucharaditas (10-15g)',
        recipe: `🥄 PURÉ DE CALABACÍN (1 porción)

Ingredientes:
• 1 calabacín pequeño (aprox. 100g)
• 2-3 cucharadas de agua

Preparación:
1. Lava bien el calabacín bajo el grifo
2. Pélalo completamente (la piel puede ser difícil de digerir al principio)
3. Córtalo en rodajas finas o cubos pequeños
4. Cocina al vapor durante 10-15 minutos hasta que esté muy blando
5. Tritura con la batidora añadiendo el agua de cocción poco a poco
6. La textura debe ser muy suave, casi líquida, sin grumos

Tiempo: 20 minutos
💡 Puedes preparar más cantidad y congelar en cubitos (aprox. 15g por cubo)`
      }
    ],
    breastmilkNote: 'Continúa con la lactancia materna a demanda. El puré es COMPLEMENTARIO. Ofrece el pecho ANTES del puré.',
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
    ])
  },
  {
    id: 'day2',
    weekNumber: 1,
    dayNumber: 2,
    monthNumber: 6,
    ageRange: '6-8m',
    title: 'Segundo día con calabacín',
    description: 'Continúa ofreciendo puré de calabacín. Aumenta ligeramente la cantidad.',
    foodGroup: 'Verduras',
    specificFood: 'Calabacín',
    portionSize: '3-4 cucharadas (20-30g)',
    frequency: '1 comida al día (almuerzo)',
    mealsPerDay: 1,
    meals: [
      {
        type: 'almuerzo',
        title: 'Puré de Calabacín',
        food: 'Calabacín',
        portion: '3-4 cucharadas (20-30g)',
        recipe: `🥄 PURÉ DE CALABACÍN (2 porciones)

Ingredientes:
• 1 calabacín mediano (aprox. 150g)
• 3-4 cucharadas de agua de cocción

Preparación:
1. Lava y pela el calabacín
2. Córtalo en cubos de 1cm
3. Cocina al vapor 12-15 minutos hasta que esté muy tierno
4. Tritura con batidora, añadiendo agua de cocción hasta lograr consistencia de papilla líquida
5. Deja enfriar a temperatura ambiente antes de servir

Tiempo: 20 minutos
💡 Usa los cubos congelados del día anterior si tienes`
      }
    ],
    breastmilkNote: 'La lactancia sigue siendo la fuente principal de nutrición.',
    tips: JSON.stringify([
      'Intenta que el bebé abra la boca mostrándole la cuchara',
      'Habla suavemente y sonríe durante la comida',
      'No fuerces la comida, deja que el bebé marque el ritmo'
    ]),
    warnings: JSON.stringify([
      'Observa si hay sarpullidos, vómitos o diarrea',
      'Consulta al pediatra si notas algo inusual'
    ])
  },
  {
    id: 'day3',
    weekNumber: 1,
    dayNumber: 3,
    monthNumber: 6,
    ageRange: '6-8m',
    title: 'Tercer día con calabacín',
    description: 'Último día de prueba con calabacín. Mañana podrás introducir un nuevo alimento.',
    foodGroup: 'Verduras',
    specificFood: 'Calabacín',
    portionSize: '4-5 cucharadas (30-40g)',
    frequency: '1 comida al día (almuerzo)',
    mealsPerDay: 1,
    meals: [
      {
        type: 'almuerzo',
        title: 'Puré de Calabacín (textura más espesa)',
        food: 'Calabacín',
        portion: '4-5 cucharadas (30-40g)',
        recipe: `🥄 PURÉ DE CALABACÍN - TEXTURA MÁS ESPESA

Ingredientes:
• 1 calabacín mediano
• 1-2 cucharadas de agua (menos agua = más espeso)

Preparación:
1. Lava, pela y corta el calabacín en cubos
2. Cocina al vapor 12-15 minutos
3. Tritura añadiendo MENOS agua que los días anteriores
4. La textura debe ser como una papilla suave, no tan líquida

💡 Si el bebé lo tolera bien, puedes empezar a hacer purés un poco más espesos

✅ CALABACÍN APROBADO - Añádelo a tu lista de alimentos seguros`
      }
    ],
    breastmilkNote: 'Mantén las tomas de pecho habituales (4-6 tomas al día mínimo).',
    tips: JSON.stringify([
      'El bebé ya debería estar más acostumbrado a la cuchara',
      'Celebra cada pequeño progreso con sonrisas',
      'Puedes ofrecer el puré un poco más espeso si lo tolera bien'
    ]),
    warnings: JSON.stringify([
      'Si no ha habido reacciones adversas, el calabacín está aprobado',
      'Anota en tu diario cualquier observación importante'
    ])
  },
  // DÍA 4-6: Calabaza
  {
    id: 'day4',
    weekNumber: 1,
    dayNumber: 4,
    monthNumber: 6,
    ageRange: '6-8m',
    title: 'Nuevo alimento: Calabaza',
    description: 'Hoy introducimos la calabaza. Es dulce y suave, ideal para bebés.',
    foodGroup: 'Verduras',
    specificFood: 'Calabaza',
    portionSize: '2-3 cucharadas (15-20g)',
    frequency: '1 comida al día (almuerzo)',
    mealsPerDay: 1,
    meals: [
      {
        type: 'almuerzo',
        title: 'Puré de Calabaza',
        food: 'Calabaza',
        portion: '2-3 cucharadas (15-20g)',
        recipe: `🥄 PURÉ DE CALABAZA (2 porciones)

Ingredientes:
• 150g de calabaza (trozo pelado)
• 3-4 cucharadas de agua

Preparación:
1. Pela la calabaza y retira las semillas
2. Córtala en cubos pequeños de 1-2cm
3. Cocina al vapor durante 15-20 minutos hasta que esté muy blanda
4. Tritura con batidora añadiendo agua de cocción
5. La textura debe ser suave y cremosa

Tiempo: 25 minutos
💡 La calabaza es rica en vitamina A y tiene un sabor dulce natural

Conservación: Refrigerar 24h / Congelar 1 mes`
      }
    ],
    breastmilkNote: 'Amamanta a demanda. La leche materna sigue siendo el alimento principal.',
    tips: JSON.stringify([
      'La calabaza es naturalmente dulce, suele gustar mucho',
      'Cocina al vapor para conservar nutrientes',
      'Tritura muy bien hasta que no queden grumos'
    ]),
    warnings: JSON.stringify([
      'Es un alimento nuevo: observa durante 2-3 días',
      'No mezcles con otros alimentos nuevos todavía'
    ])
  },
  {
    id: 'day5',
    weekNumber: 1,
    dayNumber: 5,
    monthNumber: 6,
    ageRange: '6-8m',
    title: 'Continúa con calabaza',
    description: 'Sigue probando la calabaza. El bebé se acostumbra a nuevos sabores.',
    foodGroup: 'Verduras',
    specificFood: 'Calabaza + Calabacín',
    portionSize: '3-4 cucharadas (25-35g)',
    frequency: '1 comida al día (almuerzo)',
    mealsPerDay: 1,
    meals: [
      {
        type: 'almuerzo',
        title: 'Puré de Calabaza y Calabacín',
        food: 'Calabaza + Calabacín',
        portion: '3-4 cucharadas (25-35g)',
        recipe: `🥄 PURÉ DE CALABAZA + CALABACÍN (mezcla suave)

Ingredientes:
• 100g de calabaza
• 50g de calabacín
• 2-3 cucharadas de agua

Preparación:
1. Pela y corta ambas verduras en cubos
2. Cocina al vapor: primero la calabaza (15 min), luego añade el calabacín (10 min más)
3. Tritura todo junto con un poco de agua de cocción
4. Mezcla bien hasta obtener una papilla homogénea

💡 Esta mezcla combina el dulzor de la calabaza con la suavidad del calabacín`
      }
    ],
    breastmilkNote: 'Ofrece el pecho antes del puré para asegurar que reciba suficientes nutrientes de la leche.',
    tips: JSON.stringify([
      'Puedes mezclar un poco de calabacín del día anterior si quieres',
      'La consistencia debe ser suave pero no líquida',
      'Deja que el bebé toque la comida con las manos'
    ]),
    warnings: JSON.stringify([
      'Observa las heces del bebé, pueden cambiar de color',
      'La calabaza puede dar un tono anaranjado a las deposiciones'
    ])
  },
  {
    id: 'day6',
    weekNumber: 1,
    dayNumber: 6,
    monthNumber: 6,
    ageRange: '6-8m',
    title: 'Último día de calabaza',
    description: 'Finalizamos la prueba de calabaza. Si todo está bien, mañana un nuevo alimento.',
    foodGroup: 'Verduras',
    specificFood: 'Calabaza',
    portionSize: '4-5 cucharadas (35-45g)',
    frequency: '1 comida al día (almuerzo)',
    mealsPerDay: 1,
    meals: [
      {
        type: 'almuerzo',
        title: 'Puré de Calabaza (versión espesa)',
        food: 'Calabaza',
        portion: '4-5 cucharadas (35-45g)',
        recipe: `🥄 PURÉ DE CALABAZA (versión espesa)

Ingredientes:
• 150g de calabaza
• 1-2 cucharadas de agua

Preparación:
1. Pela y corta la calabaza en cubos
2. Cocina al vapor 18-20 minutos hasta muy blanda
3. Tritura con MENOS agua para obtener textura más consistente

✅ CALABAZA APROBADA - Añádela a tu lista de alimentos seguros`
      }
    ],
    breastmilkNote: 'La lactancia materna proporciona anticuerpos que protegen al bebé mientras prueba nuevos alimentos.',
    tips: JSON.stringify([
      'El bebé puede empezar a mostrar preferencias',
      'No te preocupes si come más o menos un día',
      'Cada bebé tiene su propio ritmo'
    ]),
    warnings: JSON.stringify([
      'Si no ha habido reacciones, la calabaza está aprobada',
      'Añádela a tu lista de alimentos seguros'
    ])
  },
  // DÍA 7-9: Zanahoria
  {
    id: 'day7',
    weekNumber: 1,
    dayNumber: 7,
    monthNumber: 6,
    ageRange: '6-8m',
    title: 'Nuevo alimento: Zanahoria',
    description: 'Introducimos la zanahoria, rica en vitamina A.',
    foodGroup: 'Verduras',
    specificFood: 'Zanahoria',
    portionSize: '2-3 cucharadas (15-20g)',
    frequency: '1 comida al día (almuerzo)',
    mealsPerDay: 1,
    meals: [
      {
        type: 'almuerzo',
        title: 'Puré de Zanahoria',
        food: 'Zanahoria',
        portion: '2-3 cucharadas (15-20g)',
        recipe: `🥄 PURÉ DE ZANAHORIA

Ingredientes:
• 1 zanahoria mediana (aprox. 100g)
• 3-4 cucharadas de agua

Preparación:
1. Pela la zanahoria y córtala en rodajas finas
2. Cocina al vapor durante 20-25 minutos hasta que esté muy blanda
3. Tritura muy bien con batidora, añadiendo agua de cocción
4. La zanahoria es más fibrosa, asegúrate de que no queden hilos

Tiempo: 30 minutos
💡 Rica en beta-caroteno (vitamina A) para la visión y el sistema inmune`
      }
    ],
    breastmilkNote: 'Continúa amamantando a demanda. La leche materna aporta grasas esenciales para la absorción de vitamina A.',
    tips: JSON.stringify([
      'La zanahoria tarda más en cocinarse, asegúrate de que esté muy blanda',
      'Su dulzor natural la hace atractiva para el bebé',
      'No añadas aceite todavía'
    ]),
    warnings: JSON.stringify([
      'La zanahoria puede causar estreñimiento en algunos bebés',
      'Observa si hay cambios en las deposiciones'
    ])
  },
  {
    id: 'day8',
    weekNumber: 2,
    dayNumber: 8,
    monthNumber: 6,
    ageRange: '6-8m',
    title: 'Segundo día con zanahoria',
    description: 'Continúa con zanahoria. Puedes mezclar con calabacín ya aprobado.',
    foodGroup: 'Verduras',
    specificFood: 'Zanahoria + Calabacín',
    portionSize: '3-4 cucharadas (25-35g)',
    frequency: '1 comida al día (almuerzo)',
    mealsPerDay: 1,
    meals: [
      {
        type: 'almuerzo',
        title: 'Puré de Zanahoria con Calabacín',
        food: 'Zanahoria + Calabacín',
        portion: '3-4 cucharadas (25-35g)',
        recipe: `🥄 PURÉ DE ZANAHORIA + CALABACÍN

Ingredientes:
• 1 zanahoria pequeña
• 1/2 calabacín pequeño
• Agua de cocción

Preparación:
1. Pela y corta las verduras
2. Cocina la zanahoria primero (20 min), luego añade el calabacín (10 min más)
3. Tritura todo junto con un poco de agua
4. Mezcla bien

💡 Combinación nutritiva y sabrosa`
      }
    ],
    breastmilkNote: 'Ofrece el pecho después del puré para "cerrar" la comida.',
    tips: JSON.stringify([
      'Puedes empezar a mezclar con calabacín ya aprobado',
      'Mezclar alimentos conocidos ayuda a aceptar sabores',
      'Proporción: 2 partes zanahoria, 1 parte calabacín'
    ]),
    warnings: JSON.stringify([
      'Solo mezcla alimentos ya probados y aprobados',
      'No introduzcas más de un alimento nuevo cada 3 días'
    ])
  },
  {
    id: 'day9',
    weekNumber: 2,
    dayNumber: 9,
    monthNumber: 6,
    ageRange: '6-8m',
    title: 'Último día de zanahoria',
    description: 'Finalizamos la prueba de zanahoria.',
    foodGroup: 'Verduras',
    specificFood: 'Zanahoria',
    portionSize: '4-5 cucharadas (35-45g)',
    frequency: '1 comida al día (almuerzo)',
    mealsPerDay: 1,
    meals: [
      {
        type: 'almuerzo',
        title: 'Puré de Verduras Mixtas',
        food: 'Zanahoria + Calabacín + Calabaza',
        portion: '4-5 cucharadas (35-45g)',
        recipe: `🥄 PURÉ DE TRES VERDURAS

Ingredientes:
• 1 zanahoria pequeña
• 1/2 calabacín
• 50g de calabaza
• Agua de cocción

Preparación:
1. Pela y corta todas las verduras
2. Cocina la zanahoria y calabaza primero (15 min)
3. Añade el calabacín (10 min más)
4. Tritura todo junto

✅ ZANAHORIA APROBADA
💡 Varía las mezclas para que el bebé no se aburra`
      }
    ],
    breastmilkNote: 'Mantén la lactancia a demanda como fuente principal de nutrición.',
    tips: JSON.stringify([
      'La zanahoria está aprobada si no hubo reacciones',
      'Puedes congelar puré de zanahoria en cubitos'
    ]),
    warnings: JSON.stringify([
      'Si hay estreñimiento, ofrece más agua entre comidas'
    ])
  },
  // DÍA 10-12: Patata
  {
    id: 'day10',
    weekNumber: 2,
    dayNumber: 10,
    monthNumber: 6,
    ageRange: '6-8m',
    title: 'Nuevo alimento: Patata',
    description: 'Introducimos la patata, un carbohidrato energético y muy suave.',
    foodGroup: 'Cereales',
    specificFood: 'Patata',
    portionSize: '2-3 cucharadas (20-30g)',
    frequency: '1 comida al día (almuerzo)',
    mealsPerDay: 1,
    meals: [
      {
        type: 'almuerzo',
        title: 'Puré de Patata',
        food: 'Patata',
        portion: '2-3 cucharadas (20-30g)',
        recipe: `🥄 PURÉ DE PATATA

Ingredientes:
• 1 patata pequeña (aprox. 100g)
• 3-4 cucharadas de agua o leche materna

Preparación:
1. Pela la patata y retira cualquier parte verde
2. Córtala en cubos pequeños
3. Cocina al vapor o hervida durante 15-20 minutos
4. Tritura con agua de cocción o leche materna hasta obtener puré suave
5. La textura debe ser cremosa sin grumos

Tiempo: 25 minutos
💡 La patata es muy digestiva y aporta energía`
      }
    ],
    breastmilkNote: 'La patata aporta energía pero poca grasa. La leche materna complementa los nutrientes necesarios.',
    tips: JSON.stringify([
      'Elige patatas firmes sin brotes ni partes verdes',
      'Cocina bien para que quede muy suave',
      'La patata absorbe agua, añade líquido al triturar'
    ]),
    warnings: JSON.stringify([
      'Nunca des patata cruda o poco cocida',
      'Las partes verdes de la patata son tóxicas'
    ])
  },
  {
    id: 'day11',
    weekNumber: 2,
    dayNumber: 11,
    monthNumber: 6,
    ageRange: '6-8m',
    title: 'Patata + verduras',
    description: 'Mezcla patata con las verduras ya aprobadas.',
    foodGroup: 'Verduras',
    specificFood: 'Patata + Verduras',
    portionSize: '4-5 cucharadas (40-50g)',
    frequency: '1 comida al día (almuerzo)',
    mealsPerDay: 1,
    meals: [
      {
        type: 'almuerzo',
        title: 'Puré de Patata y Verduras',
        food: 'Patata + Calabacín + Zanahoria',
        portion: '4-5 cucharadas (40-50g)',
        recipe: `🥄 PURÉ DE PATATA Y VERDURAS

Ingredientes:
• 1/2 patata pequeña
• 1/2 calabacín
• 1 zanahoria pequeña
• Agua de cocción

Preparación:
1. Pela y corta todas las verduras
2. Cocina al vapor: zanahoria 15 min, luego patata y calabacín 10 min más
3. Tritura todo junto con agua de cocción
4. Obtendrás un puré nutritivo y completo

💡 Este puré combina carbohidratos, vitaminas y fibra`
      }
    ],
    breastmilkNote: 'Continúa con la lactancia a demanda.',
    tips: JSON.stringify([
      'La patata aporta consistencia a los purés',
      'Mezcla con calabacín o zanahoria',
      'Acepta que el bebé explore con las manos'
    ]),
    warnings: JSON.stringify([
      'Verifica que no haya reacciones a la patata'
    ])
  },
  {
    id: 'day12',
    weekNumber: 2,
    dayNumber: 12,
    monthNumber: 6,
    ageRange: '6-8m',
    title: 'Patata aprobada',
    description: 'La patata queda aprobada. Continúa con mezclas variadas.',
    foodGroup: 'Cereales',
    specificFood: 'Patata',
    portionSize: '4-5 cucharadas (40-50g)',
    frequency: '1 comida al día (almuerzo)',
    mealsPerDay: 1,
    meals: [
      {
        type: 'almuerzo',
        title: 'Puré Variado con Patata',
        food: 'Patata + Verduras variadas',
        portion: '4-5 cucharadas (40-50g)',
        recipe: `✅ PATATA APROBADA

Recetas que puedes hacer ahora:
• Puré de patata y calabacín
• Puré de patata y zanahoria
• Puré de tres verduras (patata + calabacín + zanahoria)
• Puré de patata y calabaza

💡 Varía los ingredientes cada día para ampliar sabores`
      }
    ],
    breastmilkNote: 'Excelente progreso. La lactancia sigue siendo esencial.',
    tips: JSON.stringify([
      'La patata es muy versátil',
      'Puedes prepararla con diferentes verduras',
      'Congela bien'
    ]),
    warnings: JSON.stringify([
      'No añadas sal a la patata'
    ])
  },
  // DÍA 13-15: Pera (primera fruta)
  {
    id: 'day13',
    weekNumber: 2,
    dayNumber: 13,
    monthNumber: 6,
    ageRange: '6-8m',
    title: 'Primera fruta: Pera',
    description: 'Introducimos la pera, una fruta dulce y suave.',
    foodGroup: 'Frutas',
    specificFood: 'Pera',
    portionSize: '2-3 cucharadas (20-30g)',
    frequency: '1 comida al día (almuerzo o merienda)',
    mealsPerDay: 1,
    meals: [
      {
        type: 'almuerzo',
        title: 'Puré de Pera',
        food: 'Pera',
        portion: '2-3 cucharadas (20-30g)',
        recipe: `🍎 PURÉ DE PERA

Ingredientes:
• 1 pera madura

Preparación (versión cocida - más digestiva):
1. Pela la pera y retira el corazón y semillas
2. Córtala en cubos pequeños
3. Cocina al vapor durante 8-10 minutos hasta que esté blanda
4. Tritura hasta obtener un puré suave

Preparación (versión cruda):
1. Pela la pera
2. Rállala o tritúrala con batidora
3. Sirve inmediatamente (se oxida rápido)

Tiempo: 15 minutos (cocida) / 5 minutos (cruda)
💡 La pera cocida es más digestiva para bebés pequeños`
      }
    ],
    breastmilkNote: 'Las frutas aportan vitaminas. La leche materna sigue siendo la base nutricional.',
    tips: JSON.stringify([
      'Elige una pera madura pero firme',
      'Puedes ofrecerla cocida o cruda triturada',
      'Su dulzor natural suele gustar mucho'
    ]),
    warnings: JSON.stringify([
      'Lava bien la fruta antes de preparar',
      'Algunos bebés prefieren la fruta cocida al principio'
    ])
  },
  {
    id: 'day14',
    weekNumber: 2,
    dayNumber: 14,
    monthNumber: 6,
    ageRange: '6-8m',
    title: 'Segundo día con pera',
    description: 'Continúa con pera. Puedes combinar con verduras ya aprobadas.',
    foodGroup: 'Frutas',
    specificFood: 'Pera',
    portionSize: '3-4 cucharadas (30-40g)',
    frequency: '1 comida al día',
    mealsPerDay: 1,
    meals: [
      {
        type: 'almuerzo',
        title: 'Pera con Verduras',
        food: 'Pera + Calabacín',
        portion: '3-4 cucharadas (30-40g)',
        recipe: `🍎 PERA CON VERDURAS (combinación suave)

Ingredientes:
• 1/2 pera madura
• 2-3 cucharadas de puré de calabacín o patata

Preparación:
1. Prepara el puré de pera (cocida o cruda)
2. Mezcla con el puré de verduras ya preparado
3. La combinación dulce-salada suele gustar

💡 Esta combinación ayuda a que acepte diferentes sabores`
      }
    ],
    breastmilkNote: 'Las frutas pueden causar heces más blandas. Es normal.',
    tips: JSON.stringify([
      'Observa si le gusta el sabor dulce',
      'Puedes mezclar pera con calabacín',
      'Ofrece a diferentes horas del día'
    ]),
    warnings: JSON.stringify([
      'No añadas azúcar ni miel'
    ])
  },
  {
    id: 'day15',
    weekNumber: 2,
    dayNumber: 15,
    monthNumber: 6,
    ageRange: '6-8m',
    title: 'Pera aprobada',
    description: 'La pera queda aprobada. Primera fruta en tu lista.',
    foodGroup: 'Frutas',
    specificFood: 'Pera',
    portionSize: '4-5 cucharadas (40-50g)',
    frequency: '1 comida al día',
    mealsPerDay: 1,
    meals: [
      {
        type: 'almuerzo',
        title: 'Pera sola o combinada',
        food: 'Pera',
        portion: '4-5 cucharadas (40-50g)',
        recipe: `✅ PERA APROBADA

Ideas para servir:
• Puré de pera solo
• Pera + calabacín (mezcla suave)
• Pera + patata (interesante combinación)

💡 Las frutas pueden ofrecerse en cualquier momento del día`
      }
    ],
    breastmilkNote: 'Buen progreso. Continúa amamantando a demanda.',
    tips: JSON.stringify([
      'La pera es buena fuente de fibra',
      'Puedes ofrecerla como postre o merienda',
      'Prepara cubitos congelados de pera triturada'
    ]),
    warnings: JSON.stringify([
      'Si notas heces muy blandas, reduce la cantidad de fruta'
    ])
  },
  // DÍA 16-18: Manzana
  {
    id: 'day16',
    weekNumber: 2,
    dayNumber: 16,
    monthNumber: 6,
    ageRange: '6-8m',
    title: 'Nueva fruta: Manzana',
    description: 'Introducimos la manzana, rica en fibra y vitaminas.',
    foodGroup: 'Frutas',
    specificFood: 'Manzana',
    portionSize: '2-3 cucharadas (20-30g)',
    frequency: '1 comida al día',
    mealsPerDay: 1,
    meals: [
      {
        type: 'almuerzo',
        title: 'Compota de Manzana',
        food: 'Manzana',
        portion: '2-3 cucharadas (20-30g)',
        recipe: `🍎 COMPOTA DE MANZANA

Ingredientes:
• 1 manzana dulce (Golden, Fuji o Gala)
• 2-3 cucharadas de agua

Preparación:
1. Pela la manzana y retira el corazón y semillas
2. Córtala en cubos pequeños
3. Cocina al vapor o en un cazo con poca agua durante 10-15 minutos
4. Tritura hasta obtener una compota suave
5. Deja enfriar antes de servir

Tiempo: 20 minutos
💡 La manzana cocida es muy digestiva y ayuda en caso de diarrea leve`
      }
    ],
    breastmilkNote: 'La manzana es muy digestiva cocida. Ideal para bebés.',
    tips: JSON.stringify([
      'Usa manzanas dulces como Golden o Fuji',
      'Evita manzanas ácidas como Granny Smith',
      'Cocinarla la hace más digestiva'
    ]),
    warnings: JSON.stringify([
      'La manzana cruda puede ser difícil de digerir',
      'Siempre pélala y retira semillas'
    ])
  },
  {
    id: 'day17',
    weekNumber: 3,
    dayNumber: 17,
    monthNumber: 6,
    ageRange: '6-8m',
    title: 'Manzana + pera',
    description: 'Combina manzana con pera para una mezcla de frutas.',
    foodGroup: 'Frutas',
    specificFood: 'Manzana + Pera',
    portionSize: '3-4 cucharadas (30-40g)',
    frequency: '1 comida al día',
    mealsPerDay: 1,
    meals: [
      {
        type: 'almuerzo',
        title: 'Compota de Manzana y Pera',
        food: 'Manzana + Pera',
        portion: '3-4 cucharadas (30-40g)',
        recipe: `🍎 COMPOTA DE MANZANA Y PERA

Ingredientes:
• 1/2 manzana dulce
• 1/2 pera madura
• 2 cucharadas de agua

Preparación:
1. Pela y corta ambas frutas
2. Cocina al vapor durante 10-12 minutos
3. Tritura juntas hasta obtener compota suave
4. Puedes añadir una pizca de canela en polvo (opcional)

💡 Esta combinación es muy popular entre los bebés`
      }
    ],
    breastmilkNote: 'Las mezclas de frutas aportan variedad de vitaminas.',
    tips: JSON.stringify([
      'Cocina ambas frutas juntas para mezclar sabores',
      'Puedes añadir una pizca de canela (sin azúcar)',
      'Acepta que el bebé explore texturas'
    ]),
    warnings: JSON.stringify([
      'Observa si hay reacciones a la manzana'
    ])
  },
  {
    id: 'day18',
    weekNumber: 3,
    dayNumber: 18,
    monthNumber: 6,
    ageRange: '6-8m',
    title: 'Manzana aprobada',
    description: 'La manzana queda aprobada. Tienes dos frutas en tu lista.',
    foodGroup: 'Frutas',
    specificFood: 'Manzana',
    portionSize: '4-5 cucharadas (40-50g)',
    frequency: '1 comida al día',
    mealsPerDay: 1,
    meals: [
      {
        type: 'almuerzo',
        title: 'Compota variada',
        food: 'Manzana + Pera',
        portion: '4-5 cucharadas (40-50g)',
        recipe: `✅ MANZANA APROBADA

Combinaciones de frutas:
• Manzana + Pera
• Manzana + Calabaza (dulce)
• Manzana + Zanahoria (vitamina A)

💡 Varía entre frutas y verduras a lo largo del día`
      }
    ],
    breastmilkNote: 'Excelente progreso. Continúa con la lactancia.',
    tips: JSON.stringify([
      'La manzana es versátil para mezclar',
      'Puedes ofrecerla en diferentes momentos del día',
      'Congela compota en cubitos'
    ]),
    warnings: JSON.stringify([
      'No ofrezcas trozos de manzana cruda hasta más adelante'
    ])
  },
  // DÍA 19-21: Pollo (primera proteína)
  {
    id: 'day19',
    weekNumber: 3,
    dayNumber: 19,
    monthNumber: 6,
    ageRange: '6-8m',
    title: 'Primera proteína: Pollo',
    description: 'Introducimos el pollo, la primera proteína animal.',
    foodGroup: 'Proteínas',
    specificFood: 'Pollo',
    portionSize: '1-2 cucharadas (10-20g de pollo)',
    frequency: '1 comida al día (almuerzo)',
    mealsPerDay: 1,
    meals: [
      {
        type: 'almuerzo',
        title: 'Puré de Pollo con Verduras',
        food: 'Pollo + Verduras',
        portion: '1-2 cucharadas (10-20g de pollo)',
        recipe: `🍗 PURÉ DE POLLO CON VERDURAS

Ingredientes:
• 30g de pechuga de pollo (sin piel)
• 1 zanahoria pequeña
• 1/2 patata pequeña
• Agua de cocción

Preparación:
1. Corta el pollo en trozos pequeños
2. Pela y corta las verduras
3. Cocina todo al vapor durante 20-25 minutos
4. Asegúrate de que el pollo esté bien cocido (sin partes rosadas)
5. Tritura todo junto con agua de cocción hasta obtener puré suave

Tiempo: 30 minutos
💡 El pollo aporta proteínas de alta calidad para el crecimiento`
      }
    ],
    breastmilkNote: 'Las proteínas animales se introducen gradualmente. La leche materna sigue aportando proteínas de alta calidad.',
    tips: JSON.stringify([
      'Usa pechuga de pollo sin piel ni huesos',
      'Cocina muy bien el pollo (sin partes rosadas)',
      'Tritura con verduras para mejor textura'
    ]),
    warnings: JSON.stringify([
      'Asegúrate de que no haya espinas ni huesos',
      'El pollo debe estar completamente cocido'
    ])
  },
  {
    id: 'day20',
    weekNumber: 3,
    dayNumber: 20,
    monthNumber: 6,
    ageRange: '6-8m',
    title: 'Pollo con verduras',
    description: 'Continúa con pollo mezclado con verduras ya conocidas.',
    foodGroup: 'Proteínas',
    specificFood: 'Pollo',
    portionSize: '2-3 cucharadas (20-30g)',
    frequency: '1 comida al día (almuerzo)',
    mealsPerDay: 1,
    meals: [
      {
        type: 'almuerzo',
        title: 'Puré de Pollo y Calabacín',
        food: 'Pollo + Calabacín',
        portion: '2-3 cucharadas (20-30g)',
        recipe: `🍗 PURÉ DE POLLO Y CALABACÍN

Ingredientes:
• 40g de pechuga de pollo
• 1/2 calabacín
• 1 cucharada de agua

Preparación:
1. Cocina el pollo al vapor 15-20 minutos hasta que esté bien hecho
2. Cocina el calabacín 10-12 minutos
3. Tritura ambos juntos con un poco de agua
4. La textura debe ser suave pero no líquida

💡 Esta combinación es suave y nutritiva`
      }
    ],
    breastmilkNote: 'Las proteínas son esenciales para el desarrollo muscular y cerebral.',
    tips: JSON.stringify([
      'Mezcla pollo con diferentes verduras',
      'La textura puede ser un poco más gruesa ahora',
      'Observa si le gusta el sabor'
    ]),
    warnings: JSON.stringify([
      'No añadas sal al pollo'
    ])
  },
  {
    id: 'day21',
    weekNumber: 3,
    dayNumber: 21,
    monthNumber: 6,
    ageRange: '6-8m',
    title: 'Pollo aprobado',
    description: 'El pollo queda aprobado. Primera proteína en tu lista.',
    foodGroup: 'Proteínas',
    specificFood: 'Pollo',
    portionSize: '2-3 cucharadas (25-35g)',
    frequency: '1 comida al día (almuerzo)',
    mealsPerDay: 1,
    meals: [
      {
        type: 'almuerzo',
        title: 'Pollo con verduras variadas',
        food: 'Pollo + Verduras',
        portion: '2-3 cucharadas (25-35g)',
        recipe: `✅ POLLO APROBADO

Recetas con pollo:
• Pollo + Patata + Zanahoria
• Pollo + Calabacín + Calabaza
• Pollo + Verduras variadas

💡 Las proteínas se ofrecen preferiblemente en el almuerzo`
      }
    ],
    breastmilkNote: 'Excelente progreso. Ahora tienes proteínas, verduras y frutas aprobadas.',
    tips: JSON.stringify([
      'Ofrece pollo 2-3 veces por semana',
      'Puedes congelar puré de pollo con verduras',
      'Varía las verduras con las que lo mezclas'
    ]),
    warnings: JSON.stringify([
      'No ofrezcas pollo frito o procesado'
    ])
  },
  // DÍA 22-24: Plátano
  {
    id: 'day22',
    weekNumber: 3,
    dayNumber: 22,
    monthNumber: 6,
    ageRange: '6-8m',
    title: 'Nueva fruta: Plátano',
    description: 'Introducimos el plátano, rico en potasio y muy fácil de preparar.',
    foodGroup: 'Frutas',
    specificFood: 'Plátano',
    portionSize: '2-3 cucharadas (20-30g)',
    frequency: '1 comida al día',
    mealsPerDay: 1,
    meals: [
      {
        type: 'almuerzo',
        title: 'Papilla de Plátano',
        food: 'Plátano',
        portion: '2-3 cucharadas (20-30g)',
        recipe: `🍌 PURÉ DE PLÁTANO

Ingredientes:
• 1/2 plátano maduro
• 1-2 cucharadas de agua o leche materna

Preparación:
1. Pela el plátano
2. Tritura con un tenedor o batidora
3. Añade agua o leche materna hasta obtener la consistencia deseada
4. Sirve inmediatamente (se oscurece con el aire)

Tiempo: 2 minutos
💡 El plátano es la fruta más fácil de preparar - ¡no necesita cocción!`
      }
    ],
    breastmilkNote: 'El plátano es muy energético y fácil de digerir.',
    tips: JSON.stringify([
      'Elige plátanos maduros con puntos marrones',
      'No necesita cocción, solo triturar',
      'Puedes mezclar con otras frutas'
    ]),
    warnings: JSON.stringify([
      'El plátano puede oscurecerse rápido',
      'Ofrece poco a poco porque es muy saciante'
    ])
  },
  {
    id: 'day23',
    weekNumber: 3,
    dayNumber: 23,
    monthNumber: 6,
    ageRange: '6-8m',
    title: 'Plátano con otras frutas',
    description: 'Mezcla plátano con pera o manzana.',
    foodGroup: 'Frutas',
    specificFood: 'Plátano + Pera',
    portionSize: '3-4 cucharadas (30-40g)',
    frequency: '1 comida al día',
    mealsPerDay: 1,
    meals: [
      {
        type: 'almuerzo',
        title: 'Plátano con Pera',
        food: 'Plátano + Pera',
        portion: '3-4 cucharadas (30-40g)',
        recipe: `🍌 PLÁTANO CON PERA

Ingredientes:
• 1/2 plátano maduro
• 1/2 pera (cocida o cruda triturada)

Preparación:
1. Tritura el plátano con un tenedor
2. Mezcla con el puré de pera
3. Sirve inmediatamente

💡 Combinación dulce y cremosa`
      }
    ],
    breastmilkNote: 'Las mezclas de frutas aportan variedad de nutrientes.',
    tips: JSON.stringify([
      'El plátano aporta cremosidad a las mezclas',
      'Combina bien con todas las frutas',
      'Puedes congelarlo en papillas'
    ]),
    warnings: JSON.stringify([
      'El plátano puede causar estreñimiento si se consume mucho'
    ])
  },
  {
    id: 'day24',
    weekNumber: 3,
    dayNumber: 24,
    monthNumber: 6,
    ageRange: '6-8m',
    title: 'Plátano aprobado',
    description: 'El plátano queda aprobado. Tres frutas en tu lista.',
    foodGroup: 'Frutas',
    specificFood: 'Plátano',
    portionSize: '3-4 cucharadas (30-40g)',
    frequency: '1 comida al día',
    mealsPerDay: 1,
    meals: [
      {
        type: 'almuerzo',
        title: 'Macedonia de frutas',
        food: 'Plátano + Pera + Manzana',
        portion: '3-4 cucharadas (30-40g)',
        recipe: `✅ PLÁTANO APROBADO

Combinaciones con plátano:
• Plátano + Pera
• Plátano + Manzana
• Plátano solo
• Las tres frutas juntas

💡 Ideal para desayuno o merienda`
      }
    ],
    breastmilkNote: 'Buen progreso. Tienes una buena variedad de alimentos.',
    tips: JSON.stringify([
      'El plátano es ideal para llevar de viaje',
      'No necesita refrigeración inmediata',
      'Fácil de preparar en cualquier lugar'
    ]),
    warnings: JSON.stringify([
      'El plátano maduro tiene más azúcar'
    ])
  },
  // DÍA 25-30: INTRODUCCIÓN A 2 COMIDAS AL DÍA
  {
    id: 'day25',
    weekNumber: 4,
    dayNumber: 25,
    monthNumber: 6,
    ageRange: '6-8m',
    title: '¡Aumentamos a 2 comidas al día!',
    description: 'El bebé está listo para dos comidas al día: Almuerzo + Cena.',
    foodGroup: 'Varios',
    specificFood: 'Menú variado',
    portionSize: 'Almuerzo: 5-6 cucharadas / Cena: 3-4 cucharadas',
    frequency: '2 comidas al día',
    mealsPerDay: 2,
    meals: [
      {
        type: 'almuerzo',
        title: 'Puré de Pollo con Verduras',
        food: 'Pollo + Patata + Zanahoria + Calabacín',
        portion: '5-6 cucharadas (80-100g)',
        recipe: `🍽️ ALMUERZO - PURÉ DE POLLO CON VERDURAS

Ingredientes:
• 40g de pechuga de pollo
• 1 zanahoria pequeña
• 1/2 patata pequeña
• 1/2 calabacín

Preparación:
1. Corta el pollo en trozos pequeños
2. Pela y corta las verduras
3. Cocina todo al vapor 20-25 minutos
4. Tritura con agua de cocción hasta obtener puré suave

Tiempo: 30 minutos
💡 El almuerzo debe ser la comida más completa del día`
      },
      {
        type: 'cena',
        title: 'Compota de Frutas',
        food: 'Manzana + Pera',
        portion: '3-4 cucharadas (40-50g)',
        recipe: `🍽️ CENA - COMPOTA DE FRUTAS

Ingredientes:
• 1/2 manzana dulce
• 1/2 pera madura

Preparación:
1. Pela y corta ambas frutas
2. Cocina al vapor 10-12 minutos
3. Tritura hasta obtener compota suave

💡 La cena debe ser más ligera que el almuerzo`
      }
    ],
    breastmilkNote: 'Con dos comidas, la lactancia sigue siendo importante. Ofrece el pecho antes de cada comida sólida.',
    tips: JSON.stringify([
      'Almuerzo: puré de verduras con proteína',
      'Cena: fruta o puré ligero de verduras',
      'Mantén horarios regulares'
    ]),
    warnings: JSON.stringify([
      'No fuerces al bebé a comer si no quiere',
      'La cena debe ser más ligera que el almuerzo'
    ])
  },
  {
    id: 'day26',
    weekNumber: 4,
    dayNumber: 26,
    monthNumber: 6,
    ageRange: '6-8m',
    title: 'Dos comidas: Día 2',
    description: 'Continúa con el esquema de dos comidas.',
    foodGroup: 'Varios',
    specificFood: 'Menú variado',
    portionSize: 'Almuerzo: 80-100g / Cena: 40-50g',
    frequency: '2 comidas al día',
    mealsPerDay: 2,
    meals: [
      {
        type: 'almuerzo',
        title: 'Puré de Pollo y Calabaza',
        food: 'Pollo + Calabaza',
        portion: '5-6 cucharadas (80-100g)',
        recipe: `🍽️ ALMUERZO - PURÉ DE POLLO Y CALABAZA

Ingredientes:
• 40g de pechuga de pollo
• 80g de calabaza

Preparación:
1. Cocina el pollo al vapor 15-20 min
2. Cocina la calabaza 15-18 min
3. Tritura todo junto con un poco de agua

💡 Combina proteína con verdura dulce`
      },
      {
        type: 'cena',
        title: 'Puré de Plátano',
        food: 'Plátano',
        portion: '3-4 cucharadas (40-50g)',
        recipe: `🍽️ CENA - PURÉ DE PLÁTANO

Ingredientes:
• 1/2 plátano maduro

Preparación:
1. Pela y aplasta el plátano con un tenedor
2. Añade un poco de agua si es necesario

💡 El plátano es rápido y nutritivo`
      }
    ],
    breastmilkNote: 'Con dos comidas, ofrece el pecho 3-4 veces al día mínimo.',
    tips: JSON.stringify([
      'El bebé te indicará cuánto quiere comer',
      'No te preocupes si un día come menos',
      'Observa señales de saciedad'
    ]),
    warnings: JSON.stringify([
      'Si rechaza la cena, no fuerces'
    ])
  },
  {
    id: 'day27',
    weekNumber: 4,
    dayNumber: 27,
    monthNumber: 6,
    ageRange: '6-8m',
    title: 'Dos comidas: Día 3',
    description: 'El bebé se acostumbra a dos comidas. Varía los menús.',
    foodGroup: 'Varios',
    specificFood: 'Menú variado',
    portionSize: 'Total: 150-200g diarios',
    frequency: '2 comidas al día',
    mealsPerDay: 2,
    meals: [
      {
        type: 'almuerzo',
        title: 'Puré de Verduras Variadas',
        food: 'Patata + Zanahoria + Calabacín + Calabaza',
        portion: '5-6 cucharadas (80-100g)',
        recipe: `🍽️ ALMUERZO - PURÉ DE CUATRO VERDURAS

Ingredientes:
• 1/2 patata pequeña
• 1 zanahoria pequeña
• 1/2 calabacín
• 50g de calabaza

Preparación:
1. Pela y corta todas las verduras
2. Cocina al vapor: zanahoria y calabaza 15 min
3. Añade patata y calabacín 10 min más
4. Tritura todo junto

💡 Puré muy nutritivo y colorido`
      },
      {
        type: 'cena',
        title: 'Compota de Manzana y Pera',
        food: 'Manzana + Pera',
        portion: '3-4 cucharadas (40-50g)',
        recipe: `🍽️ CENA - COMPOTA DE MANZANA Y PERA

Ingredientes:
• 1/2 manzana
• 1/2 pera

Preparación:
1. Pela y corta las frutas
2. Cocina al vapor 10-12 min
3. Tritura hasta obtener compota

💡 Dulce y digestiva`
      }
    ],
    breastmilkNote: 'La leche materna sigue aportando la mayoría de nutrientes.',
    tips: JSON.stringify([
      'Ofrece variedad de sabores',
      'Incluye proteína en el almuerzo',
      'La cena puede ser solo verduras o fruta'
    ]),
    warnings: JSON.stringify([
      'No añadas sal, azúcar ni miel'
    ])
  },
  // DÍA 28-30: Introducción de ternera
  {
    id: 'day28',
    weekNumber: 4,
    dayNumber: 28,
    monthNumber: 6,
    ageRange: '6-8m',
    title: 'Nuevo alimento: Ternera',
    description: 'Introducimos la ternera como segunda proteína animal.',
    foodGroup: 'Proteínas',
    specificFood: 'Ternera',
    portionSize: '1-2 cucharadas (15-20g)',
    frequency: '2 comidas al día',
    mealsPerDay: 2,
    meals: [
      {
        type: 'almuerzo',
        title: 'Puré de Ternera con Verduras',
        food: 'Ternera + Zanahoria + Patata',
        portion: '4-5 cucharadas (60-80g)',
        recipe: `🥩 PURÉ DE TERNERA CON VERDURAS

Ingredientes:
• 30g de ternera magra
• 1 zanahoria pequeña
• 1/2 patata pequeña

Preparación:
1. Corta la ternera en trozos pequeños
2. Pela y corta las verduras
3. Cocina todo al vapor 25-30 minutos
4. La carne debe estar muy bien cocida
5. Tritura todo junto con agua de cocción

Tiempo: 35 minutos
💡 La ternera es rica en hierro, importante para prevenir anemia`
      },
      {
        type: 'cena',
        title: 'Puré de Frutas',
        food: 'Plátano + Pera',
        portion: '3-4 cucharadas (40-50g)',
        recipe: `🍽️ CENA - PLÁTANO CON PERA

Ingredientes:
• 1/2 plátano maduro
• 1/2 pera triturada

Preparación:
1. Aplasta el plátano
2. Mezcla con la pera triturada

💡 Combinación suave y dulce`
      }
    ],
    breastmilkNote: 'La ternera aporta hierro y zinc, minerales esenciales.',
    tips: JSON.stringify([
      'Usa carne magra sin grasa',
      'Cocina muy bien la carne',
      'Tritura con verduras para mejor textura'
    ]),
    warnings: JSON.stringify([
      'Asegúrate de que no haya trozos duros'
    ])
  },
  {
    id: 'day29',
    weekNumber: 4,
    dayNumber: 29,
    monthNumber: 6,
    ageRange: '6-8m',
    title: 'Ternera + verduras',
    description: 'Continúa con ternera mezclada con verduras.',
    foodGroup: 'Proteínas',
    specificFood: 'Ternera',
    portionSize: '2-3 cucharadas (20-30g)',
    frequency: '2 comidas al día',
    mealsPerDay: 2,
    meals: [
      {
        type: 'almuerzo',
        title: 'Puré de Ternera y Calabacín',
        food: 'Ternera + Calabacín',
        portion: '5-6 cucharadas (80-100g)',
        recipe: `🥩 PURÉ DE TERNERA Y CALABACÍN

Ingredientes:
• 35g de ternera magra
• 1 calabacín pequeño
• Agua de cocción

Preparación:
1. Cocina la ternera al vapor 20-25 min
2. Añade el calabacín en los últimos 12 min
3. Tritura todo junto

💡 Combinación suave y nutritiva`
      },
      {
        type: 'cena',
        title: 'Compota de Manzana',
        food: 'Manzana',
        portion: '3-4 cucharadas (40-50g)',
        recipe: `🍽️ CENA - COMPOTA DE MANZANA

Ingredientes:
• 1 manzana dulce

Preparación:
1. Pela y corta la manzana
2. Cocina al vapor 12-15 min
3. Tritura hasta obtener compota

💡 Digestiva y reconfortante`
      }
    ],
    breastmilkNote: 'Combina bien el hierro de la carne con vitamina C de verduras.',
    tips: JSON.stringify([
      'Alterna entre pollo y ternera',
      'Las verduras ayudan a la absorción del hierro',
      'Varía las preparaciones'
    ]),
    warnings: JSON.stringify([
      'No ofrezcas carne cruda o poco cocida'
    ])
  },
  {
    id: 'day30',
    weekNumber: 4,
    dayNumber: 30,
    monthNumber: 6,
    ageRange: '6-8m',
    title: '¡Mes 6 completado!',
    description: 'Has completado el primer mes. El bebé ahora come 2 veces al día con variedad de alimentos.',
    foodGroup: 'Varios',
    specificFood: 'Variedad de alimentos',
    portionSize: 'Total: 200-250g diarios entre 2 comidas',
    frequency: '2 comidas al día',
    mealsPerDay: 2,
    meals: [
      {
        type: 'almuerzo',
        title: 'Puré de Pollo o Ternera con Verduras',
        food: 'Proteína + Verduras variadas',
        portion: '5-6 cucharadas (100g)',
        recipe: `🎉 ALMUERZO - PURÉ PROTEICO CON VERDURAS

Puedes elegir:
• Pollo con zanahoria, patata y calabacín
• Ternera con calabaza y calabacín
• Pollo con verduras variadas

Preparación estándar:
1. Cocina la proteína al vapor 20-25 min
2. Cocina las verduras 15-20 min
3. Tritura todo junto

✅ ALIMENTOS APROBADOS (MES 6):
Verduras: Calabacín, Calabaza, Zanahoria, Patata
Frutas: Pera, Manzana, Plátano
Proteínas: Pollo, Ternera`
      },
      {
        type: 'cena',
        title: 'Compota de Frutas Variadas',
        food: 'Frutas variadas',
        portion: '3-4 cucharadas (50g)',
        recipe: `🎉 CENA - COMPOTA DE FRUTAS

Combinaciones posibles:
• Manzana + Pera
• Plátano + Pera
• Las tres frutas juntas

👶 El bebé ahora come 2 veces al día
🍼 Continúa con 3-4 tomas de pecho diarias

💡 Prepárate para el MES 7: más alimentos y texturas`
      }
    ],
    breastmilkNote: '¡Felicidades! El bebé ha probado muchos alimentos. Continúa con la lactancia materna.',
    tips: JSON.stringify([
      'Resumen de alimentos aprobados: calabacín, calabaza, zanahoria, patata, pera, manzana, plátano, pollo, ternera',
      'Mantén la variedad en los menús',
      'Prepárate para la siguiente fase: 8-12 meses'
    ]),
    warnings: JSON.stringify([
      'Continúa introduciendo nuevos alimentos gradualmente'
    ])
  },

  // ==================== MES 7 (Días 31-60) - 8-12 MESES ====================
  {
    id: 'day31',
    weekNumber: 5,
    dayNumber: 31,
    monthNumber: 7,
    ageRange: '8-12m',
    title: '¡Nueva fase! Mes 7',
    description: 'El bebé entra en una nueva etapa. Más texturas, más variedad, 2-3 comidas al día.',
    foodGroup: 'Varios',
    specificFood: 'Menú variado + Nuevos alimentos',
    portionSize: '200-300g diarios en 2-3 comidas',
    frequency: '2-3 comidas al día',
    mealsPerDay: 2,
    meals: [
      {
        type: 'almuerzo',
        title: 'Puré de Pollo con Verduras y Arroz',
        food: 'Pollo + Verduras + Arroz',
        portion: '6-7 cucharadas (100-120g)',
        recipe: `🍽️ ALMUERZO - POLLO CON ARROZ Y VERDURAS

Ingredientes:
• 40g de pechuga de pollo
• 2 cucharadas de arroz bien cocido
• Verduras variadas (zanahoria, calabacín)

Preparación:
1. Cocina el pollo al vapor 20 min
2. Cocina el arroz 20-25 min hasta muy blando
3. Cocina las verduras al vapor 15 min
4. Tritura parcialmente (dejar algunos trocitos pequeños)

💡 Texturas más gruesas: el bebé aprende a masticar`
      },
      {
        type: 'cena',
        title: 'Yogur Natural con Fruta',
        food: 'Yogur + Plátano',
        portion: '1/2 yogur con fruta (80g)',
        recipe: `🍽️ CENA - YOGUR CON FRUTA

Ingredientes:
• 1/2 yogur natural entero
• 1/2 plátano triturado

Preparación:
1. Tritura el plátano
2. Mézclalo con el yogur

💡 El yogur introduce lácteos gradualmente
⚠️ Usa yogur NATURAL sin azúcar

Nuevos alimentos a introducir este mes:
• Pescado blanco (merluza, bacalao)
• Yema de huevo
• Yogur natural
• Legumbres (lentejas)`
      }
    ],
    breastmilkNote: 'La leche materna sigue siendo importante pero los sólidos ganan protagonismo.',
    tips: JSON.stringify([
      'Introduce texturas más gruesas',
      'El bebé puede empezar a usar los dedos',
      'Ofrece pequeños trozos blandos'
    ]),
    warnings: JSON.stringify([
      'Vigila siempre mientras come para evitar atragantamiento'
    ])
  },
  {
    id: 'day32',
    weekNumber: 5,
    dayNumber: 32,
    monthNumber: 7,
    ageRange: '8-12m',
    title: 'Nuevo alimento: Merluza (pescado blanco)',
    description: 'Introducimos el pescado blanco, rico en proteínas y omega-3.',
    foodGroup: 'Proteínas',
    specificFood: 'Merluza',
    portionSize: '2-3 cucharadas (25-30g)',
    frequency: '2 comidas al día',
    mealsPerDay: 2,
    meals: [
      {
        type: 'almuerzo',
        title: 'Puré de Merluza con Verduras',
        food: 'Merluza + Zanahoria + Patata',
        portion: '5-6 cucharadas (80-100g)',
        recipe: `🐟 PURÉ DE MERLUZA CON VERDURAS

Ingredientes:
• 40g de filete de merluza (sin piel ni espinas)
• 1 zanahoria pequeña
• 1/2 patata pequeña
• 1 cucharada de aceite de oliva

Preparación:
1. Revisa el pescado con cuidado para eliminar todas las espinas
2. Pela y corta las verduras
3. Cocina todo al vapor 15-20 minutos
4. El pescado se desmenuza fácilmente cuando está cocido
5. Tritura parcialmente (textura con grumos pequeños)
6. Añade el aceite de oliva al final

Tiempo: 25 minutos
💡 El pescado blanco es más digestivo que el azul

⚠️ IMPORTANTE: Revisa muy bien las espinas antes de servir`
      },
      {
        type: 'cena',
        title: 'Compota de Frutas',
        food: 'Manzana + Pera',
        portion: '4-5 cucharadas (50-60g)',
        recipe: `🍽️ CENA - COMPOTA DE MANZANA Y PERA

Ingredientes:
• 1/2 manzana
• 1/2 pera

Preparación:
1. Pela y corta las frutas
2. Cocina al vapor 10-12 min
3. Tritura parcialmente (dejar pequeños trozos)

💡 Introduce texturas con trocitos pequeños`
      }
    ],
    breastmilkNote: 'El pescado aporta ácidos grasos esenciales para el desarrollo cerebral.',
    tips: JSON.stringify([
      'Usa pescado blanco: merluza, bacalao, lenguado',
      'Revisa muy bien que no tenga espinas',
      'Cocina al vapor o hervido'
    ]),
    warnings: JSON.stringify([
      'Verifica DOS VECES que no haya espinas',
      'Empieza con poca cantidad'
    ])
  },
  {
    id: 'day33',
    weekNumber: 5,
    dayNumber: 33,
    monthNumber: 7,
    ageRange: '8-12m',
    title: 'Pescado + patata',
    description: 'Continúa con pescado, mezclando con patata.',
    foodGroup: 'Proteínas',
    specificFood: 'Merluza + Patata',
    portionSize: '3-4 cucharadas (40-50g)',
    frequency: '2 comidas al día',
    mealsPerDay: 2,
    meals: [
      {
        type: 'almuerzo',
        title: 'Puré de Pescado y Patata',
        food: 'Merluza + Patata + Aceite de oliva',
        portion: '5-6 cucharadas (80-100g)',
        recipe: `🐟 PURÉ DE PESCADO Y PATATA

Ingredientes:
• 50g de merluza limpia
• 1 patata pequeña
• 1 cucharadita de aceite de oliva

Preparación:
1. Pela y corta la patata en cubos
2. Cocina la patata al vapor 15 min
3. Añade el pescado (revisado sin espinas) y cocina 8 min más
4. Desmenuza el pescado con las manos para revisar espinas
5. Tritura parcialmente con la patata
6. Añade el aceite de oliva

💡 El aceite de oliva ayuda a absorber vitaminas`
      },
      {
        type: 'cena',
        title: 'Puré de Frutas con Trocitos',
        food: 'Plátano + Pera',
        portion: '4-5 cucharadas (50-60g)',
        recipe: `🍽️ CENA - FRUTAS CON TROCITOS

Ingredientes:
• 1/2 plátano
• 1/2 pera

Preparación:
1. Tritura el plátano
2. Pica la pera en trocitos muy pequeños
3. Mézclalos

💡 Textura con trocitos para practicar masticación`
      }
    ],
    breastmilkNote: 'El pescado 2-3 veces por semana es ideal.',
    tips: JSON.stringify([
      'El pescado con patata es una combinación clásica',
      'Textura con algunos grumos pequeños',
      'Añade un poco de aceite de oliva'
    ]),
    warnings: JSON.stringify([
      'Si hay antecedentes de alergia, consulta al pediatra'
    ])
  },
  {
    id: 'day34',
    weekNumber: 5,
    dayNumber: 34,
    monthNumber: 7,
    ageRange: '8-12m',
    title: 'Pescado aprobado',
    description: 'El pescado blanco queda aprobado.',
    foodGroup: 'Proteínas',
    specificFood: 'Pescado blanco',
    portionSize: '40-50g',
    frequency: '2 comidas al día',
    mealsPerDay: 2,
    meals: [
      {
        type: 'almuerzo',
        title: 'Pescado con Verduras Variadas',
        food: 'Merluza + Calabacín + Zanahoria',
        portion: '5-6 cucharadas (80-100g)',
        recipe: `✅ PESCADO BLANCO APROBADO

🍽️ ALMUERZO - PESCADO CON VERDURAS

Ingredientes:
• 45g de merluza o bacalao
• 1/2 calabacín
• 1 zanahoria pequeña

Preparación:
1. Cocina el pescado al vapor 15 min (revisa espinas)
2. Cocina las verduras 15 min
3. Tritura parcialmente

Recetas con pescado:
• Merluza con patata y zanahoria
• Bacalao con calabacín
• Pescado con verduras variadas

💡 Ofrece pescado en el almuerzo, no en la cena`
      },
      {
        type: 'cena',
        title: 'Yogur con Fruta',
        food: 'Yogur + Manzana',
        portion: '1/2 yogur con fruta (80g)',
        recipe: `🍽️ CENA - YOGUR CON MANZANA

Ingredientes:
• 1/2 yogur natural entero
• 1/2 manzana cocida y triturada

Preparación:
1. Cocina la manzana al vapor 10 min
2. Tritúrala y mézclala con el yogur

💡 El yogur es más digestivo que la leche líquida`
      }
    ],
    breastmilkNote: 'Excelente. Ofrece pescado 2-3 veces por semana.',
    tips: JSON.stringify([
      'Varía entre merluza, bacalao, lenguado',
      'El pescado es fuente de yodo y selenio',
      'Combina con diferentes verduras'
    ]),
    warnings: JSON.stringify([
      'No ofrezcas pescado crudo (sushi) ni ahumado'
    ])
  },
  {
    id: 'day35',
    weekNumber: 5,
    dayNumber: 35,
    monthNumber: 7,
    ageRange: '8-12m',
    title: 'Nuevo alimento: Yema de huevo',
    description: 'Introducimos la yema de huevo cocida. Importante fuente de hierro y colina.',
    foodGroup: 'Proteínas',
    specificFood: 'Yema de huevo',
    portionSize: '1 yema cocida',
    frequency: '2 comidas al día',
    mealsPerDay: 2,
    meals: [
      {
        type: 'almuerzo',
        title: 'Yema de Huevo con Verduras',
        food: 'Yema de huevo + Puré de verduras',
        portion: '1 yema + 4-5 cucharadas de verduras',
        recipe: `🥚 YEMA DE HUEVO CON VERDURAS

Ingredientes:
• 1 huevo tamaño L
• 4-5 cucharadas de puré de verduras

Preparación:
1. Hierve el huevo durante 10-12 minutos hasta que esté duro
2. Pela el huevo con cuidado
3. Separa la yema de la clara (desecha la clara por ahora)
4. Aplasta la yema con un tenedor
5. Mézclala con el puré de verduras caliente

Tiempo: 15 minutos
💡 La yema es rica en hierro, colina y vitaminas A, D, E

⚠️ Introduce la clara más adelante (después de 12 meses si hay riesgo de alergia)`
      },
      {
        type: 'cena',
        title: 'Compota de Frutas',
        food: 'Pera + Manzana',
        portion: '4-5 cucharadas (50-60g)',
        recipe: `🍽️ CENA - COMPOTA DE PERA Y MANZANA

Ingredientes:
• 1/2 pera
• 1/2 manzana

Preparación:
1. Pela y corta las frutas
2. Cocina al vapor 10-12 min
3. Tritura dejando pequeños trozos

💡 Dulce y digestiva`
      }
    ],
    breastmilkNote: 'El huevo es un alérgeno común. Introduce gradualmente.',
    tips: JSON.stringify([
      'Empieza solo con la yema (la clara es más alergénica)',
      'El huevo debe estar completamente cocido',
      'Mezcla con verduras o papilla'
    ]),
    warnings: JSON.stringify([
      'Observa si hay reacciones alérgicas en 24-48h',
      'Si hay antecedentes de alergia, consulta al pediatra primero'
    ])
  },
  {
    id: 'day36',
    weekNumber: 5,
    dayNumber: 36,
    monthNumber: 7,
    ageRange: '8-12m',
    title: 'Yema de huevo + arroz',
    description: 'Mezcla yema de huevo con arroz bien cocido.',
    foodGroup: 'Proteínas',
    specificFood: 'Yema de huevo + Arroz',
    portionSize: '1 yema + 2 cucharadas de arroz',
    frequency: '2 comidas al día',
    mealsPerDay: 2,
    meals: [
      {
        type: 'almuerzo',
        title: 'Arroz con Yema de Huevo',
        food: 'Arroz + Yema de huevo + Aceite',
        portion: '5-6 cucharadas (80-100g)',
        recipe: `🥚 ARROZ CON YEMA DE HUEVO

Ingredientes:
• 2 cucharadas de arroz
• 1 yema de huevo cocida
• 1 cucharadita de aceite de oliva

Preparación:
1. Cocina el arroz en abundante agua durante 20-25 min
2. Debe quedar muy blando
3. Hierve el huevo 12 min y separa la yema
4. Mezcla el arroz con la yema aplastada
5. Añade aceite de oliva

💡 Combinación energética y nutritiva`
      },
      {
        type: 'cena',
        title: 'Plátano con Yogur',
        food: 'Plátano + Yogur',
        portion: '1/2 yogur con plátano (80g)',
        recipe: `🍽️ CENA - PLÁTANO CON YOGUR

Ingredientes:
• 1/2 yogur natural
• 1/2 plátano maduro

Preparación:
1. Tritura el plátano
2. Mézclalo con el yogur

💡 Cremoso y nutritivo`
      }
    ],
    breastmilkNote: 'El arroz aporta energía y la yema nutrientes esenciales.',
    tips: JSON.stringify([
      'El arroz debe estar muy bien cocido',
      'Puedes usar arroz integral para más fibra',
      'Textura con grumos pequeños'
    ]),
    warnings: JSON.stringify([
      'El arroz no debe quedar duro'
    ])
  },
  {
    id: 'day37',
    weekNumber: 5,
    dayNumber: 37,
    monthNumber: 7,
    ageRange: '8-12m',
    title: 'Yema aprobada',
    description: 'La yema de huevo queda aprobada.',
    foodGroup: 'Proteínas',
    specificFood: 'Yema de huevo',
    portionSize: '1 yema diaria',
    frequency: '2 comidas al día',
    mealsPerDay: 2,
    meals: [
      {
        type: 'almuerzo',
        title: 'Pollo con Yema y Verduras',
        food: 'Pollo + Yema + Verduras',
        portion: '5-6 cucharadas (80-100g)',
        recipe: `✅ YEMA DE HUEVO APROBADA

🍽️ ALMUERZO - POLLO CON YEMA Y VERDURAS

Ingredientes:
• 35g de pechuga de pollo
• 1 yema de huevo cocida
• Verduras variadas

Preparación:
1. Cocina el pollo y las verduras al vapor 20 min
2. Tritura parcialmente
3. Añade la yema aplastada

Formas de servir yema:
• Yema con verduras
• Arroz con yema
• Puré de pollo con yema
• Tortilla de yema (cuajada suave)

💡 El huevo es uno de los alimentos más completos`
      },
      {
        type: 'cena',
        title: 'Macedonia de Frutas',
        food: 'Plátano + Pera + Manzana',
        portion: '4-5 cucharadas (60g)',
        recipe: `🍽️ CENA - MACEDONIA DE FRUTAS

Ingredientes:
• 1/4 plátano en trocitos
• 1/4 pera en trocitos
• 1/4 manzana en trocitos

Preparación:
1. Pica todas las frutas en trocitos muy pequeños
2. Mézclalas en un bol

💡 Trocitos pequeños para practicar masticación`
      }
    ],
    breastmilkNote: 'Puedes ofrecer huevo 3-4 veces por semana.',
    tips: JSON.stringify([
      'La yema es muy nutritiva',
      'Combina bien con arroz, verduras, pollo',
      'Diferentes preparaciones: hervido, en tortilla suave'
    ]),
    warnings: JSON.stringify([
      'Espera antes de introducir la clara completa'
    ])
  },
  {
    id: 'day38',
    weekNumber: 6,
    dayNumber: 38,
    monthNumber: 7,
    ageRange: '8-12m',
    title: 'Nuevo alimento: Yogur natural',
    description: 'Introducimos el yogur natural entero. Fuente de calcio y probióticos.',
    foodGroup: 'Lácteos',
    specificFood: 'Yogur natural entero',
    portionSize: '1/2 yogur (60g)',
    frequency: '2 comidas al día',
    mealsPerDay: 2,
    meals: [
      {
        type: 'almuerzo',
        title: 'Puré de Pescado con Verduras',
        food: 'Merluza + Verduras + Aceite',
        portion: '5-6 cucharadas (80-100g)',
        recipe: `🍽️ ALMUERZO - PESCADO CON VERDURAS

Ingredientes:
• 45g de merluza
• Verduras variadas
• 1 cucharadita de aceite de oliva

Preparación:
1. Cocina el pescado al vapor 15 min
2. Cocina las verduras 15 min
3. Tritura parcialmente
4. Añade aceite

💡 El pescado aporta omega-3`
      },
      {
        type: 'cena',
        title: 'Yogur con Fruta',
        food: 'Yogur + Plátano',
        portion: '1/2 yogur con fruta (80g)',
        recipe: `🥛 YOGUR CON FRUTA

Ingredientes:
• 1/2 yogur natural entero (60g)
• 1/2 plátano maduro o 1/2 pera triturada

Preparación:
1. Sirve el yogur en un bol
2. Tritura la fruta y mézclala con el yogur
3. Mezcla bien hasta obtener una crema homogénea

Tiempo: 3 minutos
💡 El yogur aporta calcio y probióticos para la flora intestinal

⚠️ Usa yogur NATURAL sin azúcar ni sabores
💡 Ideal para desayuno o merienda`
      }
    ],
    breastmilkNote: 'Los lácteos se introducen gradualmente. La leche de vaca como bebida después de 12 meses.',
    tips: JSON.stringify([
      'Usa yogur natural sin azúcar ni sabores',
      'Entero, no descremado',
      'Ideal para merienda o desayuno'
    ]),
    warnings: JSON.stringify([
      'No uses yogures azucarados o con sabores artificiales'
    ])
  },
  {
    id: 'day39',
    weekNumber: 6,
    dayNumber: 39,
    monthNumber: 7,
    ageRange: '8-12m',
    title: 'Yogur con diferentes frutas',
    description: 'Varía las frutas con el yogur.',
    foodGroup: 'Lácteos',
    specificFood: 'Yogur + Frutas',
    portionSize: '1 yogur con fruta',
    frequency: '2 comidas al día',
    mealsPerDay: 2,
    meals: [
      {
        type: 'almuerzo',
        title: 'Pollo con Arroz y Verduras',
        food: 'Pollo + Arroz + Verduras',
        portion: '5-6 cucharadas (100g)',
        recipe: `🍽️ ALMUERZO - POLLO CON ARROZ Y VERDURAS

Ingredientes:
• 40g de pechuga de pollo
• 2 cucharadas de arroz
• Verduras variadas

Preparación:
1. Cocina el pollo y las verduras al vapor 20 min
2. Cocina el arroz aparte 20 min
3. Tritura parcialmente todo junto

💡 Textura con grumos pequeños`
      },
      {
        type: 'cena',
        title: 'Yogur con Manzana y Canela',
        food: 'Yogur + Manzana + Canela',
        portion: '1 yogur con fruta (100g)',
        recipe: `🥛 YOGUR CON MANZANA Y CANELA

Ingredientes:
• 1 yogur natural entero
• 1/2 manzana (cocida y triturada)
• Una pizca de canela

Preparación:
1. Cocina la manzana al vapor 10 min y tritura
2. Mezcla con el yogur
3. Añade una pizca de canela

💡 Combinación deliciosa y digestiva`
      }
    ],
    breastmilkNote: 'El yogur puede sustituir una toma de leche ocasionalmente.',
    tips: JSON.stringify([
      'Prueba yogur con manzana, pera, plátano',
      'Puedes añadir un poco de avena',
      'Textura cremosa y agradable'
    ]),
    warnings: JSON.stringify([
      'Observa tolerancia a los lácteos'
    ])
  },
  {
    id: 'day40',
    weekNumber: 6,
    dayNumber: 40,
    monthNumber: 7,
    ageRange: '8-12m',
    title: 'Yogur aprobado',
    description: 'El yogur natural queda aprobado.',
    foodGroup: 'Lácteos',
    specificFood: 'Yogur natural',
    portionSize: '1 yogur al día máximo',
    frequency: '2 comidas al día',
    mealsPerDay: 2,
    meals: [
      {
        type: 'almuerzo',
        title: 'Ternera con Verduras',
        food: 'Ternera + Verduras + Arroz',
        portion: '5-6 cucharadas (100g)',
        recipe: `🍽️ ALMUERZO - TERNERA CON VERDURAS Y ARROZ

Ingredientes:
• 40g de ternera magra
• 2 cucharadas de arroz
• Verduras variadas

Preparación:
1. Cocina la ternera al vapor 25 min
2. Cocina el arroz y las verduras
3. Tritura parcialmente

💡 La ternera aporta hierro`
      },
      {
        type: 'cena',
        title: 'Yogur con Frutas Variadas',
        food: 'Yogur + Frutas',
        portion: '1 yogur con frutas (100g)',
        recipe: `✅ YOGUR NATURAL APROBADO

🍽️ CENA - YOGUR CON FRUTAS

Variedades:
• Yogur con plátano
• Yogur con manzana y canela
• Yogur con pera
• Yogur con avena

💡 El yogur es más digestivo que la leche líquida`
      }
    ],
    breastmilkNote: 'Excelente. El yogur es una buena fuente de calcio.',
    tips: JSON.stringify([
      'Ofrece yogur 4-5 veces por semana',
      'Ideal para desayuno o merienda',
      'Puedes añadir frutas o cereales'
    ]),
    warnings: JSON.stringify([
      'No sustituye la leche materna o fórmula'
    ])
  },
  // DÍA 41-45: Lentejas
  {
    id: 'day41',
    weekNumber: 6,
    dayNumber: 41,
    monthNumber: 7,
    ageRange: '8-12m',
    title: 'Nuevo alimento: Lentejas',
    description: 'Introducimos las lentejas, primera legumbre. Ricas en hierro vegetal.',
    foodGroup: 'Legumbres',
    specificFood: 'Lentejas',
    portionSize: '2-3 cucharadas (30-40g)',
    frequency: '2 comidas al día',
    mealsPerDay: 2,
    meals: [
      {
        type: 'almuerzo',
        title: 'Puré de Lentejas con Verduras',
        food: 'Lentejas + Zanahoria + Patata',
        portion: '5-6 cucharadas (80-100g)',
        recipe: `🫘 PURÉ DE LENTEJAS CON VERDURAS

Ingredientes:
• 40g de lentejas (en remojo la noche anterior)
• 1/2 zanahoria
• 1/2 patata pequeña
• 1 cucharadita de aceite de oliva

Preparación:
1. Escurre las lentejas del remojo
2. Pela y corta las verduras
3. Cocina todo junto en agua sin sal durante 30-40 min
4. Las lentejas deben estar muy blandas
5. Tritura todo junto
6. Añade aceite de oliva

Tiempo: 45 minutos (más remojo previo)
💡 Para potenciar el hierro vegetal, combina con vitamina C

💡 Las lentejas son ricas en hierro, ideal para bebés`
      },
      {
        type: 'cena',
        title: 'Yogur con Fruta',
        food: 'Yogur + Plátano',
        portion: '1 yogur con fruta (80g)',
        recipe: `🍽️ CENA - YOGUR CON PLÁTANO

Ingredientes:
• 1 yogur natural
• 1/2 plátano

Preparación:
1. Tritura el plátano
2. Mézclalo con el yogur

💡 Cremoso y fácil`
      }
    ],
    breastmilkNote: 'Las legumbres son una excelente fuente de proteína vegetal y fibra.',
    tips: JSON.stringify([
      'Usa lentejas peladas o pardinillas (más blandas)',
      'Deja en remojo 8-12 horas antes',
      'Cocina muy bien hasta que se deshagan'
    ]),
    warnings: JSON.stringify([
      'Pueden causar gases al principio',
      'Introduce poco a poco'
    ])
  },
  {
    id: 'day42',
    weekNumber: 6,
    dayNumber: 42,
    monthNumber: 7,
    ageRange: '8-12m',
    title: 'Lentejas con arroz',
    description: 'Combina lentejas con arroz para proteína completa.',
    foodGroup: 'Legumbres',
    specificFood: 'Lentejas + Arroz',
    portionSize: '3-4 cucharadas (50g)',
    frequency: '2 comidas al día',
    mealsPerDay: 2,
    meals: [
      {
        type: 'almuerzo',
        title: 'Lentejas con Arroz',
        food: 'Lentejas + Arroz + Zanahoria',
        portion: '5-6 cucharadas (100g)',
        recipe: `🫘 LENTEJAS CON ARROZ

Ingredientes:
• 30g de lentejas cocidas
• 2 cucharadas de arroz cocido
• 1 zanahoria pequeña
• Aceite de oliva

Preparación:
1. Cocina las lentejas con la zanahoria 35 min
2. Cocina el arroz aparte 20 min
3. Mezcla todo y tritura parcialmente
4. Añade aceite de oliva

💡 Lentejas + arroz = proteína completa vegetal`
      },
      {
        type: 'cena',
        title: 'Compota de Frutas',
        food: 'Manzana + Pera',
        portion: '4-5 cucharadas (60g)',
        recipe: `🍽️ CENA - COMPOTA DE MANZANA Y PERA

Ingredientes:
• 1/2 manzana
• 1/2 pera

Preparación:
1. Cocina las frutas al vapor 10-12 min
2. Tritura dejando pequeños trozos

💡 Digestiva y dulce`
      }
    ],
    breastmilkNote: 'Lentejas + arroz = proteína completa.',
    tips: JSON.stringify([
      'La combinación legumbre + cereal es muy nutritiva',
      'Textura con grumos pequeños',
      'Añade verduras para más vitaminas'
    ]),
    warnings: JSON.stringify([
      'Si causa muchos gases, reduce la cantidad'
    ])
  },
  {
    id: 'day43',
    weekNumber: 6,
    dayNumber: 43,
    monthNumber: 7,
    ageRange: '8-12m',
    title: 'Lentejas aprobadas',
    description: 'Las lentejas quedan aprobadas.',
    foodGroup: 'Legumbres',
    specificFood: 'Lentejas',
    portionSize: '40-50g',
    frequency: '2 comidas al día',
    mealsPerDay: 2,
    meals: [
      {
        type: 'almuerzo',
        title: 'Lentejas con Verduras Variadas',
        food: 'Lentejas + Verduras',
        portion: '5-6 cucharadas (100g)',
        recipe: `✅ LENTEJAS APROBADAS

🍽️ ALMUERZO - LENTEJAS CON VERDURAS

Recetas:
• Puré de lentejas con verduras
• Lentejas con arroz
• Lentejas con patata y zanahoria

💡 Ofrece legumbres 2-3 veces por semana`
      },
      {
        type: 'cena',
        title: 'Yogur con Avena y Fruta',
        food: 'Yogur + Avena + Plátano',
        portion: '1 yogur con cereales (100g)',
        recipe: `🍽️ CENA - YOGUR CON AVENA Y PLÁTANO

Ingredientes:
• 1 yogur natural
• 1 cucharada de avena
• 1/2 plátano

Preparación:
1. Mezcla el yogur con la avena
2. Añade el plátano triturado
3. Deja reposar 5 min para que la avena se ablande

💡 La avena aporta fibra y energía`
      }
    ],
    breastmilkNote: 'Ofrece legumbres 2-3 veces por semana.',
    tips: JSON.stringify([
      'Las lentejas son muy versátiles',
      'Puedes hacer puré o dejar textura con trocitos',
      'Combina con arroz, patata, verduras'
    ]),
    warnings: JSON.stringify([
      'Aumenta gradualmente la cantidad'
    ])
  },
  // DÍA 44-48: Aguacate
  {
    id: 'day44',
    weekNumber: 6,
    dayNumber: 44,
    monthNumber: 7,
    ageRange: '8-12m',
    title: 'Nuevo alimento: Aguacate',
    description: 'Introducimos el aguacate, rico en grasas saludables.',
    foodGroup: 'Frutas',
    specificFood: 'Aguacate',
    portionSize: '2-3 cucharadas (30g)',
    frequency: '2 comidas al día',
    mealsPerDay: 2,
    meals: [
      {
        type: 'almuerzo',
        title: 'Puré de Aguacate',
        food: 'Aguacate',
        portion: '2-3 cucharadas (30g)',
        recipe: `🥑 PURÉ DE AGUACATE

Ingredientes:
• 1/2 aguacate maduro
• Unas gotas de limón (opcional, para evitar oxidación)

Preparación:
1. Corta el aguacate por la mitad
2. Retira el hueso
3. Extrae la pulpa con una cuchara
4. Aplasta con un tenedor hasta obtener puré
5. Añade unas gotas de limón para evitar que se oscurezca

Tiempo: 3 minutos
💡 El aguacate aporta grasas monoinsaturadas saludables para el cerebro

⚠️ El aguacate se oxida rápido (se pone oscuro)
💡 Sirve inmediatamente`
      },
      {
        type: 'cena',
        title: 'Yogur con Frutas',
        food: 'Yogur + Pera',
        portion: '1 yogur con fruta (80g)',
        recipe: `🍽️ CENA - YOGUR CON PERA

Ingredientes:
• 1 yogur natural
• 1/2 pera triturada

Preparación:
1. Tritura la pera
2. Mézclala con el yogur

💡 Combinación refrescante`
      }
    ],
    breastmilkNote: 'El aguacate aporta grasas monoinsaturadas, ideales para el desarrollo cerebral.',
    tips: JSON.stringify([
      'Elige aguacates maduros pero no pasados',
      'No necesita cocción',
      'Tritura o aplasta con tenedor'
    ]),
    warnings: JSON.stringify([
      'El aguacate se oxida rápido (se pone oscuro)'
    ])
  },
  {
    id: 'day45',
    weekNumber: 6,
    dayNumber: 45,
    monthNumber: 7,
    ageRange: '8-12m',
    title: 'Aguacate con plátano',
    description: 'Mezcla aguacate con plátano, combinación cremosa.',
    foodGroup: 'Frutas',
    specificFood: 'Aguacate + Plátano',
    portionSize: '3-4 cucharadas (50g)',
    frequency: '2 comidas al día',
    mealsPerDay: 2,
    meals: [
      {
        type: 'almuerzo',
        title: 'Aguacate con Plátano',
        food: 'Aguacate + Plátano',
        portion: '3-4 cucharadas (50g)',
        recipe: `🥑 AGUACATE CON PLÁTANO

Ingredientes:
• 1/4 de aguacate maduro
• 1/2 plátano maduro

Preparación:
1. Aplasta el aguacate con un tenedor
2. Aplasta el plátano
3. Mezcla ambos hasta obtener una crema suave

💡 Combinación cremosa y muy nutritiva
💡 Ideal para bebés por su textura suave`
      },
      {
        type: 'cena',
        title: 'Puré de Pollo con Verduras',
        food: 'Pollo + Verduras + Arroz',
        portion: '5-6 cucharadas (100g)',
        recipe: `🍽️ CENA - POLLO CON VERDURAS

Ingredientes:
• 35g de pechuga de pollo
• Verduras variadas
• 2 cucharadas de arroz

Preparación:
1. Cocina todo al vapor 20 min
2. Tritura parcialmente

💡 Cena nutritiva y ligera`
      }
    ],
    breastmilkNote: 'Excelente combinación de grasas saludables y potasio.',
    tips: JSON.stringify([
      'El aguacate con plátano es muy cremoso',
      'No necesita cocción',
      'Ideal para cuando no tienes tiempo de cocinar'
    ]),
    warnings: JSON.stringify([
      'Sirve inmediatamente para evitar oxidación'
    ])
  },
  // Continuación del mes 7 y siguientes días hasta el día 60...
  // Por brevedad, incluiré días clave adicionales

  // DÍA 50-60: Introducción a 3 comidas al día
  {
    id: 'day50',
    weekNumber: 7,
    dayNumber: 50,
    monthNumber: 7,
    ageRange: '8-12m',
    title: '¡Tres comidas al día! + Snack',
    description: 'El bebé está listo para tres comidas principales más un snack.',
    foodGroup: 'Varios',
    specificFood: 'Menú completo',
    portionSize: 'Desayuno: 80g / Almuerzo: 120g / Cena: 80g',
    frequency: '3 comidas + 1 snack',
    mealsPerDay: 3,
    meals: [
      {
        type: 'almuerzo',
        title: 'Desayuno: Yogur con Avena y Fruta',
        food: 'Yogur + Avena + Plátano',
        portion: '4-5 cucharadas (80g)',
        recipe: `🌅 DESAYUNO - YOGUR CON AVENA Y FRUTA

Ingredientes:
• 1 yogur natural entero
• 1 cucharada de avena
• 1/2 plátano maduro

Preparación:
1. Mezcla el yogur con la avena
2. Tritura el plátano y añádelo
3. Deja reposar 5 minutos

💡 Desayuno nutritivo y energético`
      },
      {
        type: 'almuerzo',
        title: 'Almuerzo: Pollo con Lentejas y Verduras',
        food: 'Pollo + Lentejas + Verduras',
        portion: '6-7 cucharadas (120g)',
        recipe: `🍽️ ALMUERZO - POLLO CON LENTEJAS Y VERDURAS

Ingredientes:
• 40g de pechuga de pollo
• 2 cucharadas de lentejas cocidas
• Verduras variadas (zanahoria, calabacín)

Preparación:
1. Cocina el pollo y las verduras al vapor 20 min
2. Añade las lentejas ya cocidas
3. Tritura parcialmente

💡 Combinación de proteínas animal y vegetal`
      },
      {
        type: 'cena',
        title: 'Cena: Pescado con Patata y Yema',
        food: 'Merluza + Patata + Yema',
        portion: '5-6 cucharadas (100g)',
        recipe: `🌙 CENA - PESCADO CON PATATA Y YEMA

Ingredientes:
• 40g de merluza
• 1 patata pequeña
• 1 yema de huevo cocida

Preparación:
1. Cocina el pescado y la patata al vapor 15-20 min
2. Desmenuza el pescado (revisa espinas)
3. Tritura parcialmente con la patata
4. Añade la yema aplastada

💡 Cena ligera pero nutritiva`
      }
    ],
    breastmilkNote: 'Con 3 comidas, la lactancia sigue siendo importante. Ofrece el pecho 2-3 veces al día.',
    tips: JSON.stringify([
      'Estructura del día: Desayuno - Almuerzo - Snack/Merienda - Cena',
      'Los horarios deben ser regulares',
      'El snack puede ser fruta o yogur'
    ]),
    warnings: JSON.stringify([
      'No fuerces al bebé a comer si no quiere',
      'Los snacks deben ser saludables'
    ])
  },
  // DÍA 60: Fin del Mes 7
  {
    id: 'day60',
    weekNumber: 8,
    dayNumber: 60,
    monthNumber: 7,
    ageRange: '8-12m',
    title: '¡Mes 7 completado!',
    description: 'Has completado el segundo mes. El bebé come 3 veces al día.',
    foodGroup: 'Varios',
    specificFood: 'Menú completo',
    portionSize: 'Total: 300-350g diarios',
    frequency: '3 comidas al día',
    mealsPerDay: 3,
    meals: [
      {
        type: 'almuerzo',
        title: 'Desayuno: Papilla de Cereales',
        food: 'Avena + Leche materna/fórmula + Fruta',
        portion: '5-6 cucharadas (100g)',
        recipe: `🌅 DESAYUNO - PAPILLA DE CEREALES

Ingredientes:
• 2 cucharadas de avena
• Leche materna o fórmula
• 1/2 plátano o pera

Preparación:
1. Cocina la avena con leche hasta que espese
2. Añade la fruta triturada
3. Mezcla bien

✅ ALIMENTOS APROBADOS (MES 7):
Verduras: + todas las anteriores
Frutas: + Aguacate
Proteínas: + Pescado blanco, Yema de huevo
Lácteos: + Yogur natural
Legumbres: + Lentejas`
      },
      {
        type: 'almuerzo',
        title: 'Almuerzo: Menú Variado',
        food: 'Proteína + Verduras + Cereal',
        portion: '6-7 cucharadas (120g)',
        recipe: `🍽️ ALMUERZO - MENÚ VARIADO

Puedes elegir:
• Pollo/Ternera/Pescado + Verduras + Arroz
• Lentejas con arroz y verduras
• Yema de huevo con verduras y patata

💡 Varía las proteínas a lo largo de la semana:
- Lunes/Miércoles/Viernes: Pollo o Ternera
- Martes/Jueves: Pescado
- Sábado/Domingo: Legumbres o Huevo`
      },
      {
        type: 'cena',
        title: 'Cena: Yogur con Frutas o Crema de Verduras',
        food: 'Yogur + Frutas o Verduras',
        portion: '5-6 cucharadas (100g)',
        recipe: `🌙 CENA - OPCIONES LIGERAS

Opción 1: Yogur con frutas
• 1 yogur natural
• Frutas variadas trituradas

Opción 2: Crema de verduras
• Verduras variadas cocidas
• Triturar con un poco de aceite

💡 La cena debe ser más ligera que el almuerzo

👶 Prepárate para el MES 8: más alimentos y texturas`
      }
    ],
    breastmilkNote: '¡Felicidades! El bebé tiene una dieta muy variada. Continúa con la lactancia.',
    tips: JSON.stringify([
      'El bebé ya puede masticar alimentos blandos',
      'Ofrece alimentos con la mano (baby-led weaning)',
      'Continúa introduciendo nuevos alimentos'
    ]),
    warnings: JSON.stringify([
      'Vigila siempre mientras come',
      'Evita alimentos con riesgo de atragantamiento'
    ])
  },

  // ==================== MESES 8-24 (Días 61-540) ====================
  // Estructura resumida con días clave

  // DÍA 61-90: Mes 8
  {
    id: 'day61',
    weekNumber: 9,
    dayNumber: 61,
    monthNumber: 8,
    ageRange: '12-24m',
    title: '¡Mes 8! Nuevos alimentos: Clara de huevo y Queso',
    description: 'Introducimos la clara de huevo y queso fresco.',
    foodGroup: 'Varios',
    specificFood: 'Huevo completo + Queso fresco',
    portionSize: 'Total: 350-400g diarios',
    frequency: '3 comidas + 2 snacks',
    mealsPerDay: 3,
    meals: [
      {
        type: 'almuerzo',
        title: 'Desayuno: Tortilla de Huevo',
        food: 'Huevo completo',
        portion: '1/2 huevo',
        recipe: `🍳 TORTILLA DE HUEVO (primer huevo completo)

Ingredientes:
• 1 huevo
• 1 cucharadita de aceite

Preparación:
1. Bate el huevo en un bol
2. Cuaja en sartén con aceite a fuego lento
3. Debe quedar bien cocida pero jugosa
4. Corta en trocitos pequeños

💡 A partir de ahora puedes usar huevo completo
⚠️ Observa si hay reacciones alérgicas`
      },
      {
        type: 'almuerzo',
        title: 'Almuerzo: Pollo con Queso y Verduras',
        food: 'Pollo + Queso fresco + Verduras',
        portion: '6-7 cucharadas (120g)',
        recipe: `🍽️ ALMUERZO - POLLO CON QUESO Y VERDURAS

Ingredientes:
• 40g de pechuga de pollo
• 20g de queso fresco
• Verduras variadas

Preparación:
1. Cocina el pollo y las verduras al vapor 20 min
2. Tritura parcialmente
3. Añade el queso fresco en trocitos

💡 El queso fresco aporta calcio`
      },
      {
        type: 'cena',
        title: 'Cena: Crema de Verduras con Queso',
        food: 'Verduras + Queso fresco',
        portion: '5-6 cucharadas (100g)',
        recipe: `🌙 CENA - CREMA DE VERDURAS CON QUESO

Ingredientes:
• Verduras variadas
• 20g de queso fresco

Preparación:
1. Cocina las verduras al vapor
2. Tritura dejando pequeños trozos
3. Añade el queso fresco desmenuzado

💡 Textura con trocitos para masticar`
      }
    ],
    breastmilkNote: 'Continúa con la lactancia materna 2-3 veces al día.',
    tips: JSON.stringify([
      'El huevo completo se puede ofrecer 3-4 veces por semana',
      'El queso debe ser fresco, no curado ni con sal',
      'Texturas con trocitos pequeños'
    ]),
    warnings: JSON.stringify([
      'Observa reacciones alérgicas al huevo completo',
      'Evita quesos curados o con mucha sal'
    ])
  },

  // DÍA 90: Mes 9
  {
    id: 'day90',
    weekNumber: 12,
    dayNumber: 90,
    monthNumber: 9,
    ageRange: '12-24m',
    title: '¡Mes 9! Nuevos alimentos: Pan y Pasta',
    description: 'Introducimos pan integral y pasta pequeña.',
    foodGroup: 'Cereales',
    specificFood: 'Pan + Pasta',
    portionSize: 'Total: 400-450g diarios',
    frequency: '3 comidas + 2 snacks',
    mealsPerDay: 3,
    meals: [
      {
        type: 'almuerzo',
        title: 'Desayuno: Pan con Aguacate',
        food: 'Pan integral + Aguacate',
        portion: '1 rebanada de pan con aguacate',
        recipe: `🥖 PAN CON AGUACATE

Ingredientes:
• 1 rebanada de pan integral
• 1/4 de aguacate maduro

Preparación:
1. Tuesta ligeramente el pan
2. Aplasta el aguacate sobre el pan
3. Corta en tiras pequeñas

💡 El pan integral aporta fibra
💡 Textura para masticar`
      },
      {
        type: 'almuerzo',
        title: 'Almuerzo: Pasta con Verduras y Pollo',
        food: 'Pasta pequeña + Verduras + Pollo',
        portion: '7-8 cucharadas (150g)',
        recipe: `🍽️ ALMUERZO - PASTA CON VERDURAS Y POLLO

Ingredientes:
• 2 cucharadas de pasta pequeña (estrellas, letras)
• 40g de pollo
• Verduras variadas

Preparación:
1. Cocina la pasta 12-15 min hasta muy blanda
2. Cocina el pollo y verduras al vapor 20 min
3. Tritura parcialmente
4. Mezcla con la pasta

💡 La pasta aporta carbohidratos`
      },
      {
        type: 'cena',
        title: 'Cena: Yogur con Cereal y Fruta',
        food: 'Yogur + Cereal + Fruta',
        portion: '1 yogur con toppings (120g)',
        recipe: `🌙 CENA - YOGUR CON CEREAL Y FRUTA

Ingredientes:
• 1 yogur natural
• 1 cucharada de cereal (avena, trigo)
• Fruta variada en trocitos

Preparación:
1. Mezcla el yogur con el cereal
2. Añade la fruta en trocitos pequeños
3. Deja reposar 5 min

💡 Cena nutritiva y fácil`
      }
    ],
    breastmilkNote: 'Continúa con la lactancia materna 2 veces al día.',
    tips: JSON.stringify([
      'El pan debe ser integral y sin corteza dura',
      'La pasta debe estar muy bien cocida',
      'Ofrece trocitos para que coma solo'
    ]),
    warnings: JSON.stringify([
      'Vigila que no se atragante con trozos de pan',
      'La pasta no debe quedar al dente'
    ])
  },

  // DÍA 120: Mes 10
  {
    id: 'day120',
    weekNumber: 16,
    dayNumber: 120,
    monthNumber: 10,
    ageRange: '12-24m',
    title: '¡Mes 10! Nuevos alimentos: Frutos rojos y Frutos secos triturados',
    description: 'Introducimos fresas, frambuesas y frutos secos en crema.',
    foodGroup: 'Frutas/Frutos secos',
    specificFood: 'Frutos rojos + Crema de cacahuete',
    portionSize: 'Total: 450-500g diarios',
    frequency: '3 comidas + 2 snacks',
    mealsPerDay: 3,
    meals: [
      {
        type: 'almuerzo',
        title: 'Desayuno: Pan con Crema de Cacahuete',
        food: 'Pan + Crema de cacahuete 100%',
        portion: '1 rebanada con crema',
        recipe: `🥜 PAN CON CREMA DE CACAHUETE

Ingredientes:
• 1 rebanada de pan integral
• 1 cucharadita de crema de cacahuete 100% (sin azúcar ni sal)

Preparación:
1. Unta la crema de cacahuete sobre el pan
2. Corta en tiras pequeñas

⚠️ IMPORTANTE:
• Usa crema de cacahuete 100% sin azúcar ni sal
• Ofrece poca cantidad al principio
• Los frutos secos son alérgenos comunes

💡 Buena fuente de proteína y grasas saludables`
      },
      {
        type: 'almuerzo',
        title: 'Almuerzo: Pollo con Verduras y Arroz',
        food: 'Pollo + Verduras + Arroz',
        portion: '7-8 cucharadas (150g)',
        recipe: `🍽️ ALMUERZO - POLLO CON VERDURAS Y ARROZ

Ingredientes:
• 45g de pechuga de pollo
• 2 cucharadas de arroz
• Verduras variadas

Preparación:
1. Cocina todo al vapor 20-25 min
2. Tritura parcialmente o deja trocitos

💡 El bebé ya puede comer trocitos pequeños`
      },
      {
        type: 'cena',
        title: 'Cena: Yogur con Fresas',
        food: 'Yogur + Fresas',
        portion: '1 yogur con fresas (120g)',
        recipe: `🍓 YOGUR CON FRESAS

Ingredientes:
• 1 yogur natural
• 2-3 fresas maduras

Preparación:
1. Lava y corta las fresas en trocitos pequeños
2. Mézclalas con el yogur

💡 Las fresas son ricas en vitamina C
⚠️ Introduce frutos rojos gradualmente`
      }
    ],
    breastmilkNote: 'Continúa con la lactancia materna.',
    tips: JSON.stringify([
      'Los frutos rojos pueden causar alergias',
      'Los frutos secos deben estar triturados o en crema',
      'Nunca des frutos secos enteros (riesgo de atragantamiento)'
    ]),
    warnings: JSON.stringify([
      'Los frutos secos enteros son peligrosos',
      'Usa solo cremas 100% naturales'
    ])
  },

  // DÍA 180: Mes 12
  {
    id: 'day180',
    weekNumber: 24,
    dayNumber: 180,
    monthNumber: 12,
    ageRange: '12-24m',
    title: '¡Año de vida! Transición a dieta familiar',
    description: 'El bebé puede empezar a comer la misma comida de la familia.',
    foodGroup: 'Varios',
    specificFood: 'Comida familiar adaptada',
    portionSize: 'Total: 500-600g diarios',
    frequency: '3 comidas + 2-3 snacks',
    mealsPerDay: 3,
    meals: [
      {
        type: 'almuerzo',
        title: 'Desayuno: Desayuno completo',
        food: 'Huevo + Pan + Fruta + Leche',
        portion: '1 huevo + pan + fruta',
        recipe: `🍳 DESAYUNO COMPLETO

Opciones:
• Tortilla de huevo con pan
• Huevos revueltos con pan tostado
• Yogur con cereal y fruta
• Papilla de avena con frutas

💡 El desayuno debe ser nutritivo
💡 Ofrece leche de vaca entera (si no hay alergia)`
      },
      {
        type: 'almuerzo',
        title: 'Almuerzo: Comida familiar adaptada',
        food: 'Lo que come la familia (sin sal)',
        portion: '8-10 cucharadas (180-200g)',
        recipe: `🍽️ ALMUERZO - COMIDA FAMILIAR

El bebé puede comer:
• Lo que cocina la familia
• Sin añadir sal
• Trozos pequeños
• Sin alimentos procesados

Ejemplos:
• Estofado de pollo con verduras
• Lentejas estofadas
• Arroz con pollo
• Pasta con verduras

💡 Cocina para toda la familia sin sal
💡 Añade sal al final solo para los adultos`
      },
      {
        type: 'cena',
        title: 'Cena: Cena ligera',
        food: 'Verduras + Proteína ligera',
        portion: '6-7 cucharadas (120-150g)',
        recipe: `🌙 CENA LIGERA

Opciones:
• Crema de verduras
• Yogur con fruta
• Tortilla de verduras
• Queso fresco con fruta

💡 La cena debe ser más ligera
💡 2-3 horas antes de dormir`
      }
    ],
    breastmilkNote: 'La lactancia materna puede continuar tanto como madre y bebé deseen.',
    tips: JSON.stringify([
      'El bebé ya puede usar cuchara y tenedor',
      'Anímalo a comer solo',
      'Ofrece variedad de alimentos',
      'La leche de vaca entera puede introducirse como bebida'
    ]),
    warnings: JSON.stringify([
      'Evita alimentos con riesgo de atragantamiento: uvas enteras, nueces, etc.',
      'No añadas azúcar a los alimentos'
    ])
  },

  // DÍAS RESTANTES: Estructura para meses 13-24
  // Se pueden agregar más días según necesidad...

  // DÍA 365: Mes 18
  {
    id: 'day365',
    weekNumber: 50,
    dayNumber: 365,
    monthNumber: 18,
    ageRange: '12-24m',
    title: '¡Año y medio! Dieta completa',
    description: 'El niño come prácticamente de todo.',
    foodGroup: 'Varios',
    specificFood: 'Dieta variada',
    portionSize: 'Total: 700-800g diarios',
    frequency: '3 comidas + 2-3 snacks',
    mealsPerDay: 3,
    meals: [
      {
        type: 'almuerzo',
        title: 'Desayuno completo',
        food: 'Variedad de opciones',
        portion: '150-200g',
        recipe: `🍳 DESAYUNO A LOS 18 MESES

Opciones variadas:
• Huevos (revueltos, tortilla, cocidos)
• Pan integral con queso o crema de cacahuete
• Cereal con leche
• Yogur con fruta y avena
• Frutas variadas

💡 El desayuno debe aportar energía para todo el día`
      },
      {
        type: 'almuerzo',
        title: 'Almuerzo familiar',
        food: 'Comida de la familia',
        portion: '200-250g',
        recipe: `🍽️ ALMUERZO FAMILIAR

El niño ya puede comer:
• Casi todo lo que come la familia
• Con adaptaciones de textura si es necesario
• Porciones pequeñas
• Usando cubiertos

💡 Fomenta la autonomía en la comida
💡 Come en familia para modelar hábitos`
      },
      {
        type: 'cena',
        title: 'Cena nutritiva',
        food: 'Opciones variadas',
        portion: '150-200g',
        recipe: `🌙 CENA NUTRITIVA

Opciones:
• Crema de verduras con picatostes
• Pasta con queso y verduras
• Tortilla de verduras
• Yogur con fruta y granola

💡 Cena 2-3 horas antes de dormir
💡 Evita alimentos muy pesados`
      }
    ],
    breastmilkNote: 'La lactancia materna puede continuar según deseo de madre e hijo.',
    tips: JSON.stringify([
      'El niño puede usar cubiertos con ayuda',
      'Ofrece variedad de texturas y sabores',
      'Inclúyelo en la preparación de comidas simples'
    ]),
    warnings: JSON.stringify([
      'Sigue vigilando durante las comidas',
      'Evita aún los alimentos de alto riesgo (frutos secos enteros, uvas enteras)'
    ])
  }
]

// Función para obtener los días de un mes específico
export function getDaysForMonth(month: number): IntroStep[] {
  return introStepsData.filter(step => step.monthNumber === month)
}

// Función para obtener todos los meses disponibles
export function getAvailableMonths(): number[] {
  const months = new Set(introStepsData.map(step => step.monthNumber))
  return Array.from(months).sort((a, b) => a - b)
}
