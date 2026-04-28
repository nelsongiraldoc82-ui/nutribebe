// Datos estáticos de introducción de alimentos
// Basados en recomendaciones OMS, UNICEF y AEPAP

export interface IntroStep {
  id: string
  weekNumber: number
  dayNumber: number
  ageRange: '6-8m' | '8-12m' | '12-24m'
  title: string
  description: string
  foodGroup?: string
  specificFood?: string
  portionSize?: string
  frequency?: string
  mealsPerDay?: number // 1, 2, o 3+ comidas al día
  breastmilkNote?: string
  tips?: string
  warnings?: string
  recipe?: string // Receta detallada
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

export const introStepsData: IntroStep[] = [
  // ==================== RANGO 6-8 MESES ====================
  // DÍA 1-3: Calabacín (1 comida al día)
  {
    id: 'day1',
    weekNumber: 1,
    dayNumber: 1,
    ageRange: '6-8m',
    title: '¡Primer día de alimentación complementaria!',
    description: 'Hoy comienza una nueva etapa. Ofrece tu primera cucharada de puré de calabacín. Solo 2-3 cucharaditas es suficiente.',
    foodGroup: 'Verduras',
    specificFood: 'Calabacín',
    portionSize: '2-3 cucharaditas (10-15g)',
    frequency: '1 comida al día (almuerzo)',
    mealsPerDay: 1,
    breastmilkNote: 'Continúa con la lactancia materna a demanda. El puré es COMPLEMENTARIO, no sustituye ninguna toma de leche. Ofrece el pecho ANTES del puré.',
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
    recipe: `🥄 PURÉ DE CALABACÍN (1 porción)

Ingredientes:
• 1 calabacín pequeño (aprox. 100g)
• 2-3 cucharadas de agua

Preparación:
1. Lava bien el calabacín bajo el grifo
2. Pélalo completamente (la piel puede ser difícil de digerir al principio)
3. Córtalo en rodajas finas o cubos pequeños
4. Cocina al vapor durante 10-15 minutos hasta que esté muy blando (se debe deshacer con un tenedor)
5. Tritura con la batidora añadiendo el agua de cocción poco a poco
6. La textura debe ser muy suave, casi líquida, sin grumos

Tiempo de preparación: 20 minutos
Conservación: Refrigerar hasta 24h o congelar en cubitos hasta 1 mes

💡 Consejo: Puedes preparar más cantidad y congelar en cubitos de hielo (aprox. 15g por cubo)`
  },
  {
    id: 'day2',
    weekNumber: 1,
    dayNumber: 2,
    ageRange: '6-8m',
    title: 'Segundo día con calabacín',
    description: 'Continúa ofreciendo puré de calabacín. Aumenta ligeramente la cantidad si el bebé lo acepta.',
    foodGroup: 'Verduras',
    specificFood: 'Calabacín',
    portionSize: '3-4 cucharadas (20-30g)',
    frequency: '1 comida al día (almuerzo)',
    mealsPerDay: 1,
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
  },
  {
    id: 'day3',
    weekNumber: 1,
    dayNumber: 3,
    ageRange: '6-8m',
    title: 'Tercer día con calabacín',
    description: 'Último día de prueba con calabacín. Si todo va bien, mañana podrás introducir un nuevo alimento.',
    foodGroup: 'Verduras',
    specificFood: 'Calabacín',
    portionSize: '4-5 cucharadas (30-40g)',
    frequency: '1 comida al día (almuerzo)',
    mealsPerDay: 1,
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
  },
  // DÍA 4-6: Calabaza
  {
    id: 'day4',
    weekNumber: 1,
    dayNumber: 4,
    ageRange: '6-8m',
    title: 'Nuevo alimento: Calabaza',
    description: 'Hoy introducimos la calabaza. Es dulce y suave, ideal para bebés. Prepara un puré solo de calabaza.',
    foodGroup: 'Verduras',
    specificFood: 'Calabaza',
    portionSize: '2-3 cucharadas (15-20g)',
    frequency: '1 comida al día (almuerzo)',
    mealsPerDay: 1,
    breastmilkNote: 'Amamanta a demanda. La leche materna sigue siendo el alimento principal. Ofrece el pecho antes de la comida sólida.',
    tips: JSON.stringify([
      'La calabaza es naturalmente dulce, suele gustar mucho',
      'Cocina al vapor para conservar nutrientes',
      'Tritura muy bien hasta que no queden grumos'
    ]),
    warnings: JSON.stringify([
      'Es un alimento nuevo: observa durante 2-3 días',
      'No mezcles con otros alimentos nuevos todavía'
    ]),
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
  },
  {
    id: 'day5',
    weekNumber: 1,
    dayNumber: 5,
    ageRange: '6-8m',
    title: 'Continúa con calabaza',
    description: 'Sigue probando la calabaza. El bebé se acostumbra a nuevos sabores.',
    foodGroup: 'Verduras',
    specificFood: 'Calabaza',
    portionSize: '3-4 cucharadas (25-35g)',
    frequency: '1 comida al día (almuerzo)',
    mealsPerDay: 1,
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
  },
  {
    id: 'day6',
    weekNumber: 1,
    dayNumber: 6,
    ageRange: '6-8m',
    title: 'Último día de calabaza',
    description: 'Finalizamos la prueba de calabaza. Si todo está bien, mañana un nuevo alimento.',
    foodGroup: 'Verduras',
    specificFood: 'Calabaza',
    portionSize: '4-5 cucharadas (35-45g)',
    frequency: '1 comida al día (almuerzo)',
    mealsPerDay: 1,
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
    recipe: `🥄 PURÉ DE CALABAZA (versión espesa)

Preparación igual que días anteriores, pero con menos agua para obtener textura más consistente.

✅ CALABAZA APROBADA - Añádela a tu lista de alimentos seguros`
  },
  // DÍA 7-9: Zanahoria
  {
    id: 'day7',
    weekNumber: 1,
    dayNumber: 7,
    ageRange: '6-8m',
    title: 'Nuevo alimento: Zanahoria',
    description: 'Introducimos la zanahoria, rica en vitamina A. Debe estar muy bien cocida y triturada.',
    foodGroup: 'Verduras',
    specificFood: 'Zanahoria',
    portionSize: '2-3 cucharadas (15-20g)',
    frequency: '1 comida al día (almuerzo)',
    mealsPerDay: 1,
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
    recipe: `🥄 PURÉ DE ZANAHORIA

Ingredientes:
• 1 zanahoria mediana (aprox. 100g)
• 3-4 cucharadas de agua

Preparación:
1. Pela la zanahoria y córtala en rodajas finas
2. Cocina al vapor durante 20-25 minutos hasta que esté muy blanda (debe deshacerse fácilmente)
3. Tritura muy bien con batidora, añadiendo agua de cocción
4. La zanahoria es más fibrosa, asegúrate de que no queden hilos

Tiempo: 30 minutos
💡 Rica en beta-caroteno (vitamina A) para la visión y el sistema inmune`
  },
  {
    id: 'day8',
    weekNumber: 2,
    dayNumber: 8,
    ageRange: '6-8m',
    title: 'Segundo día con zanahoria',
    description: 'Continúa con zanahoria. Observa la respuesta del bebé.',
    foodGroup: 'Verduras',
    specificFood: 'Zanahoria',
    portionSize: '3-4 cucharadas (25-35g)',
    frequency: '1 comida al día (almuerzo)',
    mealsPerDay: 1,
    breastmilkNote: 'Ofrece el pecho después del puré para "cerrar" la comida.',
    tips: JSON.stringify([
      'Puedes empezar a mezclar con calabacín ya aprobado',
      'Mezclar alimentos conocidos ayuda a aceptar sabores',
      'Proporción: 2 partes zanahoria, 1 parte calabacín'
    ]),
    warnings: JSON.stringify([
      'Solo mezcla alimentos ya probados y aprobados',
      'No introduzcas más de un alimento nuevo cada 3 días'
    ]),
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
  },
  {
    id: 'day9',
    weekNumber: 2,
    dayNumber: 9,
    ageRange: '6-8m',
    title: 'Último día de zanahoria',
    description: 'Finalizamos la prueba de zanahoria.',
    foodGroup: 'Verduras',
    specificFood: 'Zanahoria',
    portionSize: '4-5 cucharadas (35-45g)',
    frequency: '1 comida al día (almuerzo)',
    mealsPerDay: 1,
    breastmilkNote: 'Mantén la lactancia a demanda como fuente principal de nutrición.',
    tips: JSON.stringify([
      'La zanahoria está aprobada si no hubo reacciones',
      'Puedes congelar puré de zanahoria en cubitos'
    ]),
    warnings: JSON.stringify([
      'Si hay estreñimiento, ofrece más agua entre comidas'
    ]),
    recipe: `✅ ZANAHORIA APROBADA

Puedes preparar mezclas con los alimentos ya aprobados:
• Zanahoria + Calabacín
• Zanahoria + Calabaza
• Las tres verduras juntas

💡 Varía las mezclas para que el bebé no se aburra`
  },
  // DÍA 10-12: Patata
  {
    id: 'day10',
    weekNumber: 2,
    dayNumber: 10,
    ageRange: '6-8m',
    title: 'Nuevo alimento: Patata',
    description: 'Introducimos la patata, un carbohidrato energético y muy suave.',
    foodGroup: 'Cereales',
    specificFood: 'Patata',
    portionSize: '2-3 cucharadas (20-30g)',
    frequency: '1 comida al día (almuerzo)',
    mealsPerDay: 1,
    breastmilkNote: 'La patata aporta energía pero poca grasa. La leche materna complementa los nutrientes necesarios.',
    tips: JSON.stringify([
      'Elige patatas firmes sin brotes ni partes verdes',
      'Cocina bien para que quede muy suave',
      'La patata absorbe agua, añade líquido al triturar'
    ]),
    warnings: JSON.stringify([
      'Nunca des patata cruda o poco cocida',
      'Las partes verdes de la patata son tóxicas'
    ]),
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
  },
  {
    id: 'day11',
    weekNumber: 2,
    dayNumber: 11,
    ageRange: '6-8m',
    title: 'Patata + verduras',
    description: 'Mezcla patata con las verduras ya aprobadas.',
    foodGroup: 'Verduras',
    specificFood: 'Patata + Calabacín',
    portionSize: '4-5 cucharadas (40-50g)',
    frequency: '1 comida al día (almuerzo)',
    mealsPerDay: 1,
    breastmilkNote: 'Continúa con la lactancia a demanda.',
    tips: JSON.stringify([
      'La patata aporta consistencia a los purés',
      'Mezcla con calabacín o zanahoria',
      'Acepta que el bebé explore con las manos'
    ]),
    warnings: JSON.stringify([
      'Verifica que no haya reacciones a la patata'
    ]),
    recipe: `🥄 PURÉ DE PATATA Y VERDURAS

Ingredientes:
• 1/2 patata pequeña
• 1/2 calabacín
• 1 zanahoria pequeña (opcional)
• Agua de cocción

Preparación:
1. Pela y corta todas las verduras
2. Cocina al vapor: zanahoria 15 min, luego patata y calabacín 10 min más
3. Tritura todo junto con agua de cocción
4. Obtendrás un puré nutritivo y completo

💡 Este puré combina carbohidratos, vitaminas y fibra`
  },
  {
    id: 'day12',
    weekNumber: 2,
    dayNumber: 12,
    ageRange: '6-8m',
    title: 'Patata aprobada',
    description: 'La patata queda aprobada. Continúa con mezclas variadas.',
    foodGroup: 'Cereales',
    specificFood: 'Patata',
    portionSize: '4-5 cucharadas (40-50g)',
    frequency: '1 comida al día (almuerzo)',
    mealsPerDay: 1,
    breastmilkNote: 'Excelente progreso. La lactancia sigue siendo esencial.',
    tips: JSON.stringify([
      'La patata es muy versátil',
      'Puedes prepararla con diferentes verduras',
      'Congiona bien congelada'
    ]),
    warnings: JSON.stringify([
      'No añadas sal a la patata'
    ]),
    recipe: `✅ PATATA APROBADA

Recetas que puedes hacer ahora:
• Puré de patata y calabacín
• Puré de patata y zanahoria
• Puré de tres verduras (patata + calabacín + zanahoria)
• Puré de patata y calabaza

💡 Varía los ingredientes cada día para ampliar sabores`
  },
  // DÍA 13-15: Pera (primera fruta)
  {
    id: 'day13',
    weekNumber: 2,
    dayNumber: 13,
    ageRange: '6-8m',
    title: 'Primera fruta: Pera',
    description: 'Introducimos la pera, una fruta dulce y suave. Ideal como primera fruta.',
    foodGroup: 'Frutas',
    specificFood: 'Pera',
    portionSize: '2-3 cucharadas (20-30g)',
    frequency: '1 comida al día (almuerzo o merienda)',
    mealsPerDay: 1,
    breastmilkNote: 'Las frutas aportan vitaminas. La leche materna sigue siendo la base nutricional.',
    tips: JSON.stringify([
      'Elige una pera madura pero firme',
      'Puedes ofrecerla cocida o cruda triturada',
      'Su dulzor natural suele gustar mucho'
    ]),
    warnings: JSON.stringify([
      'Lava bien la fruta antes de preparar',
      'Algunos bebés prefieren la fruta cocida al principio'
    ]),
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
  },
  {
    id: 'day14',
    weekNumber: 2,
    dayNumber: 14,
    ageRange: '6-8m',
    title: 'Segundo día con pera',
    description: 'Continúa con pera. Puedes combinar con verduras ya aprobadas.',
    foodGroup: 'Frutas',
    specificFood: 'Pera',
    portionSize: '3-4 cucharadas (30-40g)',
    frequency: '1 comida al día (almuerzo o merienda)',
    mealsPerDay: 1,
    breastmilkNote: 'Las frutas pueden causar heces más blandas. Es normal.',
    tips: JSON.stringify([
      'Observa si le gusta el sabor dulce',
      'Puedes mezclar pera con calabacín (combinación suave)',
      'Ofrece a diferentes horas del día'
    ]),
    warnings: JSON.stringify([
      'No añadas azúcar ni miel'
    ]),
    recipe: `🍎 PERA CON VERDURAS (combinación suave)

Ingredientes:
• 1/2 pera madura
• 2-3 cucharadas de puré de calabacín o patata

Preparación:
1. Prepara el puré de pera (cocida o cruda)
2. Mezcla con el puré de verduras ya preparado
3. La combinación dulce-salada suele gustar

💡 Esta combinación ayuda a que acepte diferentes sabores`
  },
  {
    id: 'day15',
    weekNumber: 2,
    dayNumber: 15,
    ageRange: '6-8m',
    title: 'Pera aprobada',
    description: 'La pera queda aprobada. Primera fruta en tu lista.',
    foodGroup: 'Frutas',
    specificFood: 'Pera',
    portionSize: '4-5 cucharadas (40-50g)',
    frequency: '1 comida al día',
    mealsPerDay: 1,
    breastmilkNote: 'Buen progreso. Continúa amamantando a demanda.',
    tips: JSON.stringify([
      'La pera es buena fuente de fibra',
      'Puedes ofrecerla como postre o merienda',
      'Prepara cubitos congelados de pera triturada'
    ]),
    warnings: JSON.stringify([
      'Si notas heces muy blandas, reduce la cantidad de fruta'
    ]),
    recipe: `✅ PERA APROBADA

Ideas para servir:
• Puré de pera solo
• Pera + calabacín (mezcla suave)
• Pera + patata (interessante combinación)

💡 Las frutas pueden ofrecerse en cualquier momento del día`
  },
  // DÍA 16-18: Manzana
  {
    id: 'day16',
    weekNumber: 2,
    dayNumber: 16,
    ageRange: '6-8m',
    title: 'Nueva fruta: Manzana',
    description: 'Introducimos la manzana, rica en fibra y vitaminas. Debe estar muy bien cocida.',
    foodGroup: 'Frutas',
    specificFood: 'Manzana',
    portionSize: '2-3 cucharadas (20-30g)',
    frequency: '1 comida al día',
    mealsPerDay: 1,
    breastmilkNote: 'La manzana es muy digestiva cocida. Ideal para bebés.',
    tips: JSON.stringify([
      'Usa manzanas dulces como Golden o Fuji',
      'Evita manzanas ácidas como Granny Smith',
      'Cocinarla la hace más digestiva'
    ]),
    warnings: JSON.stringify([
      'La manzana cruda puede ser difícil de digerir',
      'Siempre pélala y retira semillas'
    ]),
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
  },
  {
    id: 'day17',
    weekNumber: 3,
    dayNumber: 17,
    ageRange: '6-8m',
    title: 'Manzana + pera',
    description: 'Combina manzana con pera para una mezcla de frutas.',
    foodGroup: 'Frutas',
    specificFood: 'Manzana + Pera',
    portionSize: '3-4 cucharadas (30-40g)',
    frequency: '1 comida al día',
    mealsPerDay: 1,
    breastmilkNote: 'Las mezclas de frutas aportan variedad de vitaminas.',
    tips: JSON.stringify([
      'Cocina ambas frutas juntas para mezclar sabores',
      'Puedes añadir una pizca de canela (sin azúcar)',
      'Acepta que el bebé explore texturas'
    ]),
    warnings: JSON.stringify([
      'Observa si hay reacciones a la manzana'
    ]),
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
  },
  {
    id: 'day18',
    weekNumber: 3,
    dayNumber: 18,
    ageRange: '6-8m',
    title: 'Manzana aprobada',
    description: 'La manzana queda aprobada. Tienes dos frutas en tu lista.',
    foodGroup: 'Frutas',
    specificFood: 'Manzana',
    portionSize: '4-5 cucharadas (40-50g)',
    frequency: '1 comida al día',
    mealsPerDay: 1,
    breastmilkNote: 'Excelente progreso. Continúa con la lactancia.',
    tips: JSON.stringify([
      'La manzana es versátil para mezclar',
      'Puedes ofrecerla en diferentes momentos del día',
      'Congela compota en cubitos'
    ]),
    warnings: JSON.stringify([
      'No ofrezcas trozos de manzana cruda hasta más adelante'
    ]),
    recipe: `✅ MANZANA APROBADA

Combinaciones de frutas:
• Manzana + Pera
• Manzana + Calabaza (dulce)
• Manzana + Zanahoria (vitamina A)

💡 Varía entre frutas y verduras a lo largo del día`
  },
  // DÍA 19-21: Pollo (primera proteína)
  {
    id: 'day19',
    weekNumber: 3,
    dayNumber: 19,
    ageRange: '6-8m',
    title: 'Primera proteína: Pollo',
    description: 'Introducimos el pollo, la primera proteína animal. Bien cocido y triturado.',
    foodGroup: 'Proteínas',
    specificFood: 'Pollo',
    portionSize: '1-2 cucharadas (10-20g de pollo)',
    frequency: '1 comida al día (almuerzo)',
    mealsPerDay: 1,
    breastmilkNote: 'Las proteínas animales se introducen gradualmente. La leche materna sigue aportando proteínas de alta calidad.',
    tips: JSON.stringify([
      'Usa pechuga de pollo sin piel ni huesos',
      'Cocina muy bien el pollo (sin partes rosadas)',
      'Tritura con verduras para mejor textura'
    ]),
    warnings: JSON.stringify([
      'Asegúrate de que no haya espinas ni huesos',
      'El pollo debe estar completamente cocido'
    ]),
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
  },
  {
    id: 'day20',
    weekNumber: 3,
    dayNumber: 20,
    ageRange: '6-8m',
    title: 'Pollo con verduras',
    description: 'Continúa con pollo mezclado con verduras ya conocidas.',
    foodGroup: 'Proteínas',
    specificFood: 'Pollo',
    portionSize: '2-3 cucharadas (20-30g)',
    frequency: '1 comida al día (almuerzo)',
    mealsPerDay: 1,
    breastmilkNote: 'Las proteínas son esenciales para el desarrollo muscular y cerebral.',
    tips: JSON.stringify([
      'Mezcla pollo con diferentes verduras',
      'La textura puede ser un poco más gruesa ahora',
      'Observa si le gusta el sabor'
    ]),
    warnings: JSON.stringify([
      'No añadas sal al pollo'
    ]),
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
  },
  {
    id: 'day21',
    weekNumber: 3,
    dayNumber: 21,
    ageRange: '6-8m',
    title: 'Pollo aprobado',
    description: 'El pollo queda aprobado. Primera proteína en tu lista.',
    foodGroup: 'Proteínas',
    specificFood: 'Pollo',
    portionSize: '2-3 cucharadas (25-35g)',
    frequency: '1 comida al día (almuerzo)',
    mealsPerDay: 1,
    breastmilkNote: 'Excelente progreso. Ahora tienes proteínas, verduras y frutas aprobadas.',
    tips: JSON.stringify([
      'Ofrece pollo 2-3 veces por semana',
      'Puedes congelar puré de pollo con verduras',
      'Varía las verduras con las que lo mezclas'
    ]),
    warnings: JSON.stringify([
      'No ofrezcas pollo frito o procesado'
    ]),
    recipe: `✅ POLLO APROBADO

Recetas con pollo:
• Pollo + Patata + Zanahoria
• Pollo + Calabacín + Calabaza
• Pollo + Verduras variadas

💡 Las proteínas se ofrecen preferiblemente en el almuerzo`
  },
  // DÍA 22-24: Plátano
  {
    id: 'day22',
    weekNumber: 3,
    dayNumber: 22,
    ageRange: '6-8m',
    title: 'Nueva fruta: Plátano',
    description: 'Introducimos el plátano, rico en potasio y muy fácil de preparar.',
    foodGroup: 'Frutas',
    specificFood: 'Plátano',
    portionSize: '2-3 cucharadas (20-30g)',
    frequency: '1 comida al día',
    mealsPerDay: 1,
    breastmilkNote: 'El plátano es muy energético y fácil de digerir.',
    tips: JSON.stringify([
      'Elige plátanos maduros con puntos marrones',
      'No necesita cocción, solo triturar',
      'Puedes mezclar con otras frutas'
    ]),
    warnings: JSON.stringify([
      'El plátano puede oscurecerse rápido',
      'Ofrece poco a poco porque es muy saciante'
    ]),
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
  },
  {
    id: 'day23',
    weekNumber: 3,
    dayNumber: 23,
    ageRange: '6-8m',
    title: 'Plátano con otras frutas',
    description: 'Mezcla plátano con pera o manzana.',
    foodGroup: 'Frutas',
    specificFood: 'Plátano + Pera',
    portionSize: '3-4 cucharadas (30-40g)',
    frequency: '1 comida al día',
    mealsPerDay: 1,
    breastmilkNote: 'Las mezclas de frutas aportan variedad de nutrientes.',
    tips: JSON.stringify([
      'El plátano aporta cremosidad a las mezclas',
      'Combina bien con todas las frutas',
      'Puedes congelarlo en papillas'
    ]),
    warnings: JSON.stringify([
      'El plátano puede causar estreñimiento si se consume mucho'
    ]),
    recipe: `🍌 PLÁTANO CON PERA

Ingredientes:
• 1/2 plátano maduro
• 1/2 pera (cocida o cruda triturada)

Preparación:
1. Tritura el plátano con un tenedor
2. Mezcla con el puré de pera
3. Sirve inmediatamente

💡 Combinación dulce y cremosa`
  },
  {
    id: 'day24',
    weekNumber: 3,
    dayNumber: 24,
    ageRange: '6-8m',
    title: 'Plátano aprobado',
    description: 'El plátano queda aprobado. Tres frutas en tu lista.',
    foodGroup: 'Frutas',
    specificFood: 'Plátano',
    portionSize: '3-4 cucharadas (30-40g)',
    frequency: '1 comida al día',
    mealsPerDay: 1,
    breastmilkNote: 'Buen progreso. Tienes una buena variedad de alimentos.',
    tips: JSON.stringify([
      'El plátano es ideal para llevar de viaje',
      'No necesita refrigeración inmediata',
      'Fácil de preparar en cualquier lugar'
    ]),
    warnings: JSON.stringify([
      'El plátano maduro tiene más azúcar'
    ]),
    recipe: `✅ PLÁTANO APROBADO

Combinaciones con plátano:
• Plátano + Pera
• Plátano + Manzana
• Plátano solo
• Plátano + yogur natural (más adelante)

💡 Ideal para desayuno o merienda`
  },
  // DÍA 25-27: Empezando 2 COMIDAS AL DÍA
  {
    id: 'day25',
    weekNumber: 4,
    dayNumber: 25,
    ageRange: '6-8m',
    title: '¡Aumentamos a 2 comidas al día!',
    description: 'El bebé está listo para dos comidas al día. Almuerzo + Cena ligera.',
    foodGroup: 'Verduras',
    specificFood: 'Mezcla de verduras + Fruta',
    portionSize: 'Almuerzo: 5-6 cucharadas / Cena: 3-4 cucharadas',
    frequency: '2 comidas al día (almuerzo y cena)',
    mealsPerDay: 2,
    breastmilkNote: 'Con dos comidas, la lactancia sigue siendo importante. Ofrece el pecho antes de cada comida sólida.',
    tips: JSON.stringify([
      'Almuerzo: puré de verduras con proteína',
      'Cena: fruta o puré ligero de verduras',
      'Mantén horarios regulares'
    ]),
    warnings: JSON.stringify([
      'No fuerces al bebé a comer si no quiere',
      'La cena debe ser más ligera que el almuerzo'
    ]),
    recipe: `🍽️ MENÚ PARA 2 COMIDAS

ALMUERZO (comida principal):
Puré de Pollo con Verduras
• 40g de pollo
• 1 zanahoria + 1/2 patata + 1/2 calabacín
• Cocinar todo al vapor 20-25 min
• Triturar con agua de cocción

CENA (comida ligera):
Compota de Frutas
• 1/2 manzana + 1/2 pera
• Cocinar al vapor 10-12 min
• Triturar hasta obtener compota

💡 Distribución: 60% verduras/proteína, 40% frutas`
  },
  {
    id: 'day26',
    weekNumber: 4,
    dayNumber: 26,
    ageRange: '6-8m',
    title: 'Dos comidas: Día 2',
    description: 'Continúa con el esquema de dos comidas. Observa el apetito del bebé.',
    foodGroup: 'Verduras',
    specificFood: 'Pollo + Verduras / Plátano',
    portionSize: 'Almuerzo: 80-100g / Cena: 40-50g',
    frequency: '2 comidas al día',
    mealsPerDay: 2,
    breastmilkNote: 'Con dos comidas, ofrece el pecho 3-4 veces al día mínimo.',
    tips: JSON.stringify([
      'El bebé te indicará cuánto quiere comer',
      'No te preocupes si un día come menos',
      'Observa señales de saciedad'
    ]),
    warnings: JSON.stringify([
      'Si rechaza la cena, no fuerces'
    ]),
    recipe: `🍽️ MENÚ DEL DÍA

ALMUERZO:
Puré de Pollo y Calabaza
• 40g de pechuga de pollo
• 80g de calabaza
• Cocinar al vapor 20 min
• Triturar junto

CENA:
Puré de Plátano
• 1/2 plátano maduro
• Aplastar con tenedor
• Añadir un poco de agua

💡 Alterna las proteínas: pollo, luego ternera, luego pescado`
  },
  {
    id: 'day27',
    weekNumber: 4,
    dayNumber: 27,
    ageRange: '6-8m',
    title: 'Dos comidas: Día 3',
    description: 'El bebé se acostumbra a dos comidas. Varía los menús.',
    foodGroup: 'Verduras',
    specificFood: 'Variedad de alimentos aprobados',
    portionSize: 'Total diario: 150-200g entre ambas comidas',
    frequency: '2 comidas al día',
    mealsPerDay: 2,
    breastmilkNote: 'La leche materna sigue aportando la mayoría de nutrientes.',
    tips: JSON.stringify([
      'Ofrece variedad de sabores',
      'Incluye proteína en el almuerzo',
      'La cena puede ser solo verduras o fruta'
    ]),
    warnings: JSON.stringify([
      'No añadas sal, azúcar ni miel'
    ]),
    recipe: `🍽️ MENÚ VARIADO

ALMUERZO:
Puré de Ternera (introducción) + Verduras
• 30g de ternera magra
• 1 zanahoria + 1/2 patata
• Cocinar al vapor 25 min
• Triturar bien

CENA:
Compota de Manzana y Pera
• 1/2 manzana + 1/2 pera
• Cocinar 12 min
• Triturar

💡 Introducimos ternera gradualmente`
  },
  // DÍA 28-30: Consolidación y preparación para 8-12 meses
  {
    id: 'day28',
    weekNumber: 4,
    dayNumber: 28,
    ageRange: '6-8m',
    title: 'Nuevo alimento: Ternera',
    description: 'Introducimos la ternera como segunda proteína animal.',
    foodGroup: 'Proteínas',
    specificFood: 'Ternera',
    portionSize: '1-2 cucharadas (15-20g)',
    frequency: '2 comidas al día',
    mealsPerDay: 2,
    breastmilkNote: 'La ternera aporta hierro y zinc, minerales esenciales.',
    tips: JSON.stringify([
      'Usa carne magra sin grasa',
      'Cocina muy bien la carne',
      'Tritura con verduras para mejor textura'
    ]),
    warnings: JSON.stringify([
      'Asegúrate de que no haya trozos duros'
    ]),
    recipe: `🥩 PURÉ DE TERNERA CON VERDURAS

Ingredientes:
• 30g de ternera magra (trozo sin grasa)
• 1 zanahoria pequeña
• 1/2 patata pequeña
• Agua de cocción

Preparación:
1. Corta la ternera en trozos pequeños
2. Pela y corta las verduras
3. Cocina todo al vapor durante 25-30 minutos
4. La carne debe estar muy bien cocida
5. Tritura todo junto con agua de cocción

Tiempo: 35 minutos
💡 La ternera es rica en hierro, importante para prevenir anemia`
  },
  {
    id: 'day29',
    weekNumber: 4,
    dayNumber: 29,
    ageRange: '6-8m',
    title: 'Ternera + verduras',
    description: 'Continúa con ternera mezclada con verduras.',
    foodGroup: 'Proteínas',
    specificFood: 'Ternera',
    portionSize: '2-3 cucharadas (20-30g)',
    frequency: '2 comidas al día',
    mealsPerDay: 2,
    breastmilkNote: 'Combina bien el hierro de la carne con vitamina C de verduras.',
    tips: JSON.stringify([
      'Alterna entre pollo y ternera',
      'Las verduras ayudan a la absorción del hierro',
      'Varía las preparaciones'
    ]),
    warnings: JSON.stringify([
      'No ofrezcas carne cruda o poco cocida'
    ]),
    recipe: `🥩 PURÉ DE TERNERA Y CALABACÍN

Ingredientes:
• 35g de ternera magra
• 1 calabacín pequeño
• Agua de cocción

Preparación:
1. Cocina la ternera al vapor 20-25 min
2. Añade el calabacín en los últimos 12 min
3. Tritura todo junto
4. Añade agua si es necesario

💡 Combinación suave y nutritiva`
  },
  {
    id: 'day30',
    weekNumber: 4,
    dayNumber: 30,
    ageRange: '6-8m',
    title: '¡Mes 6-8 completado!',
    description: 'Has completado la fase inicial. El bebé ahora come 2 veces al día con variedad de alimentos.',
    foodGroup: 'Varios',
    specificFood: 'Variedad de alimentos aprobados',
    portionSize: 'Total: 200-250g diarios entre 2 comidas',
    frequency: '2 comidas al día',
    mealsPerDay: 2,
    breastmilkNote: '¡Felicidades! El bebé ha probado muchos alimentos. Continúa con la lactancia materna.',
    tips: JSON.stringify([
      'Resumen de alimentos aprobados: calabacín, calabaza, zanahoria, patata, pera, manzana, plátano, pollo, ternera',
      'Mantén la variedad en los menús',
      'Prepárate para la siguiente fase: 8-12 meses'
    ]),
    warnings: JSON.stringify([
      'Continúa introduciendo nuevos alimentos gradualmente'
    ]),
    recipe: `🎉 RESUMEN DE ALIMENTOS APROBADOS (6-8 MESES)

VERDURAS:
✅ Calabacín
✅ Calabaza
✅ Zanahoria
✅ Patata

FRUTAS:
✅ Pera
✅ Manzana
✅ Plátano

PROTEÍNAS:
✅ Pollo
✅ Ternera

📋 MENÚ EJEMPLO PARA HOY:
Almuerzo: Puré de ternera con verduras mixtas
Cena: Compota de pera y manzana

👶 El bebé ahora come 2 veces al día
🍼 Continúa con 3-4 tomas de pecho diarias`
  },

  // ==================== RANGO 8-12 MESES ====================
  // Ahora: 2-3 comidas al día
  {
    id: 'day31',
    weekNumber: 5,
    dayNumber: 31,
    ageRange: '8-12m',
    title: '¡Nueva fase! 8-12 meses',
    description: 'El bebé entra en una nueva etapa. Más texturas, más variedad, 2-3 comidas al día.',
    foodGroup: 'Varios',
    specificFood: 'Menú variado + Nuevos alimentos',
    portionSize: '200-300g diarios en 2-3 comidas',
    frequency: '2-3 comidas al día',
    mealsPerDay: 2,
    breastmilkNote: 'La leche materna sigue siendo importante pero los sólidos ganan protagonismo.',
    tips: JSON.stringify([
      'Introduce texturas más gruesas',
      'El bebé puede empezar a usar los dedos',
      'Ofrece pequeños trozos blandos'
    ]),
    warnings: JSON.stringify([
      'Vigila siempre mientras come para evitar atragantamiento'
    ]),
    recipe: `🍽️ MENÚ PARA 8-12 MESES

ALMUERZO (comida principal):
Puré de Pollo con Verduras y Arroz
• 40g de pollo
• 2 cucharadas de arroz bien cocido
• Verduras variadas (zanahoria, calabacín)
• Cocinar todo 25 min
• Triturar parcialmente (dejar algunos trocitos pequeños)

CENA:
Yogur natural con fruta triturada
• 1 yogur natural entero
• 1/2 plátano triturado
• Mezclar bien

💡 Nuevos alimentos a introducir: pescado blanco, huevo, yogur, legumbres`
  },
  {
    id: 'day32',
    weekNumber: 5,
    dayNumber: 32,
    ageRange: '8-12m',
    title: 'Nuevo alimento: Merluza (pescado blanco)',
    description: 'Introducimos el pescado blanco, rico en proteínas y omega-3.',
    foodGroup: 'Proteínas',
    specificFood: 'Merluza',
    portionSize: '2-3 cucharadas (25-30g)',
    frequency: '2 comidas al día',
    mealsPerDay: 2,
    breastmilkNote: 'El pescado aporta ácidos grasos esenciales para el desarrollo cerebral.',
    tips: JSON.stringify([
      'Usa pescado blanco: merluza, bacalao, lenguado',
      'Revisa muy bien que no tenga espinas',
      'Cocina al vapor o hervido'
    ]),
    warnings: JSON.stringify([
      'Verifica DOS VECES que no haya espinas',
      'Empieza con poca cantidad'
    ]),
    recipe: `🐟 PURÉ DE MERLUZA CON VERDURAS

Ingredientes:
• 40g de filete de merluza (sin piel ni espinas)
• 1 zanahoria pequeña
• 1/2 patata pequeña
• 1 cucharada de aceite de oliva virgen extra

Preparación:
1. Revisa el pescado con cuidado para eliminar todas las espinas
2. Pela y corta las verduras
3. Cocina todo al vapor durante 15-20 minutos
4. El pescado se desmenuza fácilmente cuando está cocido
5. Tritura o desmenuza con tenedor (textura con grumos pequeños)
6. Añade el aceite de oliva al final

Tiempo: 25 minutos
💡 El pescado blanco es más digestivo que el azul

⚠️ IMPORTANTE: Revisa muy bien las espinas antes de servir`
  },
  {
    id: 'day33',
    weekNumber: 5,
    dayNumber: 33,
    ageRange: '8-12m',
    title: 'Pescado + patata',
    description: 'Continúa con pescado, mezclando con patata.',
    foodGroup: 'Proteínas',
    specificFood: 'Merluza + Patata',
    portionSize: '3-4 cucharadas (40-50g)',
    frequency: '2 comidas al día',
    mealsPerDay: 2,
    breastmilkNote: 'El pescado 2-3 veces por semana es ideal.',
    tips: JSON.stringify([
      'El pescado con patata es una combinación clásica',
      'Textura con algunos grumos pequeños',
      'Añade un poco de aceite de oliva'
    ]),
    warnings: JSON.stringify([
      'Si hay antecedentes de alergia, consulta al pediatra'
    ]),
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

💡 El aceite de oliva ayuda a absorber vitaminas liposolubles`
  },
  {
    id: 'day34',
    weekNumber: 5,
    dayNumber: 34,
    ageRange: '8-12m',
    title: 'Pescado aprobado',
    description: 'El pescado blanco queda aprobado.',
    foodGroup: 'Proteínas',
    specificFood: 'Pescado blanco',
    portionSize: '40-50g',
    frequency: '2 comidas al día',
    mealsPerDay: 2,
    breastmilkNote: 'Excelente. Ofrece pescado 2-3 veces por semana.',
    tips: JSON.stringify([
      'Varía entre merluza, bacalao, lenguado',
      'El pescado es fuente de yodo y selenio',
      'Combina con diferentes verduras'
    ]),
    warnings: JSON.stringify([
      'No ofrezcas pescado crudo (sushi) ni ahumado'
    ]),
    recipe: `✅ PESCADO BLANCO APROBADO

Recetas con pescado:
• Merluza con patata y zanahoria
• Bacalao con calabacín
• Pescado con verduras variadas

💡 Ofrece pescado en el almuerzo, no en la cena (más digestivo)`
  },
  {
    id: 'day35',
    weekNumber: 5,
    dayNumber: 35,
    ageRange: '8-12m',
    title: 'Nuevo alimento: Yema de huevo',
    description: 'Introducimos la yema de huevo cocida. Importante fuente de hierro y colina.',
    foodGroup: 'Proteínas',
    specificFood: 'Yema de huevo',
    portionSize: '1 yema cocida',
    frequency: '2 comidas al día',
    mealsPerDay: 2,
    breastmilkNote: 'El huevo es un alérgeno común. Introduce gradualmente.',
    tips: JSON.stringify([
      'Empieza solo con la yema (la clara es más alergénica)',
      'El huevo debe estar completamente cocido',
      'Mezcla con verduras o papilla'
    ]),
    warnings: JSON.stringify([
      'Observa si hay reacciones alérgicas en 24-48h',
      'Si hay antecedentes de alergia, consulta al pediatra primero'
    ]),
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
    id: 'day36',
    weekNumber: 5,
    dayNumber: 36,
    ageRange: '8-12m',
    title: 'Yema de huevo + arroz',
    description: 'Mezcla yema de huevo con arroz bien cocido.',
    foodGroup: 'Proteínas',
    specificFood: 'Yema de huevo + Arroz',
    portionSize: '1 yema + 2 cucharadas de arroz',
    frequency: '2 comidas al día',
    mealsPerDay: 2,
    breastmilkNote: 'El arroz aporta energía y la yema nutrientes esenciales.',
    tips: JSON.stringify([
      'El arroz debe estar muy bien cocido',
      'Puedes usar arroz integral para más fibra',
      'Textura con grumos pequeños'
    ]),
    warnings: JSON.stringify([
      'El arroz no debe quedar duro'
    ]),
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
    id: 'day37',
    weekNumber: 5,
    dayNumber: 37,
    ageRange: '8-12m',
    title: 'Yema aprobada',
    description: 'La yema de huevo queda aprobada.',
    foodGroup: 'Proteínas',
    specificFood: 'Yema de huevo',
    portionSize: '1 yema diaria',
    frequency: '2 comidas al día',
    mealsPerDay: 2,
    breastmilkNote: 'Puedes ofrecer huevo 3-4 veces por semana.',
    tips: JSON.stringify([
      'La yema es muy nutritiva',
      'Combina bien con arroz, verduras, pollo',
      'Diferentes preparaciones: hervido, en tortilla suave'
    ]),
    warnings: JSON.stringify([
      'Espera antes de introducir la clara completa'
    ]),
    recipe: `✅ YEMA DE HUEVO APROBADA

Formas de servir:
• Yema aplastada con verduras
• Arroz con yema
• Puré de pollo con yema
• Tortilla de yema (solo yema, cuajada suave)

💡 El huevo es uno de los alimentos más completos`
  },
  {
    id: 'day38',
    weekNumber: 6,
    dayNumber: 38,
    ageRange: '8-12m',
    title: 'Nuevo alimento: Yogur natural',
    description: 'Introducimos el yogur natural entero. Fuente de calcio y probióticos.',
    foodGroup: 'Lácteos',
    specificFood: 'Yogur natural entero',
    portionSize: '1/2 yogur (60g)',
    frequency: '2 comidas al día',
    mealsPerDay: 2,
    breastmilkNote: 'Los lácteos se introducen gradualmente. La leche de vaca como bebida después de 12 meses.',
    tips: JSON.stringify([
      'Usa yogur natural sin azúcar ni sabores',
      'Entero, no descremado',
      'Ideal para merienda o desayuno'
    ]),
    warnings: JSON.stringify([
      'No uses yogures azucarados o con sabores artificiales'
    ]),
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

💡 Ideal para desayuno o merienda`
  },
  {
    id: 'day39',
    weekNumber: 6,
    dayNumber: 39,
    ageRange: '8-12m',
    title: 'Yogur con diferentes frutas',
    description: 'Varía las frutas con el yogur.',
    foodGroup: 'Lácteos',
    specificFood: 'Yogur + Frutas variadas',
    portionSize: '1 yogur con fruta',
    frequency: '2 comidas al día',
    mealsPerDay: 2,
    breastmilkNote: 'El yogur puede sustituir una toma de leche ocasionalmente.',
    tips: JSON.stringify([
      'Prueba yogur con manzana, pera, plátano',
      'Puedes añadir un poco de avena',
      'Textura cremosa y agradable'
    ]),
    warnings: JSON.stringify([
      'Observa tolerancia a los lácteos'
    ]),
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
  },
  {
    id: 'day40',
    weekNumber: 6,
    dayNumber: 40,
    ageRange: '8-12m',
    title: 'Yogur aprobado',
    description: 'El yogur natural queda aprobado.',
    foodGroup: 'Lácteos',
    specificFood: 'Yogur natural',
    portionSize: '1 yogur al día máximo',
    frequency: '2 comidas al día',
    mealsPerDay: 2,
    breastmilkNote: 'Excelente. El yogur es una buena fuente de calcio.',
    tips: JSON.stringify([
      'Ofrece yogur 4-5 veces por semana',
      'Ideal para desayuno o merienda',
      'Puedes añadir frutas o cereales'
    ]),
    warnings: JSON.stringify([
      'No sustituye la leche materna o fórmula'
    ]),
    recipe: `✅ YOGUR NATURAL APROBADO

Variedades:
• Yogur con plátano
• Yogur con manzana y canela
• Yogur con pera
• Yogur con avena

💡 El yogur es más digestivo que la leche líquida`
  },
  {
    id: 'day41',
    weekNumber: 6,
    dayNumber: 41,
    ageRange: '8-12m',
    title: 'Nuevo alimento: Lentejas',
    description: 'Introducimos las lentejas, primera legumbre. Ricas en hierro vegetal.',
    foodGroup: 'Legumbres',
    specificFood: 'Lentejas',
    portionSize: '2-3 cucharadas (30-40g)',
    frequency: '2 comidas al día',
    mealsPerDay: 2,
    breastmilkNote: 'Las legumbres son una excelente fuente de proteína vegetal y fibra.',
    tips: JSON.stringify([
      'Usa lentejas peladas o pardinillas (más blandas)',
      'Deja en remojo 8-12 horas antes',
      'Cocina muy bien hasta que se deshagan'
    ]),
    warnings: JSON.stringify([
      'Pueden causar gases al principio',
      'Introduce poco a poco'
    ]),
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
💡 Para potenciar el hierro vegetal, combina con vitamina C (pimiento, tomate)

💡 Las lentejas son ricas en hierro, ideal para bebés`
  },
  {
    id: 'day42',
    weekNumber: 6,
    dayNumber: 42,
    ageRange: '8-12m',
    title: 'Lentejas con arroz',
    description: 'Combina lentejas con arroz para proteína completa.',
    foodGroup: 'Legumbres',
    specificFood: 'Lentejas + Arroz',
    portionSize: '3-4 cucharadas (50g)',
    frequency: '2 comidas al día',
    mealsPerDay: 2,
    breastmilkNote: 'Lentejas + arroz = proteína completa.',
    tips: JSON.stringify([
      'La combinación legumbre + cereal es muy nutritiva',
      'Textura con grumos pequeños',
      'Añade verduras para más vitaminas'
    ]),
    warnings: JSON.stringify([
      'Si causa muchos gases, reduce la cantidad'
    ]),
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

💡 Proteína completa vegetal`
  },
  {
    id: 'day43',
    weekNumber: 6,
    dayNumber: 43,
    ageRange: '8-12m',
    title: 'Lentejas aprobadas',
    description: 'Las lentejas quedan aprobadas.',
    foodGroup: 'Legumbres',
    specificFood: 'Lentejas',
    portionSize: '40-50g',
    frequency: '2 comidas al día',
    mealsPerDay: 2,
    breastmilkNote: 'Ofrece legumbres 2-3 veces por semana.',
    tips: JSON.stringify([
      'Las lentejas son muy versátiles',
      'Puedes hacer puré o dejar textura con trocitos',
      'Combina con arroz, patata, verduras'
    ]),
    warnings: JSON.stringify([
      'Aumenta gradualmente la cantidad'
    ]),
    recipe: `✅ LENTEJAS APROBADAS

Recetas:
• Puré de lentejas con verduras
• Lentejas con arroz
• Lentejas con patata y zanahoria

💡 Ofrece legumbres 2-3 veces por semana`
  },
  {
    id: 'day44',
    weekNumber: 6,
    dayNumber: 44,
    ageRange: '8-12m',
    title: 'Nuevo alimento: Aguacate',
    description: 'Introducimos el aguacate, rico en grasas saludables.',
    foodGroup: 'Frutas',
    specificFood: 'Aguacate',
    portionSize: '2-3 cucharadas (30g)',
    frequency: '2 comidas al día',
    mealsPerDay: 2,
    breastmilkNote: 'El aguacate aporta grasas monoinsaturadas, ideales para el desarrollo cerebral.',
    tips: JSON.stringify([
      'Elige aguacates maduros pero no pasados',
      'No necesita cocción',
      'Tritura o aplasta con tenedor'
    ]),
    warnings: JSON.stringify([
      'El aguacate se oxida rápido (se pone oscuro)'
    ]),
    recipe: `🥑 PURÉ DE AGUACATE

Ingredientes:
• 1/2 aguacate maduro
• Unas gotas de limón (opcional, para evitar oxidación)

Preparación:
1. Corta el aguacate por la mitad
2. Retira el hueso
3. Extrae la pulpa con una cuchara
4. Aplasta con un tenedor hasta obtener puré suave
5. Añade unas gotas de limón para evitar que se oscurezca

Tiempo: 3 minutos
💡 El aguacate es rico en grasas saludables y vitamina E

💡 No necesita cocción - listo para comer`
  },
  {
    id: 'day45',
    weekNumber: 6,
    dayNumber: 45,
    ageRange: '8-12m',
    title: 'Aguacate con plátano',
    description: 'Mezcla aguacate con plátano para una crema suave.',
    foodGroup: 'Frutas',
    specificFood: 'Aguacate + Plátano',
    portionSize: '3-4 cucharadas (50g)',
    frequency: '2 comidas al día',
    mealsPerDay: 2,
    breastmilkNote: 'Esta combinación es muy nutritiva y cremosa.',
    tips: JSON.stringify([
      'El aguacate con plátano es muy suave',
      'Puedes añadir un poco de yogur',
      'Ideal para desayuno o merienda'
    ]),
    warnings: JSON.stringify([
      'Sirve inmediatamente (se oxida)'
    ]),
    recipe: `🥑 AGUACATE CON PLÁTANO

Ingredientes:
• 1/4 de aguacate maduro
• 1/2 plátano maduro

Preparación:
1. Aplasta el aguacate con un tenedor
2. Aplasta el plátano
3. Mezcla ambos hasta obtener crema suave
4. Sirve inmediatamente

💡 Combinación cremosa y muy nutritiva`
  },
  {
    id: 'day46',
    weekNumber: 6,
    dayNumber: 46,
    ageRange: '8-12m',
    title: 'Aguacate aprobado',
    description: 'El aguacate queda aprobado.',
    foodGroup: 'Frutas',
    specificFood: 'Aguacate',
    portionSize: '30-50g',
    frequency: '2 comidas al día',
    mealsPerDay: 2,
    breastmilkNote: 'El aguacate es excelente por sus grasas saludables.',
    tips: JSON.stringify([
      'Ofrece aguacate 3-4 veces por semana',
      'Combina con frutas o en salado',
      'Puedes añadir a purés de verduras'
    ]),
    warnings: JSON.stringify([
      'Guarda en la nevera si no consumes todo'
    ]),
    recipe: `✅ AGUACATE APROBADO

Formas de servir:
• Puré de aguacate solo
• Aguacate con plátano
• Aguacate con yogur
• Aguacate en trocitos (BLW)
• Puré de verduras con aguacate

💡 El aguacate aporta grasas saludables importantes para el cerebro`
  },
  {
    id: 'day47',
    weekNumber: 7,
    dayNumber: 47,
    ageRange: '8-12m',
    title: 'Empezando 3 comidas al día',
    description: 'El bebé está listo para 3 comidas al día: desayuno, almuerzo y cena.',
    foodGroup: 'Varios',
    specificFood: 'Menú de 3 comidas',
    portionSize: '250-350g diarios en 3 comidas',
    frequency: '3 comidas al día',
    mealsPerDay: 3,
    breastmilkNote: 'Con 3 comidas, ofrece el pecho 2-3 veces al día. Los sólidos son ahora la base de la alimentación.',
    tips: JSON.stringify([
      'Desayuno: cereales o yogur con fruta',
      'Almuerzo: proteína + verduras + carbohidratos',
      'Cena: verduras + cereales o fruta'
    ]),
    warnings: JSON.stringify([
      'Adapta las cantidades al apetito del bebé'
    ]),
    recipe: `🍽️ MENÚ PARA 3 COMIDAS AL DÍA

DESAYUNO (8:00):
Papilla de avena con plátano
• 2 cucharadas de avena
• 1/2 plátano triturado
• Leche materna o agua
• Preparación: Cocinar avena 5 min, añadir plátano

ALMUERZO (13:00):
Puré de pollo con verduras y arroz
• 40g de pollo
• Verduras variadas
• 2 cucharadas de arroz
• 1 cucharadita de aceite

CENA (19:00):
Compota de pera y manzana
• 1/2 pera + 1/2 manzana
• Cocinar y triturar

💡 Horarios flexibles según la rutina del bebé`
  },
  {
    id: 'day48',
    weekNumber: 7,
    dayNumber: 48,
    ageRange: '8-12m',
    title: '3 comidas: Día 2',
    description: 'Continúa con el esquema de 3 comidas.',
    foodGroup: 'Varios',
    specificFood: 'Menú variado',
    portionSize: '300-350g diarios',
    frequency: '3 comidas al día',
    mealsPerDay: 3,
    breastmilkNote: 'Observa el apetito y ajusta cantidades.',
    tips: JSON.stringify([
      'Varía los menús cada día',
      'Ofrece agua en cada comida',
      'El bebé decide cuánto comer'
    ]),
    warnings: JSON.stringify([
      'No fuerces a terminar todo'
    ]),
    recipe: `🍽️ MENÚ DEL DÍA

DESAYUNO:
Yogur natural con manzana y canela
• 1 yogur natural entero
• 1/2 manzana cocida y triturada
• Pizca de canela

ALMUERZO:
Puré de ternera con lentejas
• 30g de ternera
• 2 cucharadas de lentejas cocidas
• Verduras (zanahoria, patata)
• Aceite de oliva

CENA:
Puré de calabacín y patata
• 1 calabacín pequeño
• 1/2 patata
• Aceite de oliva

💡 La cena debe ser más ligera`
  },
  {
    id: 'day49',
    weekNumber: 7,
    dayNumber: 49,
    ageRange: '8-12m',
    title: 'Nuevo alimento: Pan',
    description: 'Introducimos el pan (sin sal). El bebé puede mordisquear trozos.',
    foodGroup: 'Cereales',
    specificFood: 'Pan',
    portionSize: '1-2 rebanadas pequeñas o corteza de pan',
    frequency: '3 comidas al día',
    mealsPerDay: 3,
    breastmilkNote: 'El pan aporta carbohidratos y el bebé practica masticar.',
    tips: JSON.stringify([
      'Usa pan sin sal y sin semillas',
      'Ofrece la corteza o trozos pequeños',
      'Siempre supervisando mientras come'
    ]),
    warnings: JSON.stringify([
      'Vigila para evitar atragantamiento',
      'No dejes al bebé solo con pan'
    ]),
    recipe: `🍞 PAN PARA BEBÉ

Tipos recomendados:
• Pan de molde sin corteza (sin sal)
• Pan casero sin sal
• Corteza de pan (para mordisquear)

Cómo servir:
1. Corta trozos pequeños (tamaño de un dedo)
2. O ofrece la corteza para que el bebé la chupe y muerda
3. El pan se deshace en la boca con la saliva

💡 El pan ayuda a desarrollar la motricidad oral

⚠️ SUPERVISIÓN: Nunca dejes al bebé solo mientras come`
  },
  {
    id: 'day50',
    weekNumber: 7,
    dayNumber: 50,
    ageRange: '8-12m',
    title: 'Pan con aguacate',
    description: 'Ofrece pan con puré de aguacate.',
    foodGroup: 'Cereales',
    specificFood: 'Pan + Aguacate',
    portionSize: '1 rebanada de pan con aguacate',
    frequency: '3 comidas al día',
    mealsPerDay: 3,
    breastmilkNote: 'El pan con aguacate es un desayuno muy completo.',
    tips: JSON.stringify([
      'Unta aguacate sobre el pan',
      'Puedes añadir huevo duro triturado',
      'Textura suave y nutritiva'
    ]),
    warnings: JSON.stringify([
      'Trozos pequeños para evitar atragantamiento'
    ]),
    recipe: `🍞 TOSTADA DE AGUACATE

Ingredientes:
• 1 rebanada de pan sin sal
• 1/4 de aguacate maduro

Preparación:
1. Tuesta ligeramente el pan
2. Aplasta el aguacate con un tenedor
3. Unta el aguacate sobre el pan
4. Corta en tiras pequeñas para el bebé

💡 Desayuno nutritivo y fácil`
  },
  {
    id: 'day51',
    weekNumber: 7,
    dayNumber: 51,
    ageRange: '8-12m',
    title: 'Nuevo alimento: Brócoli',
    description: 'Introducimos el brócoli, rico en vitaminas y fibra.',
    foodGroup: 'Verduras',
    specificFood: 'Brócoli',
    portionSize: '2-3 floretes pequeños (30g)',
    frequency: '3 comidas al día',
    mealsPerDay: 3,
    breastmilkNote: 'El brócoli aporta vitamina C, ácido fólico y fibra.',
    tips: JSON.stringify([
      'Cocina al vapor hasta que esté muy blando',
      'Puedes ofrecer los floretes enteros para agarrar',
      'Combina con otras verduras'
    ]),
    warnings: JSON.stringify([
      'Puede causar gases - introduce poco a poco'
    ]),
    recipe: `🥦 BRÓCOLI AL VAPOR

Ingredientes:
• 2-3 floretes de brócoli
• Agua para vapor

Preparación:
1. Lava el brócoli
2. Corta los floretes en tamaño pequeño
3. Cocina al vapor 8-10 minutos hasta que esté muy blando
4. Debe deshacerse fácilmente al aplastarlo

Tiempo: 15 minutos

Para puré:
• Tritura el brócoli cocido con patata o zanahoria

Para BLW (baby-led weaning):
• Ofrece floretes enteros bien cocidos para que el bebé los agarre

💡 Rico en vitamina C que ayuda a absorber el hierro`
  },
  {
    id: 'day52',
    weekNumber: 7,
    dayNumber: 52,
    ageRange: '8-12m',
    title: 'Brócoli con patata',
    description: 'Mezcla brócoli con patata.',
    foodGroup: 'Verduras',
    specificFood: 'Brócoli + Patata',
    portionSize: '4-5 cucharadas (60g)',
    frequency: '3 comidas al día',
    mealsPerDay: 3,
    breastmilkNote: 'El brócoli combina bien con patata para suavizar el sabor.',
    tips: JSON.stringify([
      'La patata suaviza el sabor fuerte del brócoli',
      'Textura con trocitos pequeños',
      'Añade aceite de oliva'
    ]),
    warnings: JSON.stringify([
      'Si causa gases, reduce la cantidad'
    ]),
    recipe: `🥦 PURÉ DE BRÓCOLI Y PATATA

Ingredientes:
• 2 floretes de brócoli
• 1/2 patata pequeña
• 1 cucharadita de aceite de oliva

Preparación:
1. Pela y corta la patata
2. Lava el brócoli
3. Cocina todo al vapor 15 minutos
4. Tritura parcialmente (deja algunos trocitos)
5. Añade aceite de oliva

💡 Combinación suave y nutritiva`
  },
  {
    id: 'day53',
    weekNumber: 7,
    dayNumber: 53,
    ageRange: '8-12m',
    title: 'Brócoli aprobado',
    description: 'El brócoli queda aprobado.',
    foodGroup: 'Verduras',
    specificFood: 'Brócoli',
    portionSize: '2-3 floretes',
    frequency: '3 comidas al día',
    mealsPerDay: 3,
    breastmilkNote: 'Excelente. Ofrece brócoli 2-3 veces por semana.',
    tips: JSON.stringify([
      'Varía las formas de prepararlo',
      'Puré o en trozos para agarrar',
      'Combina con diferentes alimentos'
    ]),
    warnings: JSON.stringify([
      'No ofrezcas brócoli crudo'
    ]),
    recipe: `✅ BRÓCOLI APROBADO

Recetas:
• Puré de brócoli y patata
• Brócoli con pollo y arroz
• Floretes de brócoli al vapor (BLW)
• Brócoli con queso fresco

💡 Ofrece verduras verdes regularmente`
  },
  {
    id: 'day54',
    weekNumber: 8,
    dayNumber: 54,
    ageRange: '8-12m',
    title: 'Nuevo alimento: Queso fresco',
    description: 'Introducimos el queso fresco (pasteurizado). Fuente de calcio.',
    foodGroup: 'Lácteos',
    specificFood: 'Queso fresco',
    portionSize: '20-30g',
    frequency: '3 comidas al día',
    mealsPerDay: 3,
    breastmilkNote: 'El queso aporta calcio y proteínas. No sustituye la leche materna.',
    tips: JSON.stringify([
      'Usa queso fresco pasteurizado (no crudo)',
      'Cortado en trocitos pequeños o triturado',
      'Combina con verduras o frutas'
    ]),
    warnings: JSON.stringify([
      'Evita quesos curados o con sal'
    ]),
    recipe: `🧀 QUESO FRESCO CON VERDURAS

Ingredientes:
• 30g de queso fresco
• 4 cucharadas de puré de verduras

Preparación:
1. Corta el queso en cubitos pequeños
2. Mézclalo con el puré de verduras caliente
3. El queso se ablandará con el calor

Otra opción: Triturar el queso con las verduras

💡 El queso fresco es suave y fácil de digerir`
  },
  {
    id: 'day55',
    weekNumber: 8,
    dayNumber: 55,
    ageRange: '8-12m',
    title: 'Queso fresco con fruta',
    description: 'Ofrece queso fresco con fruta.',
    foodGroup: 'Lácteos',
    specificFood: 'Queso fresco + Fruta',
    portionSize: '30g de queso con fruta',
    frequency: '3 comidas al día',
    mealsPerDay: 3,
    breastmilkNote: 'El queso fresco con fruta es ideal para merienda.',
    tips: JSON.stringify([
      'Combina con pera, manzana o plátano',
      'Puedes hacer una crema',
      'Textura suave y agradable'
    ]),
    warnings: JSON.stringify([
      'Verifica que sea pasteurizado'
    ]),
    recipe: `🧀 QUESO FRESCO CON PERA

Ingredientes:
• 30g de queso fresco
• 1/2 pera madura

Preparación:
1. Tritura el queso fresco
2. Tritura la pera (cruda o cocida)
3. Mezcla ambos hasta obtener crema suave

💡 Merienda nutritiva y fácil`
  },
  {
    id: 'day56',
    weekNumber: 8,
    dayNumber: 56,
    ageRange: '8-12m',
    title: 'Queso fresco aprobado',
    description: 'El queso fresco queda aprobado.',
    foodGroup: 'Lácteos',
    specificFood: 'Queso fresco',
    portionSize: '20-30g al día',
    frequency: '3 comidas al día',
    mealsPerDay: 3,
    breastmilkNote: 'Ofrece queso fresco 3-4 veces por semana.',
    tips: JSON.stringify([
      'Varía entre yogur y queso fresco',
      'Añade a purés para más proteína',
      'Ideal para snacks'
    ]),
    warnings: JSON.stringify([
      'Evita quesos con mucha sal'
    ]),
    recipe: `✅ QUESO FRESCO APROBADO

Formas de servir:
• En cubitos con fruta
• Triturado con verduras
• Sobre pan con aguacate
• Mezclado con puré

💡 Fuente de calcio para huesos sanos`
  },
  {
    id: 'day57',
    weekNumber: 8,
    dayNumber: 57,
    ageRange: '8-12m',
    title: 'Nuevo alimento: Espinacas',
    description: 'Introducimos las espinacas, ricas en hierro y vitaminas.',
    foodGroup: 'Verduras',
    specificFood: 'Espinacas',
    portionSize: '2-3 cucharadas (20g)',
    frequency: '3 comidas al día',
    mealsPerDay: 3,
    breastmilkNote: 'Las espinacas son ricas en hierro, importante para bebés.',
    tips: JSON.stringify([
      'Usa espinacas frescas o congeladas',
      'Cocina siempre las espinacas (no crudas)',
      'Combina con patata o arroz'
    ]),
    warnings: JSON.stringify([
      'No ofrezcas espinacas más de 2 veces por semana (oxalatos)'
    ]),
    recipe: `🥬 PURÉ DE ESPINACAS Y PATATA

Ingredientes:
• 20g de espinacas frescas
• 1/2 patata pequeña
• 1 cucharadita de aceite de oliva

Preparación:
1. Lava bien las espinacas
2. Pela y corta la patata
3. Cocina la patata al vapor 15 min
4. Añade las espinacas en los últimos 5 min
5. Tritura todo junto
6. Añade aceite de oliva

Tiempo: 20 minutos
💡 Rica en hierro y ácido fólico`
  },
  {
    id: 'day58',
    weekNumber: 8,
    dayNumber: 58,
    ageRange: '8-12m',
    title: 'Espinacas con pollo',
    description: 'Combina espinacas con pollo para potenciar el hierro.',
    foodGroup: 'Verduras',
    specificFood: 'Espinacas + Pollo',
    portionSize: '50-60g',
    frequency: '3 comidas al día',
    mealsPerDay: 3,
    breastmilkNote: 'La combinación de hierro vegetal + animal mejora la absorción.',
    tips: JSON.stringify([
      'Pollo + espinacas = hierro muy absorbible',
      'Añade patata para más energía',
      'Textura con trocitos'
    ]),
    warnings: JSON.stringify([
      'Limita espinacas a 1-2 veces por semana'
    ]),
    recipe: `🥬 POLLO CON ESPINACAS

Ingredientes:
• 40g de pechuga de pollo
• 15g de espinacas
• 1/2 patata pequeña
• Aceite de oliva

Preparación:
1. Cocina el pollo al vapor 15 min
2. Cocina la patata 15 min
3. Añade espinacas los últimos 5 min
4. Tritura parcialmente
5. Añade aceite

💡 Combinación muy nutritiva`
  },
  {
    id: 'day59',
    weekNumber: 8,
    dayNumber: 59,
    ageRange: '8-12m',
    title: 'Espinacas aprobadas',
    description: 'Las espinacas quedan aprobadas.',
    foodGroup: 'Verduras',
    specificFood: 'Espinacas',
    portionSize: '20-30g',
    frequency: '3 comidas al día',
    mealsPerDay: 3,
    breastmilkNote: 'Ofrece espinacas máximo 1-2 veces por semana.',
    tips: JSON.stringify([
      'Las espinacas son muy nutritivas',
      'No excedas la frecuencia por los oxalatos',
      'Combina con vitamina C para mejor absorción'
    ]),
    warnings: JSON.stringify([
      'No reutilices el agua de cocción de espinacas'
    ]),
    recipe: `✅ ESPINACAS APROBADAS

Recetas:
• Espinacas con patata
• Espinacas con pollo
• Espinacas con arroz y huevo

⚠️ Limita a 1-2 veces por semana`
  },
  {
    id: 'day60',
    weekNumber: 8,
    dayNumber: 60,
    ageRange: '8-12m',
    title: '¡Fase 8-12 meses completada!',
    description: 'Has completado la fase intermedia. El bebé come 3 veces al día con gran variedad.',
    foodGroup: 'Varios',
    specificFood: 'Todos los alimentos aprobados',
    portionSize: '350-450g diarios en 3 comidas',
    frequency: '3 comidas al día + snacks',
    mealsPerDay: 3,
    breastmilkNote: '¡Excelente progreso! El bebé tiene una dieta muy variada. Continúa con lactancia materna.',
    tips: JSON.stringify([
      'Alimentos aprobados: todas las verduras mencionadas, frutas, pollo, ternera, pescado, huevo (yema), yogur, queso fresco, lentejas, pan',
      'Prepárate para la fase 12-24 meses',
      'El bebé puede empezar a usar cuchara'
    ]),
    warnings: JSON.stringify([
      'Continúa supervisando las comidas'
    ]),
    recipe: `🎉 RESUMEN DE ALIMENTOS APROBADOS (8-12 MESES)

VERDURAS:
✅ Calabacín, Calabaza, Zanahoria, Patata
✅ Brócoli, Espinacas

FRUTAS:
✅ Pera, Manzana, Plátano, Aguacate

PROTEÍNAS:
✅ Pollo, Ternera, Pescado blanco
✅ Yema de huevo

LÁCTEOS:
✅ Yogur natural, Queso fresco

LEGUMBRES:
✅ Lentejas

CEREALES:
✅ Arroz, Pan, Avena

📋 MENÚ EJEMPLO:
Desayuno: Yogur con fruta y avena
Almuerzo: Pollo con verduras y arroz
Cena: Puré de verduras con queso fresco

👶 El bebé ahora come 3 veces al día
🍼 Continúa con 2-3 tomas de pecho`
  },

  // ==================== RANGO 12-24 MESES ====================
  // Ahora: 3 comidas + 1-2 snacks
  {
    id: 'day61',
    weekNumber: 9,
    dayNumber: 61,
    ageRange: '12-24m',
    title: '¡Nueva fase! 12-24 meses',
    description: 'El bebé entra en la etapa de transición a comida familiar. Come casi de todo.',
    foodGroup: 'Varios',
    specificFood: 'Comida familiar adaptada',
    portionSize: '400-500g diarios en 3 comidas + snacks',
    frequency: '3 comidas + 1-2 snacks',
    mealsPerDay: 3,
    breastmilkNote: 'La leche materna puede continuar, pero los sólidos son la base de la alimentación. Puedes introducir leche de vaca entera.',
    tips: JSON.stringify([
      'El bebé puede comer casi lo mismo que la familia',
      'Texturas variadas, incluyendo trozos',
      'Puede usar cuchara con ayuda'
    ]),
    warnings: JSON.stringify([
      'Evita alimentos de riesgo de atragantamiento: nueces enteras, uvas enteras, etc.'
    ]),
    recipe: `🍽️ ALIMENTACIÓN 12-24 MESES

NUEVOS ALIMENTOS A INTRODUCIR:
• Leche de vaca entera (como bebida)
• Clara de huevo
• Miel (después de 12 meses)
• Frutos secos triturados
• Fresas, cítricos
• Legumbres variadas

MENÚ EJEMPLO:

DESAYUNO (8:00):
Leche con cereales o yogur con fruta

ALMUERZO (13:00):
Comida familiar adaptada (sin sal añadida)
Ej: Arroz con pollo y verduras

SNACK (16:00):
Fruta troceada o queso fresco

CENA (19:30):
Pasta con verduras o puré ligero

💡 El bebé puede sentarse a la mesa con la familia`
  },
  {
    id: 'day62',
    weekNumber: 9,
    dayNumber: 62,
    ageRange: '12-24m',
    title: 'Introducción: Clara de huevo',
    description: 'Ahora puedes introducir la clara de huevo completa.',
    foodGroup: 'Proteínas',
    specificFood: 'Huevo completo',
    portionSize: '1 huevo pequeño o 1/2 grande',
    frequency: '3 comidas + snacks',
    mealsPerDay: 3,
    breastmilkNote: 'El huevo completo es uno de los alimentos más nutritivos.',
    tips: JSON.stringify([
      'Si no hubo reacción a la yema, la clara suele tolerarse bien',
      'Huevo bien cocido siempre',
      'Preparaciones variadas: hervido, tortilla, revuelto'
    ]),
    warnings: JSON.stringify([
      'Si hay antecedentes de alergia, introduce con supervisión médica'
    ]),
    recipe: `🥚 TORTILLA SUAVE PARA BEBÉ

Ingredientes:
• 1 huevo
• 1 cucharada de leche o agua
• 1 cucharadita de aceite

Preparación:
1. Bate el huevo con la leche
2. Calienta el aceite en sartén antiadherente
3. Vierte el huevo y cocina a fuego bajo
4. Remueve suavemente hasta que cuaje pero quede cremoso
5. Corta en trocitos pequeños

Tiempo: 5 minutos
💡 La tortilla suave es fácil de comer y muy nutritiva`
  },
  {
    id: 'day63',
    weekNumber: 9,
    dayNumber: 63,
    ageRange: '12-24m',
    title: 'Introducción: Leche de vaca',
    description: 'Puedes introducir leche de vaca entera como bebida.',
    foodGroup: 'Lácteos',
    specificFood: 'Leche de vaca entera',
    portionSize: '200-300ml diarios máximo',
    frequency: '3 comidas + snacks',
    mealsPerDay: 3,
    breastmilkNote: 'Si continúas con lactancia materna, la leche de vaca no es necesaria. Puedes combinar ambas.',
    tips: JSON.stringify([
      'Usa leche entera (no desnatada)',
      'No más de 300ml al día',
      'Puedes usarla para preparar papillas'
    ]),
    warnings: JSON.stringify([
      'La leche no debe sustituir comidas sólidas'
    ]),
    recipe: `🥛 LECHE DE VACA EN LA DIETA

Cómo introducirla:
• Empieza con pequeñas cantidades (50-100ml)
• Ofrece en taza o vaso, no biberón
• Úsala para preparar cereales

Ejemplos:
• Leche con cereales de desayuno
• Batido de leche con plátano
• Leche con galleta

💡 Máximo 300ml diarios para no interferir con otras comidas`
  },
  {
    id: 'day64',
    weekNumber: 9,
    dayNumber: 64,
    ageRange: '12-24m',
    title: 'Introducción: Miel',
    description: 'A partir de los 12 meses, la miel es segura.',
    foodGroup: 'Otros',
    specificFood: 'Miel',
    portionSize: '1-2 cucharaditas',
    frequency: '3 comidas + snacks',
    mealsPerDay: 3,
    breastmilkNote: 'La miel puede añadirse a yogur, tostadas o infusiones.',
    tips: JSON.stringify([
      'Solo después de 12 meses (riesgo de botulismo antes)',
      'Endulza de forma natural',
      'No abuses de los dulces'
    ]),
    warnings: JSON.stringify([
      'NUNCA dar miel antes de 12 meses'
    ]),
    recipe: `🍯 MIEL EN LA DIETA

Formas de usar:
• 1 cucharadita en yogur natural
• Sobre tostada con queso fresco
• En papilla de avena
• En infusiones tibias

⚠️ SOLO después de 12 meses

💡 La miel tiene propiedades antimicrobianas`
  },
  {
    id: 'day65',
    weekNumber: 9,
    dayNumber: 65,
    ageRange: '12-24m',
    title: 'Introducción: Fresas',
    description: 'Las fresas pueden introducirse ahora si no hubo alergias previas.',
    foodGroup: 'Frutas',
    specificFood: 'Fresas',
    portionSize: '3-4 fresas pequeñas',
    frequency: '3 comidas + snacks',
    mealsPerDay: 3,
    breastmilkNote: 'Las fresas son ricas en vitamina C y antioxidantes.',
    tips: JSON.stringify([
      'Lava muy bien las fresas',
      'Corta en trozos pequeños',
      'Combina con otras frutas'
    ]),
    warnings: JSON.stringify([
      'Pueden ser alergénicas - observa reacciones'
    ]),
    recipe: `🍓 FRESAS PARA BEBÉ

Ingredientes:
• 3-4 fresas frescas
• Lavadas y troceadas

Preparación:
1. Lava las fresas bajo el grifo
2. Retira el tallo verde
3. Corta en trozos pequeños o aplasta
4. Sirve solas o con yogur

💡 Rica en vitamina C

Para bebés más pequeños: Triturar las fresas`
  },
  {
    id: 'day66',
    weekNumber: 10,
    dayNumber: 66,
    ageRange: '12-24m',
    title: 'Introducción: Pasta',
    description: 'La pasta es un alimento muy aceptado por los niños.',
    foodGroup: 'Cereales',
    specificFood: 'Pasta',
    portionSize: '40-60g de pasta seca',
    frequency: '3 comidas + snacks',
    mealsPerDay: 3,
    breastmilkNote: 'La pasta aporta energía y es muy versátil.',
    tips: JSON.stringify([
      'Usa pasta pequeña: letras, estrellitas, macarrones',
      'Cocina muy bien hasta que esté blanda',
      'Combina con verduras, carne o queso'
    ]),
    warnings: JSON.stringify([
      'Corta pastas largas en trozos pequeños'
    ]),
    recipe: `🍝 PASTA CON VERDURAS

Ingredientes:
• 40g de pasta pequeña (macarrones, letras)
• 1 zanahoria pequeña
• 2 floretes de brócoli
• 1 cucharada de queso rallado
• Aceite de oliva

Preparación:
1. Cocina la pasta en agua sin sal 10-12 min
2. Cocina las verduras al vapor 10 min
3. Escurre la pasta y mezcla con verduras
4. Añade queso y aceite

Tiempo: 20 minutos
💡 La pasta es un favorito de los niños`
  },
  {
    id: 'day67',
    weekNumber: 10,
    dayNumber: 67,
    ageRange: '12-24m',
    title: 'Introducción: Legumbres variadas',
    description: 'Puedes ampliar a garbanzos y judiones.',
    foodGroup: 'Legumbres',
    specificFood: 'Garbanzos',
    portionSize: '30-40g',
    frequency: '3 comidas + snacks',
    mealsPerDay: 3,
    breastmilkNote: 'Las legumbres son económicas y muy nutritivas.',
    tips: JSON.stringify([
      'Remojo previo de 12 horas',
      'Cocinar hasta que estén muy blandas',
      'Triturar o ofrecer enteras si son pequeñas'
    ]),
    warnings: JSON.stringify([
      'Pueden causar gases - introducir poco a poco'
    ]),
    recipe: `🍲 GARBANZOS CON VERDURAS

Ingredientes:
• 40g de garbanzos (remojados)
• 1/2 zanahoria
• 1 trozo de calabaza
• Aceite de oliva

Preparación:
1. Escurre los garbanzos del remojo
2. Cocina con las verduras 45-60 min
3. Deben estar muy blandos
4. Tritura parcialmente o deja enteros si son pequeños

💡 Los garbanzos son ricos en proteína vegetal`
  },
  {
    id: 'day68',
    weekNumber: 10,
    dayNumber: 68,
    ageRange: '12-24m',
    title: 'Comida familiar adaptada',
    description: 'El bebé puede comer casi lo mismo que la familia.',
    foodGroup: 'Varios',
    specificFood: 'Comida familiar',
    portionSize: 'Porción adaptada',
    frequency: '3 comidas + snacks',
    mealsPerDay: 3,
    breastmilkNote: 'Es el momento de que el bebé se integre a las comidas familiares.',
    tips: JSON.stringify([
      'Cocina sin sal o añade poca sal al final',
      'Trocea la comida del bebé',
      'Evita fritos y ultraprocesados'
    ]),
    warnings: JSON.stringify([
      'Vigila siempre mientras come'
    ]),
    recipe: `🍽️ ADAPTACIÓN A COMIDA FAMILIAR

Principios:
• Cocina para toda la familia sin sal
• Añade sal al final para los adultos
• Trocea la porción del bebé

Ejemplo de menú familiar:

ALMUERZO:
Arroz con pollo y verduras
• Para adultos: con especias y sal
• Para bebé: sin sal, troceado

CENA:
Pasta con tomate y queso
• Para adultos: con hierbas
• Para bebé: queso en trocitos

💡 Cocinar así ahorra tiempo y acostumbra al bebé a sabores naturales`
  },
  {
    id: 'day69',
    weekNumber: 10,
    dayNumber: 69,
    ageRange: '12-24m',
    title: 'Snacks saludables',
    description: 'Los snacks entre comidas deben ser nutritivos.',
    foodGroup: 'Varios',
    specificFood: 'Snacks saludables',
    portionSize: 'Pequeñas porciones',
    frequency: '3 comidas + 1-2 snacks',
    mealsPerDay: 3,
    breastmilkNote: 'Los snacks no deben sustituir comidas principales.',
    tips: JSON.stringify([
      'Fruta troceada',
      'Queso en cubitos',
      'Yogur natural',
      'Panecillos caseros'
    ]),
    warnings: JSON.stringify([
      'Evita snacks procesados, galletas comerciales, dulces'
    ]),
    recipe: `🍎 IDEAS DE SNACKS SALUDABLES

OPCIONES:
• Fruta troceada (plátano, pera, manzana)
• Queso fresco en cubitos
• Palitos de zanahoria cocida
• Trocitos de pan integral
• Yogur natural
• Tortitas de plátano (plátano aplastado + huevo)

EVITAR:
• Galletas comerciales
• Snacks procesados
• Zumos envasados
• Dulces

💡 El agua es la mejor bebida`
  },
  {
    id: 'day70',
    weekNumber: 10,
    dayNumber: 70,
    ageRange: '12-24m',
    title: 'Autonomía en la comida',
    description: 'El bebé puede empezar a comer solo con cuchara.',
    foodGroup: 'Varios',
    specificFood: 'Práctica de autonomía',
    portionSize: 'Porciones manejables',
    frequency: '3 comidas + snacks',
    mealsPerDay: 3,
    breastmilkNote: 'Fomenta la autonomía del bebé en las comidas.',
    tips: JSON.stringify([
      'Ofrece cuchara y tenedor infantiles',
      'Acepta que se ensucie',
      'No lo fuerces, deja que explore'
    ]),
    warnings: JSON.stringify([
      'Supervisa siempre aunque coma solo'
    ]),
    recipe: `👶 FOMENTANDO LA AUTONOMÍA

Consejos:
• Usa platos y cubiertos infantiles
• Ofrece porciones pequeñas
• Deja que el bebé toque la comida
• Acepta el desorden
• Come con él para que imite

Alimentos fáciles para comer solo:
• Trocitos de fruta
• Pasta pequeña
• Trocitos de pan
• Verduras cocidas en trozos
• Queso en cubitos

💡 La autonomía se desarrolla con paciencia`
  },
  {
    id: 'day71',
    weekNumber: 10,
    dayNumber: 71,
    ageRange: '12-24m',
    title: 'Preparación para los 2 años',
    description: 'El bebé está casi listo para una dieta completamente variada.',
    foodGroup: 'Varios',
    specificFood: 'Dieta completa',
    portionSize: '3 comidas + 2 snacks',
    frequency: '3 comidas + 2 snacks',
    mealsPerDay: 3,
    breastmilkNote: 'La lactancia materna puede continuar tanto como madre y bebé deseen.',
    tips: JSON.stringify([
      'Dieta variada con todos los grupos de alimentos',
      'Horarios regulares',
      'Ambiente tranquilo en las comidas'
    ]),
    warnings: JSON.stringify([
      'Evita distraer al bebé con pantallas durante las comidas'
    ]),
    recipe: `📋 MENÚ COMPLETO PARA 1-2 AÑOS

DESAYUNO:
• Leche o yogur
• Cereales o pan
• Fruta

ALMUERZO:
• Proteína (carne, pescado, huevo, legumbres)
• Verduras
• Carbohidratos (arroz, pasta, patata)
• Fruta de postre

SNACK:
• Fruta o yogur

CENA:
• Verduras
• Carbohidratos
• Proteína ligera

💡 Bebe agua en las comidas`
  },
  {
    id: 'day72',
    weekNumber: 10,
    dayNumber: 72,
    ageRange: '12-24m',
    title: '¡Plan completado! Resumen final',
    description: 'Has completado el plan de alimentación complementaria. ¡Felicidades!',
    foodGroup: 'Varios',
    specificFood: 'Todos los grupos de alimentos',
    portionSize: 'Dieta completa y variada',
    frequency: '3 comidas + 1-2 snacks',
    mealsPerDay: 3,
    breastmilkNote: '¡Felicidades! El bebé tiene una alimentación completa y variada. Continúa con lactancia si lo deseas.',
    tips: JSON.stringify([
      'El bebé puede comer casi todo',
      'Fomenta la autonomía',
      'Mantén hábitos saludables'
    ]),
    warnings: JSON.stringify([
      'Continúa supervisando las comidas'
    ]),
    recipe: `🎉 ¡FELICIDADES! PLAN COMPLETADO

ALIMENTOS APROBADOS (TODAS LAS FASES):

✅ VERDURAS:
Calabacín, Calabaza, Zanahoria, Patata, Brócoli, Espinacas, Judías verdes, Tomate, Pimiento

✅ FRUTAS:
Pera, Manzana, Plátano, Aguacate, Fresas, Naranja, Mandarina, Melocotón

✅ PROTEÍNAS:
Pollo, Ternera, Pavo, Pescado blanco, Huevo completo

✅ LÁCTEOS:
Yogur natural, Queso fresco, Leche de vaca

✅ LEGUMBRES:
Lentejas, Garbanzos

✅ CEREALES:
Arroz, Avena, Pan, Pasta, Cereales infantiles

✅ OTROS:
Miel (después de 12 meses), Aceite de oliva

💡 CONSEJOS FINALES:
• Dieta variada y equilibrada
• Agua como bebida principal
• Evita ultraprocesados
• Comparte comidas en familia
• Fomenta la autonomía

¡Buen viaje en esta aventura alimentaria! 🍼🥄🍽️`
  }
]
