export interface PortugueseFaq {
  question: string;
  answer: string;
}

export interface PortuguesePracticalExample {
  title: string;
  desc: string;
}

export interface PortugueseToolDetail {
  slug: string;
  englishSlug: string;
  spanishSlug: string;
  germanSlug: string;
  frenchSlug: string;
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
  practicalExamples: PortuguesePracticalExample[];
  faqs: PortugueseFaq[];
  relatedPortugueseSlugs: string[];
  inputLabels: Record<string, string>;
}

export const PORTUGUESE_TOOLS: Record<string, PortugueseToolDetail> = {
  'calculadora-volume-cubo': {
    slug: 'calculadora-volume-cubo',
    englishSlug: 'cube-volume-calculator',
    spanishSlug: 'calculadora-volumen-cubo',
    germanSlug: 'wuerfel-volumen-rechner',
    frenchSlug: 'calculateur-volume-cube',
    shapeId: 'cube',
    shapeName: 'Cubo',
    categoryLabel: 'Geometria 3D',
    title: 'Calculadora Volume Cubo',
    h1: 'Calculadora de volume de um cubo',
    metaDescription: 'Calcule o volume de um cubo a partir da aresta ou área total. Conversão instantânea em litros, metros cúbicos e galões com fórmula explicada.',
    keywords: 'calculadora de volume de um cubo, calcular volume do cubo, volume do cubo formula, volume de cubo em litros, capacidade de um cubo',
    shortTagline: 'Calcule a capacidade volumétrica de caixas cúbicas, dados e recipientes a partir do comprimento da aresta.',
    howToCalculate: [
      'Meça o comprimento da aresta a do cubo em centímetros ou metros. Em um cubo regular, todas as arestas possuem a mesma medida.',
      'Multiplique a medida da aresta por ela mesma três vezes: V = a × a × a = a³.',
      'Converta o resultado em metros cúbicos para litros multiplicando por 1 000.',
    ],
    formulaHtml: 'V = a³',
    formulaNote: 'Onde a representa o comprimento da aresta. A área total da superfície é A = 6a².',
    practicalExamples: [
      {
        title: 'Caixas organizadoras cúbicas',
        desc: 'Um organizador de 40 cm de lado tem volume de 40 × 40 × 40 = 64 000 cm³, comportando 64 litros.',
      },
      {
        title: 'Blocos de concreto',
        desc: 'Cálculo de volume para blocos maciços de 1 metro de aresta em obras civis, totalizando 1 m³.',
      },
      {
        title: 'Aquários cúbicos',
        desc: 'Um aquário nano de 30 cm de lado comporta 27 litros de água.',
      },
    ],
    faqs: [
      {
        question: 'Como calcular o volume de um cubo a partir da aresta?',
        answer: 'Multiplica-se a medida da aresta por ela mesma três vezes: V = a³. Por exemplo, se a aresta mede 5 cm, o volume é 5 × 5 × 5 = 125 cm³.',
      },
      {
        question: 'Como encontrar o volume se eu souber apenas a área total (A)?',
        answer: 'Calcule a aresta com a = √(A / 6) e eleve o resultado ao cubo (V = a³).',
      },
      {
        question: 'Quantos litros cabem em um cubo de 1 metro de lado?',
        answer: 'Um cubo de 1 m³ comporta exatamente 1.000 litros de água.',
      },
    ],
    relatedPortugueseSlugs: [
      'calculadora-volume-prisma-retangular',
      'calculadora-volume-cilindro',
      'calculadora-volume-esfera',
      'calculadora-volume-piramide-quadrada',
    ],
    inputLabels: {
      side: 'Comprimento da aresta (a)',
    },
  },

  'calculadora-volume-prisma-retangular': {
    slug: 'calculadora-volume-prisma-retangular',
    englishSlug: 'box-volume-calculator',
    spanishSlug: 'calculadora-volumen-prisma-rectangular',
    germanSlug: 'quader-volumen-rechner',
    frenchSlug: 'calculateur-volume-pave-droit',
    shapeId: 'rectangular_prism',
    shapeName: 'Prisma retangular',
    categoryLabel: 'Prismas e caixas',
    title: 'Calculadora Prisma Retangular',
    h1: 'Calculadora de volume de prisma retangular',
    metaDescription: 'Calcule o volume de caixas e prismas retangulares em m³ e litros. Fórmulas de cubagem para frete, embalagens e caixas de papelão.',
    keywords: 'calculadora de volume de prisma retangular, calculadora de volume de caixa, calcular metros cubicos de uma caixa, volume de caixa de papelao, capacidade caixa em litros',
    shortTagline: 'Calcule a cubagem e capacidade de caixas de papelão, gavetas, contêineres e salas retangulares.',
    howToCalculate: [
      'Meça o comprimento (c), a largura (l) e a altura (h) do prisma retangular na mesma unidade de medida.',
      'Multiplique as três dimensões: V = c × l × h.',
      'Divida o volume em centímetros cúbicos por 1 000 para obter o valor em litros, ou por 1 000 000 para metros cúbicos.',
    ],
    formulaHtml: 'V = c × l × h',
    formulaNote: 'Onde c é o comprimento, l é a largura e h é a altura. A área de superfície é A = 2(cl + ch + lh).',
    practicalExamples: [
      {
        title: 'Caixas de encomendas dos Correios',
        desc: 'Uma caixa modelo com 30 cm de comprimento, 20 cm de largura e 15 cm de altura tem volume de 9 000 cm³ (9 litros ou 0,009 m³).',
      },
      {
        title: 'Contêiner marítimo de 20 pés',
        desc: 'Com 5,90 m de comprimento, 2,35 m de largura e 2,39 m de altura, o volume interno é de 33,14 m³.',
      },
      {
        title: 'Piscinas retangulares residenciais',
        desc: 'Uma piscina de 6 m de extensão, 3 m de largura e 1,5 m de profundidade retém 27 000 litros de água.',
      },
    ],
    faqs: [
      {
        question: 'Qual é a fórmula do volume de um prisma retangular ou caixa?',
        answer: 'V = c × l × h (comprimento × largura × altura). Multiplique as três medidas na mesma unidade.',
      },
      {
        question: 'Como calcular o volume de uma caixa de papelão em m³?',
        answer: 'Multiplique comprimento, largura e altura em centímetros e divida o valor por 1.000.000.',
      },
      {
        question: 'Como converter o volume de uma caixa para litros?',
        answer: 'Calcule o volume em centímetros cúbicos (cm³) e divida por 1.000.',
      },
    ],
    relatedPortugueseSlugs: [
      'calculadora-volume-cubo',
      'calculadora-volume-cilindro',
      'calculadora-volume-prisma-trapezoidal',
      'calculadora-volume-piramide-retangular',
    ],
    inputLabels: {
      length: 'Comprimento (c)',
      width: 'Largura (l)',
      height: 'Altura (h)',
    },
  },

  'calculadora-volume-cilindro': {
    slug: 'calculadora-volume-cilindro',
    englishSlug: 'cylinder-volume-calculator',
    spanishSlug: 'calculadora-volumen-cilindro',
    germanSlug: 'zylinder-volumen-rechner',
    frenchSlug: 'calculateur-volume-cylindre',
    shapeId: 'cylinder',
    shapeName: 'Cilindro',
    categoryLabel: 'Corpos redondos',
    title: 'Calculadora Volume Cilindro',
    h1: 'Calculadora de volume de um cilindro',
    metaDescription: 'Calcule o volume e capacidade de cilindros a partir do raio ou diâmetro e altura. Conversão direta para litros, galões e metros cúbicos.',
    keywords: 'calculadora de volume de um cilindro, calcular volume cilindro litros, formula volume cilindro raio e altura, volume cilindro com diametro, capacidade tanque cilindrico',
    shortTagline: 'Calcule a litragem e capacidade de tambores, garrafas, latas e caixas d\'água cilíndricas.',
    howToCalculate: [
      'Meça o raio r do círculo da base e a altura h do cilindro.',
      'Eleve o raio ao quadrado, multiplique pela constante pi (3,14159) e em seguida multiplique pela altura h: V = π × r² × h.',
      'Se utilizar o diâmetro d, aplique a fórmula direta V = (π × d² × h) / 4.',
    ],
    formulaHtml: 'V = π · r² · h',
    formulaNote: 'Onde r é o raio da base e h é a altura. A área total da superfície é A = 2πr(r + h).',
    practicalExamples: [
      {
        title: 'Tambores de 200 litros',
        desc: 'Um tambor industrial de 57 cm de diâmetro (raio 28,5 cm) e 85 cm de altura comporta 216 litros de líquido.',
      },
      {
        title: 'Caixas d\'água cilíndricas',
        desc: 'Um reservatório de 1,20 m de diâmetro e 1 m de altura armazena 1 131 litros de água potável.',
      },
      {
        title: 'Latas de bebidas',
        desc: 'Uma lata de refrigerante padrão com 6,6 cm de diâmetro e 12,2 cm de altura tem volume de 350 ml.',
      },
    ],
    faqs: [
      {
        question: 'Qual é a fórmula para calcular o volume de um cilindro?',
        answer: 'V = π · r² · h, onde r é o raio da base e h é a altura.',
      },
      {
        question: 'Como calcular o volume usando o diâmetro (d)?',
        answer: 'Aplique a fórmula direta V = (π · d² · h) / 4.',
      },
      {
        question: 'Quantos litros cabem em um reservatório cilíndrico?',
        answer: 'Calcule V em metros cúbicos (m³) e multiplique por 1.000 para obter litros.',
      },
    ],
    relatedPortugueseSlugs: [
      'calculadora-volume-tubo',
      'calculadora-volume-cone',
      'calculadora-volume-capsula',
      'calculadora-volume-tanque-horizontal',
    ],
    inputLabels: {
      radius: 'Raio da base (r)',
      height: 'Altura vertical (h)',
    },
  },

  'calculadora-volume-esfera': {
    slug: 'calculadora-volume-esfera',
    englishSlug: 'sphere-volume-calculator',
    spanishSlug: 'calculadora-volumen-esfera',
    germanSlug: 'kugel-volumen-rechner',
    frenchSlug: 'calculateur-volume-sphere',
    shapeId: 'sphere',
    shapeName: 'Esfera',
    categoryLabel: 'Corpos redondos',
    title: 'Calculadora Volume Esfera',
    h1: 'Calculadora de volume de uma esfera',
    metaDescription: 'Calcule o volume de uma esfera usando o raio ou diâmetro. Fórmulas de volume para bolas, planetas e tanques esféricos com conversão em litros.',
    keywords: 'calculadora de volume de uma esfera, calcular volume da esfera, formula volume da esfera, volume de esfera com diametro, volume de uma bola',
    shortTagline: 'Calcule o volume e a capacidade de bolas, esferas de aço, bolhas e globos a partir do raio ou diâmetro.',
    howToCalculate: [
      'Meça o raio r da esfera a partir do centro até a superfície, ou divida o diâmetro externo por 2.',
      'Eleve o raio ao cubo (r × r × r) e multiplique pela constante pi.',
      'Multiplique o valor obtido por 4/3: V = (4/3) × π × r³.',
    ],
    formulaHtml: 'V = ⁴⁄₃ · π · r³',
    formulaNote: 'Onde r é o raio da esfera. A área superficial da esfera é A = 4πr².',
    practicalExamples: [
      {
        title: 'Bola de futebol FIFA oficial',
        desc: 'Com raio de 11 cm (diâmetro de 22 cm), o volume de ar interno é de 5 575 cm³ (5,58 litros).',
      },
      {
        title: 'Tanques de armazenamento esféricos',
        desc: 'Um tanque de gás esférico de 10 metros de diâmetro (raio de 5 m) armazena 523,6 m³ de combustível líquido.',
      },
      {
        title: 'Rolamentos industriais de esferas',
        desc: 'Uma esfera de rolamento de 20 mm de diâmetro tem volume de 4,19 cm³ de aço temperado.',
      },
    ],
    faqs: [
      {
        question: 'Qual é a fórmula do volume de uma esfera?',
        answer: 'V = ⁴⁄₃ · π · r³, onde r é o raio.',
      },
      {
        question: 'Como calcular o volume da esfera a partir do diâmetro?',
        answer: 'Use a fórmula V = (π · d³) / 6.',
      },
      {
        question: 'Como calcular o volume de uma semiesfera (meia esfera)?',
        answer: 'Divida o volume total da esfera por dois: V = ⅔ · π · r³.',
      },
    ],
    relatedPortugueseSlugs: [
      'calculadora-volume-calota-esferica',
      'calculadora-volume-elipsoide',
      'calculadora-volume-cilindro',
      'calculadora-volume-capsula',
    ],
    inputLabels: {
      radius: 'Raio da esfera (r)',
    },
  },

  'calculadora-volume-cone': {
    slug: 'calculadora-volume-cone',
    englishSlug: 'cone-volume-calculator',
    spanishSlug: 'calculadora-volumen-cono',
    germanSlug: 'kegel-volumen-rechner',
    frenchSlug: 'calculateur-volume-cone',
    shapeId: 'cone',
    shapeName: 'Cone',
    categoryLabel: 'Corpos redondos',
    title: 'Calculadora Volume Cone',
    h1: 'Calculadora de volume de um cone',
    metaDescription: 'Calcule o volume de um cone reto a partir do raio e altura ou geratriz. Conversão imediata para litros, metros cúbicos e galões.',
    keywords: 'calculadora de volume de um cone, calcular volume do cone, formula volume de cone, volume cone reto calculadora, capacidade de um cone em litros',
    shortTagline: 'Calcule o volume de cones de sinalização, casquinhas de sorvete, funis e silos cônicos.',
    howToCalculate: [
      'Meça o raio r do círculo da base e a altura vertical h do vértice até o plano da base.',
      'Eleve o raio ao quadrado, multiplique por pi e pela altura h.',
      'Divida o produto final por 3: V = (1/3) × π × r² × h.',
    ],
    formulaHtml: 'V = ⅓ · π · r² · h',
    formulaNote: 'Onde r é o raio e h é a altura vertical. A geratriz g satisfaz g = √(r² + h²).',
    practicalExamples: [
      {
        title: 'Funil industrial',
        desc: 'Um funil de 15 cm de raio de topo e 25 cm de altura cônica tem volume de 5 890 cm³, ou 5,89 litros.',
      },
      {
        title: 'Pilhas de areia e brita',
        desc: 'Uma pilha cônica com 3 metros de raio na base e 2 metros de altura armazena 18,85 m³ de agregados.',
      },
      {
        title: 'Casquinha de sorvete',
        desc: 'Uma casquinha de 3 cm de raio e 12 cm de profundidade possui capacidade para 113 cm³ de recheio.',
      },
    ],
    faqs: [
      {
        question: 'Qual é a fórmula do volume de um cone?',
        answer: 'A fórmula é V = ⅓ · π · r² · h, onde r é o raio da base e h é a altura vertical.',
      },
      {
        question: 'Qual a relação entre o volume do cone e o do cilindro?',
        answer: 'O cone possui exatamente um terço (⅓) do volume de um cilindro de mesma base e altura.',
      },
      {
        question: 'Como achar a altura usando a geratriz (g)?',
        answer: 'Use o Teorema de Pitágoras: h = √(g² - r²).`',
      },
    ],
    relatedPortugueseSlugs: [
      'calculadora-volume-tronco-de-cone',
      'calculadora-volume-cilindro',
      'calculadora-volume-piramide-quadrada',
      'calculadora-volume-esfera',
    ],
    inputLabels: {
      radius: 'Raio da base (r)',
      height: 'Altura vertical (h)',
    },
  },

  'calculadora-volume-capsula': {
    slug: 'calculadora-volume-capsula',
    englishSlug: 'capsule-volume-calculator',
    spanishSlug: 'calculadora-volumen-capsula',
    germanSlug: 'kapsel-volumen-rechner',
    frenchSlug: 'calculateur-volume-capsule',
    shapeId: 'capsule',
    shapeName: 'Cápsula',
    categoryLabel: 'Tanques e tubos',
    title: 'Calculadora Volume Cápsula',
    h1: 'Calculadora de volume de uma cápsula',
    metaDescription: 'Calcule o volume de cápsulas geométricas e tanques bala para GLP. Soma exata do cilindro central com as duas semiesferas nas pontas.',
    keywords: 'calculadora de volume de uma cápsula, volume capsula farmaceutica, volume tanque bala glp, formula volume capsula geometrica, capacidade cilindro com calotas',
    shortTagline: 'Calcule a litragem de cápsulas farmacêuticas e tanques industriais cilíndricos com calotas esféricas.',
    howToCalculate: [
      'Meça o raio r das extremidades esféricas e o comprimento a da parte cilíndrica central.',
      'Calcule o volume do cilindro central através de V_cil = π × r² × a.',
      'Calcule o volume da esfera completa formada pelas duas calotas: V_esf = (4/3) × π × r³, e some os dois termos.',
    ],
    formulaHtml: 'V = π · r² · (⁴⁄₃r + a)',
    formulaNote: 'Onde r é o raio dos hemisférios e a é o comprimento cilíndrico central. O comprimento total é L = a + 2r.',
    practicalExamples: [
      {
        title: 'Tanques bala de gás GLP',
        desc: 'Um tanque com raio de 1,5 m e cilindro central de 6 m tem capacidade volumétrica de 56,55 m³ (56 550 litros).',
      },
      {
        title: 'Cápsula farmacêutica tamanho 00',
        desc: 'Com 4,25 mm de raio e 15 mm de comprimento cilíndrico, o volume é de aproximadamente 0,95 ml.',
      },
      {
        title: 'Boias de sinalização marítima',
        desc: 'Boia tubular com 0,40 m de raio e 1,20 m de corpo cilíndrico totaliza 871 litros de flutuabilidade.',
      },
    ],
    faqs: [
      {
        question: 'Qual é a fórmula do volume de uma cápsula geométrica?',
        answer: 'V = π · r² · (⁴⁄₃r + a), onde a é o comprimento da seção cilíndrica e r é o raio.',
      },
      {
        question: 'Como achar o comprimento cilíndrico a partir do comprimento total (L)?',
        answer: 'Subtraia o diâmetro da extensão total: a = L - 2r.',
      },
      {
        question: 'Onde esse cálculo é aplicado na prática?',
        answer: 'Na dosagem de cápsulas farmacêuticas e no dimensionamento de tanques industriais de gás sob pressão (tanques bala).',
      },
    ],
    relatedPortugueseSlugs: [
      'calculadora-volume-cilindro',
      'calculadora-volume-esfera',
      'calculadora-volume-tanque-horizontal',
      'calculadora-volume-tubo',
    ],
    inputLabels: {
      radius: 'Raio das calotas (r)',
      cylinderHeight: 'Comprimento do cilindro (a)',
    },
  },

  'calculadora-volume-calota-esferica': {
    slug: 'calculadora-volume-calota-esferica',
    englishSlug: 'spherical-cap-volume-calculator',
    spanishSlug: 'calculadora-volumen-casquete-esferico',
    germanSlug: 'kugelsegment-volumen-rechner',
    frenchSlug: 'calculateur-volume-calotte-spherique',
    shapeId: 'spherical_cap',
    shapeName: 'Calota esférica',
    categoryLabel: 'Corpos redondos',
    title: 'Calculadora Calota Esférica',
    h1: 'Calculadora de volume de calota esférica',
    metaDescription: 'Calcule o volume de calotas esféricas, cúpulas e bacias esféricas a partir do raio da base e altura da calota com fórmula precisa.',
    keywords: 'calculadora de volume de calota esférica, calcular volume de cupula, formula calota esferica, volume de domo arquitetonico, volume bacia esferica',
    shortTagline: 'Calcule o volume de ar sob cúpulas arquitetônicas, fundos torisféricos e bacias esféricas rasas.',
    howToCalculate: [
      'Meça o raio r do círculo plano da base e a altura vertical h do centro da base ao ápice da calota.',
      'Eleve o raio da base ao quadrado e multiplique por 3 (3r²).',
      'Some com a altura ao quadrado (h²), multiplique por π × h e divida por 6: V = (πh / 6)(3r² + h²).',
    ],
    formulaHtml: 'V = (π · h / 6)(3r² + h²)',
    formulaNote: 'Onde r é o raio do plano de corte e h é a altura da calota. Se conhecer o raio da esfera R, V = (πh²/3)(3R - h).',
    practicalExamples: [
      {
        title: 'Cúpula de catedral',
        desc: 'Uma cúpula com raio de base de 8 metros e altura vertical de 4 metros contém 435,6 m³ de ar sob sua abóbada.',
      },
      {
        title: 'Bacia esférica de cozinha',
        desc: 'Uma tigela esférica com 12 cm de raio de abertura e 8 cm de profundidade retém 2,05 litros de água.',
      },
      {
        title: 'Tampas de vasos de pressão',
        desc: 'Calota superior com raio de 1 m e altura de 0,30 m suporta volume de 0,485 m³ de fluido.',
      },
    ],
    faqs: [
      {
        question: 'Qual é a fórmula do volume de uma calota esférica?',
        answer: 'Com o raio da base r e a altura h: V = (π · h / 6)(3r² + h²).',
      },
      {
        question: 'Como calcular o volume de ar sob uma cúpula arquitetônica?',
        answer: 'Meça o raio da base circular r e a altura máxima h, aplicando a fórmula da calota.',
      },
      {
        question: 'Qual a diferença entre semiesfera e calota esférica?',
        answer: 'A semiesfera é uma calota onde h = r; qualquer outro corte onde h ≠ r forma uma calota esférica geral.',
      },
    ],
    relatedPortugueseSlugs: [
      'calculadora-volume-esfera',
      'calculadora-volume-elipsoide',
      'calculadora-volume-tronco-de-cone',
      'calculadora-volume-capsula',
    ],
    inputLabels: {
      baseRadius: 'Raio da base (r)',
      capHeight: 'Altura da calota (h)',
    },
  },

  'calculadora-volume-tronco-de-cone': {
    slug: 'calculadora-volume-tronco-de-cone',
    englishSlug: 'conical-frustum-volume-calculator',
    spanishSlug: 'calculadora-volumen-tronco-de-cono',
    germanSlug: 'kegelstumpf-volumen-rechner',
    frenchSlug: 'calculateur-volume-tronc-de-cone',
    shapeId: 'conical_frustum',
    shapeName: 'Tronco de cone',
    categoryLabel: 'Corpos redondos',
    title: 'Calculadora Tronco de Cone',
    h1: 'Calculadora de volume de tronco de cone',
    metaDescription: 'Calcule o volume e a capacidade de baldes, vasos de plantas e copos cônicos usando os raios superior e inferior e a altura.',
    keywords: 'calculadora de volume de tronco de cone, calcular volume de balde, volume vaso conico litros, formula tronco de cone, capacidade copo conico',
    shortTagline: 'Calcule a litragem de baldes plásticos, bacias cônicas, vasos de plantas e abajures.',
    howToCalculate: [
      'Meça o raio do círculo superior (r₁), o raio do círculo inferior (r₂) e a altura perpendicular h entre as bases.',
      'Calcule a soma r₁² + r₁ × r₂ + r₂².',
      'Multiplique o resultado por π × h e divida por 3: V = (πh / 3)(r₁² + r₁r₂ + r₂²).',
    ],
    formulaHtml: 'V = (π · h / 3)(r₁² + r₁r₂ + r₂²)',
    formulaNote: 'Onde r₁ e r₂ são os raios dos discos e h é a altura vertical. Em termos de diâmetros, divida por 12.',
    practicalExamples: [
      {
        title: 'Balde de limpeza de 12 litros',
        desc: 'Um balde com raio superior de 15 cm, raio inferior de 11 cm e altura de 25 cm comporta 13,38 litros.',
      },
      {
        title: 'Vaso de cerâmica cônico',
        desc: 'Vaso com boca de raio 20 cm, fundo de raio 12 cm e altura de 35 cm comporta 28,6 litros de terra vegetal.',
      },
      {
        title: 'Copo descartável para água',
        desc: 'Copo com topo de 3,5 cm de raio, fundo de 2,5 cm de raio e 9 cm de altura contém 257 ml.',
      },
    ],
    faqs: [
      {
        question: 'Qual é a fórmula do volume de um tronco de cone?',
        answer: 'V = (π · h / 3)(r₁² + r₁ · r₂ + r₂²), sendo r₁ e r₂ os raios superior e inferior.',
      },
      {
        question: 'Como calcular a capacidade em litros de um balde cônico?',
        answer: 'Insira as medidas em centímetros, calcule o volume em cm³ e divida por 1.000.',
      },
      {
        question: 'É possível usar os diâmetros diretamente?',
        answer: 'Sim: V = (π · h / 12)(d₁² + d₁ · d₂ + d₂²).',
      },
    ],
    relatedPortugueseSlugs: [
      'calculadora-volume-cone',
      'calculadora-volume-cilindro',
      'calculadora-volume-prisma-trapezoidal',
      'calculadora-volume-calota-esferica',
    ],
    inputLabels: {
      topRadius: 'Raio da base superior (r₁)',
      bottomRadius: 'Raio da base inferior (r₂)',
      height: 'Altura vertical (h)',
    },
  },

  'calculadora-volume-elipsoide': {
    slug: 'calculadora-volume-elipsoide',
    englishSlug: 'ellipsoid-volume-calculator',
    spanishSlug: 'calculadora-volumen-elipsoide',
    germanSlug: 'ellipsoid-volumen-rechner',
    frenchSlug: 'calculateur-volume-ellipsoide',
    shapeId: 'ellipsoid',
    shapeName: 'Elipsoide',
    categoryLabel: 'Corpos redondos',
    title: 'Calculadora Volume Elipsoide',
    h1: 'Calculadora de volume de um elipsoide',
    metaDescription: 'Calcule o volume de um elipsoide triaxial a partir dos três semieixos. Fórmulas de volume para bolas de rúgbi, melões e esferoides.',
    keywords: 'calculadora de volume de um elipsoide, calcular volume elipsoide, formula volume de elipsoide, volume bola de rugby, volume esferoide oblato',
    shortTagline: 'Calcule a capacidade de ovos, bolas de rúgbi, melões e cascas esferoidais a partir de seus semieixos.',
    howToCalculate: [
      'Meça os diâmetros totais ao longo dos três eixos principais (comprimento, largura e altura).',
      'Divida cada medida por 2 para encontrar os três semieixos ortogonais a, b e c.',
      'Multiplique os três semieixos entre si, depois por pi e por 4/3: V = (4/3) × π × a × b × c.',
    ],
    formulaHtml: 'V = ⁴⁄₃ · π · a · b · c',
    formulaNote: 'Onde a, b e c são os comprimentos dos semieixos a partir do centro da figura.',
    practicalExamples: [
      {
        title: 'Bola de rúgbi oficial',
        desc: 'Com semieixo longitudinal de 14 cm e semieixos transversais de 8,5 cm, o volume é de 4 235 cm³ (4,24 litros).',
      },
      {
        title: 'Melancia ovalada',
        desc: 'Uma fruta com eixos de 32 cm, 22 cm e 20 cm (semieixos 16, 11 e 10 cm) tem volume aproximado de 7,37 litros.',
      },
      {
        title: 'Planeta Terra (esferoide oblato)',
        desc: 'Com raio equatorial de 6 378 km e raio polar de 6 357 km, o volume é de 1,083 × 10¹² km³.',
      },
    ],
    faqs: [
      {
        question: 'Qual é a fórmula do volume de um elipsoide?',
        answer: 'V = ⁴⁄₃ · π · a · b · c, onde a, b, c são os três semieixos.',
      },
      {
        question: 'Qual a diferença entre esfera e elipsoide?',
        answer: 'Na esfera os três raios são iguais (a = b = c); no elipsoide triaxial os três semieixos têm comprimentos diferentes.',
      },
      {
        question: 'Como calcular os semieixos de um objeto ovalado?',
        answer: 'Meça o comprimento, largura e altura totais e divida cada dimensão por 2.',
      },
    ],
    relatedPortugueseSlugs: [
      'calculadora-volume-esfera',
      'calculadora-volume-calota-esferica',
      'calculadora-volume-capsula',
      'calculadora-volume-toroide',
    ],
    inputLabels: {
      axisA: 'Semieixo X (a)',
      axisB: 'Semieixo Y (b)',
      axisC: 'Semieixo Z (c)',
    },
  },

  'calculadora-volume-piramide-quadrada': {
    slug: 'calculadora-volume-piramide-quadrada',
    englishSlug: 'square-pyramid-volume-calculator',
    spanishSlug: 'calculadora-volumen-piramide-cuadrada',
    germanSlug: 'quadratische-pyramide-volumen-rechner',
    frenchSlug: 'calculateur-volume-pyramide-carree',
    shapeId: 'square_pyramid',
    shapeName: 'Pirâmide quadrada',
    categoryLabel: 'Prismas e pirâmides',
    title: 'Calculadora Pirâmide Quadrada',
    h1: 'Calculadora de volume de pirâmide quadrada',
    metaDescription: 'Calcule o volume de uma pirâmide regular de base quadrada a partir do lado da base e altura vertical ou apótema lateral.',
    keywords: 'calculadora de volume de pirâmide quadrada, calcular volume piramide base quadrada, formula volume piramide, volume telhado piramidal, capacidade piramide regular',
    shortTagline: 'Calcule o volume de monumentos piramidais, tremonhas quadradas e telhados com quatro águas idênticas.',
    howToCalculate: [
      'Meça o comprimento do lado a da base quadrada e a altura vertical perpendicular h do centro da base ao ápice.',
      'Eleve o lado da base ao quadrado para obter a área da base: A_base = a².',
      'Multiplique a área da base pela altura vertical h e divida o valor por 3: V = (1/3) × a² × h.',
    ],
    formulaHtml: 'V = ⅓ · a² · h',
    formulaNote: 'Onde a é o lado da base e h é a altura vertical perpendicular. A apótema lateral s é √(h² + (a/2)²).',
    practicalExamples: [
      {
        title: 'Grande Pirâmide de Gizé',
        desc: 'Originalmente com 230,4 metros de base e 146,5 metros de altura, continha cerca de 2,59 milhões de m³ de pedras calcárias.',
      },
      {
        title: 'Telhado piramidal residencial',
        desc: 'Um quiosque com base de 4 m de lado e altura de cumeeira de 2 m possui volume de forro de 10,67 m³.',
      },
      {
        title: 'Tremonha de alimentação de grãos',
        desc: 'Tremonha quadrada invertida com boca de 1,5 m de lado e 2 m de profundidade retém 1 500 litros de insumos.',
      },
    ],
    faqs: [
      {
        question: 'Qual é a fórmula do volume de uma pirâmide de base quadrada?',
        answer: 'V = ⅓ · a² · h (a = lado da base, h = altura vertical).',
      },
      {
        question: 'Como encontrar a altura através do apótema lateral (s)?',
        answer: 'Calcule h = √(s² - (a/2)²).',
      },
      {
        question: 'Por que a fórmula tem o fator ⅓?',
        answer: 'Três pirâmides de mesma base e altura preenchem exatamente o volume do prisma correspondente.',
      },
    ],
    relatedPortugueseSlugs: [
      'calculadora-volume-piramide-retangular',
      'calculadora-volume-cone',
      'calculadora-volume-cubo',
      'calculadora-volume-prisma-triangular',
    ],
    inputLabels: {
      baseEdge: 'Lado da base quadrada (a)',
      height: 'Altura vertical (h)',
    },
  },

  'calculadora-volume-piramide-retangular': {
    slug: 'calculadora-volume-piramide-retangular',
    englishSlug: 'rectangular-pyramid-volume-calculator',
    spanishSlug: 'calculadora-volumen-piramide-rectangular',
    germanSlug: 'rechteckige-pyramide-volumen-rechner',
    frenchSlug: 'calculateur-volume-pyramide-rectangulaire',
    shapeId: 'rectangular_pyramid',
    shapeName: 'Pirâmide retangular',
    categoryLabel: 'Prismas e pirâmides',
    title: 'Calculadora Pirâmide Retangular',
    h1: 'Calculadora de volume de pirâmide retangular',
    metaDescription: 'Calcule o volume de uma pirâmide com base retangular a partir do comprimento, largura e altura vertical com fórmula detalhada.',
    keywords: 'calculadora de volume de pirâmide retangular, volume piramide base retangular formula, calcular volume piramide retangular, volume telhado quatro aguas, cubagem piramide retangular',
    shortTagline: 'Calcule o volume de sótãos, coberturas com quatro caimentos e tremonhas de britagem retangulares.',
    howToCalculate: [
      'Meça o comprimento c e a largura l do retângulo da base.',
      'Multiplique o comprimento pela largura para encontrar a área basal do retângulo: A_base = c × l.',
      'Multiplique a área da base pela altura vertical perpendicular h e divida por 3: V = (c × l × h) / 3.',
    ],
    formulaHtml: 'V = ⅓ · c · l · h',
    formulaNote: 'Onde c é o comprimento da base, l é a largura da base e h é a altura perpendicular ao piso.',
    practicalExamples: [
      {
        title: 'Telhado quatro águas residencial',
        desc: 'Uma edificação com 10 m de comprimento, 6 m de largura e 2,5 m de altura sob a cumeeira possui volume interno de 50 m³.',
      },
      {
        title: 'Tremonhas industriais retangulares',
        desc: 'Com boca superior de 2,4 m por 1,6 m e altura de 1,8 m, retém 2 304 litros de minério.',
      },
      {
        title: 'Pedestais decorativos e estelas',
        desc: 'Pedestal de granito com base de 80 cm por 60 cm e 120 cm de altura cubica 192 litros (0,192 m³).',
      },
    ],
    faqs: [
      {
        question: 'Qual é a fórmula do volume de uma pirâmide retangular?',
        answer: 'V = ⅓ · c · l · h (comprimento × largura × altura / 3).',
      },
      {
        question: 'Quais medidas são necessárias para calcular um sótão piramidal?',
        answer: 'Comprimento do piso, largura do piso e altura vertical máxima até o cume.',
      },
      {
        question: 'Em que unidades o volume é expresso?',
        answer: 'Em metros cúbicos (m³), litros ou centímetros cúbicos (cm³).',
      },
    ],
    relatedPortugueseSlugs: [
      'calculadora-volume-piramide-quadrada',
      'calculadora-volume-prisma-retangular',
      'calculadora-volume-cone',
      'calculadora-volume-prisma-trapezoidal',
    ],
    inputLabels: {
      length: 'Comprimento da base (c)',
      width: 'Largura da base (l)',
      height: 'Altura vertical (h)',
    },
  },

  'calculadora-volume-prisma-triangular': {
    slug: 'calculadora-volume-prisma-triangular',
    englishSlug: 'triangular-prism-volume-calculator',
    spanishSlug: 'calculadora-volumen-prisma-triangular',
    germanSlug: 'dreiecksprisma-volumen-rechner',
    frenchSlug: 'calculateur-volume-prisme-triangulaire',
    shapeId: 'triangular_prism',
    shapeName: 'Prisma triangular',
    categoryLabel: 'Prismas e pirâmides',
    title: 'Calculadora Prisma Triangular',
    h1: 'Calculadora de volume de prisma triangular',
    metaDescription: 'Calcule o volume de prismas triangulares e telhados duas águas a partir da base, altura do triângulo e comprimento de extrusão.',
    keywords: 'calculadora de volume de prisma triangular, calcular volume prisma triangular, formula prisma base triangular, volume telhado duas aguas, volume barraca canadense',
    shortTagline: 'Calcule a cubagem de telhados em duas águas, barracas canadenses, chocolates em barra e calhas triangulares.',
    howToCalculate: [
      'Meça a largura da base b do triângulo frontal e a altura vertical do triângulo (h_t).',
      'Calcule a área da seção triangular: A_t = (b × h_t) / 2.',
      'Multiplique a área do triângulo pelo comprimento longitudinal de extrusão L do prisma: V = A_t × L.',
    ],
    formulaHtml: 'V = ½ · b · h · L',
    formulaNote: 'Onde b é a base do triângulo, h é a altura da seção triangular e L é o comprimento do prisma.',
    practicalExamples: [
      {
        title: 'Barraca canadense de acampamento',
        desc: 'Com 1,60 m de largura de piso, 1,20 m de altura central e 2,10 m de comprimento, oferece volume de 2,02 m³ (2 016 litros).',
      },
      {
        title: 'Madeiramento de telhado duas águas',
        desc: 'Um telhado de 8 m de vão, 2 m de altura de cumeeira e 12 m de extensão fecha volume útil de 96 m³.',
      },
      {
        title: 'Barra triangular de chocolate',
        desc: 'Com 3 cm de base, 2,6 cm de altura e 21 cm de comprimento, totaliza 81,9 cm³ de doce.',
      },
    ],
    faqs: [
      {
        question: 'Qual é a fórmula do volume de um prisma triangular?',
        answer: 'V = ½ · b · h · L (base do triângulo × altura do triângulo / 2 × comprimento).',
      },
      {
        question: 'Como calcular um prisma com triângulo equilátero de lado s?',
        answer: 'V = (√3 / 4) · s² · L.',
      },
      {
        question: 'Como calcular o volume interno de uma barraca triangular de camping?',
        answer: 'Multiplique largura do piso por altura central / 2, e multiplique pelo comprimento da barraca.',
      },
    ],
    relatedPortugueseSlugs: [
      'calculadora-volume-prisma-retangular',
      'calculadora-volume-piramide-quadrada',
      'calculadora-volume-prisma-trapezoidal',
      'calculadora-volume-cubo',
    ],
    inputLabels: {
      triangleBase: 'Base do triângulo (b)',
      triangleHeight: 'Altura do triângulo (h)',
      prismLength: 'Comprimento longitudinal (L)',
    },
  },

  'calculadora-volume-tubo': {
    slug: 'calculadora-volume-tubo',
    englishSlug: 'pipe-volume-calculator',
    spanishSlug: 'calculadora-volumen-tubo',
    germanSlug: 'rohr-volumen-rechner',
    frenchSlug: 'calculateur-volume-tube',
    shapeId: 'hollow_cylinder',
    shapeName: 'Tubo e cilindro oco',
    categoryLabel: 'Tanques e tubos',
    title: 'Calculadora Volume Tubo',
    h1: 'Calculadora de volume de tubo',
    metaDescription: 'Calcule a capacidade de fluido e o volume de material da parede de tubulações e cilindros ocos com precisão métrica.',
    keywords: 'calculadora de volume de tubo, volume cilindro oco formula, capacidade de agua em tubulacao, volume parede do tubo, calcular litros em encanamento',
    shortTagline: 'Calcule a quantidade de água retida em encanamentos e a massa de ferro ou PVC da parede tubular.',
    howToCalculate: [
      'Meça o raio interno r_i e o raio externo R_e do tubo, além do comprimento total L.',
      'Para a capacidade de líquido retida internamente, use a área interna multiplicada pelo comprimento: V_liq = π × r_i² × L.',
      'Para o volume de material que forma a parede do cano, subtraia os quadrados dos raios: V_mat = π × (R_e² - r_i²) × L.',
    ],
    formulaHtml: 'V = π · (Rₑ² - rᵢ²) · L',
    formulaNote: 'Onde Rₑ é o raio externo, rᵢ é o raio interno e L é o comprimento. A capacidade interna usa apenas rᵢ.',
    practicalExamples: [
      {
        title: 'Tubulação de água em PVC',
        desc: 'Um tubo de 100 mm de diâmetro interno (raio 5 cm) com 12 metros de comprimento retém 94,2 litros de água.',
      },
      {
        title: 'Tubos estruturais de aço para fundação',
        desc: 'Tubo com raio externo de 25 cm, interno de 23 cm e 6 m de comprimento consome 0,181 m³ de aço na parede.',
      },
      {
        title: 'Mangueira de jardim de 1/2 polegada',
        desc: 'Com diâmetro interno de 12,7 mm e 30 metros de extensão, armazena 3,8 litros de água em seu interior.',
      },
    ],
    faqs: [
      {
        question: 'Como calcular a capacidade de água de um tubo?',
        answer: 'Utilize o raio interno (rᵢ): V = π · rᵢ² · L.',
      },
      {
        question: 'Qual a fórmula do volume do material da parede do tubo?',
        answer: 'V = π · (Rₑ² - rᵢ²) · L (Rₑ = raio externo, rᵢ = raio interno).',
      },
      {
        question: 'Quantos litros cabem em 10 metros de tubo com 50 mm de diâmetro interno?',
        answer: 'Com rᵢ = 2,5 cm, o tubo comporta aproximadamente 19,6 litros.',
      },
    ],
    relatedPortugueseSlugs: [
      'calculadora-volume-cilindro',
      'calculadora-volume-tanque-horizontal',
      'calculadora-volume-capsula',
      'calculadora-volume-toroide',
    ],
    inputLabels: {
      outerRadius: 'Raio externo (Rₑ)',
      innerRadius: 'Raio interno (rᵢ)',
      height: 'Comprimento total (L)',
    },
  },

  'calculadora-volume-toroide': {
    slug: 'calculadora-volume-toroide',
    englishSlug: 'torus-volume-calculator',
    spanishSlug: 'calculadora-volumen-toroide',
    germanSlug: 'torus-volumen-rechner',
    frenchSlug: 'calculateur-volume-tore',
    shapeId: 'torus',
    shapeName: 'Toroide',
    categoryLabel: 'Corpos redondos',
    title: 'Calculadora Volume Toroide',
    h1: 'Calculadora de volume de toroide',
    metaDescription: 'Calcule o volume e a área de superfície de anéis toroidais, juntas O-ring e donuts usando o raio maior e o raio menor da seção.',
    keywords: 'calculadora de volume de toroide, volume de o-ring calculadora, formula volume de toroide, volume forma de donut, capacidade camara de ar toroide',
    shortTagline: 'Calcule o volume de juntas de vedação O-ring, câmaras de ar de pneus, boias redondas e donuts.',
    howToCalculate: [
      'Meça o raio maior R da linha central do toroide até o centro do anel.',
      'Meça o raio menor r da seção transversal circular do tubo.',
      'Aplique o Teorema do Centroide de Pappus-Guldin: V = 2 × π² × R × r².',
    ],
    formulaHtml: 'V = 2 · π² · R · r²',
    formulaNote: 'Onde R é a distância do centro ao eixo do tubo e r é o raio da seção tubular. O diâmetro total é 2(R + r).',
    practicalExamples: [
      {
        title: 'Junta de vedação O-ring de borracha',
        desc: 'Um anel com raio maior R de 20 mm e raio de seção r de 2 mm tem volume de 1 579 mm³ (1,58 cm³).',
      },
      {
        title: 'Câmara de ar de pneu de caminhão',
        desc: 'Com R = 45 cm e r = 12 cm, retém volume de ar interno de 127,9 litros.',
      },
      {
        title: 'Boia de piscina em formato de rosquinha',
        desc: 'Uma boia com R = 40 cm e raio do tubo r = 15 cm retém 177,6 litros de ar.',
      },
    ],
    faqs: [
      {
        question: 'Qual é a fórmula do volume de um toroide?',
        answer: 'V = 2 · π² · R · r² (R = raio maior ao centro do tubo, r = raio da seção tubular).',
      },
      {
        question: 'Como calcular o volume de um anel O-ring com diâmetro interno (dᵢ) e espessura (e)?',
        answer: 'Aplique r = e / 2 e R = (dᵢ + e) / 2 na fórmula do toroide.',
      },
      {
        question: 'Qual é a área superficial externa de um toroide?',
        answer: 'A área superficial externa é calculada por A = 4 · π² · R · r.',
      },
    ],
    relatedPortugueseSlugs: [
      'calculadora-volume-cilindro',
      'calculadora-volume-esfera',
      'calculadora-volume-tubo',
      'calculadora-volume-elipsoide',
    ],
    inputLabels: {
      majorRadius: 'Raio maior ao centro (R)',
      minorRadius: 'Raio da seção do tubo (r)',
    },
  },

  'calculadora-volume-prisma-trapezoidal': {
    slug: 'calculadora-volume-prisma-trapezoidal',
    englishSlug: 'trapezoidal-prism-volume-calculator',
    spanishSlug: 'calculadora-volumen-prisma-trapezoidal',
    germanSlug: 'trapezprisma-volumen-rechner',
    frenchSlug: 'calculateur-volume-prisme-trapezoidal',
    shapeId: 'trapezoidal_prism',
    shapeName: 'Prisma trapezoidal',
    categoryLabel: 'Prismas e caixas',
    title: 'Calculadora Prisma Trapezoidal',
    h1: 'Calculadora de volume de prisma trapezoidal',
    metaDescription: 'Calcule a cubagem de valas, canais de drenagem e bebedouros de gado a partir das larguras superior e inferior, profundidade e extensão.',
    keywords: 'calculadora de volume de prisma trapezoidal, calcular volume de vala, volume canal de irrigacao, cubagem escavacao vala, capacidade bebedouro trapezoidal litros',
    shortTagline: 'Calcule o volume de terra em escavações de valas, canais de irrigação e bebedouros tipo cocho.',
    howToCalculate: [
      'Meça a largura superior a, a largura inferior do fundo b e a profundidade vertical perpendicular h.',
      'Calcule a área da seção trapezoidal: A_trap = ((a + b) / 2) × h.',
      'Multiplique a área trapezoidal pelo comprimento total de escavação ou extensão L: V = A_trap × L.',
    ],
    formulaHtml: 'V = ½ · (a + b) · h · L',
    formulaNote: 'Onde a é a largura do topo, b é a largura da base menor, h é a profundidade e L é o comprimento.',
    practicalExamples: [
      {
        title: 'Vala de drenagem pluvial',
        desc: 'Vala com 1,40 m de topo, 0,80 m de fundo, 1,00 m de profundidade e 50 metros de extensão requer escavação de 55 m³ de terra.',
      },
      {
        title: 'Canal de irrigação agrícola',
        desc: 'Com topo de 2,5 m, fundo de 1,5 m, altura de 1,2 m e 200 m de percurso, armazena 480 m³ de água corrente.',
      },
      {
        title: 'Cocho bebedouro de bovinos',
        desc: 'Com 60 cm de topo, 40 cm de base, 40 cm de profundidade e 3 m de comprimento, comporta 600 litros de água.',
      },
    ],
    faqs: [
      {
        question: 'Qual é a fórmula do volume de um prisma trapezoidal?',
        answer: 'V = ((a + b) / 2) · h · L (a = largura topo, b = largura fundo, h = profundidade, L = extensão).',
      },
      {
        question: 'Como calcular a terra a escavar em uma vala em m³?',
        answer: 'Meça as dimensões em metros e use V = ((a + b) / 2) · h · L.',
      },
      {
        question: 'Como calcular o volume de água em um cocho ou bebedouro em litros?',
        answer: 'Calcule em cm³ e divida por 1.000 para obter litros.',
      },
    ],
    relatedPortugueseSlugs: [
      'calculadora-volume-prisma-retangular',
      'calculadora-volume-prisma-triangular',
      'calculadora-volume-tronco-de-cone',
      'calculadora-volume-tubo',
    ],
    inputLabels: {
      topBase: 'Largura do topo (a)',
      bottomBase: 'Largura da base inferior (b)',
      height: 'Profundidade vertical (h)',
      length: 'Extensão longitudinal (L)',
    },
  },

  'calculadora-volume-tanque-horizontal': {
    slug: 'calculadora-volume-tanque-horizontal',
    englishSlug: 'horizontal-tank-volume-calculator',
    spanishSlug: 'calculadora-volumen-tanque-cilindrico-horizontal',
    germanSlug: 'liegender-zylindertank-volumen-rechner',
    frenchSlug: 'calculateur-volume-cuve-horizontale',
    shapeId: 'horizontal_tank_fill',
    shapeName: 'Tanque cilíndrico horizontal',
    categoryLabel: 'Tanques e tubos',
    title: 'Calculadora Tanque Horizontal',
    h1: 'Calculadora de tanque cilíndrico horizontal',
    metaDescription: 'Calcule os litros restantes em tanques cilíndricos horizontais deitado pela leitura da régua de nível com tabela de arqueamento exata.',
    keywords: 'calculadora de tanque cilíndrico horizontal, calcular litros tanque horizontal regua, tabela arqueamento tanque horizontal, volume liquido tanque deitado, capacidade tanque diesel horizontal',
    shortTagline: 'Calcule a litragem de óleo diesel, água ou combustível em reservatórios horizontais a partir da altura da régua medidora.',
    howToCalculate: [
      'Meça o raio interno r do cilindro, o comprimento L do tanque e o nível de líquido h medido na régua milimétrica.',
      'Calcule a área do segmento circular molhado: A_seg = r² × arccos((r - h) / r) - (r - h) × √(2rh - h²), com o arco cosseno em radianos.',
      'Multiplique a área do segmento pelo comprimento da virola cilíndrica L para obter o volume exato preenchido.',
    ],
    formulaHtml: 'V = [r² · arccos((r - h) / r) - (r - h)√(2rh - h²)] · L',
    formulaNote: 'Onde r é o raio do tanque, h é a altura de líquido da régua e L é o comprimento. Válido para 0 ≤ h ≤ 2r.',
    practicalExamples: [
      {
        title: 'Tanque aéreo de diesel de 5 000 litros',
        desc: 'Tanque com 1,40 m de diâmetro (raio 0,70 m) e 3,25 m de comprimento; se a régua marcar 35 cm (25% da altura), restam 978 litros.',
      },
      {
        title: 'Tanque abastecedor de fazenda meio cheio',
        desc: 'Quando h = r (nível exatamente no meio do diâmetro), o volume é exatamente 50% da capacidade total do cilindro.',
      },
      {
        title: 'Caminhão pipa de distribuição de água',
        desc: 'Tanque cilíndrico com raio de 0,90 m e 5 m de extensão; ao marcar 60 cm na régua, transporta 4 020 litros.',
      },
    ],
    faqs: [
      {
        question: 'Como calcular o volume em um tanque horizontal parcialmente cheio?',
        answer: 'Para raio r, comprimento L e nível da régua h: V = [r² · arccos((r - h) / r) - (r - h)√(2rh - h²)] · L (arccos em radianos).',
      },
      {
        question: 'Por que o nível medido na régua não é proporcional ao volume?',
        answer: 'Porque a seção circular é mais larga no centro e mais estreita no fundo e no topo.',
      },
      {
        question: 'Como converter a medida da régua em cm para litros?',
        answer: 'Insira as cotas em cm na fórmula e divida o volume obtido em cm³ por 1.000.',
      },
    ],
    relatedPortugueseSlugs: [
      'calculadora-volume-cilindro',
      'calculadora-volume-capsula',
      'calculadora-volume-tubo',
      'calculadora-volume-prisma-retangular',
    ],
    inputLabels: {
      radius: 'Raio interno do tanque (r)',
      length: 'Comprimento do cilindro (L)',
      fillDepth: 'Nível da régua de líquido (h)',
    },
  },
};
