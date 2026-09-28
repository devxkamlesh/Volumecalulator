export interface RussianFaq {
  question: string;
  answer: string;
}

export interface RussianPracticalExample {
  title: string;
  desc: string;
}

export interface RussianToolDetail {
  slug: string;
  englishSlug: string;
  spanishSlug: string;
  germanSlug: string;
  frenchSlug: string;
  portugueseSlug: string;
  italianSlug: string;
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
  practicalExamples: RussianPracticalExample[];
  faqs: RussianFaq[];
  relatedRussianSlugs: string[];
  inputLabels: Record<string, string>;
}

export const RUSSIAN_TOOLS: Record<string, RussianToolDetail> = {
  'kalkulyator-obema-kuba': {
    slug: 'kalkulyator-obema-kuba',
    englishSlug: 'cube-volume-calculator',
    spanishSlug: 'calculadora-volumen-cubo',
    germanSlug: 'wuerfel-volumen-rechner',
    frenchSlug: 'calculateur-volume-cube',
    portugueseSlug: 'calculadora-volume-cubo',
    italianSlug: 'calcolatore-volume-cubo',
    shapeId: 'cube',
    shapeName: 'Куб',
    categoryLabel: '3D геометрия',
    title: 'Калькулятор объема куба',
    h1: 'Калькулятор объема куба',
    metaDescription: 'Рассчитайте объем куба по ребру или площади поверхности. Мгновенный перевод в литры, кубические метры и галлоны с формулой и пояснениями.',
    keywords: 'калькулятор объема куба, рассчитать объем куба, формула объема куба, объем куба в литрах, емкость кубической емкости',
    shortTagline: 'Рассчитайте объем кубических коробок, контейнеров и баков по длине одного ребра.',
    howToCalculate: [
      'Измерьте длину одного ребра куба a в сантиметрах или метрах, так как у правильного куба все 12 ребер равны между собой.',
      'Умножьте длину ребра саму на себя трижды по формуле V = a × a × a = a³.',
      'Переведите полученный результат в литры, умножив кубические метры на 1 000, либо разделите кубические сантиметры на 1 000.',
    ],
    formulaHtml: 'V = a³',
    formulaNote: 'Где a обозначает длину ребра куба. Полная площадь поверхности вычисляется по формуле S = 6a².',
    practicalExamples: [
      {
        title: 'Кубические картонные коробки',
        desc: 'Коробка с ребром 50 см имеет объем 125 000 см³, что соответствует ровно 125 литрам упаковочного пространства.',
      },
      {
        title: 'Кубические аквариумы и емкости',
        desc: 'Стеклянный куб со стороной 40 см вмещает 64 литра воды при заполнении до верхнего края.',
      },
    ],
    faqs: [
      {
        question: 'Как рассчитать объем куба по длине ребра?',
        answer: 'Длину ребра a умножают саму на себя трижды: V = a³. Например, при ребре 5 см объем равен 125 см³.',
      },
      {
        question: 'Как найти объем куба, если известна только площадь поверхности (S)?',
        answer: 'Найдите ребро по формуле a = √(S / 6) и возведите его в куб: V = a³.',
      },
      {
        question: 'Сколько литров воды вмещает куб с ребром 1 метр?',
        answer: 'Куб объемом 1 м³ вмещает ровно 1 000 литров чистой пресной воды.',
      },
    ],
    relatedRussianSlugs: [
      'kalkulyator-obema-parallelepipeda',
      'kalkulyator-obema-tsilindra',
      'kalkulyator-obema-shara',
      'kalkulyator-obema-kvadratnoj-piramidy',
    ],
    inputLabels: {
      edge: 'Длина ребра (a)',
    },
  },

  'kalkulyator-obema-parallelepipeda': {
    slug: 'kalkulyator-obema-parallelepipeda',
    englishSlug: 'box-volume-calculator',
    spanishSlug: 'calculadora-volumen-prisma-rectangular',
    germanSlug: 'quader-volumen-rechner',
    frenchSlug: 'calculateur-volume-pave-droit',
    portugueseSlug: 'calculadora-volume-prisma-retangular',
    italianSlug: 'calcolatore-volume-prisma-rettangolare',
    shapeId: 'rectangular_prism',
    shapeName: 'Параллелепипед',
    categoryLabel: 'Призмы и коробки',
    title: 'Калькулятор параллелепипеда',
    h1: 'Калькулятор объема параллелепипеда',
    metaDescription: 'Рассчитайте объем прямоугольного параллелепипеда и коробки по длине, ширине и высоте. Перевод в литры и м³ для доставки грузов и строительства.',
    keywords: 'калькулятор объема параллелепипеда, калькулятор объема коробки, расчет объема коробки в м3, объем прямоугольного параллелепипеда формула, вместимость коробки в литрах',
    shortTagline: 'Вычислите вместимость посылок, комнат, контейнеров и прямоугольных резервуаров.',
    howToCalculate: [
      'Измерьте длину a, ширину b и высоту h предмета в одинаковых линейных единицах.',
      'Перемножьте три габарита между собой по формуле объема: V = a × b × h.',
      'Для получения кубических метров разделите кубические сантиметры на 1 000 000.',
    ],
    formulaHtml: 'V = a · b · h',
    formulaNote: 'Где a обозначает длину, b ширину, а h высоту. Полная площадь поверхности равна S = 2(ab + ah + bh).',
    practicalExamples: [
      {
        title: 'Грузовые картонные коробки',
        desc: 'Транспортный короб размером 60 × 40 × 40 см имеет объем 96 000 см³, что составляет ровно 0,096 м³ или 96 литров.',
      },
      {
        title: 'Прямоугольные бассейны и купели',
        desc: 'Купель размером 3 × 2 метра с глубиной 1,5 метра вмещает ровно 9 000 литров (9 м³) воды.',
      },
    ],
    faqs: [
      {
        question: 'Какова формула объема прямоугольного параллелепипеда?',
        answer: 'Формула имеет вид V = a × b × h, где перемножаются длина, ширина и высота.',
      },
      {
        question: 'Как рассчитать объем картонной коробки в кубических метрах (м³)?',
        answer: 'Перемножьте длину, ширину и высоту в сантиметрах и разделите полученное число на 1 000 000.',
      },
      {
        question: 'Как перевести объем коробки в литры?',
        answer: 'Рассчитайте объем в кубических сантиметрах и разделите полученное значение на 1 000.',
      },
    ],
    relatedRussianSlugs: [
      'kalkulyator-obema-kuba',
      'kalkulyator-obema-tsilindra',
      'kalkulyator-obema-truby',
      'kalkulyator-obema-pryamougolnoj-piramidy',
    ],
    inputLabels: {
      length: 'Длина (a)',
      width: 'Ширина (b)',
      height: 'Высота (h)',
    },
  },

  'kalkulyator-obema-tsilindra': {
    slug: 'kalkulyator-obema-tsilindra',
    englishSlug: 'cylinder-volume-calculator',
    spanishSlug: 'calculadora-volumen-cilindro',
    germanSlug: 'zylinder-volumen-rechner',
    frenchSlug: 'calculateur-volume-cylindre',
    portugueseSlug: 'calculadora-volume-cilindro',
    italianSlug: 'calcolatore-volume-cilindro',
    shapeId: 'cylinder',
    shapeName: 'Цилиндр',
    categoryLabel: 'Круглые тела',
    title: 'Калькулятор объема цилиндра',
    h1: 'Калькулятор объема цилиндра',
    metaDescription: 'Онлайн расчет объема цилиндра через радиус или диаметр и высоту. Перевод объема в литры, кубические метры и галлоны с пошаговым решением.',
    keywords: 'калькулятор объема цилиндра, расчет объема цилиндра в литрах, формула объема цилиндра, объем цилиндра через диаметр, вместимость круглого бака',
    shortTagline: 'Узнайте вместимость круглых бочек, вертикальных цистерн, колонн и баков.',
    howToCalculate: [
      'Измерьте радиус круглого основания r либо измерьте диаметр d и разделите его на два.',
      'Вычислите площадь основания: S = π × r².',
      'Умножьте полученную площадь на высоту цилиндра: V = π × r² × h.',
    ],
    formulaHtml: 'V = π · r² · h',
    formulaNote: 'Где r обозначает радиус основания, а h обозначает высоту. При расчете по диаметру формула принимает вид V = (π · d² · h) / 4.',
    practicalExamples: [
      {
        title: 'Стандартные металлические бочки на 200 литров',
        desc: 'Промышленная бочка радиусом 28,5 см и высотой 85 см вмещает около 216 литров технической жидкости.',
      },
      {
        title: 'Круглые бетонные кольца для колодцев',
        desc: 'Колодезное кольцо КС-10-9 с внутренним диаметром 100 см и высотой 90 см вмещает 707 литров воды.',
      },
    ],
    faqs: [
      {
        question: 'Какова формула для расчета объема цилиндра?',
        answer: 'Формула имеет вид V = π · r² · h, где r обозначает радиус основания, а h обозначает высоту цилиндра.',
      },
      {
        question: 'Как рассчитать объем цилиндра сразу через диаметр (d)?',
        answer: 'Примените прямую расчетную формулу V = (π · d² · h) / 4.',
      },
      {
        question: 'Сколько литров вмещает цилиндрический бак?',
        answer: 'Рассчитайте объем в кубических метрах и умножьте на 1 000 для перевода значения в литры.',
      },
    ],
    relatedRussianSlugs: [
      'kalkulyator-obema-truby',
      'kalkulyator-obema-gorizontalnogo-rezervuara',
      'kalkulyator-obema-konusa',
      'kalkulyator-obema-kapsuly',
    ],
    inputLabels: {
      radius: 'Радиус основания (r)',
      height: 'Высота цилиндра (h)',
    },
  },

  'kalkulyator-obema-shara': {
    slug: 'kalkulyator-obema-shara',
    englishSlug: 'sphere-volume-calculator',
    spanishSlug: 'calculadora-volumen-esfera',
    germanSlug: 'kugel-volumen-rechner',
    frenchSlug: 'calculateur-volume-sphere',
    portugueseSlug: 'calculadora-volume-esfera',
    italianSlug: 'calcolatore-volume-sfera',
    shapeId: 'sphere',
    shapeName: 'Шар и сфера',
    categoryLabel: 'Круглые тела',
    title: 'Калькулятор объема шара',
    h1: 'Калькулятор объема шара',
    metaDescription: 'Вычислите объем шара или сферы по радиусу либо диаметру. Мгновенная конвертация в кубические метры, литры и расчет полусферы онлайн.',
    keywords: 'калькулятор объема шара, объем сферы формула, рассчитать объем шара по диаметру, объем шара в литрах, калькулятор объема сферы',
    shortTagline: 'Рассчитайте объем спортивных мячей, сферических резервуаров и круглых деталей.',
    howToCalculate: [
      'Определите радиус шара r от центральной точки до внешней границы.',
      'Возведите радиус в третью степень: r³ = r × r × r.',
      'Умножьте куб радиуса на четыре трети и на число пи: V = (4/3) × π × r³.',
    ],
    formulaHtml: 'V = ⁴⁄₃ · π · r³',
    formulaNote: 'Где r обозначает радиус. Площадь внешней поверхности сферы равна S = 4πr². Через диаметр объем равен V = (π · d³) / 6.',
    practicalExamples: [
      {
        title: 'Футбольные и баскетбольные мячи',
        desc: 'Стандартный баскетбольный мяч радиусом 12 см имеет внутренний объем около 7,24 литра воздуха.',
      },
      {
        title: 'Сферические газовые резервуары',
        desc: 'Промышленный шаровой газгольдер диаметром 10 метров вмещает около 523,6 кубических метров газа.',
      },
    ],
    faqs: [
      {
        question: 'Какова формула объема шара?',
        answer: 'Формула имеет вид V = (4/3) · π · r³, где r обозначает радиус шара.',
      },
      {
        question: 'Как вычислить объем сферы через диаметр?',
        answer: 'Используйте готовую формулу V = (π · d³) / 6 без предварительного вычисления радиуса.',
      },
      {
        question: 'Как найти объем полусферы (полушара)?',
        answer: 'Разделите объем целого шара на два: V = (2/3) · π · r³.',
      },
    ],
    relatedRussianSlugs: [
      'kalkulyator-obema-sharovogo-segmenta',
      'kalkulyator-obema-kapsuly',
      'kalkulyator-obema-ellipsoida',
      'kalkulyator-obema-tsilindra',
    ],
    inputLabels: {
      radius: 'Радиус сферы (r)',
    },
  },

  'kalkulyator-obema-konusa': {
    slug: 'kalkulyator-obema-konusa',
    englishSlug: 'cone-volume-calculator',
    spanishSlug: 'calculadora-volumen-cono',
    germanSlug: 'kegel-volumen-rechner',
    frenchSlug: 'calculateur-volume-cone',
    portugueseSlug: 'calculadora-volume-cone',
    italianSlug: 'calcolatore-volume-cono',
    shapeId: 'cone',
    shapeName: 'Конус',
    categoryLabel: 'Конусы и пирамиды',
    title: 'Калькулятор объема конуса',
    h1: 'Калькулятор объема конуса',
    metaDescription: 'Онлайн калькулятор объема круглого конуса по радиусу и высоте. Расчет образующей, площади поверхности и объема сыпучих материалов в литрах.',
    keywords: 'калькулятор объема конуса, формула объема конуса, объем круглого конуса калькулятор, расчет конуса через образующую, вместимость конуса в литрах',
    shortTagline: 'Вычислите кубатуру насыпей песка, конических воронок, бункеров и башен.',
    howToCalculate: [
      'Измерьте радиус круглого основания r и вертикальную высоту h от центра основания до вершины.',
      'Вычислите площадь основания: S = π × r².',
      'Умножьте полученную площадь на высоту и разделите на три: V = (1/3) × π × r² × h.',
    ],
    formulaHtml: 'V = ⅓ · π · r² · h',
    formulaNote: 'Где r обозначает радиус, а h вертикальную высоту. Длина образующей равна l = √(r² + h²).',
    practicalExamples: [
      {
        title: 'Насыпи песка и щебня на складах',
        desc: 'Песчаный конус радиусом основания 4 метра и высотой 2,5 метра содержит около 41,9 м³ строительного материала.',
      },
      {
        title: 'Конические дозирующие бункеры',
        desc: 'Аграрный бункер радиусом 1,2 метра и высотой 2 метра вмещает около 3 016 литров зерна.',
      },
    ],
    faqs: [
      {
        question: 'Какова формула объема прямого конуса?',
        answer: 'Формула имеет вид V = (1/3) · π · r² · h, где r равен радиусу, а h равен вертикальной высоте.',
      },
      {
        question: 'Как объем конуса соотносится с объемом цилиндра?',
        answer: 'Конус равен ровно одной трети (1/3) объема цилиндра с таким же радиусом основания и высотой.',
      },
      {
        question: 'Как найти высоту конуса через образующую (l)?',
        answer: 'Высоту находят по теореме Пифагора: h = √(l² - r²).',
      },
    ],
    relatedRussianSlugs: [
      'kalkulyator-obema-usechennogo-konusa',
      'kalkulyator-obema-tsilindra',
      'kalkulyator-obema-kvadratnoj-piramidy',
      'kalkulyator-obema-sharovogo-segmenta',
    ],
    inputLabels: {
      radius: 'Радиус основания (r)',
      height: 'Высота конуса (h)',
    },
  },

  'kalkulyator-obema-kapsuly': {
    slug: 'kalkulyator-obema-kapsuly',
    englishSlug: 'capsule-volume-calculator',
    spanishSlug: 'calculadora-volumen-capsula',
    germanSlug: 'kapsel-volumen-rechner',
    frenchSlug: 'calculateur-volume-capsule',
    portugueseSlug: 'calculadora-volume-capsula',
    italianSlug: 'calcolatore-volume-capsula',
    shapeId: 'capsule',
    shapeName: 'Капсула',
    categoryLabel: 'Резервуары и емкости',
    title: 'Калькулятор объема капсулы',
    h1: 'Калькулятор объема капсулы',
    metaDescription: 'Рассчитайте объем геометрической капсулы и горизонтального газгольдера с полусферическими доньями. Точный расчет объема в литрах и м³.',
    keywords: 'калькулятор объема капсулы, объем капсулы формула, объем газгольдера калькулятор, емкость с полусферическими днищами, объем таблетки капсулы',
    shortTagline: 'Расчет объема промышленных газгольдеров СУГ и фармацевтических капсул.',
    howToCalculate: [
      'Определите радиус полусферических днищ r и длину цилиндрической средней секции a.',
      'Рассчитайте объем сферы, образуемой двумя доньями вместе: V_сферы = (4/3) × π × r³.',
      'Рассчитайте объем центрального цилиндра: V_цилиндра = π × r² × a, затем сложите обе величины.',
    ],
    formulaHtml: 'V = π · r² · (⁴⁄₃r + a)',
    formulaNote: 'Где r обозначает радиус полусфер, a обозначает длину цилиндра. Общая габаритная длина составляет L = a + 2r.',
    practicalExamples: [
      {
        title: 'Газгольдеры для сжиженного углеводородного газа',
        desc: 'Резервуар с радиусом 1 метр и цилиндрической частью 4 метра имеет вместимость около 16 755 литров газа.',
      },
      {
        title: 'Желатиновые фармацевтические капсулы',
        desc: 'Медицинская капсула типоразмера 00 вмещает около 0,91 миллилитра порошкообразного препарата.',
      },
    ],
    faqs: [
      {
        question: 'Какова геометрическая формула объема капсулы?',
        answer: 'Формула имеет вид V = π · r² · ((4/3)r + a), где a обозначает длину цилиндрической части, а r обозначает радиус.',
      },
      {
        question: 'Как найти длину цилиндра (a) из общей длины (L)?',
        answer: 'Вычтите диаметр из общей длины корпуса: a = L - 2r.',
      },
      {
        question: 'Где применяется данный расчет?',
        answer: 'Расчет используют в фармацевтике для дозирования гранул и в промышленности для газгольдеров сжиженного газа.',
      },
    ],
    relatedRussianSlugs: [
      'kalkulyator-obema-tsilindra',
      'kalkulyator-obema-shara',
      'kalkulyator-obema-gorizontalnogo-rezervuara',
      'kalkulyator-obema-truby',
    ],
    inputLabels: {
      radius: 'Радиус полусфер (r)',
      side: 'Длина цилиндра (a)',
    },
  },

  'kalkulyator-obema-sharovogo-segmenta': {
    slug: 'kalkulyator-obema-sharovogo-segmenta',
    englishSlug: 'spherical-cap-volume-calculator',
    spanishSlug: 'calculadora-volumen-casquete-esferico',
    germanSlug: 'kugelsegment-volumen-rechner',
    frenchSlug: 'calculateur-volume-calotte-spherique',
    portugueseSlug: 'calculadora-volume-calota-esferica',
    italianSlug: 'calcolatore-volume-calotta-sferica',
    shapeId: 'spherical_cap',
    shapeName: 'Шаровой сегмент',
    categoryLabel: 'Круглые тела',
    title: 'Объем шарового сегмента',
    h1: 'Калькулятор объема шарового сегмента',
    metaDescription: 'Рассчитайте объем шарового сегмента, архитектурного купола или сферической чаши онлайн. Формула с радиусом основания и высотой сегмента.',
    keywords: 'калькулятор объема сферического сегмента, объем шарового сегмента формула, расчет объема купола, объем сферической чаши, объем сегмента шара',
    shortTagline: 'Расчет объема строительных куполов, круглых днищ цистерн и сферических чаш.',
    howToCalculate: [
      'Измерьте радиус круговой плоскости основания r и высоту подъема сегмента h.',
      'Вычислите сумму утроенного квадрата радиуса и квадрата высоты: (3r² + h²).`',
      'Умножьте сумму на одну шестую пи и на высоту: V = (π × h / 6) × (3r² + h²).',
    ],
    formulaHtml: 'V = (π · h ⁄ 6)(3r² + h²)',
    formulaNote: 'Где r обозначает радиус основания, а h обозначает высоту шарового сегмента.',
    practicalExamples: [
      {
        title: 'Архитектурные купола зданий',
        desc: 'Купол планетария с радиусом основания 8 метров и высотой подъема 4 метра имеет внутренний объем около 435,6 м³ воздуха.',
      },
      {
        title: 'Сферические днища промышленных реакторов',
        desc: 'Днище радиусом 1,5 метра и глубиной 0,6 метра вмещает около 2,37 м³ технологического раствора.',
      },
    ],
    faqs: [
      {
        question: 'Какова формула объема шарового сегмента?',
        answer: 'Через радиус плоского основания r и высоту h формула имеет вид: V = (π · h / 6)(3r² + h²).',
      },
      {
        question: 'Как рассчитать объем воздуха под архитектурным куполом?',
        answer: 'Измерьте радиус основания купола r и высоту до вершины h, затем примените формулу сегмента.',
      },
      {
        question: 'Чем полусфера отличается от шарового сегмента?',
        answer: 'Полусфера представляет собой частный случай сегмента с высотой h = r, а любые другие пропорции образуют общий шаровой сегмент.',
      },
    ],
    relatedRussianSlugs: [
      'kalkulyator-obema-shara',
      'kalkulyator-obema-kapsuly',
      'kalkulyator-obema-ellipsoida',
      'kalkulyator-obema-usechennogo-konusa',
    ],
    inputLabels: {
      radius: 'Радиус основания (r)',
      height: 'Высота сегмента (h)',
    },
  },

  'kalkulyator-obema-usechennogo-konusa': {
    slug: 'kalkulyator-obema-usechennogo-konusa',
    englishSlug: 'conical-frustum-volume-calculator',
    spanishSlug: 'calculadora-volumen-tronco-de-cono',
    germanSlug: 'kegelstumpf-volumen-rechner',
    frenchSlug: 'calculateur-volume-tronc-de-cone',
    portugueseSlug: 'calculadora-volume-tronco-de-cone',
    italianSlug: 'calcolatore-volume-tronco-di-cono',
    shapeId: 'conical_frustum',
    shapeName: 'Усеченный конус',
    categoryLabel: 'Конусы и пирамиды',
    title: 'Объем усеченного конуса',
    h1: 'Калькулятор объема усеченного конуса',
    metaDescription: 'Онлайн калькулятор объема усеченного конуса, ведра и цветочного горшка. Расчет вместимости в литрах по верхнему и нижнему радиусам и высоте.',
    keywords: 'калькулятор объема усеченного конуса, объем ведра калькулятор, формула усеченного конуса, объем конического горшка в литрах, вместимость усеченного конуса',
    shortTagline: 'Расчет вместимости ведер, кашпо, одноразовых стаканчиков и конических воронок.',
    howToCalculate: [
      'Измерьте верхний радиус r₁, нижний радиус основания r₂ и вертикальную высоту h.',
      'Рассчитайте сумму квадратов и произведения радиусов: (r₁² + r₁ × r₂ + r₂²).',
      'Умножьте скобку на пи, умножьте на высоту и разделите результат на три.',
    ],
    formulaHtml: 'V = (π · h ⁄ 3)(r₁² + r₁r₂ + r₂²)',
    formulaNote: 'Где r₁ обозначает верхний радиус, r₂ нижний радиус, а h высоту между основаниями.',
    practicalExamples: [
      {
        title: 'Хозяйственные ведра на 10 и 12 литров',
        desc: 'Ведро с верхним радиусом 14 см, нижним радиусом 10 см и высотой 27 см вмещает ровно 12,3 литра воды.',
      },
      {
        title: 'Цветочные горшки конической формы',
        desc: 'Горшок для растений высотой 20 см с диаметрами 24 см и 16 см требует около 6,4 литра плодородного грунта.',
      },
    ],
    faqs: [
      {
        question: 'Какова формула объема усеченного конуса?',
        answer: 'Формула имеет вид V = (π · h / 3)(r₁² + r₁ · r₂ + r₂²), где r₁ и r₂ обозначают верхний и нижний радиусы.',
      },
      {
        question: 'Как вычислить емкость ведра в литрах?',
        answer: 'Подставьте размеры в сантиметрах, вычислите объем в кубических сантиметрах и разделите на 1 000.',
      },
      {
        question: 'Можно ли считать сразу по диаметрам?',
        answer: 'Да, формула принимает вид V = (π · h / 12)(d₁² + d₁ · d₂ + d₂²).',
      },
    ],
    relatedRussianSlugs: [
      'kalkulyator-obema-konusa',
      'kalkulyator-obema-tsilindra',
      'kalkulyator-obema-trapecievidnoj-prizmy',
      'kalkulyator-obema-sharovogo-segmenta',
    ],
    inputLabels: {
      radius1: 'Верхний радиус (r₁)',
      radius2: 'Нижний радиус (r₂)',
      height: 'Высота (h)',
    },
  },

  'kalkulyator-obema-ellipsoida': {
    slug: 'kalkulyator-obema-ellipsoida',
    englishSlug: 'ellipsoid-volume-calculator',
    spanishSlug: 'calculadora-volumen-elipsoide',
    germanSlug: 'ellipsoid-volumen-rechner',
    frenchSlug: 'calculateur-volume-ellipsoide',
    portugueseSlug: 'calculadora-volume-elipsoide',
    italianSlug: 'calcolatore-volume-ellissoide',
    shapeId: 'ellipsoid',
    shapeName: 'Эллипсоид',
    categoryLabel: 'Круглые тела',
    title: 'Калькулятор объема эллипсоида',
    h1: 'Калькулятор объема эллипсоида',
    metaDescription: 'Рассчитайте объем трехосного эллипсоида и сплюснутого сфероида по трем полуосям. Точные формулы для регбийных мячей, фруктов и небесных тел.',
    keywords: 'калькулятор объема эллипсоида, формула объема эллипсоида, объем мяча для регби, объем сплюснутого сфероида, расчет объема эллипсоида',
    shortTagline: 'Расчет объема мячей для регби, арбузов, яиц и трехосных геометрических сфероидов.',
    howToCalculate: [
      'Измерьте три главные полуоси a, b и c от центральной точки фигуры до поверхности.',
      'Перемножьте значения всех трех полуосей: (a × b × c).',
      'Умножьте произведение на четыре трети и на число пи: V = (4/3) × π × a × b × c.',
    ],
    formulaHtml: 'V = ⁴⁄₃ · π · a · b · c',
    formulaNote: 'Где a, b и c обозначают три взаимно перпендикулярные полуоси эллипсоида.',
    practicalExamples: [
      {
        title: 'Мячи для регби и американского футбола',
        desc: 'Мяч с полуосями 14 см, 7,5 см и 7,5 см имеет внутренний объем около 3,3 литра воздуха.',
      },
      {
        title: 'Овальные бахчевые культуры',
        desc: 'Продолговатый арбуз длиной 30 см, шириной 20 см и высотой 20 см имеет объем около 6,28 литра.',
      },
    ],
    faqs: [
      {
        question: 'Какова формула объема трехосного эллипсоида?',
        answer: 'Формула имеет вид V = (4/3) · π · a · b · c, где a, b, c обозначают три полуоси фигуры.',
      },
      {
        question: 'Чем эллипсоид отличается от сферы?',
        answer: 'У сферы все три полуоси равны между собой (a = b = c), а у трехосного эллипсоида они различны.',
      },
      {
        question: 'Как определить полуоси овального предмета?',
        answer: 'Измерьте полную длину, ширину и высоту предмета и разделите каждое измерение на 2.',
      },
    ],
    relatedRussianSlugs: [
      'kalkulyator-obema-shara',
      'kalkulyator-obema-kapsuly',
      'kalkulyator-obema-tora',
      'kalkulyator-obema-sharovogo-segmenta',
    ],
    inputLabels: {
      semiAxisA: 'Полуось a',
      semiAxisB: 'Полуось b',
      semiAxisC: 'Полуось c',
    },
  },

  'kalkulyator-obema-kvadratnoj-piramidy': {
    slug: 'kalkulyator-obema-kvadratnoj-piramidy',
    englishSlug: 'square-pyramid-volume-calculator',
    spanishSlug: 'calculadora-volumen-piramide-cuadrada',
    germanSlug: 'quadratische-pyramide-volumen-rechner',
    frenchSlug: 'calculateur-volume-pyramide-carree',
    portugueseSlug: 'calculadora-volume-piramide-quadrada',
    italianSlug: 'calcolatore-volume-piramide-quadrata',
    shapeId: 'square_pyramid',
    shapeName: 'Квадратная пирамида',
    categoryLabel: 'Конусы и пирамиды',
    title: 'Объем правильной пирамиды',
    h1: 'Калькулятор объема правильной пирамиды',
    metaDescription: 'Онлайн калькулятор объема пирамиды с квадратным основанием. Расчет по стороне основания и высоте, формула через апофему для шатровых крыш.',
    keywords: 'калькулятор объема правильной пирамиды, объем пирамиды с квадратным основанием, формула объема пирамиды, объем шатровой крыши, вместимость квадратной пирамиды',
    shortTagline: 'Вычислите объем шатровых кровель, пирамидальных монументов и обелисков.',
    howToCalculate: [
      'Измерьте длину стороны квадратного основания a и вертикальную высоту пирамиды h.',
      'Вычислите площадь квадратного основания: S = a².',
      'Умножьте площадь основания на высоту и разделите на три: V = (1/3) × a² × h.',
    ],
    formulaHtml: 'V = ⅓ · a² · h',
    formulaNote: 'Где a обозначает сторону основания, а h высоту. Длина боковой апофемы s = √((a/2)² + h²).',
    practicalExamples: [
      {
        title: 'Пирамида Хеопса в Гизе',
        desc: 'При первоначальной стороне основания 230,3 м и высоте 146,6 м исходный объем составлял около 2,59 млн м³ камня.',
      },
      {
        title: 'Шатровая четырехскатная крыша башни',
        desc: 'Крыша со стороной квадрата 6 метров и высотой 4 метра охватывает подкровельный объем 48 кубических метров.',
      },
    ],
    faqs: [
      {
        question: 'Какова формула объема пирамиды с квадратным основанием?',
        answer: 'Формула имеет вид V = (1/3) · a² · h, где a обозначает сторону основания, а h обозначает высоту.',
      },
      {
        question: 'Как найти высоту через апофему (s)?',
        answer: 'Высоту определяют по формуле h = √(s² - (a/2)²).',
      },
      {
        question: 'Почему в формуле присутствует коэффициент 1/3?',
        answer: 'Три пирамиды с одинаковыми основаниями и высотами точно заполняют объем описанной призмы.',
      },
    ],
    relatedRussianSlugs: [
      'kalkulyator-obema-pryamougolnoj-piramidy',
      'kalkulyator-obema-konusa',
      'kalkulyator-obema-kuba',
      'kalkulyator-obema-treugolnoj-prizmy',
    ],
    inputLabels: {
      baseEdge: 'Сторона основания (a)',
      height: 'Высота пирамиды (h)',
    },
  },

  'kalkulyator-obema-pryamougolnoj-piramidy': {
    slug: 'kalkulyator-obema-pryamougolnoj-piramidy',
    englishSlug: 'rectangular-pyramid-volume-calculator',
    spanishSlug: 'calculadora-volumen-piramide-rectangular',
    germanSlug: 'rechteckige-pyramide-volumen-rechner',
    frenchSlug: 'calculateur-volume-pyramide-rectangulaire',
    portugueseSlug: 'calculadora-volume-piramide-retangular',
    italianSlug: 'calcolatore-volume-piramide-rettangolare',
    shapeId: 'rectangular_pyramid',
    shapeName: 'Прямоугольная пирамида',
    categoryLabel: 'Конусы и пирамиды',
    title: 'Объем прямоугольной пирамиды',
    h1: 'Калькулятор объема прямоугольной пирамиды',
    metaDescription: 'Рассчитайте объем прямоугольной пирамиды по длине, ширине и высоте. Подходит для расчета вальмовых крыш, подкровельных пространств и насыпей.',
    keywords: 'калькулятор объема прямоугольной пирамиды, объем пирамиды с прямоугольным основанием, расчет объема вальмовой крыши, кубатура прямоугольной пирамиды, формула прямоугольной пирамиды',
    shortTagline: 'Расчет объема вальмовых чердачных перекрытий и пирамидальных конструкций.',
    howToCalculate: [
      'Измерьте длину прямоугольного основания a, ширину основания b и высоту пирамиды h.',
      'Вычислите площадь прямоугольного основания: S = a × b.',
      'Умножьте площадь на высоту и разделите на три: V = (1/3) × a × b × h.',
    ],
    formulaHtml: 'V = ⅓ · a · b · h',
    formulaNote: 'Где a обозначает длину основания, b ширину основания, а h вертикальную высоту к вершине.',
    practicalExamples: [
      {
        title: 'Вальмовые чердачные помещения',
        desc: 'Пирамидальный чердак основанием 10 × 8 метров и высотой 3 метра содержит 80 кубических метров воздуха.',
      },
      {
        title: 'Строительные воронки и дробильные лотки',
        desc: 'Загрузочная воронка размером 2,4 × 1,5 м и глубиной 1,2 м вмещает 1,44 м³ щебня.',
      },
    ],
    faqs: [
      {
        question: 'Какова формула объема прямоугольной пирамиды?',
        answer: 'Формула имеет вид V = (1/3) · a · b · h, где перемножаются длина, ширина и высота, деленные на 3.',
      },
      {
        question: 'Какие замеры нужны для расчета объема подкровельного пространства?',
        answer: 'Потребуются длина перекрытия, ширина перекрытия и максимальная высота от пола до конька.',
      },
      {
        question: 'В каких единицах измеряется объем?',
        answer: 'Объем измеряется в кубических метрах (м³), литрах или кубических сантиметрах (см³).',
      },
    ],
    relatedRussianSlugs: [
      'kalkulyator-obema-kvadratnoj-piramidy',
      'kalkulyator-obema-parallelepipeda',
      'kalkulyator-obema-treugolnoj-prizmy',
      'kalkulyator-obema-trapecievidnoj-prizmy',
    ],
    inputLabels: {
      length: 'Длина основания (a)',
      width: 'Ширина основания (b)',
      height: 'Высота пирамиды (h)',
    },
  },

  'kalkulyator-obema-treugolnoj-prizmy': {
    slug: 'kalkulyator-obema-treugolnoj-prizmy',
    englishSlug: 'triangular-prism-volume-calculator',
    spanishSlug: 'calculadora-volumen-prisma-triangular',
    germanSlug: 'dreiecksprisma-volumen-rechner',
    frenchSlug: 'calculateur-volume-prisme-triangulaire',
    portugueseSlug: 'calculadora-volume-prisma-triangular',
    italianSlug: 'calcolatore-volume-prisma-triangolare',
    shapeId: 'triangular_prism',
    shapeName: 'Треугольная призма',
    categoryLabel: 'Призмы и коробки',
    title: 'Объем треугольной призмы',
    h1: 'Калькулятор объема треугольной призмы',
    metaDescription: 'Онлайн калькулятор объема треугольной призмы, двускатной крыши и палатки. Формула объема клина по основанию треугольника, высоте и длине.',
    keywords: 'калькулятор объема треугольной призмы, объем призмы с треугольным основанием, объем двускатной крыши, формула объема клина, объем двухскатной палатки',
    shortTagline: 'Расчет кубатуры двускатных крыш, туристических палаток, клиньев и стропил.',
    howToCalculate: [
      'Измерьте ширину основания треугольника a и высоту треугольника h_Δ.',
      'Вычислите площадь треугольного торца: S = (1/2) × a × h_Δ.',
      'Умножьте полученную площадь на продольную длину призмы L: V = S × L.',
    ],
    formulaHtml: 'V = ½ · a · hΔ · L',
    formulaNote: 'Где a обозначает основание треугольника, hΔ высоту треугольного торца, а L длину призмы.',
    practicalExamples: [
      {
        title: 'Двускатные туристические палатки типа домик',
        desc: 'Палатка с шириной дна 2 метра, высотой конька 1,5 метра и длиной 2,5 метра имеет объем 3,75 м³.',
      },
      {
        title: 'Утеплитель для двускатной мансарды',
        desc: 'Чердак пролетом 8 метров, высотой конька 3 метра и длиной здания 12 метров вмещает 144 м³ воздуха.',
      },
    ],
    faqs: [
      {
        question: 'Какова формула объема треугольной призмы?',
        answer: 'Формула имеет вид V = (1/2) · a · h_Δ · L, где основание треугольника умножается на высоту треугольника, делится на 2 и умножается на длину.',
      },
      {
        question: 'Как найти объем призмы с правильным (равносторонним) треугольником?',
        answer: 'Для стороны треугольника a формула имеет вид V = (√3 / 4) · a² · L.',
      },
      {
        question: 'Как рассчитать объем двускатной палатки?',
        answer: 'Ширину пола умножьте на высоту конька, разделите на 2 и умножьте на длину палатки.',
      },
    ],
    relatedRussianSlugs: [
      'kalkulyator-obema-trapecievidnoj-prizmy',
      'kalkulyator-obema-parallelepipeda',
      'kalkulyator-obema-pryamougolnoj-piramidy',
      'kalkulyator-obema-kuba',
    ],
    inputLabels: {
      base: 'Основание треугольника (a)',
      triangleHeight: 'Высота треугольника (hΔ)',
      length: 'Длина призмы (L)',
    },
  },

  'kalkulyator-obema-truby': {
    slug: 'kalkulyator-obema-truby',
    englishSlug: 'pipe-volume-calculator',
    spanishSlug: 'calculadora-volumen-tubo',
    germanSlug: 'rohr-volumen-rechner',
    frenchSlug: 'calculateur-volume-tube',
    portugueseSlug: 'calculadora-volume-tubo',
    italianSlug: 'calcolatore-volume-tubo',
    shapeId: 'hollow_cylinder',
    shapeName: 'Труба и полый цилиндр',
    categoryLabel: 'Круглые тела',
    title: 'Калькулятор объема трубы',
    h1: 'Калькулятор объема трубы',
    metaDescription: 'Рассчитайте объем воды в трубе и объем материала стенок полого цилиндра онлайн. Внутренний и наружный диаметры, расчет массы металла и литража.',
    keywords: 'калькулятор объема трубы, объем воды в трубе литры, объем полого цилиндра формула, объем стенки трубы, вместимость трубопровода калькулятор',
    shortTagline: 'Расчет литража теплоносителя в отоплении и объема металла стальных труб.',
    howToCalculate: [
      'Измерьте наружный радиус R_нар, внутренний радиус r_вн (или толщину стенки) и длину L.',
      'Для нахождения объема жидкости используйте внутренний радиус: V_жидкости = π × r_вн² × L.',
      'Для объема материала стенки вычтите внутренний цилиндр из внешнего: V_стенки = π × (R_нар² - r_вн²) × L.',
    ],
    formulaHtml: 'Vстенки = π · (R² - r²) · L',
    formulaNote: 'Где R обозначает внешний радиус, r внутренний радиус, а L общую длину трубы.',
    practicalExamples: [
      {
        title: 'Литраж теплоносителя в системе отопления',
        desc: 'Трубопровод длиной 50 метров с внутренним диаметром 32 мм содержит около 40,2 литра незамерзающего антифриза.',
      },
      {
        title: 'Масса стальной обсадной трубы',
        desc: 'Труба наружным диаметром 219 мм со стенкой 8 мм длиной 10 метров имеет объем стали около 0,053 м³.',
      },
    ],
    faqs: [
      {
        question: 'Как рассчитать объем жидкости внутри трубы?',
        answer: 'Расчет ведут по внутреннему радиусу: V = π · r_вн² · L.',
      },
      {
        question: 'Какова формула объема материала стенок трубы?',
        answer: 'Формула имеет вид V = π · (R_нар² - r_вн²) · L, где учитываются наружный и внутренний радиусы.',
      },
      {
        question: 'Сколько литров воды содержит 10 м трубы с внутренним диаметром 50 мм?',
        answer: 'При внутреннем радиусе 2,5 см объем составляет около 19,6 литра воды.',
      },
    ],
    relatedRussianSlugs: [
      'kalkulyator-obema-tsilindra',
      'kalkulyator-obema-gorizontalnogo-rezervuara',
      'kalkulyator-obema-tora',
      'kalkulyator-obema-trapecievidnoj-prizmy',
    ],
    inputLabels: {
      outerRadius: 'Внешний радиус (R)',
      innerRadius: 'Внутренний радиус (r)',
      height: 'Длина трубы (L)',
    },
  },

  'kalkulyator-obema-tora': {
    slug: 'kalkulyator-obema-tora',
    englishSlug: 'torus-volume-calculator',
    spanishSlug: 'calculadora-volumen-toroide',
    germanSlug: 'torus-volumen-rechner',
    frenchSlug: 'calculateur-volume-tore',
    portugueseSlug: 'calculadora-volume-toroide',
    italianSlug: 'calcolatore-volume-toroide',
    shapeId: 'torus',
    shapeName: 'Тор и кольцо',
    categoryLabel: 'Круглые тела',
    title: 'Калькулятор объема тора',
    h1: 'Калькулятор объема тора',
    metaDescription: 'Онлайн калькулятор объема тора, резиновых колец O-ring и тороидальных баллонов. Расчет по радиусу кольца и радиусу круглого сечения.',
    keywords: 'калькулятор объема тора, объем уплотнительного кольца, формула объема тора, объем тороида калькулятор, объем кольца круглого сечения',
    shortTagline: 'Расчет резиновых колец круглого сечения, автомобильных камер и пончиков.',
    howToCalculate: [
      'Измерьте большой радиус R от центра отверстия до центра сечения трубки.',
      'Измерьте малый радиус r поперечного круглого сечения трубки.',
      'Примените теорему Паппа: V = 2 × π² × R × r².',
    ],
    formulaHtml: 'V = 2 · π² · R · r²',
    formulaNote: 'Где R обозначает радиус кольца до центра трубки, а r обозначает радиус трубки (r ≤ R).',
    practicalExamples: [
      {
        title: 'Резиновые уплотнительные кольца O-ring',
        desc: 'Кольцо с радиусом оси R = 25 мм и радиусом сечения r = 2,5 мм имеет объем резины около 3,08 см³.',
      },
      {
        title: 'Тороидальные газовые баллоны под запаску',
        desc: 'Автомобильный пропановый баллон формой тора вмещает около 42 литров сжиженного газа.',
      },
    ],
    faqs: [
      {
        question: 'Какова формула объема тора?',
        answer: 'Формула имеет вид V = 2 · π² · R · r², где R обозначает расстояние от центра до оси трубки, а r обозначает радиус сечения.',
      },
      {
        question: 'Как рассчитать кольцо O-ring по внутреннему диаметру и толщине?',
        answer: 'Примите r = s / 2 и R = (d_вн + s) / 2, затем подставьте эти значения в формулу тора.',
      },
      {
        question: 'Какова площадь поверхности тора?',
        answer: 'Площадь внешней поверхности вычисляется по формуле S = 4 · π² · R · r.',
      },
    ],
    relatedRussianSlugs: [
      'kalkulyator-obema-tsilindra',
      'kalkulyator-obema-shara',
      'kalkulyator-obema-truby',
      'kalkulyator-obema-ellipsoida',
    ],
    inputLabels: {
      majorRadius: 'Большой радиус (R)',
      minorRadius: 'Малый радиус (r)',
    },
  },

  'kalkulyator-obema-trapecievidnoj-prizmy': {
    slug: 'kalkulyator-obema-trapecievidnoj-prizmy',
    englishSlug: 'trapezoidal-prism-volume-calculator',
    spanishSlug: 'calculadora-volumen-prisma-trapezoidal',
    germanSlug: 'trapezprisma-volumen-rechner',
    frenchSlug: 'calculateur-volume-prisme-trapezoidal',
    portugueseSlug: 'calculadora-volume-prisma-trapezoidal',
    italianSlug: 'calcolatore-volume-prisma-trapezoidale',
    shapeId: 'trapezoidal_prism',
    shapeName: 'Трапециевидная призма',
    categoryLabel: 'Призмы и коробки',
    title: 'Калькулятор объема траншеи',
    h1: 'Калькулятор объема траншеи',
    metaDescription: 'Рассчитайте объем выемки грунта при копке траншеи с откосами и объем трапециевидной канавы в м³. Онлайн калькулятор земляных работ и корыт.',
    keywords: 'калькулятор объема траншеи, расчет объема траншеи кубы, объем канавы с откосами, формула трапециевидной призмы, объем корыта в литрах',
    shortTagline: 'Расчет земляных работ при копке траншей, оросительных каналов и насыпей.',
    howToCalculate: [
      'Измерьте ширину поверху a, ширину по дну b, глубину выемки h и длину траншеи L.',
      'Вычислите площадь поперечного сечения трапеции: S = ((a + b) / 2) × h.',
      'Умножьте площадь на длину: V = S × L.',
    ],
    formulaHtml: 'V = ((a + b) ⁄ 2) · h · L',
    formulaNote: 'Где a обозначает верхнюю ширину, b нижнюю ширину, h глубину, а L продольную длину траншеи.',
    practicalExamples: [
      {
        title: 'Траншеи под ленточный фундамент или водопровод',
        desc: 'Траншея длиной 30 метров с шириной поверху 1,2 м, по дну 0,8 м и глубиной 1,5 м требует выемки ровно 45 м³ грунта.',
      },
      {
        title: 'Дренажные канавы вдоль дорог',
        desc: 'Водоотводный канал длиной 100 метров шириной поверху 1 м, по дну 0,4 м и глубиной 0,5 м вмещает 35 м³ сточных вод.',
      },
    ],
    faqs: [
      {
        question: 'Какова формула объема трапециевидной призмы?',
        answer: 'Формула имеет вид V = ((a + b) / 2) · h · L, где a обозначает верхнюю ширину, b нижнюю ширину, h глубину, а L длину.',
      },
      {
        question: 'Как рассчитать объем земляных работ при копке траншеи с откосами в м³?',
        answer: 'Подставьте измеренные размеры в метрах в формулу V = ((a + b) / 2) · h · L.',
      },
      {
        question: 'Как определить вместимость трапециевидного корыта в литрах?',
        answer: 'Рассчитайте объем в кубических сантиметрах и разделите полученный результат на 1 000.',
      },
    ],
    relatedRussianSlugs: [
      'kalkulyator-obema-treugolnoj-prizmy',
      'kalkulyator-obema-parallelepipeda',
      'kalkulyator-obema-usechennogo-konusa',
      'kalkulyator-obema-gorizontalnogo-rezervuara',
    ],
    inputLabels: {
      topBase: 'Ширина поверху (a)',
      bottomBase: 'Ширина по дну (b)',
      depth: 'Глубина (h)',
      length: 'Длина траншеи (L)',
    },
  },

  'kalkulyator-obema-gorizontalnogo-rezervuara': {
    slug: 'kalkulyator-obema-gorizontalnogo-rezervuara',
    englishSlug: 'horizontal-tank-volume-calculator',
    spanishSlug: 'calculadora-volumen-tanque-cilindrico-horizontal',
    germanSlug: 'liegender-zylindertank-volumen-rechner',
    frenchSlug: 'calculateur-volume-cuve-horizontale',
    portugueseSlug: 'calculadora-volume-tanque-horizontal',
    italianSlug: 'calcolatore-volume-serbatoio-orizzontale',
    shapeId: 'horizontal_tank_fill',
    shapeName: 'Горизонтальный резервуар',
    categoryLabel: 'Резервуары и емкости',
    title: 'Объем резервуара по уровню',
    h1: 'Калькулятор объема резервуара по уровню',
    metaDescription: 'Тарировочный расчет объема топлива и воды в горизонтальном цилиндрическом резервуаре по глубине налива и мерной линейке. Точные формулы онлайн.',
    keywords: 'калькулятор горизонтального цилиндрического резервуара, калибровка горизонтального резервуара по уровню, расчет остатка топлива по линейке, объем жидкости в лежачей бочке, объем горизонтальной емкости литры',
    shortTagline: 'Расчет остатка ГСМ, солярки и воды в лежачих цистернах по замеру метроштоком.',
    howToCalculate: [
      'Введите радиус емкости r, длину L и измеренную высоту налива жидкости h (где h ≤ 2r).',
      'Математический алгоритм вычисляет площадь кругового сегмента: S = r² arccos((r - h)/r) - (r - h)√(2rh - h²).',
      'Умножает площадь на длину L и выдает объем остатка в литрах и процент заполнения.',
    ],
    formulaHtml: 'V = [r² · arccos((r - h)⁄r) - (r - h)√(2rh - h²)] · L',
    formulaNote: 'Где r обозначает радиус, L длину, а h уровень жидкости. Полная вместимость резервуара составляет V_полн = π · r² · L.',
    practicalExamples: [
      {
        title: 'Подземные и наземные резервуары для дизеля',
        desc: 'Емкость радиусом 1 метр и длиной 5 метров при уровне топлива 0,5 метра содержит около 3 075 литров дизтоплива.',
      },
      {
        title: 'Горизонтальные поливочные бочки на даче',
        desc: 'Бочка радиусом 40 см и длиной 120 см при уровне воды 20 см заполнена на 142 литра.',
      },
    ],
    faqs: [
      {
        question: 'Как рассчитать объем жидкости в частично заполненном горизонтальном цилиндре?',
        answer: 'По радиусу r, длине L и глубине налива h формула имеет вид: V = [r² · arccos((r - h)/r) - (r - h)√(2rh - h²)] · L, где угол выражен в радианах.',
      },
      {
        question: 'Почему уровень на мерной линейке не пропорционален объему?',
        answer: 'Круглое сечение резервуара расширяется к середине и сужается к нижней и верхней точкам.',
      },
      {
        question: 'Как перевести замер по метроштоку в сантиметрах в литры топлива?',
        answer: 'Введите размеры емкости и уровень в сантиметрах в формулу, а полученный объем в см³ разделите на 1 000.',
      },
    ],
    relatedRussianSlugs: [
      'kalkulyator-obema-tsilindra',
      'kalkulyator-obema-kapsuly',
      'kalkulyator-obema-truby',
      'kalkulyator-obema-trapecievidnoj-prizmy',
    ],
    inputLabels: {
      radius: 'Радиус цистерны (r)',
      length: 'Длина цистерны (L)',
      fillDepth: 'Уровень налива (h)',
    },
  },
};
