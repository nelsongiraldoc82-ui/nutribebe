// Datos para calcular la lista de compras
// Basado en las necesidades de un bebé de 6-24 meses

export interface ShoppingItem {
  name: string
  category: 'Verduras' | 'Frutas' | 'Proteínas' | 'Cereales' | 'Lácteos' | 'Legumbres' | 'Otros'
  quantity: string
  quantityGrams: number
  notes?: string
  icon: string
  month?: number
  daysUsed?: string[] // Días del mes en que se usa
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

// Base de datos de alimentos con información de compra
export const foodShoppingInfo: Record<string, { 
  unitWeight: number, 
  unit: string, 
  shelfLife: string, 
  category: string,
  icon: string 
}> = {
  // ==================== VERDURAS ====================
  'Calabacín': { unitWeight: 200, unit: 'unidad mediana', shelfLife: '5-7 días refrigerado', category: 'Verduras', icon: '🥒' },
  'Calabaza': { unitWeight: 500, unit: 'trozo 500g', shelfLife: '7-10 días refrigerado', category: 'Verduras', icon: '🎃' },
  'Zanahoria': { unitWeight: 150, unit: 'unidad mediana', shelfLife: '10-14 días refrigerado', category: 'Verduras', icon: '🥕' },
  'Patata': { unitWeight: 150, unit: 'unidad mediana', shelfLife: '14-21 días lugar fresco', category: 'Verduras', icon: '🥔' },
  'Judías verdes': { unitWeight: 250, unit: 'manojo 250g', shelfLife: '3-5 días refrigerado', category: 'Verduras', icon: '🫛' },
  'Puerro': { unitWeight: 150, unit: 'unidad grande', shelfLife: '7-10 días refrigerado', category: 'Verduras', icon: '🧅' },
  'Espinacas': { unitWeight: 200, unit: 'bolsa 200g', shelfLife: '2-3 días refrigerado', category: 'Verduras', icon: '🥬' },
  'Acelgas': { unitWeight: 250, unit: 'manojo', shelfLife: '3-4 días refrigerado', category: 'Verduras', icon: '🥬' },
  'Brócoli': { unitWeight: 300, unit: 'unidad', shelfLife: '3-5 días refrigerado', category: 'Verduras', icon: '🥦' },
  'Coliflor': { unitWeight: 400, unit: 'unidad mediana', shelfLife: '4-6 días refrigerado', category: 'Verduras', icon: '🥦' },
  'Guisantes': { unitWeight: 200, unit: 'bolsa 200g', shelfLife: '2-3 días frescos', category: 'Verduras', icon: '🟢' },
  'Pimiento': { unitWeight: 150, unit: 'unidad mediana', shelfLife: '5-7 días refrigerado', category: 'Verduras', icon: '🫑' },
  'Tomate': { unitWeight: 150, unit: 'unidad mediana', shelfLife: '5-7 días refrigerado', category: 'Verduras', icon: '🍅' },
  'Pepino': { unitWeight: 200, unit: 'unidad', shelfLife: '5-7 días refrigerado', category: 'Verduras', icon: '🥒' },
  'Remolacha': { unitWeight: 150, unit: 'unidad', shelfLife: '10-14 días refrigerado', category: 'Verduras', icon: '🍠' },
  'Calabacín italiano': { unitWeight: 200, unit: 'unidad mediana', shelfLife: '5-7 días refrigerado', category: 'Verduras', icon: '🥒' },
  
  // ==================== FRUTAS ====================
  'Pera': { unitWeight: 180, unit: 'unidad mediana', shelfLife: '3-5 días maduro', category: 'Frutas', icon: '🍐' },
  'Manzana': { unitWeight: 180, unit: 'unidad mediana', shelfLife: '7-14 días refrigerado', category: 'Frutas', icon: '🍎' },
  'Plátano': { unitWeight: 120, unit: 'unidad', shelfLife: '3-5 días maduro', category: 'Frutas', icon: '🍌' },
  'Aguacate': { unitWeight: 200, unit: 'unidad', shelfLife: '2-4 días maduro', category: 'Frutas', icon: '🥑' },
  'Melocotón': { unitWeight: 150, unit: 'unidad', shelfLife: '3-5 días maduro', category: 'Frutas', icon: '🍑' },
  'Fresa': { unitWeight: 250, unit: 'bandeja 250g', shelfLife: '2-3 días refrigerado', category: 'Frutas', icon: '🍓' },
  'Naranja': { unitWeight: 200, unit: 'unidad mediana', shelfLife: '7-14 días refrigerado', category: 'Frutas', icon: '🍊' },
  'Mandarina': { unitWeight: 120, unit: 'unidad', shelfLife: '7-14 días refrigerado', category: 'Frutas', icon: '🍊' },
  'Uva': { unitWeight: 200, unit: 'racimo pequeño', shelfLife: '3-5 días refrigerado', category: 'Frutas', icon: '🍇' },
  'Melón': { unitWeight: 500, unit: 'trozo 500g', shelfLife: '3-5 días refrigerado', category: 'Frutas', icon: '🍈' },
  'Sandía': { unitWeight: 500, unit: 'trozo 500g', shelfLife: '2-3 días refrigerado', category: 'Frutas', icon: '🍉' },
  'Ciruela': { unitWeight: 100, unit: 'unidad', shelfLife: '3-5 días maduro', category: 'Frutas', icon: '🫐' },
  'Albaricoque': { unitWeight: 100, unit: 'unidad', shelfLife: '3-5 días maduro', category: 'Frutas', icon: '🍑' },
  'Mango': { unitWeight: 250, unit: 'unidad mediana', shelfLife: '3-5 días maduro', category: 'Frutas', icon: '🥭' },
  'Papaya': { unitWeight: 300, unit: 'trozo 300g', shelfLife: '2-3 días maduro', category: 'Frutas', icon: '🍈' },
  'Piña': { unitWeight: 300, unit: 'trozo 300g', shelfLife: '3-5 días refrigerado', category: 'Frutas', icon: '🍍' },
  'Kiwi': { unitWeight: 80, unit: 'unidad', shelfLife: '5-7 días refrigerado', category: 'Frutas', icon: '🥝' },
  
  // ==================== PROTEÍNAS ====================
  'Pollo': { unitWeight: 150, unit: 'pechuga', shelfLife: '2-3 días (congelar si es más)', category: 'Proteínas', icon: '🍗' },
  'Pechuga de pollo': { unitWeight: 150, unit: 'pechuga', shelfLife: '2-3 días (congelar)', category: 'Proteínas', icon: '🍗' },
  'Ternera': { unitWeight: 150, unit: 'trozo magro', shelfLife: '2-3 días (congelar si es más)', category: 'Proteínas', icon: '🥩' },
  'Carne magra': { unitWeight: 150, unit: 'trozo 150g', shelfLife: '2-3 días (congelar)', category: 'Proteínas', icon: '🥩' },
  'Cordero': { unitWeight: 150, unit: 'trozo magro', shelfLife: '2-3 días (congelar)', category: 'Proteínas', icon: '🍖' },
  'Cerdo': { unitWeight: 150, unit: 'lomo', shelfLife: '2-3 días (congelar)', category: 'Proteínas', icon: '🥓' },
  'Jamón serrano': { unitWeight: 50, unit: 'lonchas', shelfLife: '7-10 días refrigerado', category: 'Proteínas', icon: '🥓' },
  'Jamón cocido': { unitWeight: 50, unit: 'lonchas', shelfLife: '5-7 días refrigerado', category: 'Proteínas', icon: '🥓' },
  'Merluza': { unitWeight: 150, unit: 'filete', shelfLife: '1-2 días (congelar si es más)', category: 'Proteínas', icon: '🐟' },
  'Pescado blanco': { unitWeight: 150, unit: 'filete', shelfLife: '1-2 días (congelar)', category: 'Proteínas', icon: '🐟' },
  'Bacalao': { unitWeight: 150, unit: 'filete', shelfLife: '1-2 días (congelar)', category: 'Proteínas', icon: '🐟' },
  'Lenguado': { unitWeight: 120, unit: 'filete', shelfLife: '1-2 días (congelar)', category: 'Proteínas', icon: '🐟' },
  'Lubina': { unitWeight: 150, unit: 'filete', shelfLife: '1-2 días (congelar)', category: 'Proteínas', icon: '🐟' },
  'Dorada': { unitWeight: 150, unit: 'filete', shelfLife: '1-2 días (congelar)', category: 'Proteínas', icon: '🐟' },
  'Salmón': { unitWeight: 150, unit: 'filete', shelfLife: '1-2 días (congelar)', category: 'Proteínas', icon: '🐟' },
  'Atún': { unitWeight: 150, unit: 'filete fresco', shelfLife: '1-2 días (congelar)', category: 'Proteínas', icon: '🐟' },
  'Sardinas': { unitWeight: 100, unit: '2-3 unidades', shelfLife: '1-2 días frescas', category: 'Proteínas', icon: '🐟' },
  'Huevo': { unitWeight: 60, unit: 'unidad L', shelfLife: '21 días refrigerado', category: 'Proteínas', icon: '🥚' },
  'Yema de huevo': { unitWeight: 20, unit: 'yema', shelfLife: 'usar inmediatamente', category: 'Proteínas', icon: '🥚' },
  'Clara de huevo': { unitWeight: 40, unit: 'clara', shelfLife: 'usar inmediatamente', category: 'Proteínas', icon: '🥚' },
  
  // ==================== LÁCTEOS ====================
  'Yogur natural': { unitWeight: 125, unit: 'unidad', shelfLife: '14-21 días refrigerado', category: 'Lácteos', icon: '🥛' },
  'Yogur griego': { unitWeight: 125, unit: 'unidad', shelfLife: '14-21 días refrigerado', category: 'Lácteos', icon: '🥛' },
  'Queso fresco': { unitWeight: 100, unit: 'tarrina 100g', shelfLife: '7-10 días refrigerado', category: 'Lácteos', icon: '🧀' },
  'Queso tipo burgos': { unitWeight: 100, unit: 'porción 100g', shelfLife: '7-10 días refrigerado', category: 'Lácteos', icon: '🧀' },
  'Queso rallado': { unitWeight: 30, unit: 'bolsa 100g', shelfLife: '14 días refrigerado', category: 'Lácteos', icon: '🧀' },
  'Leche materna': { unitWeight: 120, unit: 'ml', shelfLife: '4h temp. ambiente', category: 'Lácteos', icon: '🍼' },
  'Leche de fórmula': { unitWeight: 120, unit: 'ml preparado', shelfLife: '2h preparado', category: 'Lácteos', icon: '🍼' },
  
  // ==================== CEREALES ====================
  'Arroz': { unitWeight: 200, unit: 'paquete 1kg', shelfLife: '30+ días lugar seco', category: 'Cereales', icon: '🍚' },
  'Arroz integral': { unitWeight: 200, unit: 'paquete 500g', shelfLife: '30+ días lugar seco', category: 'Cereales', icon: '🍚' },
  'Avena': { unitWeight: 250, unit: 'paquete 500g', shelfLife: '30+ días lugar seco', category: 'Cereales', icon: '🌾' },
  'Pan integral': { unitWeight: 50, unit: 'rebanada', shelfLife: '2-3 días (congelar)', category: 'Cereales', icon: '🍞' },
  'Pan de molde': { unitWeight: 50, unit: 'rebanada', shelfLife: '5-7 días (congelar)', category: 'Cereales', icon: '🍞' },
  'Pasta': { unitWeight: 100, unit: 'paquete 500g', shelfLife: '30+ días lugar seco', category: 'Cereales', icon: '🍝' },
  'Macarrones': { unitWeight: 100, unit: 'paquete 500g', shelfLife: '30+ días lugar seco', category: 'Cereales', icon: '🍝' },
  'Espaguetis': { unitWeight: 100, unit: 'paquete 500g', shelfLife: '30+ días lugar seco', category: 'Cereales', icon: '🍝' },
  'Cereales de arroz': { unitWeight: 200, unit: 'caja 200g', shelfLife: '30+ días lugar seco', category: 'Cereales', icon: '🥣' },
  'Cereales infantiles': { unitWeight: 200, unit: 'caja 200g', shelfLife: '30+ días lugar seco', category: 'Cereales', icon: '🥣' },
  'Maíz': { unitWeight: 100, unit: 'mazorca o lata', shelfLife: '2-3 días fresco', category: 'Cereales', icon: '🌽' },
  'Galletas integrales': { unitWeight: 30, unit: 'paquete', shelfLife: '14-21 días', category: 'Cereales', icon: '🍪' },
  'Pan de trigo': { unitWeight: 50, unit: 'rebanada', shelfLife: '2-3 días', category: 'Cereales', icon: '🍞' },
  'Cuscús': { unitWeight: 100, unit: 'paquete 500g', shelfLife: '30+ días lugar seco', category: 'Cereales', icon: '🍚' },
  'Mijo': { unitWeight: 100, unit: 'paquete 500g', shelfLife: '30+ días lugar seco', category: 'Cereales', icon: '🌾' },
  'Quinoa': { unitWeight: 100, unit: 'paquete 500g', shelfLife: '30+ días lugar seco', category: 'Cereales', icon: '🌾' },
  
  // ==================== LEGUMBRES ====================
  'Lentejas': { unitWeight: 80, unit: 'taza seca', shelfLife: '12+ meses lugar seco', category: 'Legumbres', icon: '🫘' },
  'Lentejas cocidas': { unitWeight: 200, unit: 'bote 400g', shelfLife: '2-3 días abierto', category: 'Legumbres', icon: '🫘' },
  'Garbanzos': { unitWeight: 80, unit: 'taza seca', shelfLife: '12+ meses lugar seco', category: 'Legumbres', icon: '🫘' },
  'Garbanzos cocidos': { unitWeight: 200, unit: 'bote 400g', shelfLife: '2-3 días abierto', category: 'Legumbres', icon: '🫘' },
  'Judiones': { unitWeight: 80, unit: 'taza seca', shelfLife: '12+ meses lugar seco', category: 'Legumbres', icon: '🫘' },
  'Alubias blancas': { unitWeight: 80, unit: 'taza seca', shelfLife: '12+ meses lugar seco', category: 'Legumbres', icon: '🫘' },
  
  // ==================== OTROS ====================
  'Aceite de oliva': { unitWeight: 100, unit: 'botella 500ml', shelfLife: '18+ meses lugar fresco', category: 'Otros', icon: '🫒' },
  'Aceite de oliva virgen extra': { unitWeight: 100, unit: 'botella 500ml', shelfLife: '18+ meses lugar fresco', category: 'Otros', icon: '🫒' },
  'Mantequilla': { unitWeight: 20, unit: 'tableta 250g', shelfLife: '30+ días refrigerado', category: 'Otros', icon: '🧈' },
  'Miel': { unitWeight: 30, unit: 'tarro 500g', shelfLife: '12+ meses', category: 'Otros', icon: '🍯' },
  'Canela': { unitWeight: 5, unit: 'bote especias', shelfLife: '12+ meses', category: 'Otros', icon: '🌿' },
  'Vainilla': { unitWeight: 5, unit: 'esencia', shelfLife: '12+ meses', category: 'Otros', icon: '🌿' },
  'Levadura': { unitWeight: 10, unit: 'sobre', shelfLife: '6-12 meses', category: 'Otros', icon: '🍞' },
  'Harina': { unitWeight: 100, unit: 'paquete 1kg', shelfLife: '6-12 meses', category: 'Otros', icon: '🌾' },
  'Harina de trigo': { unitWeight: 100, unit: 'paquete 1kg', shelfLife: '6-12 meses', category: 'Otros', icon: '🌾' },
  'Pan rallado': { unitWeight: 50, unit: 'paquete 250g', shelfLife: '6-12 meses', category: 'Otros', icon: '🍞' },
}

// Mapeo de nombres alternativos
const foodAliases: Record<string, string> = {
  'Pechuga': 'Pollo',
  'Carne picada': 'Ternera',
  'Pescado': 'Pescado blanco',
  'Verdura': 'Verduras variadas',
  'Fruta': 'Frutas variadas',
}

// Lista de compras organizada por MES (6-24 meses)
export function calculateShoppingListByMonth(
  month: number,
  introSteps: Array<{ 
    id: string
    monthNumber: number
    dayNumber?: number
    meals?: Array<{ type: string; title: string; food: string; portion: string; recipe: string }>
    specificFood?: string
    foodGroup?: string 
  }>
): ShoppingItem[] {
  // Filtrar los días del mes específico
  const monthSteps = introSteps.filter(step => step.monthNumber === month)
  
  if (monthSteps.length === 0) {
    console.log(`No hay datos para el mes ${month}`)
    return []
  }
  
  // Obtener los alimentos de ese mes con los días en que se usan
  const foodsNeeded: Record<string, { count: number; category: string; days: string[] }> = {}
  
  monthSteps.forEach(step => {
    const dayLabel = step.dayNumber ? `Día ${step.dayNumber}` : step.id
    
    // Obtener alimentos de las comidas (nueva estructura)
    if (step.meals && step.meals.length > 0) {
      step.meals.forEach(meal => {
        if (meal.food) {
          // Separar alimentos por + o ,
          const foods = meal.food.split(/[+,]/).map(f => f.trim()).filter(f => f.length > 0)
          foods.forEach(food => {
            if (food && !shouldSkipFood(food)) {
              const normalizedFood = normalizeFoodName(food)
              const category = determineCategory(normalizedFood)
              
              if (!foodsNeeded[normalizedFood]) {
                foodsNeeded[normalizedFood] = { count: 0, category, days: [] }
              }
              foodsNeeded[normalizedFood].count++
              if (!foodsNeeded[normalizedFood].days.includes(dayLabel)) {
                foodsNeeded[normalizedFood].days.push(dayLabel)
              }
            }
          })
        }
      })
    }
    
    // También verificar specificFood para compatibilidad
    if (step.specificFood) {
      const foods = step.specificFood.split(/[+,]/).map(f => f.trim()).filter(f => f.length > 0)
      foods.forEach(food => {
        if (food && !shouldSkipFood(food)) {
          const normalizedFood = normalizeFoodName(food)
          const category = step.foodGroup || determineCategory(normalizedFood)
          
          if (!foodsNeeded[normalizedFood]) {
            foodsNeeded[normalizedFood] = { count: 0, category, days: [] }
          }
          foodsNeeded[normalizedFood].count++
          if (!foodsNeeded[normalizedFood].days.includes(dayLabel)) {
            foodsNeeded[normalizedFood].days.push(dayLabel)
          }
        }
      })
    }
  })
  
  // Convertir a lista de compra con cantidades
  const shoppingList: ShoppingItem[] = []
  
  Object.entries(foodsNeeded).forEach(([food, info]) => {
    if (info.count === 0) return
    
    const shopInfo = foodShoppingInfo[food]
    if (shopInfo) {
      // Calcular cantidad necesaria (aprox 50g por comida para bebé)
      const gramsPerMeal = 50
      const totalGrams = info.count * gramsPerMeal
      const units = Math.ceil(totalGrams / shopInfo.unitWeight)
      
      shoppingList.push({
        name: food,
        category: shopInfo.category as ShoppingItem['category'],
        quantity: `${units} ${shopInfo.unit}${units > 1 ? 's' : ''} (~${totalGrams}g total)`,
        quantityGrams: totalGrams,
        notes: `Conservación: ${shopInfo.shelfLife}`,
        icon: shopInfo.icon,
        month,
        daysUsed: info.days,
      })
    } else {
      // Si no tenemos info, agregar igualmente con estimación
      shoppingList.push({
        name: food,
        category: info.category as ShoppingItem['category'],
        quantity: `${info.count} porciones (~${info.count * 50}g)`,
        quantityGrams: info.count * 50,
        icon: categoryIcons[info.category] || '🥣',
        month,
        daysUsed: info.days,
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

// Normalizar nombre del alimento
function normalizeFoodName(food: string): string {
  // Eliminar prefijos comunes
  let normalized = food
    .replace(/^(puré de|crema de|compota de|papilla de|trozos de|filete de)\s*/i, '')
    .trim()
  
  // Verificar aliases
  if (foodAliases[normalized]) {
    return foodAliases[normalized]
  }
  
  // Capitalizar primera letra
  return normalized.charAt(0).toUpperCase() + normalized.slice(1).toLowerCase()
}

// Función auxiliar para determinar si se debe saltar un alimento
function shouldSkipFood(food: string): boolean {
  const skipPatterns = [
    'Mezcla de', 'Combinaciones', 'Variedad de', 'Variedad con',
    'Menú variado', 'Menú completo', 'Comida familiar', 'Dieta variada',
    'Frutas variadas', 'Verduras variadas', 'Lo que come la familia',
    'Opciones variadas', 'Huevo completo', 'Pescado blanco genérico',
    'al gusto', 'opcional', 'o bien', 'Opción', 'Agua', 'Sal',
    'Leche materna a demanda', 'Pecho', 'Lactancia'
  ]
  
  const lowerFood = food.toLowerCase()
  return skipPatterns.some(pattern => lowerFood.includes(pattern.toLowerCase())) ||
         food.length < 2 ||
         /^\d/.test(food)
}

// Función auxiliar para determinar la categoría de un alimento
function determineCategory(food: string): string {
  const categories: Record<string, string[]> = {
    'Verduras': ['calabacín', 'calabaza', 'zanahoria', 'patata', 'judía', 'puerro', 
                 'espinaca', 'acelga', 'brócoli', 'coliflor', 'guisante', 'pimiento',
                 'tomate', 'pepino', 'remolacha', 'verdura', 'berenjena', 'calabac'],
    'Frutas': ['pera', 'manzana', 'plátano', 'aguacate', 'melocotón', 'fresa', 
               'naranja', 'mandarina', 'uva', 'melón', 'sandía', 'ciruela',
               'albaricoque', 'mango', 'papaya', 'piña', 'kiwi', 'fruta', 'arándano'],
    'Proteínas': ['pollo', 'ternera', 'merluza', 'bacalao', 'pescado', 'huevo', 
                  'yema', 'clara', 'carne', 'cordero', 'cerdo', 'jamón', 'lenguado',
                  'lubina', 'dorada', 'salmón', 'atún', 'sardina', 'pechuga', 'lomo'],
    'Lácteos': ['yogur', 'queso', 'leche', 'lácteo'],
    'Cereales': ['arroz', 'avena', 'pan', 'pasta', 'cereal', 'maíz', 'galleta',
                 'macarrón', 'espagueti', 'cuscús', 'mijo', 'quinoa', 'trigo'],
    'Legumbres': ['lenteja', 'garbanzo', 'judión', 'alubia', 'haba', 'legumbre'],
    'Otros': ['aceite', 'mantequilla', 'miel', 'canela', 'vainilla', 'levadura', 'harina']
  }
  
  const lowerFood = food.toLowerCase()
  
  for (const [category, keywords] of Object.entries(categories)) {
    if (keywords.some(keyword => lowerFood.includes(keyword))) {
      return category
    }
  }
  
  return 'Otros'
}

// Obtener todos los meses disponibles (6-24)
export function getAvailableMonths(): number[] {
  return [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
}

// Obtener lista de compras para un mes específico
export function getShoppingListForMonth(month: number, introSteps: Array<any>): ShoppingItem[] {
  return calculateShoppingListByMonth(month, introSteps)
}

// Obtener resumen del mes
export function getMonthSummary(month: number, introSteps: Array<any>): {
  totalDays: number
  totalMeals: number
  uniqueFoods: number
  categories: Record<string, number>
} {
  const monthSteps = introSteps.filter(step => step.monthNumber === month)
  const shoppingList = calculateShoppingListByMonth(month, introSteps)
  
  let totalMeals = 0
  monthSteps.forEach(step => {
    if (step.meals) totalMeals += step.meals.length
  })
  
  const categories: Record<string, number> = {}
  shoppingList.forEach(item => {
    categories[item.category] = (categories[item.category] || 0) + 1
  })
  
  return {
    totalDays: monthSteps.length,
    totalMeals,
    uniqueFoods: shoppingList.length,
    categories
  }
}
