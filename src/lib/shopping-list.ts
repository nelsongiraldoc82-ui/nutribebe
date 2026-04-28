// Datos para calcular la lista de compras
// Basado en las necesidades de un bebé de 6-12 meses

export interface ShoppingItem {
  name: string
  category: 'Verduras' | 'Frutas' | 'Proteínas' | 'Cereales' | 'Otros'
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
  
  // Frutas
  'Pera': { unitWeight: 180, unit: 'unidad mediana', shelfLife: '3-5 días' },
  'Manzana': { unitWeight: 180, unit: 'unidad mediana', shelfLife: '7-14 días' },
  'Plátano': { unitWeight: 120, unit: 'unidad', shelfLife: '3-5 días' },
  'Aguacate': { unitWeight: 200, unit: 'unidad', shelfLife: '2-4 días maduro' },
  'Melocotón': { unitWeight: 150, unit: 'unidad', shelfLife: '3-5 días' },
  
  // Proteínas
  'Pollo': { unitWeight: 150, unit: 'pechuga', shelfLife: '2-3 días (congelar si es más)' },
  'Ternera': { unitWeight: 150, unit: 'trozo magro', shelfLife: '2-3 días (congelar si es más)' },
  
  // Cereales
  'Cereales de arroz': { unitWeight: 200, unit: 'caja 200g', shelfLife: '30+ días' },
  'Maíz (harina o cereales)': { unitWeight: 250, unit: 'paquete', shelfLife: '30+ días' },
  'Avena': { unitWeight: 250, unit: 'paquete', shelfLife: '30+ días' },
}

// Calcular lista de compras para los próximos N días
export function calculateShoppingList(
  currentDay: number,
  daysToPlan: number = 15,
  introSteps: Array<{ dayNumber: number; weekNumber: number; specificFood?: string; foodGroup?: string }>
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
  const categoryOrder = ['Verduras', 'Frutas', 'Proteínas', 'Cereales', 'Otros']
  shoppingList.sort((a, b) => {
    return categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category)
  })
  
  return shoppingList
}

// Períodos de compra (cada 15 días)
export function getShoppingPeriod(currentDay: number): { start: number; end: number; period: number } {
  const period = Math.floor((currentDay - 1) / 15) + 1
  const start = (period - 1) * 15 + 1
  const end = start + 14
  return { start, end, period }
}
