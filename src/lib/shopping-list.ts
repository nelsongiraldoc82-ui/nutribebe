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
  totalGrams?: number // Cantidad total en gramos para el mes
  weeklyGrams?: number // Cantidad semanal promedio
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
  'Berenjena': { unitWeight: 250, unit: 'unidad mediana', shelfLife: '5-7 días refrigerado', category: 'Verduras', icon: '🍆' },
  
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
  'Pan de molde': { unitWeight: 50, unit: 'rebenada', shelfLife: '5-7 días (congelar)', category: 'Cereales', icon: '🍞' },
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
  'Yogur natural entero': 'Yogur natural',
  'Yogur': 'Yogur natural',
  'Frutas o verduras': null, // Skip this
  'Verduras': null, // Skip this as generic
  'Frutas': null, // Skip this as generic
}

// Cantidades típicas por ingrediente en las recetas (en gramos)
const typicalAmounts: Record<string, number> = {
  // Verduras
  'Calabacín': 100,
  'Calabaza': 100,
  'Zanahoria': 80,
  'Patata': 100,
  'Judías verdes': 80,
  'Puerro': 50,
  'Espinacas': 50,
  'Acelgas': 50,
  'Brócoli': 80,
  'Coliflor': 80,
  'Guisantes': 50,
  'Pimiento': 50,
  'Tomate': 80,
  'Pepino': 50,
  'Remolacha': 60,
  'Berenjena': 80,
  
  // Frutas
  'Pera': 100,
  'Manzana': 100,
  'Plátano': 60,
  'Aguacate': 50,
  'Melocotón': 80,
  'Fresa': 50,
  'Naranja': 100,
  'Mandarina': 60,
  'Uva': 40,
  'Melón': 80,
  'Sandía': 80,
  'Mango': 80,
  'Piña': 60,
  'Kiwi': 50,
  
  // Proteínas
  'Pollo': 40,
  'Ternera': 35,
  'Merluza': 40,
  'Bacalao': 40,
  'Pescado blanco': 40,
  'Lenguado': 35,
  'Lubina': 40,
  'Salmón': 40,
  'Huevo': 60,
  'Yema de huevo': 20,
  'Cordero': 35,
  'Cerdo': 35,
  'Jamón serrano': 20,
  'Jamón cocido': 20,
  
  // Lácteos
  'Yogur natural': 125,
  'Yogur': 125,
  'Queso fresco': 30,
  'Queso tipo burgos': 30,
  
  // Cereales
  'Arroz': 40,
  'Avena': 15,
  'Pasta': 30,
  'Pan integral': 25,
  'Pan de molde': 25,
  'Cuscús': 30,
  'Quinoa': 30,
  'Maíz': 40,
  
  // Legumbres
  'Lentejas': 40,
  'Garbanzos': 40,
  'Alubias blancas': 40,
  
  // Otros
  'Aceite de oliva': 5,
  'Mantequilla': 5,
  'Canela': 1,
}

// Alimentos típicos por mes según la edad del bebé
const monthlyFoodPlan: Record<number, {
  verduras: { name: string; gramsPerDay: number; frequency: number }[]
  frutas: { name: string; gramsPerDay: number; frequency: number }[]
  proteinas: { name: string; gramsPerDay: number; frequency: number }[]
  cereales: { name: string; gramsPerDay: number; frequency: number }[]
  lacteos: { name: string; gramsPerDay: number; frequency: number }[]
  legumbres: { name: string; gramsPerDay: number; frequency: number }[]
}> = {
  6: {
    verduras: [
      { name: 'Calabacín', gramsPerDay: 100, frequency: 12 },
      { name: 'Calabaza', gramsPerDay: 100, frequency: 10 },
      { name: 'Zanahoria', gramsPerDay: 80, frequency: 10 },
      { name: 'Patata', gramsPerDay: 100, frequency: 8 },
    ],
    frutas: [
      { name: 'Pera', gramsPerDay: 100, frequency: 10 },
      { name: 'Manzana', gramsPerDay: 100, frequency: 10 },
      { name: 'Plátano', gramsPerDay: 60, frequency: 8 },
    ],
    proteinas: [
      { name: 'Pollo', gramsPerDay: 40, frequency: 8 },
    ],
    cereales: [
      { name: 'Arroz', gramsPerDay: 40, frequency: 6 },
      { name: 'Avena', gramsPerDay: 15, frequency: 4 },
    ],
    lacteos: [],
    legumbres: [],
  },
  7: {
    verduras: [
      { name: 'Calabacín', gramsPerDay: 100, frequency: 10 },
      { name: 'Calabaza', gramsPerDay: 100, frequency: 8 },
      { name: 'Zanahoria', gramsPerDay: 80, frequency: 10 },
      { name: 'Patata', gramsPerDay: 100, frequency: 10 },
      { name: 'Judías verdes', gramsPerDay: 80, frequency: 6 },
      { name: 'Puerro', gramsPerDay: 50, frequency: 4 },
    ],
    frutas: [
      { name: 'Pera', gramsPerDay: 100, frequency: 8 },
      { name: 'Manzana', gramsPerDay: 100, frequency: 8 },
      { name: 'Plátano', gramsPerDay: 60, frequency: 10 },
      { name: 'Aguacate', gramsPerDay: 50, frequency: 4 },
    ],
    proteinas: [
      { name: 'Pollo', gramsPerDay: 50, frequency: 8 },
      { name: 'Ternera', gramsPerDay: 40, frequency: 4 },
    ],
    cereales: [
      { name: 'Arroz', gramsPerDay: 40, frequency: 8 },
      { name: 'Avena', gramsPerDay: 15, frequency: 6 },
    ],
    lacteos: [],
    legumbres: [],
  },
  8: {
    verduras: [
      { name: 'Calabacín', gramsPerDay: 100, frequency: 8 },
      { name: 'Calabaza', gramsPerDay: 100, frequency: 6 },
      { name: 'Zanahoria', gramsPerDay: 80, frequency: 8 },
      { name: 'Patata', gramsPerDay: 100, frequency: 10 },
      { name: 'Judías verdes', gramsPerDay: 80, frequency: 8 },
      { name: 'Espinacas', gramsPerDay: 50, frequency: 4 },
      { name: 'Brócoli', gramsPerDay: 80, frequency: 4 },
    ],
    frutas: [
      { name: 'Pera', gramsPerDay: 100, frequency: 6 },
      { name: 'Manzana', gramsPerDay: 100, frequency: 6 },
      { name: 'Plátano', gramsPerDay: 60, frequency: 8 },
      { name: 'Aguacate', gramsPerDay: 50, frequency: 6 },
      { name: 'Melocotón', gramsPerDay: 80, frequency: 4 },
    ],
    proteinas: [
      { name: 'Pollo', gramsPerDay: 50, frequency: 8 },
      { name: 'Ternera', gramsPerDay: 45, frequency: 6 },
      { name: 'Huevo', gramsPerDay: 60, frequency: 4 },
      { name: 'Merluza', gramsPerDay: 40, frequency: 3 },
    ],
    cereales: [
      { name: 'Arroz', gramsPerDay: 40, frequency: 8 },
      { name: 'Avena', gramsPerDay: 20, frequency: 6 },
      { name: 'Pasta', gramsPerDay: 30, frequency: 4 },
    ],
    lacteos: [
      { name: 'Yogur natural', gramsPerDay: 125, frequency: 6 },
    ],
    legumbres: [
      { name: 'Lentejas', gramsPerDay: 40, frequency: 4 },
    ],
  },
  9: {
    verduras: [
      { name: 'Calabacín', gramsPerDay: 100, frequency: 6 },
      { name: 'Zanahoria', gramsPerDay: 80, frequency: 8 },
      { name: 'Patata', gramsPerDay: 100, frequency: 10 },
      { name: 'Judías verdes', gramsPerDay: 80, frequency: 8 },
      { name: 'Espinacas', gramsPerDay: 50, frequency: 6 },
      { name: 'Brócoli', gramsPerDay: 80, frequency: 6 },
      { name: 'Guisantes', gramsPerDay: 50, frequency: 4 },
    ],
    frutas: [
      { name: 'Pera', gramsPerDay: 100, frequency: 5 },
      { name: 'Manzana', gramsPerDay: 100, frequency: 5 },
      { name: 'Plátano', gramsPerDay: 60, frequency: 10 },
      { name: 'Aguacate', gramsPerDay: 50, frequency: 6 },
      { name: 'Naranja', gramsPerDay: 100, frequency: 4 },
    ],
    proteinas: [
      { name: 'Pollo', gramsPerDay: 50, frequency: 8 },
      { name: 'Ternera', gramsPerDay: 45, frequency: 6 },
      { name: 'Huevo', gramsPerDay: 60, frequency: 6 },
      { name: 'Merluza', gramsPerDay: 45, frequency: 4 },
      { name: 'Salmón', gramsPerDay: 40, frequency: 2 },
    ],
    cereales: [
      { name: 'Arroz', gramsPerDay: 40, frequency: 8 },
      { name: 'Avena', gramsPerDay: 20, frequency: 6 },
      { name: 'Pasta', gramsPerDay: 30, frequency: 6 },
      { name: 'Pan integral', gramsPerDay: 25, frequency: 4 },
    ],
    lacteos: [
      { name: 'Yogur natural', gramsPerDay: 125, frequency: 8 },
      { name: 'Queso fresco', gramsPerDay: 30, frequency: 4 },
    ],
    legumbres: [
      { name: 'Lentejas', gramsPerDay: 50, frequency: 6 },
      { name: 'Garbanzos', gramsPerDay: 40, frequency: 4 },
    ],
  },
  10: {
    verduras: [
      { name: 'Calabacín', gramsPerDay: 100, frequency: 6 },
      { name: 'Zanahoria', gramsPerDay: 80, frequency: 6 },
      { name: 'Patata', gramsPerDay: 100, frequency: 8 },
      { name: 'Judías verdes', gramsPerDay: 80, frequency: 6 },
      { name: 'Espinacas', gramsPerDay: 60, frequency: 6 },
      { name: 'Brócoli', gramsPerDay: 80, frequency: 6 },
      { name: 'Tomate', gramsPerDay: 80, frequency: 4 },
    ],
    frutas: [
      { name: 'Pera', gramsPerDay: 100, frequency: 4 },
      { name: 'Manzana', gramsPerDay: 100, frequency: 4 },
      { name: 'Plátano', gramsPerDay: 60, frequency: 10 },
      { name: 'Naranja', gramsPerDay: 100, frequency: 6 },
      { name: 'Mango', gramsPerDay: 80, frequency: 4 },
    ],
    proteinas: [
      { name: 'Pollo', gramsPerDay: 55, frequency: 8 },
      { name: 'Ternera', gramsPerDay: 50, frequency: 6 },
      { name: 'Huevo', gramsPerDay: 60, frequency: 8 },
      { name: 'Merluza', gramsPerDay: 50, frequency: 4 },
      { name: 'Salmón', gramsPerDay: 45, frequency: 3 },
    ],
    cereales: [
      { name: 'Arroz', gramsPerDay: 45, frequency: 8 },
      { name: 'Avena', gramsPerDay: 20, frequency: 6 },
      { name: 'Pasta', gramsPerDay: 35, frequency: 6 },
      { name: 'Pan integral', gramsPerDay: 30, frequency: 6 },
    ],
    lacteos: [
      { name: 'Yogur natural', gramsPerDay: 125, frequency: 10 },
      { name: 'Queso fresco', gramsPerDay: 35, frequency: 6 },
    ],
    legumbres: [
      { name: 'Lentejas', gramsPerDay: 50, frequency: 6 },
      { name: 'Garbanzos', gramsPerDay: 50, frequency: 6 },
    ],
  },
  11: {
    verduras: [
      { name: 'Calabacín', gramsPerDay: 100, frequency: 5 },
      { name: 'Zanahoria', gramsPerDay: 80, frequency: 6 },
      { name: 'Patata', gramsPerDay: 100, frequency: 8 },
      { name: 'Judías verdes', gramsPerDay: 80, frequency: 6 },
      { name: 'Espinacas', gramsPerDay: 60, frequency: 6 },
      { name: 'Brócoli', gramsPerDay: 80, frequency: 6 },
      { name: 'Tomate', gramsPerDay: 80, frequency: 6 },
      { name: 'Pimiento', gramsPerDay: 50, frequency: 4 },
    ],
    frutas: [
      { name: 'Plátano', gramsPerDay: 60, frequency: 10 },
      { name: 'Naranja', gramsPerDay: 100, frequency: 8 },
      { name: 'Manzana', gramsPerDay: 100, frequency: 6 },
      { name: 'Mango', gramsPerDay: 80, frequency: 4 },
      { name: 'Fresa', gramsPerDay: 50, frequency: 4 },
    ],
    proteinas: [
      { name: 'Pollo', gramsPerDay: 60, frequency: 8 },
      { name: 'Ternera', gramsPerDay: 50, frequency: 6 },
      { name: 'Huevo', gramsPerDay: 60, frequency: 8 },
      { name: 'Merluza', gramsPerDay: 50, frequency: 4 },
      { name: 'Salmón', gramsPerDay: 50, frequency: 3 },
      { name: 'Jamón cocido', gramsPerDay: 20, frequency: 4 },
    ],
    cereales: [
      { name: 'Arroz', gramsPerDay: 50, frequency: 8 },
      { name: 'Avena', gramsPerDay: 25, frequency: 6 },
      { name: 'Pasta', gramsPerDay: 40, frequency: 8 },
      { name: 'Pan integral', gramsPerDay: 30, frequency: 8 },
    ],
    lacteos: [
      { name: 'Yogur natural', gramsPerDay: 125, frequency: 12 },
      { name: 'Queso fresco', gramsPerDay: 40, frequency: 8 },
    ],
    legumbres: [
      { name: 'Lentejas', gramsPerDay: 60, frequency: 6 },
      { name: 'Garbanzos', gramsPerDay: 50, frequency: 6 },
      { name: 'Alubias blancas', gramsPerDay: 40, frequency: 4 },
    ],
  },
  12: {
    verduras: [
      { name: 'Calabacín', gramsPerDay: 100, frequency: 4 },
      { name: 'Zanahoria', gramsPerDay: 80, frequency: 6 },
      { name: 'Patata', gramsPerDay: 100, frequency: 6 },
      { name: 'Judías verdes', gramsPerDay: 80, frequency: 6 },
      { name: 'Espinacas', gramsPerDay: 60, frequency: 6 },
      { name: 'Brócoli', gramsPerDay: 80, frequency: 6 },
      { name: 'Tomate', gramsPerDay: 80, frequency: 8 },
      { name: 'Pimiento', gramsPerDay: 50, frequency: 6 },
    ],
    frutas: [
      { name: 'Plátano', gramsPerDay: 60, frequency: 12 },
      { name: 'Naranja', gramsPerDay: 100, frequency: 10 },
      { name: 'Manzana', gramsPerDay: 100, frequency: 6 },
      { name: 'Mango', gramsPerDay: 80, frequency: 4 },
      { name: 'Fresa', gramsPerDay: 50, frequency: 6 },
      { name: 'Uva', gramsPerDay: 40, frequency: 4 },
    ],
    proteinas: [
      { name: 'Pollo', gramsPerDay: 60, frequency: 8 },
      { name: 'Ternera', gramsPerDay: 55, frequency: 6 },
      { name: 'Huevo', gramsPerDay: 60, frequency: 10 },
      { name: 'Merluza', gramsPerDay: 55, frequency: 4 },
      { name: 'Salmón', gramsPerDay: 50, frequency: 4 },
      { name: 'Jamón cocido', gramsPerDay: 25, frequency: 6 },
    ],
    cereales: [
      { name: 'Arroz', gramsPerDay: 50, frequency: 8 },
      { name: 'Avena', gramsPerDay: 25, frequency: 8 },
      { name: 'Pasta', gramsPerDay: 45, frequency: 8 },
      { name: 'Pan integral', gramsPerDay: 35, frequency: 10 },
    ],
    lacteos: [
      { name: 'Yogur natural', gramsPerDay: 125, frequency: 14 },
      { name: 'Queso fresco', gramsPerDay: 40, frequency: 10 },
    ],
    legumbres: [
      { name: 'Lentejas', gramsPerDay: 60, frequency: 6 },
      { name: 'Garbanzos', gramsPerDay: 55, frequency: 6 },
      { name: 'Alubias blancas', gramsPerDay: 50, frequency: 4 },
    ],
  },
}

// Generar plan mensual para meses 13-24 basado en el mes 12 pero con más cantidad
function generateMonthPlan(month: number): typeof monthlyFoodPlan[6] {
  const basePlan = monthlyFoodPlan[12] || monthlyFoodPlan[6]
  const multiplier = 1 + (month - 12) * 0.03 // Aumento gradual del 3% por mes
  
  return {
    verduras: basePlan.verduras.map(v => ({ ...v, gramsPerDay: Math.round(v.gramsPerDay * multiplier) })),
    frutas: basePlan.frutas.map(f => ({ ...f, gramsPerDay: Math.round(f.gramsPerDay * multiplier) })),
    proteinas: basePlan.proteinas.map(p => ({ ...p, gramsPerDay: Math.round(p.gramsPerDay * multiplier) })),
    cereales: basePlan.cereales.map(c => ({ ...c, gramsPerDay: Math.round(c.gramsPerDay * multiplier) })),
    lacteos: basePlan.lacteos.map(l => ({ ...l, gramsPerDay: Math.round(l.gramsPerDay * multiplier) })),
    legumbres: basePlan.legumbres.map(l => ({ ...l, gramsPerDay: Math.round(l.gramsPerDay * multiplier) })),
  }
}

// Obtener el plan de alimentos para un mes específico
function getMonthFoodPlan(month: number): typeof monthlyFoodPlan[6] {
  if (monthlyFoodPlan[month]) {
    return monthlyFoodPlan[month]
  }
  return generateMonthPlan(month)
}

// Extraer cantidad en gramos del texto de la receta
function extractGramsFromRecipe(recipeText: string, foodName: string): number {
  // Patrones para buscar cantidades
  const patterns = [
    new RegExp(`(\\d+)\\s*g\\s*(?:de\\s+)?${foodName}`, 'i'),
    new RegExp(`(\\d+)\\s*gramos\\s*(?:de\\s+)?${foodName}`, 'i'),
    new RegExp(`${foodName}[^\\d]*(\\d+)\\s*g`, 'i'),
    new RegExp(`(\\d+)\\s*${foodName}`, 'i'),
  ]
  
  for (const pattern of patterns) {
    const match = recipeText.match(pattern)
    if (match) {
      return parseInt(match[1])
    }
  }
  
  // Si no encontramos cantidad, usar valor típico
  return typicalAmounts[foodName] || 50
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
  let monthSteps = introSteps.filter(step => step.monthNumber === month)
  
  // Si hay menos de 25 días para este mes, usamos el plan mensual predefinido
  // para asegurar que la lista de compras esté completa
  const usePredefinedPlan = monthSteps.length < 25
  
  // Usar el plan mensual predefinido para calcular las cantidades
  const monthPlan = getMonthFoodPlan(month)
  
  // Obtener los alimentos de ese mes con cantidades
  const foodsNeeded: Record<string, { 
    totalGrams: number
    count: number
    category: string
    days: string[]
    recipes: string[]
  }> = {}
  
  // Procesar el plan mensual (SIEMPRE usar para asegurar lista completa)
  const allCategories = ['verduras', 'frutas', 'proteinas', 'cereales', 'lacteos', 'legumbres'] as const
  const categoryMapping: Record<string, string> = {
    verduras: 'Verduras',
    frutas: 'Frutas',
    proteinas: 'Proteínas',
    cereales: 'Cereales',
    lacteos: 'Lácteos',
    legumbres: 'Legumbres',
  }
  
  // SIEMPRE procesar el plan mensual para tener lista de compras completa
  allCategories.forEach(cat => {
    const items = monthPlan[cat]
    if (items) {
      items.forEach(item => {
        // Calcular gramos totales = gramos por día × frecuencia en el mes
        const totalGramsForMonth = item.gramsPerDay * item.frequency
        
        if (!foodsNeeded[item.name]) {
          foodsNeeded[item.name] = { 
            totalGrams: 0, 
            count: 0, 
            category: categoryMapping[cat], 
            days: [],
            recipes: []
          }
        }
        foodsNeeded[item.name].totalGrams += totalGramsForMonth
        foodsNeeded[item.name].count += item.frequency
      })
    }
  })
  
  // También procesar los datos de introSteps si están disponibles
  if (monthSteps.length > 0) {
    monthSteps.forEach(step => {
      const dayLabel = step.dayNumber ? `Día ${step.dayNumber}` : step.id
      
      // Obtener alimentos de las comidas
      if (step.meals && step.meals.length > 0) {
        step.meals.forEach(meal => {
          if (meal.food && meal.recipe) {
            // Separar alimentos por + o ,
            const foods = meal.food.split(/[+,]/).map(f => f.trim()).filter(f => f.length > 0)
            
            foods.forEach(food => {
              if (food && !shouldSkipFood(food)) {
                const normalizedFood = normalizeFoodName(food)
                if (!normalizedFood) return // Skip if null
                
                const category = determineCategory(normalizedFood)
                
                // Extraer gramos de la receta o usar valor típico
                const grams = extractGramsFromRecipe(meal.recipe, normalizedFood)
                
                if (!foodsNeeded[normalizedFood]) {
                  foodsNeeded[normalizedFood] = { 
                    totalGrams: 0, 
                    count: 0, 
                    category, 
                    days: [],
                    recipes: []
                  }
                }
                foodsNeeded[normalizedFood].totalGrams += grams
                foodsNeeded[normalizedFood].count++
                if (!foodsNeeded[normalizedFood].days.includes(dayLabel)) {
                  foodsNeeded[normalizedFood].days.push(dayLabel)
                }
                if (!foodsNeeded[normalizedFood].recipes.includes(meal.title)) {
                  foodsNeeded[normalizedFood].recipes.push(meal.title)
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
            if (!normalizedFood) return // Skip if null
            
            const category = step.foodGroup || determineCategory(normalizedFood)
            const grams = typicalAmounts[normalizedFood] || 50
            
            if (!foodsNeeded[normalizedFood]) {
              foodsNeeded[normalizedFood] = { 
                totalGrams: 0, 
                count: 0, 
                category, 
                days: [],
                recipes: []
              }
            }
            foodsNeeded[normalizedFood].totalGrams += grams
            foodsNeeded[normalizedFood].count++
            if (!foodsNeeded[normalizedFood].days.includes(dayLabel)) {
              foodsNeeded[normalizedFood].days.push(dayLabel)
            }
          }
        })
      }
    })
  }
  
  // Convertir a lista de compra con cantidades precisas
  const shoppingList: ShoppingItem[] = []
  
  Object.entries(foodsNeeded).forEach(([food, info]) => {
    if (info.totalGrams === 0) return
    
    const shopInfo = foodShoppingInfo[food]
    const totalGrams = info.totalGrams
    const usageCount = info.count
    const uniqueDays = info.days.length
    
    if (shopInfo) {
      // Calcular unidades necesarias (con un 20% extra por seguridad)
      const adjustedGrams = Math.ceil(totalGrams * 1.2)
      const units = Math.ceil(adjustedGrams / shopInfo.unitWeight)
      const weeklyGrams = Math.round(totalGrams / 4)
      
      // Formatear cantidad de forma clara - DESTACAR CANTIDAD TOTAL DEL MES
      let quantityText = ''
      if (shopInfo.unit.includes('unidad') || shopInfo.unit.includes('trozo') || shopInfo.unit.includes('filete') || shopInfo.unit.includes('pechuga')) {
        quantityText = `${units} ${shopInfo.unit}${units > 1 ? 'es' : ''} = ${adjustedGrams}g TOTAL MES`
      } else if (shopInfo.unit.includes('paquete') || shopInfo.unit.includes('bote') || shopInfo.unit.includes('caja') || shopInfo.unit.includes('botella')) {
        quantityText = `${units} ${shopInfo.unit}${units > 1 ? 's' : ''} = ${adjustedGrams}g TOTAL MES`
      } else {
        quantityText = `${adjustedGrams}g TOTAL MES (~${units} ${shopInfo.unit}${units > 1 ? 's' : ''})`
      }
      
      shoppingList.push({
        name: food,
        category: shopInfo.category as ShoppingItem['category'],
        quantity: quantityText,
        quantityGrams: adjustedGrams,
        totalGrams: adjustedGrams,
        weeklyGrams,
        notes: `${usageCount} veces al mes | ${shopInfo.shelfLife}`,
        icon: shopInfo.icon,
        month,
        daysUsed: info.days.length > 0 ? info.days : undefined,
      })
    } else {
      // Si no tenemos info específica, agregar con estimación
      const adjustedGrams = Math.ceil(totalGrams * 1.2)
      const weeklyGrams = Math.round(totalGrams / 4)
      
      shoppingList.push({
        name: food,
        category: info.category as ShoppingItem['category'],
        quantity: `${adjustedGrams}g TOTAL MES`,
        quantityGrams: adjustedGrams,
        totalGrams: adjustedGrams,
        weeklyGrams,
        icon: categoryIcons[info.category] || '🥣',
        month,
        daysUsed: info.days.length > 0 ? info.days : undefined,
        notes: `${usageCount} veces al mes`,
      })
    }
  })
  
  // Ordenar por categoría y luego por cantidad total (descendente)
  const categoryOrder = ['Verduras', 'Frutas', 'Proteínas', 'Lácteos', 'Cereales', 'Legumbres', 'Otros']
  shoppingList.sort((a, b) => {
    const catA = categoryOrder.indexOf(a.category)
    const catB = categoryOrder.indexOf(b.category)
    if (catA !== catB) return catA - catB
    return (b.totalGrams || 0) - (a.totalGrams || 0)
  })
  
  return shoppingList
}

// Normalizar nombre del alimento
function normalizeFoodName(food: string): string | null {
  // Eliminar prefijos comunes
  let normalized = food
    .replace(/^(puré de|crema de|compota de|papilla de|trozos de|filete de)\s*/i, '')
    .replace(/^(medio|media|un|una|el|la)\s*/i, '')
    .trim()
  
  // Verificar aliases
  if (foodAliases[normalized] === null) {
    return null // Skip this food
  }
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
    'Leche materna a demanda', 'Pecho', 'Lactancia', 'Proteína',
    'Nuevos alimentos', 'Nuevos', 'Alimentos', 'Variedad',
    'Aceite de oliva virgen', 'Leche materna', 'Leche de fórmula',
    'Frutas o verduras', 'Fruta o verdura', 'Verduras variadas'
  ]
  
  const lowerFood = food.toLowerCase().trim()
  
  // Skip if matches pattern
  if (skipPatterns.some(pattern => lowerFood.includes(pattern.toLowerCase()))) {
    return true
  }
  
  // Skip if too short
  if (food.length < 3) {
    return true
  }
  
  // Skip if starts with number
  if (/^\d/.test(food)) {
    return true
  }
  
  // Skip generic single words that are categories
  const genericWords = ['fruta', 'frutas', 'verdura', 'verduras', 'carne', 'pescado', 
                        'leche', 'yema', 'clara', 'cereal', 'cereales', 'aceite',
                        'proteínas', 'lácteos', 'legumbres', 'otros']
  if (genericWords.includes(lowerFood)) {
    return true
  }
  
  return false
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
  totalGrams: number
} {
  const monthSteps = introSteps.filter(step => step.monthNumber === month)
  const shoppingList = calculateShoppingListByMonth(month, introSteps)
  
  let totalMeals = 0
  monthSteps.forEach(step => {
    if (step.meals) totalMeals += step.meals.length
  })
  
  // Si no hay datos de pasos, estimar comidas según el mes
  if (totalMeals === 0) {
    // Mes 6: ~30 días × 1-2 comidas = 45 comidas
    // Mes 7+: ~30 días × 2-3 comidas = 75 comidas
    totalMeals = month <= 7 ? 45 : 75
  }
  
  const categories: Record<string, number> = {}
  let totalGrams = 0
  shoppingList.forEach(item => {
    categories[item.category] = (categories[item.category] || 0) + 1
    totalGrams += item.totalGrams || item.quantityGrams
  })
  
  return {
    totalDays: 30, // Mes estándar de 30 días
    totalMeals,
    uniqueFoods: shoppingList.length,
    categories,
    totalGrams
  }
}

// Función para obtener un resumen textual de la lista
export function getShoppingListSummary(shoppingList: ShoppingItem[]): string {
  const categories: Record<string, { items: ShoppingItem[], totalGrams: number }> = {}
  
  shoppingList.forEach(item => {
    if (!categories[item.category]) {
      categories[item.category] = { items: [], totalGrams: 0 }
    }
    categories[item.category].items.push(item)
    categories[item.category].totalGrams += item.totalGrams || item.quantityGrams
  })
  
  let summary = '📋 LISTA DE COMPRAS MENSUAL\n\n'
  
  Object.entries(categories).forEach(([category, data]) => {
    summary += `${categoryIcons[category]} ${category.toUpperCase()}\n`
    data.items.forEach(item => {
      summary += `  • ${item.icon} ${item.name}: ${item.quantity}\n`
    })
    summary += '\n'
  })
  
  return summary
}
