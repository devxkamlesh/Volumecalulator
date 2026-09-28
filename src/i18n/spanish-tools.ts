export interface SpanishFaq {
  question: string;
  answer: string;
}

export interface SpanishPracticalExample {
  title: string;
  desc: string;
}

export interface SpanishToolDetail {
  slug: string;
  englishSlug: string;
  shapeId: string;
  shapeName: string;
  categoryLabel: string;
  title: string;
  h1: string;
  metaDescription: string;
  keywords: string;
  shortTagline: string;
  howToCalculate: string[];
  formulaHtml: string;
  formulaNote: string;
  practicalExamples: SpanishPracticalExample[];
  faqs: SpanishFaq[];
  relatedSpanishSlugs: string[];
  inputLabels: Record<string, string>;
}

export const SPANISH_TOOLS: Record<string, SpanishToolDetail> = {
  'calculadora-volumen-cubo': {
    slug: 'calculadora-volumen-cubo',
    englishSlug: 'cube-volume-calculator',
    shapeId: 'cube',
    shapeName: 'Cubo',
    categoryLabel: 'Geometría 3D',
    title: 'Calculadora de Volumen de Cubo',
    h1: 'Calculadora de volumen de un cubo',
    metaDescription: 'Calcula el volumen y la capacidad de un cubo a partir de la arista o lado. Convierte al instante a litros, metros cúbicos y galones con fórmula paso a paso.',
    keywords: 'calculadora de volumen de un cubo, volumen de un cubo formula, calcular volumen de un cubo, sacar el volumen de un cubo, capacidad de un cubo en litros, arista a volumen cubo',
    shortTagline: 'Calcula el volumen y la capacidad de contenedores cúbicos, dados y depósitos a partir de la longitud de su arista.',
    howToCalculate: [
      'Mide la longitud de cualquiera de las aristas del cubo (a). Como todas las caras son cuadrados idénticos, largo, ancho y alto tienen el mismo valor.',
      'Multiplica la longitud de la arista por sí misma tres veces: V = a × a × a = a³.',
      'Convierte las unidades cúbicas a tu medida deseada, como litros, metros cúbicos o galones.',
    ],
    formulaHtml: 'V = a³',
    formulaNote: 'Donde a es la longitud de la arista. El área de la superficie total es A = 6a².',
    practicalExamples: [
      {
        title: 'Cajas cúbicas de almacenamiento',
        desc: 'Una caja de 50 cm de arista tiene un volumen de 50 × 50 × 50 = 125.000 cm³, lo que equivale exactamente a 125 litros.',
      },
      {
        title: 'Bloques de hormigón',
        desc: 'Cálculo del volumen de zapatas cúbicas para cimentaciones de construcción civil en metros cúbicos.',
      },
      {
        title: 'Acuarios cúbicos',
        desc: 'Determinación exacta de la capacidad de agua en litros para peceras de arrecife y acuarios plantados.',
      },
    ],
    faqs: [
      {
        question: '¿Cómo calcular el volumen de un cubo a partir de la arista o lado?',
        answer: 'Se multiplica la longitud de la arista por sí misma tres veces: V = a³. Por ejemplo, si un cubo mide 5 cm de lado, su volumen es 5 × 5 × 5 = 125 cm³.',
      },
      {
        question: '¿Cómo sacar el volumen de un cubo si solo conozco el área total?',
        answer: 'Divide el área total entre 6 para obtener el área de una cara (a² = A / 6), extrae la raíz cuadrada para hallar la arista (a = √(A / 6)) y eleva el resultado al cubo (V = a³).',
      },
      {
        question: '¿Cuántos litros de agua caben en un cubo de 1 metro de lado?',
        answer: 'Un cubo con aristas de 1 metro tiene un volumen de 1 m³, lo que equivale exactamente a 1.000 litros de agua.',
      },
    ],
    relatedSpanishSlugs: [
      'calculadora-volumen-prisma-rectangular',
      'calculadora-volumen-cilindro',
      'calculadora-volumen-esfera',
    ],
    inputLabels: {
      side: 'Longitud de la arista',
    },
  },

  'calculadora-volumen-prisma-rectangular': {
    slug: 'calculadora-volumen-prisma-rectangular',
    englishSlug: 'box-volume-calculator',
    shapeId: 'rectangular_prism',
    shapeName: 'Prisma rectangular',
    categoryLabel: 'Prismas y cajas',
    title: 'Volumen de Prisma Rectangular',
    h1: 'Calculadora de volumen de un prisma rectangular',
    metaDescription: 'Calcula el volumen de una caja o prisma rectangular ingresando largo, ancho y alto. Conversión exacta a litros, metros cúbicos y pies cúbicos para envíos.',
    keywords: 'calculadora de volumen de un prisma rectangular, calculadora de volumen de una caja, calcular metros cubicos de una caja, volumen prisma rectangular formula, sacar volumen caja carton, capacidad de una caja en litros',
    shortTagline: 'Calcula el volumen de cajas de cartón, contenedores de carga, paquetes y habitaciones rectangulares.',
    howToCalculate: [
      'Mide la longitud (largo), el ancho (profundidad) y la altura con una cinta métrica en la misma unidad de medida.',
      'Multiplica las tres dimensiones entre sí: Volumen = largo × ancho × alto.',
      'Selecciona la unidad de salida para obtener la capacidad exacta en litros, metros cúbicos o galones.',
    ],
    formulaHtml: 'V = l × w × h',
    formulaNote: 'Donde l = largo, w = ancho y h = alto. El área superficial total es A = 2(lw + lh + wh).',
    practicalExamples: [
      {
        title: 'Cajas de envío y paquetería',
        desc: 'Un paquete de 40 cm × 30 cm × 20 cm tiene un volumen de 24.000 cm³ o 0,024 m³ para cotización de fletes y logística.',
      },
      {
        title: 'Depósitos rectangulares de agua',
        desc: 'Un tanque de 2 m × 1,5 m × 1 m contiene exactamente 3 m³, equivalente a 3.000 litros de agua.',
      },
      {
        title: 'Cubicación de habitaciones',
        desc: 'Determinación del volumen de aire en metros cúbicos para dimensionar sistemas de climatización y ventilación.',
      },
    ],
    faqs: [
      {
        question: '¿Cuál es la fórmula para calcular el volumen de un prisma rectangular o caja?',
        answer: 'La fórmula es multiplicar las tres dimensiones: largo, ancho y alto: V = l × w × h. Todas las medidas deben estar en la misma unidad.',
      },
      {
        question: '¿Cómo calcular los metros cúbicos (m³) de una caja para envíos y fletes?',
        answer: 'Mide largo, ancho y alto en centímetros, multiplícalos entre sí y divide el total entre 1.000.000: m³ = (l × w × h) / 1.000.000.',
      },
      {
        question: '¿Cómo convertir el volumen de una caja a litros?',
        answer: 'Calcula el volumen en centímetros cúbicos (cm³) y divide entre 1.000 para obtener la capacidad exacta en litros.',
      },
    ],
    relatedSpanishSlugs: [
      'calculadora-volumen-cubo',
      'calculadora-volumen-cilindro',
      'calculadora-volumen-tanque-cilindrico-horizontal',
    ],
    inputLabels: {
      length: 'Largo',
      width: 'Ancho',
      height: 'Alto',
    },
  },

  'calculadora-volumen-cilindro': {
    slug: 'calculadora-volumen-cilindro',
    englishSlug: 'cylinder-volume-calculator',
    shapeId: 'cylinder',
    shapeName: 'Cilindro',
    categoryLabel: 'Curvos y tanques',
    title: 'Calculadora Volumen Cilindro',
    h1: 'Calculadora de volumen de un cilindro',
    metaDescription: 'Calcula el volumen y la capacidad de un cilindro o tanque cilíndrico a partir del radio o diámetro y la altura. Resultados en litros, m³ y galones.',
    keywords: 'calculadora de volumen de un cilindro, calcular volumen cilindro litros, formula volumen cilindro radio y altura, volumen de un cilindro con diametro, capacidad de un tanque cilindrico, sacar volumen cilindro',
    shortTagline: 'Calcula la capacidad y el volumen de cilindros, silos, barriles y tanques circulares a partir del radio o diámetro.',
    howToCalculate: [
      'Determina el radio (r) de la base circular (la mitad del diámetro) y la altura vertical (h).',
      'Eleva el radio al cuadrado y multiplícalo por la constante pi (π) para obtener el área de la base: Área = πr².',
      'Multiplica el área de la base por la altura: Volumen = πr²h.',
    ],
    formulaHtml: 'V = πr²h',
    formulaNote: 'Donde r es el radio y h es la altura. El área superficial total es A = 2πrh + 2πr².',
    practicalExamples: [
      {
        title: 'Barriles y tambores de almacenamiento',
        desc: 'Un cilindro con radio de 29 cm y altura de 85 cm almacena aproximadamente 224 litros brutos.',
      },
      {
        title: 'Tanques verticales de agua',
        desc: 'Cálculo de capacidad en metros cúbicos para silos agrícolas y depósitos residenciales de agua.',
      },
      {
        title: 'Latas y envases metálicos',
        desc: 'Cubicaje exacto de envases cilíndricos de conserva y bebidas en mililitros y centímetros cúbicos.',
      },
    ],
    faqs: [
      {
        question: '¿Cuál es la fórmula para calcular el volumen de un cilindro?',
        answer: 'La fórmula es V = πr²h, donde r es el radio de la base circular y h es la altura del cilindro.',
      },
      {
        question: '¿Cómo calcular el volumen de un cilindro usando el diámetro en lugar del radio?',
        answer: 'Divide el diámetro entre 2 para obtener el radio (r = d / 2) o utiliza directamente la fórmula V = (πd²h) / 4.',
      },
      {
        question: '¿Cuántos litros caben en un tanque cilíndrico?',
        answer: 'Si calculas el volumen en centímetros cúbicos, divide entre 1.000. Si calculas en metros cúbicos (m³), multiplica por 1.000 para obtener la capacidad en litros.',
      },
    ],
    relatedSpanishSlugs: [
      'calculadora-volumen-tubo',
      'calculadora-volumen-tanque-cilindrico-horizontal',
      'calculadora-volumen-cono',
    ],
    inputLabels: {
      radius: 'Radio de la base',
      height: 'Altura',
    },
  },

  'calculadora-volumen-esfera': {
    slug: 'calculadora-volumen-esfera',
    englishSlug: 'sphere-volume-calculator',
    shapeId: 'sphere',
    shapeName: 'Esfera',
    categoryLabel: 'Curvos y esferas',
    title: 'Calculadora Volumen Esfera',
    h1: 'Calculadora de volumen de una esfera',
    metaDescription: 'Calcula el volumen de una esfera y semiesfera a partir del radio o diámetro. Conversión automática a litros, metros cúbicos y galones con fórmula paso a paso.',
    keywords: 'calculadora de volumen de una esfera, formula volumen de una esfera, calcular volumen esfera con diametro, volumen de una pelota calculadora, sacar el volumen de una esfera, capacidad tanque esferico',
    shortTagline: 'Calcula el volumen y la superficie de esferas, balones, planetas y tanques esféricos a partir del radio o diámetro.',
    howToCalculate: [
      'Mide el radio de la esfera (r) desde el centro exacto hasta la superficie exterior, o divide el diámetro entre dos.',
      'Eleva el radio a la tercera potencia (r³).',
      'Multiplica el resultado por pi (π) y luego por cuatro tercios (4/3): V = ⁴⁄₃πr³.',
    ],
    formulaHtml: 'V = ⁴⁄₃πr³',
    formulaNote: 'Donde r es el radio. El área superficial exterior es A = 4πr². Para diámetro d: V = (πd³) / 6.',
    practicalExamples: [
      {
        title: 'Balón reglamentario de fútbol',
        desc: 'Con un radio de 11 cm, el volumen de aire interior es ⁴⁄₃ × π × 11³ ≈ 5.575 cm³, equivalente a 5,58 litros.',
      },
      {
        title: 'Tanques esféricos de gas (esferas Horton)',
        desc: 'Depósitos industriales presurizados para almacenamiento seguro de gas licuado de petróleo e hidrocarburos.',
      },
      {
        title: 'Bolas de rodamiento y física',
        desc: 'Cálculo de volumen milimétrico y masa para esferas de acero y componentes mecánicos de precisión.',
      },
    ],
    faqs: [
      {
        question: '¿Cuál es la fórmula para calcular el volumen de una esfera?',
        answer: 'La fórmula es V = ⁴⁄₃πr³, donde r es el radio de la esfera medido desde el centro hasta la superficie exterior.',
      },
      {
        question: '¿Cómo calcular el volumen de una esfera a partir del diámetro?',
        answer: 'Divide el diámetro entre 2 para hallar el radio (r = d / 2) o aplica directamente la fórmula V = (πd³) / 6.',
      },
      {
        question: '¿Cómo se calcula el volumen de una semiesfera (media esfera)?',
        answer: 'Se calcula el volumen de la esfera completa y se divide entre 2: Vsemiesfera = ⅔πr³.',
      },
    ],
    relatedSpanishSlugs: [
      'calculadora-volumen-casquete-esferico',
      'calculadora-volumen-elipsoide',
      'calculadora-volumen-capsula',
    ],
    inputLabels: {
      radius: 'Radio de la esfera',
    },
  },

  'calculadora-volumen-cono': {
    slug: 'calculadora-volumen-cono',
    englishSlug: 'cone-volume-calculator',
    shapeId: 'cone',
    shapeName: 'Cono',
    categoryLabel: 'Curvos y conos',
    title: 'Calculadora de Volumen Cono',
    h1: 'Calculadora de volumen de un cono',
    metaDescription: 'Calcula el volumen y la capacidad de un cono recto a partir del radio de la base y la altura o generatriz. Convierte al instante a litros y metros cúbicos.',
    keywords: 'calculadora de volumen de un cono, formula para calcular el volumen de un cono, calcular volumen de un cono con generatriz, capacidad de un cono en litros, volumen cono recto calculadora, sacar volumen cono',
    shortTagline: 'Calcula el volumen de conos rectos, embudos, tolvas y techos cónicos a partir del radio y la altura vertical.',
    howToCalculate: [
      'Mide el radio de la base circular (r) y la altura perpendicular (h) desde la cúspide hasta el centro de la base.',
      'Calcula el área de la base circular multiplicando pi por el radio al cuadrado: Área = πr².',
      'Multiplica el área por la altura vertical y divide el resultado entre tres: V = ⅓πr²h.',
    ],
    formulaHtml: 'V = ⅓πr²h',
    formulaNote: 'Donde r es el radio y h es la altura vertical. La generatriz inclinada es g = √(r² + h²).',
    practicalExamples: [
      {
        title: 'Embudos y tolvas de dosificación',
        desc: 'Cálculo de capacidad en litros para tolvas cónicas de granos, café y polvos industriales.',
      },
      {
        title: 'Pilas de acopio de arena y grava',
        desc: 'Estimación de metros cúbicos de áridos apilados en forma de cono natural sobre el terreno.',
      },
      {
        title: 'Tejados y remates cónicos',
        desc: 'Cubicación del volumen interior de aire bajo techos cónicos en torres y silos arquitectónicos.',
      },
    ],
    faqs: [
      {
        question: '¿Cuál es la fórmula para calcular el volumen de un cono?',
        answer: 'La fórmula es V = ⅓πr²h, donde r es el radio de la base y h es la altura perpendicular vertical.',
      },
      {
        question: '¿Qué relación hay entre el volumen de un cono y el de un cilindro?',
        answer: 'Un cono tiene exactamente un tercio (⅓) del volumen de un cilindro que posea la misma base circular y la misma altura.',
      },
      {
        question: '¿Cómo calcular el volumen de un cono si solo tengo el radio y la generatriz (lado inclinado)?',
        answer: 'Usa el teorema de Pitágoras para hallar la altura vertical (h = √(g² - r²), donde g es la generatriz) y luego aplica V = ⅓πr²h.',
      },
    ],
    relatedSpanishSlugs: [
      'calculadora-volumen-tronco-de-cono',
      'calculadora-volumen-cilindro',
      'calculadora-volumen-piramide-cuadrada',
    ],
    inputLabels: {
      radius: 'Radio de la base',
      height: 'Altura vertical',
    },
  },

  'calculadora-volumen-capsula': {
    slug: 'calculadora-volumen-capsula',
    englishSlug: 'capsule-volume-calculator',
    shapeId: 'capsule',
    shapeName: 'Cápsula',
    categoryLabel: 'Tanques y cápsulas',
    title: 'Calculadora Volumen Cápsula',
    h1: 'Calculadora de volumen de una cápsula',
    metaDescription: 'Calcula el volumen de cápsulas farmacéuticas y tanques horizontales tipo bala con extremos semiesféricos. Fórmulas precisas y conversiones a litros y m³.',
    keywords: 'calculadora de volumen de una cápsula, volumen de capsula farmaceutica, calcular volumen tanque capsula, formula volumen capsula geometrica, capacidad de tanque bala de gas, volumen pastilla capsula',
    shortTagline: 'Calcula el volumen de cápsulas farmacéuticas y tanques horizontales tipo bala con tapas semiesféricas.',
    howToCalculate: [
      'Identifica el radio (r) común para el cuerpo cilíndrico central y las dos tapas semiesféricas.',
      'Mide la longitud de la sección cilíndrica recta (a). Si conoces la longitud total, resta dos radios: a = Ltotal - 2r.',
      'Calcula el cilindro (πr²a) y la esfera completa (⁴⁄₃πr³), y suma ambos componentes: V = πr²(a + ⁴⁄₃r).',
    ],
    formulaHtml: 'V = πr²a + ⁴⁄₃πr³',
    formulaNote: 'Donde r es el radio y a es la longitud cilíndrica. Las dos semiesferas extremas forman una esfera completa.',
    practicalExamples: [
      {
        title: 'Tanques bala para gas GLP',
        desc: 'Depósitos industriales presurizados para gas licuado de petróleo con cabezales hemisféricos normalizados.',
      },
      {
        title: 'Cápsulas farmacéuticas',
        desc: 'Cálculo milimétrico de capacidad de dosificación para polvos activos y líquidos en cápsulas de gelatina.',
      },
      {
        title: 'Recipientes a presión horizontales',
        desc: 'Cálculo de volumen para autoclaves e intercambiadores de calor en ingeniería química.',
      },
    ],
    faqs: [
      {
        question: '¿Cuál es la fórmula geométrica para el volumen de una cápsula?',
        answer: 'Una cápsula consta de un cilindro central y dos semiesferas en los extremos (que juntas forman una esfera completa): V = πr²a + ⁴⁄₃πr³ = πr²(a + ⁴⁄₃r), donde a es la longitud del cuerpo cilíndrico y r es el radio.',
      },
      {
        question: '¿Cómo calcular la longitud del cilindro (a) si conozco el largo total de la cápsula?',
        answer: 'Resta el diámetro total (dos veces el radio) a la longitud total: a = Ltotal - 2r.',
      },
      {
        question: '¿Para qué se utiliza el cálculo de volumen de una cápsula?',
        answer: 'Se utiliza principalmente en formulación farmacéutica (dosificación de polvos/líquidos en pastillas) y en recipientes a presión industriales horizontales (tanques tipo bala para gas GLP).',
      },
    ],
    relatedSpanishSlugs: [
      'calculadora-volumen-cilindro',
      'calculadora-volumen-esfera',
      'calculadora-volumen-tanque-cilindrico-horizontal',
    ],
    inputLabels: {
      radius: 'Radio de la cápsula',
      cylinderLength: 'Longitud del cilindro central',
    },
  },

  'calculadora-volumen-casquete-esferico': {
    slug: 'calculadora-volumen-casquete-esferico',
    englishSlug: 'spherical-cap-volume-calculator',
    shapeId: 'spherical_cap',
    shapeName: 'Casquete esférico',
    categoryLabel: 'Curvos y domos',
    title: 'Volumen Casquete Esférico',
    h1: 'Calculadora de volumen de casquete esférico',
    metaDescription: 'Calcula el volumen de un domo, cúpula o segmento esférico a partir del radio base y la altura o radio de la esfera. Resultados exactos en litros y m³.',
    keywords: 'calculadora de volumen de casquete esférico, volumen de una cupula, formula casquete esferico, calcular volumen de un domo, capacidad de un tazón esférico, volumen segmento esferico',
    shortTagline: 'Calcula el volumen de cúpulas arquitectónicas, domos geodésicos, tazones y segmentos de esfera.',
    howToCalculate: [
      'Mide el radio de la base circular plana (r) y la altura máxima desde la base hasta la cúspide (h).',
      'Aplica la fórmula geométrica del casquete esférico: V = (πh / 6)(3r² + h²).',
      'Si se conoce el radio de la esfera completa (R), utiliza la relación alternativa: V = (πh² / 3)(3R - h).',
    ],
    formulaHtml: 'V = (πh / 6)(3r² + h²)',
    formulaNote: 'Donde r es el radio de la base y h es la altura del casquete. Cuando h = R, equivale a una semiesfera.',
    practicalExamples: [
      {
        title: 'Cúpulas arquitectónicas',
        desc: 'Cálculo del volumen interior de aire en domos de auditorios, catedrales y planetarios.',
      },
      {
        title: 'Tazones y recipientes esféricos',
        desc: 'Determinación de la capacidad en litros de cuencos, sartenes cóncavas y platos esféricos.',
      },
      {
        title: 'Lentes ópticas y meniscos',
        desc: 'Volumen de material en lentes de vidrio esféricas para óptica de precisión e instrumentación.',
      },
    ],
    faqs: [
      {
        question: '¿Cuál es la fórmula para calcular el volumen de un casquete esférico?',
        answer: 'Usando el radio de la base plana r y la altura h: V = (πh / 6)(3r² + h²). Si conoces el radio de la esfera completa R: V = (πh² / 3)(3R - h).',
      },
      {
        question: '¿Cómo calcular el volumen de aire de una cúpula o domo arquitectónico?',
        answer: 'Mide el diámetro de la base circular (2r) y la altura máxima desde la base al vértice (h), aplicando V = (πh / 6)(3r² + h²).',
      },
      {
        question: '¿Cuál es la diferencia entre una semiesfera y un casquete esférico?',
        answer: 'Una semiesfera es un caso particular donde la altura es exactamente igual al radio (h = r). Cualquier corte a una altura diferente constituye un casquete esférico general.',
      },
    ],
    relatedSpanishSlugs: [
      'calculadora-volumen-esfera',
      'calculadora-volumen-cono',
      'calculadora-volumen-elipsoide',
    ],
    inputLabels: {
      capRadius: 'Radio de la base circular (r)',
      capHeight: 'Altura del casquete (h)',
    },
  },

  'calculadora-volumen-tronco-de-cono': {
    slug: 'calculadora-volumen-tronco-de-cono',
    englishSlug: 'conical-frustum-volume-calculator',
    shapeId: 'conical_frustum',
    shapeName: 'Tronco de cono',
    categoryLabel: 'Curvos y conos',
    title: 'Volumen Tronco de Cono',
    h1: 'Calculadora de volumen de tronco de cono',
    metaDescription: 'Calcula el volumen y capacidad de cubetas, baldes, macetas y conos truncados a partir de los radios superior, inferior y la altura. Resultados en litros.',
    keywords: 'calculadora de volumen de tronco de cono, formula volumen cono truncado, calcular volumen de una cubeta o balde, volumen de una maceta conica, capacidad vaso conico en litros, volumen de cilindro conico invertido',
    shortTagline: 'Calcula el volumen y la capacidad de baldes, cubetas, macetas cónicas y pantallas cónicas truncadas.',
    howToCalculate: [
      'Mide el radio de la base superior (r₁), el radio de la base inferior (r₂) y la altura vertical perpendicular (h).',
      'Calcula la suma de los cuadrados y el producto cruzado de ambos radios: r₁² + r₁r₂ + r₂².',
      'Multiplica la suma anterior por pi y por la altura, y divide entre tres: V = (πh / 3)(r₁² + r₁r₂ + r₂²).',
    ],
    formulaHtml: 'V = ⅓πh(r₁² + r₁r₂ + r₂²)',
    formulaNote: 'Donde r₁ es el radio superior, r₂ es el radio inferior y h es la altura perpendicular vertical.',
    practicalExamples: [
      {
        title: 'Baldes y cubetas de limpieza',
        desc: 'Un balde común con boca de 28 cm, base de 20 cm y alto de 25 cm almacena aproximadamente 11,5 litros.',
      },
      {
        title: 'Macetas cónicas para viveros',
        desc: 'Cálculo de litros de sustrato necesarios para llenar maceteros cónicos de jardinería.',
      },
      {
        title: 'Vasos descartables cónicos',
        desc: 'Determinación exacta del volumen de llenado de bebidas en vasos cónicos para hostelería.',
      },
    ],
    faqs: [
      {
        question: '¿Cuál es la fórmula para calcular el volumen de un tronco de cono?',
        answer: 'La fórmula es V = (πh / 3)(r₁² + r₁r₂ + r₂²), donde h es la altura perpendicular, r₁ es el radio de la base superior y r₂ es el radio de la base inferior.',
      },
      {
        question: '¿Cómo calcular la capacidad en litros de un balde o cubeta común?',
        answer: 'Mide en centímetros los diámetros superior e inferior y la altura vertical. Divide los diámetros entre 2 para obtener los radios, aplica la fórmula del tronco de cono y divide el total de cm³ entre 1.000 para obtener litros.',
      },
      {
        question: '¿Se puede calcular el volumen de un cono truncado directamente con los diámetros?',
        answer: 'Sí, usando la fórmula con diámetros: V = (πh / 12)(d₁² + d₁d₂ + d₂²).',
      },
    ],
    relatedSpanishSlugs: [
      'calculadora-volumen-cono',
      'calculadora-volumen-cilindro',
      'calculadora-volumen-prisma-trapezoidal',
    ],
    inputLabels: {
      topRadius: 'Radio superior (r₁)',
      bottomRadius: 'Radio inferior (r₂)',
      height: 'Altura vertical (h)',
    },
  },

  'calculadora-volumen-elipsoide': {
    slug: 'calculadora-volumen-elipsoide',
    englishSlug: 'ellipsoid-volume-calculator',
    shapeId: 'ellipsoid',
    shapeName: 'Elipsoide',
    categoryLabel: 'Curvos y esferas',
    title: 'Calculadora Volumen Elipsoide',
    h1: 'Calculadora de volumen de un elipsoide',
    metaDescription: 'Calcula el volumen de un elipsoide o esferoide triaxial a partir de sus tres semiejes (a, b, c). Conversiones inmediatas a litros, metros cúbicos y galones.',
    keywords: 'calculadora de volumen de un elipsoide, formula volumen de elipsoide, calcular volumen esferoide oblato, volumen de un balon de rugby, capacidad de un elipsoide, volumen de un esferoide prolato',
    shortTagline: 'Calcula el volumen de elipsoides, balones de rugby, sandías y esferoides oblatos o prolatos a partir de los semiejes.',
    howToCalculate: [
      'Mide los tres semiejes (a, b, c), correspondientes a la mitad de los diámetros en los tres ejes ortogonales x, y, z.',
      'Multiplica los tres semiejes entre sí: a × b × c.',
      'Multiplica el resultado por pi (π) y por cuatro tercios (4/3): V = ⁴⁄₃πabc.',
    ],
    formulaHtml: 'V = ⁴⁄₃πabc',
    formulaNote: 'Donde a, b y c son los semiejes. Si a = b = c, el elipsoide se convierte en una esfera.',
    practicalExamples: [
      {
        title: 'Balón de rugby y fútbol americano',
        desc: 'Un balón reglamentario con semiejes de 14 cm, 8 cm y 8 cm desplaza aproximadamente 3,75 litros de aire.',
      },
      {
        title: 'Sandías y melones ovalados',
        desc: 'Estimación agronómica de volumen y peso de frutos ovalados a partir de sus diámetros cruzados.',
      },
      {
        title: 'Geodesia y modelos planetarios',
        desc: 'Cálculo del volumen del esferoide de referencia terrestre achatado por los polos.',
      },
    ],
    faqs: [
      {
        question: '¿Cuál es la fórmula para calcular el volumen de un elipsoide?',
        answer: 'La fórmula es V = ⁴⁄₃πabc, donde a, b y c representan los tres semiejes (la mitad de los diámetros correspondientes a los ejes x, y, z).',
      },
      {
        question: '¿Qué diferencia hay entre un elipsoide, un esferoide y una esfera?',
        answer: 'En una esfera los tres radios son idénticos (a = b = c). En un esferoide dos radios son iguales (a = b ≠ c). En un elipsoide triaxial los tres radios (a, b, c) son distintos.',
      },
      {
        question: '¿Cómo calcular el volumen de una sandía o balón ovalado?',
        answer: 'Mide la longitud máxima (2c) y los anchos en ambos sentidos perpendiculares (2a y 2b). Divide cada medida entre 2 para obtener a, b, c y calcula V = ⁴⁄₃πabc.',
      },
    ],
    relatedSpanishSlugs: [
      'calculadora-volumen-esfera',
      'calculadora-volumen-capsula',
      'calculadora-volumen-casquete-esferico',
    ],
    inputLabels: {
      semiAxisA: 'Semieje a (x)',
      semiAxisB: 'Semieje b (y)',
      semiAxisC: 'Semieje c (z)',
    },
  },

  'calculadora-volumen-piramide-cuadrada': {
    slug: 'calculadora-volumen-piramide-cuadrada',
    englishSlug: 'square-pyramid-volume-calculator',
    shapeId: 'square_pyramid',
    shapeName: 'Pirámide cuadrada',
    categoryLabel: 'Prismas y pirámides',
    title: 'Volumen Pirámide Cuadrada',
    h1: 'Calculadora de volumen de una pirámide cuadrada',
    metaDescription: 'Calcula el volumen de una pirámide de base cuadrada a partir del lado de la base y la altura vertical o apotema. Fórmulas paso a paso en m³ y litros.',
    keywords: 'calculadora de volumen de una pirámide cuadrada, formula volumen piramide base cuadrada, calcular volumen de una piramide, volumen techo piramidal, sacar volumen piramide base cuadrada, capacidad piramide cuadrada',
    shortTagline: 'Calcula el volumen de pirámides regulares de base cuadrada, techos piramidales y monumentos.',
    howToCalculate: [
      'Mide la longitud de un lado de la base cuadrada (a) y la altura vertical perpendicular (h) desde la base a la cúspide.',
      'Calcula el área de la base cuadrada elevando el lado al cuadrado: Área = a².',
      'Multiplica el área de la base por la altura vertical y divide entre tres: V = ⅓a²h.',
    ],
    formulaHtml: 'V = ⅓a²h',
    formulaNote: 'Donde a es el lado de la base y h es la altura perpendicular. La apotema lateral es s = √(h² + (a/2)²).',
    practicalExamples: [
      {
        title: 'Gran Pirámide de Guiza',
        desc: 'Con una base de 230,4 m y altura de 146,5 m, su volumen original superaba los 2.580.000 m³ de piedra.',
      },
      {
        title: 'Cubiertas piramidales de torres',
        desc: 'Estimación del volumen de aire bajo tejados piramidales de cuatro vertientes en arquitectura civil.',
      },
      {
        title: 'Tolvas piramidales invertidas',
        desc: 'Cálculo de capacidad de descarga para tolvas industriales de base cuadrada en plantas procesadoras.',
      },
    ],
    faqs: [
      {
        question: '¿Cuál es la fórmula del volumen de una pirámide de base cuadrada?',
        answer: 'La fórmula es V = ⅓a²h, donde a es la longitud de un lado de la base cuadrada y h es la altura perpendicular vertical desde el centro de la base hasta la cúspide.',
      },
      {
        question: '¿Cómo calcular la altura vertical si solo conozco la apotema lateral (s)?',
        answer: 'Aplica el teorema de Pitágoras: h = √(s² - (a / 2)²). Luego sustituye el valor de h en la fórmula V = ⅓a²h.',
      },
      {
        question: '¿Por qué el volumen de una pirámide es un tercio del de un prisma?',
        answer: 'Porque tres pirámides que comparten la misma base y altura equivalen exactamente al volumen de un prisma con esas mismas medidas: V = ⅓ × Área Base × h.',
      },
    ],
    relatedSpanishSlugs: [
      'calculadora-volumen-piramide-rectangular',
      'calculadora-volumen-cono',
      'calculadora-volumen-cubo',
    ],
    inputLabels: {
      baseSide: 'Lado de la base cuadrada',
      height: 'Altura vertical',
    },
  },

  'calculadora-volumen-piramide-rectangular': {
    slug: 'calculadora-volumen-piramide-rectangular',
    englishSlug: 'rectangular-pyramid-volume-calculator',
    shapeId: 'rectangular_pyramid',
    shapeName: 'Pirámide rectangular',
    categoryLabel: 'Prismas y pirámides',
    title: 'Pirámide Rectangular Volumen',
    h1: 'Calculadora de volumen de una pirámide rectangular',
    metaDescription: 'Calcula el volumen de una pirámide rectangular o techo a cuatro aguas a partir de largo, ancho y altura vertical. Resultados en metros y pies cúbicos.',
    keywords: 'calculadora de volumen de una pirámide rectangular, volumen piramide base rectangular formula, calcular volumen piramide rectangular, cubicacion techo a cuatro aguas piramidal, capacidad piramide rectangular, sacar volumen piramide base rectangular',
    shortTagline: 'Calcula el volumen de pirámides con base rectangular, techos a cuatro aguas y estructuras alargadas.',
    howToCalculate: [
      'Mide el largo de la base (l), el ancho de la base (w) y la altura perpendicular vertical (h).',
      'Multiplica largo por ancho para obtener el área de la base rectangular: Área = l × w.',
      'Multiplica el área de la base por la altura vertical y divide el total entre tres: V = ⅓lwh.',
    ],
    formulaHtml: 'V = ⅓lwh',
    formulaNote: 'Donde l es el largo de la base, w es el ancho de la base y h es la altura perpendicular vertical.',
    practicalExamples: [
      {
        title: 'Techos a cuatro aguas',
        desc: 'Cubicación del volumen de aire encerrado bajo cubiertas de tejas de cuatro vertientes rectangulares.',
      },
      {
        title: 'Tolvas de carga asimétricas',
        desc: 'Dimensionamiento de tolvas industriales de descarga con sección rectangular en minería y cerealeras.',
      },
      {
        title: 'Monumentos y remates arquitectónicos',
        desc: 'Cálculo de volumen y masa de bloques piramidales rectangulares en cantería y hormigón.',
      },
    ],
    faqs: [
      {
        question: '¿Cuál es la fórmula para calcular el volumen de una pirámide rectangular?',
        answer: 'La fórmula es V = ⅓lwh, donde l es el largo de la base, w es el ancho de la base y h es la altura vertical perpendicular.',
      },
      {
        question: '¿Qué medidas se necesitan para calcular el volumen de un ático bajo techo piramidal?',
        answer: 'Se necesitan el largo y el ancho del piso del ático (l y w) y la altura vertical máxima medida desde el piso hasta el punto más alto del techo (h).',
      },
      {
        question: '¿En qué unidades se expresa el volumen de una pirámide rectangular?',
        answer: 'Se expresa en unidades cúbicas como metros cúbicos (m³), centímetros cúbicos (cm³) o pies cúbicos (ft³).',
      },
    ],
    relatedSpanishSlugs: [
      'calculadora-volumen-piramide-cuadrada',
      'calculadora-volumen-prisma-rectangular',
      'calculadora-volumen-prisma-triangular',
    ],
    inputLabels: {
      length: 'Largo de la base',
      width: 'Ancho de la base',
      height: 'Altura vertical',
    },
  },

  'calculadora-volumen-prisma-triangular': {
    slug: 'calculadora-volumen-prisma-triangular',
    englishSlug: 'triangular-prism-volume-calculator',
    shapeId: 'triangular_prism',
    shapeName: 'Prisma triangular',
    categoryLabel: 'Prismas y pirámides',
    title: 'Volumen Prisma Triangular',
    h1: 'Calculadora de volumen de un prisma triangular',
    metaDescription: 'Calcula el volumen de un prisma triangular, cuña o carpa a dos aguas a partir de la base, altura del triángulo y longitud. Capacidad en litros y m³.',
    keywords: 'calculadora de volumen de un prisma triangular, formula volumen prisma triangular, calcular volumen de una carpa o cuña, prisma triangular equilatero volumen, capacidad prisma triangular en litros, volumen prisma base triangular',
    shortTagline: 'Calcula el volumen de prismas triangulares, cuñas mecánicas, techos a dos aguas y carpas canadienses.',
    howToCalculate: [
      'Mide la base del triángulo frontal (b), la altura perpendicular del triángulo (htri) y la longitud del prisma (l).',
      'Calcula el área del triángulo frontal: Área = ½ × b × htri.',
      'Multiplica el área de la sección triangular por la longitud longitudinal: V = ½ × b × htri × l.',
    ],
    formulaHtml: 'V = ½ × b × htri × l',
    formulaNote: 'Donde b es la base del triángulo, htri es su altura y l es la longitud del prisma.',
    practicalExamples: [
      {
        title: 'Tiendas de campaña tipo canadiense',
        desc: 'Una carpa con frontis de 1,6 m de base, 1,2 m de alto y 2,2 m de fondo encierra 2,11 m³ de aire interior.',
      },
      {
        title: 'Tejados a dos aguas',
        desc: 'Cubicaje del volumen de desvanes y buhardillas triangulares en proyectos residenciales.',
      },
      {
        title: 'Cuñas y rampas mecánicas',
        desc: 'Cálculo de volumen de hormigón y acero para cuñas de apoyo y rampas de acceso vehicular.',
      },
    ],
    faqs: [
      {
        question: '¿Cuál es la fórmula del volumen de un prisma triangular?',
        answer: 'Se multiplica el área del triángulo frontal por la longitud del prisma: V = ½ × b × htri × l, donde b es la base del triángulo, htri es la altura del triángulo y l es el largo del prisma.',
      },
      {
        question: '¿Cómo calcular el volumen de un prisma triangular equilátero?',
        answer: 'Para un triángulo equilátero con lados s, el área base es (√3 / 4)s². El volumen total es V = (√3 / 4)s² × l.',
      },
      {
        question: '¿Cómo calcular el volumen de aire de una tienda de campaña tipo canadiense (techo a dos aguas)?',
        answer: 'Mide el ancho de la base de la entrada (b), la altura central del poste (htri) y la profundidad de la tienda (l). Aplica V = 0.5 × b × htri × l.',
      },
    ],
    relatedSpanishSlugs: [
      'calculadora-volumen-prisma-rectangular',
      'calculadora-volumen-prisma-trapezoidal',
      'calculadora-volumen-piramide-rectangular',
    ],
    inputLabels: {
      triBase: 'Base del triángulo frontal (b)',
      triHeight: 'Altura del triángulo (htri)',
      length: 'Longitud del prisma (l)',
    },
  },

  'calculadora-volumen-tubo': {
    slug: 'calculadora-volumen-tubo',
    englishSlug: 'pipe-volume-calculator',
    shapeId: 'hollow_cylinder',
    shapeName: 'Tubo cilíndrico',
    categoryLabel: 'Tanques y tubos',
    title: 'Calculadora Volumen de Tubo',
    h1: 'Calculadora de volumen de un tubo',
    metaDescription: 'Calcula la capacidad interna de líquido y el volumen del material de la pared de un tubo o cilindro hueco a partir de los radios interno, externo y largo.',
    keywords: 'calculadora de volumen de un tubo, volumen de un cilindro hueco formula, capacidad de agua de una tuberia, volumen de pared de un tubo, calcular litros en una tuberia, volumen cilindro hueco calculadora',
    shortTagline: 'Calcula la capacidad de líquido interno y el volumen de pared de tuberías, cañerías y cilindros huecos.',
    howToCalculate: [
      'Mide el radio exterior (R), el radio interior (r) y la longitud total del tubo (L). El radio interior debe ser menor que el exterior.',
      'Para la capacidad de líquido interna que cabe en el tubo, aplica: Vlíquido = πr²L.',
      'Para el volumen del material sólido de la pared del tubo, resta el hueco interior: Vpared = π(R² - r²)L.',
    ],
    formulaHtml: 'V = π(R² - r²)L',
    formulaNote: 'Donde R es el radio exterior, r es el radio interior y L es la longitud. La capacidad interna de fluido es V = πr²L.',
    practicalExamples: [
      {
        title: 'Capacidad de agua en cañerías',
        desc: 'Un tramo de 10 metros de tubería con 50 mm de diámetro interior contiene exactamente 19,64 litros de agua.',
      },
      {
        title: 'Peso de tuberías de acero y PVC',
        desc: 'Multiplica el volumen de pared por la densidad del material para conocer el peso exacto por metro lineal.',
      },
      {
        title: 'Manguitos y cilindros huecos mecánicos',
        desc: 'Dimensionamiento de bujes y camisas de fricción cilíndricas en talleres de mecanizado.',
      },
    ],
    faqs: [
      {
        question: '¿Cómo se calcula la capacidad interna de líquido que cabe en un tubo?',
        answer: 'Usa el radio interior (r) y la longitud (L) del tubo con la fórmula del cilindro clásico: Vlíquido = πr²L.',
      },
      {
        question: '¿Cuál es la fórmula para calcular el volumen del material sólido de la pared del tubo?',
        answer: 'La fórmula es Vpared = π(R² - r²)L, donde R es el radio exterior, r es el radio interior y L es la longitud.',
      },
      {
        question: '¿Cuántos litros de agua hay en 10 metros de tubería de 50 mm de diámetro interior?',
        answer: 'Con radio interno de 2,5 cm y longitud de 1.000 cm: V = π × 2,5² × 1.000 ≈ 19.635 cm³ ≈ 19,64 litros.',
      },
    ],
    relatedSpanishSlugs: [
      'calculadora-volumen-cilindro',
      'calculadora-volumen-tanque-cilindrico-horizontal',
      'calculadora-volumen-toroide',
    ],
    inputLabels: {
      outerRadius: 'Radio exterior (R)',
      innerRadius: 'Radio interior (r)',
      length: 'Longitud del tubo (L)',
    },
  },

  'calculadora-volumen-toroide': {
    slug: 'calculadora-volumen-toroide',
    englishSlug: 'torus-volume-calculator',
    shapeId: 'torus',
    shapeName: 'Toroide',
    categoryLabel: 'Curvos y anillos',
    title: 'Calculadora Volumen Toroide',
    h1: 'Calculadora de volumen de un toroide',
    metaDescription: 'Calcula el volumen y área superficial de un toroide, rosquilla u junta tórica (O-ring) a partir del radio mayor (R) y el radio menor del tubo (r).',
    keywords: 'calculadora de volumen de un toroide, volumen de un toro formula, calcular volumen de un o-ring, volumen de una dona geometrica, capacidad de un toroide circular, volumen junta torica calculadora',
    shortTagline: 'Calcula el volumen y la superficie de toroides, donas geométricas, juntas tóricas (O-rings) y cámaras de neumáticos.',
    howToCalculate: [
      'Mide el radio mayor (R) desde el centro exacto del hueco hasta el eje central del tubo circular.',
      'Mide el radio menor (r), que es el radio de la sección transversal circular del tubo. Debe ser menor o igual que R.',
      'Aplica el teorema de Pappus-Guldin multiplicando dos veces pi al cuadrado por ambos radios: V = 2π²Rr².',
    ],
    formulaHtml: 'V = 2π²Rr²',
    formulaNote: 'Donde R es el radio mayor y r es el radio menor. El área superficial exterior es A = 4π²Rr.',
    practicalExamples: [
      {
        title: 'Juntas tóricas (O-rings) de estanqueidad',
        desc: 'Cálculo del volumen de elastómero o silicona necesario para fabricar juntas de sellado hidráulico.',
      },
      {
        title: 'Cámaras de neumáticos de bicicleta',
        desc: 'Cálculo del volumen de aire presurizado contenido en ruedas toroidales para calibración de presión.',
      },
      {
        title: 'Núcleos magnéticos toroidales',
        desc: 'Volumen y masa de ferrita en transformadores toroidales e inductores de electrónica de potencia.',
      },
    ],
    faqs: [
      {
        question: '¿Cuál es la fórmula para el volumen de un toroide?',
        answer: 'La fórmula es V = 2π²Rr², donde R es el radio mayor (distancia desde el centro del hueco al eje central del tubo) y r es el radio menor (radio del tubo).',
      },
      {
        question: '¿Cómo calcular el volumen de una junta tórica (O-ring) a partir del diámetro interior y su sección transversal?',
        answer: 'El radio menor es la mitad del espesor (r = CS / 2) y el radio mayor es R = (ID + CS) / 2. Luego sustituye ambos valores en V = 2π²Rr².',
      },
      {
        question: '¿Cuál es la fórmula del área superficial exterior de un toroide?',
        answer: 'El área superficial de un toroide se calcula con A = 4π²Rr.',
      },
    ],
    relatedSpanishSlugs: [
      'calculadora-volumen-tubo',
      'calculadora-volumen-cilindro',
      'calculadora-volumen-esfera',
    ],
    inputLabels: {
      majorRadius: 'Radio mayor (R)',
      minorRadius: 'Radio menor (r)',
    },
  },

  'calculadora-volumen-prisma-trapezoidal': {
    slug: 'calculadora-volumen-prisma-trapezoidal',
    englishSlug: 'trapezoidal-prism-volume-calculator',
    shapeId: 'trapezoidal_prism',
    shapeName: 'Prisma trapezoidal',
    categoryLabel: 'Prismas y zanjas',
    title: 'Volumen Prisma Trapezoidal',
    h1: 'Calculadora de volumen de un prisma trapezoidal',
    metaDescription: 'Calcula el volumen de zanjas con talud, canales de riego, abrevaderos y prismas trapezoidales a partir del ancho superior, inferior, altura y largo.',
    keywords: 'calculadora de volumen de un prisma trapezoidal, calcular volumen de una zanja, volumen de un canal de riego, formula volumen prisma trapezoidal, capacidad de un abrevadero en litros, cubicacion zanja trapezoidal excavacion',
    shortTagline: 'Calcula el volumen de excavación en zanjas con talud, canales de riego, comederos y abrevaderos trapezoidales.',
    howToCalculate: [
      'Mide el ancho superior en la superficie (a), el ancho inferior en el fondo (b), la profundidad vertical (h) y el largo longitudinal (L).',
      'Calcula el área del trapecio frontal: Área = ((a + b) / 2) × h.',
      'Multiplica el área trapezoidal por la longitud del canal o zanja: V = ((a + b) / 2) × h × L.',
    ],
    formulaHtml: 'V = ((a + b) / 2) × h × L',
    formulaNote: 'Donde a es el ancho superior, b es el ancho inferior, h es la profundidad y L es el largo.',
    practicalExamples: [
      {
        title: 'Excavación de zanjas y canales',
        desc: 'Una zanja de 2 m de ancho superior, 1 m de fondo, 1,5 m de profundidad y 20 m de largo requiere mover 45 m³ de tierra.',
      },
      {
        title: 'Canales de riego agrícola',
        desc: 'Cálculo de capacidad de retención y caudal en canales de hormigón con taludes inclinados.',
      },
      {
        title: 'Abrevaderos y bebederos de ganado',
        desc: 'Determinación exacta de los litros de agua potable que puede almacenar un comedero trapezoidal.',
      },
    ],
    faqs: [
      {
        question: '¿Cuál es la fórmula para calcular el volumen de un prisma trapezoidal?',
        answer: 'La fórmula es V = ((a + b) / 2) × h × L, donde a es el ancho superior, b es el ancho del fondo, h es la profundidad vertical y L es la longitud.',
      },
      {
        question: '¿Cómo calcular los metros cúbicos de tierra a excavar en una zanja con taludes?',
        answer: 'Mide el ancho en la superficie (a), el ancho en el fondo (b), la profundidad (h) y el largo (L) en metros. Aplica V = ((a + b) / 2) × h × L para obtener los m³ de tierra a remover.',
      },
      {
        question: '¿Cómo saber la capacidad de agua de un comedero o abrevadero trapezoidal?',
        answer: 'Calcula el volumen en centímetros cúbicos y divide el resultado entre 1.000 para obtener la capacidad exacta en litros de agua.',
      },
    ],
    relatedSpanishSlugs: [
      'calculadora-volumen-prisma-rectangular',
      'calculadora-volumen-prisma-triangular',
      'calculadora-volumen-tronco-de-cono',
    ],
    inputLabels: {
      topWidth: 'Ancho superior (a)',
      bottomWidth: 'Ancho inferior (b)',
      height: 'Profundidad vertical (h)',
      length: 'Longitud (L)',
    },
  },

  'calculadora-volumen-tanque-cilindrico-horizontal': {
    slug: 'calculadora-volumen-tanque-cilindrico-horizontal',
    englishSlug: 'horizontal-tank-volume-calculator',
    shapeId: 'horizontal_tank_fill',
    shapeName: 'Tanque horizontal',
    categoryLabel: 'Tanques y tubos',
    title: 'Volumen Tanque Horizontal',
    h1: 'Calculadora de volumen de tanque cilíndrico horizontal',
    metaDescription: 'Calcula los litros exactos de combustible o agua en un tanque cilíndrico horizontal parcialmente lleno midiendo el nivel de líquido con varilla.',
    keywords: 'calculadora de volumen de tanque cilindrico horizontal, calcular litros tanque horizontal por varilla, volumen liquido tanque combustible horizontal, tabla de aforo tanque cilindrico horizontal, capacidad tanque de gasoil horizontal, litros restantes tanque cilindrico horizontal',
    shortTagline: 'Calcula los litros exactos de combustible, gasoil o agua en un tanque cilíndrico horizontal a partir del nivel de la varilla.',
    howToCalculate: [
      'Mide el radio interior del tanque (r) o la mitad del diámetro interno, y la longitud cilíndrica recta (L).',
      'Mide la profundidad o nivel de líquido mojado (d) mediante una varilla graduada o sensor de nivel. El valor debe estar entre 0 y 2r.',
      'Aplica la fórmula trigonométrica del segmento circular: V = [r² arccos((r - d) / r) - (r - d)√(2rd - d²)] × L.',
    ],
    formulaHtml: 'V = [r² arccos((r - d)/r) - (r - d)√(2rd - d²)] × L',
    formulaNote: 'Donde r = radio, d = profundidad de llenado (0 ≤ d ≤ 2r) y L = longitud. El ángulo arccos se calcula en radianes.',
    practicalExamples: [
      {
        title: 'Aforo de tanques de combustible diésel',
        desc: 'Conocer exactamente cuántos litros restan en un tanque cisterna horizontal enterrado a partir de la marca de varilla.',
      },
      {
        title: 'Depósitos de reserva de agua para riego',
        desc: 'Monitoreo de reserva líquida disponible en tanques cilíndricos horizontales mediante lectura en centímetros.',
      },
      {
        title: 'Cisternas de transporte en camiones',
        desc: 'Cálculo del volumen ocupado y espacio libre de seguridad restante para evitar sobrecargas de carga líquida.',
      },
    ],
    faqs: [
      {
        question: '¿Cómo calcular los litros de un tanque cilíndrico horizontal parcialmente lleno?',
        answer: 'Para radio r, longitud L y altura de líquido medida por varilla d: V = [r² arccos((r - d) / r) - (r - d)√(2rd - d²)] × L (con arccos en radianes).',
      },
      {
        question: '¿Por qué la altura del líquido no es directamente proporcional al volumen en un tanque horizontal?',
        answer: 'Porque la sección circular es más ancha en el medio y más estrecha en los extremos superior e inferior. Cuando el tanque está al 25% de altura contiene bastante menos del 25% del volumen total.',
      },
      {
        question: '¿Cómo convertir la medición en centímetros de la varilla a litros de combustible?',
        answer: 'Ingresa el diámetro, largo y nivel en centímetros en la fórmula horizontal; el resultado en cm³ se divide entre 1.000 para conocer los litros exactos de gasoil o gasolina que quedan en el depósito.',
      },
    ],
    relatedSpanishSlugs: [
      'calculadora-volumen-cilindro',
      'calculadora-volumen-capsula',
      'calculadora-volumen-tubo',
    ],
    inputLabels: {
      radius: 'Radio del tanque (r)',
      length: 'Longitud del tanque (L)',
      fillDepth: 'Nivel del líquido con varilla (d)',
    },
  },
};

export const SPANISH_SLUGS = Object.keys(SPANISH_TOOLS);
