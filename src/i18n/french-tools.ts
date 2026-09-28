export interface FrenchFaq {
  question: string;
  answer: string;
}

export interface FrenchPracticalExample {
  title: string;
  desc: string;
}

export interface FrenchToolDetail {
  slug: string;
  englishSlug: string;
  spanishSlug: string;
  germanSlug: string;
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
  practicalExamples: FrenchPracticalExample[];
  faqs: FrenchFaq[];
  relatedFrenchSlugs: string[];
  inputLabels: Record<string, string>;
}

export const FRENCH_TOOLS: Record<string, FrenchToolDetail> = {
  'calculateur-volume-cube': {
    slug: 'calculateur-volume-cube',
    englishSlug: 'cube-volume-calculator',
    spanishSlug: 'calculadora-volumen-cubo',
    germanSlug: 'wuerfel-volumen-rechner',
    shapeId: 'cube',
    shapeName: 'Cube',
    categoryLabel: 'Géométrie 3D',
    title: 'Calculateur Volume Cube',
    h1: 'Calculer le volume d\'un cube',
    metaDescription: 'Calculez le volume d\'un cube à partir de son arête ou de sa surface totale. Conversion instantanée en litres, mètres cubes et gallons avec formule détaillée.',
    keywords: 'calculateur volume cube, calculer volume d\'un cube, formule volume cube, volume cube en litres, calculer arête cube volume',
    shortTagline: 'Calculez le volume et la contenance de bacs cubiques, dés et conteneurs à partir de la longueur d\'arête.',
    howToCalculate: [
      'Mesurez la longueur de l\'arête a du cube. Dans un cube, longueur, largeur et hauteur possèdent la même mesure.',
      'Multipliez la longueur de l\'arête trois fois par elle-même : V = a × a × a = a³.',
      'Convertissez le résultat dans l\'unité voulue comme les litres ou les mètres cubes.',
    ],
    formulaHtml: 'V = a³',
    formulaNote: 'Où a est la longueur de l\'arête. L\'aire totale de la surface est A = 6a².',
    practicalExamples: [
      {
        title: 'Bacs et caisses cubiques',
        desc: 'Un bac de rangement de 50 cm d\'arête présente un volume de 50 × 50 × 50 = 125 000 cm³, soit exactement 125 litres.',
      },
      {
        title: 'Blocs de fondation',
        desc: 'Calcul du volume de béton pour des massifs carrés en génie civil en mètres cubes.',
      },
      {
        title: 'Aquariums cubiques',
        desc: 'Un aquarium nano cube de 30 cm d\'arête offre une contenance de 27 litres d\'eau.',
      },
    ],
    faqs: [
      {
        question: 'Comment calculer le volume d\'un cube ?',
        answer: 'Avec la formule V = a³, où a représente la longueur de l\'arête. Si l\'arête mesure 5 cm, le volume est 5 × 5 × 5 = 125 cm³.',
      },
      {
        question: 'Comment trouver le volume à partir de l\'aire totale (A) ?',
        answer: 'Calculez l\'arête avec a = √(A / 6), puis appliquez la formule V = a³.',
      },
      {
        question: 'Combien de litres contient un cube de 1 mètre d\'arête ?',
        answer: 'Un cube de 1 m³ contient exactement 1 000 litres d\'eau.',
      },
    ],
    relatedFrenchSlugs: [
      'calculateur-volume-pave-droit',
      'calculateur-volume-cylindre',
      'calculateur-volume-sphere',
      'calculateur-volume-pyramide-carree',
    ],
    inputLabels: {
      side: 'Longueur de l\'arête (a)',
    },
  },

  'calculateur-volume-pave-droit': {
    slug: 'calculateur-volume-pave-droit',
    englishSlug: 'box-volume-calculator',
    spanishSlug: 'calculadora-volumen-prisma-rectangular',
    germanSlug: 'quader-volumen-rechner',
    shapeId: 'rectangular_prism',
    shapeName: 'Pavé droit',
    categoryLabel: 'Prismes et boîtes',
    title: 'Calculateur Volume Pavé Droit',
    h1: 'Calculer le volume d\'un pavé droit',
    metaDescription: 'Calculez le volume d\'un pavé droit ou d\'un carton d\'expédition à partir de la longueur, largeur et hauteur. Résultats immédiats en m³ et litres.',
    keywords: 'calculateur volume pavé droit, calculer volume d\'une boîte, calcul m3 carton, volume parallélépipède rectangle, capacité boîte en litres',
    shortTagline: 'Calculez le volume de cartons, boîtes, colis postaux, pièces et réservoirs rectangulaires.',
    howToCalculate: [
      'Mesurez les trois dimensions du pavé : longueur L, largeur l et hauteur h dans la même unité de mesure.',
      'Multipliez ces trois dimensions entre elles : V = L × l × h.',
      'Convertissez les unités cubiques obtenues en litres ou en mètres cubes.',
    ],
    formulaHtml: 'V = L · l · h',
    formulaNote: 'Où L est la longueur, l la largeur et h la hauteur. L\'aire totale est A = 2(Ll + Lh + lh).',
    practicalExamples: [
      {
        title: 'Cartons d\'expédition',
        desc: 'Un colis mesurant 60 cm × 40 cm × 30 cm possède un volume de 72 000 cm³ ou 72 litres.',
      },
      {
        title: 'Volume d\'air d\'une pièce',
        desc: 'Une pièce de 5 m de long, 4 m de large et 2,5 m de haut représente un volume de 50 m³ d\'air.',
      },
      {
        title: 'Bacs potagers',
        desc: 'Évaluation du volume de terreau nécessaire pour un bac de culture rectangulaire en litres.',
      },
    ],
    faqs: [
      {
        question: 'Quelle est la formule du volume d\'un pavé droit ?',
        answer: 'La formule est V = L × l × h (longueur × largeur × hauteur). Toutes les mesures doivent être exprimées dans la même unité.',
      },
      {
        question: 'Comment calculer le volume d\'un carton d\'expédition en m³ ?',
        answer: 'Multipliez la longueur, la largeur et la hauteur en centimètres et divisez le total obtenu par 1 000 000.',
      },
      {
        question: 'Comment convertir le volume d\'une boîte en litres ?',
        answer: 'Calculez le volume en centimètres cubes (cm³) et divisez par 1 000 pour obtenir la contenance en litres.',
      },
    ],
    relatedFrenchSlugs: [
      'calculateur-volume-cube',
      'calculateur-volume-cylindre',
      'calculateur-volume-prisme-trapezoidal',
      'calculateur-volume-prisme-triangulaire',
    ],
    inputLabels: {
      length: 'Longueur (L)',
      width: 'Largeur (l)',
      height: 'Hauteur (h)',
    },
  },

  'calculateur-volume-cylindre': {
    slug: 'calculateur-volume-cylindre',
    englishSlug: 'cylinder-volume-calculator',
    spanishSlug: 'calculadora-volumen-cilindro',
    germanSlug: 'zylinder-volumen-rechner',
    shapeId: 'cylinder',
    shapeName: 'Cylindre',
    categoryLabel: 'Corps ronds',
    title: 'Calculateur Volume Cylindre',
    h1: 'Calculer le volume d\'un cylindre',
    metaDescription: 'Calculez le volume d\'un cylindre ou d\'une cuve à partir du rayon ou diamètre et de la hauteur. Conversion directe en litres et mètres cubes.',
    keywords: 'calculateur volume cylindre, calculer volume cylindre litres, formule volume cylindre, volume cylindre avec diamètre, capacité cuve cylindrique',
    shortTagline: 'Calculez la capacité de cuves cylindriques, réservoirs, canettes, puits et tuyaux pleins.',
    howToCalculate: [
      'Mesurez le rayon r du disque de base ainsi que la hauteur verticale h du cylindre.',
      'Élevez le rayon au carré, puis multipliez par le nombre Pi et par la hauteur : V = π × r² × h.',
      'Convertissez le résultat en litres ou mètres cubes selon vos besoins.',
    ],
    formulaHtml: 'V = π · r² · h',
    formulaNote: 'Avec le diamètre d : V = (π · d² · h) / 4. L\'aire totale est A = 2πr(r + h).',
    practicalExamples: [
      {
        title: 'Cuves d\'eau de pluie',
        desc: 'Un récupérateur cylindrique de 40 cm de rayon et 100 cm de haut retient environ 502,6 litres d\'eau.',
      },
      {
        title: 'Boîtes de conserve',
        desc: 'Calcul de la contenance exacte d\'emballages alimentaires métalliques cylindriques.',
      },
      {
        title: 'Vérins hydrauliques',
        desc: 'Détermination du volume de chambre pour dimensionner le débit d\'huile sous pression.',
      },
    ],
    faqs: [
      {
        question: 'Quelle est la formule pour calculer le volume d\'un cylindre ?',
        answer: 'La formule est V = π · r² · h, où r est le rayon de la base circulaire et h la hauteur du cylindre.',
      },
      {
        question: 'Comment calculer le volume directement avec le diamètre (d) ?',
        answer: 'Appliquez la formule directe V = (π · d² · h) / 4, ou divisez d par 2 avant d\'utiliser V = π · r² · h.',
      },
      {
        question: 'Combien de litres d\'eau contient un réservoir cylindrique ?',
        answer: 'Calculez le volume V en mètres cubes (m³) et multipliez le total par 1 000 pour trouver la capacité en litres.',
      },
    ],
    relatedFrenchSlugs: [
      'calculateur-volume-cone',
      'calculateur-volume-capsule',
      'calculateur-volume-tube',
      'calculateur-volume-cuve-horizontale',
    ],
    inputLabels: {
      radius: 'Rayon de la base (r)',
      height: 'Hauteur (h)',
    },
  },

  'calculateur-volume-sphere': {
    slug: 'calculateur-volume-sphere',
    englishSlug: 'sphere-volume-calculator',
    spanishSlug: 'calculadora-volumen-esfera',
    germanSlug: 'kugel-volumen-rechner',
    shapeId: 'sphere',
    shapeName: 'Sphère',
    categoryLabel: 'Corps ronds',
    title: 'Calculateur Volume Sphère',
    h1: 'Calculer le volume d\'une sphère',
    metaDescription: 'Calculez le volume d\'une sphère à partir de son rayon ou diamètre. Conversion en litres, mètres cubes et calcul du volume d\'hémisphère.',
    keywords: 'calculateur volume sphère, calculer volume d\'une sphère, formule volume boule, volume sphère avec diamètre, volume ballon de foot',
    shortTagline: 'Calculez le volume de billes, ballons de sport, planètes et réservoirs sphériques de gaz.',
    howToCalculate: [
      'Mesurez le rayon r depuis le centre jusqu\'à la surface, ou divisez le diamètre par 2.',
      'Élevez le rayon au cube et multipliez par quatre tiers et par Pi : V = ⁴⁄₃ × π × r³.',
      'Convertissez en litres, millilitres ou mètres cubes.',
    ],
    formulaHtml: 'V = ⁴⁄₃ · π · r³',
    formulaNote: 'Avec le diamètre d : V = (π · d³) / 6. L\'aire superficielle de la sphère est A = 4πr².',
    practicalExamples: [
      {
        title: 'Ballons de football',
        desc: 'Un ballon de taille 5 avec un rayon de 11 cm possède un volume d\'environ 5 575 cm³.',
      },
      {
        title: 'Réservoirs sphériques de gaz',
        desc: 'Calcul de la contenance de sphères industrielles de stockage de gaz sous pression.',
      },
      {
        title: 'Billes métalliques',
        desc: 'Évaluation de la masse et du volume de billes de roulement en mécanique de précision.',
      },
    ],
    faqs: [
      {
        question: 'Quelle est la formule du volume d\'une sphère ?',
        answer: 'La formule est V = ⁴⁄₃ · π · r³, où r est le rayon de la sphère mesuré du centre à la surface.',
      },
      {
        question: 'Comment calculer le volume d\'une sphère à partir du diamètre ?',
        answer: 'Avec la formule V = (π · d³) / 6, ou en divisant le diamètre par 2 pour appliquer V = ⁴⁄₃ · π · r³.',
      },
      {
        question: 'Comment calculer le volume d\'une demi-sphère (hémisphère) ?',
        answer: 'Divisez le volume de la sphère complète par deux : V = ⅔ · π · r³.',
      },
    ],
    relatedFrenchSlugs: [
      'calculateur-volume-ellipsoide',
      'calculateur-volume-calotte-spherique',
      'calculateur-volume-capsule',
      'calculateur-volume-cylindre',
    ],
    inputLabels: {
      radius: 'Rayon de la sphère (r)',
    },
  },

  'calculateur-volume-cone': {
    slug: 'calculateur-volume-cone',
    englishSlug: 'cone-volume-calculator',
    spanishSlug: 'calculadora-volumen-cono',
    germanSlug: 'kegel-volumen-rechner',
    shapeId: 'cone',
    shapeName: 'Cône',
    categoryLabel: 'Corps ronds',
    title: 'Calculateur Volume Cône',
    h1: 'Calculer le volume d\'un cône',
    metaDescription: 'Calculez le volume d\'un cône circulaire droit à partir du rayon et de la hauteur ou apothème. Formule pas à pas et conversion en litres.',
    keywords: 'calculateur volume cône, calculer volume cône de révolution, formule volume d\'un cône, volume cône en litres, hauteur cône avec apothème',
    shortTagline: 'Calculez le volume d\'entonnoirs, tas de sable, cônes de chantier et trémies coniques.',
    howToCalculate: [
      'Mesurez le rayon r de la base circulaire et la hauteur perpendiculaire h.',
      'Calculez l\'aire du disque de base, multipliez par la hauteur et divisez par 3 : V = ⅓ × π × r² × h.',
      'Si seule l\'apothème g est connue, appliquez le théorème de Pythagore pour trouver h.',
    ],
    formulaHtml: 'V = ⅓ · π · r² · h',
    formulaNote: 'Où r est le rayon de base et h la hauteur. Apothème : g = √(r² + h²).',
    practicalExamples: [
      {
        title: 'Tas de gravier et silos',
        desc: 'Les déversements naturels de granulats forment des cônes pour estimer rapidement les tonnages stockés.',
      },
      {
        title: 'Entonnoirs d\'atelier',
        desc: 'Calcul de la contenance utile d\'entonnoirs de transvasement et de filtres coniques.',
      },
      {
        title: 'Pointes de flèche et toits',
        desc: 'Évaluation du cubage d\'éléments architecturaux coniques sur tourelles et clochers.',
      },
    ],
    faqs: [
      {
        question: 'Quelle est la formule du volume d\'un cône ?',
        answer: 'La formule est V = ⅓ · π · r² · h, où r est le rayon de base et h la hauteur verticale perpendiculaire.',
      },
      {
        question: 'Quel est le lien entre le volume du cône et celui du cylindre ?',
        answer: 'Le volume du cône équivaut exactement au tiers (⅓) d\'un cylindre partageant la même base et la même hauteur.',
      },
      {
        question: 'Comment trouver la hauteur avec l\'apothème ou génératrice (g) ?',
        answer: 'Appliquez le théorème de Pythagore : h = √(g² - r²), où g est l\'apothème inclinée et r le rayon.',
      },
    ],
    relatedFrenchSlugs: [
      'calculateur-volume-tronc-de-cone',
      'calculateur-volume-cylindre',
      'calculateur-volume-pyramide-carree',
      'calculateur-volume-sphere',
    ],
    inputLabels: {
      radius: 'Rayon de la base (r)',
      height: 'Hauteur verticale (h)',
    },
  },

  'calculateur-volume-capsule': {
    slug: 'calculateur-volume-capsule',
    englishSlug: 'capsule-volume-calculator',
    spanishSlug: 'calculadora-volumen-capsula',
    germanSlug: 'kapsel-volumen-rechner',
    shapeId: 'capsule',
    shapeName: 'Capsule',
    categoryLabel: 'Cuves et tuyaux',
    title: 'Calculateur Volume Capsule',
    h1: 'Calculer le volume d\'une capsule',
    metaDescription: 'Calculez le volume d\'une capsule géométrique ou cuve cigare à fonds hémisphériques. Utile pour les gélules et réservoirs de gaz sous pression.',
    keywords: 'calculateur volume capsule, volume capsule pharmaceutique, calculer volume cuve cigare, formule volume capsule géométrique, capacité réservoir bombé gaz',
    shortTagline: 'Calculez le volume de gélules pharmaceutiques et de cuves industrielles à fonds bombés.',
    howToCalculate: [
      'Mesurez le rayon r des deux extrémités hémisphériques et la longueur a du corps cylindrique central.',
      'Appliquez la formule combinée : V = π × r² × (⁴⁄₃ × r + a).',
      'Si vous avez la longueur totale L, déduisez la section cylindrique avec a = L - 2r.',
    ],
    formulaHtml: 'V = π · r² · (⁴⁄₃r + a)',
    formulaNote: 'Une capsule réunit un cylindre central et deux demi-sphères (soit une sphère complète).',
    practicalExamples: [
      {
        title: 'Réservoirs de gaz GPL',
        desc: 'Les cuves de propane horizontales à bouts ronds optimisent la tenue mécanique sous haute pression.',
      },
      {
        title: 'Gélules pharmaceutiques',
        desc: 'Dosage volumétrique précis de poudres et microgranules pour gélules en gélatine.',
      },
      {
        title: 'Réservoirs de plongée',
        desc: 'Calcul de la contenance interne de bouteilles d\'air comprimé à fonds hémisphériques.',
      },
    ],
    faqs: [
      {
        question: 'Quelle est la formule du volume d\'une capsule ?',
        answer: 'La formule est V = π · r² · (⁴⁄₃r + a), où a est la longueur de la section cylindrique et r le rayon des calottes.',
      },
      {
        question: 'Comment déduire la longueur cylindrique de la longueur totale (L) ?',
        answer: 'Avec la relation a = L - 2r, en soustrayant le diamètre complet des deux demi-sphères de la longueur totale.',
      },
      {
        question: 'Quelles sont les applications pratiques de cette formule ?',
        answer: 'Le dosage des gélules en pharmacie et le dimensionnement des réservoirs de gaz GPL sous pression (cuves cigares).',
      },
    ],
    relatedFrenchSlugs: [
      'calculateur-volume-cylindre',
      'calculateur-volume-sphere',
      'calculateur-volume-cuve-horizontale',
      'calculateur-volume-tube',
    ],
    inputLabels: {
      radius: 'Rayon des calottes (r)',
      sideLength: 'Longueur du cylindre (a)',
    },
  },

  'calculateur-volume-calotte-spherique': {
    slug: 'calculateur-volume-calotte-spherique',
    englishSlug: 'spherical-cap-volume-calculator',
    spanishSlug: 'calculadora-volumen-casquete-esferico',
    germanSlug: 'kugelsegment-volumen-rechner',
    shapeId: 'spherical_cap',
    shapeName: 'Calotte sphérique',
    categoryLabel: 'Corps ronds',
    title: 'Calculateur Calotte Sphérique',
    h1: 'Calculer le volume d\'une calotte sphérique',
    metaDescription: 'Calculez le volume d\'une calotte sphérique ou d\'un dôme à partir du rayon et de la hauteur. Formule exacte pour bols, coupoles et lentilles.',
    keywords: 'calculateur volume calotte sphérique, calculer volume d\'un dôme, formule calotte sphérique, volume bol sphérique, volume zone sphérique',
    shortTagline: 'Calculez le volume d\'air sous un dôme architectural, de bols sphériques et de segments.',
    howToCalculate: [
      'Mesurez le rayon r de la base circulaire plane et la hauteur verticale h de la calotte.',
      'Appliquez la formule : V = (π × h / 6) × (3r² + h²).',
      'Si le rayon R de la sphère entière est connu, utilisez V = (π × h² / 3) × (3R - h).',
    ],
    formulaHtml: 'V = (π · h / 6) · (3r² + h²)',
    formulaNote: 'Où r est le rayon de base et h la hauteur de la calotte.',
    practicalExamples: [
      {
        title: 'Coupoles et dômes architecturaux',
        desc: 'Calcul du volume d\'air chauffé sous les verrières bombées et coupoles d\'édifices.',
      },
      {
        title: 'Bols et bassins hémisphériques',
        desc: 'Mesure du volume d\'eau partiel contenu dans des récipients courbes.',
      },
      {
        title: 'Lentilles optiques et hublots',
        desc: 'Évaluation du volume de matière pour lentilles épaisses et dômes sous-marins.',
      },
    ],
    faqs: [
      {
        question: 'Quelle est la formule du volume d\'une calotte sphérique ?',
        answer: 'Avec le rayon de base r et la hauteur h : V = (π · h / 6) · (3r² + h²). Avec le rayon de sphère R : V = (π · h² / 3) · (3R - h).',
      },
      {
        question: 'Comment calculer le volume d\'air sous un dôme architectural ?',
        answer: 'Mesurez le rayon au sol r et la hauteur au sommet h, puis appliquez la formule de la calotte : V = (π · h / 6) · (3r² + h²).',
      },
      {
        question: 'Quelle est la différence entre hémisphère et calotte sphérique ?',
        answer: 'L\'hémisphère est une calotte particulière où h = r. Tout autre rapport de hauteur correspond à une calotte sphérique générale.',
      },
    ],
    relatedFrenchSlugs: [
      'calculateur-volume-sphere',
      'calculateur-volume-ellipsoide',
      'calculateur-volume-tronc-de-cone',
      'calculateur-volume-cylindre',
    ],
    inputLabels: {
      baseRadius: 'Rayon de la base (r)',
      capHeight: 'Hauteur de la calotte (h)',
    },
  },

  'calculateur-volume-tronc-de-cone': {
    slug: 'calculateur-volume-tronc-de-cone',
    englishSlug: 'conical-frustum-volume-calculator',
    spanishSlug: 'calculadora-volumen-tronco-de-cono',
    germanSlug: 'kegelstumpf-volumen-rechner',
    shapeId: 'conical_frustum',
    shapeName: 'Tronc de cône',
    categoryLabel: 'Corps ronds',
    title: 'Calculateur Tronc de Cône',
    h1: 'Calculer le volume d\'un tronc de cône',
    metaDescription: 'Calculez le volume d\'un tronc de cône à partir des deux rayons et de la hauteur. Idéal pour évaluer la capacité d\'un seau, pot de fleur ou gobelet.',
    keywords: 'calculateur volume tronc de cône, calculer volume d\'un seau, volume pot de fleur conique, formule tronc de cône, capacité gobelet conique en litres',
    shortTagline: 'Calculez la contenance exacte de seaux, pots horticoles, bassines et gobelets coniques.',
    howToCalculate: [
      'Mesurez les deux rayons supérieur r1 et inférieur r2 ainsi que la hauteur verticale h.',
      'Additionnez les carrés des deux rayons et leur produit : r1² + r1 × r2 + r2².',
      'Multipliez la somme par Pi et un tiers de la hauteur : V = (π × h / 3) × (r1² + r1 × r2 + r2²).',
    ],
    formulaHtml: 'V = ⅓ · π · h · (r₁² + r₁r₂ + r₂²)',
    formulaNote: 'Avec les diamètres : V = (π · h / 12) · (d₁² + d₁d₂ + d₂²).',
    practicalExamples: [
      {
        title: 'Seaux de maçon et de ménage',
        desc: 'Un seau de 14 cm de rayon supérieur, 10 cm au fond et 28 cm de haut contient environ 12,8 litres.',
      },
      {
        title: 'Pots de fleurs horticoles',
        desc: 'Calcul de la quantité de terreau nécessaire pour rempoter des végétaux dans des contenants évasés.',
      },
      {
        title: 'Gobelets de fontaine à eau',
        desc: 'Contrôle de la contenance utile en centilitres de gobelets coniques jetables.',
      },
    ],
    faqs: [
      {
        question: 'Quelle est la formule du volume d\'un tronc de cône ?',
        answer: 'La formule est V = (π · h / 3) · (r₁² + r₁ · r₂ + r₂²), où r₁ et r₂ sont les rayons supérieur et inférieur et h la hauteur.',
      },
      {
        question: 'Comment calculer la contenance en litres d\'un seau ?',
        answer: 'Entrez les rayons et la hauteur en centimètres, calculez le volume en cm³ et divisez le total par 1 000.',
      },
      {
        question: 'Peut-on calculer le volume avec les diamètres ?',
        answer: 'Oui, avec la relation directe V = (π · h / 12) · (d₁² + d₁ · d₂ + d₂²).',
      },
    ],
    relatedFrenchSlugs: [
      'calculateur-volume-cone',
      'calculateur-volume-cylindre',
      'calculateur-volume-calotte-spherique',
      'calculateur-volume-prisme-trapezoidal',
    ],
    inputLabels: {
      topRadius: 'Rayon supérieur (r₁)',
      bottomRadius: 'Rayon inférieur (r₂)',
      height: 'Hauteur verticale (h)',
    },
  },

  'calculateur-volume-ellipsoide': {
    slug: 'calculateur-volume-ellipsoide',
    englishSlug: 'ellipsoid-volume-calculator',
    spanishSlug: 'calculadora-volumen-elipsoide',
    germanSlug: 'ellipsoid-volumen-rechner',
    shapeId: 'ellipsoid',
    shapeName: 'Ellipsoïde',
    categoryLabel: 'Corps ronds',
    title: 'Calculateur Volume Ellipsoïde',
    h1: 'Calculer le volume d\'un ellipsoïde',
    metaDescription: 'Calculez le volume d\'un ellipsoïde triaxial ou sphéroïde à partir de ses trois demi-axes. Adapté pour ballons de rugby, pastèques et réservoirs ovoïdes.',
    keywords: 'calculateur volume ellipsoïde, calculer volume ellipsoïde, formule volume ellipsoïde, volume ballon de rugby, volume sphéroïde aplati',
    shortTagline: 'Calculez le volume d\'ellipsoïdes triaxiaux, sphéroïdes allongés et formes ovoïdes.',
    howToCalculate: [
      'Mesurez les diamètres totaux de l\'objet selon ses trois axes perpendiculaires x, y et z.',
      'Divisez chaque diamètre par 2 pour obtenir les trois demi-axes a, b et c.',
      'Multipliez les trois demi-axes entre eux, puis par quatre tiers et par Pi : V = ⁴⁄₃ × π × a × b × c.',
    ],
    formulaHtml: 'V = ⁴⁄₃ · π · a · b · c',
    formulaNote: 'Où a, b et c sont les trois demi-axes orthogonaux.',
    practicalExamples: [
      {
        title: 'Ballons de rugby',
        desc: 'Calcul du volume d\'air intérieur d\'un ballon de rugby officiel d\'après ses dimensions axiales.',
      },
      {
        title: 'Fruits et melons ovales',
        desc: 'Estimation de masse et de cubage pour récoltes maraîchères de forme ellipsoïdale.',
      },
      {
        title: 'Géodésie et planètes',
        desc: 'Modélisation du volume de planètes aplaties aux pôles sous forme de sphéroïdes.',
      },
    ],
    faqs: [
      {
        question: 'Quelle est la formule du volume d\'un ellipsoïde ?',
        answer: 'La formule est V = ⁴⁄₃ · π · a · b · c, où a, b et c sont les trois demi-axes correspondant aux axes x, y et z.',
      },
      {
        question: 'Quelle est la différence entre un ellipsoïde et une sphère ?',
        answer: 'La sphère possède trois rayons égaux (a = b = c), alors que l\'ellipsoïde triaxial présente trois rayons différents.',
      },
      {
        question: 'Comment calculer les demi-axes sur un objet ovale ?',
        answer: 'Mesurez la longueur, largeur et hauteur totales de l\'objet, puis divisez chacune de ces trois cotes par deux.',
      },
    ],
    relatedFrenchSlugs: [
      'calculateur-volume-sphere',
      'calculateur-volume-calotte-spherique',
      'calculateur-volume-tore',
      'calculateur-volume-capsule',
    ],
    inputLabels: {
      axisA: 'Premier demi-axe (a)',
      axisB: 'Deuxième demi-axe (b)',
      axisC: 'Troisième demi-axe (c)',
    },
  },

  'calculateur-volume-pyramide-carree': {
    slug: 'calculateur-volume-pyramide-carree',
    englishSlug: 'square-pyramid-volume-calculator',
    spanishSlug: 'calculadora-volumen-piramide-cuadrada',
    germanSlug: 'quadratische-pyramide-volumen-rechner',
    shapeId: 'square_pyramid',
    shapeName: 'Pyramide à base carrée',
    categoryLabel: 'Prismes et pyramides',
    title: 'Calculateur Pyramide Carrée',
    h1: 'Calculer le volume d\'une pyramide carrée',
    metaDescription: 'Calculez le volume d\'une pyramide régulière à base carrée à partir du côté et de la hauteur. Étapes de calcul détaillées en mètres cubes.',
    keywords: 'calculateur volume pyramide carrée, calculer volume pyramide base carrée, formule volume pyramide, volume toit pyramidal, capacité pyramide régulière',
    shortTagline: 'Calculez le volume de pyramides régulières, toitures pyramidales et monuments.',
    howToCalculate: [
      'Mesurez la longueur du côté a de la base carrée et la hauteur perpendiculaire h jusqu\'au sommet.',
      'Calculez l\'aire de la base en élevant a au carré : A = a².',
      'Multipliez cette aire par la hauteur et divisez par trois : V = ⅓ × a² × h.',
    ],
    formulaHtml: 'V = ⅓ · a² · h',
    formulaNote: 'Avec l\'apothème latérale s : h = √(s² - (a/2)²).',
    practicalExamples: [
      {
        title: 'Toitures pyramidales de pavillons',
        desc: 'Calcul de l\'espace sous toiture à quatre pans égaux pour prévoir l\'isolation thermique.',
      },
      {
        title: 'Monuments historiques',
        desc: 'Évaluation du cubage de pierre de taille dans les pyramides régulières d\'Égypte.',
      },
      {
        title: 'Chapeaux de piliers',
        desc: 'Volume de mortier pour couler des couvertines pyramidales de piliers de clôture.',
      },
    ],
    faqs: [
      {
        question: 'Quelle est la formule du volume d\'une pyramide à base carrée ?',
        answer: 'La formule est V = ⅓ · a² · h, où a est le côté de la base carrée et h la hauteur verticale perpendiculaire.',
      },
      {
        question: 'Comment trouver la hauteur avec l\'apothème latérale (s) ?',
        answer: 'Avec le théorème de Pythagore : h = √(s² - (a/2)²). Remplacez ensuite h dans V = ⅓ · a² · h.',
      },
      {
        question: 'Pourquoi le coefficient est-il de ⅓ ?',
        answer: 'Car trois pyramides identiques de même base et même hauteur remplissent exactement le volume d\'un prisme correspondant.',
      },
    ],
    relatedFrenchSlugs: [
      'calculateur-volume-pyramide-rectangulaire',
      'calculateur-volume-cone',
      'calculateur-volume-cube',
      'calculateur-volume-prisme-triangulaire',
    ],
    inputLabels: {
      baseEdge: 'Côté de la base (a)',
      height: 'Hauteur verticale (h)',
    },
  },

  'calculateur-volume-pyramide-rectangulaire': {
    slug: 'calculateur-volume-pyramide-rectangulaire',
    englishSlug: 'rectangular-pyramid-volume-calculator',
    spanishSlug: 'calculadora-volumen-piramide-rectangular',
    germanSlug: 'rechteckige-pyramide-volumen-rechner',
    shapeId: 'rectangular_pyramid',
    shapeName: 'Pyramide rectangulaire',
    categoryLabel: 'Prismes et pyramides',
    title: 'Calculateur Pyramide Rectangle',
    h1: 'Calculer le volume d\'une pyramide rectangulaire',
    metaDescription: 'Calculez le volume d\'une pyramide à base rectangulaire à partir de la longueur, largeur et hauteur. Idéal pour combles et toitures à 4 pans.',
    keywords: 'calculateur volume pyramide rectangulaire, volume pyramide base rectangle formule, calculer volume pyramide rectangle, volume comble toit 4 pans, cubage pyramide rectangulaire',
    shortTagline: 'Calculez le volume de combles de toits à quatre pans et de trémies rectangulaires.',
    howToCalculate: [
      'Mesurez la longueur L et la largeur l du rectangle formant la base.',
      'Relevez la hauteur perpendiculaire h depuis le centre de la base jusqu\'au sommet.',
      'Multipliez les trois grandeurs et divisez le total par trois : V = ⅓ × L × l × h.',
    ],
    formulaHtml: 'V = ⅓ · L · l · h',
    formulaNote: 'Où L est la longueur, l la largeur de base et h la hauteur perpendiculaire.',
    practicalExamples: [
      {
        title: 'Combles de toits à quatre pans',
        desc: 'Calcul du volume d\'air des combles pour dimensionner les appareils de ventilation VMC.',
      },
      {
        title: 'Chapiteaux rectangulaires',
        desc: 'Cubage intérieur de tentes d\'événements dotées d\'un toit pyramidal rectangulaire.',
      },
      {
        title: 'Trémies de déchargement',
        desc: 'Contenance d\'entonnoirs industriels rectangulaires convergents dans les usines.',
      },
    ],
    faqs: [
      {
        question: 'Quelle est la formule du volume d\'une pyramide rectangulaire ?',
        answer: 'La formule est V = ⅓ · L · l · h (longueur × largeur × hauteur / 3).',
      },
      {
        question: 'Quelles dimensions mesurer pour évaluer un comble pyramidal ?',
        answer: 'Mesurez la longueur du plancher L, la largeur du plancher l et la hauteur sous faîtage au faîte h.',
      },
      {
        question: 'Dans quelles unités exprime-t-on le résultat ?',
        answer: 'Le résultat s\'exprime en unités cubiques : mètres cubes (m³), litres ou centimètres cubes (cm³).',
      },
    ],
    relatedFrenchSlugs: [
      'calculateur-volume-pyramide-carree',
      'calculateur-volume-pave-droit',
      'calculateur-volume-prisme-triangulaire',
      'calculateur-volume-prisme-trapezoidal',
    ],
    inputLabels: {
      baseLength: 'Longueur de la base (L)',
      baseWidth: 'Largeur de la base (l)',
      height: 'Hauteur verticale (h)',
    },
  },

  'calculateur-volume-prisme-triangulaire': {
    slug: 'calculateur-volume-prisme-triangulaire',
    englishSlug: 'triangular-prism-volume-calculator',
    spanishSlug: 'calculadora-volumen-prisma-triangular',
    germanSlug: 'dreiecksprisma-volumen-rechner',
    shapeId: 'triangular_prism',
    shapeName: 'Prisme triangulaire',
    categoryLabel: 'Prismes et pyramides',
    title: 'Calculateur Prisme Triangle',
    h1: 'Calculer le volume d\'un prisme triangulaire',
    metaDescription: 'Calculez le volume d\'un prisme droit à base triangulaire. Formule pour toitures à deux pentes, tentes canadiennes et cales biseautées.',
    keywords: 'calculateur volume prisme triangulaire, calculer volume prisme triangle, formule prisme triangulaire, volume toit double pente, volume tente canadienne',
    shortTagline: 'Calculez le cubage de toits à deux pans, tentes canadiennes, rampes et cales triangulaires.',
    howToCalculate: [
      'Relevez la base b et la hauteur h du triangle frontal.',
      'Calculez l\'aire du triangle : A = ½ × b × h.',
      'Multipliez cette aire par la longueur L du prisme : V = ½ × b × h × L.',
    ],
    formulaHtml: 'V = ½ · b · h_Δ · L',
    formulaNote: 'Pour un triangle équilatéral de côté c : V = (√3 / 4) · c² · L.',
    practicalExamples: [
      {
        title: 'Toitures à double pente',
        desc: 'Calcul du volume utile des combles traditionnels sous deux versants de charpente.',
      },
      {
        title: 'Tentes de camping canadiennes',
        desc: 'Volume d\'habitabilité d\'une tente canadienne à armature triangulaire classique.',
      },
      {
        title: 'Rampes d\'accès en béton',
        desc: 'Évaluation du volume de coulage pour des cales et seuils biseautés en génie civil.',
      },
    ],
    faqs: [
      {
        question: 'Quelle est la formule du volume d\'un prisme triangulaire ?',
        answer: 'La formule est V = ½ · b · h_Δ · L (base du triangle × hauteur du triangle / 2 × longueur du prisme).',
      },
      {
        question: 'Quelle est la formule pour un prisme à base triangle équilatéral ?',
        answer: 'Avec un triangle équilatéral de côté c, le volume est V = (√3 / 4) · c² · L.',
      },
      {
        question: 'Comment calculer le volume d\'une tente à deux pentes ?',
        answer: 'Multipliez la largeur au sol par la hauteur centrale divisée par deux, puis multipliez par la longueur de la tente.',
      },
    ],
    relatedFrenchSlugs: [
      'calculateur-volume-pave-droit',
      'calculateur-volume-prisme-trapezoidal',
      'calculateur-volume-pyramide-rectangulaire',
      'calculateur-volume-cube',
    ],
    inputLabels: {
      baseEdge: 'Base du triangle (b)',
      triangleHeight: 'Hauteur du triangle (h)',
      length: 'Longueur du prisme (L)',
    },
  },

  'calculateur-volume-tube': {
    slug: 'calculateur-volume-tube',
    englishSlug: 'pipe-volume-calculator',
    spanishSlug: 'calculadora-volumen-tubo',
    germanSlug: 'rohr-volumen-rechner',
    shapeId: 'hollow_cylinder',
    shapeName: 'Tube cylindrique',
    categoryLabel: 'Cuves et tuyaux',
    title: 'Calculateur Volume Tube',
    h1: 'Calculer le volume d\'un tube ou tuyau',
    metaDescription: 'Calculez le volume d\'eau circulant dans un tuyau et le volume de matière de sa paroi à partir des rayons interne et externe et de la longueur.',
    keywords: 'calculateur volume tube, calculer volume cylindre creux, capacité en eau d\'un tuyau, volume matière paroi tube, contenance tuyauterie en litres',
    shortTagline: 'Calculez la contenance de tuyauteries industrielles, canalisations et cylindres creux.',
    howToCalculate: [
      'Mesurez le rayon intérieur ri, le rayon extérieur Re et la longueur L de la conduite.',
      'Pour le liquide transporté, appliquez la formule cylindrique simple : V_eau = π × ri² × L.',
      'Pour le matériau formant la paroi, calculez la différence : V_paroi = π × (Re² - ri²) × L.',
    ],
    formulaHtml: 'V_liquide = π · r_i² · L',
    formulaNote: 'Matière de la paroi : V_paroi = π · (R_e² - r_i²) · L.',
    practicalExamples: [
      {
        title: 'Circuits de chauffage central',
        desc: 'Calcul du volume d\'eau de boucle pour choisir le vase d\'expansion et le dosage antigel.',
      },
      {
        title: 'Canalisations d\'assainissement',
        desc: 'Détermination du volume de rétention d\'eaux pluviales d\'un collecteur tubulaire en béton.',
      },
      {
        title: 'Tubes d\'acier de charpente',
        desc: 'Calcul de la masse d\'acier des profilés tubulaires à partir du volume de paroi.',
      },
    ],
    faqs: [
      {
        question: 'Comment calculer le volume de liquide circulant dans un tuyau ?',
        answer: 'Utilisez le rayon intérieur (r_i) et la longueur L avec la formule V = π · r_i² · L.',
      },
      {
        question: 'Quelle est la formule pour le volume de matière de la paroi ?',
        answer: 'La formule est V = π · (R_e² - r_i²) · L, où R_e est le rayon externe et r_i le rayon interne.',
      },
      {
        question: 'Combien de litres d\'eau contient un tuyau de 10 m en diamètre intérieur 50 mm ?',
        answer: 'Avec r_i = 2,5 cm et L = 1 000 cm, il contient V = π × 2,5² × 1 000 ≈ 19 635 cm³, soit environ 19,6 litres.',
      },
    ],
    relatedFrenchSlugs: [
      'calculateur-volume-cylindre',
      'calculateur-volume-cuve-horizontale',
      'calculateur-volume-tore',
      'calculateur-volume-capsule',
    ],
    inputLabels: {
      outerRadius: 'Rayon externe (Re)',
      innerRadius: 'Rayon interne (ri)',
      height: 'Longueur / Hauteur (L)',
    },
  },

  'calculateur-volume-tore': {
    slug: 'calculateur-volume-tore',
    englishSlug: 'torus-volume-calculator',
    spanishSlug: 'calculadora-volumen-toroide',
    germanSlug: 'torus-volumen-rechner',
    shapeId: 'torus',
    shapeName: 'Tore',
    categoryLabel: 'Corps ronds',
    title: 'Calculateur Volume Tore',
    h1: 'Calculer le volume d\'un tore',
    metaDescription: 'Calculez le volume d\'un tore ou joint torique à partir du grand rayon et du petit rayon. Formule pas à pas pour anneaux, donuts et bouées.',
    keywords: 'calculateur volume tore, calculer volume joint torique, formule volume d\'un tore, volume d\'un donut géométrie, capacité chambre à air tore',
    shortTagline: 'Calculez le volume et la surface extérieure de tores, joints toriques, donuts et anneaux.',
    howToCalculate: [
      'Mesurez le grand rayon R (du centre du trou jusqu\'au centre du tube) et le rayon du tube r.',
      'Appliquez la formule du tore circulaire : V = 2 × π² × R × r².',
      'Pour un joint torique, calculez r = tore / 2 et R = (diamètre intérieur + tore) / 2.',
    ],
    formulaHtml: 'V = 2π² · R · r²',
    formulaNote: 'L\'aire de la surface externe d\'un tore est A = 4π² · R · r.',
    practicalExamples: [
      {
        title: 'Joints toriques d\'étanchéité',
        desc: 'Calcul de la quantité de matière élastomère pour mouler des joints d\'étanchéité mécanique.',
      },
      {
        title: 'Bouées circulaires et pneus',
        desc: 'Détermination du volume d\'air comprimé présent dans une chambre à air torique.',
      },
      {
        title: 'Noyaux magnétiques toriques',
        desc: 'Calcul du volume de ferrite pour transformateurs toriques en électronique de puissance.',
      },
    ],
    faqs: [
      {
        question: 'Quelle est la formule du volume d\'un tore ?',
        answer: 'La formule est V = 2 · π² · R · r², où R est le grand rayon au centre du tube et r le rayon de section du tube.',
      },
      {
        question: 'Comment calculer le volume d\'un joint torique à partir du diamètre intérieur (di) et du tore (t) ?',
        answer: 'Posez r = t / 2 et R = (di + t) / 2, puis appliquez la formule V = 2 · π² · R · r².',
      },
      {
        question: 'Quelle est l\'aire de la surface externe d\'un tore ?',
        answer: 'L\'aire de surface d\'un tore se calcule avec la formule A = 4 · π² · R · r.',
      },
    ],
    relatedFrenchSlugs: [
      'calculateur-volume-sphere',
      'calculateur-volume-tube',
      'calculateur-volume-ellipsoide',
      'calculateur-volume-cylindre',
    ],
    inputLabels: {
      majorRadius: 'Grand rayon (R)',
      minorRadius: 'Rayon du tube (r)',
    },
  },

  'calculateur-volume-prisme-trapezoidal': {
    slug: 'calculateur-volume-prisme-trapezoidal',
    englishSlug: 'trapezoidal-prism-volume-calculator',
    spanishSlug: 'calculadora-volumen-prisma-trapezoidal',
    germanSlug: 'trapezprisma-volumen-rechner',
    shapeId: 'trapezoidal_prism',
    shapeName: 'Prisme trapézoïdal',
    categoryLabel: 'Prismes et pyramides',
    title: 'Calculateur Prisme Trapèze',
    h1: 'Calculer le volume d\'un prisme trapézoïdal',
    metaDescription: 'Calculez le volume d\'un prisme trapézoïdal ou d\'une tranchée avec talus. Idéal pour le cubage de terrassement, canaux d\'irrigation et abreuvoirs.',
    keywords: 'calculateur volume prisme trapézoïdal, calculer volume d\'une tranchée, volume canal d\'irrigation, cubage terrassement tranchée, capacité abreuvoir trapézoïdal litres',
    shortTagline: 'Calculez le volume de tranchées avec talus, canaux d\'irrigation, digues et abreuvoirs.',
    howToCalculate: [
      'Mesurez la largeur haute a, la largeur basse b, la profondeur h et la longueur L de la tranchée.',
      'Calculez la largeur moyenne de la section : (a + b) / 2.',
      'Multipliez par la profondeur et la longueur : V = ((a + b) / 2) × h × L.',
    ],
    formulaHtml: 'V = ½ · (a + b) · h · L',
    formulaNote: 'Où a est la largeur haute, b la largeur basse, h la profondeur et L la longueur.',
    practicalExamples: [
      {
        title: 'Tranchées de terrassement',
        desc: 'Cubage de terre meuble à évacuer pour poser des canalisations en respectant l\'angle de talus.',
      },
      {
        title: 'Canaux d\'irrigation',
        desc: 'Calcul de la capacité hydraulique de canaux en terre ou bétonnés à section trapézoïdale.',
      },
      {
        title: 'Abreuvoirs agricoles',
        desc: 'Mesure de la réserve d\'eau disponible en litres dans des auges à parois évasées.',
      },
    ],
    faqs: [
      {
        question: 'Quelle est la formule du volume d\'un prisme trapézoïdal ?',
        answer: 'La formule est V = ((a + b) / 2) · h · L, où a est la largeur haute, b la largeur basse, h la profondeur et L la longueur.',
      },
      {
        question: 'Comment calculer le volume de terre à décaisser pour une tranchée en m³ ?',
        answer: 'Relevez les cotes en mètres et appliquez directement la formule V = ((a + b) / 2) · h · L pour obtenir les mètres cubes de déblai.',
      },
      {
        question: 'Comment convertir la contenance d\'un abreuvoir en litres ?',
        answer: 'Calculez le volume en centimètres cubes et divisez par 1 000 pour obtenir la contenance exacte en litres d\'eau.',
      },
    ],
    relatedFrenchSlugs: [
      'calculateur-volume-pave-droit',
      'calculateur-volume-prisme-triangulaire',
      'calculateur-volume-pyramide-rectangulaire',
      'calculateur-volume-tube',
    ],
    inputLabels: {
      topWidth: 'Largeur haute (a)',
      bottomWidth: 'Largeur basse (b)',
      height: 'Profondeur / Hauteur (h)',
      length: 'Longueur (L)',
    },
  },

  'calculateur-volume-cuve-horizontale': {
    slug: 'calculateur-volume-cuve-horizontale',
    englishSlug: 'horizontal-tank-volume-calculator',
    spanishSlug: 'calculadora-volumen-tanque-cilindrico-horizontal',
    germanSlug: 'liegender-zylindertank-volumen-rechner',
    shapeId: 'horizontal_tank_fill',
    shapeName: 'Cuve cylindrique horizontale',
    categoryLabel: 'Cuves et tuyaux',
    title: 'Calculateur Cuve Horizontale',
    h1: 'Calculer le volume d\'une cuve horizontale',
    metaDescription: 'Calculez le volume de liquide restant dans une cuve cylindrique horizontale selon la hauteur à la jauge. Barème précis pour fioul et carburant.',
    keywords: 'calculateur cuve cylindrique horizontale, calculer litres cuve fioul jauge, barème jauge cuve horizontale, volume liquide cylindre horizontal, niveau cuve fioul en litres',
    shortTagline: 'Calculez le volume partiel d\'une cuve cylindrique couchée à partir de la hauteur de jaugeage.',
    howToCalculate: [
      'Mesurez le rayon intérieur r de la cuve, sa longueur L et la hauteur de liquide h avec une règle graduée.',
      'Calculez l\'aire du segment circulaire avec la fonction arc cosinus exprimée en radians.',
      'Multipliez l\'aire de la section immergée par la longueur de cuve pour obtenir les litres de fioul.',
    ],
    formulaHtml: 'V = [r² · arccos((r - h) / r) - (r - h) · √(2rh - h²)] · L',
    formulaNote: 'Où h est la hauteur de liquide mesurée à la jauge et l\'arc cosinus s\'évalue en radians.',
    practicalExamples: [
      {
        title: 'Cuves de fioul domestique',
        desc: 'Lecture des centimètres de jauge pour estimer précisément le stock de fioul restant avant commande.',
      },
      {
        title: 'Citernes d\'hydrocarbures',
        desc: 'Établissement du barème de jaugeage pour citernes routières et dépôts de carburant diesel.',
      },
      {
        title: 'Tanks à lait réfrigérés',
        desc: 'Contrôle du volume de collecte laitière dans des cuves inox cylindriques horizontales.',
      },
    ],
    faqs: [
      {
        question: 'Comment calculer le volume résiduel dans une cuve cylindrique horizontale ?',
        answer: 'Avec la formule de segment circulaire V = [r² · arccos((r - h) / r) - (r - h) · √(2rh - h²)] · L, où l\'arc cosinus s\'exprime en radians.',
      },
      {
        question: 'Pourquoi la hauteur à la jauge n\'est-elle pas proportionnelle au volume ?',
        answer: 'Parce que la section circulaire est plus large au milieu et plus étroite au sommet et au fond. À 25 % de hauteur, la cuve contient moins de 25 % du volume total.',
      },
      {
        question: 'Comment convertir les centimètres de jauge en litres de fioul ?',
        answer: 'Entrez les cotes en centimètres dans la formule horizontale, puis divisez le volume calculé en cm³ par 1 000 pour avoir les litres.',
      },
    ],
    relatedFrenchSlugs: [
      'calculateur-volume-cylindre',
      'calculateur-volume-capsule',
      'calculateur-volume-tube',
      'calculateur-volume-prisme-trapezoidal',
    ],
    inputLabels: {
      radius: 'Rayon interne de la cuve (r)',
      length: 'Longueur de la cuve (L)',
      fillDepth: 'Hauteur de liquide à la jauge (h)',
    },
  },
};
