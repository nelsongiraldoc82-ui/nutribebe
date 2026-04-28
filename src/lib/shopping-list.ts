// Lista de compras organizada por MES
// Para bebés de 6 a 24 meses

export interface ShoppingItem {
  name: string
  category: 'Verduras' | 'Frutas' | 'Proteínas' | 'Cereales' | 'Lácteos' | 'Otros'
  quantity: string
  quantityGrams: number
  notes?: string
  icon: string
}

export interface MonthlyShoppingList {
  month: number
  label: string
  ageRange: string
  items: ShoppingItem[]
  weeklyBudget?: string
}

// Categorías con iconos
export const categoryIcons: Record<string, string> = {
  'Verduras': '🥕',
  'Frutas': '🍎',
  'Proteínas': '🍗',
  'Cereales': '🌾',
  'Lácteos': '🥛',
  'Otros': '🥣',
}

// Alimentos típicos por mes con cantidades semanales
const monthlyFoodRequirements: Record<number, {
  verduras: { item: string; grams: number; unit: string }[]
  frutas: { item: string; grams: number; unit: string }[]
  proteinas: { item: string; grams: number; unit: string }[]
  cereales: { item: string; grams: number; unit: string }[]
  lacteos: { item: string; grams: number; unit: string }[]
}> = {
  6: {
    verduras: [
      { item: 'Calabacín', grams: 400, unit: '2 unidades medianas' },
      { item: 'Calabaza', grams: 300, unit: '1 trozo mediano' },
      { item: 'Zanahoria', grams: 250, unit: '3 unidades' },
      { item: 'Patata', grams: 300, unit: '2 unidades' },
      { item: 'Judías verdes', grams: 200, unit: '1 manojo' },
    ],
    frutas: [
      { item: 'Pera', grams: 350, unit: '2 unidades' },
      { item: 'Manzana', grams: 350, unit: '2 unidades' },
      { item: 'Plátano', grams: 300, unit: '3 unidades' },
    ],
    proteinas: [],
    cereales: [
      { item: 'Cereales de arroz', grams: 100, unit: '1 caja pequeña' },
    ],
    lacteos: []
  },
  7: {
    verduras: [
      { item: 'Calabacín', grams: 350, unit: '2 unidades' },
      { item: 'Calabaza', grams: 250, unit: '1 trozo' },
      { item: 'Zanahoria', grams: 300, unit: '4 unidades' },
      { item: 'Patata', grams: 350, unit: '2-3 unidades' },
      { item: 'Judías verdes', grams: 200, unit: '1 manojo' },
      { item: 'Espinacas', grams: 150, unit: '1 paquete' },
    ],
    frutas: [
      { item: 'Pera', grams: 350, unit: '2 unidades' },
      { item: 'Manzana', grams: 350, unit: '2 unidades' },
      { item: 'Plátano', grams: 400, unit: '4 unidades' },
      { item: 'Aguacate', grams: 200, unit: '1 unidad' },
      { item: 'Melocotón', grams: 200, unit: '2 unidades' },
    ],
    proteinas: [
      { item: 'Pechuga de pollo', grams: 150, unit: '1 pechuga' },
      { item: 'Ternera magra', grams: 100, unit: '1 trozo pequeño' },
    ],
    cereales: [
      { item: 'Cereales de arroz', grams: 150, unit: '1 caja' },
      { item: 'Cereales de maíz', grams: 100, unit: '1 paquete' },
    ],
    lacteos: []
  },
  8: {
    verduras: [
      { item: 'Calabacín', grams: 400, unit: '2-3 unidades' },
      { item: 'Calabaza', grams: 300, unit: '1 trozo grande' },
      { item: 'Zanahoria', grams: 300, unit: '4 unidades' },
      { item: 'Patata', grams: 400, unit: '3 unidades' },
      { item: 'Judías verdes', grams: 200, unit: '1 manojo' },
      { item: 'Espinacas', grams: 200, unit: '1 paquete' },
      { item: 'Brócoli', grams: 200, unit: '1 ramita' },
    ],
    frutas: [
      { item: 'Pera', grams: 400, unit: '2-3 unidades' },
      { item: 'Manzana', grams: 400, unit: '2-3 unidades' },
      { item: 'Plátano', grams: 450, unit: '4-5 unidades' },
      { item: 'Aguacate', grams: 300, unit: '1-2 unidades' },
      { item: 'Melocotón', grams: 250, unit: '2 unidades' },
      { item: 'Albaricoque', grams: 200, unit: '4 unidades' },
    ],
    proteinas: [
      { item: 'Pechuga de pollo', grams: 200, unit: '1-2 pechugas' },
      { item: 'Ternera magra', grams: 150, unit: '1 trozo' },
      { item: 'Pavo', grams: 100, unit: '1 pechuga' },
    ],
    cereales: [
      { item: 'Cereales de arroz', grams: 150, unit: '1 caja' },
      { item: 'Cereales de maíz', grams: 150, unit: '1 paquete' },
      { item: 'Avena', grams: 100, unit: '1 paquete' },
    ],
    lacteos: []
  },
  9: {
    verduras: [
      { item: 'Variedad de verduras', grams: 600, unit: 'Mix semanal' },
      { item: 'Patata', grams: 400, unit: '3-4 unidades' },
      { item: 'Zanahoria', grams: 300, unit: '4 unidades' },
      { item: 'Brócoli', grams: 200, unit: '1 ramita' },
      { item: 'Coliflor', grams: 200, unit: '1 ramita' },
    ],
    frutas: [
      { item: 'Variedad de frutas', grams: 700, unit: 'Mix semanal' },
      { item: 'Plátano', grams: 500, unit: '5 unidades' },
      { item: 'Manzana', grams: 400, unit: '2-3 unidades' },
      { item: 'Pera', grams: 350, unit: '2 unidades' },
    ],
    proteinas: [
      { item: 'Pechuga de pollo', grams: 250, unit: '2 pechugas' },
      { item: 'Ternera magra', grams: 200, unit: '1-2 trozos' },
      { item: 'Pavo', grams: 150, unit: '1 pechuga' },
      { item: 'Jamón serrano (poco sal)', grams: 50, unit: '2-3 lonchas' },
    ],
    cereales: [
      { item: 'Cereales variados', grams: 200, unit: '2 cajas pequeñas' },
      { item: 'Pan (sin corteza)', grams: 150, unit: '4-5 rebanadas' },
      { item: 'Avena', grams: 150, unit: '1 paquete' },
    ],
    lacteos: [
      { item: 'Yogur natural', grams: 250, unit: '2 unidades' },
    ]
  },
  10: {
    verduras: [
      { item: 'Variedad de verduras', grams: 700, unit: 'Mix semanal' },
      { item: 'Tomate', grams: 200, unit: '2-3 unidades' },
      { item: 'Pepino', grams: 100, unit: '1/2 unidad' },
    ],
    frutas: [
      { item: 'Variedad de frutas', grams: 800, unit: 'Mix semanal' },
      { item: 'Fresas', grams: 150, unit: '1 taza' },
      { item: 'Ciruelas', grams: 150, unit: '3 unidades' },
    ],
    proteinas: [
      { item: 'Pollo', grams: 300, unit: '2 pechugas' },
      { item: 'Ternera', grams: 250, unit: '2 trozos' },
      { item: 'Huevo', grams: 100, unit: '2 unidades' },
      { item: 'Jamón serrano', grams: 50, unit: '2-3 lonchas' },
    ],
    cereales: [
      { item: 'Pan', grams: 200, unit: '1 barra pequeña' },
      { item: 'Pasta pequeña', grams: 150, unit: '1 paquete' },
      { item: 'Arroz', grams: 150, unit: '1 taza' },
    ],
    lacteos: [
      { item: 'Yogur natural', grams: 375, unit: '3 unidades' },
      { item: 'Queso fresco', grams: 100, unit: '1 tarrina' },
    ]
  },
  11: {
    verduras: [
      { item: 'Variedad de verduras', grams: 800, unit: 'Mix semanal' },
    ],
    frutas: [
      { item: 'Variedad de frutas', grams: 900, unit: 'Mix semanal' },
    ],
    proteinas: [
      { item: 'Pollo', grams: 300, unit: '2 pechugas' },
      { item: 'Ternera', grams: 250, unit: '2 trozos' },
      { item: 'Pescado blanco', grams: 200, unit: '1 filete' },
      { item: 'Huevo', grams: 150, unit: '3 unidades' },
    ],
    cereales: [
      { item: 'Pasta', grams: 200, unit: '1 paquete' },
      { item: 'Arroz', grams: 200, unit: '1 taza' },
      { item: 'Pan', grams: 250, unit: '1 barra' },
      { item: 'Cuscús', grams: 100, unit: '1 taza' },
    ],
    lacteos: [
      { item: 'Yogur', grams: 500, unit: '4 unidades' },
      { item: 'Queso fresco', grams: 150, unit: '1-2 tarrinas' },
      { item: 'Requesón', grams: 100, unit: '1 tarrina' },
    ]
  },
  12: {
    verduras: [
      { item: 'Todas las verduras', grams: 1000, unit: 'Variedad semanal' },
    ],
    frutas: [
      { item: 'Todas las frutas', grams: 1000, unit: 'Variedad semanal' },
    ],
    proteinas: [
      { item: 'Carne variada', grams: 400, unit: 'Pollo, ternera, pavo' },
      { item: 'Pescado', grams: 250, unit: 'Blanco y azul' },
      { item: 'Huevo', grams: 200, unit: '4 unidades' },
      { item: 'Lentejas', grams: 150, unit: '1 taza' },
      { item: 'Garbanzos', grams: 150, unit: '1 taza' },
    ],
    cereales: [
      { item: 'Pan integral', grams: 300, unit: '1 barra' },
      { item: 'Pasta', grams: 250, unit: '1 paquete' },
      { item: 'Arroz', grams: 200, unit: '1 taza' },
    ],
    lacteos: [
      { item: 'Leche de crecimiento', grams: 1000, unit: '1 litro' },
      { item: 'Yogur', grams: 500, unit: '4 unidades' },
      { item: 'Queso variado', grams: 150, unit: 'Varios tipos' },
    ]
  }
}

// Para meses 13-24, usar cantidades crecientes
for (let m = 13; m <= 24; m++) {
  const multiplier = 1 + (m - 12) * 0.1 // Aumentar 10% por mes
  
  monthlyFoodRequirements[m] = {
    verduras: [{ item: 'Variedad de verduras', grams: Math.round(1000 * multiplier), unit: 'Según preferencias' }],
    frutas: [{ item: 'Variedad de frutas', grams: Math.round(1000 * multiplier), unit: 'Según preferencias' }],
    proteinas: [
      { item: 'Carne/Pescado/Huevo', grams: Math.round(500 * multiplier), unit: 'Variedad' },
      { item: 'Legumbres', grams: Math.round(200 * multiplier), unit: '2-3 veces por semana' },
    ],
    cereales: [{ item: 'Pan, pasta, arroz, cereales', grams: Math.round(400 * multiplier), unit: 'Variedad' }],
    lacteos: [
      { item: 'Leche de crecimiento', grams: Math.round(1500 * multiplier), unit: '1.5 litros aprox' },
      { item: 'Yogur y queso', grams: Math.round(300 * multiplier), unit: 'Variedad' },
    ]
  }
}

// Calcular lista de compras por mes
export function calculateMonthlyShoppingList(month: number): MonthlyShoppingList {
  const requirements = monthlyFoodRequirements[month] || monthlyFoodRequirements[12]
  const items: ShoppingItem[] = []
  
  // Agregar verduras
  requirements.verduras.forEach(v => {
    items.push({
      name: v.item,
      category: 'Verduras',
      quantity: v.unit,
      quantityGrams: v.grams,
      icon: categoryIcons['Verduras'],
      notes: month < 9 ? 'Cocinar bien y triturar' : 'Puede ofrecer trozos pequeños'
    })
  })
  
  // Agregar frutas
  requirements.frutas.forEach(f => {
    items.push({
      name: f.item,
      category: 'Frutas',
      quantity: f.unit,
      quantityGrams: f.grams,
      icon: categoryIcons['Frutas'],
      notes: 'Lavar bien antes de usar'
    })
  })
  
  // Agregar proteínas
  requirements.proteinas.forEach(p => {
    items.push({
      name: p.item,
      category: 'Proteínas',
      quantity: p.unit,
      quantityGrams: p.grams,
      icon: categoryIcons['Proteínas'],
      notes: 'Cocinar completamente'
    })
  })
  
  // Agregar cereales
  requirements.cereales.forEach(c => {
    items.push({
      name: c.item,
      category: 'Cereales',
      quantity: c.unit,
      quantityGrams: c.grams,
      icon: categoryIcons['Cereales'],
      notes: month < 12 ? 'Sin gluten al principio' : 'Puede incluir integrales'
    })
  })
  
  // Agregar lácteos
  requirements.lacteos.forEach(l => {
    items.push({
      name: l.item,
      category: 'Lácteos',
      quantity: l.unit,
      quantityGrams: l.grams,
      icon: categoryIcons['Lácteos'],
      notes: month < 12 ? 'Solo lácteos fermentados (yogur, queso)' : 'Puede incluir leche de crecimiento'
    })
  })
  
  return {
    month,
    label: `Mes ${month}`,
    ageRange: getAgeRange(month),
    items,
    weeklyBudget: estimateBudget(month)
  }
}

function getAgeRange(month: number): string {
  if (month <= 6) return '6 meses'
  if (month <= 8) return '6-8 meses'
  if (month <= 10) return '8-10 meses'
  if (month <= 12) return '10-12 meses'
  if (month <= 18) return '12-18 meses'
  return '18-24 meses'
}

function estimateBudget(month: number): string {
  // Estimación aproximada en euros por semana
  if (month <= 7) return '15-20€/semana'
  if (month <= 10) return '20-25€/semana'
  if (month <= 12) return '25-30€/semana'
  return '30-40€/semana'
}

// Obtener todas las listas de compras
export function getAllMonthlyShoppingLists(): MonthlyShoppingList[] {
  const lists: MonthlyShoppingList[] = []
  for (let m = 6; m <= 24; m++) {
    lists.push(calculateMonthlyShoppingList(m))
  }
  return lists
}

// Calcular lista basada en día actual (mantener compatibilidad)
export function calculateShoppingList(
  currentDay: number,
  daysToPlan: number = 15,
  introSteps: any[]
): ShoppingItem[] {
  // Determinar el mes basado en el día
  const month = Math.min(24, Math.max(6, Math.floor(currentDay / 30) + 6))
  const monthlyList = calculateMonthlyShoppingList(month)
  return monthlyList.items
}

// Obtener período de compra (mantener compatibilidad)
export function getShoppingPeriod(currentDay: number): { start: number; end: number; period: number } {
  const month = Math.min(24, Math.max(6, Math.floor(currentDay / 30) + 6))
  return { 
    start: (month - 6) * 30 + 1, 
    end: (month - 5) * 30, 
    period: month 
  }
}
