// Datos estáticos de introducción de alimentos
// Basados en recomendaciones OMS, UNICEF y AEPAP
// Datos completos para meses 6-24

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
    endDay: 90,
    mealsPerDay: 1,
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
    startDay: 91,
    endDay: 210,
    mealsPerDay: 2,
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
    startDay: 211,
    endDay: 570,
    mealsPerDay: 3,
    color: 'blue',
    bgClass: 'bg-blue-50',
    borderClass: 'border-blue-200',
    textClass: 'text-blue-700',
    icon: '🍽️',
    description: 'Transición a comida familiar. Tres comidas + snacks.'
  }
}

export function getAgeRangeForDay(day: number): '6-8m' | '8-12m' | '12-24m' {
  if (day <= 90) return '6-8m'
  if (day <= 210) return '8-12m'
  return '12-24m'
}

export function getAgeRangeForMonth(month: number): '6-8m' | '8-12m' | '12-24m' {
  if (month <= 8) return '6-8m'
  if (month <= 12) return '8-12m'
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

export function groupStepsByMonth(steps: IntroStep[]): Record<number, IntroStep[]> {
  const grouped: Record<number, IntroStep[]> = {}
  steps.forEach(step => {
    if (!grouped[step.monthNumber]) {
      grouped[step.monthNumber] = []
    }
    grouped[step.monthNumber].push(step)
  })
  return grouped
}

// ==================== FUNCIÓN GENERADORA DE DATOS ====================
function createDayData(
  dayNum: number,
  monthNum: number,
  weekNum: number,
  ageRange: '6-8m' | '8-12m' | '12-24m',
  title: string,
  description: string,
  foodGroup: string,
  specificFood: string,
  portionSize: string,
  frequency: string,
  mealsPerDay: number,
  meals: Meal[],
  breastmilkNote: string,
  tips: string[],
  warnings: string[]
): IntroStep {
  return {
    id: `day${dayNum}`,
    weekNumber: weekNum,
    dayNumber: dayNum,
    monthNumber: monthNum,
    ageRange,
    title,
    description,
    foodGroup,
    specificFood,
    portionSize,
    frequency,
    mealsPerDay,
    meals,
    breastmilkNote,
    tips: JSON.stringify(tips),
    warnings: JSON.stringify(warnings)
  }
}

// ==================== DATOS COMPLETOS ====================
export const introStepsData: IntroStep[] = [

  // ==================== MES 6 (Días 1-30) ====================
  // DÍA 1-3: Calabacín
  createDayData(1, 6, 1, '6-8m',
    '¡Primer día de alimentación complementaria!',
    'Hoy comienza una nueva etapa. Ofrece tu primera cucharada de puré de calabacín.',
    'Verduras', 'Calabacín', '2-3 cucharaditas (10-15g)', '1 comida al día (almuerzo)', 1,
    [{ type: 'almuerzo', title: 'Puré de Calabacín', food: 'Calabacín', portion: '2-3 cucharaditas (10-15g)',
      recipe: `🥄 PURÉ DE CALABACÍN\n\nIngredientes:\n• 1 calabacín pequeño (100g)\n• 2-3 cucharadas de agua\n\nPreparación:\n1. Lava y pela el calabacín\n2. Córtalo en cubos\n3. Cocina al vapor 10-15 min\n4. Tritura con agua de cocción` }],
    'Continúa con la lactancia materna a demanda.',
    ['Elige un momento tranquilo', 'Usa cuchara pequeña de silicona', 'No te preocupes si escupe la comida'],
    ['No añadas sal ni azúcar', 'Observa reacciones alérgicas 24-48h']
  ),
  createDayData(2, 6, 1, '6-8m',
    'Segundo día con calabacín',
    'Continúa ofreciendo puré de calabacín. Aumenta ligeramente la cantidad.',
    'Verduras', 'Calabacín', '3-4 cucharadas (20-30g)', '1 comida al día', 1,
    [{ type: 'almuerzo', title: 'Puré de Calabacín', food: 'Calabacín', portion: '3-4 cucharadas (20-30g)',
      recipe: `🥄 PURÉ DE CALABACÍN\n\nIngredientes:\n• 1 calabacín mediano (150g)\n• 3-4 cucharadas de agua\n\nPreparación:\n1. Lava, pela y corta en cubos\n2. Cocina al vapor 12-15 min\n3. Tritura hasta papilla líquida` }],
    'La lactancia sigue siendo la fuente principal de nutrición.',
    ['Intenta que el bebé abra la boca', 'Habla suavemente durante la comida'],
    ['Observa si hay sarpullidos o vómitos']
  ),
  createDayData(3, 6, 1, '6-8m',
    'Tercer día con calabacín',
    'Último día de prueba con calabacín. Mañana podrás introducir un nuevo alimento.',
    'Verduras', 'Calabacín', '4-5 cucharadas (30-40g)', '1 comida al día', 1,
    [{ type: 'almuerzo', title: 'Puré de Calabacín', food: 'Calabacín', portion: '4-5 cucharadas (30-40g)',
      recipe: `🥄 PURÉ DE CALABACÍN\n\nIngredientes:\n• 1 calabacín mediano (150g)\n• 1-2 cucharadas de agua\n\n✅ CALABACÍN APROBADO` }],
    'Mantén las tomas de pecho habituales.',
    ['El bebé ya debería estar más acostumbrado a la cuchara'],
    ['Si no hubo reacciones, el calabacín está aprobado']
  ),
  // DÍA 4-6: Calabaza
  createDayData(4, 6, 1, '6-8m',
    'Nuevo alimento: Calabaza',
    'Hoy introducimos la calabaza. Es dulce y suave, ideal para bebés.',
    'Verduras', 'Calabaza', '2-3 cucharadas (15-20g)', '1 comida al día', 1,
    [{ type: 'almuerzo', title: 'Puré de Calabaza', food: 'Calabaza', portion: '2-3 cucharadas (15-20g)',
      recipe: `🥄 PURÉ DE CALABAZA\n\nIngredientes:\n• 150g de calabaza pelada\n• 3-4 cucharadas de agua\n\nPreparación:\n1. Pela y corta en cubos\n2. Cocina al vapor 15-20 min\n3. Tritura hasta obtener puré cremoso` }],
    'Amamanta a demanda.',
    ['La calabaza es naturalmente dulce', 'Cocina al vapor para conservar nutrientes'],
    ['Es un alimento nuevo: observa durante 2-3 días']
  ),
  createDayData(5, 6, 1, '6-8m',
    'Continúa con calabaza',
    'Sigue probando la calabaza. Puedes mezclar con calabacín ya aprobado.',
    'Verduras', 'Calabaza + Calabacín', '3-4 cucharadas (25-35g)', '1 comida al día', 1,
    [{ type: 'almuerzo', title: 'Puré de Calabaza y Calabacín', food: 'Calabaza + Calabacín', portion: '3-4 cucharadas (25-35g)',
      recipe: `🥄 PURÉ DE CALABAZA Y CALABACÍN\n\nIngredientes:\n• 100g de calabaza\n• 50g de calabacín\n• 2-3 cucharadas de agua\n\nPreparación:\n1. Cocina la calabaza 15 min\n2. Añade el calabacín 10 min más\n3. Tritura todo junto` }],
    'Ofrece el pecho antes del puré.',
    ['Puedes mezclar con calabacín ya aprobado', 'Deja que el bebé toque la comida'],
    ['Observa las heces del bebé']
  ),
  createDayData(6, 6, 1, '6-8m',
    'Último día de calabaza',
    'Finalizamos la prueba de calabaza. ✅ CALABAZA APROBADA',
    'Verduras', 'Calabaza', '4-5 cucharadas (35-45g)', '1 comida al día', 1,
    [{ type: 'almuerzo', title: 'Puré de Calabaza', food: 'Calabaza', portion: '4-5 cucharadas (35-45g)',
      recipe: `🥄 PURÉ DE CALABAZA\n\n✅ CALABAZA APROBADA - Añádela a tu lista de alimentos seguros` }],
    'La lactancia materna proporciona anticuerpos protectores.',
    ['El bebé puede empezar a mostrar preferencias'],
    ['Si no hubo reacciones, la calabaza está aprobada']
  ),
  // DÍA 7-9: Zanahoria
  createDayData(7, 6, 1, '6-8m',
    'Nuevo alimento: Zanahoria',
    'Introducimos la zanahoria, rica en vitamina A.',
    'Verduras', 'Zanahoria', '2-3 cucharadas (15-20g)', '1 comida al día', 1,
    [{ type: 'almuerzo', title: 'Puré de Zanahoria', food: 'Zanahoria', portion: '2-3 cucharadas (15-20g)',
      recipe: `🥄 PURÉ DE ZANAHORIA\n\nIngredientes:\n• 1 zanahoria mediana (100g)\n• 3-4 cucharadas de agua\n\nPreparación:\n1. Pela y corta en rodajas\n2. Cocina al vapor 20-25 min\n3. Tritura muy bien` }],
    'Continúa amamantando a demanda.',
    ['La zanahoria tarda más en cocinarse', 'Su dulzor natural la hace atractiva'],
    ['Puede causar estreñimiento en algunos bebés']
  ),
  createDayData(8, 6, 2, '6-8m',
    'Segundo día con zanahoria',
    'Continúa con zanahoria. Puedes mezclar con calabacín ya aprobado.',
    'Verduras', 'Zanahoria + Calabacín', '3-4 cucharadas (25-35g)', '1 comida al día', 1,
    [{ type: 'almuerzo', title: 'Puré de Zanahoria con Calabacín', food: 'Zanahoria + Calabacín', portion: '3-4 cucharadas (25-35g)',
      recipe: `🥄 PURÉ DE ZANAHORIA Y CALABACÍN\n\nIngredientes:\n• 1 zanahoria pequeña\n• 1/2 calabacín\n• Agua de cocción` }],
    'Ofrece el pecho después del puré.',
    ['Mezclar alimentos conocidos ayuda a aceptar sabores'],
    ['Solo mezcla alimentos ya probados y aprobados']
  ),
  createDayData(9, 6, 2, '6-8m',
    'Último día de zanahoria',
    '✅ ZANAHORIA APROBADA. Finalizamos la prueba de zanahoria.',
    'Verduras', 'Zanahoria', '4-5 cucharadas (35-45g)', '1 comida al día', 1,
    [{ type: 'almuerzo', title: 'Puré de Verduras Mixtas', food: 'Zanahoria + Calabacín + Calabaza', portion: '4-5 cucharadas (35-45g)',
      recipe: `🥄 PURÉ DE TRES VERDURAS\n\n✅ ZANAHORIA APROBADA\n\nVaría las mezclas para que el bebé no se aburra` }],
    'Mantén la lactancia a demanda.',
    ['Puedes congelar puré de zanahoria en cubitos'],
    ['Si hay estreñimiento, ofrece más agua']
  ),
  // DÍA 10-12: Patata
  createDayData(10, 6, 2, '6-8m',
    'Nuevo alimento: Patata',
    'Introducimos la patata, un carbohidrato energético y muy suave.',
    'Cereales', 'Patata', '2-3 cucharadas (20-30g)', '1 comida al día', 1,
    [{ type: 'almuerzo', title: 'Puré de Patata', food: 'Patata', portion: '2-3 cucharadas (20-30g)',
      recipe: `🥄 PURÉ DE PATATA\n\nIngredientes:\n• 1 patata pequeña (100g)\n• 3-4 cucharadas de agua\n\nPreparación:\n1. Pela y corta en cubos\n2. Cocina al vapor 15-20 min\n3. Tritura con agua de cocción` }],
    'La patata aporta energía.',
    ['Elige patatas firmes sin brotes', 'La patata absorbe agua, añade líquido al triturar'],
    ['Nunca des patata cruda o con partes verdes']
  ),
  createDayData(11, 6, 2, '6-8m',
    'Patata + verduras',
    'Mezcla patata con las verduras ya aprobadas.',
    'Verduras', 'Patata + Verduras', '4-5 cucharadas (40-50g)', '1 comida al día', 1,
    [{ type: 'almuerzo', title: 'Puré de Patata y Verduras', food: 'Patata + Calabacín + Zanahoria', portion: '4-5 cucharadas (40-50g)',
      recipe: `🥄 PURÉ DE PATATA Y VERDURAS\n\nIngredientes:\n• 1/2 patata\n• 1/2 calabacín\n• 1 zanahoria pequeña` }],
    'Continúa con la lactancia a demanda.',
    ['La patata aporta consistencia a los purés'],
    ['Verifica que no haya reacciones a la patata']
  ),
  createDayData(12, 6, 2, '6-8m',
    'Patata aprobada',
    '✅ PATATA APROBADA. Continúa con mezclas variadas.',
    'Cereales', 'Patata', '4-5 cucharadas (40-50g)', '1 comida al día', 1,
    [{ type: 'almuerzo', title: 'Puré Variado con Patata', food: 'Patata + Verduras variadas', portion: '4-5 cucharadas (40-50g)',
      recipe: `✅ PATATA APROBADA\n\nRecetas: puré de patata y calabacín, patata y zanahoria, tres verduras` }],
    'Excelente progreso.',
    ['La patata es muy versátil'],
    ['No añadas sal a la patata']
  ),
  // DÍA 13-15: Pera
  createDayData(13, 6, 2, '6-8m',
    'Primera fruta: Pera',
    'Introducimos la pera, una fruta dulce y suave.',
    'Frutas', 'Pera', '2-3 cucharadas (20-30g)', '1 comida al día', 1,
    [{ type: 'almuerzo', title: 'Puré de Pera', food: 'Pera', portion: '2-3 cucharadas (20-30g)',
      recipe: `🍎 PURÉ DE PERA\n\nIngredientes:\n• 1 pera madura\n\nPreparación:\n1. Pela la pera\n2. Cocina al vapor 8-10 min\n3. Tritura hasta obtener puré suave` }],
    'Las frutas aportan vitaminas.',
    ['Elige una pera madura pero firme', 'Puedes ofrecerla cocida o cruda triturada'],
    ['Lava bien la fruta antes de preparar']
  ),
  createDayData(14, 6, 2, '6-8m',
    'Segundo día con pera',
    'Continúa con pera. Puedes combinar con verduras ya aprobadas.',
    'Frutas', 'Pera', '3-4 cucharadas (30-40g)', '1 comida al día', 1,
    [{ type: 'almuerzo', title: 'Pera con Verduras', food: 'Pera + Calabacín', portion: '3-4 cucharadas (30-40g)',
      recipe: `🍎 PERA CON VERDURAS\n\nIngredientes:\n• 1/2 pera madura\n• 2-3 cucharadas de puré de calabacín` }],
    'Las frutas pueden causar heces más blandas.',
    ['Observa si le gusta el sabor dulce'],
    ['No añadas azúcar ni miel']
  ),
  createDayData(15, 6, 2, '6-8m',
    'Pera aprobada',
    '✅ PERA APROBADA. Primera fruta en tu lista.',
    'Frutas', 'Pera', '4-5 cucharadas (40-50g)', '1 comida al día', 1,
    [{ type: 'almuerzo', title: 'Pera sola o combinada', food: 'Pera', portion: '4-5 cucharadas (40-50g)',
      recipe: `✅ PERA APROBADA\n\nIdeas: puré de pera solo, pera + calabacín, pera + patata` }],
    'Buen progreso.',
    ['La pera es buena fuente de fibra'],
    ['Si notas heces muy blandas, reduce la fruta']
  ),
  // DÍA 16-18: Manzana
  createDayData(16, 6, 2, '6-8m',
    'Nueva fruta: Manzana',
    'Introducimos la manzana, rica en fibra y vitaminas.',
    'Frutas', 'Manzana', '2-3 cucharadas (20-30g)', '1 comida al día', 1,
    [{ type: 'almuerzo', title: 'Compota de Manzana', food: 'Manzana', portion: '2-3 cucharadas (20-30g)',
      recipe: `🍎 COMPOTA DE MANZANA\n\nIngredientes:\n• 1 manzana dulce (Golden, Fuji)\n• 2-3 cucharadas de agua\n\nPreparación:\n1. Pela y corta\n2. Cocina al vapor 10-15 min\n3. Tritura hasta obtener compota` }],
    'La manzana es muy digestiva cocida.',
    ['Usa manzanas dulces como Golden o Fuji'],
    ['La manzana cruda puede ser difícil de digerir']
  ),
  createDayData(17, 6, 3, '6-8m',
    'Manzana + pera',
    'Combina manzana con pera para una mezcla de frutas.',
    'Frutas', 'Manzana + Pera', '3-4 cucharadas (30-40g)', '1 comida al día', 1,
    [{ type: 'almuerzo', title: 'Compota de Manzana y Pera', food: 'Manzana + Pera', portion: '3-4 cucharadas (30-40g)',
      recipe: `🍎 COMPOTA DE MANZANA Y PERA\n\nIngredientes:\n• 1/2 manzana dulce\n• 1/2 pera madura\n• 2 cucharadas de agua` }],
    'Las mezclas de frutas aportan variedad de vitaminas.',
    ['Puedes añadir una pizca de canela'],
    ['Observa si hay reacciones a la manzana']
  ),
  createDayData(18, 6, 3, '6-8m',
    'Manzana aprobada',
    '✅ MANZANA APROBADA. Tienes dos frutas en tu lista.',
    'Frutas', 'Manzana', '4-5 cucharadas (40-50g)', '1 comida al día', 1,
    [{ type: 'almuerzo', title: 'Compota variada', food: 'Manzana + Pera', portion: '4-5 cucharadas (40-50g)',
      recipe: `✅ MANZANA APROBADA\n\nCombinaciones: Manzana + Pera, Manzana + Calabaza, Manzana + Zanahoria` }],
    'Excelente progreso.',
    ['La manzana es versátil para mezclar'],
    ['No ofrezcas trozos de manzana cruda']
  ),
  // DÍA 19-21: Pollo
  createDayData(19, 6, 3, '6-8m',
    'Primera proteína: Pollo',
    'Introducimos el pollo, la primera proteína animal.',
    'Proteínas', 'Pollo', '1-2 cucharadas (10-20g)', '1 comida al día', 1,
    [{ type: 'almuerzo', title: 'Puré de Pollo con Verduras', food: 'Pollo + Verduras', portion: '1-2 cucharadas (10-20g)',
      recipe: `🍗 PURÉ DE POLLO CON VERDURAS\n\nIngredientes:\n• 30g de pechuga de pollo\n• 1 zanahoria pequeña\n• 1/2 patata\n\nPreparación:\n1. Cocina el pollo 20-25 min\n2. Cocina las verduras\n3. Tritura todo junto` }],
    'Las proteínas animales se introducen gradualmente.',
    ['Usa pechuga sin piel ni huesos', 'Cocina muy bien el pollo'],
    ['Asegúrate de que no haya huesos']
  ),
  createDayData(20, 6, 3, '6-8m',
    'Pollo con verduras',
    'Continúa con pollo mezclado con verduras ya conocidas.',
    'Proteínas', 'Pollo', '2-3 cucharadas (20-30g)', '1 comida al día', 1,
    [{ type: 'almuerzo', title: 'Puré de Pollo y Calabacín', food: 'Pollo + Calabacín', portion: '2-3 cucharadas (20-30g)',
      recipe: `🍗 PURÉ DE POLLO Y CALABACÍN\n\nIngredientes:\n• 40g de pechuga de pollo\n• 1/2 calabacín` }],
    'Las proteínas son esenciales para el desarrollo.',
    ['Mezcla pollo con diferentes verduras'],
    ['No añadas sal al pollo']
  ),
  createDayData(21, 6, 3, '6-8m',
    'Pollo aprobado',
    '✅ POLLO APROBADO. Primera proteína en tu lista.',
    'Proteínas', 'Pollo', '2-3 cucharadas (25-35g)', '1 comida al día', 1,
    [{ type: 'almuerzo', title: 'Pollo con verduras variadas', food: 'Pollo + Verduras', portion: '2-3 cucharadas (25-35g)',
      recipe: `✅ POLLO APROBADO\n\nRecetas: Pollo + Patata + Zanahoria, Pollo + Calabacín + Calabaza` }],
    'Excelente progreso.',
    ['Ofrece pollo 2-3 veces por semana'],
    ['No ofrezcas pollo frito o procesado']
  ),
  // DÍA 22-24: Plátano
  createDayData(22, 6, 3, '6-8m',
    'Nueva fruta: Plátano',
    'Introducimos el plátano, rico en potasio y muy fácil de preparar.',
    'Frutas', 'Plátano', '2-3 cucharadas (20-30g)', '1 comida al día', 1,
    [{ type: 'almuerzo', title: 'Papilla de Plátano', food: 'Plátano', portion: '2-3 cucharadas (20-30g)',
      recipe: `🍌 PURÉ DE PLÁTANO\n\nIngredientes:\n• 1/2 plátano maduro\n• 1-2 cucharadas de agua\n\nPreparación:\n1. Pela el plátano\n2. Tritura con un tenedor\n3. Añade agua si es necesario` }],
    'El plátano es muy energético.',
    ['Elige plátanos maduros con puntos marrones', 'No necesita cocción'],
    ['El plátano puede oscurecerse rápido']
  ),
  createDayData(23, 6, 3, '6-8m',
    'Plátano con otras frutas',
    'Mezcla plátano con pera o manzana.',
    'Frutas', 'Plátano + Pera', '3-4 cucharadas (30-40g)', '1 comida al día', 1,
    [{ type: 'almuerzo', title: 'Plátano con Pera', food: 'Plátano + Pera', portion: '3-4 cucharadas (30-40g)',
      recipe: `🍌 PLÁTANO CON PERA\n\nIngredientes:\n• 1/2 plátano maduro\n• 1/2 pera triturada` }],
    'Las mezclas de frutas aportan variedad.',
    ['El plátano aporta cremosidad'],
    ['El plátano puede causar estreñimiento si se consume mucho']
  ),
  createDayData(24, 6, 3, '6-8m',
    'Plátano aprobado',
    '✅ PLÁTANO APROBADO. Tres frutas en tu lista.',
    'Frutas', 'Plátano', '3-4 cucharadas (30-40g)', '1 comida al día', 1,
    [{ type: 'almuerzo', title: 'Macedonia de frutas', food: 'Plátano + Pera + Manzana', portion: '3-4 cucharadas (30-40g)',
      recipe: `✅ PLÁTANO APROBADO\n\nCombinaciones: Plátano + Pera, Plátano + Manzana, Las tres frutas` }],
    'Buen progreso.',
    ['El plátano es ideal para llevar de viaje'],
    ['El plátano maduro tiene más azúcar']
  ),
  // DÍA 25-27: Introducción a 2 comidas
  createDayData(25, 6, 4, '6-8m',
    '¡Aumentamos a 2 comidas al día!',
    'El bebé está listo para dos comidas al día: Almuerzo + Cena.',
    'Varios', 'Menú variado', 'Almuerzo: 80-100g / Cena: 40-50g', '2 comidas al día', 2,
    [{ type: 'almuerzo', title: 'Puré de Pollo con Verduras', food: 'Pollo + Patata + Zanahoria + Calabacín', portion: '5-6 cucharadas (80-100g)',
      recipe: `🍽️ ALMUERZO - POLLO CON VERDURAS\n\nIngredientes:\n• 40g de pechuga de pollo\n• 1 zanahoria\n• 1/2 patata\n• 1/2 calabacín` },
     { type: 'cena', title: 'Compota de Frutas', food: 'Manzana + Pera', portion: '3-4 cucharadas (40-50g)',
      recipe: `🍽️ CENA - COMPOTA DE FRUTAS\n\nIngredientes:\n• 1/2 manzana\n• 1/2 pera` }],
    'Con dos comidas, la lactancia sigue siendo importante.',
    ['Almuerzo: puré de verduras con proteína', 'Cena: fruta o puré ligero'],
    ['No fuerces al bebé a comer si no quiere']
  ),
  createDayData(26, 6, 4, '6-8m',
    'Dos comidas: Día 2',
    'Continúa con el esquema de dos comidas.',
    'Varios', 'Menú variado', 'Total: 150g diarios', '2 comidas al día', 2,
    [{ type: 'almuerzo', title: 'Puré de Pollo y Calabaza', food: 'Pollo + Calabaza', portion: '5-6 cucharadas (80-100g)',
      recipe: `🍽️ ALMUERZO\n\nIngredientes:\n• 40g de pechuga de pollo\n• 80g de calabaza` },
     { type: 'cena', title: 'Puré de Plátano', food: 'Plátano', portion: '3-4 cucharadas (40-50g)',
      recipe: `🍽️ CENA\n\nIngredientes:\n• 1/2 plátano maduro` }],
    'Ofrece el pecho 3-4 veces al día mínimo.',
    ['El bebé te indicará cuánto quiere comer'],
    ['Si rechaza la cena, no fuerces']
  ),
  createDayData(27, 6, 4, '6-8m',
    'Dos comidas: Día 3',
    'El bebé se acostumbra a dos comidas.',
    'Varios', 'Menú variado', 'Total: 150-200g diarios', '2 comidas al día', 2,
    [{ type: 'almuerzo', title: 'Puré de Verduras Variadas', food: 'Patata + Zanahoria + Calabacín + Calabaza', portion: '5-6 cucharadas (80-100g)',
      recipe: `🍽️ ALMUERZO - CUATRO VERDURAS\n\nIngredientes:\n• 1/2 patata\n• 1 zanahoria\n• 1/2 calabacín\n• 50g de calabaza` },
     { type: 'cena', title: 'Compota de Manzana y Pera', food: 'Manzana + Pera', portion: '3-4 cucharadas (40-50g)',
      recipe: `🍽️ CENA\n\nIngredientes:\n• 1/2 manzana\n• 1/2 pera` }],
    'La leche materna sigue aportando la mayoría de nutrientes.',
    ['Ofrece variedad de sabores', 'Incluye proteína en el almuerzo'],
    ['No añadas sal, azúcar ni miel']
  ),
  // DÍA 28-30: Ternera
  createDayData(28, 6, 4, '6-8m',
    'Nuevo alimento: Ternera',
    'Introducimos la ternera como segunda proteína animal.',
    'Proteínas', 'Ternera', '1-2 cucharadas (15-20g)', '2 comidas al día', 2,
    [{ type: 'almuerzo', title: 'Puré de Ternera con Verduras', food: 'Ternera + Zanahoria + Patata', portion: '4-5 cucharadas (60-80g)',
      recipe: `🥩 PURÉ DE TERNERA CON VERDURAS\n\nIngredientes:\n• 30g de ternera magra\n• 1 zanahoria\n• 1/2 patata` },
     { type: 'cena', title: 'Puré de Frutas', food: 'Plátano + Pera', portion: '3-4 cucharadas (40-50g)',
      recipe: `🍽️ CENA\n\nIngredientes:\n• 1/2 plátano\n• 1/2 pera` }],
    'La ternera aporta hierro y zinc.',
    ['Usa carne magra sin grasa', 'Cocina muy bien la carne'],
    ['Asegúrate de que no haya trozos duros']
  ),
  createDayData(29, 6, 4, '6-8m',
    'Ternera + verduras',
    'Continúa con ternera mezclada con verduras.',
    'Proteínas', 'Ternera', '2-3 cucharadas (20-30g)', '2 comidas al día', 2,
    [{ type: 'almuerzo', title: 'Puré de Ternera y Calabacín', food: 'Ternera + Calabacín', portion: '5-6 cucharadas (80-100g)',
      recipe: `🥩 TERNERA CON CALABACÍN\n\nIngredientes:\n• 35g de ternera magra\n• 1 calabacín pequeño` },
     { type: 'cena', title: 'Compota de Manzana', food: 'Manzana', portion: '3-4 cucharadas (40-50g)',
      recipe: `🍽️ CENA\n\nIngredientes:\n• 1 manzana dulce` }],
    'Combina bien el hierro de la carne con vitamina C de verduras.',
    ['Alterna entre pollo y ternera'],
    ['No ofrezcas carne cruda o poco cocida']
  ),
  createDayData(30, 6, 4, '6-8m',
    '¡Mes 6 completado!',
    'Has completado el primer mes. ✅ TERNERA APROBADA.',
    'Varios', 'Variedad de alimentos', 'Total: 200-250g diarios', '2 comidas al día', 2,
    [{ type: 'almuerzo', title: 'Puré de Pollo o Ternera con Verduras', food: 'Proteína + Verduras', portion: '5-6 cucharadas (100g)',
      recipe: `🎉 ALMUERZO\n\n✅ ALIMENTOS APROBADOS MES 6:\nVerduras: Calabacín, Calabaza, Zanahoria, Patata\nFrutas: Pera, Manzana, Plátano\nProteínas: Pollo, Ternera` },
     { type: 'cena', title: 'Compota de Frutas Variadas', food: 'Frutas variadas', portion: '3-4 cucharadas (50g)',
      recipe: `🎉 CENA\n\nEl bebé ahora come 2 veces al día` }],
    '¡Felicidades! El bebé ha probado muchos alimentos.',
    ['Mantén la variedad en los menús'],
    ['Continúa introduciendo nuevos alimentos gradualmente']
  ),

  // ==================== MES 7 (Días 31-60) ====================
  createDayData(31, 7, 5, '8-12m',
    '¡Nueva fase! Mes 7',
    'El bebé entra en una nueva etapa. Más texturas, más variedad.',
    'Varios', 'Menú variado + Nuevos alimentos', '200-300g diarios', '2-3 comidas al día', 2,
    [{ type: 'almuerzo', title: 'Puré de Pollo con Verduras y Arroz', food: 'Pollo + Verduras + Arroz', portion: '6-7 cucharadas (100-120g)',
      recipe: `🍽️ POLLO CON ARROZ Y VERDURAS\n\nIngredientes:\n• 40g de pechuga de pollo\n• 2 cucharadas de arroz\n• Verduras variadas\n\nPreparación:\n1. Cocina el pollo 20 min\n2. Cocina el arroz 20-25 min\n3. Tritura parcialmente` },
     { type: 'cena', title: 'Yogur Natural con Fruta', food: 'Yogur + Plátano', portion: '1/2 yogur con fruta (80g)',
      recipe: `🍽️ YOGUR CON FRUTA\n\nIngredientes:\n• 1/2 yogur natural entero\n• 1/2 plátano triturado\n\nNuevos alimentos este mes:\n• Pescado blanco\n• Yema de huevo\n• Yogur natural\n• Legumbres` }],
    'La leche materna sigue siendo importante pero los sólidos ganan protagonismo.',
    ['Introduce texturas más gruesas', 'Ofrece pequeños trozos blandos'],
    ['Vigila siempre mientras come']
  ),
  createDayData(32, 7, 5, '8-12m',
    'Nuevo alimento: Merluza (pescado blanco)',
    'Introducimos el pescado blanco, rico en proteínas y omega-3.',
    'Proteínas', 'Merluza', '2-3 cucharadas (25-30g)', '2 comidas al día', 2,
    [{ type: 'almuerzo', title: 'Puré de Merluza con Verduras', food: 'Merluza + Zanahoria + Patata', portion: '5-6 cucharadas (80-100g)',
      recipe: `🐟 PURÉ DE MERLUZA CON VERDURAS\n\nIngredientes:\n• 40g de filete de merluza\n• 1 zanahoria pequeña\n• 1/2 patata\n• 1 cucharadita de aceite de oliva\n\n⚠️ IMPORTANTE: Revisa muy bien las espinas` },
     { type: 'cena', title: 'Compota de Frutas', food: 'Manzana + Pera', portion: '4-5 cucharadas (50-60g)',
      recipe: `🍽️ CENA\n\nIngredientes:\n• 1/2 manzana\n• 1/2 pera` }],
    'El pescado aporta ácidos grasos esenciales para el desarrollo cerebral.',
    ['Usa pescado blanco: merluza, bacalao, lenguado', 'Revisa muy bien que no tenga espinas'],
    ['Verifica DOS VECES que no haya espinas']
  ),
  createDayData(33, 7, 5, '8-12m',
    'Pescado + patata',
    'Continúa con pescado, mezclando con patata.',
    'Proteínas', 'Merluza + Patata', '3-4 cucharadas (40-50g)', '2 comidas al día', 2,
    [{ type: 'almuerzo', title: 'Puré de Pescado y Patata', food: 'Merluza + Patata + Aceite', portion: '5-6 cucharadas (80-100g)',
      recipe: `🐟 PESCADO CON PATATA\n\nIngredientes:\n• 50g de merluza limpia\n• 1 patata pequeña\n• 1 cucharadita de aceite de oliva` },
     { type: 'cena', title: 'Puré de Frutas con Trocitos', food: 'Plátano + Pera', portion: '4-5 cucharadas (50-60g)',
      recipe: `🍽️ FRUTAS CON TROCITOS\n\nIngredientes:\n• 1/2 plátano\n• 1/2 pera en trocitos` }],
    'El pescado 2-3 veces por semana es ideal.',
    ['El pescado con patata es una combinación clásica'],
    ['Si hay antecedentes de alergia, consulta al pediatra']
  ),
  createDayData(34, 7, 5, '8-12m',
    'Pescado aprobado',
    '✅ PESCADO BLANCO APROBADO.',
    'Proteínas', 'Pescado blanco', '40-50g', '2 comidas al día', 2,
    [{ type: 'almuerzo', title: 'Pescado con Verduras Variadas', food: 'Merluza + Calabacín + Zanahoria', portion: '5-6 cucharadas (80-100g)',
      recipe: `✅ PESCADO BLANCO APROBADO\n\n🐟 PESCADO CON VERDURAS\n\nIngredientes:\n• 45g de merluza o bacalao\n• 1/2 calabacín\n• 1 zanahoria pequeña` },
     { type: 'cena', title: 'Yogur con Fruta', food: 'Yogur + Manzana', portion: '1/2 yogur con fruta (80g)',
      recipe: `🍽️ YOGUR CON MANZANA\n\nIngredientes:\n• 1/2 yogur natural\n• 1/2 manzana cocida` }],
    'Excelente. Ofrece pescado 2-3 veces por semana.',
    ['Varía entre merluza, bacalao, lenguado'],
    ['No ofrezcas pescado crudo ni ahumado']
  ),
  createDayData(35, 7, 5, '8-12m',
    'Nuevo alimento: Yema de huevo',
    'Introducimos la yema de huevo cocida. Importante fuente de hierro y colina.',
    'Proteínas', 'Yema de huevo', '1 yema cocida', '2 comidas al día', 2,
    [{ type: 'almuerzo', title: 'Yema de Huevo con Verduras', food: 'Yema de huevo + Puré de verduras', portion: '1 yema + 4-5 cucharadas de verduras',
      recipe: `🥚 YEMA DE HUEVO CON VERDURAS\n\nIngredientes:\n• 1 huevo tamaño L\n• 4-5 cucharadas de puré de verduras\n\nPreparación:\n1. Hierve el huevo 10-12 min\n2. Separa la yema de la clara\n3. Aplasta la yema y mézclala con el puré\n\n⚠️ La clara es más alergénica, introducir después` },
     { type: 'cena', title: 'Compota de Frutas', food: 'Pera + Manzana', portion: '4-5 cucharadas (50-60g)',
      recipe: `🍽️ CENA\n\nIngredientes:\n• 1/2 pera\n• 1/2 manzana` }],
    'El huevo es un alérgeno común. Introduce gradualmente.',
    ['Empieza solo con la yema', 'El huevo debe estar completamente cocido'],
    ['Observa si hay reacciones alérgicas en 24-48h']
  ),
  createDayData(36, 7, 5, '8-12m',
    'Yema de huevo + arroz',
    'Mezcla yema de huevo con arroz bien cocido.',
    'Proteínas', 'Yema de huevo + Arroz', '1 yema + 2 cucharadas de arroz', '2 comidas al día', 2,
    [{ type: 'almuerzo', title: 'Arroz con Yema de Huevo', food: 'Arroz + Yema de huevo + Aceite', portion: '5-6 cucharadas (80-100g)',
      recipe: `🥚 ARROZ CON YEMA DE HUEVO\n\nIngredientes:\n• 2 cucharadas de arroz\n• 1 yema de huevo cocida\n• 1 cucharadita de aceite de oliva` },
     { type: 'cena', title: 'Plátano con Yogur', food: 'Plátano + Yogur', portion: '1/2 yogur con plátano (80g)',
      recipe: `🍽️ PLÁTANO CON YOGUR\n\nIngredientes:\n• 1/2 yogur natural\n• 1/2 plátano` }],
    'El arroz aporta energía y la yema nutrientes esenciales.',
    ['El arroz debe estar muy bien cocido'],
    ['El arroz no debe quedar duro']
  ),
  createDayData(37, 7, 5, '8-12m',
    'Yema aprobada',
    '✅ YEMA DE HUEVO APROBADA.',
    'Proteínas', 'Yema de huevo', '1 yema diaria', '2 comidas al día', 2,
    [{ type: 'almuerzo', title: 'Pollo con Yema y Verduras', food: 'Pollo + Yema + Verduras', portion: '5-6 cucharadas (80-100g)',
      recipe: `✅ YEMA DE HUEVO APROBADA\n\n🍽️ POLLO CON YEMA Y VERDURAS\n\nIngredientes:\n• 35g de pechuga de pollo\n• 1 yema de huevo cocida\n• Verduras variadas` },
     { type: 'cena', title: 'Macedonia de Frutas', food: 'Plátano + Pera + Manzana', portion: '4-5 cucharadas (60g)',
      recipe: `🍽️ MACEDONIA\n\nIngredientes:\n• 1/4 plátano en trocitos\n• 1/4 pera en trocitos\n• 1/4 manzana en trocitos` }],
    'Puedes ofrecer huevo 3-4 veces por semana.',
    ['La yema es muy nutritiva', 'Combina bien con arroz, verduras, pollo'],
    ['Espera antes de introducir la clara completa']
  ),
  createDayData(38, 7, 6, '8-12m',
    'Nuevo alimento: Yogur natural',
    'Introducimos el yogur natural entero. Fuente de calcio y probióticos.',
    'Lácteos', 'Yogur natural entero', '1/2 yogur (60g)', '2 comidas al día', 2,
    [{ type: 'almuerzo', title: 'Puré de Pescado con Verduras', food: 'Merluza + Verduras + Aceite', portion: '5-6 cucharadas (80-100g)',
      recipe: `🍽️ PESCADO CON VERDURAS\n\nIngredientes:\n• 45g de merluza\n• Verduras variadas\n• 1 cucharadita de aceite de oliva` },
     { type: 'cena', title: 'Yogur con Fruta', food: 'Yogur + Plátano', portion: '1/2 yogur con fruta (80g)',
      recipe: `🥛 YOGUR CON FRUTA\n\nIngredientes:\n• 1/2 yogur natural entero\n• 1/2 plátano maduro\n\n⚠️ Usa yogur NATURAL sin azúcar` }],
    'Los lácteos se introducen gradualmente.',
    ['Usa yogur natural sin azúcar', 'Entero, no descremado'],
    ['No uses yogures azucarados o con sabores']
  ),
  createDayData(39, 7, 6, '8-12m',
    'Yogur con diferentes frutas',
    'Varía las frutas con el yogur.',
    'Lácteos', 'Yogur + Frutas', '1 yogur con fruta', '2 comidas al día', 2,
    [{ type: 'almuerzo', title: 'Pollo con Arroz y Verduras', food: 'Pollo + Arroz + Verduras', portion: '5-6 cucharadas (100g)',
      recipe: `🍽️ POLLO CON ARROZ\n\nIngredientes:\n• 40g de pechuga de pollo\n• 2 cucharadas de arroz\n• Verduras variadas` },
     { type: 'cena', title: 'Yogur con Manzana y Canela', food: 'Yogur + Manzana + Canela', portion: '1 yogur con fruta (100g)',
      recipe: `🥛 YOGUR CON MANZANA\n\nIngredientes:\n• 1 yogur natural entero\n• 1/2 manzana cocida y triturada\n• Una pizca de canela` }],
    'El yogur puede sustituir una toma de leche ocasionalmente.',
    ['Prueba yogur con manzana, pera, plátano'],
    ['Observa tolerancia a los lácteos']
  ),
  createDayData(40, 7, 6, '8-12m',
    'Yogur aprobado',
    '✅ YOGUR NATURAL APROBADO.',
    'Lácteos', 'Yogur natural', '1 yogur al día máximo', '2 comidas al día', 2,
    [{ type: 'almuerzo', title: 'Ternera con Verduras', food: 'Ternera + Verduras + Arroz', portion: '5-6 cucharadas (100g)',
      recipe: `🍽️ TERNERA CON VERDURAS Y ARROZ\n\nIngredientes:\n• 40g de ternera magra\n• 2 cucharadas de arroz\n• Verduras variadas` },
     { type: 'cena', title: 'Yogur con Frutas Variadas', food: 'Yogur + Frutas', portion: '1 yogur con frutas (100g)',
      recipe: `✅ YOGUR APROBADO\n\nVariedades:\n• Yogur con plátano\n• Yogur con manzana y canela\n• Yogur con pera` }],
    'Excelente. El yogur es una buena fuente de calcio.',
    ['Ofrece yogur 4-5 veces por semana'],
    ['No sustituye la leche materna o fórmula']
  ),
  // DÍA 41-45: Lentejas
  createDayData(41, 7, 6, '8-12m',
    'Nuevo alimento: Lentejas',
    'Introducimos las lentejas, primera legumbre. Ricas en hierro vegetal.',
    'Legumbres', 'Lentejas', '2-3 cucharadas (30-40g)', '2 comidas al día', 2,
    [{ type: 'almuerzo', title: 'Puré de Lentejas con Verduras', food: 'Lentejas + Zanahoria + Patata', portion: '5-6 cucharadas (80-100g)',
      recipe: `🫘 PURÉ DE LENTEJAS\n\nIngredientes:\n• 40g de lentejas (en remojo la noche anterior)\n• 1/2 zanahoria\n• 1/2 patata pequeña\n• 1 cucharadita de aceite de oliva\n\nPreparación:\n1. Cocina todo junto 30-40 min\n2. Las lentejas deben estar muy blandas\n3. Tritura todo junto` },
     { type: 'cena', title: 'Yogur con Fruta', food: 'Yogur + Plátano', portion: '1 yogur con fruta (80g)',
      recipe: `🍽️ CENA\n\nIngredientes:\n• 1 yogur natural\n• 1/2 plátano` }],
    'Las legumbres son una excelente fuente de proteína vegetal.',
    ['Usa lentejas peladas (más blandas)', 'Deja en remojo 8-12 horas'],
    ['Pueden causar gases al principio']
  ),
  createDayData(42, 7, 6, '8-12m',
    'Lentejas con arroz',
    'Combina lentejas con arroz para proteína completa.',
    'Legumbres', 'Lentejas + Arroz', '3-4 cucharadas (50g)', '2 comidas al día', 2,
    [{ type: 'almuerzo', title: 'Lentejas con Arroz', food: 'Lentejas + Arroz + Zanahoria', portion: '5-6 cucharadas (100g)',
      recipe: `🫘 LENTEJAS CON ARROZ\n\nIngredientes:\n• 30g de lentejas cocidas\n• 2 cucharadas de arroz cocido\n• 1 zanahoria pequeña\n• Aceite de oliva\n\n💡 Lentejas + arroz = proteína completa vegetal` },
     { type: 'cena', title: 'Compota de Frutas', food: 'Manzana + Pera', portion: '4-5 cucharadas (60g)',
      recipe: `🍽️ CENA\n\nIngredientes:\n• 1/2 manzana\n• 1/2 pera` }],
    'Lentejas + arroz = proteína completa.',
    ['La combinación legumbre + cereal es muy nutritiva'],
    ['Si causa muchos gases, reduce la cantidad']
  ),
  createDayData(43, 7, 6, '8-12m',
    'Lentejas aprobadas',
    '✅ LENTEJAS APROBADAS.',
    'Legumbres', 'Lentejas', '40-50g', '2 comidas al día', 2,
    [{ type: 'almuerzo', title: 'Lentejas con Verduras Variadas', food: 'Lentejas + Verduras', portion: '5-6 cucharadas (100g)',
      recipe: `✅ LENTEJAS APROBADAS\n\nRecetas:\n• Puré de lentejas con verduras\n• Lentejas con arroz\n• Lentejas con patata y zanahoria` },
     { type: 'cena', title: 'Yogur con Avena y Fruta', food: 'Yogur + Avena + Plátano', portion: '1 yogur con cereales (100g)',
      recipe: `🍽️ YOGUR CON AVENA\n\nIngredientes:\n• 1 yogur natural\n• 1 cucharada de avena\n• 1/2 plátano` }],
    'Ofrece legumbres 2-3 veces por semana.',
    ['Las lentejas son muy versátiles'],
    ['Aumenta gradualmente la cantidad']
  ),
  // DÍA 44-60: Continuación mes 7 con variedad
  createDayData(44, 7, 6, '8-12m',
    'Nuevo alimento: Aguacate',
    'Introducimos el aguacate, rico en grasas saludables.',
    'Frutas', 'Aguacate', '2-3 cucharadas (30g)', '2 comidas al día', 2,
    [{ type: 'almuerzo', title: 'Puré de Aguacate', food: 'Aguacate', portion: '2-3 cucharadas (30g)',
      recipe: `🥑 PURÉ DE AGUACATE\n\nIngredientes:\n• 1/2 aguacate maduro\n• Unas gotas de limón (opcional)\n\nPreparación:\n1. Extrae la pulpa\n2. Aplasta con un tenedor\n3. Sirve inmediatamente\n\n⚠️ El aguacate se oxida rápido` },
     { type: 'cena', title: 'Yogur con Frutas', food: 'Yogur + Pera', portion: '1 yogur con fruta (80g)',
      recipe: `🍽️ CENA\n\nIngredientes:\n• 1 yogur natural\n• 1/2 pera triturada` }],
    'El aguacate aporta grasas monoinsaturadas para el cerebro.',
    ['No necesita cocción', 'Tritura o aplasta con tenedor'],
    ['El aguacate se oxida rápido']
  ),
  createDayData(45, 7, 6, '8-12m',
    'Aguacate con plátano',
    'Mezcla aguacate con plátano, combinación cremosa.',
    'Frutas', 'Aguacate + Plátano', '3-4 cucharadas (50g)', '2 comidas al día', 2,
    [{ type: 'almuerzo', title: 'Aguacate con Plátano', food: 'Aguacate + Plátano', portion: '3-4 cucharadas (50g)',
      recipe: `🥑 AGUACATE CON PLÁTANO\n\nIngredientes:\n• 1/4 de aguacate maduro\n• 1/2 plátano maduro\n\nPreparación:\n1. Aplasta ambos con un tenedor\n2. Mezcla hasta obtener crema suave` },
     { type: 'cena', title: 'Puré de Pollo con Verduras', food: 'Pollo + Verduras + Arroz', portion: '5-6 cucharadas (100g)',
      recipe: `🍽️ CENA\n\nIngredientes:\n• 35g de pechuga de pollo\n• Verduras variadas\n• 2 cucharadas de arroz` }],
    'Excelente combinación de grasas saludables y potasio.',
    ['No necesita cocción', 'Ideal cuando no tienes tiempo de cocinar'],
    ['Sirve inmediatamente para evitar oxidación']
  ),
  createDayData(46, 7, 7, '8-12m',
    'Aguacate aprobado',
    '✅ AGUACATE APROBADO.',
    'Frutas', 'Aguacate', '30-40g', '2 comidas al día', 2,
    [{ type: 'almuerzo', title: 'Pescado con Verduras y Aguacate', food: 'Merluza + Verduras + Aguacate', portion: '5-6 cucharadas (100g)',
      recipe: `✅ AGUACATE APROBADO\n\n🍽️ PESCADO CON VERDURAS\n\nIngredientes:\n• 45g de merluza\n• Verduras variadas\n• 1/4 aguacate` },
     { type: 'cena', title: 'Yogur con Frutas', food: 'Yogur + Manzana + Plátano', portion: '1 yogur con frutas (100g)',
      recipe: `🍽️ CENA\n\nIngredientes:\n• 1 yogur natural\n• 1/4 manzana\n• 1/4 plátano` }],
    'El aguacate es muy nutritivo y versátil.',
    ['Ofrece aguacate 2-3 veces por semana'],
    ['El aguacate madura rápido']
  ),
  createDayData(47, 7, 7, '8-12m',
    'Menú variado: Pollo con arroz',
    'Día de menú variado con alimentos ya aprobados.',
    'Varios', 'Menú variado', '250g diarios', '2 comidas al día', 2,
    [{ type: 'almuerzo', title: 'Pollo con Arroz y Verduras', food: 'Pollo + Arroz + Zanahoria + Calabacín', portion: '6-7 cucharadas (120g)',
      recipe: `🍽️ POLLO CON ARROZ\n\nIngredientes:\n• 45g de pechuga de pollo\n• 2 cucharadas de arroz\n• 1 zanahoria\n• 1/2 calabacín` },
     { type: 'cena', title: 'Compota de Frutas', food: 'Manzana + Pera + Plátano', portion: '4-5 cucharadas (60g)',
      recipe: `🍽️ CENA\n\nIngredientes:\n• 1/4 manzana\n• 1/4 pera\n• 1/4 plátano` }],
    'Mantén la variedad en los menús.',
    ['El almuerzo debe ser más completo que la cena'],
    ['No fuerces al bebé a terminar todo']
  ),
  createDayData(48, 7, 7, '8-12m',
    'Menú variado: Ternera con lentejas',
    'Combinación de proteínas animal y vegetal.',
    'Varios', 'Menú variado', '250g diarios', '2 comidas al día', 2,
    [{ type: 'almuerzo', title: 'Ternera con Lentejas', food: 'Ternera + Lentejas + Verduras', portion: '6-7 cucharadas (120g)',
      recipe: `🍽️ TERNERA CON LENTEJAS\n\nIngredientes:\n• 35g de ternera magra\n• 2 cucharadas de lentejas\n• Verduras variadas` },
     { type: 'cena', title: 'Yogur con Avena y Fruta', food: 'Yogur + Avena + Fruta', portion: '1 yogur con cereales (100g)',
      recipe: `🍽️ CENA\n\nIngredientes:\n• 1 yogur natural\n• 1 cucharada de avena\n• Fruta al gusto` }],
    'Combina proteínas para mejor absorción de hierro.',
    ['Alterna entre diferentes fuentes de proteína'],
    ['La cena puede ser más ligera']
  ),
  createDayData(49, 7, 7, '8-12m',
    'Menú variado: Pescado con patata',
    'Día de pescado con guarnición de patata.',
    'Varios', 'Menú variado', '250g diarios', '2 comidas al día', 2,
    [{ type: 'almuerzo', title: 'Pescado con Patata y Verduras', food: 'Merluza + Patata + Zanahoria', portion: '6-7 cucharadas (120g)',
      recipe: `🍽️ PESCADO CON PATATA\n\nIngredientes:\n• 50g de merluza\n• 1 patata pequeña\n• 1 zanahoria\n• 1 cucharadita de aceite de oliva` },
     { type: 'cena', title: 'Aguacate con Plátano', food: 'Aguacate + Plátano', portion: '4-5 cucharadas (60g)',
      recipe: `🍽️ CENA\n\nIngredientes:\n• 1/4 aguacate\n• 1/2 plátano` }],
    'El pescado aporta omega-3 esencial.',
    ['Revisa siempre las espinas'],
    ['Ofrece pescado 2-3 veces por semana']
  ),
  createDayData(50, 7, 7, '8-12m',
    '¡Tres comidas al día! + Snack',
    'El bebé está listo para tres comidas principales más un snack.',
    'Varios', 'Menú completo', '300g diarios', '3 comidas + 1 snack', 3,
    [{ type: 'desayuno', title: 'Yogur con Avena y Fruta', food: 'Yogur + Avena + Plátano', portion: '4-5 cucharadas (80g)',
      recipe: `🌅 DESAYUNO\n\nIngredientes:\n• 1 yogur natural\n• 1 cucharada de avena\n• 1/2 plátano` },
     { type: 'almuerzo', title: 'Pollo con Lentejas y Verduras', food: 'Pollo + Lentejas + Verduras', portion: '6-7 cucharadas (120g)',
      recipe: `🍽️ ALMUERZO\n\nIngredientes:\n• 40g de pechuga de pollo\n• 2 cucharadas de lentejas\n• Verduras variadas` },
     { type: 'cena', title: 'Pescado con Patata y Yema', food: 'Merluza + Patata + Yema', portion: '5-6 cucharadas (100g)',
      recipe: `🌙 CENA\n\nIngredientes:\n• 40g de merluza\n• 1 patata pequeña\n• 1 yema de huevo` }],
    'Con 3 comidas, la lactancia sigue siendo importante.',
    ['Estructura: Desayuno - Almuerzo - Snack - Cena'],
    ['Los horarios deben ser regulares']
  ),
  // DÍAS 51-60: Continuación con 3 comidas
  ...Array.from({ length: 10 }, (_, i) => {
    const dayNum = 51 + i
    const weekNum = Math.ceil(dayNum / 7)
    const proteins = ['Pollo', 'Ternera', 'Merluza', 'Pollo', 'Lentejas', 'Ternera', 'Pescado', 'Pollo', 'Lentejas', 'Ternera']
    const protein = proteins[i]
    return createDayData(dayNum, 7, weekNum, '8-12m',
      `Día ${dayNum}: Menú variado con ${protein}`,
      `Menú completo con tres comidas y variedad de alimentos.`,
      'Varios', 'Menú variado', '300-350g diarios', '3 comidas', 3,
      [{ type: 'desayuno', title: 'Yogur con Frutas', food: 'Yogur + Frutas variadas', portion: '4-5 cucharadas (80g)',
        recipe: `🌅 DESAYUNO\n\nIngredientes:\n• 1 yogur natural\n• Frutas variadas (pera, manzana, plátano)` },
       { type: 'almuerzo', title: `${protein} con Verduras`, food: `${protein} + Verduras + Arroz/Patata`, portion: '6-7 cucharadas (120g)',
        recipe: `🍽️ ALMUERZO - ${protein.toUpperCase()}\n\nIngredientes:\n• ${protein === 'Merluza' || protein === 'Pescado' ? '50g de ' + protein.toLowerCase() : '40g de ' + protein.toLowerCase()}\n• Verduras variadas\n• Arroz o patata` },
       { type: 'cena', title: 'Puré ligero o Compota', food: 'Verduras o Frutas', portion: '5-6 cucharadas (100g)',
        recipe: `🌙 CENA\n\nIngredientes:\n• Verduras suaves o compota de frutas` }],
      'La lactancia sigue siendo importante.',
      ['Varía los alimentos cada día', 'Mantén horarios regulares'],
      ['Observa siempre mientras come']
    )
  }),

  // ==================== MES 8 (Días 61-90) ====================
  createDayData(61, 8, 9, '8-12m',
    '¡Mes 8! Nueva etapa',
    'El bebé entra en el mes 8. Más texturas, más autonomía.',
    'Varios', 'Menú variado + Nuevos alimentos', '350g diarios', '3 comidas', 3,
    [{ type: 'desayuno', title: 'Papilla de Avena con Fruta', food: 'Avena + Leche materna + Plátano', portion: '5-6 cucharadas (100g)',
      recipe: `🌅 PAPILLA DE AVENA\n\nIngredientes:\n• 2 cucharadas de avena\n• Leche materna o agua\n• 1/2 plátano\n\nNuevos alimentos este mes:\n• Avena\n• Pan\n• Brócoli\n• Espinacas` },
     { type: 'almuerzo', title: 'Pollo con Verduras y Arroz', food: 'Pollo + Verduras + Arroz', portion: '7-8 cucharadas (130g)',
      recipe: `🍽️ ALMUERZO\n\nIngredientes:\n• 45g de pechuga de pollo\n• Verduras variadas\n• 2 cucharadas de arroz` },
     { type: 'cena', title: 'Yogur con Frutas', food: 'Yogur + Frutas variadas', portion: '5-6 cucharadas (100g)',
      recipe: `🌙 CENA\n\nIngredientes:\n• 1 yogur natural\n• Frutas variadas` }],
    'La leche materna sigue siendo importante.',
    ['Introduce texturas con trocitos pequeños', 'Fomenta la autonomía'],
    ['Vigila siempre mientras come']
  ),
  createDayData(62, 8, 9, '8-12m',
    'Nuevo alimento: Avena',
    'Introducimos la avena, cereal integral rico en fibra.',
    'Cereales', 'Avena', '2 cucharadas (20g)', '3 comidas', 3,
    [{ type: 'desayuno', title: 'Papilla de Avena', food: 'Avena + Leche materna', portion: '5-6 cucharadas (100g)',
      recipe: `🥣 PAPILLA DE AVENA\n\nIngredientes:\n• 2 cucharadas de copos de avena\n• 4-5 cucharadas de leche materna o agua\n• 1/2 plátano (opcional)\n\nPreparación:\n1. Tritura la avena si es necesario\n2. Mezcla con líquido\n3. Deja reposar 5 min` },
     { type: 'almuerzo', title: 'Ternera con Verduras', food: 'Ternera + Verduras + Patata', portion: '7-8 cucharadas (130g)',
      recipe: `🍽️ ALMUERZO\n\nIngredientes:\n• 40g de ternera magra\n• Verduras variadas\n• 1 patata pequeña` },
     { type: 'cena', title: 'Compota de Frutas', food: 'Manzana + Pera', portion: '5-6 cucharadas (100g)',
      recipe: `🌙 CENA\n\nIngredientes:\n• 1/2 manzana\n• 1/2 pera` }],
    'La avena aporta fibra y energía sostenida.',
    ['Usa avena en copos', 'Tritura si es necesario'],
    ['Introduce gradualmente para evitar gases']
  ),
  createDayData(63, 8, 9, '8-12m',
    'Avena con diferentes frutas',
    'Varía las frutas con la avena.',
    'Cereales', 'Avena + Frutas', '2 cucharadas + fruta', '3 comidas', 3,
    [{ type: 'desayuno', title: 'Avena con Manzana y Canela', food: 'Avena + Manzana + Canela', portion: '5-6 cucharadas (100g)',
      recipe: `🥣 AVENA CON MANZANA\n\nIngredientes:\n• 2 cucharadas de avena\n• 1/2 manzana cocida\n• Una pizca de canela` },
     { type: 'almuerzo', title: 'Pescado con Verduras', food: 'Merluza + Verduras + Arroz', portion: '7-8 cucharadas (130g)',
      recipe: `🍽️ ALMUERZO\n\nIngredientes:\n• 50g de merluza\n• Verduras variadas\n• 2 cucharadas de arroz` },
     { type: 'cena', title: 'Yogur con Frutas', food: 'Yogur + Plátano + Pera', portion: '5-6 cucharadas (100g)',
      recipe: `🌙 CENA\n\nIngredientes:\n• 1 yogur natural\n• 1/4 plátano\n• 1/4 pera` }],
    'La avena es muy versátil.',
    ['Prueba diferentes combinaciones de frutas'],
    ['La canela da sabor sin añadir azúcar']
  ),
  createDayData(64, 8, 9, '8-12m',
    'Avena aprobada',
    '✅ AVENA APROBADA.',
    'Cereales', 'Avena', '2-3 cucharadas diarias', '3 comidas', 3,
    [{ type: 'desayuno', title: 'Avena con Plátano', food: 'Avena + Plátano', portion: '5-6 cucharadas (100g)',
      recipe: `✅ AVENA APROBADA\n\n🥣 AVENA CON PLÁTANO\n\nIngredientes:\n• 2 cucharadas de avena\n• 1/2 plátano` },
     { type: 'almuerzo', title: 'Pollo con Lentejas', food: 'Pollo + Lentejas + Verduras', portion: '7-8 cucharadas (130g)',
      recipe: `🍽️ ALMUERZO\n\nIngredientes:\n• 40g de pechuga de pollo\n• 2 cucharadas de lentejas\n• Verduras variadas` },
     { type: 'cena', title: 'Aguacate con Fruta', food: 'Aguacate + Pera', portion: '4-5 cucharadas (80g)',
      recipe: `🌙 CENA\n\nIngredientes:\n• 1/4 aguacate\n• 1/2 pera` }],
    'La avena es ideal para el desayuno.',
    ['Ofrece avena 3-4 veces por semana'],
    ['Combina bien con cualquier fruta']
  ),
  createDayData(65, 8, 9, '8-12m',
    'Nuevo alimento: Brócoli',
    'Introducimos el brócoli, rico en vitaminas y fibra.',
    'Verduras', 'Brócoli', '2-3 cucharadas (30g)', '3 comidas', 3,
    [{ type: 'desayuno', title: 'Yogur con Avena', food: 'Yogur + Avena + Fruta', portion: '5-6 cucharadas (100g)',
      recipe: `🌅 DESAYUNO\n\nIngredientes:\n• 1 yogur natural\n• 1 cucharada de avena\n• Fruta al gusto` },
     { type: 'almuerzo', title: 'Pollo con Brócoli y Patata', food: 'Pollo + Brócoli + Patata', portion: '7-8 cucharadas (130g)',
      recipe: `🥦 POLLO CON BRÓCOLI\n\nIngredientes:\n• 40g de pechuga de pollo\n• 2-3 floretes de brócoli\n• 1 patata pequeña\n\nPreparación:\n1. Cocina el brócoli al vapor 10-12 min\n2. Debe estar muy tierno\n3. Tritura con el pollo y la patata` },
     { type: 'cena', title: 'Compota de Frutas', food: 'Manzana + Pera', portion: '5-6 cucharadas (100g)',
      recipe: `🌙 CENA\n\nIngredientes:\n• 1/2 manzana\n• 1/2 pera` }],
    'El brócoli aporta vitaminas A, C y ácido fólico.',
    ['Usa solo los floretes', 'Cocina muy bien hasta que esté tierno'],
    ['Puede causar gases, introduce poco a poco']
  ),
  createDayData(66, 8, 9, '8-12m',
    'Brócoli con otros alimentos',
    'Combina brócoli con otros alimentos ya aprobados.',
    'Verduras', 'Brócoli + Verduras', '3-4 cucharadas (40g)', '3 comidas', 3,
    [{ type: 'desayuno', title: 'Papilla de Avena', food: 'Avena + Fruta', portion: '5-6 cucharadas (100g)',
      recipe: `🌅 DESAYUNO\n\nIngredientes:\n• 2 cucharadas de avena\n• Fruta al gusto` },
     { type: 'almuerzo', title: 'Ternera con Brócoli y Zanahoria', food: 'Ternera + Brócoli + Zanahoria', portion: '7-8 cucharadas (130g)',
      recipe: `🍽️ ALMUERZO\n\nIngredientes:\n• 40g de ternera magra\n• 2-3 floretes de brócoli\n• 1 zanahoria pequeña` },
     { type: 'cena', title: 'Yogur con Frutas', food: 'Yogur + Plátano', portion: '5-6 cucharadas (100g)',
      recipe: `🌙 CENA\n\nIngredientes:\n• 1 yogur natural\n• 1/2 plátano` }],
    'El brócoli combina bien con proteínas.',
    ['Varía las combinaciones'],
    ['El brócoli debe estar bien cocido']
  ),
  createDayData(67, 8, 10, '8-12m',
    'Brócoli aprobado',
    '✅ BRÓCOLI APROBADO.',
    'Verduras', 'Brócoli', '3-4 cucharadas (40-50g)', '3 comidas', 3,
    [{ type: 'desayuno', title: 'Yogur con Avena y Fruta', food: 'Yogur + Avena + Fruta', portion: '5-6 cucharadas (100g)',
      recipe: `🌅 DESAYUNO\n\nIngredientes:\n• 1 yogur natural\n• 1 cucharada de avena\n• Fruta al gusto` },
     { type: 'almuerzo', title: 'Pescado con Brócoli y Patata', food: 'Merluza + Brócoli + Patata', portion: '7-8 cucharadas (130g)',
      recipe: `✅ BRÓCOLI APROBADO\n\n🍽️ PESCADO CON BRÓCOLI\n\nIngredientes:\n• 50g de merluza\n• 2-3 floretes de brócoli\n• 1 patata pequeña` },
     { type: 'cena', title: 'Compota de Frutas', food: 'Frutas variadas', portion: '5-6 cucharadas (100g)',
      recipe: `🌙 CENA\n\nIngredientes:\n• Frutas variadas` }],
    'Ofrece brócoli 2-3 veces por semana.',
    ['El brócoli es muy nutritivo'],
    ['Puedes congelar brócoli cocido']
  ),
  createDayData(68, 8, 10, '8-12m',
    'Nuevo alimento: Pan integral',
    'Introducimos el pan integral en pequeñas cantidades.',
    'Cereales', 'Pan integral', '1 rebanada pequeña (20g)', '3 comidas', 3,
    [{ type: 'desayuno', title: 'Pan con Aguacate', food: 'Pan integral + Aguacate', portion: '1 rebanada de pan con aguacate',
      recipe: `🥖 PAN CON AGUACATE\n\nIngredientes:\n• 1 rebanada pequeña de pan integral\n• 1/4 aguacate maduro\n\nPreparación:\n1. Tuesta ligeramente el pan\n2. Aplasta el aguacate sobre el pan\n3. Corta en trocitos pequeños` },
     { type: 'almuerzo', title: 'Pollo con Verduras', food: 'Pollo + Verduras + Arroz', portion: '7-8 cucharadas (130g)',
      recipe: `🍽️ ALMUERZO\n\nIngredientes:\n• 45g de pechuga de pollo\n• Verduras variadas\n• 2 cucharadas de arroz` },
     { type: 'cena', title: 'Yogur con Frutas', food: 'Yogur + Frutas variadas', portion: '5-6 cucharadas (100g)',
      recipe: `🌙 CENA\n\nIngredientes:\n• 1 yogur natural\n• Frutas variadas` }],
    'El pan integral aporta fibra y energía.',
    ['Usa pan integral, no blanco', 'Corta en trocitos pequeños'],
    ['Vigila siempre mientras come pan']
  ),
  createDayData(69, 8, 10, '8-12m',
    'Pan con diferentes acompañamientos',
    'Varía los acompañamientos del pan.',
    'Cereales', 'Pan integral', '1 rebanada pequeña', '3 comidas', 3,
    [{ type: 'desayuno', title: 'Pan con Yogur y Fruta', food: 'Pan + Yogur + Fruta', portion: '1 rebanada + yogur',
      recipe: `🥖 DESAYUNO CON PAN\n\nIngredientes:\n• 1 rebanada pequeña de pan\n• 1/2 yogur natural\n• Fruta al gusto` },
     { type: 'almuerzo', title: 'Ternera con Verduras', food: 'Ternera + Verduras + Patata', portion: '7-8 cucharadas (130g)',
      recipe: `🍽️ ALMUERZO\n\nIngredientes:\n• 40g de ternera magra\n• Verduras variadas\n• 1 patata pequeña` },
     { type: 'cena', title: 'Pescado con Verduras', food: 'Merluza + Verduras', portion: '6-7 cucharadas (110g)',
      recipe: `🌙 CENA\n\nIngredientes:\n• 50g de merluza\n• Verduras variadas` }],
    'El pan es versátil para el desayuno.',
    ['Puedes mojar el pan en yogur o leche'],
    ['No añadas mermelada azucarada']
  ),
  createDayData(70, 8, 10, '8-12m',
    'Pan aprobado',
    '✅ PAN INTEGRAL APROBADO.',
    'Cereales', 'Pan integral', '1-2 rebanadas pequeñas al día', '3 comidas', 3,
    [{ type: 'desayuno', title: 'Pan con Aguacate y Huevo', food: 'Pan + Aguacate + Yema', portion: '1 rebanada con toppings',
      recipe: `✅ PAN APROBADO\n\n🥖 PAN CON AGUACATE Y YEMA\n\nIngredientes:\n• 1 rebanada pequeña de pan\n• 1/4 aguacate\n• 1 yema de huevo cocida` },
     { type: 'almuerzo', title: 'Lentejas con Verduras', food: 'Lentejas + Verduras + Arroz', portion: '7-8 cucharadas (130g)',
      recipe: `🍽️ ALMUERZO\n\nIngredientes:\n• 3 cucharadas de lentejas\n• Verduras variadas\n• 1 cucharada de arroz` },
     { type: 'cena', title: 'Compota de Frutas', food: 'Frutas variadas', portion: '5-6 cucharadas (100g)',
      recipe: `🌙 CENA\n\nIngredientes:\n• Frutas variadas` }],
    'El pan puede ser parte del desayuno o snack.',
    ['Ofrece pan integral preferiblemente'],
    ['Vigila siempre mientras come']
  ),
  // DÍAS 71-90: Continuación mes 8
  ...Array.from({ length: 20 }, (_, i) => {
    const dayNum = 71 + i
    const weekNum = Math.ceil(dayNum / 7)
    const foods = ['Pollo', 'Ternera', 'Pescado', 'Lentejas', 'Pollo', 'Ternera', 'Pescado', 'Lentejas', 'Pollo', 'Ternera', 'Pescado', 'Lentejas', 'Pollo', 'Ternera', 'Pescado', 'Lentejas', 'Pollo', 'Ternera', 'Pescado', 'Lentejas']
    const food = foods[i]
    return createDayData(dayNum, 8, weekNum, '8-12m',
      `Día ${dayNum}: Menú con ${food}`,
      `Menú variado del mes 8 con ${food.toLowerCase()}.`,
      'Varios', 'Menú variado', '350-400g diarios', '3 comidas', 3,
      [{ type: 'desayuno', title: 'Desayuno variado', food: 'Avena/Yogur/Pan + Fruta', portion: '5-6 cucharadas (100g)',
        recipe: `🌅 DESAYUNO\n\nIngredientes:\n• Avena o yogur o pan\n• Frutas variadas` },
       { type: 'almuerzo', title: `${food} con Verduras`, food: `${food} + Verduras + Arroz/Patata`, portion: '7-8 cucharadas (130g)',
        recipe: `🍽️ ALMUERZO\n\nIngredientes:\n• ${food === 'Pescado' ? '50g de merluza' : food === 'Lentejas' ? '3 cucharadas de lentejas' : '45g de ' + food.toLowerCase()}\n• Verduras variadas\n• Arroz o patata` },
       { type: 'cena', title: 'Cena ligera', food: 'Verduras/Frutas/Yogur', portion: '5-6 cucharadas (100g)',
        recipe: `🌙 CENA\n\nIngredientes:\n• Verduras suaves, frutas o yogur` }],
      'La lactancia sigue siendo importante.',
      ['Varía los alimentos cada día', 'Mantén horarios regulares'],
      ['Observa siempre mientras come']
    )
  }),

  // ==================== MES 9 (Días 91-120) ====================
  createDayData(91, 9, 13, '12-24m',
    '¡Mes 9! Nuevos alimentos: Pasta',
    'Introducimos la pasta pequeña. Texturas más sólidas.',
    'Cereales', 'Pasta', '2-3 cucharadas (40g)', '3 comidas + snacks', 3,
    [{ type: 'desayuno', title: 'Papilla de Avena con Fruta', food: 'Avena + Leche + Fruta', portion: '6-7 cucharadas (120g)',
      recipe: `🌅 DESAYUNO\n\nIngredientes:\n• 3 cucharadas de avena\n• Leche materna o agua\n• 1/2 plátano\n\nNuevos alimentos este mes:\n• Pasta pequeña\n• Espinacas\n• Melocotón` },
     { type: 'almuerzo', title: 'Pasta con Pollo y Verduras', food: 'Pasta pequeña + Pollo + Verduras', portion: '8-9 cucharadas (150g)',
      recipe: `🍝 PASTA CON POLLO\n\nIngredientes:\n• 2 cucharadas de pasta pequeña (estrellas, letras)\n• 40g de pechuga de pollo picada\n• Verduras variadas\n\nPreparación:\n1. Cocina la pasta 12-15 min hasta muy blanda\n2. Cocina el pollo y verduras\n3. Mezcla todo` },
     { type: 'cena', title: 'Yogur con Frutas', food: 'Yogur + Frutas variadas', portion: '6 cucharadas (100g)',
      recipe: `🌙 CENA\n\nIngredientes:\n• 1 yogur natural\n• Frutas variadas en trocitos` }],
    'La pasta introduce nuevas texturas.',
    ['Usa pasta pequeña: estrellas, letras, coditos', 'Cocina muy bien hasta que esté blanda'],
    ['Vigila siempre mientras come']
  ),
  createDayData(92, 9, 13, '12-24m',
    'Pasta con diferentes salsas',
    'Varía las salsas para la pasta.',
    'Cereales', 'Pasta + Verduras', '2-3 cucharadas (40g)', '3 comidas', 3,
    [{ type: 'desayuno', title: 'Pan con Aguacate', food: 'Pan + Aguacate + Fruta', portion: '1 rebanada + fruta',
      recipe: `🌅 DESAYUNO\n\nIngredientes:\n• 1 rebanada de pan integral\n• 1/4 aguacate\n• Fruta` },
     { type: 'almuerzo', title: 'Pasta con Ternera y Zanahoria', food: 'Pasta + Ternera + Zanahoria', portion: '8-9 cucharadas (150g)',
      recipe: `🍝 PASTA CON TERNERA\n\nIngredientes:\n• 2 cucharadas de pasta\n• 40g de ternera picada\n• 1 zanahoria rallada` },
     { type: 'cena', title: 'Pescado con Puré', food: 'Merluza + Puré de verduras', portion: '7 cucharadas (120g)',
      recipe: `🌙 CENA\n\nIngredientes:\n• 50g de merluza\n• Puré de verduras` }],
    'La pasta es muy versátil.',
    ['Prueba diferentes formas de pasta'],
    ['La pasta debe estar bien cocida']
  ),
  createDayData(93, 9, 13, '12-24m',
    'Pasta aprobada',
    '✅ PASTA APROBADA.',
    'Cereales', 'Pasta', '2-3 cucharadas', '3 comidas', 3,
    [{ type: 'desayuno', title: 'Yogur con Avena', food: 'Yogur + Avena + Fruta', portion: '6-7 cucharadas (120g)',
      recipe: `🌅 DESAYUNO\n\nIngredientes:\n• 1 yogur natural\n• 2 cucharadas de avena\n• Fruta` },
     { type: 'almuerzo', title: 'Pasta con Pescado y Verduras', food: 'Pasta + Merluza + Verduras', portion: '8-9 cucharadas (150g)',
      recipe: `✅ PASTA APROBADA\n\n🍝 PASTA CON PESCADO\n\nIngredientes:\n• 2 cucharadas de pasta\n• 50g de merluza\n• Verduras variadas` },
     { type: 'cena', title: 'Compota de Frutas', food: 'Frutas variadas', portion: '6 cucharadas (100g)',
      recipe: `🌙 CENA\n\nIngredientes:\n• Frutas variadas` }],
    'Ofrece pasta 2-3 veces por semana.',
    ['Varía las salsas y acompañamientos'],
    ['La pasta integral tiene más fibra']
  ),
  createDayData(94, 9, 13, '12-24m',
    'Nuevo alimento: Espinacas',
    'Introducimos las espinacas, ricas en hierro.',
    'Verduras', 'Espinacas', '2-3 cucharadas (30g)', '3 comidas', 3,
    [{ type: 'desayuno', title: 'Papilla de Avena', food: 'Avena + Fruta', portion: '6-7 cucharadas (120g)',
      recipe: `🌅 DESAYUNO\n\nIngredientes:\n• 3 cucharadas de avena\n• Fruta al gusto` },
     { type: 'almuerzo', title: 'Pollo con Espinacas y Patata', food: 'Pollo + Espinacas + Patata', portion: '8-9 cucharadas (150g)',
      recipe: `🥬 POLLO CON ESPINACAS\n\nIngredientes:\n• 45g de pechuga de pollo\n• 2 puñados de espinacas frescas\n• 1 patata pequeña\n\nPreparación:\n1. Cocina las espinacas al vapor 5-7 min\n2. Deben estar muy tiernas\n3. Tritura con el pollo y la patata` },
     { type: 'cena', title: 'Yogur con Frutas', food: 'Yogur + Frutas', portion: '6 cucharadas (100g)',
      recipe: `🌙 CENA\n\nIngredientes:\n• 1 yogur natural\n• Frutas variadas` }],
    'Las espinacas son ricas en hierro y vitaminas.',
    ['Usa espinacas frescas', 'Cocina bien hasta que estén tiernas'],
    ['Las espinacas pueden causar heces oscuras']
  ),
  createDayData(95, 9, 14, '12-24m',
    'Espinacas con otros alimentos',
    'Combina espinacas con otros alimentos.',
    'Verduras', 'Espinacas + Verduras', '3-4 cucharadas (40g)', '3 comidas', 3,
    [{ type: 'desayuno', title: 'Pan con Aguacate', food: 'Pan + Aguacate', portion: '1 rebanada',
      recipe: `🌅 DESAYUNO\n\nIngredientes:\n• 1 rebanada de pan integral\n• 1/4 aguacate` },
     { type: 'almuerzo', title: 'Pasta con Espinacas y Ternera', food: 'Pasta + Espinacas + Ternera', portion: '8-9 cucharadas (150g)',
      recipe: `🍽️ ALMUERZO\n\nIngredientes:\n• 2 cucharadas de pasta\n• 2 puñados de espinacas\n• 40g de ternera picada` },
     { type: 'cena', title: 'Pescado con Verduras', food: 'Merluza + Verduras', portion: '7 cucharadas (120g)',
      recipe: `🌙 CENA\n\nIngredientes:\n• 50g de merluza\n• Verduras variadas` }],
    'Las espinacas combinan bien con proteínas.',
    ['Ofrece espinacas 1-2 veces por semana'],
    ['Las espinacas contienen oxalatos']
  ),
  createDayData(96, 9, 14, '12-24m',
    'Espinacas aprobadas',
    '✅ ESPINACAS APROBADAS.',
    'Verduras', 'Espinacas', '3-4 cucharadas (40g)', '3 comidas', 3,
    [{ type: 'desayuno', title: 'Yogur con Frutas', food: 'Yogur + Frutas variadas', portion: '6-7 cucharadas (120g)',
      recipe: `🌅 DESAYUNO\n\nIngredientes:\n• 1 yogur natural\n• Frutas variadas` },
     { type: 'almuerzo', title: 'Lentejas con Espinacas', food: 'Lentejas + Espinacas + Arroz', portion: '8-9 cucharadas (150g)',
      recipe: `✅ ESPINACAS APROBADAS\n\n🍽️ LENTEJAS CON ESPINACAS\n\nIngredientes:\n• 3 cucharadas de lentejas\n• 2 puñados de espinacas\n• 1 cucharada de arroz` },
     { type: 'cena', title: 'Compota de Frutas', food: 'Frutas variadas', portion: '6 cucharadas (100g)',
      recipe: `🌙 CENA\n\nIngredientes:\n• Frutas variadas` }],
    'Las espinacas son muy nutritivas.',
    ['Ofrece 1-2 veces por semana'],
    ['No ofrezcas espinacas crudas']
  ),
  createDayData(97, 9, 14, '12-24m',
    'Nuevo alimento: Melocotón',
    'Introducimos el melocotón, fruta dulce y jugosa.',
    'Frutas', 'Melocotón', '2-3 cucharadas (30g)', '3 comidas', 3,
    [{ type: 'desayuno', title: 'Melocotón con Yogur', food: 'Melocotón + Yogur', portion: '6-7 cucharadas (120g)',
      recipe: `🍑 MELOCOTÓN CON YOGUR\n\nIngredientes:\n• 1/2 melocotón maduro\n• 1 yogur natural\n\nPreparación:\n1. Pela y tritura el melocotón\n2. Mézclalo con el yogur` },
     { type: 'almuerzo', title: 'Pollo con Verduras y Arroz', food: 'Pollo + Verduras + Arroz', portion: '8-9 cucharadas (150g)',
      recipe: `🍽️ ALMUERZO\n\nIngredientes:\n• 45g de pechuga de pollo\n• Verduras variadas\n• 2 cucharadas de arroz` },
     { type: 'cena', title: 'Compota de Melocotón', food: 'Melocotón cocido', portion: '6 cucharadas (100g)',
      recipe: `🌙 CENA\n\nIngredientes:\n• 1 melocotón\n\nPreparación:\n1. Pela y corta el melocotón\n2. Cocina al vapor 8-10 min\n3. Tritura ligeramente` }],
    'El melocotón es rico en vitaminas A y C.',
    ['Elige melocotones maduros', 'Pela siempre la fruta'],
    ['Algunos bebés pueden ser alérgicos al melocotón']
  ),
  createDayData(98, 9, 14, '12-24m',
    'Melocotón con otras frutas',
    'Combina melocotón con otras frutas.',
    'Frutas', 'Melocotón + Frutas', '3-4 cucharadas (40g)', '3 comidas', 3,
    [{ type: 'desayuno', title: 'Macedonia de Frutas', food: 'Melocotón + Plátano + Pera', portion: '6-7 cucharadas (120g)',
      recipe: `🍑 MACEDONIA\n\nIngredientes:\n• 1/4 melocotón en trocitos\n• 1/4 plátano en trocitos\n• 1/4 pera en trocitos` },
     { type: 'almuerzo', title: 'Pasta con Ternera', food: 'Pasta + Ternera + Verduras', portion: '8-9 cucharadas (150g)',
      recipe: `🍽️ ALMUERZO\n\nIngredientes:\n• 2 cucharadas de pasta\n• 40g de ternera\n• Verduras variadas` },
     { type: 'cena', title: 'Yogur con Frutas', food: 'Yogur + Melocotón', portion: '6 cucharadas (100g)',
      recipe: `🌙 CENA\n\nIngredientes:\n• 1 yogur natural\n• 1/2 melocotón` }],
    'El melocotón combina bien con otras frutas.',
    ['Varía las combinaciones de frutas'],
    ['El melocotón maduro es más dulce']
  ),
  createDayData(99, 9, 14, '12-24m',
    'Melocotón aprobado',
    '✅ MELOCOTÓN APROBADO.',
    'Frutas', 'Melocotón', '1/2 melocotón', '3 comidas', 3,
    [{ type: 'desayuno', title: 'Avena con Melocotón', food: 'Avena + Melocotón', portion: '6-7 cucharadas (120g)',
      recipe: `✅ MELOCOTÓN APROBADO\n\n🥣 AVENA CON MELOCOTÓN\n\nIngredientes:\n• 3 cucharadas de avena\n• 1/2 melocotón triturado` },
     { type: 'almuerzo', title: 'Pescado con Verduras', food: 'Merluza + Espinacas + Patata', portion: '8-9 cucharadas (150g)',
      recipe: `🍽️ ALMUERZO\n\nIngredientes:\n• 50g de merluza\n• 2 puñados de espinacas\n• 1 patata pequeña` },
     { type: 'cena', title: 'Compota de Frutas', food: 'Frutas variadas', portion: '6 cucharadas (100g)',
      recipe: `🌙 CENA\n\nIngredientes:\n• Frutas variadas` }],
    'El melocotón es una buena fuente de vitaminas.',
    ['Ofrece melocotón cuando esté de temporada'],
    ['El melocotón puede ser alergénico para algunos']
  ),
  // DÍAS 100-120: Continuación mes 9
  ...Array.from({ length: 21 }, (_, i) => {
    const dayNum = 100 + i
    const weekNum = Math.ceil(dayNum / 7)
    return createDayData(dayNum, 9, weekNum, '12-24m',
      `Día ${dayNum}: Menú variado`,
      `Menú variado del mes 9 con texturas más sólidas.`,
      'Varios', 'Menú variado', '400-450g diarios', '3 comidas + snacks', 3,
      [{ type: 'desayuno', title: 'Desayuno variado', food: 'Avena/Yogur/Pan + Fruta', portion: '6-7 cucharadas (120g)',
        recipe: `🌅 DESAYUNO\n\nIngredientes:\n• Avena, yogur o pan\n• Frutas variadas` },
       { type: 'almuerzo', title: 'Almuerzo completo', food: 'Proteína + Verduras + Carbohidratos', portion: '8-9 cucharadas (150g)',
        recipe: `🍽️ ALMUERZO\n\nIngredientes:\n• Proteína (pollo, ternera, pescado, lentejas)\n• Verduras variadas\n• Arroz, pasta o patata` },
       { type: 'cena', title: 'Cena ligera', food: 'Verduras/Frutas/Yogur', portion: '6-7 cucharadas (110g)',
        recipe: `🌙 CENA\n\nIngredientes:\n• Verduras suaves, frutas o yogur` }],
      'La lactancia puede continuar si lo deseas.',
      ['Fomenta la autonomía en la comida', 'Ofrece alimentos con la mano'],
      ['Vigila siempre mientras come']
    )
  }),

  // ==================== MES 10 (Días 121-150) ====================
  ...Array.from({ length: 30 }, (_, i) => {
    const dayNum = 121 + i
    const weekNum = Math.ceil(dayNum / 7)
    const newFoods = ['Naranja', 'Piña', 'Coliflor', 'Judías verdes', 'Arroz integral', 'Queso fresco', 'Huevo completo', 'Pavos', 'Cordero', 'Bacalao', 'Atún', 'Garbanzos', 'Pan integral', 'Pasta integral', 'Avena integral', 'Brócoli', 'Espinacas', 'Zanahoria', 'Calabaza', 'Calabacín', 'Pera', 'Manzana', 'Plátano', 'Melocotón', 'Aguacate', 'Yogur', 'Lentejas', 'Pollo', 'Ternera', 'Pescado']
    const newFood = newFoods[i]
    return createDayData(dayNum, 10, weekNum, '12-24m',
      `Día ${dayNum}: ${i === 0 ? '¡Mes 10! Introduciendo ' + newFood : 'Menú con ' + newFood}`,
      `Menú variado del mes 10. ${i === 0 ? 'Nuevos alimentos: más frutas, verduras y proteínas.' : ''}`,
      'Varios', 'Menú variado', '400-500g diarios', '3 comidas + 2 snacks', 3,
      [{ type: 'desayuno', title: 'Desayuno nutritivo', food: 'Cereales + Lácteo + Fruta', portion: '120-150g',
        recipe: `🌅 DESAYUNO\n\nIngredientes:\n• Avena, pan o cereales\n• Yogur o queso\n• Frutas variadas` },
       { type: 'almuerzo', title: 'Almuerzo completo', food: `${newFood} + Acompañamientos`, portion: '150-180g',
        recipe: `🍽️ ALMUERZO - ${newFood.toUpperCase()}\n\nIngredientes:\n• ${newFood}\n• Verduras variadas\n• Arroz, pasta o patata` },
       { type: 'cena', title: 'Cena ligera', food: 'Verduras + Proteína ligera', portion: '120-150g',
        recipe: `🌙 CENA\n\nIngredientes:\n• Verduras suaves\n• Pescado, huevo o yogur` }],
      'La leche materna puede continuar como complemento.',
      ['Ofrece agua con las comidas', 'Fomenta el uso de cuchara'],
      ['Vigila siempre mientras come']
    )
  }),

  // ==================== MES 11 (Días 151-180) ====================
  ...Array.from({ length: 30 }, (_, i) => {
    const dayNum = 151 + i
    const weekNum = Math.ceil(dayNum / 7)
    const foods = ['Pollo', 'Ternera', 'Pescado', 'Lentejas', 'Huevo', 'Pollo', 'Ternera', 'Pescado', 'Garbanzos', 'Huevo', 'Pollo', 'Ternera', 'Pescado', 'Lentejas', 'Huevo', 'Pollo', 'Ternera', 'Pescado', 'Garbanzos', 'Huevo', 'Pollo', 'Ternera', 'Pescado', 'Lentejas', 'Huevo', 'Pollo', 'Ternera', 'Pescado', 'Garbanzos', 'Huevo']
    const food = foods[i]
    return createDayData(dayNum, 11, weekNum, '12-24m',
      `Día ${dayNum}: ${i === 0 ? '¡Mes 11!' : ''} Menú con ${food}`,
      `Menú del mes 11. ${i === 0 ? 'El bebé se acerca al año. Más variedad y texturas.' : ''}`,
      'Varios', 'Menú variado', '450-550g diarios', '3 comidas + 2 snacks', 3,
      [{ type: 'desayuno', title: 'Desayuno completo', food: 'Cereales + Lácteo + Fruta', portion: '150g',
        recipe: `🌅 DESAYUNO\n\nIngredientes:\n• Cereales o pan\n• Yogur o queso\n• Frutas en trocitos` },
       { type: 'almuerzo', title: `${food} con guarnición`, food: `${food} + Verduras + Carbohidratos`, portion: '180g',
        recipe: `🍽️ ALMUERZO\n\nIngredientes:\n• ${food}\n• Verduras variadas\n• Arroz, pasta o patata` },
       { type: 'cena', title: 'Cena nutritiva', food: 'Proteína ligera + Verduras', portion: '130-150g',
        recipe: `🌙 CENA\n\nIngredientes:\n• Pescado, huevo o legumbres\n• Verduras suaves` }],
      'La leche materna puede continuar si lo deseas.',
      ['Fomenta la autonomía', 'Ofrece cubiertos apropiados'],
      ['Vigila siempre mientras come']
    )
  }),

  // ==================== MES 12 (Días 181-210) ====================
  ...Array.from({ length: 30 }, (_, i) => {
    const dayNum = 181 + i
    const weekNum = Math.ceil(dayNum / 7)
    return createDayData(dayNum, 12, weekNum, '12-24m',
      `Día ${dayNum}: ${i === 0 ? '¡Primer cumpleaños!' : 'Menú familiar'}`,
      `Mes 12. ${i === 0 ? '¡Feliz primer cumpleaños! El bebé puede comer casi de todo.' : 'Transición a comida familiar.'}`,
      'Varios', 'Comida familiar', '500-600g diarios', '3 comidas + 2 snacks', 3,
      [{ type: 'desayuno', title: 'Desayuno de mayor', food: 'Cereales + Lácteo + Fruta', portion: '150-180g',
        recipe: `🌅 DESAYUNO\n\nIngredientes:\n• Cereales, pan o tortita\n• Leche, yogur o queso\n• Frutas variadas\n\n💡 El bebé puede comer casi todo lo de la familia` },
       { type: 'almuerzo', title: 'Comida familiar adaptada', food: 'Proteína + Verduras + Carbohidratos', portion: '180-200g',
        recipe: `🍽️ ALMUERZO\n\nIngredientes:\n• Carne, pescado, huevo o legumbres\n• Verduras variadas\n• Arroz, pasta, patata o pan\n\n💡 Adaptación: sin sal añadida, trozos pequeños` },
       { type: 'cena', title: 'Cena ligera', food: 'Proteína ligera + Verduras/Frutas', portion: '150g',
        recipe: `🌙 CENA\n\nIngredientes:\n• Pescado, huevo, yogur o queso\n• Verduras o frutas` }],
      'A partir del año, la leche de vaca puede introducirse gradualmente.',
      ['Come en familia para modelar hábitos', 'Ofrece variedad de alimentos'],
      ['Evita alimentos con riesgo de atragantamiento']
    )
  }),

  // ==================== MESES 13-24 (Días 211-570) ====================
  // Generar datos para los meses restantes (13-24)
  ...Array.from({ length: 360 }, (_, i) => {
    const dayNum = 211 + i
    const monthNum = Math.floor((dayNum - 1) / 30) + 6
    const weekNum = Math.ceil(dayNum / 7)
    const ageRange: '12-24m' = '12-24m'

    const foods = ['Pollo', 'Ternera', 'Pescado', 'Lentejas', 'Huevo', 'Pollo', 'Ternera', 'Pescado', 'Garbanzos', 'Huevo', 'Pollo', 'Ternera', 'Pescado', 'Judías', 'Huevo', 'Pollo', 'Cordero', 'Pescado', 'Lentejas', 'Huevo']
    const foodIndex = i % foods.length
    const food = foods[foodIndex]

    return createDayData(dayNum, monthNum, weekNum, ageRange,
      `Día ${dayNum}: Menú mes ${monthNum}`,
      `Menú variado del mes ${monthNum}. El niño come alimentos familiares con adaptaciones.`,
      'Varios', 'Comida familiar', '600-800g diarios', '3 comidas + 2 snacks', 3,
      [{ type: 'desayuno', title: 'Desayuno nutritivo', food: 'Cereales + Lácteo + Fruta', portion: '180-200g',
        recipe: `🌅 DESAYUNO\n\nIngredientes:\n• Cereales, pan o tortitas\n• Leche, yogur o queso\n• Frutas variadas\n\nMes ${monthNum}: el niño puede comer casi todo` },
       { type: 'almuerzo', title: `${food} con guarnición`, food: `${food} + Verduras + Carbohidratos`, portion: '200-250g',
        recipe: `🍽️ ALMUERZO\n\nIngredientes:\n• ${food}\n• Verduras de temporada\n• Arroz, pasta, patata o legumbres\n\n💡 Textura adaptada, trozos pequeños` },
       { type: 'cena', title: 'Cena equilibrada', food: 'Proteína + Verduras', portion: '150-180g',
        recipe: `🌙 CENA\n\nIngredientes:\n• Pescado, huevo, queso o legumbres\n• Verduras o frutas\n\n💡 Cena más ligera que el almuerzo` }],
      'La leche sigue siendo importante. Ofrece agua con las comidas.',
      ['Fomenta la autonomía', 'Come en familia', 'Modela buenos hábitos alimenticios'],
      ['Evita alimentos con riesgo de atragantamiento', 'Vigila siempre mientras come']
    )
  })
]
