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
