// Datos estáticos de introducción de alimentos
// Basados en recomendaciones OMS, UNICEF y AEPAP

export interface IntroStep {
  id: string
  dayNumber: number
  ageRange: '6-8m' | '8-12m' | '12-24m'
  title: string
  description: string
  foodGroup?: string
  specificFood?: string
  portionSize?: string
  frequency?: string
  breastmilkNote?: string
  tips?: string
  warnings?: string
  recipe?: string
}

export const introStepsData: IntroStep[] = [
  // ==================== RANGO 6-8 MESES ====================
  // DÍA 1-3: Calabacín
  {
    id: 'day1',
    dayNumber: 1,
    ageRange: '6-8m',
    title: '¡Primer día de alimentación complementaria!',
    description: 'Hoy comienza una nueva etapa. Ofrece tu primera cucharada de puré de calabacín. Solo 2-3 cucharaditas es suficiente.',
    foodGroup: 'Verduras',
    specificFood: 'Calabacín',
    portionSize: '2-3 cucharaditas (10-15g)',
    frequency: 'Una sola comida (almuerzo)',
    breastmilkNote: 'Continúa con la lactancia materna a demanda. El puré es COMPLEMENTARIO, no sustituye ninguna toma de leche.',
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
    recipe: 'Lavar y pelar el calabacín. Cortar en trozos pequeños. Cocinar al vapor 10-15 minutos hasta que esté muy blando. Triturar con un poco de agua de cocción hasta obtener un puré muy suave y líquido.',
  },
  {
    id: 'day2',
    dayNumber: 2,
    ageRange: '6-8m',
    title: 'Segundo día con calabacín',
    description: 'Continúa ofreciendo puré de calabacín. Aumenta ligeramente la cantidad si el bebé lo acepta.',
    foodGroup: 'Verduras',
    specificFood: 'Calabacín',
    portionSize: '3-4 cucharadas (20-30g)',
    frequency: 'Una comida (almuerzo)',
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
    recipe: 'Igual que el día anterior. Puedes preparar un poco más de cantidad y congelar en cubitos lo que sobre.',
  },
  {
    id: 'day3',
    dayNumber: 3,
    ageRange: '6-8m',
    title: 'Tercer día con calabacín',
    description: 'Último día de prueba con calabacín. Si todo va bien, mañana podrás introducir un nuevo alimento.',
    foodGroup: 'Verduras',
    specificFood: 'Calabacín',
    portionSize: '4-5 cucharadas (30-40g)',
    frequency: 'Una comida (almuerzo)',
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
    recipe: 'Puré de calabacín. Tritura hasta obtener textura suave pero ligeramente más espesa que los primeros días.',
  },
  // DÍA 4-6: Calabaza
  {
    id: 'day4',
    dayNumber: 4,
    ageRange: '6-8m',
    title: 'Nuevo alimento: Calabaza',
    description: 'Hoy introducimos la calabaza. Es dulce y suave, ideal para bebés. Prepara un puré solo de calabaza.',
    foodGroup: 'Verduras',
    specificFood: 'Calabaza',
    portionSize: '2-3 cucharadas (15-20g)',
    frequency: 'Una comida (almuerzo)',
    breastmilkNote: 'Amamanta a demanda. La leche materna sigue siendo el alimento principal.',
    tips: JSON.stringify([
      'La calabaza es naturalmente dulce, suele gustar mucho',
      'Cocina al vapor para conservar nutrientes',
      'Tritura muy bien hasta que no queden grumos'
    ]),
    warnings: JSON.stringify([
      'Es un alimento nuevo: observa durante 2-3 días',
      'No mezcles con otros alimentos nuevos todavía'
    ]),
    recipe: 'Pelar la calabaza y quitar las semillas. Cortar en cubos pequeños. Cocinar al vapor 20 minutos hasta que esté muy blanda. Triturar con agua de cocción hasta obtener puré suave.',
  },
  {
    id: 'day5',
    dayNumber: 5,
    ageRange: '6-8m',
    title: 'Continúa con calabaza',
    description: 'Sigue probando la calabaza. El bebé se acostumbra a nuevos sabores.',
    foodGroup: 'Verduras',
    specificFood: 'Calabaza',
    portionSize: '3-4 cucharadas (25-35g)',
    frequency: 'Una comida (almuerzo)',
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
    recipe: 'Puré de calabaza. Puedes añadir un poco de calabacín ya aprobado para variar el sabor.',
  },
  {
    id: 'day6',
    dayNumber: 6,
    ageRange: '6-8m',
    title: 'Último día de calabaza',
    description: 'Finalizamos la prueba de calabaza. Si todo está bien, mañana un nuevo alimento.',
    foodGroup: 'Verduras',
    specificFood: 'Calabaza',
    portionSize: '4-5 cucharadas (35-45g)',
    frequency: 'Una comida (almuerzo)',
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
    recipe: 'Puré de calabaza solo o mezclado con calabacín (alimentos ya aprobados).',
  },
  // DÍA 7-9: Zanahoria
  {
    id: 'day7',
    dayNumber: 7,
    ageRange: '6-8m',
    title: 'Nuevo alimento: Zanahoria',
    description: 'Introducimos la zanahoria, rica en vitamina A. Debe estar muy bien cocida y triturada.',
    foodGroup: 'Verduras',
    specificFood: 'Zanahoria',
    portionSize: '2-3 cucharadas (15-20g)',
    frequency: 'Una comida (almuerzo)',
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
    recipe: 'Pelar y cortar la zanahoria en rodajas finas. Cocinar al vapor o hervir 25-30 minutos hasta que esté muy blanda. Triturar muy bien con agua de cocción.',
  },
  {
    id: 'day8',
    dayNumber: 8,
    ageRange: '6-8m',
    title: 'Continúa con zanahoria',
    description: 'Segundo día con zanahoria. Observa cómo responde el bebé.',
    foodGroup: 'Verduras',
    specificFood: 'Zanahoria',
    portionSize: '3-4 cucharadas (25-35g)',
    frequency: 'Una comida (almuerzo)',
    breastmilkNote: 'Ofrece el pecho después del puré para "cerrar" la comida. Es reconfortante para el bebé.',
    tips: JSON.stringify([
      'Puedes empezar a mezclar: zanahoria + calabacín',
      'Mezclar alimentos ya conocidos ayuda a aceptar nuevos sabores',
      'Proporción: 2 partes zanahoria, 1 parte calabacín'
    ]),
    warnings: JSON.stringify([
      'Solo mezcla alimentos ya probados y aprobados',
      'No introduzcas más de un alimento nuevo cada 3 días'
    ]),
    recipe: 'Puré de zanahoria solo o mezclado con calabacín ya aprobado.',
  },
  {
    id: 'day9',
    dayNumber: 9,
    ageRange: '6-8m',
    title: 'Mezcla de verduras',
    description: 'Prueba una mezcla suave de verduras ya conocidas.',
    foodGroup: 'Verduras',
    specificFood: 'Calabacín + Calabaza + Zanahoria',
    portionSize: '5-6 cucharadas (40-50g)',
    frequency: 'Una comida (almuerzo)',
    breastmilkNote: 'Mantén al menos 4-5 tomas de leche materna al día.',
    tips: JSON.stringify([
      'Esta mezcla es nutritiva y colorida',
      'El bebé empieza a conocer diferentes sabores',
      'Puedes preparar más cantidad y congelar en cubitos'
    ]),
    warnings: JSON.stringify([
      'Descongela solo la cantidad necesaria',
      'No recalentar más de una vez'
    ]),
    recipe: 'Cocinar las tres verduras al vapor por separado (zanahoria 25 min, calabaza 20 min, calabacín 10 min). Triturar juntas con agua de cocción.',
  },
  // DÍA 10-12: Patata y Judías verdes
  {
    id: 'day10',
    dayNumber: 10,
    ageRange: '6-8m',
    title: 'Nuevo alimento: Patata',
    description: 'Introducimos la patata, excelente base para purés.',
    foodGroup: 'Verduras',
    specificFood: 'Patata',
    portionSize: '2-3 cucharadas (20-30g)',
    frequency: 'Una comida (almuerzo)',
    breastmilkNote: 'La patata es muy saciante. Asegúrate de que el bebé siga tomando suficiente leche.',
    tips: JSON.stringify([
      'Cocina la patata al vapor o hervida',
      'Añade un poco de agua de cocción para obtener textura suave',
      'La patata puede quedar pegajosa si se bate mucho'
    ]),
    warnings: JSON.stringify([
      'No uses patatas verdes o con brotes',
      'Observa durante 2-3 días como con cualquier alimento nuevo'
    ]),
    recipe: 'Pelar la patata y cortar en cubos. Cocinar al vapor 15-20 minutos. Triturar con agua de cocción hasta obtener puré cremoso.',
  },
  {
    id: 'day11',
    dayNumber: 11,
    ageRange: '6-8m',
    title: 'Patata + verduras',
    description: 'Mezcla patata con verduras ya conocidas.',
    foodGroup: 'Verduras',
    specificFood: 'Patata + Calabacín',
    portionSize: '4-5 cucharadas (35-45g)',
    frequency: 'Una comida (almuerzo)',
    breastmilkNote: 'La combinación de patata y leche materna proporciona energía sostenida.',
    tips: JSON.stringify([
      'La patata suaviza sabores más fuertes',
      'Es una buena forma de introducir verduras menos aceptadas',
      'El puré debe quedar cremoso, no grumoso'
    ]),
    warnings: JSON.stringify([
      'No añadas mantequilla ni leche de vaca',
      'La leche materna o fórmula es suficiente'
    ]),
    recipe: 'Cocinar patata y calabacín al vapor. Triturar juntos con un poco de agua de cocción.',
  },
  {
    id: 'day12',
    dayNumber: 12,
    ageRange: '6-8m',
    title: 'Nuevo alimento: Judías verdes',
    description: 'Las judías verdes aportan fibra y vitaminas. Deben estar muy bien cocidas.',
    foodGroup: 'Verduras',
    specificFood: 'Judías verdes',
    portionSize: '2-3 cucharadas (15-20g)',
    frequency: 'Una comida (almuerzo)',
    breastmilkNote: 'Continúa con la lactancia a demanda. El bebé puede mostrar preferencia por el pecho antes de comer.',
    tips: JSON.stringify([
      'Quita las hebras y puntas antes de cocinar',
      'Cocina hasta que estén muy tiernas',
      'Tritura muy bien, pueden quedar hilos'
    ]),
    warnings: JSON.stringify([
      'Algunos bebés no aceptan el sabor al principio',
      'Mezcla con patata para suavizar'
    ]),
    recipe: 'Quitar puntas y hebras de las judías. Lavar bien. Cocinar al vapor 15-20 minutos hasta que estén muy tiernas. Triturar muy bien, pasando por colador si quedan hilos.',
  },
  // DÍA 13-15: Puerro y Frutas
  {
    id: 'day13',
    dayNumber: 13,
    ageRange: '6-8m',
    title: 'Nuevo alimento: Puerro',
    description: 'El puerro aporta un sabor suave diferente. Ideal para caldos y purés.',
    foodGroup: 'Verduras',
    specificFood: 'Puerro',
    portionSize: '2-3 cucharadas (15-20g)',
    frequency: 'Una comida (almuerzo)',
    breastmilkNote: 'La lactancia materna aporta el 80-90% de los nutrientes necesarios a esta edad.',
    tips: JSON.stringify([
      'Usa solo la parte blanca, más suave',
      'El puerro da un sabor interesante a los purés',
      'Mezcla con patata para suavizar'
    ]),
    warnings: JSON.stringify([
      'Lava bien el puerro, puede tener tierra entre capas',
      'Cocina completamente para evitar irritación digestiva'
    ]),
    recipe: 'Cortar el puerro por la mitad y lavar bien entre capas. Usar solo la parte blanca. Cocinar al vapor 10-15 minutos. Triturar con patata o otras verduras.',
  },
  {
    id: 'day14',
    dayNumber: 14,
    ageRange: '6-8m',
    title: 'Mezcla completa de verduras',
    description: 'Prepara un puré con todas las verduras ya introducidas.',
    foodGroup: 'Verduras',
    specificFood: 'Mezcla de verduras',
    portionSize: '5-6 cucharadas (50-60g)',
    frequency: 'Una comida (almuerzo)',
    breastmilkNote: 'El bebé debe seguir recibiendo entre 500-600ml de leche materna al día.',
    tips: JSON.stringify([
      'Proporción: 2 partes patata, 1 parte otras verduras',
      'Varía las proporciones para diferentes sabores',
      'El bebé está aprendiendo a comer, celebra sus logros'
    ]),
    warnings: JSON.stringify([
      'Si notas rechazo hacia algún alimento, reintrodúcelo más tarde',
      'No fuerces nunca al bebé a comer'
    ]),
    recipe: 'Cocinar patata, zanahoria, calabaza, calabacín y puerro al vapor. Triturar todo junto con agua de cocción hasta obtener puré cremoso.',
  },
  {
    id: 'day15',
    dayNumber: 15,
    ageRange: '6-8m',
    title: '¡Llegaron las frutas! - Pera',
    description: 'Introducimos la primera fruta: la pera. Dulce, digestiva y suave.',
    foodGroup: 'Frutas',
    specificFood: 'Pera',
    portionSize: '2-3 cucharadas (20-30g)',
    frequency: 'Una comida (puede ser merienda)',
    breastmilkNote: 'Puedes ofrecer fruta en la merienda y el puré de verduras en el almuerzo. Mantén la lactancia.',
    tips: JSON.stringify([
      'Usa peras maduras (variedad Conference o Blanquilla)',
      'Puedes ofrecerla cruda rallada o cocida en puré',
      'La pera es muy digestiva y suele gustar mucho'
    ]),
    warnings: JSON.stringify([
      'Observa si hay reacciones como en cualquier alimento nuevo',
      'La fruta cruda tiene más vitaminas pero cocida es más digestiva'
    ]),
    recipe: 'Pelar la pera y quitar el corazón. Opción 1: Rallar cruda para ofrecer inmediatamente. Opción 2: Cocinar al vapor 10 minutos y triturar para puré.',
  },
  // DÍA 16-18: Más frutas
  {
    id: 'day16',
    dayNumber: 16,
    ageRange: '6-8m',
    title: 'Continúa con pera',
    description: 'El bebé se acostumbra al dulzor natural de la fruta.',
    foodGroup: 'Frutas',
    specificFood: 'Pera',
    portionSize: '3-4 cucharadas (30-40g)',
    frequency: 'Una comida (merienda)',
    breastmilkNote: 'Después de la fruta, ofrece el pecho. El bebé puede querer menos leche.',
    tips: JSON.stringify([
      'Varía entre pera cruda rallada y cocida',
      'Puedes añadir un poco de cereales de arroz para espesar',
      'La fruta es un excelente postre o merienda'
    ]),
    warnings: JSON.stringify([
      'No añadas azúcar ni miel',
      'La fruta ya es dulce naturalmente'
    ]),
    recipe: 'Pera madura rallada o en puré. Puedes mezclar con cereales de arroz.',
  },
  {
    id: 'day17',
    dayNumber: 17,
    ageRange: '6-8m',
    title: 'Nuevo alimento: Manzana',
    description: 'La manzana es suave y versátil. Cocida es más digestiva al principio.',
    foodGroup: 'Frutas',
    specificFood: 'Manzana',
    portionSize: '2-3 cucharadas (20-30g)',
    frequency: 'Una comida (merienda)',
    breastmilkNote: 'La vitamina C de la manzana ayuda a absorber el hierro de la leche materna.',
    tips: JSON.stringify([
      'Usa manzanas tipo Golden o Reineta, más suaves',
      'Cocina al vapor con piel y luego retírela',
      'La manzana cocida es ideal para empezar'
    ]),
    warnings: JSON.stringify([
      'La manzana cruda puede ser difícil de digerir al principio',
      'Empieza con manzana cocida'
    ]),
    recipe: 'Pelar y descorazonar la manzana. Cortar en trozos. Cocinar al vapor 15 minutos. Triturar hasta obtener compota suave.',
  },
  {
    id: 'day18',
    dayNumber: 18,
    ageRange: '6-8m',
    title: 'Mezcla de frutas',
    description: 'Combina pera y manzana para una papilla deliciosa.',
    foodGroup: 'Frutas',
    specificFood: 'Pera + Manzana',
    portionSize: '4-5 cucharadas (40-50g)',
    frequency: 'Una comida (merienda)',
    breastmilkNote: 'Ahora el bebé tiene dos comidas al día: verduras (almuerzo) y frutas (merienda).',
    tips: JSON.stringify([
      'Mezcla mitad pera, mitad manzana',
      'Puedes triturar juntas o por separado',
      'Añade cereales de arroz si quieres más consistencia'
    ]),
    warnings: JSON.stringify([
      'No ofrezcas zumos, solo fruta triturada',
      'Los zumos no tienen fibra y pueden causar diarrea'
    ]),
    recipe: 'Cocinar manzana al vapor. Triturar con pera rallada fresca o cocida. Mezclar bien.',
  },
  // DÍA 19-21: Plátano y Aguacate
  {
    id: 'day19',
    dayNumber: 19,
    ageRange: '6-8m',
    title: 'Nuevo alimento: Plátano',
    description: 'El plátano es muy nutritivo y fácil de preparar. No necesita cocción.',
    foodGroup: 'Frutas',
    specificFood: 'Plátano',
    portionSize: 'Medio plátano pequeño triturado (30-40g)',
    frequency: 'Una comida (merienda)',
    breastmilkNote: 'El plátano es muy saciante. Asegúrate de que el bebé siga tomando leche.',
    tips: JSON.stringify([
      'Tritura con un tenedor, no necesita batidora',
      'El plátano maduro es más dulce y digestivo',
      'Se oxida rápido, prepáralo justo antes de darlo'
    ]),
    warnings: JSON.stringify([
      'El plátano puede estreñir si se da en exceso',
      'No des más de medio plátano al día'
    ]),
    recipe: 'Pelar el plátano maduro. Aplastar con un tenedor hasta obtener puré. Servir inmediatamente. También puedes mezclar con leche materna para más liquidez.',
  },
  {
    id: 'day20',
    dayNumber: 20,
    ageRange: '6-8m',
    title: 'Papilla de tres frutas',
    description: 'Combina las tres frutas ya conocidas.',
    foodGroup: 'Frutas',
    specificFood: 'Pera + Manzana + Plátano',
    portionSize: '5-6 cucharadas (50-60g)',
    frequency: 'Una comida (merienda)',
    breastmilkNote: 'Esta papilla es muy nutritiva y energética. El bebé puede dormir mejor por las noches.',
    tips: JSON.stringify([
      'Proporción: 1/3 de cada fruta',
      'El plátano aporta cremosidad',
      'Puedes preparar y congelar en cubitos (sin el plátano)'
    ]),
    warnings: JSON.stringify([
      'El plátano congelado pierde textura, mejor fresco',
      'Descongela la mezcla de pera-manzana y añade plátano fresco'
    ]),
    recipe: 'Cocinar manzana y pera al vapor. Triturar juntas. Añadir plátano aplastado y mezclar bien.',
  },
  {
    id: 'day21',
    dayNumber: 21,
    ageRange: '6-8m',
    title: 'Nuevo alimento: Aguacate',
    description: 'El aguacate es único: una fruta rica en grasas saludables.',
    foodGroup: 'Frutas',
    specificFood: 'Aguacate',
    portionSize: '2-3 cucharadas (20-30g)',
    frequency: 'Una comida (merienda)',
    breastmilkNote: 'Las grasas del aguacate son excelentes para el desarrollo cerebral, igual que la leche materna.',
    tips: JSON.stringify([
      'Tritura con un tenedor, textura cremosa natural',
      'El aguacate debe estar maduro pero no pasado',
      'Puedes mezclarlo con plátano para más dulzor'
    ]),
    warnings: JSON.stringify([
      'El aguacate se oxida muy rápido (se pone negro)',
      'Añade unas gotas de limón si vas a guardar un rato',
      'Sirve inmediatamente si es posible'
    ]),
    recipe: 'Cortar el aguacate por la mitad, quitar el hueso. Sacar la pulpa con una cuchara. Aplastar con un tenedor hasta obtener puré cremoso. Servir inmediatamente.',
  },
  // DÍA 22-24: Cereales
  {
    id: 'day22',
    dayNumber: 22,
    ageRange: '6-8m',
    title: 'Nuevo alimento: Cereales de arroz',
    description: 'Los cereales de arroz (sin gluten) son ideales para espesar purés y papillas.',
    foodGroup: 'Cereales',
    specificFood: 'Cereales de arroz',
    portionSize: '1-2 cucharadas (5-10g) en el puré',
    frequency: 'Añadir al almuerzo o merienda',
    breastmilkNote: 'Puedes preparar los cereales con leche materna extraída para mayor aceptación.',
    tips: JSON.stringify([
      'Empieza con poca cantidad para que el bebé se acostumbre',
      'Espesan los purés y aportan energía',
      'El arroz no tiene gluten, es seguro'
    ]),
    warnings: JSON.stringify([
      'No uses cereales con gluten todavía (trigo, cebada, centeno)',
      'Los cereales de arroz son de digestión fácil'
    ]),
    recipe: 'Mezclar 1-2 cucharadas de cereales de arroz con leche materna, agua o el puré de frutas/verduras. Remover hasta obtener consistencia cremosa.',
  },
  {
    id: 'day23',
    dayNumber: 23,
    ageRange: '6-8m',
    title: 'Cereales con frutas',
    description: 'Añade cereales de arroz a la papilla de frutas.',
    foodGroup: 'Cereales',
    specificFood: 'Cereales de arroz + Frutas',
    portionSize: '2-3 cucharadas de cereales en la papilla',
    frequency: 'Una comida (merienda)',
    breastmilkNote: 'Los cereales aportan energía extra. El bebé puede dormir más tiempo por la noche.',
    tips: JSON.stringify([
      'La papilla quedará más espesa',
      'Ajusta la textura añadiendo más o menos cereales',
      'Puedes usar agua, leche materna o fórmula para preparar'
    ]),
    warnings: JSON.stringify([
      'No añadas azúcar ni miel a los cereales',
      'El sabor natural de la fruta es suficiente'
    ]),
    recipe: 'Preparar papilla de frutas (pera, manzana, plátano). Añadir cereales de arroz y mezclar hasta obtener consistencia deseada.',
  },
  {
    id: 'day24',
    dayNumber: 24,
    ageRange: '6-8m',
    title: 'Nuevo alimento: Melocotón',
    description: 'El melocotón aporta un sabor dulce y refrescante.',
    foodGroup: 'Frutas',
    specificFood: 'Melocotón',
    portionSize: '2-3 cucharadas (20-30g)',
    frequency: 'Una comida (merienda)',
    breastmilkNote: 'El melocotón es hidratante. En días calurosos es especialmente bueno.',
    tips: JSON.stringify([
      'Usa melocotones maduros y jugosos',
      'Pela bien antes de triturar',
      'Combina bien con manzana o pera'
    ]),
    warnings: JSON.stringify([
      'Algunos bebés pueden ser alérgicos al melocotón (raro)',
      'Observa si hay reacciones en piel alrededor de la boca'
    ]),
    recipe: 'Pelar el melocotón y quitar el hueso. Triturar crudo si está muy maduro, o cocinar al vapor 5 minutos si está más duro.',
  },
  // DÍA 25-27: Proteínas
  {
    id: 'day25',
    dayNumber: 25,
    ageRange: '6-8m',
    title: '¡Llegaron las proteínas! - Pollo',
    description: 'El pollo es la primera carne que introducimos. Suave y fácil de digerir.',
    foodGroup: 'Proteínas',
    specificFood: 'Pollo',
    portionSize: '20-30g de pollo en el puré',
    frequency: 'Una comida (almuerzo)',
    breastmilkNote: 'El hierro de la carne se absorbe mejor que el de las verduras. Combínalo con la lactancia.',
    tips: JSON.stringify([
      'Usa pechuga de pollo sin piel ni huesos',
      'Cuece bien y tritura con las verduras',
      'Empieza con poca cantidad para que acepte el sabor'
    ]),
    warnings: JSON.stringify([
      'La carne debe estar muy bien cocida',
      'Tritura completamente para evitar trozos',
      'No añadas sal'
    ]),
    recipe: 'Cortar la pechuga de pollo en trocitos. Cocinar al vapor o hervido 15-20 minutos hasta que esté bien cocido. Triturar con verduras y un poco de agua de cocción.',
  },
  {
    id: 'day26',
    dayNumber: 26,
    ageRange: '6-8m',
    title: 'Puré de pollo con verduras',
    description: 'Combina pollo con las verduras ya conocidas.',
    foodGroup: 'Proteínas',
    specificFood: 'Pollo + Verduras',
    portionSize: '30-40g de pollo + 50g verduras',
    frequency: 'Una comida (almuerzo)',
    breastmilkNote: 'El pollo aumenta la saciedad. El bebé puede dormir mejor.',
    tips: JSON.stringify([
      'Proporción: 1 parte pollo, 2 partes verduras',
      'El puré debe quedar cremoso',
      'Puedes usar el caldo de cocción para triturar'
    ]),
    warnings: JSON.stringify([
      'El caldo de pollo puede ser salado, usa poca cantidad',
      'Mejor triturar con agua o leche materna'
    ]),
    recipe: 'Cocinar pechuga de pollo al vapor. Cocinar verduras (patata, zanahoria, calabacín). Triturar todo junto con un poco de agua hasta obtener puré cremoso.',
  },
  {
    id: 'day27',
    dayNumber: 27,
    ageRange: '6-8m',
    title: 'Nuevo alimento: Ternera',
    description: 'La ternera es rica en hierro, esencial para el desarrollo.',
    foodGroup: 'Proteínas',
    specificFood: 'Ternera',
    portionSize: '20-30g de ternera en el puré',
    frequency: 'Una comida (almuerzo)',
    breastmilkNote: 'El hierro de la carne es de alta absorción. Importante junto con la lactancia.',
    tips: JSON.stringify([
      'Usa carne magra sin grasa',
      'Cocina bien y tritura finamente',
      'Combina con verduras ya conocidas'
    ]),
    warnings: JSON.stringify([
      'La ternera es más fuerte que el pollo',
      'Introdúcela gradualmente'
    ]),
    recipe: 'Usar carne magra de ternera. Cortar en trocitos pequeños. Cocinar bien (hervida o a la plancha). Triturar con verduras y agua.',
  },
  // DÍA 28-30: Resumen 6-8 meses
  {
    id: 'day28',
    dayNumber: 28,
    ageRange: '6-8m',
    title: 'Puré de ternera con verduras',
    description: 'Mezcla ternera con verduras para un puré nutritivo.',
    foodGroup: 'Proteínas',
    specificFood: 'Ternera + Verduras',
    portionSize: '30-40g de ternera + 50g verduras',
    frequency: 'Una comida (almuerzo)',
    breastmilkNote: 'Esta comida aporta mucho hierro. Excelente para el desarrollo.',
    tips: JSON.stringify([
      'La ternera combina bien con zanahoria y patata',
      'Aporta saciedad duradera',
      'El bebé puede dormir más tiempo'
    ]),
    warnings: JSON.stringify([
      'Alterna entre pollo y ternera',
      'Varía las proteínas durante la semana'
    ]),
    recipe: 'Cocinar ternera magra al vapor o hervida. Cocinar verduras. Triturar todo junto con agua hasta obtener puré cremoso.',
  },
  {
    id: 'day29',
    dayNumber: 29,
    ageRange: '6-8m',
    title: 'Nuevo alimento: Avena',
    description: 'La avena es un cereal nutritivo con fibra soluble.',
    foodGroup: 'Cereales',
    specificFood: 'Avena',
    portionSize: '1-2 cucharadas en papilla',
    frequency: 'Una comida (merienda)',
    breastmilkNote: 'La avena es energética y rica en fibra. Combina con leche materna.',
    tips: JSON.stringify([
      'Usa copos de avena finos o harina de avena',
      'Cocina bien para que sea digestiva',
      'Mezcla con frutas para mejor sabor'
    ]),
    warnings: JSON.stringify([
      'La avena puede contener gluten por contaminación cruzada',
      'Observa si hay reacciones digestivas',
      'Introduce gradualmente'
    ]),
    recipe: 'Cocinar 1-2 cucharadas de copos de avena con agua o leche materna durante 5 minutos, removiendo constantemente hasta que espese. Mezclar con frutas.',
  },
  {
    id: 'day30',
    dayNumber: 30,
    ageRange: '6-8m',
    title: '¡Primer mes completado! (6-8 meses)',
    description: 'Felicidades! Has completado el primer mes de alimentación complementaria. El bebé ya conoce muchos alimentos seguros.',
    foodGroup: 'Mixto',
    specificFood: 'Variedad de alimentos seguros',
    portionSize: 'Almuerzo: 70-80g con proteínas / Merienda: 60g frutas',
    frequency: 'Dos comidas al día',
    breastmilkNote: 'La OMS recomienda continuar la lactancia materna hasta los 2 años o más, junto con alimentos complementarios.',
    tips: JSON.stringify([
      'Alimentos aprobados: calabacín, calabaza, zanahoria, patata, judías verdes, puerro, pera, manzana, plátano, aguacate, melocotón, cereales de arroz, avena, pollo, ternera',
      'El bebé ya tiene una rutina establecida',
      'Continúa introduciendo nuevos alimentos gradualmente'
    ]),
    warnings: JSON.stringify([
      'Aún no: huevo, pescado, lácteos, miel',
      'Continúa con un alimento nuevo cada 3 días'
    ]),
    recipe: 'Celebra preparando una comida especial con los alimentos favoritos del bebé.',
  },

  // ==================== RANGO 8-12 MESES ====================
  // DÍA 31-33: Huevo
  {
    id: 'day31',
    dayNumber: 31,
    ageRange: '8-12m',
    title: 'Nuevo alimento: Yema de huevo',
    description: 'A partir de los 8 meses podemos introducir la yema de huevo. Rica en hierro y vitaminas.',
    foodGroup: 'Proteínas',
    specificFood: 'Yema de huevo',
    portionSize: '1/4 de yema cocida',
    frequency: 'Una comida (almuerzo)',
    breastmilkNote: 'El huevo es un alérgeno común. Introduce gradualmente mientras mantienes la lactancia.',
    tips: JSON.stringify([
      'Cuece el huevo 10 minutos hasta que la yema esté bien cocida',
      'Empieza solo con la yema, sin clara',
      'Aplasta la yema y mézclala con el puré'
    ]),
    warnings: JSON.stringify([
      'Observa si hay reacciones alérgicas: sarpullido, hinchazón, vómitos',
      'Si hay antecedentes de alergia en la familia, consulta al pediatra',
      'Introduce cuando el bebé esté sano, sin fiebre'
    ]),
    recipe: 'Hervir un huevo durante 10 minutos. Separar la yema de la clara. Aplastar la yema con un tenedor y mezclar con puré de verduras.',
  },
  {
    id: 'day32',
    dayNumber: 32,
    ageRange: '8-12m',
    title: 'Continúa con yema de huevo',
    description: 'Segundo día con yema de huevo. Aumenta ligeramente la cantidad.',
    foodGroup: 'Proteínas',
    specificFood: 'Yema de huevo',
    portionSize: '1/2 yema cocida',
    frequency: 'Una comida (almuerzo)',
    breastmilkNote: 'La yema aporta colina, importante para el desarrollo cerebral. Combina con la lactancia.',
    tips: JSON.stringify([
      'Mezcla con purés de verduras o carnes',
      'El huevo aporta grasas saludables',
      'No añadas sal al huevo'
    ]),
    warnings: JSON.stringify([
      'Continúa observando si hay reacciones',
      'La clara se introducirá más adelante'
    ]),
    recipe: 'Hervir huevo 10 minutos. Separar yema. Mezclar media yema triturada con puré de pollo y verduras.',
  },
  {
    id: 'day33',
    dayNumber: 33,
    ageRange: '8-12m',
    title: 'Yema de huevo en diferentes preparaciones',
    description: 'Tercer día con yema. Prueba diferentes formas de ofrecerla.',
    foodGroup: 'Proteínas',
    specificFood: 'Yema de huevo',
    portionSize: '1/2 yema cocida',
    frequency: 'Una comida (almuerzo)',
    breastmilkNote: 'El bebé está expandiendo su repertorio alimenticio. La lactancia sigue siendo importante.',
    tips: JSON.stringify([
      'Puedes añadir yema a purés de patata',
      'También funciona en tortillas (solo yema)',
      'El huevo es muy versátil'
    ]),
    warnings: JSON.stringify([
      'Si no ha habido reacciones, la yema está aprobada',
      'Aguarda para introducir la clara completa'
    ]),
    recipe: 'Preparar una pequeña tortilla con yema solamente. Cocinar bien a fuego lento. Cortar en trocitos pequeños.',
  },
  // DÍA 34-36: Pescado blanco
  {
    id: 'day34',
    dayNumber: 34,
    ageRange: '8-12m',
    title: 'Nuevo alimento: Pescado blanco (Merluza)',
    description: 'El pescado blanco es suave y rico en proteínas de alta calidad.',
    foodGroup: 'Proteínas',
    specificFood: 'Merluza',
    portionSize: '20-30g de pescado',
    frequency: 'Una comida (almuerzo)',
    breastmilkNote: 'El pescado aporta omega-3, importante para el desarrollo cerebral. Combina con lactancia.',
    tips: JSON.stringify([
      'Usa filetes sin espinas',
      'Cocina al vapor o hervido',
      'Revisa muy bien que no tenga espinas'
    ]),
    warnings: JSON.stringify([
      'El pescado es un alérgeno común',
      'Observa si hay reacciones en las próximas 24-48 horas',
      'Empieza con pescados blancos suaves'
    ]),
    recipe: 'Usar filete de merluza sin espinas. Cocinar al vapor 8-10 minutos. Desmigar bien y triturar con verduras.',
  },
  {
    id: 'day35',
    dayNumber: 35,
    ageRange: '8-12m',
    title: 'Continúa con merluza',
    description: 'Segundo día con pescado blanco. El bebé se acostumbra al nuevo sabor.',
    foodGroup: 'Proteínas',
    specificFood: 'Merluza',
    portionSize: '30-40g de pescado',
    frequency: 'Una comida (almuerzo)',
    breastmilkNote: 'El pescado es ligero y digestivo. Mantén las tomas de leche materna.',
    tips: JSON.stringify([
      'Mezcla con puré de patata y zanahoria',
      'El pescado blanco es suave, suele aceptarse bien',
      'Puedes añadir un poco de perejil para sabor'
    ]),
    warnings: JSON.stringify([
      'Nunca des pescado crudo al bebé',
      'Cocina completamente'
    ]),
    recipe: 'Cocinar merluza al vapor. Preparar puré de patata y zanahoria. Mezclar el pescado desmigado con el puré.',
  },
  {
    id: 'day36',
    dayNumber: 36,
    ageRange: '8-12m',
    title: 'Nuevo pescado: Bacalao',
    description: 'El bacalao es otro pescado blanco nutritivo.',
    foodGroup: 'Proteínas',
    specificFood: 'Bacalao',
    portionSize: '20-30g de pescado',
    frequency: 'Una comida (almuerzo)',
    breastmilkNote: 'El bacalao es rico en vitamina D. Excelente combinación con lactancia.',
    tips: JSON.stringify([
      'El bacalao tiene un sabor más intenso',
      'Asegúrate de que esté bien desalado si usas salado',
      'Mezcla con verduras suaves'
    ]),
    warnings: JSON.stringify([
      'Revisa que no tenga espinas',
      'Si usa bacalao salado, desala 24h antes'
    ]),
    recipe: 'Cocinar bacalao al vapor o hervido. Desmigar bien. Triturar con puré de verduras.',
  },
  // DÍA 37-39: Lácteos y yogur
  {
    id: 'day37',
    dayNumber: 37,
    ageRange: '8-12m',
    title: 'Nuevo alimento: Yogur natural',
    description: 'A partir de los 8-9 meses podemos introducir yogur natural sin azúcar.',
    foodGroup: 'Lácteos',
    specificFood: 'Yogur natural',
    portionSize: '2-3 cucharadas (30-40g)',
    frequency: 'Una comida (merienda)',
    breastmilkNote: 'El yogur no sustituye a la leche materna. Es un complemento.',
    tips: JSON.stringify([
      'Usa yogur natural entero sin azúcar añadido',
      'Puedes mezclarlo con frutas trituradas',
      'El yogur tiene probióticos beneficiosos'
    ]),
    warnings: JSON.stringify([
      'Observa si hay reacciones (lactosa/proteína de leche)',
      'No uses yogures con azúcar o sabores artificiales',
      'Si hay alergia a la proteína de leche, consulta al pediatra'
    ]),
    recipe: 'Yogur natural entero solo o mezclado con fruta triturada (pera, manzana, plátano).',
  },
  {
    id: 'day38',
    dayNumber: 38,
    ageRange: '8-12m',
    title: 'Yogur con frutas',
    description: 'Combina yogur con las frutas ya conocidas.',
    foodGroup: 'Lácteos',
    specificFood: 'Yogur + Frutas',
    portionSize: 'Medio yogur (60g) con fruta',
    frequency: 'Una comida (merienda)',
    breastmilkNote: 'El calcio del yogur se absorbe bien. La lactancia sigue aportando nutrientes únicos.',
    tips: JSON.stringify([
      'Mezcla yogur con plátano triturado',
      'También combina bien con manzana cocida',
      'Es una merienda nutritiva y fácil'
    ]),
    warnings: JSON.stringify([
      'No añadas azúcar ni miel',
      'El yogur natural ya tiene un sabor suave'
    ]),
    recipe: 'Triturar fruta (plátano o manzana cocida). Mezclar con yogur natural hasta obtener consistencia cremosa.',
  },
  {
    id: 'day39',
    dayNumber: 39,
    ageRange: '8-12m',
    title: 'Nuevo alimento: Queso fresco',
    description: 'El queso fresco es suave y bajo en sal.',
    foodGroup: 'Lácteos',
    specificFood: 'Queso fresco',
    portionSize: '20-30g de queso',
    frequency: 'Añadir al almuerzo o merienda',
    breastmilkNote: 'El queso aporta calcio y proteínas. No sustituye la leche materna.',
    tips: JSON.stringify([
      'Usa queso fresco tipo burgos o requesón',
      'Bajo en sal y suave',
      'Puedes triturarlo con verduras'
    ]),
    warnings: JSON.stringify([
      'Evita quesos curados con mucha sal',
      'No uses quesos con moho (azul, roquefort)'
    ]),
    recipe: 'Desmenuzar queso fresco y mezclar con puré de verduras o con fruta triturada.',
  },
  // DÍA 40-42: Legumbres
  {
    id: 'day40',
    dayNumber: 40,
    ageRange: '8-12m',
    title: 'Nuevo alimento: Lentejas',
    description: 'Las lentejas son ricas en hierro vegetal y fibra.',
    foodGroup: 'Legumbres',
    specificFood: 'Lentejas',
    portionSize: '20-30g de lentejas cocidas',
    frequency: 'Una comida (almuerzo)',
    breastmilkNote: 'El hierro de las lentejas se absorbe mejor con vitamina C. Combina con fruta después.',
    tips: JSON.stringify([
      'Usa lentejas pequeñas (lenticchas)',
      'Cocina muy bien hasta que se deshagan',
      'Tritura completamente'
    ]),
    warnings: JSON.stringify([
      'Las legumbres pueden causar gases',
      'Introduce gradualmente',
      'No añadas chorizo u otros embutidos'
    ]),
    recipe: 'Cocinar lentejas con verduras (zanahoria, patata, puerro) hasta que estén muy tiernas. Triturar todo junto.',
  },
  {
    id: 'day41',
    dayNumber: 41,
    ageRange: '8-12m',
    title: 'Crema de lentejas',
    description: 'Prepara una crema suave de lentejas con verduras.',
    foodGroup: 'Legumbres',
    specificFood: 'Lentejas + Verduras',
    portionSize: '40-50g de crema',
    frequency: 'Una comida (almuerzo)',
    breastmilkNote: 'Las lentejas son muy nutritivas. Mantén la lactancia para completar nutrientes.',
    tips: JSON.stringify([
      'Añade zanahoria para dulzor natural',
      'La patata da cremosidad',
      'Puedes congelar en cubitos'
    ]),
    warnings: JSON.stringify([
      'Si causa gases, reduce la cantidad',
      'Introduce despacio'
    ]),
    recipe: 'Cocinar lentejas, zanahoria, patata y puerro hasta que todo esté muy tierno. Triturar con agua de cocción hasta obtener crema suave.',
  },
  {
    id: 'day42',
    dayNumber: 42,
    ageRange: '8-12m',
    title: 'Nuevo alimento: Garbanzos',
    description: 'Los garbanzos aportan proteínas y fibra.',
    foodGroup: 'Legumbres',
    specificFood: 'Garbanzos',
    portionSize: '20-30g de garbanzos cocidos',
    frequency: 'Una comida (almuerzo)',
    breastmilkNote: 'Los garbanzos son muy nutritivos. Combínalos con lactancia materna.',
    tips: JSON.stringify([
      'Usa garbanzos pequeños',
      'Quita la piel para mejor digestión',
      'Tritura muy bien'
    ]),
    warnings: JSON.stringify([
      'Pueden causar gases al principio',
      'Introduce poco a poco'
    ]),
    recipe: 'Cocinar garbanzos hasta que estén muy tiernos. Quitar pieles si es posible. Triturar con verduras.',
  },
  // DÍA 43-45: Texturas y trocitos
  {
    id: 'day43',
    dayNumber: 43,
    ageRange: '8-12m',
    title: 'Introduciendo texturas: Trocitos suaves',
    description: 'A partir de los 8-9 meses, el bebé puede empezar a manejar pequeños trocitos.',
    foodGroup: 'Mixto',
    specificFood: 'Verduras en trocitos',
    portionSize: '50-60g',
    frequency: 'Una comida (almuerzo)',
    breastmilkNote: 'El bebé desarrolla la motricidad fina. La lactancia sigue siendo importante.',
    tips: JSON.stringify([
      'Ofrece trocitos pequeños de verduras muy cocidas',
      'El bebé puede usar las manos',
      'Es normal que juegue con la comida'
    ]),
    warnings: JSON.stringify([
      'Los trozos deben ser muy suaves',
      'Evita alimentos con riesgo de atragantamiento',
      'Supervisa siempre al bebé mientras come'
    ]),
    recipe: 'Cocinar zanahoria, calabaza y patata en cubitos pequeños hasta que estén muy tiernos. Ofrecer al bebé para que los agarre.',
  },
  {
    id: 'day44',
    dayNumber: 44,
    ageRange: '8-12m',
    title: 'Alimentación con manos',
    description: 'Fomenta que el bebé explore los alimentos con las manos.',
    foodGroup: 'Mixto',
    specificFood: 'Frutas en trocitos',
    portionSize: '50-60g',
    frequency: 'Una comida (merienda)',
    breastmilkNote: 'La autoalimentación desarrolla la independencia. Mantén la lactancia.',
    tips: JSON.stringify([
      'Ofrece trocitos de plátano maduro',
      'También pera muy madura en trozos',
      'El bebé aprende a masticar'
    ]),
    warnings: JSON.stringify([
      'Los trozos deben ser pequeños',
      'Evita uvas enteras, nueces, trozos grandes'
    ]),
    recipe: 'Cortar plátano maduro en rodajas o trocitos. Pelar pera madura y cortar en trozos pequeños. Ofrecer al bebé.',
  },
  {
    id: 'day45',
    dayNumber: 45,
    ageRange: '8-12m',
    title: 'Nuevo alimento: Arroz',
    description: 'El arroz bien cocido es excelente para practicar la alimentación con cuchara.',
    foodGroup: 'Cereales',
    specificFood: 'Arroz',
    portionSize: '2-3 cucharadas (30-40g)',
    frequency: 'Una comida (almuerzo)',
    breastmilkNote: 'El arroz aporta energía. Combina con verduras y proteínas.',
    tips: JSON.stringify([
      'Cocina el arroz muy bien, hasta que esté muy blando',
      'Puedes mezclar con verduras trituradas',
      'El arroz caldoso es más fácil de manejar'
    ]),
    warnings: JSON.stringify([
      'El arroz debe estar muy cocido',
      'Evita arroces sueltos que puedan atragantar'
    ]),
    recipe: 'Cocinar arroz con más agua de lo normal hasta que esté muy tierno. Mezclar con verduras trituradas.',
  },
  // DÍA 46-48: Más proteínas
  {
    id: 'day46',
    dayNumber: 46,
    ageRange: '8-12m',
    title: 'Nuevo alimento: Pavo',
    description: 'El pavo es una carne magra y suave.',
    foodGroup: 'Proteínas',
    specificFood: 'Pavo',
    portionSize: '30-40g de pavo',
    frequency: 'Una comida (almuerzo)',
    breastmilkNote: 'El pavo aporta proteínas de alta calidad. Mantén la lactancia.',
    tips: JSON.stringify([
      'Usa pechuga de pavo sin piel',
      'Cocina bien y tritura',
      'Combina con verduras'
    ]),
    warnings: JSON.stringify([
      'Cocina completamente',
      'No añadas sal'
    ]),
    recipe: 'Cocinar pechuga de pavo al vapor o hervida. Triturar con verduras y un poco de agua.',
  },
  {
    id: 'day47',
    dayNumber: 47,
    ageRange: '8-12m',
    title: 'Nuevo alimento: Conejo',
    description: 'El conejo es una carne magra muy digestiva.',
    foodGroup: 'Proteínas',
    specificFood: 'Conejo',
    portionSize: '30-40g de conejo',
    frequency: 'Una comida (almuerzo)',
    breastmilkNote: 'El conejo es muy digestivo y nutritivo. Excelente para bebés.',
    tips: JSON.stringify([
      'El conejo es bajo en grasa',
      'Cocina guisado hasta que esté muy tierno',
      'Tritura bien'
    ]),
    warnings: JSON.stringify([
      'Asegúrate de que no tenga huesos pequeños',
      'Cocina completamente'
    ]),
    recipe: 'Guisar conejo con verduras (patata, zanahoria, puerro) hasta que la carne esté muy tierna. Triturar todo junto.',
  },
  {
    id: 'day48',
    dayNumber: 48,
    ageRange: '8-12m',
    title: 'Huevo completo',
    description: 'A partir de los 9-10 meses podemos introducir el huevo completo.',
    foodGroup: 'Proteínas',
    specificFood: 'Huevo completo',
    portionSize: 'Medio huevo',
    frequency: 'Una comida (almuerzo)',
    breastmilkNote: 'El huevo completo aporta todas las proteínas esenciales.',
    tips: JSON.stringify([
      'Empieza con pequeñas cantidades de clara',
      'Observa si hay reacciones',
      'Cocina completamente el huevo'
    ]),
    warnings: JSON.stringify([
      'La clara es más alergénica que la yema',
      'Introduce gradualmente',
      'Consulta al pediatra si hay antecedentes de alergia'
    ]),
    recipe: 'Preparar huevo duro (10 minutos). Triturar medio huevo completo y mezclar con puré de verduras.',
  },
  // DÍA 49-51: Más frutas
  {
    id: 'day49',
    dayNumber: 49,
    ageRange: '8-12m',
    title: 'Nuevo alimento: Naranja',
    description: 'La naranja aporta vitamina C. Ofrece en gajos pequeños o zumo diluido.',
    foodGroup: 'Frutas',
    specificFood: 'Naranja',
    portionSize: '2-3 gajos o 30-40ml de zumo diluido',
    frequency: 'Una comida (merienda)',
    breastmilkNote: 'La vitamina C ayuda a absorber el hierro de otros alimentos.',
    tips: JSON.stringify([
      'Quita las pepitas y la piel de los gajos',
      'El zumo debe estar diluido con agua',
      'No des zumo en biberón'
    ]),
    warnings: JSON.stringify([
      'El zumo de naranja puede ser ácido',
      'Diluye siempre con agua',
      'No sustituye a la fruta entera'
    ]),
    recipe: 'Exprimir naranja fresca. Mezclar con igual cantidad de agua. Ofrecer en vaso o cuchara.',
  },
  {
    id: 'day50',
    dayNumber: 50,
    ageRange: '8-12m',
    title: 'Nuevo alimento: Fresa',
    description: 'Las fresas son ricas en vitamina C y antioxidantes.',
    foodGroup: 'Frutas',
    specificFood: 'Fresa',
    portionSize: '3-4 fresas pequeñas',
    frequency: 'Una comida (merienda)',
    breastmilkNote: 'Las fresas son nutritivas pero pueden ser alergénicas en algunos casos.',
    tips: JSON.stringify([
      'Lava muy bien las fresas',
      'Quita el tallo verde',
      'Tritura o ofrece en trocitos pequeños'
    ]),
    warnings: JSON.stringify([
      'Observa si hay reacciones alérgicas',
      'Algunos bebés pueden tener sensibilidad'
    ]),
    recipe: 'Lavar fresas y quitar el tallo. Triturar o cortar en trocitos pequeños para ofrecer al bebé.',
  },
  {
    id: 'day51',
    dayNumber: 51,
    ageRange: '8-12m',
    title: 'Nuevo alimento: Mandarina',
    description: 'La mandarina es más suave que la naranja y fácil de ofrecer en gajos.',
    foodGroup: 'Frutas',
    specificFood: 'Mandarina',
    portionSize: '2-3 gajos',
    frequency: 'Una comida (merienda)',
    breastmilkNote: 'La mandarina es dulce y suele gustar mucho a los bebés.',
    tips: JSON.stringify([
      'Quita todas las pepitas',
      'Los gajos pequeños son fáciles de manejar',
      'Puedes triturar si prefieres'
    ]),
    warnings: JSON.stringify([
      'Quita la piel de los gajos',
      'Supervisa mientras come'
    ]),
    recipe: 'Pelar mandarina y separar en gajos. Quitar pepitas y piel fina. Ofrecer al bebé.',
  },
  // DÍA 52-54: Verduras nuevas
  {
    id: 'day52',
    dayNumber: 52,
    ageRange: '8-12m',
    title: 'Nuevo alimento: Espinacas',
    description: 'Las espinacas son ricas en hierro y vitaminas.',
    foodGroup: 'Verduras',
    specificFood: 'Espinacas',
    portionSize: '20-30g de espinacas cocidas',
    frequency: 'Una comida (almuerzo)',
    breastmilkNote: 'El hierro de las espinacas se absorbe mejor con vitamina C.',
    tips: JSON.stringify([
      'Usa solo las hojas tiernas',
      'Cocina bien para reducir nitratos',
      'Mezcla con patata para suavizar'
    ]),
    warnings: JSON.stringify([
      'No des espinacas crudas al bebé',
      'Cocina completamente',
      'Limita a 1-2 veces por semana por nitratos'
    ]),
    recipe: 'Lavar espinacas. Cocinar al vapor 5-7 minutos. Triturar con patata cocida y un poco de leche materna.',
  },
  {
    id: 'day53',
    dayNumber: 53,
    ageRange: '8-12m',
    title: 'Nuevo alimento: Acelgas',
    description: 'Las acelgas aportan vitaminas y minerales.',
    foodGroup: 'Verduras',
    specificFood: 'Acelgas',
    portionSize: '20-30g de acelgas cocidas',
    frequency: 'Una comida (almuerzo)',
    breastmilkNote: 'Las acelgas son nutritivas y suaves. Combina con lactancia.',
    tips: JSON.stringify([
      'Usa las hojas tiernas',
      'Cocina bien',
      'Tritura con patata'
    ]),
    warnings: JSON.stringify([
      'Limita por contenido en nitratos',
      'No des crudas'
    ]),
    recipe: 'Lavar acelgas y quitar tallos duros. Cocinar al vapor 8-10 minutos. Triturar con patata cocida.',
  },
  {
    id: 'day54',
    dayNumber: 54,
    ageRange: '8-12m',
    title: 'Nuevo alimento: Brócoli',
    description: 'El brócoli es rico en vitaminas y fibra.',
    foodGroup: 'Verduras',
    specificFood: 'Brócoli',
    portionSize: '20-30g de brócoli cocido',
    frequency: 'Una comida (almuerzo)',
    breastmilkNote: 'El brócoli aporta vitamina C que ayuda a absorber el hierro.',
    tips: JSON.stringify([
      'Usa los floretes tiernos',
      'Cocina al vapor hasta que esté muy tierno',
      'Puede tener sabor fuerte, mezcla con patata'
    ]),
    warnings: JSON.stringify([
      'Cocina completamente',
      'Puede causar gases'
    ]),
    recipe: 'Cortar floretes de brócoli. Cocinar al vapor 8-10 minutos hasta que estén muy tiernos. Triturar con patata.',
  },
  // DÍA 55-57: Cereales y pan
  {
    id: 'day55',
    dayNumber: 55,
    ageRange: '8-12m',
    title: 'Nuevo alimento: Pan',
    description: 'El pan puede introducirse a partir de los 8-9 meses.',
    foodGroup: 'Cereales',
    specificFood: 'Pan',
    portionSize: 'Una rebanada fina o trocitos',
    frequency: 'Como acompañamiento',
    breastmilkNote: 'El pan aporta carbohidratos. No sustituye comidas principales.',
    tips: JSON.stringify([
      'Usa pan del día anterior',
      'Ofrece trocitos pequeños y suaves',
      'El pan tostado es más fácil de agarrar'
    ]),
    warnings: JSON.stringify([
      'Evita pan con nueces, semillas o trozos grandes',
      'Supervisa siempre',
      'Puede contener gluten'
    ]),
    recipe: 'Cortar pan en trocitos pequeños y suaves. Ofrecer al bebé para que los agarre con las manos.',
  },
  {
    id: 'day56',
    dayNumber: 56,
    ageRange: '8-12m',
    title: 'Nuevo alimento: Pasta pequeña',
    description: 'La pasta pequeña bien cocida es ideal para practicar la alimentación.',
    foodGroup: 'Cereales',
    specificFood: 'Pasta pequeña',
    portionSize: '2-3 cucharadas (30-40g)',
    frequency: 'Una comida (almuerzo)',
    breastmilkNote: 'La pasta aporta energía. Combina con verduras y proteínas.',
    tips: JSON.stringify([
      'Usa pasta pequeña (estrellas, letras, coditos)',
      'Cocina muy bien, más tiempo de lo normal',
      'Mezcla con salsa de verduras'
    ]),
    warnings: JSON.stringify([
      'La pasta debe estar muy blanda',
      'Contiene gluten'
    ]),
    recipe: 'Cocinar pasta pequeña el doble de tiempo indicado hasta que esté muy blanda. Mezclar con puré de verduras o pollo triturado.',
  },
  {
    id: 'day57',
    dayNumber: 57,
    ageRange: '8-12m',
    title: 'Nuevo alimento: Cuscús',
    description: 'El cuscús es fácil de preparar y de textura suave.',
    foodGroup: 'Cereales',
    specificFood: 'Cuscús',
    portionSize: '2-3 cucharadas (30-40g)',
    frequency: 'Una comida (almuerzo)',
    breastmilkNote: 'El cuscús aporta carbohidratos y es fácil de digerir.',
    tips: JSON.stringify([
      'Prepara con caldo de verduras',
      'Queda muy suave',
      'Mezcla con verduras trituradas'
    ]),
    warnings: JSON.stringify([
      'Contiene gluten',
      'Asegúrate de que quede muy tierno'
    ]),
    recipe: 'Preparar cuscús según instrucciones usando caldo de verduras. Mezclar con verduras cocidas trituradas.',
  },
  // DÍA 58-60: Resumen 8-12 meses
  {
    id: 'day58',
    dayNumber: 58,
    ageRange: '8-12m',
    title: 'Tres comidas al día',
    description: 'A partir de los 9-10 meses, el bebé puede hacer tres comidas al día.',
    foodGroup: 'Mixto',
    specificFood: 'Variedad de alimentos',
    portionSize: 'Desayuno: 30-40g / Almuerzo: 80-100g / Cena: 60-80g',
    frequency: 'Tres comidas + lactancia',
    breastmilkNote: 'La leche materna sigue siendo importante. Ofrece pecho después de las comidas.',
    tips: JSON.stringify([
      'Desayuno: cereales o yogur con fruta',
      'Almuerzo: puré con proteínas y verduras',
      'Cena: puré más ligero de verduras'
    ]),
    warnings: JSON.stringify([
      'Mantén la lactancia a demanda',
      'No fuerces las cantidades'
    ]),
    recipe: 'Planifica las tres comidas del día con variedad de alimentos ya introducidos.',
  },
  {
    id: 'day59',
    dayNumber: 59,
    ageRange: '8-12m',
    title: 'Practicando con la cuchara',
    description: 'El bebé puede empezar a intentar usar la cuchara.',
    foodGroup: 'Mixto',
    specificFood: 'Puré espeso',
    portionSize: '70-90g',
    frequency: 'Una comida',
    breastmilkNote: 'El desarrollo de la autonomía es importante. La lactancia continúa.',
    tips: JSON.stringify([
      'Ofrece una cuchara al bebé',
      'Puedes usar dos cucharas: una tú y otra el bebé',
      'Es normal que se ensucie'
    ]),
    warnings: JSON.stringify([
      'Ten paciencia',
      'No te preocupes por el desorden'
    ]),
    recipe: 'Preparar un puré espeso que se pueda quedar en la cuchara. Ayuda al bebé a llevarla a la boca.',
  },
  {
    id: 'day60',
    dayNumber: 60,
    ageRange: '8-12m',
    title: '¡Rango 8-12 meses completado!',
    description: 'Felicidades! El bebé ya come una gran variedad de alimentos. Continúa expandiendo su dieta.',
    foodGroup: 'Mixto',
    specificFood: 'Variedad completa',
    portionSize: 'Tres comidas al día',
    frequency: 'Desayuno + Almuerzo + Cena + Lactancia',
    breastmilkNote: 'Continúa la lactancia materna a demanda hasta los 2 años o más, junto con alimentos complementarios adecuados.',
    tips: JSON.stringify([
      'Alimentos nuevos en este rango: huevo, pescado, yogur, queso fresco, lentejas, garbanzos, arroz, pasta, pan, más frutas y verduras',
      'El bebé desarrolla autonomía alimentaria',
      'Continúa introduciendo nuevos alimentos'
    ]),
    warnings: JSON.stringify([
      'Aún evitar: miel (hasta 1 año), leche de vaca como bebida, alimentos con riesgo de atragantamiento',
      'Mantén la supervisión durante las comidas'
    ]),
    recipe: 'Celebra preparando un menú variado con los alimentos favoritos del bebé.',
  },

  // ==================== RANGO 12-24 MESES ====================
  // DÍA 61-63: Transición a comida familiar
  {
    id: 'day61',
    dayNumber: 61,
    ageRange: '12-24m',
    title: '¡Primer cumpleaños! - Comida familiar',
    description: 'A partir del año, el bebé puede empezar a comer la misma comida que la familia.',
    foodGroup: 'Mixto',
    specificFood: 'Comida familiar adaptada',
    portionSize: 'Porción pequeña (60-80g)',
    frequency: 'Tres comidas + snacks',
    breastmilkNote: 'La lactancia puede continuar según el deseo de madre e hijo. Ofrece leche materna o de fórmula.',
    tips: JSON.stringify([
      'Adapta las comidas familiares: menos sal, sin picante',
      'Trocea los alimentos en pedazos pequeños',
      'Ofrece variedad de texturas'
    ]),
    warnings: JSON.stringify([
      'Evita alimentos con riesgo de atragantamiento: nueces enteras, uvas enteras, salchichas',
      'No añadas sal a las comidas del bebé',
      'Mantén la supervisión'
    ]),
    recipe: 'Prepara la comida familiar y separa una porción para el bebé antes de añadir sal o especias fuertes.',
  },
  {
    id: 'day62',
    dayNumber: 62,
    ageRange: '12-24m',
    title: 'Nuevo alimento: Leche de vaca',
    description: 'A partir del año, se puede introducir la leche de vaca como bebida.',
    foodGroup: 'Lácteos',
    specificFood: 'Leche de vaca entera',
    portionSize: '200-300ml al día',
    frequency: 'Con comidas o como snack',
    breastmilkNote: 'Puedes continuar con lactancia materna o fórmula. La leche de vaca es una opción complementaria.',
    tips: JSON.stringify([
      'Usa leche entera, no desnatada',
      'No des más de 400ml al día',
      'Ofrece en vaso, no en biberón'
    ]),
    warnings: JSON.stringify([
      'La leche entera es mejor para el desarrollo',
      'No sustituye comidas principales',
      'Si continúas con lactancia, la leche de vaca no es necesaria'
    ]),
    recipe: 'Ofrecer leche entera en vaso durante el desayuno o merienda.',
  },
  {
    id: 'day63',
    dayNumber: 63,
    ageRange: '12-24m',
    title: 'Nuevo alimento: Miel',
    description: 'A partir del año, la miel es segura. Antes de 1 año hay riesgo de botulismo.',
    foodGroup: 'Endulzantes',
    specificFood: 'Miel',
    portionSize: '1-2 cucharaditas',
    frequency: 'Ocasionalmente',
    breastmilkNote: 'La miel es segura después del año. Úsala con moderación.',
    tips: JSON.stringify([
      'Puedes añadir miel al yogur o tostadas',
      'Es natural y tiene propiedades beneficiosas',
      'No calientes la miel (pierde propiedades)'
    ]),
    warnings: JSON.stringify([
      'NUNCA dar miel antes del año (riesgo de botulismo)',
      'Los dientes deben limpiarse después',
      'Usa con moderación'
    ]),
    recipe: 'Añadir una cucharadita de miel al yogur natural o untar en una tostada.',
  },
  // DÍA 64-66: Nuevos alimentos
  {
    id: 'day64',
    dayNumber: 64,
    ageRange: '12-24m',
    title: 'Nuevo alimento: Frutos secos triturados',
    description: 'Los frutos secos son nutritivos pero deben estar bien triturados.',
    foodGroup: 'Frutos secos',
    specificFood: 'Almendras/Nueces trituradas',
    portionSize: '1-2 cucharaditas de crema o polvo',
    frequency: 'Ocasionalmente',
    breastmilkNote: 'Los frutos secos aportan grasas saludables. Introduce gradualmente.',
    tips: JSON.stringify([
      'Usa mantequilla de frutos secos sin azúcar',
      'O frutos secos bien triturados en polvo',
      'Mezcla con yogur o papilla'
    ]),
    warnings: JSON.stringify([
      'NUNCA dar frutos secos enteros (riesgo de atragantamiento)',
      'Son alérgenos comunes, observa reacciones',
      'Tritura muy bien'
    ]),
    recipe: 'Usar crema de almendras o nueces sin azúcar. Mezclar con yogur o untar en pan.',
  },
  {
    id: 'day65',
    dayNumber: 65,
    ageRange: '12-24m',
    title: 'Nuevo alimento: Pescado azul',
    description: 'El pescado azul es más graso pero muy nutritivo.',
    foodGroup: 'Proteínas',
    specificFood: 'Salmón',
    portionSize: '40-50g de salmón',
    frequency: '1-2 veces por semana',
    breastmilkNote: 'El salmón es rico en omega-3, excelente para el desarrollo.',
    tips: JSON.stringify([
      'Cocina bien el salmón',
      'Revisa que no tenga espinas',
      'Puedes hornear o cocinar al vapor'
    ]),
    warnings: JSON.stringify([
      'Limita a 1-2 veces por semana',
      'Revisa bien las espinas',
      'Cocina completamente'
    ]),
    recipe: 'Hornear salmón con un poco de aceite 15-20 minutos. Desmigar bien y mezclar con verduras o pasta.',
  },
  {
    id: 'day66',
    dayNumber: 66,
    ageRange: '12-24m',
    title: 'Nuevo alimento: Sardinas',
    description: 'Las sardinas son muy nutritivas y tienen menos mercurio.',
    foodGroup: 'Proteínas',
    specificFood: 'Sardinas',
    portionSize: '2-3 sardinas pequeñas',
    frequency: '1-2 veces por semana',
    breastmilkNote: 'Las sardinas aportan calcio, omega-3 y vitamina D.',
    tips: JSON.stringify([
      'Usa sardinas enlatadas en aceite de oliva',
      'Quita las espinas cuidadosamente',
      'Son muy nutritivas'
    ]),
    warnings: JSON.stringify([
      'Revisa bien las espinas',
      'Escurre el aceite si es mucho'
    ]),
    recipe: 'Escurrir sardinas enlatadas. Quitar espinas. Triturar con un tenedor y mezclar con pan o pasta.',
  },
  // DÍA 67-69: Más variedad
  {
    id: 'day67',
    dayNumber: 67,
    ageRange: '12-24m',
    title: 'Nuevo alimento: Tomate crudo',
    description: 'El tomate crudo puede introducirse ahora, bien triturado o en trocitos.',
    foodGroup: 'Verduras',
    specificFood: 'Tomate',
    portionSize: 'Medio tomate pequeño',
    frequency: 'En ensalada o acompañamiento',
    breastmilkNote: 'El tomate es rico en licopeno y vitaminas.',
    tips: JSON.stringify([
      'Pela el tomate para mejor digestión',
      'Quita las pepitas si es posible',
      'Corta en trocitos pequeños'
    ]),
    warnings: JSON.stringify([
      'Puede ser ácido para algunos bebés',
      'Puede causar dermatitis en la boca (benigna)'
    ]),
    recipe: 'Pelar y quitar pepitas del tomate. Cortar en cubitos muy pequeños. Mezclar con pasta o servir solo.',
  },
  {
    id: 'day68',
    dayNumber: 68,
    ageRange: '12-24m',
    title: 'Nuevo alimento: Pimiento',
    description: 'El pimiento aporta vitamina C y color a las comidas.',
    foodGroup: 'Verduras',
    specificFood: 'Pimiento',
    portionSize: '2-3 cucharadas de pimiento cocido',
    frequency: 'En comidas varias',
    breastmilkNote: 'El pimiento combina bien con muchos alimentos.',
    tips: JSON.stringify([
      'El pimiento rojo es más dulce',
      'Cocina bien hasta que esté tierno',
      'Quita la piel si es posible'
    ]),
    warnings: JSON.stringify([
      'Puede ser difícil de digerir crudo',
      'Cocina completamente'
    ]),
    recipe: 'Asar pimiento rojo en el horno hasta que la piel se desprenda. Quitar piel y pepitas. Triturar o cortar en trocitos.',
  },
  {
    id: 'day69',
    dayNumber: 69,
    ageRange: '12-24m',
    title: 'Nuevo alimento: Cebolla',
    description: 'La cebolla cocida aporta sabor a las comidas.',
    foodGroup: 'Verduras',
    specificFood: 'Cebolla',
    portionSize: '1-2 cucharadas de cebolla cocida',
    frequency: 'En comidas varias',
    breastmilkNote: 'La cebolla cocida es más digestiva que la cruda.',
    tips: JSON.stringify([
      'Cocina bien hasta que esté transparente',
      'Aporta sabor natural a las comidas',
      'Empieza con poca cantidad'
    ]),
    warnings: JSON.stringify([
      'Evita cebolla cruda al principio',
      'Puede causar gases'
    ]),
    recipe: 'Picar cebolla muy fina. Sofreír a fuego lento hasta que esté muy tierna. Añadir a guisos o purés.',
  },
  // DÍA 70-72: Autonomía
  {
    id: 'day70',
    dayNumber: 70,
    ageRange: '12-24m',
    title: 'Desarrollo de la autonomía alimentaria',
    description: 'El niño come cada vez más solo. Fomenta su independencia.',
    foodGroup: 'Mixto',
    specificFood: 'Alimentos variados',
    portionSize: 'Porciones pequeñas que pueda manejar',
    frequency: 'Tres comidas + snacks',
    breastmilkNote: 'Continúa ofreciendo leche materna si lo deseas. El niño puede pedir pecho menos frecuentemente.',
    tips: JSON.stringify([
      'Ofrece alimentos que pueda agarrar con las manos',
      'Ten paciencia con el desorden',
      'Come en familia para modelar hábitos'
    ]),
    warnings: JSON.stringify([
      'Supervisa siempre las comidas',
      'Evita distracciones (pantallas)'
    ]),
    recipe: 'Prepara un plato con diferentes alimentos en trocitos: verduras cocidas, trocitos de pollo, pan, fruta.',
  },
  {
    id: 'day71',
    dayNumber: 71,
    ageRange: '12-24m',
    title: 'Uso del vaso',
    description: 'El niño debe beber de vaso, no de biberón.',
    foodGroup: 'Líquidos',
    specificFood: 'Agua y leche',
    portionSize: 'Variable',
    frequency: 'A lo largo del día',
    breastmilkNote: 'Ofrece agua frecuentemente. La leche materna sigue siendo beneficiosa.',
    tips: JSON.stringify([
      'Usa vasos con tapa y boquilla al principio',
      'Pasa a vaso normal gradualmente',
      'Ofrece agua con las comidas'
    ]),
    warnings: JSON.stringify([
      'Evita jugos y bebidas azucaradas',
      'El agua es la mejor bebida'
    ]),
    recipe: 'Ofrece agua en un vaso con boquilla durante las comidas. Anima al niño a beber solo.',
  },
  {
    id: 'day72',
    dayNumber: 72,
    ageRange: '12-24m',
    title: '¡Guía completada! - Resumen 12-24 meses',
    description: 'Felicidades! Has completado la guía de alimentación complementaria. El niño ya come de todo con adaptaciones.',
    foodGroup: 'Mixto',
    specificFood: 'Dieta completa y variada',
    portionSize: 'Porciones según apetito del niño',
    frequency: 'Desayuno + Almuerzo + Merienda + Cena',
    breastmilkNote: 'La OMS recomienda continuar la lactancia materna hasta los 2 años o más, junto con una alimentación complementaria adecuada.',
    tips: JSON.stringify([
      'El niño come prácticamente de todo',
      'Ofrece una dieta variada y equilibrada',
      'Modela buenos hábitos alimenticios',
      'Come en familia siempre que sea posible',
      'Continúa evitando alimentos de riesgo de atragantamiento'
    ]),
    warnings: JSON.stringify([
      'Evita: frutos secos enteros, uvas enteras, salchichas, caramelos duros',
      'Mantén supervisión durante las comidas',
      'Consulta al pediatra si tienes dudas'
    ]),
    recipe: 'Celebra preparando una comida familiar especial donde el niño pueda disfrutar de todos los alimentos seguros.',
  },
]

// Función para obtener días por rango de edad
export function getDaysByAgeRange(ageRange: '6-8m' | '8-12m' | '12-24m'): IntroStep[] {
  return introStepsData.filter(step => step.ageRange === ageRange)
}

// Función para obtener el rango de edad de un día específico
export function getAgeRangeForDay(dayNumber: number): '6-8m' | '8-12m' | '12-24m' {
  if (dayNumber <= 30) return '6-8m'
  if (dayNumber <= 60) return '8-12m'
  return '12-24m'
}

// Información de rangos de edad
export const ageRangeInfo = {
  '6-8m': {
    title: '6-8 meses',
    description: 'Introducción gradual de alimentos. Texturas suaves y líquidas.',
    startDay: 1,
    endDay: 30,
    mealsPerDay: '1-2 comidas',
    breastmilkFrequency: 'Mantener lactancia materna a demanda'
  },
  '8-12m': {
    title: '8-12 meses',
    description: 'Ampliación de variedad. Texturas más espesas y trocitos suaves.',
    startDay: 31,
    endDay: 60,
    mealsPerDay: '2-3 comidas',
    breastmilkFrequency: 'Continuar lactancia materna a demanda'
  },
  '12-24m': {
    title: '12-24 meses',
    description: 'Transición a comida familiar. El niño come casi de todo.',
    startDay: 61,
    endDay: 72,
    mealsPerDay: '3 comidas + snacks',
    breastmilkFrequency: 'Lactancia materna opcional, leche de vaca permitida'
  }
}
