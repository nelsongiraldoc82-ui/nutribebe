// Datos para calcular la lista de compras
// Basado en las necesidades de un bebé de 6-12 meses

export interface ShoppingItem {
  name: string
  category: 'Verduras' | 'Frutas' | 'Proteínas' | 'Cereales' | 'Lácteos' | 'Legumbres' | 'Otros'
  quantity: string
  quantityGrams: number
  notes?: string
  icon: string
}

// Categorías con iconos
export const categoryIcons: Record<string, string> = {
  'Verduras': '🥕',
  'Frutas': '🍎',
  'Proteínas': '🍗',
  'Cereales': '🌾',
  'Lácteos': '🥛',
  'Legumbres': '🫘',
  'Otros': '🥣',
}

// Alimentos únicos con información de compra
export const foodShoppingInfo: Record<string, { unitWeight: number, unit: string, shelfLife: string }> = {
  // Verduras
  'Calabacín': { unitWeight: 200, unit: 'unidad mediana', shelfLife: '5-7 días' },
  'Calabaza': { unitWeight: 500, unit: 'trozo 500g', shelfLife: '7-10 días' },
  'Zanahoria': { unitWeight: 150, unit: 'unidad mediana', shelfLife: '10-14 días' },
  'Patata': { unitWeight: 150, unit: 'unidad mediana', shelfLife: '14-21 días' },
  'Judías verdes': { unitWeight: 250, unit: 'manojo', shelfLife: '3-5 días' },
  'Puerro': { unitWeight: 150, unit: 'unidad grande', shelfLife: '7-10 días' },
  'Espinacas': { unitWeight: 200, unit: 'manojo', shelfLife: '2-3 días' },
  'Acelgas': { unitWeight: 250, unit: 'manojo', shelfLife: '2-3 días' },
  'Brócoli': { unitWeight: 300, unit: 'unidad', shelfLife: '3-5 días' },
  'Tomate': { unitWeight: 150, unit: 'unidad mediana', shelfLife: '5-7 días' },
  'Pimiento': { unitWeight: 150, unit: 'unidad', shelfLife: '5-7 días' },
  'Cebolla': { unitWeight: 150, unit: 'unidad', shelfLife: '14-21 días' },
  
  // Frutas
  'Pera': { unitWeight: 180, unit: 'unidad mediana', shelfLife: '3-5 días' },
  'Manzana': { unitWeight: 180, unit: 'unidad mediana', shelfLife: '7-14 días' },
  'Plátano': { unitWeight: 120, unit: 'unidad', shelfLife: '3-5 días' },
  'Aguacate': { unitWeight: 200, unit: 'unidad', shelfLife: '2-4 días maduro' },
  'Melocotón': { unitWeight: 150, unit: 'unidad', shelfLife: '3-5 días' },
  'Naranja': { unitWeight: 200, unit: 'unidad', shelfLife: '7-14 días' },
  'Fresa': { unitWeight: 250, unit: 'bandeja 250g', shelfLife: '2-3 días' },
  'Mandarina': { unitWeight: 100, unit: 'unidad', shelfLife: '7-14 días' },
  
  // Proteínas
  'Pollo': { unitWeight: 150, unit: 'pechuga', shelfLife: '2-3 días (congelar si es más)' },
  'Ternera': { unitWeight: 150, unit: 'trozo magro', shelfLife: '2-3 días (congelar si es más)' },
  'Pavo': { unitWeight: 150, unit: 'pechuga', shelfLife: '2-3 días' },
  'Conejo': { unitWeight: 500, unit: 'unidad', shelfLife: '2-3 días' },
  'Merluza': { unitWeight: 200, unit: 'filete', shelfLife: '1-2 días' },
  'Bacalao': { unitWeight: 200, unit: 'filete', shelfLife: '1-2 días' },
  'Salmón': { unitWeight: 200, unit: 'filete', shelfLife: '1-2 días' },
  'Sardinas': { unitWeight: 100, unit: 'lata', shelfLife: '12+ meses' },
  'Yema de huevo': { unitWeight: 20, unit: 'unidad', shelfLife: '7-14 días (huevo entero)' },
  'Huevo completo': { unitWeight: 60, unit: 'unidad', shelfLife: '7-14 días' },
  
  // Lácteos
  'Yogur natural': { unitWeight: 125, unit: 'unidad', shelfLife: '14-21 días' },
  'Queso fresco': { unitWeight: 100, unit: 'porción', shelfLife: '5-7 días' },
  'Leche de vaca entera': { unitWeight: 1000, unit: 'litro', shelfLife: '7-10 días abierto' },
  
  // Cereales
  'Cereales de arroz': { unitWeight: 200, unit: 'caja 200g', shelfLife: '30+ días' },
  'Maíz (harina o cereales)': { unitWeight: 250, unit: 'paquete', shelfLife: '30+ días' },
  'Avena': { unitWeight: 250, unit: 'paquete', shelfLife: '30+ días' },
  'Arroz': { unitWeight: 500, unit: 'paquete 500g', shelfLife: '30+ días' },
  'Pasta pequeña': { unitWeight: 250, unit: 'paquete', shelfLife: '30+ días' },
  'Cuscús': { unitWeight: 250, unit: 'paquete', shelfLife: '30+ días' },
  'Pan': { unitWeight: 50, unit: 'rebanada', shelfLife: '2-3 días' },
  
  // Legumbres
  'Lentejas': { unitWeight: 250, unit: 'paquete 250g', shelfLife: '12+ meses' },
  'Garbanzos': { unitWeight: 250, unit: 'paquete 250g', shelfLife: '12+ meses' },
  
  // Otros
  'Miel': { unitWeight: 250, unit: 'frasco', shelfLife: '12+ meses' },
}

// Calcular lista de compras para los próximos N días
export function calculateShoppingList(
  currentDay: number,
  daysToPlan: number = 15,
  introSteps: Array<{ dayNumber: number; specificFood?: string; foodGroup?: string }>
): ShoppingItem[] {
  
  // Obtener los alimentos de los próximos días
  const foodsNeeded: Record<string, { count: number; category: string }> = {}
  
  for (let i = 0; i < daysToPlan; i++) {
    const targetDay = currentDay + i
    const step = introSteps[targetDay - 1] // Los días empiezan en 1
    
    if (step?.specificFood) {
      // Parsear alimentos compuestos (ej: "Calabacín + Calabaza")
      const foods = step.specificFood.split('+').map(f => f.trim())
      
      foods.forEach(food => {
        if (food && food !== 'Mezcla de verduras' && food !== 'Combinaciones variadas' && food !== 'Variedad de alimentos seguros' && food !== 'Variedad con proteínas') {
          if (!foodsNeeded[food]) {
            foodsNeeded[food] = { count: 0, category: step.foodGroup || 'Otros' }
          }
          foodsNeeded[food].count++
        }
      })
    }
  }
  
  // Convertir a lista de compra con cantidades
  const shoppingList: ShoppingItem[] = []
  
  Object.entries(foodsNeeded).forEach(([food, info]) => {
    const shopInfo = foodShoppingInfo[food]
    if (shopInfo) {
      // Calcular cantidad necesaria (aprox 40-60g por comida para bebé)
      const gramsPerMeal = 50 // promedio
      const totalGrams = info.count * gramsPerMeal
      const units = Math.ceil(totalGrams / shopInfo.unitWeight)
      
      shoppingList.push({
        name: food,
        category: info.category as ShoppingItem['category'],
        quantity: `${units} ${shopInfo.unit}${units > 1 ? 's' : ''} (~${totalGrams}g)`,
        quantityGrams: totalGrams,
        notes: `Conservación: ${shopInfo.shelfLife}`,
        icon: categoryIcons[info.category] || '🥣',
      })
    }
  })
  
  // Ordenar por categoría
  const categoryOrder = ['Verduras', 'Frutas', 'Proteínas', 'Lácteos', 'Legumbres', 'Cereales', 'Otros']
  shoppingList.sort((a, b) => {
    return categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category)
  })
  
  return shoppingList
}

// Períodos de compra (cada 30 días)
export function getShoppingPeriod(currentDay: number): { start: number; end: number; period: number } {
  const period = Math.floor((currentDay - 1) / 30) + 1
  const start = (period - 1) * 30 + 1
  const end = start + 29
  return { start, end, period }
}

// Información de rangos de edad para lista de compras
export const shoppingAgeRanges = {
  '6-8m': {
    title: '6-8 meses',
    subtitle: 'Primeras comidas',
    startDay: 1,
    endDay: 30,
    color: 'orange',
    bgClass: 'bg-orange-50',
    borderClass: 'border-orange-200',
    textClass: 'text-orange-700',
    icon: '🍼'
  },
  '8-12m': {
    title: '8-12 meses',
    subtitle: 'Ampliando variedad',
    startDay: 31,
    endDay: 60,
    color: 'green',
    bgClass: 'bg-green-50',
    borderClass: 'border-green-200',
    textClass: 'text-green-700',
    icon: '🥄'
  },
  '12-24m': {
    title: '12-24 meses',
    subtitle: 'Comida familiar',
    startDay: 61,
    endDay: 72,
    color: 'blue',
    bgClass: 'bg-blue-50',
    borderClass: 'border-blue-200',
    textClass: 'text-blue-700',
    icon: '🍽️'
  }
}

// Calcular lista de compras por rango de edad
export function calculateShoppingListByAgeRange(
  introSteps: Array<{ dayNumber: number; specificFood?: string; foodGroup?: string; ageRange?: string }>
): Record<string, ShoppingItem[]> {
  
  const listsByAge: Record<string, ShoppingItem[]> = {
    '6-8m': [],
    '8-12m': [],
    '12-24m': []
  }
  
  // Procesar cada rango de edad
  Object.keys(listsByAge).forEach(ageRange => {
    const rangeInfo = shoppingAgeRanges[ageRange as keyof typeof shoppingAgeRanges]
    const foodsNeeded: Record<string, { count: number; category: string }> = {}
    
    // Obtener alimentos para este rango
    for (let day = rangeInfo.startDay; day <= rangeInfo.endDay; day++) {
      const step = introSteps[day - 1]
      
      if (step?.specificFood) {
        const foods = step.specificFood.split('+').map(f => f.trim())
        
        foods.forEach(food => {
          if (food && food !== 'Mezcla de verduras' && food !== 'Combinaciones variadas' && food !== 'Variedad de alimentos seguros' && food !== 'Variedad con proteínas') {
            if (!foodsNeeded[food]) {
              foodsNeeded[food] = { count: 0, category: step.foodGroup || 'Otros' }
            }
            foodsNeeded[food].count++
          }
        })
      }
    }
    
    // Convertir a lista de compra
    Object.entries(foodsNeeded).forEach(([food, info]) => {
      const shopInfo = foodShoppingInfo[food]
      if (shopInfo) {
        const gramsPerMeal = 50
        const totalGrams = info.count * gramsPerMeal
        const units = Math.ceil(totalGrams / shopInfo.unitWeight)
        
        listsByAge[ageRange].push({
          name: food,
          category: info.category as ShoppingItem['category'],
          quantity: `${units} ${shopInfo.unit}${units > 1 ? 's' : ''} (~${totalGrams}g)`,
          quantityGrams: totalGrams,
          notes: shopInfo.shelfLife,
          icon: categoryIcons[info.category] || '🥣',
        })
      }
    })
    
    // Ordenar por categoría
    const categoryOrder = ['Verduras', 'Frutas', 'Proteínas', 'Lácteos', 'Legumbres', 'Cereales', 'Otros']
    listsByAge[ageRange].sort((a, b) => {
      return categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category)
    })
  })
  
  return listsByAge
}

// Información de meses para lista de compras
export const monthShoppingInfo: Record<number, { title: string; startDay: number; endDay: number; color: string; bgClass: string; borderClass: string; icon: string }> = {
  6: { title: 'Mes 6', startDay: 1, endDay: 30, color: 'orange', bgClass: 'bg-orange-50', borderClass: 'border-orange-200', icon: '🍼' },
  7: { title: 'Mes 7', startDay: 31, endDay: 60, color: 'amber', bgClass: 'bg-amber-50', borderClass: 'border-amber-200', icon: '🥄' },
  8: { title: 'Mes 8', startDay: 61, endDay: 72, color: 'yellow', bgClass: 'bg-yellow-50', borderClass: 'border-yellow-200', icon: '🥣' },
  9: { title: 'Mes 9', startDay: 1, endDay: 30, color: 'lime', bgClass: 'bg-lime-50', borderClass: 'border-lime-200', icon: '🥗' },
  10: { title: 'Mes 10', startDay: 31, endDay: 60, color: 'green', bgClass: 'bg-green-50', borderClass: 'border-green-200', icon: '🥬' },
  11: { title: 'Mes 11', startDay: 61, endDay: 72, color: 'emerald', bgClass: 'bg-emerald-50', borderClass: 'border-emerald-200', icon: '🥦' },
  12: { title: 'Mes 12', startDay: 1, endDay: 30, color: 'teal', bgClass: 'bg-teal-50', borderClass: 'border-teal-200', icon: '🍽️' },
  13: { title: 'Mes 13', startDay: 31, endDay: 60, color: 'cyan', bgClass: 'bg-cyan-50', borderClass: 'border-cyan-200', icon: '🍴' },
  14: { title: 'Mes 14', startDay: 61, endDay: 72, color: 'sky', bgClass: 'bg-sky-50', borderClass: 'border-sky-200', icon: '🥘' },
  15: { title: 'Mes 15', startDay: 1, endDay: 30, color: 'blue', bgClass: 'bg-blue-50', borderClass: 'border-blue-200', icon: '🥫' },
  16: { title: 'Mes 16', startDay: 31, endDay: 60, color: 'indigo', bgClass: 'bg-indigo-50', borderClass: 'border-indigo-200', icon: '🍲' },
  17: { title: 'Mes 17', startDay: 61, endDay: 72, color: 'violet', bgClass: 'bg-violet-50', borderClass: 'border-violet-200', icon: '🥧' },
  18: { title: 'Mes 18', startDay: 1, endDay: 30, color: 'purple', bgClass: 'bg-purple-50', borderClass: 'border-purple-200', icon: '🧁' },
  19: { title: 'Mes 19', startDay: 31, endDay: 60, color: 'fuchsia', bgClass: 'bg-fuchsia-50', borderClass: 'border-fuchsia-200', icon: '🍰' },
  20: { title: 'Mes 20', startDay: 61, endDay: 72, color: 'pink', bgClass: 'bg-pink-50', borderClass: 'border-pink-200', icon: '🎂' },
  21: { title: 'Mes 21', startDay: 1, endDay: 30, color: 'rose', bgClass: 'bg-rose-50', borderClass: 'border-rose-200', icon: '🧃' },
  22: { title: 'Mes 22', startDay: 31, endDay: 60, color: 'red', bgClass: 'bg-red-50', borderClass: 'border-red-200', icon: '🍎' },
  23: { title: 'Mes 23', startDay: 61, endDay: 72, color: 'orange', bgClass: 'bg-orange-50', borderClass: 'border-orange-200', icon: '🍊' },
  24: { title: 'Mes 24', startDay: 1, endDay: 72, color: 'green', bgClass: 'bg-green-50', borderClass: 'border-green-200', icon: '🎉' },
}

// Calcular lista de compras por mes calendario (Mes 6, Mes 7, etc.)
export function calculateShoppingListByMonth(
  introSteps: Array<{ dayNumber: number; specificFood?: string; foodGroup?: string; ageRange?: string }>
): Record<number, ShoppingItem[]> {
  
  const listsByMonth: Record<number, ShoppingItem[]> = {}
  
  // Procesar cada mes desde el 6 hasta el 24
  for (let month = 6; month <= 24; month++) {
    const monthInfo = monthShoppingInfo[month]
    const foodsNeeded: Record<string, { count: number; category: string }> = {}
    
    // Determinar qué días corresponden a este mes
    // Los días del plan se distribuyen a lo largo de los meses
    // Mes 6 = días 1-30, Mes 7 = días 31-60, etc. (aproximadamente)
    
    for (let day = monthInfo.startDay; day <= monthInfo.endDay && day <= introSteps.length; day++) {
      const step = introSteps[day - 1]
      
      if (step?.specificFood) {
        const foods = step.specificFood.split('+').map(f => f.trim())
        
        foods.forEach(food => {
          if (food && food !== 'Mezcla de verduras' && food !== 'Combinaciones variadas' && food !== 'Variedad de alimentos seguros' && food !== 'Variedad con proteínas') {
            if (!foodsNeeded[food]) {
              foodsNeeded[food] = { count: 0, category: step.foodGroup || 'Otros' }
            }
            foodsNeeded[food].count++
          }
        })
      }
    }
    
    // Convertir a lista de compra
    listsByMonth[month] = []
    Object.entries(foodsNeeded).forEach(([food, info]) => {
      const shopInfo = foodShoppingInfo[food]
      if (shopInfo) {
        const gramsPerMeal = 50
        const totalGrams = info.count * gramsPerMeal
        const units = Math.ceil(totalGrams / shopInfo.unitWeight)
        
        listsByMonth[month].push({
          name: food,
          category: info.category as ShoppingItem['category'],
          quantity: `${units} ${shopInfo.unit}${units > 1 ? 's' : ''} (~${totalGrams}g)`,
          quantityGrams: totalGrams,
          notes: shopInfo.shelfLife,
          icon: categoryIcons[info.category] || '🥣',
        })
      }
    })
    
    // Ordenar por categoría
    const categoryOrder = ['Verduras', 'Frutas', 'Proteínas', 'Lácteos', 'Legumbres', 'Cereales', 'Otros']
    listsByMonth[month].sort((a, b) => {
      return categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category)
    })
  }
  
  return listsByMonth
}
