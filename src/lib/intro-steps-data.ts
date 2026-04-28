// Datos de alimentación para bebés de 6 a 24 meses
// Incluye múltiples comidas por día según la edad
// Basado en recomendaciones OMS, UNICEF y AEPAP

export interface Meal {
  type: 'desayuno' | 'almuerzo' | 'merienda' | 'cena'
  title: string
  foods: string[]
  recipe?: {
    name: string
    ingredients: string[]
    instructions: string[]
    prepTime: number
    cookTime: number
    tips?: string[]
  }
}

export interface IntroStep {
  id: string
  monthNumber: number
  weekNumber: number
  dayNumber: number
  ageRange: string
  title: string
  description: string
  mealsPerDay: number
  meals: Meal[]
  tips?: string[]
  warnings?: string[]
  developmentalMilestone?: string
}

// Función para generar datos de un mes completo
function generateMonthData(month: number): IntroStep[] {
  const steps: IntroStep[] = []
  
  // Configuración por edad
  const ageConfig = {
    6: { mealsPerDay: 1, ageRange: '6-7 meses', meals: ['almuerzo'], milestone: 'Primeras cucharadas, descubre sabores' },
    7: { mealsPerDay: 2, ageRange: '7-8 meses', meals: ['almuerzo', 'merienda'], milestone: 'Aumenta variedad, usa las manos' },
    8: { mealsPerDay: 2, ageRange: '8-9 meses', meals: ['almuerzo', 'merienda'], milestone: 'Texturas más gruesas, intenta usar cuchara' },
    9: { mealsPerDay: 3, ageRange: '9-10 meses', meals: ['desayuno', 'almuerzo', 'merienda'], milestone: 'Come con los dedos, reconoce alimentos' },
    10: { mealsPerDay: 3, ageRange: '10-11 meses', meals: ['desayuno', 'almuerzo', 'merienda'], milestone: 'Mastica mejor, bebe de vaso con ayuda' },
    11: { mealsPerDay: 3, ageRange: '11-12 meses', meals: ['desayuno', 'almuerzo', 'merienda'], milestone: 'Usa cuchara con ayuda,Come trocitos' },
    12: { mealsPerDay: 4, ageRange: '12-15 meses', meals: ['desayuno', 'almuerzo', 'merienda', 'cena'], milestone: 'Come casi todo, se autonalimenta más' },
    13: { mealsPerDay: 4, ageRange: '13-15 meses', meals: ['desayuno', 'almuerzo', 'merienda', 'cena'], milestone: 'Usa tenedor con ayuda' },
    14: { mealsPerDay: 4, ageRange: '14-15 meses', meals: ['desayuno', 'almuerzo', 'merienda', 'cena'], milestone: 'Reconoce colores de alimentos' },
    15: { mealsPerDay: 4, ageRange: '15-18 meses', meals: ['desayuno', 'almuerzo', 'merienda', 'cena'], milestone: 'Puede usar cuchara solo' },
    16: { mealsPerDay: 4, ageRange: '16-18 meses', meals: ['desayuno', 'almuerzo', 'merienda', 'cena'], milestone: 'Dice nombres de alimentos' },
    17: { mealsPerDay: 4, ageRange: '17-18 meses', meals: ['desayuno', 'almuerzo', 'merienda', 'cena'], milestone: 'Come junto a la familia' },
    18: { mealsPerDay: 4, ageRange: '18-24 meses', meals: ['desayuno', 'almuerzo', 'merienda', 'cena'], milestone: 'Come solo la mayoría del tiempo' },
    19: { mealsPerDay: 4, ageRange: '19-21 meses', meals: ['desayuno', 'almuerzo', 'merienda', 'cena'], milestone: 'Ayuda a poner la mesa' },
    20: { mealsPerDay: 4, ageRange: '20-21 meses', meals: ['desayuno', 'almuerzo', 'merienda', 'cena'], milestone: 'Expresa preferencias' },
    21: { mealsPerDay: 4, ageRange: '21-24 meses', meals: ['desayuno', 'almuerzo', 'merienda', 'cena'], milestone: 'Come trozos grandes seguros' },
    22: { mealsPerDay: 4, ageRange: '22-24 meses', meals: ['desayuno', 'almuerzo', 'merienda', 'cena'], milestone: 'Usa cubiertos correctamente' },
    23: { mealsPerDay: 4, ageRange: '23-24 meses', meals: ['desayuno', 'almuerzo', 'merienda', 'cena'], milestone: 'Come independientemente' },
    24: { mealsPerDay: 4, ageRange: '24 meses+', meals: ['desayuno', 'almuerzo', 'merienda', 'cena'], milestone: 'Alimentación casi como adulto' },
  }

  // Alimentos por mes (progresión)
  const foodsByMonth: Record<number, { verduras: string[], frutas: string[], proteinas: string[], cereales: string[], lacteos: string[] }> = {
    6: {
      verduras: ['Calabacín', 'Calabaza', 'Zanahoria', 'Patata', 'Judías verdes', 'Puerro'],
      frutas: ['Pera', 'Manzana', 'Plátano'],
      proteinas: [],
      cereales: ['Cereales de arroz'],
      lacteos: []
    },
    7: {
      verduras: ['Calabacín', 'Calabaza', 'Zanahoria', 'Patata', 'Judías verdes', 'Puerro', 'Espinacas', 'Acelgas'],
      frutas: ['Pera', 'Manzana', 'Plátano', 'Aguacate', 'Melocotón'],
      proteinas: ['Pollo', 'Ternera'],
      cereales: ['Cereales de arroz', 'Cereales de maíz'],
      lacteos: []
    },
    8: {
      verduras: ['Calabacín', 'Calabaza', 'Zanahoria', 'Patata', 'Judías verdes', 'Puerro', 'Espinacas', 'Acelgas', 'Brócoli'],
      frutas: ['Pera', 'Manzana', 'Plátano', 'Aguacate', 'Melocotón', 'Albaricoque'],
      proteinas: ['Pollo', 'Ternera', 'Pavo', 'Conejo'],
      cereales: ['Cereales de arroz', 'Cereales de maíz', 'Avena'],
      lacteos: []
    },
    9: {
      verduras: ['Calabacín', 'Calabaza', 'Zanahoria', 'Patata', 'Judías verdes', 'Puerro', 'Espinacas', 'Acelgas', 'Brócoli', 'Coliflor'],
      frutas: ['Pera', 'Manzana', 'Plátano', 'Aguacate', 'Melocotón', 'Albaricoque', 'Ciruela', 'Uva (sin piel ni pepitas)'],
      proteinas: ['Pollo', 'Ternera', 'Pavo', 'Conejo', 'Jamón serrano (poco sal)'],
      cereales: ['Cereales de arroz', 'Cereales de maíz', 'Avena', 'Pan (sin corteza)'],
      lacteos: ['Yogur natural']
    },
    10: {
      verduras: ['Calabacín', 'Calabaza', 'Zanahoria', 'Patata', 'Judías verdes', 'Puerro', 'Espinacas', 'Acelgas', 'Brócoli', 'Coliflor', 'Remolacha'],
      frutas: ['Pera', 'Manzana', 'Plátano', 'Aguacate', 'Melocotón', 'Albaricoque', 'Ciruela', 'Uva', 'Fresa', 'Frambuesa'],
      proteinas: ['Pollo', 'Ternera', 'Pavo', 'Conejo', 'Jamón serrano', 'Huevo (yema primero)'],
      cereales: ['Cereales de arroz', 'Cereales de maíz', 'Avena', 'Pan', 'Pasta pequeña'],
      lacteos: ['Yogur natural', 'Queso fresco']
    },
    11: {
      verduras: ['Calabacín', 'Calabaza', 'Zanahoria', 'Patata', 'Judías verdes', 'Puerro', 'Espinacas', 'Acelgas', 'Brócoli', 'Coliflor', 'Remolacha', 'Guisantes'],
      frutas: ['Pera', 'Manzana', 'Plátano', 'Aguacate', 'Melocotón', 'Albaricoque', 'Ciruela', 'Uva', 'Fresa', 'Frambuesa', 'Mora', 'Arándanos'],
      proteinas: ['Pollo', 'Ternera', 'Pavo', 'Conejo', 'Jamón serrano', 'Huevo entero', 'Pescado blanco'],
      cereales: ['Cereales mixtos', 'Pan', 'Pasta', 'Arroz', 'Cuscús'],
      lacteos: ['Yogur natural', 'Queso fresco', 'Requesón']
    },
    12: {
      verduras: ['Todas las verduras', 'Tomate', 'Pimiento', 'Pepino'],
      frutas: ['Todas las frutas', 'Naranja', 'Mandarina', 'Piña', 'Melón', 'Sandía'],
      proteinas: ['Pollo', 'Ternera', 'Pavo', 'Conejo', 'Jamón', 'Huevo', 'Pescado blanco', 'Pescado azul', 'Legumbres (lentejas, garbanzos)'],
      cereales: ['Todos los cereales', 'Pan integral', 'Pasta integral'],
      lacteos: ['Yogur', 'Queso fresco', 'Requesón', 'Leche de crecimiento']
    }
  }

  // Para meses 13-24, la dieta es más variada
  for (let m = 13; m <= 24; m++) {
    foodsByMonth[m] = {
      verduras: ['Todas las verduras y hortalizas'],
      frutas: ['Todas las frutas'],
      proteinas: ['Todas las carnes, pescados, huevos, legumbres'],
      cereales: ['Todos los cereales y derivados'],
      lacteos: ['Leche de crecimiento', 'Yogur', 'Quesos variados']
    }
  }

  const config = ageConfig[month as keyof typeof ageConfig] || ageConfig[12]
  const foods = foodsByMonth[month] || foodsByMonth[12]
  
  // Generar 7 días (1 semana) de ejemplo por mes
  for (let day = 1; day <= 7; day++) {
    const meals: Meal[] = config.meals.map((mealType, index) => {
      const mealFoods = getMealFoods(month, day, mealType, foods)
      return {
        type: mealType as Meal['type'],
        title: getMealTitle(mealType),
        foods: mealFoods,
        recipe: generateRecipe(mealFoods, month, mealType)
      }
    })

    steps.push({
      id: `m${month}d${day}`,
      monthNumber: month,
      weekNumber: Math.ceil(day / 7),
      dayNumber: day,
      ageRange: config.ageRange,
      title: `Mes ${month} - Día ${day}`,
      description: getDayDescription(month, day),
      mealsPerDay: config.mealsPerDay,
      meals,
      tips: getTips(month, day),
      warnings: getWarnings(month),
      developmentalMilestone: config.milestone
    })
  }

  return steps
}

function getMealFoods(month: number, day: number, mealType: string, foods: any): string[] {
  const mealOptions: Record<string, string[][]> = {
    desayuno: [
      ['Papilla de cereales con leche', 'Fruta troceada'],
      ['Pan con tomate', 'Fruta', 'Leche'],
      ['Yogur con frutas', 'Cereales'],
      ['Tostada con aguacate', 'Fruta'],
      ['Galletas caseras', 'Leche', 'Fruta'],
      ['Papilla de avena', 'Fruta'],
      ['Tortita de plátano', 'Leche']
    ],
    almuerzo: [
      ['Puré de verduras', 'Pollo', 'Arroz'],
      ['Crema de calabaza', 'Ternera', 'Pan'],
      ['Lentejas estofadas', 'Verduras', 'Pan'],
      ['Arroz con pollo', 'Verduras'],
      ['Puré de patata', 'Pescado blanco', 'Zanahoria'],
      ['Macarrones con verduras', 'Queso'],
      ['Sopa de fideos', 'Pollo', 'Verduras']
    ],
    merienda: [
      ['Yogur natural', 'Fruta'],
      ['Queso fresco', 'Fruta'],
      ['Galletas integrales', 'Zumo natural'],
      ['Batido de frutas', 'Cereales'],
      ['Tostada con queso', 'Fruta'],
      ['Yogur con avena', 'Frutos rojos'],
      ['Macedonia de frutas']
    ],
    cena: [
      ['Crema de verduras', 'Pan', 'Queso'],
      ['Puré de patata', 'Huevo pochado'],
      ['Sopa de verduras', 'Pan'],
      ['Arroz con verduras'],
      ['Puré de calabacín', 'Queso fresco'],
      ['Crema de zanahoria', 'Pan'],
      ['Tortilla francesa', 'Pan', 'Verduras']
    ]
  }

  const options = mealOptions[mealType] || mealOptions.almuerzo
  return options[(day - 1) % options.length]
}

function getMealTitle(mealType: string): string {
  const titles: Record<string, string> = {
    desayuno: 'Desayuno',
    almuerzo: 'Almuerzo',
    merienda: 'Merienda',
    cena: 'Cena'
  }
  return titles[mealType] || 'Comida'
}

function generateRecipe(foods: string[], month: number, mealType: string): Meal['recipe'] {
  const mainFood = foods[0]
  
  return {
    name: mainFood,
    ingredients: foods.map(f => `${f} (cantidad según edad)`),
    instructions: [
      'Lavar bien todos los ingredientes',
      'Cocinar al vapor o hervir según corresponda',
      'Triturar o trocear según la edad del bebé',
      'Servir a temperatura adecuada'
    ],
    prepTime: 10,
    cookTime: 20,
    tips: [
      `Para bebés de ${month} meses, la textura debe ser ${month < 9 ? 'muy suave/triturada' : month < 12 ? 'troceada pequeña' : 'normal'}`,
      'Siempre supervisar al bebé mientras come'
    ]
  }
}

function getDayDescription(month: number, day: number): string {
  const descriptions = [
    `Día de alimentación para bebé de ${month} meses. Hoy ofrecemos variedad de alimentos nutritivos.`,
    `Continuamos con alimentos adecuados para ${month} meses. Recuerda ofrecer agua con las comidas.`,
    `Tercer día del mes ${month}. El bebé ya puede explorar nuevas texturas.`,
    `Variedad de sabores y nutrientes para tu bebé de ${month} meses.`,
    `Comida equilibrada para el desarrollo de tu pequeño.`,
    `Alimentos ricos en vitaminas y minerales esenciales.`,
    `Día de descanso de nuevos alimentos. Repasa lo aprendido esta semana.`
  ]
  return descriptions[(day - 1) % descriptions.length]
}

function getTips(month: number, day: number): string[] {
  const baseTips = [
    'Ofrece agua en cada comida',
    'Mantén un ambiente tranquilo durante las comidas',
    'No fuerces al bebé a comer',
    'Respeta las señales de saciedad'
  ]
  
  if (month >= 9) {
    baseTips.push('El bebé puede empezar a usar la cuchara con ayuda')
  }
  if (month >= 12) {
    baseTips.push('Puede comer trozos más grandes bajo supervisión')
  }
  if (month >= 18) {
    baseTips.push('Fomenta la independencia alimentaria')
  }
  
  return baseTips
}

function getWarnings(month: number): string[] {
  const warnings = [
    'Evita alimentos con riesgo de atragantamiento: nueces enteras, uvas enteras, salchichas',
    'No añadas sal ni azúcar a las comidas',
    'Miel solo después de los 12 meses'
  ]
  
  if (month < 12) {
    warnings.push('Evita leche de vaca como bebida principal hasta los 12 meses')
  }
  if (month < 9) {
    warnings.push('Todos los alimentos deben estar bien triturados')
  }
  
  return warnings
}

// Generar datos para todos los meses (6-24)
export const introStepsData: IntroStep[] = [
  ...generateMonthData(6),
  ...generateMonthData(7),
  ...generateMonthData(8),
  ...generateMonthData(9),
  ...generateMonthData(10),
  ...generateMonthData(11),
  ...generateMonthData(12),
  ...generateMonthData(13),
  ...generateMonthData(14),
  ...generateMonthData(15),
  ...generateMonthData(16),
  ...generateMonthData(17),
  ...generateMonthData(18),
  ...generateMonthData(19),
  ...generateMonthData(20),
  ...generateMonthData(21),
  ...generateMonthData(22),
  ...generateMonthData(23),
  ...generateMonthData(24),
]

// Función para agrupar por mes
export function groupStepsByMonth(steps: IntroStep[]): Record<number, IntroStep[]> {
  return steps.reduce((acc, step) => {
    if (!acc[step.monthNumber]) {
      acc[step.monthNumber] = []
    }
    acc[step.monthNumber].push(step)
    return acc
  }, {} as Record<number, IntroStep[]>)
}

// Función para agrupar por semana (mantener compatibilidad)
export function groupStepsByWeek(steps: IntroStep[]): Record<number, IntroStep[]> {
  return steps.reduce((acc, step) => {
    const key = step.weekNumber
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(step)
    return acc
  }, {} as Record<number, IntroStep[]>)
}

// Obtener configuración de edad
export function getAgeConfig(month: number) {
  const configs: Record<number, { mealsPerDay: number; meals: string[] }> = {
    6: { mealsPerDay: 1, meals: ['almuerzo'] },
    7: { mealsPerDay: 2, meals: ['almuerzo', 'merienda'] },
    8: { mealsPerDay: 2, meals: ['almuerzo', 'merienda'] },
    9: { mealsPerDay: 3, meals: ['desayuno', 'almuerzo', 'merienda'] },
    10: { mealsPerDay: 3, meals: ['desayuno', 'almuerzo', 'merienda'] },
    11: { mealsPerDay: 3, meals: ['desayuno', 'almuerzo', 'merienda'] },
    12: { mealsPerDay: 4, meals: ['desayuno', 'almuerzo', 'merienda', 'cena'] },
  }
  
  // Meses 13-24 tienen 4 comidas
  if (month >= 12) {
    return { mealsPerDay: 4, meals: ['desayuno', 'almuerzo', 'merienda', 'cena'] }
  }
  
  return configs[month] || configs[6]
}

// Calcular mes actual basado en fecha de nacimiento
export function calculateCurrentMonth(birthDate: Date): number {
  const today = new Date()
  const monthsDiff = (today.getFullYear() - birthDate.getFullYear()) * 12 
                   + (today.getMonth() - birthDate.getMonth())
  return Math.max(6, Math.min(24, monthsDiff))
}
