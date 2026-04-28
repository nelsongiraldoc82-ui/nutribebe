// Datos estáticos de introducción de alimentos
// Basados en recomendaciones OMS, UNICEF y AEPAP

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
}

export const introStepsData: IntroStep[] = [
  // SEMANA 1 - Verduras suaves
  {
    id: 'w1d1',
    weekNumber: 1,
    dayNumber: 1,
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
  },
  {
    id: 'w1d2',
    weekNumber: 1,
    dayNumber: 2,
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
  },
  {
    id: 'w1d3',
    weekNumber: 1,
    dayNumber: 3,
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
  },
  {
    id: 'w1d4',
    weekNumber: 1,
    dayNumber: 4,
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
  },
  {
    id: 'w1d5',
    weekNumber: 1,
    dayNumber: 5,
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
  },
  {
    id: 'w1d6',
    weekNumber: 1,
    dayNumber: 6,
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
  },
  {
    id: 'w1d7',
    weekNumber: 1,
    dayNumber: 7,
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
  },
  // SEMANA 2
  {
    id: 'w2d1',
    weekNumber: 2,
    dayNumber: 1,
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
  },
  {
    id: 'w2d2',
    weekNumber: 2,
    dayNumber: 2,
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
  },
  {
    id: 'w2d3',
    weekNumber: 2,
    dayNumber: 3,
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
  },
  {
    id: 'w2d4',
    weekNumber: 2,
    dayNumber: 4,
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
  },
  {
    id: 'w2d5',
    weekNumber: 2,
    dayNumber: 5,
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
  },
  {
    id: 'w2d6',
    weekNumber: 2,
    dayNumber: 6,
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
  },
  {
    id: 'w2d7',
    weekNumber: 2,
    dayNumber: 7,
    title: 'Puerro - nuevo sabor',
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
  },
  // SEMANA 3 - FRUTAS
  {
    id: 'w3d1',
    weekNumber: 3,
    dayNumber: 1,
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
  },
  {
    id: 'w3d2',
    weekNumber: 3,
    dayNumber: 2,
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
  },
  {
    id: 'w3d3',
    weekNumber: 3,
    dayNumber: 3,
    title: 'Nuevo alimento: Manzana',
    description: 'La manzana es suave y versátil. Cocida es más digestiva al principio.',
    foodGroup: 'Frutas',
    specificFood: 'Manzana',
    portionSize: '2-3 cucharadas (20-30g)',
    frequency: 'Una comida (merienda)',
    breastmilkNote: 'La vitamina C de la manzana ayuda a absorber el hierro de la leche materna.',
    tips: JSON.stringify([
      'Usa manzanas tipo Golden o Reineta, más suaves',
      'Cocina al vapor con piel y luego retírala',
      'La manzana cocida es ideal para empezar'
    ]),
    warnings: JSON.stringify([
      'La manzana cruda puede ser difícil de digerir al principio',
      'Empieza con manzana cocida'
    ]),
  },
  {
    id: 'w3d4',
    weekNumber: 3,
    dayNumber: 4,
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
  },
  {
    id: 'w3d5',
    weekNumber: 3,
    dayNumber: 5,
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
  },
  {
    id: 'w3d6',
    weekNumber: 3,
    dayNumber: 6,
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
      'Puedes preparar y congelar en cubitos'
    ]),
    warnings: JSON.stringify([
      'El plátano congelado pierde textura, mejor fresco',
      'Descongela la mezcla de pera-manzana y añade plátano fresco'
    ]),
  },
  {
    id: 'w3d7',
    weekNumber: 3,
    dayNumber: 7,
    title: 'Resumen de la semana',
    description: 'El bebé ya conoce verduras y frutas básicas. Prueba diferentes combinaciones.',
    foodGroup: 'Mixto',
    specificFood: 'Combinaciones variadas',
    portionSize: 'Almuerzo: 50-60g verduras / Merienda: 50-60g frutas',
    frequency: 'Dos comidas al día',
    breastmilkNote: 'Mantén al menos 4-5 tomas de leche materna. La leche sigue siendo el alimento principal.',
    tips: JSON.stringify([
      'El bebé empieza a tener rutina: verduras al mediodía, frutas por la tarde',
      'Celebra que ya conoces muchos alimentos seguros',
      'Anota qué le gusta más al bebé'
    ]),
    warnings: JSON.stringify([
      'No introduzcas nuevos alimentos hoy',
      'Descansa y observa cómo ha evolucionado el bebé'
    ]),
  },
  // SEMANA 4
  {
    id: 'w4d1',
    weekNumber: 4,
    dayNumber: 1,
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
  },
  {
    id: 'w4d2',
    weekNumber: 4,
    dayNumber: 2,
    title: 'Aguacate + frutas',
    description: 'Combina aguacate con otras frutas ya conocidas.',
    foodGroup: 'Frutas',
    specificFood: 'Aguacate + Plátano',
    portionSize: '4-5 cucharadas (40-50g)',
    frequency: 'Una comida (merienda)',
    breastmilkNote: 'Esta combinación es muy saciante. El bebé puede querer menos leche después.',
    tips: JSON.stringify([
      'Mezcla mitad aguacate, mitad plátano',
      'Es cremosa y nutritiva, ideal para el crecimiento',
      'El bebé puede necesitar menos cantidad por lo saciante'
    ]),
    warnings: JSON.stringify([
      'No ofrezcas demasiado aguacate de una vez',
      'Puede ser pesado si se combina con otros alimentos grasos'
    ]),
  },
  {
    id: 'w4d3',
    weekNumber: 4,
    dayNumber: 3,
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
  },
  {
    id: 'w4d4',
    weekNumber: 4,
    dayNumber: 4,
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
  },
  {
    id: 'w4d5',
    weekNumber: 4,
    dayNumber: 5,
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
  },
  {
    id: 'w4d6',
    weekNumber: 4,
    dayNumber: 6,
    title: 'Puré mixto con cereales',
    description: 'Prepara un puré de verduras con cereales de arroz.',
    foodGroup: 'Mixto',
    specificFood: 'Verduras + Cereales de arroz',
    portionSize: 'Almuerzo: 60-70g puré con cereales',
    frequency: 'Almuerzo completo',
    breastmilkNote: 'Este puré es muy completo. El bebé puede empezar a reducir una toma de leche.',
    tips: JSON.stringify([
      'Los cereales en el puré de verduras aportan saciedad',
      'El puré quedará más cremoso',
      'Es una comida muy nutritiva'
    ]),
    warnings: JSON.stringify([
      'No sustituyas todas las tomas de leche',
      'La leche materna sigue siendo esencial'
    ]),
  },
  {
    id: 'w4d7',
    weekNumber: 4,
    dayNumber: 7,
    title: 'Resumen del primer mes',
    description: '¡Felicidades! Has completado el primer mes de alimentación complementaria.',
    foodGroup: 'Mixto',
    specificFood: 'Variedad de alimentos seguros',
    portionSize: 'Almuerzo: 60-70g / Merienda: 50-60g',
    frequency: 'Dos comidas al día',
    breastmilkNote: 'La OMS recomienda continuar la lactancia materna hasta los 2 años o más, junto con alimentos complementarios.',
    tips: JSON.stringify([
      'Alimentos aprobados: calabacín, calabaza, zanahoria, patata, judías verdes, puerro, pera, manzana, plátano, aguacate, melocotón, cereales de arroz',
      'El bebé ya tiene una rutina establecida',
      'Próximamente: proteínas (pollo, ternera)'
    ]),
    warnings: JSON.stringify([
      'Aún no: huevo, pescado, lácteos, gluten, miel',
      'Continúa introduciendo un alimento nuevo cada 3 días'
    ]),
  },
  // SEMANA 5 - PROTEÍNAS
  {
    id: 'w5d1',
    weekNumber: 5,
    dayNumber: 1,
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
  },
  {
    id: 'w5d2',
    weekNumber: 5,
    dayNumber: 2,
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
  },
  {
    id: 'w5d3',
    weekNumber: 5,
    dayNumber: 3,
    title: 'Nuevo cereal: Maíz',
    description: 'El maíz es otro cereal sin gluten, aporta variedad.',
    foodGroup: 'Cereales',
    specificFood: 'Maíz (harina o cereales)',
    portionSize: '1-2 cucharadas en el puré',
    frequency: 'Una comida',
    breastmilkNote: 'El maíz es energético pero bajo en proteínas. La leche materna complementa.',
    tips: JSON.stringify([
      'Usa harina de maíz o cereales de maíz',
      'Tiene un sabor ligeramente dulce',
      'Combina bien con verduras'
    ]),
    warnings: JSON.stringify([
      'El maíz no contiene gluten',
      'Es seguro para celíacos'
    ]),
  },
  {
    id: 'w5d4',
    weekNumber: 5,
    dayNumber: 4,
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
  },
  {
    id: 'w5d5',
    weekNumber: 5,
    dayNumber: 5,
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
  },
  {
    id: 'w5d6',
    weekNumber: 5,
    dayNumber: 6,
    title: 'Nuevo alimento: Avena',
    description: 'La avena es un cereal nutritivo. Contiene gluten (introducir con cuidado).',
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
  },
  {
    id: 'w5d7',
    weekNumber: 5,
    dayNumber: 7,
    title: 'Resumen de la semana 5',
    description: 'El bebé ya come proteínas y más cereales. ¡Gran progreso!',
    foodGroup: 'Mixto',
    specificFood: 'Variedad con proteínas',
    portionSize: 'Almuerzo: 70-80g con proteínas / Merienda: 60g',
    frequency: 'Dos comidas al día',
    breastmilkNote: 'Las proteínas complementan la lactancia. Continúa amamantando a demanda.',
    tips: JSON.stringify([
      'Proteínas introducidas: pollo, ternera',
      'Cereales: arroz, maíz, avena',
      'Mantén variedad en las comidas'
    ]),
    warnings: JSON.stringify([
      'Aún no: huevo, pescado, lácteos, miel',
      'Continúa con un alimento nuevo cada 3 días'
    ]),
  },
]

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
