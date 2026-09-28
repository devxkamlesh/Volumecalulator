export interface ItalianFaq {
  question: string;
  answer: string;
}

export interface ItalianPracticalExample {
  title: string;
  desc: string;
}

export interface ItalianToolDetail {
  slug: string;
  englishSlug: string;
  spanishSlug: string;
  germanSlug: string;
  frenchSlug: string;
  portugueseSlug: string;
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
  practicalExamples: ItalianPracticalExample[];
  faqs: ItalianFaq[];
  relatedItalianSlugs: string[];
  inputLabels: Record<string, string>;
}

export const ITALIAN_TOOLS: Record<string, ItalianToolDetail> = {
  'calcolatore-volume-cubo': {
    slug: 'calcolatore-volume-cubo',
    englishSlug: 'cube-volume-calculator',
    spanishSlug: 'calculadora-volumen-cubo',
    germanSlug: 'wuerfel-volumen-rechner',
    frenchSlug: 'calculateur-volume-cube',
    portugueseSlug: 'calculadora-volume-cubo',
    shapeId: 'cube',
    shapeName: 'Cubo',
    categoryLabel: 'Geometria 3D',
    title: 'Calcolatore Volume Cubo',
    h1: 'Calcolatore volume cubo',
    metaDescription: 'Calcola il volume di un cubo a partire dallo spigolo o dall\'area totale. Conversione istantanea in litri, metri cubi e galloni con formula spiegata.',
    keywords: 'calcolatore volume cubo, calcolare volume del cubo, formula volume cubo, volume cubo in litri, capacità di un cubo',
    shortTagline: 'Calcola la capienza volumetrica di scatole cubiche, dadi e contenitori a partire dalla lunghezza dello spigolo.',
    howToCalculate: [
      'Misura la lunghezza dello spigolo a del cubo in centimetri o metri. In un cubo regolare tutti gli spigoli hanno la medesima misura.',
      'Moltiplica la misura dello spigolo per se stessa tre volte: V = a × a × a = a³.',
      'Converti il risultato in metri cubi moltiplicando per 1.000 se desideri la capienza in litri.',
    ],
    formulaHtml: 'V = a³',
    formulaNote: 'Dove a rappresenta la misura dello spigolo. L\'area totale della superficie esterna è A = 6a².',
    practicalExamples: [
      {
        title: 'Scatole portaoggetti cubiche',
        desc: 'Un contenitore con spigolo di 40 cm sviluppa un volume interno di 40 × 40 × 40 = 64.000 cm³, pari a 64 litri.',
      },
      {
        title: 'Serbatoi cubici d\'acqua (IBC)',
        desc: 'Una cisterna cubica industriale con spigolo di 1 metro racchiude esattamente 1 m³, ovvero 1.000 litri d\'acqua.',
      },
      {
        title: 'Blocchi di calcestruzzo e casseforme',
        desc: 'Un getto di calcestruzzo cubico con lato di 50 cm richiede 0,125 m³ di materiale da cantiere.',
      },
    ],
    faqs: [
      {
        question: 'Come si calcola il volume di un cubo dallo spigolo?',
        answer: 'Si moltiplica la lunghezza dello spigolo per se stessa tre volte: V = a³.',
      },
      {
        question: 'Come trovare il volume conoscendo solo la superficie totale (A)?',
        answer: 'Trova lo spigolo con a = √(A / 6) ed eleva al cubo (V = a³).',
      },
      {
        question: 'Quanti litri contiene un cubo con lato di 1 metro?',
        answer: 'Un cubo di 1 m³ contiene esattamente 1.000 litri d\'acqua.',
      },
    ],
    relatedItalianSlugs: [
      'calcolatore-volume-prisma-rettangolare',
      'calcolatore-volume-cilindro',
      'calcolatore-volume-sfera',
      'calcolatore-volume-piramide-quadrata',
    ],
    inputLabels: {
      edge: 'Lunghezza spigolo (a)',
    },
  },

  'calcolatore-volume-prisma-rettangolare': {
    slug: 'calcolatore-volume-prisma-rettangolare',
    englishSlug: 'box-volume-calculator',
    spanishSlug: 'calculadora-volumen-prisma-rectangular',
    germanSlug: 'quader-volumen-rechner',
    frenchSlug: 'calculateur-volume-pave-droit',
    portugueseSlug: 'calculadora-volume-prisma-retangular',
    shapeId: 'rectangular_prism',
    shapeName: 'Prisma rettangolare',
    categoryLabel: 'Prismi e scatole',
    title: 'Calcolatore Prisma Rettangolare',
    h1: 'Calcolatore volume prisma rettangolare',
    metaDescription: 'Calcola il volume di un prisma rettangolare o scatola da lunghezza, larghezza e altezza. Calcolo metri cubi, litri e ingombro spedizioni.',
    keywords: 'calcolatore volume prisma rettangolare, calcolare volume scatola, calcolo metri cubi scatola, volume parallelepipedo rettangolo, capacità scatola in litri',
    shortTagline: 'Calcola il volume di scatoloni, casse da imballaggio, acquari e stanze a base rettangolare.',
    howToCalculate: [
      'Rileva la lunghezza l, la larghezza w e l\'altezza h del prisma o scatola nella medesima unità di misura.',
      'Moltiplica le tre dimensioni tra loro: V = lunghezza × larghezza × altezza.',
      'Dividi i centimetri cubi ottenuti per 1.000 per ricavare i litri o per 1.000.000 per i metri cubi.',
    ],
    formulaHtml: 'V = l · w · h',
    formulaNote: 'Dove l è la lunghezza, w la larghezza e h l\'altezza perpendicolare.',
    practicalExamples: [
      {
        title: 'Scatole da trasloco e spedizione',
        desc: 'Un cartone di 60 cm × 40 cm × 40 cm ha una volumetria di 96.000 cm³, corrispondente a 96 litri e 0,096 m³.',
      },
      {
        title: 'Acquari domestici',
        desc: 'Una vasca di 100 cm × 40 cm × 50 cm possiede una capienza geometrica lorda di 200 litri d\'acqua.',
      },
      {
        title: 'Container e vani di carico',
        desc: 'Un vano merci di 6 metri × 2,4 metri × 2,6 metri genera un volume di carico pari a 37,44 m³.',
      },
    ],
    faqs: [
      {
        question: 'Qual è la formula del volume di un prisma rettangolare?',
        answer: 'La formula è V = l × w × h (lunghezza × larghezza × altezza).',
      },
      {
        question: 'Come calcolare i metri cubi (m³) di uno scatolone da spedizione?',
        answer: 'Moltiplica le dimensioni in centimetri e dividi per 1.000.000.',
      },
      {
        question: 'Come convertire il volume di una scatola in litri?',
        answer: 'Calcola il volume in centimetri cubi (cm³) e dividi per 1.000.',
      },
    ],
    relatedItalianSlugs: [
      'calcolatore-volume-cubo',
      'calcolatore-volume-cilindro',
      'calcolatore-volume-piramide-rettangolare',
      'calcolatore-volume-prisma-trapezoidale',
    ],
    inputLabels: {
      length: 'Lunghezza (l)',
      width: 'Larghezza (w)',
      height: 'Altezza (h)',
    },
  },

  'calcolatore-volume-cilindro': {
    slug: 'calcolatore-volume-cilindro',
    englishSlug: 'cylinder-volume-calculator',
    spanishSlug: 'calculadora-volumen-cilindro',
    germanSlug: 'zylinder-volumen-rechner',
    frenchSlug: 'calculateur-volume-cylindre',
    portugueseSlug: 'calculadora-volume-cilindro',
    shapeId: 'cylinder',
    shapeName: 'Cilindro',
    categoryLabel: 'Corpi rotondi',
    title: 'Calcolatore Volume Cilindro',
    h1: 'Calcolatore volume cilindro',
    metaDescription: 'Calcola il volume di un cilindro dal raggio o diametro e dall\'altezza. Conversione immediata in litri, metri cubi e galloni con formula geometrica.',
    keywords: 'calcolatore volume cilindro, calcolo volume cilindro litri, formula volume cilindro raggio altezza, volume cilindro con diametro, capacità serbatoio cilindrico',
    shortTagline: 'Calcola la capienza di serbatoi verticali, tubature, fusti di petrolio, bottiglie e colonne cilindriche.',
    howToCalculate: [
      'Determina il raggio r della base circolare (o la metà del diametro d) e l\'altezza verticale h.',
      'Calcola l\'area della base circolare: A = π × r².',
      'Moltiplica l\'area di base per l\'altezza: V = π × r² × h.',
    ],
    formulaHtml: 'V = π · r² · h',
    formulaNote: 'Dove r è il raggio della base circolare e h è l\'altezza. Con il diametro d si calcola V = (π · d² · h) / 4.',
    practicalExamples: [
      {
        title: 'Fusti standard da 200 litri',
        desc: 'Un fusto con diametro di 57 cm (raggio 28,5 cm) e altezza di 85 cm contiene 216 litri lordi.',
      },
      {
        title: 'Silos agricoli verticali',
        desc: 'Un silo da granaglie di 3 metri di raggio e 8 metri di altezza accumula 226,19 m³ di sementi.',
      },
      {
        title: 'Tazze e barattoli cilindrici',
        desc: 'Un barattolo da conserva di 4 cm di raggio e 14 cm di altezza sviluppa un volume utile di 703 cm³ (0,7 litri).',
      },
    ],
    faqs: [
      {
        question: 'Qual è la formula per calcolare il volume di un cilindro?',
        answer: 'V = π · r² · h, dove r è il raggio di base e h è l\'altezza.',
      },
      {
        question: 'Come calcolare il volume direttamente con il diametro (d)?',
        answer: 'Usa la formula diretta V = (π · d² · h) / 4.',
      },
      {
        question: 'Quanti litri d\'acqua contiene una cisterna cilindrica?',
        answer: 'Calcola il volume in m³ e moltiplica per 1.000 per avere i litri.',
      },
    ],
    relatedItalianSlugs: [
      'calcolatore-volume-cono',
      'calcolatore-volume-tubo',
      'calcolatore-volume-capsula',
      'calcolatore-volume-serbatoio-orizzontale',
    ],
    inputLabels: {
      radius: 'Raggio della base (r)',
      height: 'Altezza verticale (h)',
    },
  },

  'calcolatore-volume-sfera': {
    slug: 'calcolatore-volume-sfera',
    englishSlug: 'sphere-volume-calculator',
    spanishSlug: 'calculadora-volumen-esfera',
    germanSlug: 'kugel-volumen-rechner',
    frenchSlug: 'calculateur-volume-sphere',
    portugueseSlug: 'calculadora-volume-esfera',
    shapeId: 'sphere',
    shapeName: 'Sfera',
    categoryLabel: 'Corpi rotondi',
    title: 'Calcolatore Volume Sfera',
    h1: 'Calcolatore volume sfera',
    metaDescription: 'Calcola il volume di una sfera dal raggio o diametro. Risultati istantanei in litri, metri cubi e galloni con formula geometrica completa.',
    keywords: 'calcolatore volume sfera, formula volume sfera, calcolare volume sfera con diametro, volume di una palla, calcolo metri cubi sfera',
    shortTagline: 'Calcola il volume di palloni, cuscinetti a sfera, globi, pianeti e gocce sferiche.',
    howToCalculate: [
      'Rileva il raggio r dal centro alla superficie esterna (oppure dividi il diametro per 2).',
      'Eleva il raggio alla terza potenza: r³ = r × r × r.',
      'Moltiplica per pi greco e per quattro terzi: V = (4/3) × π × r³.',
    ],
    formulaHtml: 'V = ⁴⁄₃ · π · r³',
    formulaNote: 'Dove r è il raggio della sfera. In funzione del diametro d: V = (π · d³) / 6. L\'area superficiale è A = 4πr².',
    practicalExamples: [
      {
        title: 'Palloni da calcio regolamentari',
        desc: 'Un pallone misura 5 con raggio di 11 cm possiede un volume di circa 5.575 cm³, ossia 5,58 litri.',
      },
      {
        title: 'Sfere per serbatoi pressurizzati',
        desc: 'Un serbatoio sferico di gas con raggio di 4 metri contiene 268,08 m³ di fluido stoccato.',
      },
      {
        title: 'Biglie e cuscinetti metallici',
        desc: 'Una sfera d\'acciaio da 10 mm di diametro (raggio 5 mm) occupa un volume di 523,6 mm³.',
      },
    ],
    faqs: [
      {
        question: 'Qual è la formula del volume di una sfera?',
        answer: 'V = ⁴⁄₃ · π · r³, dove r è il raggio.',
      },
      {
        question: 'Come calcolare il volume della sfera dal diametro?',
        answer: 'Applica la formula V = (π · d³) / 6.',
      },
      {
        question: 'Come calcolare il volume di una semisfera?',
        answer: 'Dividi il volume della sfera per due: V = ⅔ · π · r³.',
      },
    ],
    relatedItalianSlugs: [
      'calcolatore-volume-calotta-sferica',
      'calcolatore-volume-ellissoide',
      'calcolatore-volume-cilindro',
      'calcolatore-volume-capsula',
    ],
    inputLabels: {
      radius: 'Raggio della sfera (r)',
    },
  },

  'calcolatore-volume-cono': {
    slug: 'calcolatore-volume-cono',
    englishSlug: 'cone-volume-calculator',
    spanishSlug: 'calculadora-volumen-cono',
    germanSlug: 'kegel-volumen-rechner',
    frenchSlug: 'calculateur-volume-cone',
    portugueseSlug: 'calculadora-volume-cone',
    shapeId: 'cone',
    shapeName: 'Cono',
    categoryLabel: 'Corpi rotondi',
    title: 'Calcolatore Volume Cono',
    h1: 'Calcolatore volume cono',
    metaDescription: 'Calcola il volume di un cono retto a partire da raggio e altezza o apotema. Conversione in litri, metri cubi e galloni con formula geometrica.',
    keywords: 'calcolatore volume cono, formula calcolo volume cono, volume cono retto calcolatrice, calcolare volume cono apotema, capacità cono in litri',
    shortTagline: 'Calcola la volumetria di coni stradali, coni gelato, imbuti, tramogge e cumuli conici.',
    howToCalculate: [
      'Misura il raggio r del cerchio di base e l\'altezza verticale h dal centro della base al vertice.',
      'Calcola l\'area circolare della base: A = π × r².',
      'Moltiplica per l\'altezza verticale e dividi per tre: V = (1/3) × π × r² × h.',
    ],
    formulaHtml: 'V = ⅓ · π · r² · h',
    formulaNote: 'Dove r è il raggio di base e h è l\'altezza verticale. L\'apotema soddisfa a = √(r² + h²).',
    practicalExamples: [
      {
        title: 'Imbuti e tramogge di dosaggio',
        desc: 'Un imbuto da officina con raggio di 15 cm e altezza di 25 cm sviluppa 5.890 cm³, pari a 5,89 litri.',
      },
      {
        title: 'Cumuli di ghiaia e sabbia',
        desc: 'Un cumulo conico di cantiere con raggio di 3 metri e altezza di 2 metri accumula 18,85 m³ di materiale.',
      },
      {
        title: 'Coni gelato da pasticceria',
        desc: 'Una cialda conica con raggio di 3 cm e profondità di 12 cm contiene 113 cm³ di crema gelato.',
      },
    ],
    faqs: [
      {
        question: 'Qual è la formula del volume di un cono?',
        answer: 'La formula è V = ⅓ · π · r² · h, dove r è il raggio di base e h è l\'altezza.',
      },
      {
        question: 'Che relazione c\'è tra il volume del cono e quello del cilindro?',
        answer: 'Il cono equivale esattamente a un terzo (⅓) del volume di un cilindro di pari base e altezza.',
      },
      {
        question: 'Come trovare l\'altezza conoscendo l\'apotema (a)?',
        answer: 'Con il teorema di Pitagora: h = √(a² - r²).',
      },
    ],
    relatedItalianSlugs: [
      'calcolatore-volume-tronco-di-cono',
      'calcolatore-volume-cilindro',
      'calcolatore-volume-piramide-quadrata',
      'calcolatore-volume-sfera',
    ],
    inputLabels: {
      radius: 'Raggio della base (r)',
      height: 'Altezza verticale (h)',
    },
  },

  'calcolatore-volume-capsula': {
    slug: 'calcolatore-volume-capsula',
    englishSlug: 'capsule-volume-calculator',
    spanishSlug: 'calculadora-volumen-capsula',
    germanSlug: 'kapsel-volumen-rechner',
    frenchSlug: 'calculateur-volume-capsule',
    portugueseSlug: 'calculadora-volume-capsula',
    shapeId: 'capsule',
    shapeName: 'Capsula',
    categoryLabel: 'Serbatoi e tubi',
    title: 'Calcolatore Volume Capsula',
    h1: 'Calcolatore volume capsula',
    metaDescription: 'Calcola il volume di una capsula geometrica o serbatoio a siluro da raggio e lunghezza cilindrica. Conversione in litri e metri cubi.',
    keywords: 'calcolatore volume capsula, volume capsula farmaceutica, volume serbatoio gas gpl siluro, formula volume capsula geometrica, capacità bombolone gpl',
    shortTagline: 'Calcola il volume di serbatoi GPL a siluro, capsule medicinali e autoclavi con fondi emisferici.',
    howToCalculate: [
      'Determina il raggio r delle due calotte emisferiche di estremità e la lunghezza a del cilindro intermedio.',
      'Se conosci la lunghezza complessiva L, ricava la parte cilindrica con a = L - 2r.',
      'Somma il cilindro e la sfera completa formata dai due fondi: V = π × r² × ((4/3)r + a).',
    ],
    formulaHtml: 'V = π · r² · (⁴⁄₃r + a)',
    formulaNote: 'Dove r è il raggio comune e a è la lunghezza del mantello cilindrico.',
    practicalExamples: [
      {
        title: 'Serbatoi GPL orizzontali a siluro',
        desc: 'Un bombolone con raggio di 60 cm e tratto cilindrico di 200 cm ha una capacità totale di 3.167 litri.',
      },
      {
        title: 'Capsule farmaceutiche rigide',
        desc: 'Una capsula misura 0 con raggio di 3,5 mm e cilindro di 14 mm racchiude un volume di 718 mm³.',
      },
      {
        title: 'Reattori chimici ad alta pressione',
        desc: 'Un recipiente industriale con r = 1 m e a = 3 m raggiunge un volume utile di 13,61 m³.',
      },
    ],
    faqs: [
      {
        question: 'Qual è la formula del volume di una capsula geometrica?',
        answer: 'V = π · r² · (⁴⁄₃r + a), dove a è la lunghezza del corpo cilindrico e r il raggio.',
      },
      {
        question: 'Come si ricava la lunghezza del cilindro dalla lunghezza totale (L)?',
        answer: 'Sottraendo il diametro dalla lunghezza totale: a = L - 2r.',
      },
      {
        question: 'Dove viene usata questa formula?',
        answer: 'Nel dosaggio farmaceutico delle capsule e nei serbatoi di stoccaggio GPL a pressione (serbatoi a siluro).',
      },
    ],
    relatedItalianSlugs: [
      'calcolatore-volume-cilindro',
      'calcolatore-volume-sfera',
      'calcolatore-volume-serbatoio-orizzontale',
      'calcolatore-volume-tubo',
    ],
    inputLabels: {
      radius: 'Raggio emisferi (r)',
      sideLength: 'Lunghezza cilindro (a)',
    },
  },

  'calcolatore-volume-calotta-sferica': {
    slug: 'calcolatore-volume-calotta-sferica',
    englishSlug: 'spherical-cap-volume-calculator',
    spanishSlug: 'calculadora-volumen-casquete-esferico',
    germanSlug: 'kugelsegment-volumen-rechner',
    frenchSlug: 'calculateur-volume-calotte-spherique',
    portugueseSlug: 'calculadora-volume-calota-esferica',
    shapeId: 'spherical_cap',
    shapeName: 'Calotta sferica',
    categoryLabel: 'Corpi rotondi',
    title: 'Calcolatore Calotta Sferica',
    h1: 'Calcolatore volume calotta sferica',
    metaDescription: 'Calcola il volume di una calotta sferica o cupola architettonica da raggio di base e altezza. Conversione in litri e metri cubi con formula esatta.',
    keywords: 'calcolatore volume calotta sferica, calcolo volume cupola, formula calotta sferica, volume cupola emisferica, volume ciotola sferica',
    shortTagline: 'Calcola il volume di cupole architettoniche, ciotole, lenti, fondi bombati e calotte sferiche.',
    howToCalculate: [
      'Misura il raggio r del cerchio di base della calotta e l\'altezza verticale h dal piano di base al vertice.',
      'Se invece conosci il raggio della sfera genitrice R, calcola V = (πh²/3)(3R - h).',
      'Con raggio di base r e altezza h, applica la formula diretta: V = (πh/6)(3r² + h²).',
    ],
    formulaHtml: 'V = (π · h / 6) · (3r² + h²)',
    formulaNote: 'Dove r è il raggio della base circolare e h è l\'altezza della calotta.',
    practicalExamples: [
      {
        title: 'Cupole architettoniche',
        desc: 'Una cupola a calotta ribassata con raggio di base di 8 metri e altezza di 3 metri racchiude 315,7 m³ d\'aria.',
      },
      {
        title: 'Ciotole sferiche da cucina',
        desc: 'Un recipiente con apertura di raggio 12 cm e altezza 8 cm sviluppa un volume di 2.178 cm³, pari a 2,18 litri.',
      },
      {
        title: 'Fondi bombati di serbatoi',
        desc: 'Un fondo sferico industriale con r = 100 cm e h = 30 cm contiene un volume supplementare di 490 litri.',
      },
    ],
    faqs: [
      {
        question: 'Qual è la formula del volume di una calotta sferica?',
        answer: 'Con raggio di base r e altezza h: V = (π · h / 6)(3r² + h²).',
      },
      {
        question: 'Come calcolare il volume d\'aria all\'interno di una cupola?',
        answer: 'Rileva il raggio della base r e l\'altezza al vertice h, quindi applica la formula della calotta.',
      },
      {
        question: 'Qual è la differenza tra semisfera e calotta sferica?',
        answer: 'La semisfera è una calotta in cui h = r; ogni altra altezza definisce una calotta sferica generale.',
      },
    ],
    relatedItalianSlugs: [
      'calcolatore-volume-sfera',
      'calcolatore-volume-ellissoide',
      'calcolatore-volume-cono',
      'calcolatore-volume-tronco-di-cono',
    ],
    inputLabels: {
      baseRadius: 'Raggio della base (r)',
      height: 'Altezza della calotta (h)',
    },
  },

  'calcolatore-volume-tronco-di-cono': {
    slug: 'calcolatore-volume-tronco-di-cono',
    englishSlug: 'conical-frustum-volume-calculator',
    spanishSlug: 'calculadora-volumen-tronco-de-cono',
    germanSlug: 'kegelstumpf-volumen-rechner',
    frenchSlug: 'calculateur-volume-tronc-de-cone',
    portugueseSlug: 'calculadora-volume-tronco-de-cone',
    shapeId: 'conical_frustum',
    shapeName: 'Tronco di cono',
    categoryLabel: 'Corpi rotondi',
    title: 'Calcolatore Tronco di Cono',
    h1: 'Calcolatore volume tronco di cono',
    metaDescription: 'Calcola il volume di un tronco di cono o secchio circolare dai raggi superiore e inferiore e dall\'altezza. Risultati in litri e metri cubi.',
    keywords: 'calcolatore volume tronco di cono, calcolo volume secchio, volume vaso conico litri, formula tronco di cono, capacità bicchiere conico',
    shortTagline: 'Calcola la capienza di secchi rotondi, vasi da fiori, bicchieri di carta, paralumi e coni troncati.',
    howToCalculate: [
      'Rileva il raggio della base superiore r1, il raggio della base inferiore r2 e l\'altezza verticale perpendicolare h.',
      'Calcola la somma r1² + r1 × r2 + r2².',
      'Moltiplica per pi greco e per l\'altezza h, quindi dividi il tutto per tre: V = (πh/3)(r1² + r1r2 + r2²).',
    ],
    formulaHtml: 'V = ⅓ · π · h · (r₁² + r₁r₂ + r₂²)',
    formulaNote: 'Dove r₁ è il raggio superiore, r₂ il raggio inferiore e h l\'altezza perpendicolare.',
    practicalExamples: [
      {
        title: 'Secchi da cantiere e pulizie',
        desc: 'Un secchio da 14 cm di raggio superiore, 10 cm di raggio inferiore e 28 cm di altezza ha una capienza di 12,8 litri.',
      },
      {
        title: 'Vasi tronco-conici per piante',
        desc: 'Un vaso da vivaio con r1 = 20 cm, r2 = 14 cm e h = 30 cm contiene 27,5 litri di terriccio.',
      },
      {
        title: 'Bicchieri usa e getta',
        desc: 'Un bicchiere con raggio superiore di 4 cm, inferiore di 2,5 cm e altezza di 11 cm raccogisce 370 cm³ (0,37 litri).',
      },
    ],
    faqs: [
      {
        question: 'Qual è la formula del volume di un tronco di cono?',
        answer: 'V = (π · h / 3)(r₁² + r₁ · r₂ + r₂²), con r₁ e r₂ raggi superiore e inferiore.',
      },
      {
        question: 'Come calcolare la capienza in litri di un secchio rotondo?',
        answer: 'Inserisci le misure in cm, calcola il volume in cm³ e dividi per 1.000.',
      },
      {
        question: 'È possibile usare direttamente i diametri?',
        answer: 'Sì: la formula con i diametri è V = (π · h / 12)(d₁² + d₁ · d₂ + d₂²).',
      },
    ],
    relatedItalianSlugs: [
      'calcolatore-volume-cono',
      'calcolatore-volume-cilindro',
      'calcolatore-volume-calotta-sferica',
      'calcolatore-volume-prisma-trapezoidale',
    ],
    inputLabels: {
      topRadius: 'Raggio superiore (r₁)',
      bottomRadius: 'Raggio inferiore (r₂)',
      height: 'Altezza verticale (h)',
    },
  },

  'calcolatore-volume-ellissoide': {
    slug: 'calcolatore-volume-ellissoide',
    englishSlug: 'ellipsoid-volume-calculator',
    spanishSlug: 'calculadora-volumen-elipsoide',
    germanSlug: 'ellipsoid-volumen-rechner',
    frenchSlug: 'calculateur-volume-ellipsoide',
    portugueseSlug: 'calculadora-volume-elipsoide',
    shapeId: 'ellipsoid',
    shapeName: 'Ellissoide',
    categoryLabel: 'Corpi rotondi',
    title: 'Calcolatore Volume Ellissoide',
    h1: 'Calcolatore volume ellissoide',
    metaDescription: 'Calcola il volume di un ellissoide triassiale o sferoide oblato/prolato dai tre semiassi. Conversione immediata in litri e metri cubi.',
    keywords: 'calcolatore volume ellissoide, formula volume ellissoide, volume palla da rugby, volume sferoide oblato, calcolo metri cubi ellissoide',
    shortTagline: 'Calcola il volume di palloni da rugby, angurie, uova, pianeti e corpi solidi ovali.',
    howToCalculate: [
      'Misura la lunghezza, la larghezza e l\'altezza complessive dell\'ellissoide.',
      'Dimezza ciascuna dimensione totale per trovare i tre semiassi a, b e c.',
      'Moltiplica i semiassi per pi greco e per quattro terzi: V = (4/3) × π × a × b × c.',
    ],
    formulaHtml: 'V = ⁴⁄₃ · π · a · b · c',
    formulaNote: 'Dove a, b e c sono i tre semiassi ortogonali (metà delle tre estensioni assiali complete).',
    practicalExamples: [
      {
        title: 'Pallone da rugby ufficiale',
        desc: 'Con semiassi a = 14 cm, b = 9,5 cm e c = 9,5 cm racchiude un volume d\'aria di circa 5,3 litri.',
      },
      {
        title: 'Angurie e meloni ovali',
        desc: 'Un\'anguria con semiassi di 18 cm, 12 cm e 12 cm ha un volume lordo di circa 10,8 litri.',
      },
      {
        title: 'Sferoidi planetari oblati',
        desc: 'Modellando la Terra come sferoide con a = b = 6.378 km e c = 6.357 km si ricava un volume di 1,083 × 10¹² km³.',
      },
    ],
    faqs: [
      {
        question: 'Qual è la formula del volume di un ellissoide?',
        answer: 'V = ⁴⁄₃ · π · a · b · c, dove a, b, c sono i tre semiassi.',
      },
      {
        question: 'Che differenza c\'è tra ellissoide e sfera?',
        answer: 'Nella sfera i tre raggi coincidono (a = b = c); nell\'ellissoide triassiale sono differenti.',
      },
      {
        question: 'Come calcolare i semiassi di un solido ovale?',
        answer: 'Misura lunghezza, larghezza e altezza massime e dividi ciascuna per 2.',
      },
    ],
    relatedItalianSlugs: [
      'calcolatore-volume-sfera',
      'calcolatore-volume-calotta-sferica',
      'calcolatore-volume-capsula',
      'calcolatore-volume-toroide',
    ],
    inputLabels: {
      semiAxisA: 'Semiasse X (a)',
      semiAxisB: 'Semiasse Y (b)',
      semiAxisC: 'Semiasse Z (c)',
    },
  },

  'calcolatore-volume-piramide-quadrata': {
    slug: 'calcolatore-volume-piramide-quadrata',
    englishSlug: 'square-pyramid-volume-calculator',
    spanishSlug: 'calculadora-volumen-piramide-cuadrada',
    germanSlug: 'quadratische-pyramide-volumen-rechner',
    frenchSlug: 'calculateur-volume-pyramide-carree',
    portugueseSlug: 'calculadora-volume-piramide-quadrada',
    shapeId: 'square_pyramid',
    shapeName: 'Piramide quadrata',
    categoryLabel: 'Piramidi e prismi',
    title: 'Calcolatore Piramide Quadrata',
    h1: 'Calcolatore volume piramide quadrata',
    metaDescription: 'Calcola il volume di una piramide a base quadrata dal lato di base e altezza verticale o apotema. Formula spiegata e conversione in metri cubi.',
    keywords: 'calcolatore volume piramide quadrata, formula volume piramide base quadrata, calcolare volume piramide, volume tetto a piramide, capacità piramide regolare',
    shortTagline: 'Calcola il volume di tetti a padiglione quadrato, monumenti piramidali e tramogge a piramide regolare.',
    howToCalculate: [
      'Rileva la misura del lato a della base quadrata e l\'altezza verticale h dal centro della base al vertice.',
      'Calcola l\'area della base quadrata elevando il lato al quadrato: Area = a².',
      'Moltiplica per l\'altezza verticale e dividi per 3: V = (1/3) × a² × h.',
    ],
    formulaHtml: 'V = ⅓ · a² · h',
    formulaNote: 'Dove a è il lato della base quadrata e h è l\'altezza verticale. L\'apotema soddisfa s = √(h² + (a/2)²).',
    practicalExamples: [
      {
        title: 'Piramide di Cheope a Giza',
        desc: 'Con base originaria di 230,4 metri e altezza di 146,5 metri sviluppa una cubatura monumentale di circa 2,59 milioni di m³.',
      },
      {
        title: 'Tetti residenziali a piramide quadrata',
        desc: 'Un tetto su pianta quadrata di 8 metri di lato con altezza al colmo di 3 metri delimita 64 m³ di sottotetto.',
      },
      {
        title: 'Tramogge metalliche a piramide invertita',
        desc: 'Una tramoggia di 1,5 metri di lato e 1,8 metri di profondità contiene 1,35 m³ di materiale granulare.',
      },
    ],
    faqs: [
      {
        question: 'Qual è la formula del volume di una piramide a base quadrata?',
        answer: 'V = ⅓ · a² · h (dove a è il lato della base e h è l\'altezza verticale).',
      },
      {
        question: 'Come ricavare l\'altezza dall\'apotema laterale (s)?',
        answer: 'Con il teorema di Pitagora: h = √(s² - (a/2)²).',
      },
      {
        question: 'Perché c\'è il coefficiente ⅓?',
        answer: 'Tre piramidi con la stessa base e altezza riempiono esattamente il volume del prisma corrispondente.',
      },
    ],
    relatedItalianSlugs: [
      'calcolatore-volume-piramide-rettangolare',
      'calcolatore-volume-cono',
      'calcolatore-volume-cubo',
      'calcolatore-volume-prisma-triangolare',
    ],
    inputLabels: {
      baseEdge: 'Lato della base (a)',
      height: 'Altezza verticale (h)',
    },
  },

  'calcolatore-volume-piramide-rettangolare': {
    slug: 'calcolatore-volume-piramide-rettangolare',
    englishSlug: 'rectangular-pyramid-volume-calculator',
    spanishSlug: 'calculadora-volumen-piramide-rectangular',
    germanSlug: 'rechteckige-pyramide-volumen-rechner',
    frenchSlug: 'calculateur-volume-pyramide-rectangulaire',
    portugueseSlug: 'calculadora-volume-piramide-retangular',
    shapeId: 'rectangular_pyramid',
    shapeName: 'Piramide rettangolare',
    categoryLabel: 'Piramidi e prismi',
    title: 'Calcolatore Piramide Rettangolo',
    h1: 'Calcolatore volume piramide rettangolare',
    metaDescription: 'Calcola il volume di una piramide a base rettangolare da lunghezza, larghezza e altezza verticale. Cubatura tetti a quattro falde e tramogge.',
    keywords: 'calcolatore volume piramide rettangolare, formula piramide base rettangolare, calcolo volume tetto a padiglione, volume sottotetto piramidale, cubatura piramide rettangolare',
    shortTagline: 'Calcola il volume di tetti a quattro falde, coperture a padiglione, tramogge rettangolari e cumuli allungati.',
    howToCalculate: [
      'Misura la lunghezza l e la larghezza w del rettangolo di base, oltre all\'altezza verticale h fino al vertice.',
      'Calcola l\'area della base rettangolare moltiplicando lunghezza per larghezza: A = l × w.',
      'Moltiplica per l\'altezza perpendicolare e dividi per 3: V = (l × w × h) / 3.',
    ],
    formulaHtml: 'V = ⅓ · l · w · h',
    formulaNote: 'Dove l è la lunghezza, w la larghezza della base rettangolare e h l\'altezza perpendicolare.',
    practicalExamples: [
      {
        title: 'Tetti a padiglione piramidale',
        desc: 'Un sottotetto con base di 10 metri per 6 metri e altezza di 2,5 metri racchiude 50 m³ di volume d\'aria.',
      },
      {
        title: 'Tramogge industriali asimmetriche',
        desc: 'Una tramoggia di 2,4 metri × 1,5 metri con profondità di 1,8 metri contiene 2,16 m³ di sementi o polveri.',
      },
      {
        title: 'Basi tronco-piramidali per monumenti',
        desc: 'Una piramide di 4 metri per 3 metri alta 2 metri richiede 8 m³ di calcestruzzo armato.',
      },
    ],
    faqs: [
      {
        question: 'Qual è la formula del volume di una piramide rettangolare?',
        answer: 'V = ⅓ · l · w · h (lunghezza × larghezza × altezza / 3).',
      },
      {
        question: 'Quali misure servono per calcolare la cubatura di un sottotetto?',
        answer: 'Lunghezza del solaio, larghezza del solaio e altezza massima al colmo.',
      },
      {
        question: 'In che unità si esprime il volume?',
        answer: 'In metri cubi (m³), litri o centimetri cubi (cm³).',
      },
    ],
    relatedItalianSlugs: [
      'calcolatore-volume-piramide-quadrata',
      'calcolatore-volume-prisma-rettangolare',
      'calcolatore-volume-prisma-triangolare',
      'calcolatore-volume-cono',
    ],
    inputLabels: {
      baseLength: 'Lunghezza base (l)',
      baseWidth: 'Larghezza base (w)',
      height: 'Altezza verticale (h)',
    },
  },

  'calcolatore-volume-prisma-triangolare': {
    slug: 'calcolatore-volume-prisma-triangolare',
    englishSlug: 'triangular-prism-volume-calculator',
    spanishSlug: 'calculadora-volumen-prisma-triangular',
    germanSlug: 'dreiecksprisma-volumen-rechner',
    frenchSlug: 'calculateur-volume-prisme-triangulaire',
    portugueseSlug: 'calculadora-volume-prisma-triangular',
    shapeId: 'triangular_prism',
    shapeName: 'Prisma triangolare',
    categoryLabel: 'Prismi e scatole',
    title: 'Calcolatore Prisma Triangolare',
    h1: 'Calcolatore volume prisma triangolare',
    metaDescription: 'Calcola il volume di un prisma triangolare da base e altezza del triangolo e lunghezza del prisma. Cubatura tetti a capanna e tende da campeggio.',
    keywords: 'calcolatore volume prisma triangolare, calcolo volume prisma a base triangolare, volume tetto a due falde, formula volume cuneo, volume tenda da campeggio',
    shortTagline: 'Calcola il volume di tetti a capanna a due falde, cunei meccanici, tende canadesi e cioccolatini triangolari.',
    howToCalculate: [
      'Misura la base b e l\'altezza hΔ del profilo triangolare frontale.',
      'Calcola l\'area del triangolo di sezione: A = (b × hΔ) / 2.',
      'Moltiplica per la lunghezza o estensione longitudinale L del prisma: V = A × L.',
    ],
    formulaHtml: 'V = ½ · b · hΔ · L',
    formulaNote: 'Dove b è la base del triangolo, hΔ l\'altezza del triangolo e L la lunghezza del prisma.',
    practicalExamples: [
      {
        title: 'Tetti a due falde tradizionali',
        desc: 'Un sottotetto con base di 8 metri, altezza di 3 metri e lunghezza di 12 metri contiene 144 m³ di volume.',
      },
      {
        title: 'Tende canadesi da campeggio',
        desc: 'Una tenda con base di 1,8 metri, altezza palo di 1,4 metri e lunghezza di 2,2 metri racchiude 2,77 m³ di spazio interno.',
      },
      {
        title: 'Cunei meccanici di bloccaggio',
        desc: 'Un cuneo con base di 10 cm, altezza di 4 cm e profondità di 25 cm ha un volume di 500 cm³.',
      },
    ],
    faqs: [
      {
        question: 'Qual è la formula del volume di un prisma triangolare?',
        answer: 'V = ½ · b · hΔ · L (base triangolo × altezza triangolo / 2 × lunghezza prisma).',
      },
      {
        question: 'Come calcolare un prisma a base triangolare equilatera di lato s?',
        answer: 'La formula è V = (√3 / 4) · s² · L.',
      },
      {
        question: 'Come calcolare il volume interno di una tenda a due falde?',
        answer: 'Larghezza pavimento × altezza palo centrale / 2 × profondità tenda.',
      },
    ],
    relatedItalianSlugs: [
      'calcolatore-volume-prisma-rettangolare',
      'calcolatore-volume-prisma-trapezoidale',
      'calcolatore-volume-piramide-rettangolare',
      'calcolatore-volume-cubo',
    ],
    inputLabels: {
      baseEdge: 'Base del triangolo (b)',
      triangleHeight: 'Altezza triangolo (hΔ)',
      length: 'Lunghezza prisma (L)',
    },
  },

  'calcolatore-volume-tubo': {
    slug: 'calcolatore-volume-tubo',
    englishSlug: 'pipe-volume-calculator',
    spanishSlug: 'calculadora-volumen-tubo',
    germanSlug: 'rohr-volumen-rechner',
    frenchSlug: 'calculateur-volume-tube',
    portugueseSlug: 'calculadora-volume-tubo',
    shapeId: 'hollow_cylinder',
    shapeName: 'Tubo cilindrico',
    categoryLabel: 'Serbatoi e tubi',
    title: 'Calcolatore Volume Tubo',
    h1: 'Calcolatore volume tubo',
    metaDescription: 'Calcola il volume del cilindro cavo, la capienza di fluido in un tubo e il volume della parete dal raggio interno, raggio esterno e lunghezza.',
    keywords: 'calcolatore volume tubo, volume cilindro cavo formula, calcolo litri acqua in un tubo, volume materiale parete tubo, capacità tubazione idraulica',
    shortTagline: 'Calcola litri d\'acqua nelle condotte idrauliche, volume del materiale di tubazioni e manicotti cilindrici cavi.',
    howToCalculate: [
      'Misura il raggio interno ri, il raggio esterno Re e la lunghezza totale L della tubazione.',
      'Per la capienza di liquido nel tubo applica Vfluido = π × ri² × L.',
      'Per il volume del materiale della parete calcola Vparete = π × (Re² - ri²) × L.',
    ],
    formulaHtml: 'V = π · (Rₑ² - rᵢ²) · L',
    formulaNote: 'Dove Rₑ è il raggio esterno, rᵢ il raggio interno e L la lunghezza. La capacità interna è Vᵢ = π · rᵢ² · L.',
    practicalExamples: [
      {
        title: 'Condotte idrauliche domestiche',
        desc: 'Un tubo di 10 metri con diametro interno di 50 mm (raggio 2,5 cm) contiene 19,6 litri d\'acqua.',
      },
      {
        title: 'Tubi in acciaio per carpenteria',
        desc: 'Un tubo di 6 metri con Re = 6 cm e ri = 5 cm richiede 20,73 litri di acciaio (volume metallico).',
      },
      {
        title: 'Pozzi artesiani e camicie di perforazione',
        desc: 'Una colonna da pozzo profonda 30 metri con ri = 10 cm trattiene 942 litri di colonna idrica.',
      },
    ],
    faqs: [
      {
        question: 'Come calcolare il volume d\'acqua contenuto in un tubo?',
        answer: 'Usa il raggio interno (rᵢ): V = π · rᵢ² · L.',
      },
      {
        question: 'Qual è la formula per il volume del materiale della parete?',
        answer: 'V = π · (Rₑ² - rᵢ²) · L (Rₑ = raggio esterno, rᵢ = raggio interno).',
      },
      {
        question: 'Quanti litri contiene un tubo di 10 m con diametro interno di 50 mm?',
        answer: 'Con rᵢ = 2,5 cm, il tubo contiene circa 19,6 litri.',
      },
    ],
    relatedItalianSlugs: [
      'calcolatore-volume-cilindro',
      'calcolatore-volume-toroide',
      'calcolatore-volume-capsula',
      'calcolatore-volume-serbatoio-orizzontale',
    ],
    inputLabels: {
      outerRadius: 'Raggio esterno (Rₑ)',
      innerRadius: 'Raggio interno (rᵢ)',
      height: 'Lunghezza tubo (L)',
    },
  },

  'calcolatore-volume-toroide': {
    slug: 'calcolatore-volume-toroide',
    englishSlug: 'torus-volume-calculator',
    spanishSlug: 'calculadora-volumen-toroide',
    germanSlug: 'torus-volumen-rechner',
    frenchSlug: 'calculateur-volume-tore',
    portugueseSlug: 'calculadora-volume-toroide',
    shapeId: 'torus',
    shapeName: 'Toroide',
    categoryLabel: 'Corpi rotondi',
    title: 'Calcolatore Volume Toroide',
    h1: 'Calcolatore volume toroide',
    metaDescription: 'Calcola il volume e l\'area superficiale di un toroide circolare, ciambella o anello O-ring dal raggio maggiore e raggio della sezione.',
    keywords: 'calcolatore volume toroide, calcolo volume o-ring, formula volume del toro, volume ciambella geometria, volume camera d\'aria toroide',
    shortTagline: 'Calcola il volume di anelli O-ring in gomma, camere d\'aria, ciambelle salvagente e toroidi magnetici.',
    howToCalculate: [
      'Rileva il raggio maggiore R dal centro del foro al centro della sezione circolare del tubo.',
      'Misura il raggio minore r della sezione circolare del tubo.',
      'Applica il teorema di Pappo-Guldino: V = 2 × π² × R × r².',
    ],
    formulaHtml: 'V = 2 · π² · R · r²',
    formulaNote: 'Dove R è il raggio maggiore dal centro al tubo e r è il raggio della sezione tubolare.',
    practicalExamples: [
      {
        title: 'Guarnizioni O-ring industriali',
        desc: 'Un O-ring con diametro interno di 40 mm e corda di 5 mm (r = 2,5 mm, R = 22,5 mm) sviluppa un volume di gomma di 2,78 cm³.',
      },
      {
        title: 'Camere d\'aria per pneumatici di trattore',
        desc: 'Con R = 45 cm e r = 12 cm, racchiude un volume d\'aria pressurizzata di 127,9 litri.',
      },
      {
        title: 'Ciambelle salvagente da piscina',
        desc: 'Un salvagente gonfiabile con R = 40 cm e raggio tubo r = 15 cm trattiene 177,6 litri d\'aria.',
      },
    ],
    faqs: [
      {
        question: 'Qual è la formula del volume di un toroide?',
        answer: 'V = 2 · π² · R · r² (R = raggio maggiore al centro del tubo, r = raggio della sezione).',
      },
      {
        question: 'Come calcolare il volume di un anello O-ring da diametro interno (dᵢ) e corda (c)?',
        answer: 'Poni r = c / 2 e R = (dᵢ + c) / 2, inserendoli nella formula del toro.',
      },
      {
        question: 'Qual è l\'area della superficie esterna del toroide?',
        answer: 'L\'area superficiale esterna è calcolata con la formula A = 4 · π² · R · r.',
      },
    ],
    relatedItalianSlugs: [
      'calcolatore-volume-cilindro',
      'calcolatore-volume-tubo',
      'calcolatore-volume-sfera',
      'calcolatore-volume-ellissoide',
    ],
    inputLabels: {
      majorRadius: 'Raggio maggiore (R)',
      minorRadius: 'Raggio della sezione (r)',
    },
  },

  'calcolatore-volume-prisma-trapezoidale': {
    slug: 'calcolatore-volume-prisma-trapezoidale',
    englishSlug: 'trapezoidal-prism-volume-calculator',
    spanishSlug: 'calculadora-volumen-prisma-trapezoidal',
    germanSlug: 'trapezprisma-volumen-rechner',
    frenchSlug: 'calculateur-volume-prisme-trapezoidal',
    portugueseSlug: 'calculadora-volume-prisma-trapezoidal',
    shapeId: 'trapezoidal_prism',
    shapeName: 'Prisma trapezoidale',
    categoryLabel: 'Prismi e scatole',
    title: 'Calcolatore Prisma Trapezoidale',
    h1: 'Calcolatore volume prisma trapezoidale',
    metaDescription: 'Calcola il volume di scavo di trincee, canali di irrigazione e abbeveratoi da larghezza superiore, inferiore, profondità e lunghezza.',
    keywords: 'calcolatore volume prisma trapezoidale, calcolo volume trincea scavo, volume canale d\'irrigazione, cubatura scavo trapezoidale, capacità abbeveratoio trapezoidale litri',
    shortTagline: 'Calcola la cubatura di scavo per trincee, canali di scolo, vasche agricole e argini stradali a sezione trapezoidale.',
    howToCalculate: [
      'Misura la larghezza superiore a, la larghezza inferiore di fondo b, la profondità verticale h e la lunghezza totale L.',
      'Calcola l\'area della sezione trapezoidale media: A = ((a + b) / 2) × h.',
      'Moltiplica per la lunghezza longitudinale L dello scavo o canale: V = A × L.',
    ],
    formulaHtml: 'V = ½ · (a + b) · h · L',
    formulaNote: 'Dove a è la larghezza superiore, b la larghezza inferiore, h la profondità e L la lunghezza.',
    practicalExamples: [
      {
        title: 'Scavi per trincee di tubazioni',
        desc: 'Uno scavo con a = 1,4 m, b = 0,8 m, profondità h = 1,2 m e lunghezza L = 50 m richiede l\'asporto di 66 m³ di terreno.',
      },
      {
        title: 'Canali di irrigazione e drenaggio',
        desc: 'Un canale lungo 100 metri con base superiore di 2 m, fondo di 1 m e altezza 0,8 m raccoglie 120 m³ d\'acqua.',
      },
      {
        title: 'Mangiatoie e abbeveratoi per bestiame',
        desc: 'Una vasca di a = 80 cm, b = 50 cm, h = 40 cm e L = 200 cm possiede una capienza di 520 litri.',
      },
    ],
    faqs: [
      {
        question: 'Qual è la formula del volume di un prisma trapezoidale?',
        answer: 'V = ((a + b) / 2) · h · L (a = larghezza superiore, b = larghezza fondo, h = profondità, L = lunghezza).',
      },
      {
        question: 'Come calcolare la terra da scavare per una trincea in m³?',
        answer: 'Rileva le quote in metri e calcola V = ((a + b) / 2) · h · L.',
      },
      {
        question: 'Come ricavare la capienza di una vasca o mangiatoia in litri?',
        answer: 'Calcola il volume in cm³ e dividi per 1.000.',
      },
    ],
    relatedItalianSlugs: [
      'calcolatore-volume-prisma-rettangolare',
      'calcolatore-volume-prisma-triangolare',
      'calcolatore-volume-tronco-di-cono',
      'calcolatore-volume-serbatoio-orizzontale',
    ],
    inputLabels: {
      topWidth: 'Larghezza superiore (a)',
      bottomWidth: 'Larghezza inferiore (b)',
      height: 'Profondità scavo (h)',
      length: 'Lunghezza estensione (L)',
    },
  },

  'calcolatore-volume-serbatoio-orizzontale': {
    slug: 'calcolatore-volume-serbatoio-orizzontale',
    englishSlug: 'horizontal-tank-volume-calculator',
    spanishSlug: 'calculadora-volumen-tanque-cilindrico-horizontal',
    germanSlug: 'liegender-zylindertank-volumen-rechner',
    frenchSlug: 'calculateur-volume-cuve-horizontale',
    portugueseSlug: 'calculadora-volume-tanque-horizontal',
    shapeId: 'horizontal_tank_fill',
    shapeName: 'Serbatoio orizzontale',
    categoryLabel: 'Serbatoi e tubi',
    title: 'Calcolatore Serbatoio Orizzontale',
    h1: 'Calcolatore serbatoio orizzontale',
    metaDescription: 'Calcola i litri effettivi in un serbatoio cilindrico orizzontale dal livello dell\'asta metrica. Tabella di taratura e litri rimanenti di gasolio.',
    keywords: 'calcolatore serbatoio orizzontale, calcolo litri serbatoio cilindrico orizzontale asta, tabella taratura serbatoio orizzontale, volume liquido cisterna orizzontale, litri rimanenti serbatoio gasolio',
    shortTagline: 'Calcola i litri esatti di carburante o liquido in cisterne orizzontali e serbatoi cilindrici sdraiati.',
    howToCalculate: [
      'Rileva il raggio r del cilindro (metà diametro), la lunghezza della virola L e l\'altezza del liquido h misurata con l\'asta graduata.',
      'Calcola l\'area del segmento circolare bagnato: A = r² × arccos((r - h)/r) - (r - h) × √(2rh - h²).',
      'Moltiplica l\'area della sezione bagnata per la lunghezza L del serbatoio per trovare il volume esatto di liquido.',
    ],
    formulaHtml: 'V = [r² · arccos((r - h)/r) - (r - h)√(2rh - h²)] · L',
    formulaNote: 'Dove r è il raggio del serbatoio, h è l\'altezza del liquido misurata dall\'asta e L è la lunghezza del cilindro.',
    practicalExamples: [
      {
        title: 'Cisterne di gasolio da riscaldamento',
        desc: 'Un serbatoio di diametro 120 cm (r = 60 cm) e lunghezza 200 cm con livello asta di 30 cm contiene 507 litri di gasolio.',
      },
      {
        title: 'Serbatoi a metà riempimento',
        desc: 'A metà altezza (h = r), la cisterna contiene esattamente il 50% della sua capacità nominale totale.',
      },
      {
        title: 'Cisterne per camion botte e rimorchi',
        desc: 'Un serbatoio di r = 90 cm e L = 500 cm con livello h = 45 cm trattiene 2.502 litri di liquido.',
      },
    ],
    faqs: [
      {
        question: 'Come calcolare i litri in un serbatoio orizzontale parzialmente pieno?',
        answer: 'Con raggio r, lunghezza L e livello asta h: V = [r² · arccos((r - h)/r) - (r - h)√(2rh - h²)] · L (con arccos in radianti).',
      },
      {
        question: 'Perché il livello dell\'asta non è proporzionale al volume?',
        answer: 'Perché la sezione circolare è più larga al centro e più stretta in alto e in basso.',
      },
      {
        question: 'Come convertire i centimetri dell\'asta in litri di carburante?',
        answer: 'Inserisci i dati in cm nella formula e dividi il volume in cm³ per 1.000.',
      },
    ],
    relatedItalianSlugs: [
      'calcolatore-volume-cilindro',
      'calcolatore-volume-capsula',
      'calcolatore-volume-tubo',
      'calcolatore-volume-prisma-rettangolare',
    ],
    inputLabels: {
      radius: 'Raggio serbatoio (r)',
      length: 'Lunghezza cilindro (L)',
      fillDepth: 'Livello liquido asta (h)',
    },
  },
};
