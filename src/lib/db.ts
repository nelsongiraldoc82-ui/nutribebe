// Database configuration for NutriBebé
// For Netlify deployment, we use static data and localStorage/supabase

// Static data for breastfeeding guides
export const breastfeedingGuides = [
  {
    id: '1',
    ageMonths: 6,
    title: 'Inicio de alimentación complementaria',
    description: 'La lactancia materna sigue siendo la fuente principal de nutrición.',
    breastfeedingFrequency: '4-6 tomas al día',
    solidFoodFrequency: '1-2 comidas pequeñas',
    tips: JSON.stringify([
      'Ofrece el pecho antes de los sólidos',
      'Mantén la lactancia a demanda',
      'Los sólidos son complemento, no sustituto'
    ])
  },
  {
    id: '2',
    ageMonths: 7,
    title: 'Aumentando variedad',
    description: 'El bebé explora más texturas y sabores.',
    breastfeedingFrequency: '4-5 tomas al día',
    solidFoodFrequency: '2-3 comidas',
    tips: JSON.stringify([
      'El bebé puede mostrar preferencias',
      'Continúa ofreciendo variedad',
      'No fuerces la comida'
    ])
  },
  {
    id: '3',
    ageMonths: 8,
    title: 'Exploración activa',
    description: 'El bebé puede empezar a comer con los dedos.',
    breastfeedingFrequency: '3-4 tomas al día',
    solidFoodFrequency: '3 comidas + 1 snack',
    tips: JSON.stringify([
      'Introduce alimentos con los dedos (finger foods)',
      'Texturas más gruesas',
      'El bebé quiere explorar'
    ])
  },
  {
    id: '4',
    ageMonths: 9,
    title: 'Desarrollo de autonomía',
    description: 'El bebé quiere participar activamente.',
    breastfeedingFrequency: '3-4 tomas al día',
    solidFoodFrequency: '3 comidas + 2 snacks',
    tips: JSON.stringify([
      'Deja que el bebé intente usar la cuchara',
      'Ofrece agua en vaso de entrenamiento',
      'Mantén paciencia con los desastres'
    ])
  },
  {
    id: '5',
    ageMonths: 10,
    title: 'Transición gradual',
    description: 'Preparándose para más independencia.',
    breastfeedingFrequency: '2-3 tomas al día',
    solidFoodFrequency: '3 comidas + 2 snacks',
    tips: JSON.stringify([
      'Textura más similar a la comida familiar',
      'El bebé puede compartir más platos familiares',
      'Continúa evitando sal y azúcar'
    ])
  },
  {
    id: '6',
    ageMonths: 11,
    title: 'Casi un año',
    description: 'La dieta es cada vez más variada.',
    breastfeedingFrequency: '2-3 tomas al día',
    solidFoodFrequency: '3 comidas completas',
    tips: JSON.stringify([
      'El bebé come casi de todo (con precauciones)',
      'Mantén la lactancia materna',
      'Establece rutinas de comidas'
    ])
  },
  {
    id: '7',
    ageMonths: 12,
    title: 'Primer cumpleaños',
    description: '¡El bebé puede comer casi todo!',
    breastfeedingFrequency: '2+ tomas al día (según deseo)',
    solidFoodFrequency: '3 comidas + snacks',
    tips: JSON.stringify([
      'Puede introducir leche de vaca',
      'Mantén la lactancia materna si lo deseas',
      'Celebra este logro'
    ])
  }
]

// Static ingredients list
export const ingredientsList = [
  { id: '1', name: 'Calabacín', category: 'Verduras', ageMinMonths: 6 },
  { id: '2', name: 'Calabaza', category: 'Verduras', ageMinMonths: 6 },
  { id: '3', name: 'Zanahoria', category: 'Verduras', ageMinMonths: 6 },
  { id: '4', name: 'Patata', category: 'Verduras', ageMinMonths: 6 },
  { id: '5', name: 'Judías verdes', category: 'Verduras', ageMinMonths: 6 },
  { id: '6', name: 'Puerro', category: 'Verduras', ageMinMonths: 6 },
  { id: '7', name: 'Pera', category: 'Frutas', ageMinMonths: 6 },
  { id: '8', name: 'Manzana', category: 'Frutas', ageMinMonths: 6 },
  { id: '9', name: 'Plátano', category: 'Frutas', ageMinMonths: 6 },
  { id: '10', name: 'Aguacate', category: 'Frutas', ageMinMonths: 6 },
  { id: '11', name: 'Melocotón', category: 'Frutas', ageMinMonths: 6 },
  { id: '12', name: 'Pollo', category: 'Proteínas', ageMinMonths: 6 },
  { id: '13', name: 'Ternera', category: 'Proteínas', ageMinMonths: 6 },
  { id: '14', name: 'Cereales de arroz', category: 'Cereales', ageMinMonths: 6 },
  { id: '15', name: 'Maíz', category: 'Cereales', ageMinMonths: 6 },
  { id: '16', name: 'Avena', category: 'Cereales', ageMinMonths: 6 },
]

// Mock db object for compatibility
export const db = {
  breastfeedingGuide: {
    findMany: async ({ where, orderBy }: any) => {
      let results = [...breastfeedingGuides]
      if (where?.ageMonths) {
        results = results.filter(g => g.ageMonths === where.ageMonths)
      }
      return results
    }
  },
  ingredient: {
    findMany: async ({ where, orderBy }: any) => {
      let results = [...ingredientsList]
      if (where?.ageMinMonths) {
        results = results.filter(i => i.ageMinMonths <= where.ageMinMonths.lte)
      }
      return results
    }
  }
}
