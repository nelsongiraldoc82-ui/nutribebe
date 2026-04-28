// Datos para calcular la lista de compras
// Basado en las necesidades de un bebé de 6-24 meses

export interface ShoppingItem {
  name: string
  category: 'Verduras' | 'Frutas' | 'Proteínas' | 'Cereales' | 'Lácteos' | 'Legumbres' | 'Otros'
  quantity: string
  quantityGrams: number
  notes?: string
  icon: string
  month?: number // Mes al que pertenece (6-24)
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
export const foodShoppingInfo: Record<string, { unitWeight: number, unit: string, shelfLife: string, category: string }> = {
  // Verduras
  'Calabacín': { unitWeight: 200, unit: 'unidad mediana', shelfLife: '5-7 días', category: 'Verduras' },
  'Calabaza': { unitWeight: 500, unit: 'trozo 500g', shelfLife: '7-10 días', category: 'Verduras' },
  'Zanahoria': { unitWeight: 150, unit: 'unidad mediana', shelfLife: '10-14 días', category: 'Verduras' },
  'Patata': { unitWeight: 150, unit: 'unidad mediana', shelfLife: '14-21 días', category: 'Verduras' },
  'Judías verdes': { unitWeight: 250, unit: 'manojo', shelfLife: '3-5 días', category: 'Verduras' },
  'Puerro': { unitWeight: 150, unit: 'unidad grande', shelfLife: '7-10 días', category: 'Verduras' },
  
  // Frutas
  'Pera': { unitWeight: 180, unit: 'unidad mediana', shelfLife: '3-5 días', category: 'Frutas' },
  'Manzana': { unitWeight: 180, unit: 'unidad mediana', shelfLife: '7-14 días', category: 'Frutas' },
  'Plátano': { unitWeight: 120, unit: 'unidad', shelfLife: '3-5 días', category: 'Frutas' },
  'Aguacate': { unitWeight: 200, unit: 'unidad', shelfLife: '2-4 días maduro', category: 'Frutas' },
  'Melocotón': { unitWeight: 150, unit: 'unidad', shelfLife: '3-5 días', category: 'Frutas' },
  'Fresa': { unitWeight: 250, unit: 'bandeja 250g', shelfLife: '2-3 días', category: 'Frutas' },
  
  // Proteínas
  'Pollo': { unitWeight: 150, unit: 'pechuga', shelfLife: '2-3 días (congelar si es más)', category: 'Proteínas' },
  'Ternera': { unitWeight: 150, unit: 'trozo magro', shelfLife: '2-3 días (congelar si es más)', category: 'Proteínas' },
  'Merluza': { unitWeight: 150, unit: 'filete', shelfLife: '1-2 días (congelar si es más)', category: 'Proteínas' },
  'Pescado blanco': { unitWeight: 150, unit: 'filete', shelfLife: '1-2 días', category: 'Proteínas' },
  'Bacalao': { unitWeight: 150, unit: 'filete', shelfLife: '1-2 días', category: 'Proteínas' },
  'Huevo': { unitWeight: 60, unit: 'unidad L', shelfLife: '21 días', category: 'Proteínas' },
  'Yema de huevo': { unitWeight: 20, unit: 'yema', shelfLife: 'usar inmediatamente', category: 'Proteínas' },
  
  // Lácteos
  'Yogur natural': { unitWeight: 125, unit: 'unidad', shelfLife: '14-21 días', category: 'Lácteos' },
  'Queso fresco': { unitWeight: 100, unit: 'tarrina 100g', shelfLife: '7-10 días', category: 'Lácteos' },
  
  // Cereales
  'Arroz': { unitWeight: 200, unit: 'paquete 1kg', shelfLife: '30+ días', category: 'Cereales' },
  'Avena': { unitWeight: 250, unit: 'paquete', shelfLife: '30+ días', category: 'Cereales' },
  'Pan integral': { unitWeight: 50, unit: 'rebanada', shelfLife: '2-3 días', category: 'Cereales' },
  'Pasta': { unitWeight: 100, unit: 'paquete 500g', shelfLife: '30+ días', category: 'Cereales' },
  'Cereales de arroz': { unitWeight: 200, unit: 'caja 200g', shelfLife: '30+ días', category: 'Cereales' },
  
  // Legumbres
  'Lentejas': { unitWeight: 80, unit: 'taza seca', shelfLife: '12+ meses', category: 'Legumbres' },
  
  // Otros
  'Aceite de oliva': { unitWeight: 100, unit: 'botella 500ml', shelfLife: '18+ meses', category: 'Otros' },
}

// Lista de compras organizada por MES (6-24 meses)
export function calculateShoppingListByMonth(
  month: number,
  introSteps: Array<{ 
    monthNumber: number
    meals?: Array<{ food: string }>
    specificFood?: string
    foodGroup?: string 
  }>
): ShoppingItem[] {
  // Filtrar los días del mes específico
  const monthSteps = introSteps.filter(step => step.monthNumber === month)
  
  // Obtener los alimentos de ese mes
  const foodsNeeded: Record<string, { count: number; category: string }> = {}
  
  monthSteps.forEach(step => {
    // Obtener alimentos de las comidas (nueva estructura)
    if (step.meals && step.meals.length > 0) {
      step.meals.forEach(meal => {
        if (meal.food) {
          const foods = meal.food.split('+').map(f => f.trim())
          foods.forEach(food => {
            if (food && !shouldSkipFood(food)) {
              const category = determineCategory(food)
              if (!foodsNeeded[food]) {
                foodsNeeded[food] = { count: 0, category }
              }
              foodsNeeded[food].count++
            }
          })
        }
      })
    }
    
    // También verificar specificFood para compatibilidad
    if (step.specificFood) {
      const foods = step.specificFood.split('+').map(f => f.trim())
      foods.forEach(food => {
        if (food && !shouldSkipFood(food)) {
          const category = step.foodGroup || determineCategory(food)
          if (!foodsNeeded[food]) {
            foodsNeeded[food] = { count: 0, category }
          }
          foodsNeeded[food].count++
        }
      })
    }
  })
  
  // Convertir a lista de compra con cantidades
  const shoppingList: ShoppingItem[] = []
  
  Object.entries(foodsNeeded).forEach(([food, info]) => {
    const shopInfo = foodShoppingInfo[food]
    if (shopInfo) {
      // Calcular cantidad necesaria (aprox 50g por comida para bebé)
      const gramsPerMeal = 50
      const totalGrams = info.count * gramsPerMeal
      const units = Math.ceil(totalGrams / shopInfo.unitWeight)
      
      shoppingList.push({
        name: food,
        category: shopInfo.category as ShoppingItem['category'],
        quantity: `${units} ${shopInfo.unit}${units > 1 ? 's' : ''} (~${totalGrams}g)`,
        quantityGrams: totalGrams,
        notes: `Conservación: ${shopInfo.shelfLife}`,
        icon: categoryIcons[shopInfo.category] || '🥣',
        month,
      })
    } else {
      // Si no tenemos info, agregar igualmente
      shoppingList.push({
        name: food,
        category: info.category as ShoppingItem['category'],
        quantity: `${info.count} porciones`,
        quantityGrams: info.count * 50,
        icon: categoryIcons[info.category] || '🥣',
        month,
      })
    }
  })
  
  // Ordenar por categoría
  const categoryOrder = ['Verduras', 'Frutas', 'Proteínas', 'Lácteos', 'Cereales', 'Legumbres', 'Otros']
  shoppingList.sort((a, b) => {
    return categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category)
  })
  
  return shoppingList
}

// Función auxiliar para determinar si se debe saltar un alimento
function shouldSkipFood(food: string): boolean {
  const skipFoods = [
    'Mezcla de verduras',
    'Combinaciones variadas',
    'Variedad de alimentos seguros',
    'Variedad con proteínas',
    'Menú variado',
    'Menú completo',
    'Comida familiar adaptada',
    'Dieta variada',
    'Frutas variadas',
    'Verduras variadas',
    'Lo que come la familia',
    'Opciones variadas',
    'Huevo completo',
    'Pescado blanco'
  ]
  return skipFoods.includes(food) || food.includes('o bien') || food.includes('Opción')
}

// Función auxiliar para determinar la categoría de un alimento
function determineCategory(food: string): string {
  const verduras = ['Calabacín', 'Calabaza', 'Zanahoria', 'Patata', 'Judías', 'Puerro', 'Verduras']
  const frutas = ['Pera', 'Manzana', 'Plátano', 'Aguacate', 'Melocotón', 'Fresa', 'Frutas']
  const proteinas = ['Pollo', 'Ternera', 'Merluza', 'Bacalao', 'Pescado', 'Huevo', 'Yema']
  const lacteos = ['Yogur', 'Queso']
  const cereales = ['Arroz', 'Avena', 'Pan', 'Pasta', 'Cereal', 'Maíz']
  const legumbres = ['Lentejas', 'Garbanzos', 'Judiones']
  
  for (const v of verduras) {
    if (food.includes(v)) return 'Verduras'
  }
  for (const f of frutas) {
    if (food.includes(f)) return 'Frutas'
  }
  for (const p of proteinas) {
    if (food.includes(p)) return 'Proteínas'
  }
  for (const l of lacteos) {
    if (food.includes(l)) return 'Lácteos'
  }
  for (const c of cereales) {
    if (food.includes(c)) return 'Cereales'
  }
  for (const l of legumbres) {
    if (food.includes(l)) return 'Legumbres'
  }
  
  return 'Otros'
}

// Calcular lista de compras para los próximos N días (función original mantenida)
export function calculateShoppingList(
  currentDay: number,
  daysToPlan: number = 15,
  introSteps: Array<{ 
    dayNumber: number
    weekNumber: number
    monthNumber?: number
    meals?: Array<{ food: string }>
    specificFood?: string
    foodGroup?: string 
  }>
): ShoppingItem[] {
  
  // Obtener los alimentos de los próximos días
  const foodsNeeded: Record<string, { count: number; category: string }> = {}
  
  for (let i = 0; i < daysToPlan; i++) {
    const targetDay = currentDay + i
    const step = introSteps[targetDay - 1] // Los días empiezan en 1
    
    if (step) {
      // Obtener alimentos de las comidas (nueva estructura)
      if (step.meals && step.meals.length > 0) {
        step.meals.forEach(meal => {
          if (meal.food) {
            const foods = meal.food.split('+').map(f => f.trim())
            foods.forEach(food => {
              if (food && !shouldSkipFood(food)) {
                const category = determineCategory(food)
                if (!foodsNeeded[food]) {
                  foodsNeeded[food] = { count: 0, category }
                }
                foodsNeeded[food].count++
              }
            })
          }
        })
      }
      
      // También verificar specificFood para compatibilidad
      if (step.specificFood) {
        const foods = step.specificFood.split('+').map(f => f.trim())
        foods.forEach(food => {
          if (food && !shouldSkipFood(food)) {
            const category = step.foodGroup || determineCategory(food)
            if (!foodsNeeded[food]) {
              foodsNeeded[food] = { count: 0, category }
            }
            foodsNeeded[food].count++
          }
        })
      }
    }
  }
  
  // Convertir a lista de compra con cantidades
  const shoppingList: ShoppingItem[] = []
  
  Object.entries(foodsNeeded).forEach(([food, info]) => {
    const shopInfo = foodShoppingInfo[food]
    if (shopInfo) {
      const gramsPerMeal = 50
      const totalGrams = info.count * gramsPerMeal
      const units = Math.ceil(totalGrams / shopInfo.unitWeight)
      
      shoppingList.push({
        name: food,
        category: shopInfo.category as ShoppingItem['category'],
        quantity: `${units} ${shopInfo.unit}${units > 1 ? 's' : ''} (~${totalGrams}g)`,
        quantityGrams: totalGrams,
        notes: `Conservación: ${shopInfo.shelfLife}`,
        icon: categoryIcons[shopInfo.category] || '🥣',
      })
    } else {
      shoppingList.push({
        name: food,
        category: info.category as ShoppingItem['category'],
        quantity: `${info.count} porciones`,
        quantityGrams: info.count * 50,
        icon: categoryIcons[info.category] || '🥣',
      })
    }
  })
  
  // Ordenar por categoría
  const categoryOrder = ['Verduras', 'Frutas', 'Proteínas', 'Lácteos', 'Cereales', 'Legumbres', 'Otros']
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

// Obtener todos los meses disponibles (6-24)
export function getAvailableMonths(): number[] {
  return [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
}

// Obtener lista de compras para un mes específico
export function getShoppingListForMonth(month: number, introSteps: Array<any>): ShoppingItem[] {
  return calculateShoppingListByMonth(month, introSteps)
}
