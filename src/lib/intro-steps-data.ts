// Datos estáticos de introducción de alimentos
// Basados en recomendaciones OMS, UNICEF y AEPAP
// Plan de alimentación desde 6 hasta 24 meses

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
  ageRange?: string // '6-8', '8-10', '10-12', '12-18', '18-24'
}

// Función para generar pasos automáticamente
function generateSteps(): IntroStep[] {
  const steps: IntroStep[] = []
  
  // ===== MESES 6-8: INTRODUCCIÓN (Semanas 1-8) =====
  
  // SEMANA 1 - Verduras suaves
  steps.push(
    { id: 'w1d1', weekNumber: 1, dayNumber: 1, title: '¡Primer día de alimentación complementaria!', description: 'Hoy comienza una nueva etapa. Ofrece tu primera cucharada de puré de calabacín.', foodGroup: 'Verduras', specificFood: 'Calabacín', portionSize: '2-3 cucharaditas', frequency: 'Una comida', ageRange: '6-8', breastmilkNote: 'Continúa con la lactancia materna a demanda.', tips: JSON.stringify(['Elige un momento tranquilo', 'Usa cuchara pequeña de silicona', 'No te preocupes si escupe']), warnings: JSON.stringify(['No añadas sal ni azúcar', 'Observa reacciones alérgicas']) },
    { id: 'w1d2', weekNumber: 1, dayNumber: 2, title: 'Segundo día con calabacín', description: 'Continúa ofreciendo puré de calabacín.', foodGroup: 'Verduras', specificFood: 'Calabacín', portionSize: '3-4 cucharadas', frequency: 'Una comida', ageRange: '6-8' },
    { id: 'w1d3', weekNumber: 1, dayNumber: 3, title: 'Tercer día con calabacín', description: 'Último día de prueba con calabacín.', foodGroup: 'Verduras', specificFood: 'Calabacín', portionSize: '4-5 cucharadas', frequency: 'Una comida', ageRange: '6-8' },
    { id: 'w1d4', weekNumber: 1, dayNumber: 4, title: 'Nuevo alimento: Calabaza', description: 'Hoy introducimos la calabaza, dulce y suave.', foodGroup: 'Verduras', specificFood: 'Calabaza', portionSize: '2-3 cucharadas', frequency: 'Una comida', ageRange: '6-8' },
    { id: 'w1d5', weekNumber: 1, dayNumber: 5, title: 'Continúa con calabaza', description: 'Sigue probando la calabaza.', foodGroup: 'Verduras', specificFood: 'Calabaza', portionSize: '3-4 cucharadas', frequency: 'Una comida', ageRange: '6-8' },
    { id: 'w1d6', weekNumber: 1, dayNumber: 6, title: 'Último día de calabaza', description: 'Finalizamos la prueba de calabaza.', foodGroup: 'Verduras', specificFood: 'Calabaza', portionSize: '4-5 cucharadas', frequency: 'Una comida', ageRange: '6-8' },
    { id: 'w1d7', weekNumber: 1, dayNumber: 7, title: 'Nuevo alimento: Zanahoria', description: 'Introducimos la zanahoria, rica en vitamina A.', foodGroup: 'Verduras', specificFood: 'Zanahoria', portionSize: '2-3 cucharadas', frequency: 'Una comida', ageRange: '6-8' }
  )

  // SEMANA 2
  steps.push(
    { id: 'w2d1', weekNumber: 2, dayNumber: 1, title: 'Continúa con zanahoria', description: 'Segundo día con zanahoria.', foodGroup: 'Verduras', specificFood: 'Zanahoria', portionSize: '3-4 cucharadas', frequency: 'Una comida', ageRange: '6-8' },
    { id: 'w2d2', weekNumber: 2, dayNumber: 2, title: 'Mezcla de verduras', description: 'Prueba mezcla de verduras ya conocidas.', foodGroup: 'Verduras', specificFood: 'Calabacín + Calabaza + Zanahoria', portionSize: '5-6 cucharadas', frequency: 'Una comida', ageRange: '6-8' },
    { id: 'w2d3', weekNumber: 2, dayNumber: 3, title: 'Nuevo alimento: Patata', description: 'La patata es excelente base para purés.', foodGroup: 'Verduras', specificFood: 'Patata', portionSize: '2-3 cucharadas', frequency: 'Una comida', ageRange: '6-8' },
    { id: 'w2d4', weekNumber: 2, dayNumber: 4, title: 'Patata + verduras', description: 'Mezcla patata con verduras ya conocidas.', foodGroup: 'Verduras', specificFood: 'Patata + Calabacín', portionSize: '4-5 cucharadas', frequency: 'Una comida', ageRange: '6-8' },
    { id: 'w2d5', weekNumber: 2, dayNumber: 5, title: 'Nuevo alimento: Judías verdes', description: 'Las judías verdes aportan fibra y vitaminas.', foodGroup: 'Verduras', specificFood: 'Judías verdes', portionSize: '2-3 cucharadas', frequency: 'Una comida', ageRange: '6-8' },
    { id: 'w2d6', weekNumber: 2, dayNumber: 6, title: 'Mezcla completa de verduras', description: 'Prepara un puré con todas las verduras introducidas.', foodGroup: 'Verduras', specificFood: 'Mezcla de verduras', portionSize: '5-6 cucharadas', frequency: 'Una comida', ageRange: '6-8' },
    { id: 'w2d7', weekNumber: 2, dayNumber: 7, title: 'Puerro - nuevo sabor', description: 'El puerro aporta un sabor suave diferente.', foodGroup: 'Verduras', specificFood: 'Puerro', portionSize: '2-3 cucharadas', frequency: 'Una comida', ageRange: '6-8' }
  )

  // SEMANA 3 - FRUTAS
  steps.push(
    { id: 'w3d1', weekNumber: 3, dayNumber: 1, title: '¡Llegaron las frutas! - Pera', description: 'Introducimos la primera fruta: la pera.', foodGroup: 'Frutas', specificFood: 'Pera', portionSize: '2-3 cucharadas', frequency: 'Una comida (merienda)', ageRange: '6-8', tips: JSON.stringify(['Usa peras maduras', 'Puedes ofrecerla cruda rallada o cocida']) },
    { id: 'w3d2', weekNumber: 3, dayNumber: 2, title: 'Continúa con pera', description: 'El bebé se acostumbra al dulzor de la fruta.', foodGroup: 'Frutas', specificFood: 'Pera', portionSize: '3-4 cucharadas', frequency: 'Una comida', ageRange: '6-8' },
    { id: 'w3d3', weekNumber: 3, dayNumber: 3, title: 'Nuevo alimento: Manzana', description: 'La manzana es suave y versátil.', foodGroup: 'Frutas', specificFood: 'Manzana', portionSize: '2-3 cucharadas', frequency: 'Una comida', ageRange: '6-8' },
    { id: 'w3d4', weekNumber: 3, dayNumber: 4, title: 'Mezcla de frutas', description: 'Combina pera y manzana.', foodGroup: 'Frutas', specificFood: 'Pera + Manzana', portionSize: '4-5 cucharadas', frequency: 'Una comida', ageRange: '6-8' },
    { id: 'w3d5', weekNumber: 3, dayNumber: 5, title: 'Nuevo alimento: Plátano', description: 'El plátano es nutritivo y fácil de preparar.', foodGroup: 'Frutas', specificFood: 'Plátano', portionSize: 'Medio plátano pequeño', frequency: 'Una comida', ageRange: '6-8' },
    { id: 'w3d6', weekNumber: 3, dayNumber: 6, title: 'Papilla de tres frutas', description: 'Combina las tres frutas ya conocidas.', foodGroup: 'Frutas', specificFood: 'Pera + Manzana + Plátano', portionSize: '5-6 cucharadas', frequency: 'Una comida', ageRange: '6-8' },
    { id: 'w3d7', weekNumber: 3, dayNumber: 7, title: 'Resumen de la semana', description: 'El bebé ya conoce verduras y frutas básicas.', foodGroup: 'Mixto', specificFood: 'Combinaciones variadas', portionSize: '50-60g por comida', frequency: 'Dos comidas al día', ageRange: '6-8' }
  )

  // SEMANA 4
  steps.push(
    { id: 'w4d1', weekNumber: 4, dayNumber: 1, title: 'Nuevo alimento: Aguacate', description: 'El aguacate es rico en grasas saludables.', foodGroup: 'Frutas', specificFood: 'Aguacate', portionSize: '2-3 cucharadas', frequency: 'Una comida', ageRange: '6-8' },
    { id: 'w4d2', weekNumber: 4, dayNumber: 2, title: 'Aguacate + frutas', description: 'Combina aguacate con otras frutas.', foodGroup: 'Frutas', specificFood: 'Aguacate + Plátano', portionSize: '4-5 cucharadas', frequency: 'Una comida', ageRange: '6-8' },
    { id: 'w4d3', weekNumber: 4, dayNumber: 3, title: 'Nuevo alimento: Cereales de arroz', description: 'Los cereales de arroz espesan purés.', foodGroup: 'Cereales', specificFood: 'Cereales de arroz', portionSize: '1-2 cucharadas', frequency: 'Añadir al puré', ageRange: '6-8' },
    { id: 'w4d4', weekNumber: 4, dayNumber: 4, title: 'Cereales con frutas', description: 'Añade cereales a la papilla de frutas.', foodGroup: 'Cereales', specificFood: 'Cereales de arroz + Frutas', portionSize: '2-3 cucharadas', frequency: 'Una comida', ageRange: '6-8' },
    { id: 'w4d5', weekNumber: 4, dayNumber: 5, title: 'Nuevo alimento: Melocotón', description: 'El melocotón aporta sabor dulce.', foodGroup: 'Frutas', specificFood: 'Melocotón', portionSize: '2-3 cucharadas', frequency: 'Una comida', ageRange: '6-8' },
    { id: 'w4d6', weekNumber: 4, dayNumber: 6, title: 'Puré mixto con cereales', description: 'Prepara puré de verduras con cereales.', foodGroup: 'Mixto', specificFood: 'Verduras + Cereales', portionSize: '60-70g', frequency: 'Almuerzo completo', ageRange: '6-8' },
    { id: 'w4d7', weekNumber: 4, dayNumber: 7, title: 'Resumen del primer mes', description: '¡Felicidades! Has completado el primer mes.', foodGroup: 'Mixto', specificFood: 'Variedad', portionSize: '60-70g', frequency: 'Dos comidas', ageRange: '6-8' }
  )

  // SEMANA 5 - PROTEÍNAS
  steps.push(
    { id: 'w5d1', weekNumber: 5, dayNumber: 1, title: '¡Llegaron las proteínas! - Pollo', description: 'El pollo es la primera carne que introducimos.', foodGroup: 'Proteínas', specificFood: 'Pollo', portionSize: '20-30g', frequency: 'Una comida', ageRange: '6-8' },
    { id: 'w5d2', weekNumber: 5, dayNumber: 2, title: 'Puré de pollo con verduras', description: 'Combina pollo con verduras conocidas.', foodGroup: 'Proteínas', specificFood: 'Pollo + Verduras', portionSize: '30-40g pollo + 50g verduras', frequency: 'Una comida', ageRange: '6-8' },
    { id: 'w5d3', weekNumber: 5, dayNumber: 3, title: 'Nuevo cereal: Maíz', description: 'El maíz es otro cereal sin gluten.', foodGroup: 'Cereales', specificFood: 'Maíz', portionSize: '1-2 cucharadas', frequency: 'Una comida', ageRange: '6-8' },
    { id: 'w5d4', weekNumber: 5, dayNumber: 4, title: 'Nuevo alimento: Ternera', description: 'La ternera es rica en hierro.', foodGroup: 'Proteínas', specificFood: 'Ternera', portionSize: '20-30g', frequency: 'Una comida', ageRange: '6-8' },
    { id: 'w5d5', weekNumber: 5, dayNumber: 5, title: 'Puré de ternera con verduras', description: 'Mezcla ternera con verduras.', foodGroup: 'Proteínas', specificFood: 'Ternera + Verduras', portionSize: '30-40g + 50g', frequency: 'Una comida', ageRange: '6-8' },
    { id: 'w5d6', weekNumber: 5, dayNumber: 6, title: 'Nuevo alimento: Avena', description: 'La avena es nutritiva, contiene gluten.', foodGroup: 'Cereales', specificFood: 'Avena', portionSize: '1-2 cucharadas', frequency: 'Una comida', ageRange: '6-8', warnings: JSON.stringify(['Contiene gluten - observa reacciones']) },
    { id: 'w5d7', weekNumber: 5, dayNumber: 7, title: 'Resumen semana 5', description: 'El bebé ya come proteínas y más cereales.', foodGroup: 'Mixto', specificFood: 'Variedad', portionSize: '70-80g', frequency: 'Dos comidas', ageRange: '6-8' }
  )

  // SEMANAS 6-8: Más variedad (6-8 meses)
  for (let week = 6; week <= 8; week++) {
    const foods6_8 = [
      { food: 'Brócoli', group: 'Verduras', tip: 'Cocinar muy bien hasta que esté muy tierno' },
      { food: 'Coliflor', group: 'Verduras', tip: 'Ideal para purés cremosos' },
      { food: 'Espinacas', group: 'Verduras', tip: 'Ricas en hierro, cocinar bien' },
      { food: 'Naranja', group: 'Frutas', tip: 'Vitamina C para absorber hierro' },
      { food: 'Mandarina', group: 'Frutas', tip: 'Dulce y fácil de aceptar' },
      { food: 'Pavo', group: 'Proteínas', tip: 'Carne magra y suave' },
      { food: 'Merluza', group: 'Pescados', tip: 'Primer pescado, magro y suave' },
    ]
    
    for (let day = 1; day <= 7; day++) {
      const foodIndex = (week - 6) * 7 + day - 1
      const foodItem = foods6_8[foodIndex % foods6_8.length]
      steps.push({
        id: `w${week}d${day}`,
        weekNumber: week,
        dayNumber: day,
        title: `${week === 6 && day === 1 ? 'Nueva etapa: ' : ''}${foodItem.food}`,
        description: `Introducción de ${foodItem.food.toLowerCase()}. ${foodItem.tip}.`,
        foodGroup: foodItem.group,
        specificFood: foodItem.food,
        portionSize: week < 8 ? '30-50g' : '50-70g',
        frequency: '2-3 comidas al día',
        ageRange: '6-8',
        tips: JSON.stringify([foodItem.tip, 'Observar aceptación', 'Mezclar con alimentos ya conocidos'])
      })
    }
  }

  // ===== MESES 8-10: EXPLORACIÓN (Semanas 9-17) =====
  for (let week = 9; week <= 17; week++) {
    const foods8_10 = [
      { food: 'Lenguado', group: 'Pescados', tip: 'Pescado blanco suave' },
      { food: 'Huevo (yema)', group: 'Proteínas', tip: 'Empezar solo con la yema cocida' },
      { food: 'Huevo (clara)', group: 'Proteínas', tip: 'Introducir después de tolerar yema' },
      { food: 'Yogur natural', group: 'Lácteos', tip: 'Sin azúcar, natural entero' },
      { food: 'Queso fresco', group: 'Lácteos', tip: 'Bajo en sal, sin añadidos' },
      { food: 'Lentejas', group: 'Legumbres', tip: 'Triturar muy bien' },
      { food: 'Garbanzos', group: 'Legumbres', tip: 'En puré o hummus suave' },
      { food: 'Arroz integral', group: 'Cereales', tip: 'Más fibra y nutrientes' },
      { food: 'Pan (sin sal)', group: 'Cereales', tip: 'Puede masticar trocitos blandos' },
      { food: 'Pasta', group: 'Cereales', tip: 'Muy cocida, trozos pequeños' },
      { food: 'Piña', group: 'Frutas', tip: 'Madura y bien troceada' },
      { food: 'Sandía', group: 'Frutas', tip: 'Sin pepitas, trocitos pequeños' },
      { food: 'Melón', group: 'Frutas', tip: 'Hidratante y dulce' },
      { food: 'Albaricoque', group: 'Frutas', tip: 'Cocido o crudo maduro' },
    ]
    
    for (let day = 1; day <= 7; day++) {
      const foodIndex = (week - 9) * 7 + day - 1
      const foodItem = foods8_10[foodIndex % foods8_10.length]
      steps.push({
        id: `w${week}d${day}`,
        weekNumber: week,
        dayNumber: day,
        title: `${foodItem.food} - Semana ${week}`,
        description: `Exploración de ${foodItem.food.toLowerCase()}. ${foodItem.tip}. Texturas más gruesas.`,
        foodGroup: foodItem.group,
        specificFood: foodItem.food,
        portionSize: '70-100g',
        frequency: '3 comidas + 1-2 snacks',
        ageRange: '8-10',
        tips: JSON.stringify([foodItem.tip, 'Texturas más gruesas', 'Fomentar autoalimentación con manos'])
      })
    }
  }

  // ===== MESES 10-12: TRANSICIÓN (Semanas 18-26) =====
  for (let week = 18; week <= 26; week++) {
    const foods10_12 = [
      { food: 'Salmón', group: 'Pescados', tip: 'Rico en omega-3, bien cocido' },
      { food: 'Atún fresco', group: 'Pescados', tip: 'Evitar enlatado por sal' },
      { food: 'Sardinas', group: 'Pescados', tip: 'Sin espinas, ricas en calcio' },
      { food: 'Cordero', group: 'Proteínas', tip: 'Carne tierna, bien cocida' },
      { food: 'Cerdo magro', group: 'Proteínas', tip: 'Lomo o presa bien cocidos' },
      { food: 'Tofu', group: 'Proteínas', tip: 'Textura suave, versátil' },
      { food: 'Judiones', group: 'Legumbres', tip: 'En puré o trocitos' },
      { food: 'Alubias', group: 'Legumbres', tip: 'Bien cocidas y trituradas' },
      { food: 'Arroz salvaje', group: 'Cereales', tip: 'Más textura y nutrientes' },
      { food: 'Quinoa', group: 'Cereales', tip: 'Proteína completa' },
      { food: 'Cuscús', group: 'Cereales', tip: 'Fácil de preparar y comer' },
      { food: 'Remolacha', group: 'Verduras', tip: 'Colorida y dulce' },
      { food: 'Pimiento rojo', group: 'Verduras', tip: 'Bien cocido, sin piel' },
      { food: 'Berenjena', group: 'Verduras', tip: 'Suave cuando está bien cocida' },
    ]
    
    for (let day = 1; day <= 7; day++) {
      const foodIndex = (week - 18) * 7 + day - 1
      const foodItem = foods10_12[foodIndex % foods10_12.length]
      steps.push({
        id: `w${week}d${day}`,
        weekNumber: week,
        dayNumber: day,
        title: `${foodItem.food} - Semana ${week}`,
        description: `Transición con ${foodItem.food.toLowerCase()}. ${foodItem.tip}. Comidas familiares adaptadas.`,
        foodGroup: foodItem.group,
        specificFood: foodItem.food,
        portionSize: '100-150g',
        frequency: '3 comidas + 2 snacks',
        ageRange: '10-12',
        tips: JSON.stringify([foodItem.tip, 'Ofrecer trozos para agarrar', 'Comidas familiares adaptadas', 'Menos puré, más textura'])
      })
    }
  }

  // ===== MESES 12-18: CONSOLIDACIÓN (Semanas 27-52) =====
  for (let week = 27; week <= 52; week++) {
    const foods12_18 = [
      { food: 'Fresas', group: 'Frutas', tip: 'Lavar bien, trocitos pequeños' },
      { food: 'Arándanos', group: 'Frutas', tip: 'Ricos en antioxidantes' },
      { food: 'Cerezas', group: 'Frutas', tip: 'Sin hueso, troceadas' },
      { food: 'Uvas', group: 'Frutas', tip: 'Cortar en cuartos por el peligro de atragantamiento' },
      { food: 'Kiwi', group: 'Frutas', tip: 'Maduro, rico en vitamina C' },
      { food: 'Mango', group: 'Frutas', tip: 'Maduro y troceado' },
      { food: 'Papaya', group: 'Frutas', tip: 'Digestiva y dulce' },
      { food: 'Miel (1 año+)', group: 'Otros', tip: 'Solo después de 12 meses' },
      { food: 'Crema de cacahuete', group: 'Proteínas', tip: 'Capa fina, observar alergia' },
      { food: 'Frutos secos triturados', group: 'Otros', tip: 'En puré o bien triturados' },
    ]
    
    for (let day = 1; day <= 7; day++) {
      const foodIndex = (week - 27) * 7 + day - 1
      const foodItem = foods12_18[foodIndex % foods12_18.length]
      steps.push({
        id: `w${week}d${day}`,
        weekNumber: week,
        dayNumber: day,
        title: `${foodItem.food} - Semana ${week}`,
        description: `Consolidación con ${foodItem.food.toLowerCase()}. ${foodItem.tip}. Dieta variada.`,
        foodGroup: foodItem.group,
        specificFood: foodItem.food,
        portionSize: '100-200g',
        frequency: '3 comidas + 2 snacks',
        ageRange: '12-18',
        tips: JSON.stringify([foodItem.tip, 'Dieta cada vez más variada', 'Puede comer casi todo lo de la familia'])
      })
    }
  }

  // ===== MESES 18-24: MADUREZ (Semanas 53-104) =====
  for (let week = 53; week <= 104; week++) {
    const foods18_24 = [
      { food: 'Dieta familiar completa', group: 'Mixto', tip: 'Adaptar solo sal y azúcar' },
      { food: 'Ensaladas variadas', group: 'Verduras', tip: 'Trozos pequeños, ingredientes variados' },
      { food: 'Sopas y cremas', group: 'Verduras', tip: 'Nutritivas y reconfortantes' },
      { food: 'Platos combinados', group: 'Mixto', tip: 'Proteína + verdura + carbohidrato' },
      { food: 'Bocadillos saludables', group: 'Mixto', tip: 'Pan integral con opciones nutritivas' },
      { food: 'Batidos de frutas', group: 'Frutas', tip: 'Sin azúcar añadido' },
      { food: 'Postres caseros', group: 'Otros', tip: 'Pocos, y caseros preferiblemente' },
    ]
    
    for (let day = 1; day <= 7; day++) {
      const foodIndex = (week - 53) * 7 + day - 1
      const foodItem = foods18_24[foodIndex % foods18_24.length]
      steps.push({
        id: `w${week}d${day}`,
        weekNumber: week,
        dayNumber: day,
        title: `${foodItem.food} - Semana ${week}`,
        description: `Madurez alimentaria: ${foodItem.food.toLowerCase()}. ${foodItem.tip}. Dieta completa.`,
        foodGroup: foodItem.group,
        specificFood: foodItem.food,
        portionSize: '150-250g',
        frequency: '3 comidas + 2 snacks',
        ageRange: '18-24',
        tips: JSON.stringify([foodItem.tip, 'Dieta casi igual que adultos', 'Evitar solo azúcar y sal añadidos', 'Fomentar autonomía en la comida'])
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
    { value: '6-8', label: '6-8 meses', description: 'Iniciación' },
    { value: '8-10', label: '8-10 meses', description: 'Exploración' },
    { value: '10-12', label: '10-12 meses', description: 'Transición' },
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
