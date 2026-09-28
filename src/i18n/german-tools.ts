export interface GermanFaq {
  question: string;
  answer: string;
}

export interface GermanPracticalExample {
  title: string;
  desc: string;
}

export interface GermanToolDetail {
  slug: string;
  englishSlug: string;
  spanishSlug: string;
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
  practicalExamples: GermanPracticalExample[];
  faqs: GermanFaq[];
  relatedGermanSlugs: string[];
  inputLabels: Record<string, string>;
}

export const GERMAN_TOOLS: Record<string, GermanToolDetail> = {
  'wuerfel-volumen-rechner': {
    slug: 'wuerfel-volumen-rechner',
    englishSlug: 'cube-volume-calculator',
    spanishSlug: 'calculadora-volumen-cubo',
    shapeId: 'cube',
    shapeName: 'Würfel',
    categoryLabel: '3D-Geometrie',
    title: 'Würfel Volumen Rechner',
    h1: 'Würfel-Volumen berechnen',
    metaDescription: 'Berechne das Volumen eines Würfels aus der Kantenlänge oder Oberfläche. Sofortige Umrechnung in Liter, Kubikmeter und Milliliter mit Formel.',
    keywords: 'Würfel Volumen Rechner, Volumen Würfel berechnen, Würfel Volumen Formel, Rauminhalt Würfel berechnen, Würfel Volumen in Liter, Kantenlänge zu Volumen Würfel',
    shortTagline: 'Berechne das Volumen und Fassungsvermögen von würfelförmigen Behältern und Körpern aus der Kantenlänge.',
    howToCalculate: [
      'Miss die Kantenlänge a des Würfels. Bei einem Würfel sind Länge, Breite und Höhe identisch.',
      'Multipliziere die Kantenlänge dreimal mit sich selbst: V = a × a × a = a³.',
      'Wandle das Ergebnis in die gewünschte Einheit wie Liter oder Kubikmeter um.',
    ],
    formulaHtml: 'V = a³',
    formulaNote: 'Dabei ist a die Kantenlänge des Würfels. Die Gesamtoberfläche beträgt O = 6a².',
    practicalExamples: [
      {
        title: 'Würfelförmige Lagerboxen',
        desc: 'Eine Box mit 50 cm Kantenlänge hat ein Volumen von 50 × 50 × 50 = 125.000 cm³, was exakt 125 Litern entspricht.',
      },
      {
        title: 'Betonfundamente',
        desc: 'Ermittlung des Volumens kubischer Punktfundamente für Bauwerke in Kubikmetern.',
      },
      {
        title: 'Aquarien',
        desc: 'Ein Nano-Cube mit 30 cm Kantenlänge hat einen Rauminhalt von 27 Litern Wasser.',
      },
    ],
    faqs: [
      {
        question: 'Wie berechnet man das Volumen eines Würfels anhand der Kantenlänge?',
        answer: 'Das Volumen eines Würfels wird berechnet, indem man die Kantenlänge a mit sich selbst dreimal multipliziert: V = a³. Hat ein Würfel beispielsweise 5 cm Kantenlänge, beträgt sein Volumen 5 × 5 × 5 = 125 cm³.',
      },
      {
        question: 'Wie ermittelt man das Volumen über die Oberfläche (O)?',
        answer: 'Berechne die Kantenlänge mit a = √(O / 6) und setze das Zwischenergebnis in V = a³ ein.',
      },
      {
        question: 'Wie viel Liter fasst ein Würfel mit 1 m Kantenlänge?',
        answer: 'Ein Würfel mit 1 m Kantenlänge besitzt ein Volumen von 1 m³, was genau 1.000 Litern entspricht.',
      },
    ],
    relatedGermanSlugs: [
      'quader-volumen-rechner',
      'zylinder-volumen-rechner',
      'kugel-volumen-rechner',
      'quadratische-pyramide-volumen-rechner',
    ],
    inputLabels: {
      side: 'Kantenlänge (a)',
    },
  },

  'quader-volumen-rechner': {
    slug: 'quader-volumen-rechner',
    englishSlug: 'box-volume-calculator',
    spanishSlug: 'calculadora-volumen-prisma-rectangular',
    shapeId: 'rectangular_prism',
    shapeName: 'Quader',
    categoryLabel: 'Prismen und Boxen',
    title: 'Quader Volumen Rechner',
    h1: 'Quader-Volumen berechnen',
    metaDescription: 'Berechne das Volumen eines Quaders oder Kartons aus Länge, Breite und Höhe. Umrechnung in Liter, Kubikmeter und Versandmaße mit Rechenweg.',
    keywords: 'Quader Volumen Rechner, Volumen Quader berechnen, Karton Volumen Rechner, Rauminhalt Quader Formel, Quader Volumen in Liter',
    shortTagline: 'Berechne den Rauminhalt von Quadern, Kisten, Paketen und Räumen aus den drei Kantenlängen.',
    howToCalculate: [
      'Miss die drei Dimensionen des Quaders: Länge l, Breite b und Höhe h in derselben Einheit.',
      'Multipliziere alle drei Kantenlängen miteinander: V = l × b × h.',
      'Rechne das Raummaß in Liter oder Kubikmeter um.',
    ],
    formulaHtml: 'V = l · b · h',
    formulaNote: 'Dabei sind l die Länge, b die Breite und h die Höhe des Quaders.',
    practicalExamples: [
      {
        title: 'Versandkartons',
        desc: 'Ein Paket mit den Maßen 60 cm × 40 cm × 30 cm besitzt ein Volumen von 72.000 cm³ oder 72 Litern.',
      },
      {
        title: 'Raumluftvolumen',
        desc: 'Ein Zimmer mit 5 m Länge, 4 m Breite und 2,5 m Höhe umfasst 50 m³ Luftraum.',
      },
      {
        title: 'Hochbeete',
        desc: 'Berechnung des benötigten Pflanzerde-Volumens für quaderförmige Gartenbeete in Litern.',
      },
    ],
    faqs: [
      {
        question: 'Wie lautet die Formel für das Quader-Volumen?',
        answer: 'Die Formel lautet V = a × b × c (Länge × Breite × Höhe). Alle Maße müssen in derselben Maßeinheit vorliegen.',
      },
      {
        question: 'Wie berechnet man das Versandvolumen eines Kartons in m³?',
        answer: 'Länge, Breite und Höhe in Zentimetern multiplizieren und das Zwischenergebnis durch 1.000.000 teilen.',
      },
      {
        question: 'Wie rechnet man Quader-Volumen in Liter um?',
        answer: 'Das errechnete Volumen in Kubikzentimetern (cm³) durch 1.000 teilen, um den Inhalt in Litern zu erhalten.',
      },
    ],
    relatedGermanSlugs: [
      'wuerfel-volumen-rechner',
      'zylinder-volumen-rechner',
      'trapezprisma-volumen-rechner',
      'dreiecksprisma-volumen-rechner',
    ],
    inputLabels: {
      length: 'Länge (l)',
      width: 'Breite (b)',
      height: 'Höhe (h)',
    },
  },

  'zylinder-volumen-rechner': {
    slug: 'zylinder-volumen-rechner',
    englishSlug: 'cylinder-volume-calculator',
    spanishSlug: 'calculadora-volumen-cilindro',
    shapeId: 'cylinder',
    shapeName: 'Zylinder',
    categoryLabel: 'Runde Körper',
    title: 'Zylinder Volumen Rechner',
    h1: 'Zylinder-Volumen berechnen',
    metaDescription: 'Berechne das Volumen eines Zylinders aus Radius oder Durchmesser und Höhe. Schnelle Umrechnung in Liter und Kubikmeter mit Formelschritten.',
    keywords: 'Zylinder Volumen Rechner, Zylinder Volumen berechnen, Volumen Zylinder Formel, Zylinder Liter Rechner, Zylinder Volumen mit Durchmesser',
    shortTagline: 'Berechne das Volumen von Zylindern, Dosen, Säulen und zylindrischen Tanks.',
    howToCalculate: [
      'Miss den Radius r der kreisförmigen Grundfläche sowie die senkrechte Zylinderhöhe h.',
      'Quadriere den Radius, multipliziere mit der Kreiszahl Pi und der Höhe: V = π × r² × h.',
      'Wandle das Ergebnis bei Bedarf in Liter oder Kubikmeter um.',
    ],
    formulaHtml: 'V = π · r² · h',
    formulaNote: 'Alternativ mit Durchmesser d: V = (π · d² · h) / 4.',
    practicalExamples: [
      {
        title: 'Regentonnen',
        desc: 'Ein Regenfass mit 40 cm Radius und 100 cm Höhe fasst rund 502,6 Liter Wasser.',
      },
      {
        title: 'Vorratsdosen',
        desc: 'Berechnung des Füllvolumens für zylindrische Konserven- und Vorratsbehälter.',
      },
      {
        title: 'Hydraulikzylinder',
        desc: 'Ermittlung des Hubvolumens und der benötigten Hydraulikölmenge in Kubikzentimetern.',
      },
    ],
    faqs: [
      {
        question: 'Wie berechnet man das Volumen eines Zylinders?',
        answer: 'Mit der Formel V = π · r² · h, wobei r der Radius der kreisförmigen Grundfläche und h die Zylinderhöhe ist.',
      },
      {
        question: 'Wie berechnet man das Volumen direkt mit dem Durchmesser (d)?',
        answer: 'Mit der Formel V = (π · d² · h) / 4, oder indem man den Durchmesser zunächst halbiert und V = π · r² · h nutzt.',
      },
      {
        question: 'Wie viele Liter fasst ein runder Wassertank?',
        answer: 'Berechne das Volumen V in Kubikmetern (m³) und multipliziere den Wert mit 1.000 für das Fassungsvermögen in Litern.',
      },
    ],
    relatedGermanSlugs: [
      'kegel-volumen-rechner',
      'kapsel-volumen-rechner',
      'rohr-volumen-rechner',
      'liegender-zylindertank-volumen-rechner',
    ],
    inputLabels: {
      radius: 'Grundkreisradius (r)',
      height: 'Zylinderhöhe (h)',
    },
  },

  'kugel-volumen-rechner': {
    slug: 'kugel-volumen-rechner',
    englishSlug: 'sphere-volume-calculator',
    spanishSlug: 'calculadora-volumen-esfera',
    shapeId: 'sphere',
    shapeName: 'Kugel',
    categoryLabel: 'Runde Körper',
    title: 'Kugel Volumen Rechner',
    h1: 'Kugel-Volumen berechnen',
    metaDescription: 'Berechne das Volumen einer Kugel aus Radius oder Durchmesser. Sofortige Umrechnung in Liter, Kubikzentimeter und Halbkugel-Volumen.',
    keywords: 'Kugel Volumen Rechner, Kugel Volumen berechnen, Volumen Kugel Formel, Kugelvolumen mit Durchmesser, Rauminhalt Kugel',
    shortTagline: 'Berechne den Rauminhalt von Kugeln, Bällen und kugelförmigen Behältern.',
    howToCalculate: [
      'Ermittle den Radius r vom Kugelmittelpunkt bis zur Oberfläche, oder teile den Durchmesser durch 2.',
      'Berechne die dritte Potenz des Radius und multipliziere mit vier Dritteln sowie Pi: V = ⁴⁄₃ × π × r³.',
      'Rechne den Rauminhalt in Kubikmeter, Liter oder Milliliter um.',
    ],
    formulaHtml: 'V = ⁴⁄₃ · π · r³',
    formulaNote: 'Mit Durchmesser d lautet die Formel: V = (π · d³) / 6. Die Kugeloberfläche ist A = 4πr².',
    practicalExamples: [
      {
        title: 'Sportbälle',
        desc: 'Ein Fußball mit einem Radius von 11 cm hat ein Volumen von rund 5.575 cm³.',
      },
      {
        title: 'Kugeltanks',
        desc: 'Berechnung des Speichervolumens industrieller Kugelgasbehälter in Kubikmetern.',
      },
      {
        title: 'Lagerkugeln',
        desc: 'Volumen- und Gewichtsbestimmung von Stahlkugeln für Wälzlager in der Feinmechanik.',
      },
    ],
    faqs: [
      {
        question: 'Wie lautet die Formel für das Kugelvolumen?',
        answer: 'Die Formel lautet V = ⁴⁄₃ · π · r³, wobei r der Kugelradius von der Mitte bis zur Außenfläche ist.',
      },
      {
        question: 'Wie berechnet man das Kugelvolumen mit dem Durchmesser?',
        answer: 'Mit der Formel V = (π · d³) / 6, oder indem man den Durchmesser halbiert und die Radiusformel anwendet.',
      },
      {
        question: 'Wie berechnet man das Volumen einer Halbkugel?',
        answer: 'Berechne das Kugelvolumen und teile es durch zwei: V = ⅔ · π · r³.',
      },
    ],
    relatedGermanSlugs: [
      'ellipsoid-volumen-rechner',
      'kugelsegment-volumen-rechner',
      'kapsel-volumen-rechner',
      'zylinder-volumen-rechner',
    ],
    inputLabels: {
      radius: 'Kugelradius (r)',
    },
  },

  'kegel-volumen-rechner': {
    slug: 'kegel-volumen-rechner',
    englishSlug: 'cone-volume-calculator',
    spanishSlug: 'calculadora-volumen-cono',
    shapeId: 'cone',
    shapeName: 'Kegel',
    categoryLabel: 'Runde Körper',
    title: 'Kegel Volumen Rechner',
    h1: 'Kegel-Volumen berechnen',
    metaDescription: 'Berechne das Volumen eines Kegels aus Radius und Höhe oder Mantellinie. Sofortige Umrechnung in Liter und Kubikmeter mit Formel.',
    keywords: 'Kegel Volumen Rechner, Kegel Volumen berechnen, Volumen Kegel Formel, Kreiskegel Volumen, Kegel Rauminhalt Liter',
    shortTagline: 'Berechne das Fassungsvermögen von Trichtern, Schüttkegeln und geraden Kegelkörpern.',
    howToCalculate: [
      'Miss den Radius r der kreisförmigen Grundfläche und die senkrechte Höhe h.',
      'Berechne den Flächeninhalt der Grundfläche, multipliziere mit der Höhe und teile durch 3: V = ⅓ × π × r² × h.',
      'Liegt nur die Mantellinie s vor, bestimme die Höhe zuvor mit dem Satz des Pythagoras.',
    ],
    formulaHtml: 'V = ⅓ · π · r² · h',
    formulaNote: 'Dabei ist r der Grundkreisradius und h die senkrechte Körperhöhe.',
    practicalExamples: [
      {
        title: 'Schüttgutkegel',
        desc: 'Kies- und Getreidehaufen bilden natürliche Schüttkegel zur schnellen Mengenabschätzung.',
      },
      {
        title: 'Trichter und Hütchen',
        desc: 'Volumenbestimmung konischer Labor- und Einfülltrichter in Litern.',
      },
      {
        title: 'Silospitzen',
        desc: 'Berechnung des Auslaufkonus landwirtschaftlicher und industrieller Futtersilos.',
      },
    ],
    faqs: [
      {
        question: 'Wie lautet die Formel für das Volumen eines Kegels?',
        answer: 'Die Formel lautet V = ⅓ · π · r² · h, wobei r der Radius der Grundfläche und h die senkrechte Höhe ist.',
      },
      {
        question: 'Welches Verhältnis besteht zwischen Kegel und Zylinder?',
        answer: 'Ein Kegel hat exakt ein Drittel (⅓) des Volumens eines Zylinders mit identischer Grundfläche und Höhe.',
      },
      {
        question: 'Wie berechnet man die Höhe über die Mantellinie (s)?',
        answer: 'Über den Satz des Pythagoras: h = √(s² - r²), wobei s die schräge Mantellinie und r der Radius ist.',
      },
    ],
    relatedGermanSlugs: [
      'kegelstumpf-volumen-rechner',
      'zylinder-volumen-rechner',
      'quadratische-pyramide-volumen-rechner',
      'kugel-volumen-rechner',
    ],
    inputLabels: {
      radius: 'Grundkreisradius (r)',
      height: 'Senkrechte Höhe (h)',
    },
  },

  'kapsel-volumen-rechner': {
    slug: 'kapsel-volumen-rechner',
    englishSlug: 'capsule-volume-calculator',
    spanishSlug: 'calculadora-volumen-capsula',
    shapeId: 'capsule',
    shapeName: 'Kapsel',
    categoryLabel: 'Tanques und Rohre',
    title: 'Kapsel Volumen Rechner',
    h1: 'Kapsel-Volumen berechnen',
    metaDescription: 'Berechne das Volumen einer geometrischen Kapsel aus Zylinderteil und Halbkugeln. Geeignet für Tabletten und Flüssiggas-Drucktanks.',
    keywords: 'Kapsel Volumen Rechner, Volumen Kapsel berechnen, Kapsel Formel Volumen, Gastank Kapsel Volumen, Tabletten Kapsel Rauminhalt',
    shortTagline: 'Berechne das Volumen von pharmazeutischen Kapseln und industriellen Bullet-Tanks.',
    howToCalculate: [
      'Ermittle den Radius r der Endkappen und die Länge a des mittleren Zylinderkörpers.',
      'Setze die Werte in die Kapselformel ein: V = π × r² × (⁴⁄₃ × r + a).',
      'Bei gegebener Gesamtlänge L berechnest du die Zylinderlänge zuerst über a = L - 2r.',
    ],
    formulaHtml: 'V = π · r² · (⁴⁄₃r + a)',
    formulaNote: 'Eine Kapsel setzt sich aus einem Zylinder und zwei Halbkugeln (einer Vollkugel) zusammen.',
    practicalExamples: [
      {
        title: 'Flüssiggas-Bullet-Tanks',
        desc: 'Industrielle Gastanks mit gewölbten Halbkugelböden halten hohem Innendruck stand.',
      },
      {
        title: 'Arzneikapseln',
        desc: 'Dosierungsberechnung für Wirkstoffpulver und Flüssigkeiten in Hartgelatinekapseln.',
      },
      {
        title: 'Druckbehälter',
        desc: 'Volumenbestimmung für Druckluftspeicher mit halbkugelförmigen Endkappen.',
      },
    ],
    faqs: [
      {
        question: 'Wie lautet die Volumenformel einer geometrischen Kapsel?',
        answer: 'Die Formel lautet V = π · r² · (⁴⁄₃r + a), wobei a die Länge des zylindrischen Mittelteils und r der Radius ist.',
      },
      {
        question: 'Wie bestimmt man die Zylinderlänge aus der Gesamtlänge (L)?',
        answer: 'Durch die Subtraktion des doppelten Radius von der Gesamtlänge: a = L - 2r.',
      },
      {
        question: 'Wofür wird die Kapselberechnung genutzt?',
        answer: 'Für pharmazeutische Kapseln bei der Pulverdosierung und für industrielle Flüssiggas-Drucktanks (Bullet Tanks).',
      },
    ],
    relatedGermanSlugs: [
      'zylinder-volumen-rechner',
      'kugel-volumen-rechner',
      'liegender-zylindertank-volumen-rechner',
      'rohr-volumen-rechner',
    ],
    inputLabels: {
      radius: 'Kappenradius (r)',
      sideLength: 'Zylinderlänge (a)',
    },
  },

  'kugelsegment-volumen-rechner': {
    slug: 'kugelsegment-volumen-rechner',
    englishSlug: 'spherical-cap-volume-calculator',
    spanishSlug: 'calculadora-volumen-casquete-esferico',
    shapeId: 'spherical_cap',
    shapeName: 'Kugelsegment',
    categoryLabel: 'Runde Körper',
    title: 'Kugelsegment Rechner',
    h1: 'Kugelsegment-Volumen berechnen',
    metaDescription: 'Berechne das Volumen eines Kugelsegments oder einer Kuppel aus Radius und Höhe. Genaue Formel für Schalen, Kuppelbauten und Kugelabschnitte.',
    keywords: 'Kugelsegment Volumen Rechner, Kuppel Volumen berechnen, Kugelkappe Formel, Kugelsegment berechnen, Kuppel Rauminhalt',
    shortTagline: 'Berechne den Rauminhalt von Kuppeln, Gewölben, Schalen und Kappen.',
    howToCalculate: [
      'Miss den Radius r der flachen Grundfläche sowie die Segmenthöhe h.',
      'Wende die Formel für das Kugelsegment an: V = (π × h / 6) × (3r² + h²).',
      'Ist der Kugelradius R bekannt, nutze die Variante V = (π × h² / 3) × (3R - h).',
    ],
    formulaHtml: 'V = (π · h / 6) · (3r² + h²)',
    formulaNote: 'Dabei ist r der Grundkreisradius und h die Scheitelhöhe des Segments.',
    practicalExamples: [
      {
        title: 'Architekturkuppeln',
        desc: 'Berechnung des beheizbaren Luftraums unter Gewölbekuppeln historischer und moderner Bauten.',
      },
      {
        title: 'Halbkugelförmige Schalen',
        desc: 'Inhaltsberechnung runder Schüsseln und Becken mit flachem Flüssigkeitsstand.',
      },
      {
        title: 'Klöpperböden',
        desc: 'Abschätzung des Teilvolumens gewölbter Kesselböden in der Verfahrenstechnik.',
      },
    ],
    faqs: [
      {
        question: 'Wie lautet die Formel für ein Kugelsegment?',
        answer: 'Mit Basishalbmesser r und Höhe h lautet die Formel V = (π · h / 6) · (3r² + h²). Bei Kugelradius R gilt V = (π · h² / 3) · (3R - h).',
      },
      {
        question: 'Wie berechnet man das Luftvolumen einer architektonischen Kuppel?',
        answer: 'Messe den Basisdurchmesser (2r) und die Scheitelhöhe h und wende die Formel V = (π · h / 6) · (3r² + h²) an.',
      },
      {
        question: 'Was unterscheidet eine Halbkugel von einem Kugelsegment?',
        answer: 'Bei einer Halbkugel ist die Höhe exakt gleich dem Radius (h = r). Jedes abweichende Höhenverhältnis bildet ein allgemeines Kugelsegment.',
      },
    ],
    relatedGermanSlugs: [
      'kugel-volumen-rechner',
      'ellipsoid-volumen-rechner',
      'kegelstumpf-volumen-rechner',
      'zylinder-volumen-rechner',
    ],
    inputLabels: {
      baseRadius: 'Grundkreisradius (r)',
      capHeight: 'Segmenthöhe (h)',
    },
  },

  'kegelstumpf-volumen-rechner': {
    slug: 'kegelstumpf-volumen-rechner',
    englishSlug: 'conical-frustum-volume-calculator',
    spanishSlug: 'calculadora-volumen-tronco-de-cono',
    shapeId: 'conical_frustum',
    shapeName: 'Kegelstumpf',
    categoryLabel: 'Runde Körper',
    title: 'Kegelstumpf Volumen Rechner',
    h1: 'Kegelstumpf-Volumen berechnen',
    metaDescription: 'Berechne das Volumen eines Kegelstumpfs aus oberem Radius, unterem Radius und Höhe. Ideal für Eimer, Blumentöpfe und konische Becher.',
    keywords: 'Kegelstumpf Volumen Rechner, Kegelstumpf Volumen berechnen, Eimer Volumen berechnen, Pflanzkübel Volumen Liter, Kegelstumpf Formel',
    shortTagline: 'Berechne das Fassungsvermögen von Eimern, Pflanzkübeln, Wannen und Bechern.',
    howToCalculate: [
      'Miss die beiden Kreisradien r1 und r2 sowie die senkrechte Höhe h.',
      'Berechne die Quadratsumme und das Produkt der Radien: r1² + r1 × r2 + r2².',
      'Multipliziere mit Pi und einem Drittel der Höhe: V = (π × h / 3) × (r1² + r1 × r2 + r2²).',
    ],
    formulaHtml: 'V = ⅓ · π · h · (r₁² + r₁r₂ + r₂²)',
    formulaNote: 'Mit Durchmessern: V = (π · h / 12) · (d₁² + d₁d₂ + d₂²).',
    practicalExamples: [
      {
        title: 'Haushaltseimer',
        desc: 'Ein Eimer mit 14 cm oberem Radius, 10 cm Bodenradius und 28 cm Höhe fasst rund 12,8 Liter.',
      },
      {
        title: 'Pflanzkübel',
        desc: 'Bestimmung des erforderlichen Erdvolumens für konisch zulaufende Blumentöpfe.',
      },
      {
        title: 'Trinkbecher',
        desc: 'Fassungsvermögensbestimmung von Heißgetränkebechern und Einweggläsern.',
      },
    ],
    faqs: [
      {
        question: 'Wie lautet die Volumenformel für einen Kegelstumpf?',
        answer: 'Die Formel lautet V = (π · h / 3) · (r₁² + r₁ · r₂ + r₂²), wobei h die Höhe und r₁ sowie r₂ die beiden Radien sind.',
      },
      {
        question: 'Wie berechnet man das Fassungsvermögen eines runden Eimers in Litern?',
        answer: 'Durchmesser oben und unten sowie die Höhe in Zentimetern messen, Radien bestimmen, Formel anwenden und Kubikzentimeter durch 1.000 teilen.',
      },
      {
        question: 'Kann man die Formel direkt mit Durchmessern nutzen?',
        answer: 'Ja, mit Durchmessern lautet die Formel V = (π · h / 12) · (d₁² + d₁ · d₂ + d₂²).',
      },
    ],
    relatedGermanSlugs: [
      'kegel-volumen-rechner',
      'zylinder-volumen-rechner',
      'kugelsegment-volumen-rechner',
      'trapezprisma-volumen-rechner',
    ],
    inputLabels: {
      topRadius: 'Oberer Radius (r₁)',
      bottomRadius: 'Unterer Radius (r₂)',
      height: 'Senkrechte Höhe (h)',
    },
  },

  'ellipsoid-volumen-rechner': {
    slug: 'ellipsoid-volumen-rechner',
    englishSlug: 'ellipsoid-volume-calculator',
    spanishSlug: 'calculadora-volumen-elipsoide',
    shapeId: 'ellipsoid',
    shapeName: 'Ellipsoid',
    categoryLabel: 'Runde Körper',
    title: 'Ellipsoid Volumen Rechner',
    h1: 'Ellipsoid-Volumen berechnen',
    metaDescription: 'Berechne das Volumen eines dreiachsigen Ellipsoids oder Rotationsellipsoids aus den drei Halbachsen. Ideal für Rugbybälle, Eier und Melonen.',
    keywords: 'Ellipsoid Volumen Rechner, Volumen Ellipsoid berechnen, Ellipsoid Formel, Rotationsellipsoid Volumen, Rugbyball Volumen',
    shortTagline: 'Berechne das Volumen von dreiachsigen Ellipsoiden, Rotationsellipsoiden und ovalen Körpern.',
    howToCalculate: [
      'Miss die Gesamtlängen entlang der drei Hauptachsen x, y und z.',
      'Teile jede Gesamtlänge durch 2, um die Halbachsen a, b und c zu erhalten.',
      'Multipliziere alle drei Halbachsen miteinander sowie mit vier Dritteln und Pi: V = ⁴⁄₃ × π × a × b × c.',
    ],
    formulaHtml: 'V = ⁴⁄₃ · π · a · b · c',
    formulaNote: 'Dabei sind a, b und c die Längen der drei orthogonalen Halbachsen.',
    practicalExamples: [
      {
        title: 'Rugbybälle',
        desc: 'Berechnung des Luftvolumens von Rugby- und Footballbällen anhand der Längs- und Querdurchmesser.',
      },
      {
        title: 'Früchte und Melonen',
        desc: 'Volumen- und Gewichtsschätzung ovaler landwirtschaftlicher Erzeugnisse.',
      },
      {
        title: 'Himmelskörper',
        desc: 'Näherungsweise Rauminhaltsberechnung abgeplatteter Planeten und Asteroiden in der Astronomie.',
      },
    ],
    faqs: [
      {
        question: 'Wie lautet die Volumenformel für ein Ellipsoid?',
        answer: 'Die Formel lautet V = ⁴⁄₃ · π · a · b · c, wobei a, b und c die drei Halbachsen entlang der Achsen x, y und z darstellen.',
      },
      {
        question: 'Was unterscheidet ein Sphäroid von einem Ellipsoid?',
        answer: 'Bei einer Kugel sind alle drei Halbachsen gleich. Bei einem Sphäroid sind zwei Halbachsen gleich (a = b ≠ c), während ein triaxiales Ellipsoid drei unterschiedliche Halbachsen besitzt.',
      },
      {
        question: 'Wie bestimmt man die Halbachsen an einem ovalen Objekt?',
        answer: 'Miss Gesamtlänge, Breite und Höhe des Objekts und teile jeden der drei Werte durch 2.',
      },
    ],
    relatedGermanSlugs: [
      'kugel-volumen-rechner',
      'kugelsegment-volumen-rechner',
      'torus-volumen-rechner',
      'kapsel-volumen-rechner',
    ],
    inputLabels: {
      axisA: 'Erste Halbachse (a)',
      axisB: 'Zweite Halbachse (b)',
      axisC: 'Dritte Halbachse (c)',
    },
  },

  'quadratische-pyramide-volumen-rechner': {
    slug: 'quadratische-pyramide-volumen-rechner',
    englishSlug: 'square-pyramid-volume-calculator',
    spanishSlug: 'calculadora-volumen-piramide-cuadrada',
    shapeId: 'square_pyramid',
    shapeName: 'Quadratische Pyramide',
    categoryLabel: 'Prismen und Pyramiden',
    title: 'Quadratische Pyramide Rechner',
    h1: 'Quadratische Pyramide berechnen',
    metaDescription: 'Berechne das Volumen einer quadratischen Pyramide aus Grundkante und Höhe oder Seitenhöhe. Schrittweise Berechnung in Kubikmeter und Liter.',
    keywords: 'Quadratische Pyramide Volumen Rechner, Pyramide Volumen berechnen, Volumen Pyramide Formel, Pyramidendach Volumen, Rauminhalt Pyramide',
    shortTagline: 'Berechne das Volumen von Pyramiden mit quadratischer Grundfläche und Pyramidendächern.',
    howToCalculate: [
      'Miss die Kantenlänge a der quadratischen Grundfläche und die senkrechte Körperhöhe h.',
      'Quadriere die Grundkante und multipliziere den Wert mit der Höhe.',
      'Teile das Produkt durch 3: V = ⅓ × a² × h.',
    ],
    formulaHtml: 'V = ⅓ · a² · h',
    formulaNote: 'Ist nur die Seitenhöhe hs gegeben, ermittle die Höhe über h = √(hs² - (a/2)²).',
    practicalExamples: [
      {
        title: 'Pyramidendächer',
        desc: 'Dachraumvolumen von Turmhelmen und Pavillons mit vier gleich geneigten Dachflächen.',
      },
      {
        title: 'Historische Monumente',
        desc: 'Volumenbestimmung monumentaler Steinpyramiden in Kubikmetern Baumaterial.',
      },
      {
        title: 'Pfeilerabdeckungen',
        desc: 'Materialberechnung pyramidenförmiger Betonabdeckungen für Tor- und Zaunpfeiler.',
      },
    ],
    faqs: [
      {
        question: 'Wie lautet die Formel für eine quadratische Pyramide?',
        answer: 'Die Formel lautet V = ⅓ · a² · h, wobei a die Seitenlänge der quadratischen Basis und h die senkrechte Höhe ist.',
      },
      {
        question: 'Wie berechnet man die Höhe aus der Seitenhöhe (hs)?',
        answer: 'Mit dem Satz des Pythagoras: h = √(hs² - (a/2)²). Anschließend setzt man h in V = ⅓ · a² · h ein.',
      },
      {
        question: 'Warum beträgt der Faktor ⅓?',
        answer: 'Weil drei Pyramiden gleicher Grundfläche und Höhe exakt das Volumen eines umschreibenden Prismas mit denselben Abmessungen füllen.',
      },
    ],
    relatedGermanSlugs: [
      'rechteckige-pyramide-volumen-rechner',
      'kegel-volumen-rechner',
      'wuerfel-volumen-rechner',
      'dreiecksprisma-volumen-rechner',
    ],
    inputLabels: {
      baseEdge: 'Grundkante (a)',
      height: 'Körperhöhe (h)',
    },
  },

  'rechteckige-pyramide-volumen-rechner': {
    slug: 'rechteckige-pyramide-volumen-rechner',
    englishSlug: 'rectangular-pyramid-volume-calculator',
    spanishSlug: 'calculadora-volumen-piramide-rectangular',
    shapeId: 'rectangular_pyramid',
    shapeName: 'Rechteckige Pyramide',
    categoryLabel: 'Prismen und Pyramiden',
    title: 'Rechteckige Pyramide Rechner',
    h1: 'Rechteckige Pyramide berechnen',
    metaDescription: 'Berechne das Volumen einer Pyramide mit rechteckiger Grundfläche aus Länge, Breite und Höhe. Ideal für Walmdächer und Zelte.',
    keywords: 'Rechteckige Pyramide Volumen Rechner, Volumen rechteckige Pyramide, Pyramide mit rechteckiger Grundfläche, Walmdach Dachraum Volumen, Pyramidenvolumen Formel',
    shortTagline: 'Berechne das Raumvolumen von Pyramiden mit rechteckiger Basis und Walmdachräumen.',
    howToCalculate: [
      'Miss die Länge l und die Breite b der rechteckigen Grundfläche.',
      'Bestimme die senkrechte Höhe h vom Mittelpunkt der Grundfläche bis zur Spitze.',
      'Multipliziere alle drei Werte und teile durch 3: V = ⅓ × l × b × h.',
    ],
    formulaHtml: 'V = ⅓ · l · b · h',
    formulaNote: 'Dabei sind l die Basislänge, b die Basisbreite und h die senkrechte Höhe.',
    practicalExamples: [
      {
        title: 'Walmdächer und Dachgeschosse',
        desc: 'Berechnung des umschlossenen Luftvolumens unter vierseitig geneigten Dachkonstruktionen.',
      },
      {
        title: 'Pyramidenförmige Zelte',
        desc: 'Rauminhalt quadratischer und rechteckiger Schutzdächer im Eventbereich.',
      },
      {
        title: 'Schüttguttrichter',
        desc: 'Volumenbestimmung rechteckig zulaufender Einlauftrichter im Anlagenbau.',
      },
    ],
    faqs: [
      {
        question: 'Wie berechnet man das Volumen einer rechteckigen Pyramide?',
        answer: 'Mit der Formel V = ⅓ · l · b · h, wobei l die Basislänge, b die Basisbreite und h die senkrechte Höhe ist.',
      },
      {
        question: 'Welche Maße werden für die Berechnung benötigt?',
        answer: 'Benötigt werden die Länge und Breite der Grundfläche (l und b) sowie die senkrechte Maximalhöhe (h) bis zum Scheitelpunkt.',
      },
      {
        question: 'Wie berechnet man das Luftvolumen unter einem pyramidischen Zeltdach?',
        answer: 'Bodenlänge, Bodenbreite und Firsthöhe messen und direkt in die Formel V = (l × b × h) / 3 einsetzen.',
      },
    ],
    relatedGermanSlugs: [
      'quadratische-pyramide-volumen-rechner',
      'quader-volumen-rechner',
      'dreiecksprisma-volumen-rechner',
      'trapezprisma-volumen-rechner',
    ],
    inputLabels: {
      baseLength: 'Basislänge (l)',
      baseWidth: 'Basisbreite (b)',
      height: 'Körperhöhe (h)',
    },
  },

  'dreiecksprisma-volumen-rechner': {
    slug: 'dreiecksprisma-volumen-rechner',
    englishSlug: 'triangular-prism-volume-calculator',
    spanishSlug: 'calculadora-volumen-prisma-triangular',
    shapeId: 'triangular_prism',
    shapeName: 'Dreiecksprisma',
    categoryLabel: 'Prismen und Pyramiden',
    title: 'Dreiecksprisma Rechner',
    h1: 'Dreiecksprisma-Volumen berechnen',
    metaDescription: 'Berechne das Volumen eines Dreiecksprismas aus Grundseite, Dreieckshöhe und Prismenlänge. Ideal für Satteldächer, Keile und Zelte.',
    keywords: 'Dreiecksprisma Volumen Rechner, Volumen Dreiecksprisma berechnen, Prisma Dreieck Formel, Satteldach Volumen berechnen, Keil Volumen Rechner',
    shortTagline: 'Berechne den Rauminhalt von Dreiecksprismen, Satteldächern, Rampen und Keilen.',
    howToCalculate: [
      'Bestimme die Grundseite g und die Höhe h des dreieckigen Querschnitts.',
      'Berechne die Grundfläche des Dreiecks: A = ½ × g × h.',
      'Multipliziere diese Fläche mit der Prismenlänge l: V = ½ × g × h × l.',
    ],
    formulaHtml: 'V = ½ · g · h_Δ · l',
    formulaNote: 'Für gleichseitige Dreiecke mit Seite a gilt: V = (√3 / 4) · a² · l.',
    practicalExamples: [
      {
        title: 'Satteldächer',
        desc: 'Rauminhaltsberechnung ungedämmter und ausgebauter Dachräume unter Giebeldächern.',
      },
      {
        title: 'Giebelzelte',
        desc: 'Klassische Zweimannzelte mit dreieckiger Stirnseite zur Luftvolumenbestimmung.',
      },
      {
        title: 'Keile und Auffahrrampen',
        desc: 'Materialmengenbestimmung für dreieckige Rampen und Betonkeile im Straßenbau.',
      },
    ],
    faqs: [
      {
        question: 'Wie lautet die Volumenformel für ein Dreiecksprisma?',
        answer: 'Die Formel lautet V = ½ · g · h_Δ · l, wobei g die Grundseite des Dreiecks, h_Δ die Dreieckshöhe und l die Länge des Prismas ist.',
      },
      {
        question: 'Wie berechnet man ein gleichseitiges Dreiecksprisma?',
        answer: 'Für ein gleichseitiges Dreieck mit Seitenlänge a lautet die Formel V = (√3 / 4) · a² · l.',
      },
      {
        question: 'Wie berechnet man das Raumvolumen eines Giebelzelts (A-Frame)?',
        answer: 'Zeltbreite am Boden mit der Mittelhöhe und der Zeltlänge multiplizieren und durch 2 teilen: V = 0,5 × b × h × l.',
      },
    ],
    relatedGermanSlugs: [
      'quader-volumen-rechner',
      'trapezprisma-volumen-rechner',
      'rechteckige-pyramide-volumen-rechner',
      'wuerfel-volumen-rechner',
    ],
    inputLabels: {
      baseEdge: 'Dreiecksgrundseite (g)',
      triangleHeight: 'Dreieckshöhe (h)',
      length: 'Prismenhöhe / Länge (l)',
    },
  },

  'rohr-volumen-rechner': {
    slug: 'rohr-volumen-rechner',
    englishSlug: 'pipe-volume-calculator',
    spanishSlug: 'calculadora-volumen-tubo',
    shapeId: 'hollow_cylinder',
    shapeName: 'Rohr',
    categoryLabel: 'Tanques und Rohre',
    title: 'Rohr Volumen Rechner',
    h1: 'Rohr-Volumen berechnen',
    metaDescription: 'Berechne den Wasserinhalt und das Wandmaterialvolumen eines Rohrs oder Hohlzylinders aus Innenradius, Außenradius und Länge.',
    keywords: 'Rohr Volumen Rechner, Hohlzylinder Volumen berechnen, Rohr Wasserinhalt berechnen, Rohrwand Volumen Formel, Rohrinhalt in Liter',
    shortTagline: 'Berechne den Wasserinhalt und das Materialvolumen von Rohren, Leitungen und Hohlzylindern.',
    howToCalculate: [
      'Bestimme den Innenradius ri, den Außenradius ra und die Rohrlänge l.',
      'Für das Füllvolumen an Flüssigkeit nutze V = π × ri² × l.',
      'Für das feste Wandmaterial berechne die Differenz V = π × (ra² - ri²) × l.',
    ],
    formulaHtml: 'V_innen = π · r_i² · l',
    formulaNote: 'Wandmaterialvolumen: V_wand = π · (r_a² - r_i²) · l.',
    practicalExamples: [
      {
        title: 'Heizungs- und Wasserleitungen',
        desc: 'Wasserinhaltsberechnung zur Auslegung von Ausdehnungsgefäßen und Frostschutzmengen.',
      },
      {
        title: 'Stahl- und Betonrohre',
        desc: 'Materialmengen- und Gewichtsberechnung für Rohrleitungen im Tiefbau.',
      },
      {
        title: 'Drainagerohre',
        desc: 'Ermittlung des Rückhalte- und Durchflussvolumens für Entwässerungsleitungen.',
      },
    ],
    faqs: [
      {
        question: 'Wie berechnet man den Wasserinhalt eines Rohrs?',
        answer: 'Mit dem Innenradius r_i und der Rohrlänge l nach der Zylinderformel: V = π · r_i² · l.',
      },
      {
        question: 'Wie berechnet man das Wandmaterialvolumen?',
        answer: 'Mit der Differenzformel V = π · (r_a² - r_i²) · l, wobei r_a der Außenradius und r_i der Innenradius ist.',
      },
      {
        question: 'Wie viel Liter Wasser fasst ein 10 m langes Rohr mit 50 mm Innendurchmesser?',
        answer: 'Bei einem Innenradius von 2,5 cm und 1.000 cm Länge fasst das Rohr V = π × 2,5² × 1.000 ≈ 19.635 cm³, also rund 19,64 Liter.',
      },
    ],
    relatedGermanSlugs: [
      'zylinder-volumen-rechner',
      'liegender-zylindertank-volumen-rechner',
      'torus-volumen-rechner',
      'kapsel-volumen-rechner',
    ],
    inputLabels: {
      outerRadius: 'Außenradius (rₐ)',
      innerRadius: 'Innenradius (rᵢ)',
      height: 'Länge / Höhe (l)',
    },
  },

  'torus-volumen-rechner': {
    slug: 'torus-volumen-rechner',
    englishSlug: 'torus-volume-calculator',
    spanishSlug: 'calculadora-volumen-toroide',
    shapeId: 'torus',
    shapeName: 'Torus',
    categoryLabel: 'Runde Körper',
    title: 'Torus Volumen Rechner',
    h1: 'Torus-Volumen berechnen',
    metaDescription: 'Berechne das Volumen eines Torus oder O-Rings aus Hauptradius und Rohrradius. Ideal für Dichtungsringe, Schwimmreifen und Donut-Formen.',
    keywords: 'Torus Volumen Rechner, O-Ring Volumen berechnen, Torus Formel Volumen, Donut Volumen berechnen, Toroid Rauminhalt',
    shortTagline: 'Berechne das Volumen und die Oberfläche von Tori, O-Ringen und Donut-Körpern.',
    howToCalculate: [
      'Ermittle den Hauptradius R (Abstand vom Zentrum zur Rohrmitte) und den Rohrradius r.',
      'Setze die Maße in die Torusformel ein: V = 2 × π² × R × r².',
      'Für O-Ringe ermittelst du r aus der halben Schnurstärke s / 2 und R aus (Innendurchmesser + s) / 2.',
    ],
    formulaHtml: 'V = 2π² · R · r²',
    formulaNote: 'Die Oberfläche eines Torus beträgt A = 4π² · R · r.',
    practicalExamples: [
      {
        title: 'O-Ring Dichtungen',
        desc: 'Volumen- und Elastomerbedarfsberechnung für Präzisionsdichtungen im Maschinenbau.',
      },
      {
        title: 'Schwimmringe und Reifen',
        desc: 'Ermittlung des Luftinhalts ringförmiger Schwimm- und Rettungskörper.',
      },
      {
        title: 'Ringmagnete',
        desc: 'Volumenbestimmung für toroidale Ferrit- und Neodymkerne in der Elektrotechnik.',
      },
    ],
    faqs: [
      {
        question: 'Wie lautet die Volumenformel eines Torus?',
        answer: 'Die Formel lautet V = 2 · π² · R · r², wobei R der Hauptradius vom Zentrum zur Rohrachse und r der Rohrquerschnittsradius ist.',
      },
      {
        question: 'Wie berechnet man das Volumen eines O-Rings aus Innendurchmesser (di) und Schnurstärke (s)?',
        answer: 'Der kleine Radius ist r = s / 2 und der große Radius ist R = (di + s) / 2. Beide Werte setzt man in V = 2 · π² · R · r² ein.',
      },
      {
        question: 'Wie lautet die Oberfläche eines Torus?',
        answer: 'Die Oberfläche eines Torus beträgt A = 4 · π² · R · r.',
      },
    ],
    relatedGermanSlugs: [
      'kugel-volumen-rechner',
      'rohr-volumen-rechner',
      'ellipsoid-volumen-rechner',
      'zylinder-volumen-rechner',
    ],
    inputLabels: {
      majorRadius: 'Hauptradius (R)',
      minorRadius: 'Rohrradius (r)',
    },
  },

  'trapezprisma-volumen-rechner': {
    slug: 'trapezprisma-volumen-rechner',
    englishSlug: 'trapezoidal-prism-volume-calculator',
    spanishSlug: 'calculadora-volumen-prisma-trapezoidal',
    shapeId: 'trapezoidal_prism',
    shapeName: 'Trapezprisma',
    categoryLabel: 'Prismen und Pyramiden',
    title: 'Trapezprisma Volumen Rechner',
    h1: 'Trapezprisma-Volumen berechnen',
    metaDescription: 'Berechne das Volumen eines Trapezprismas oder Grabens mit Böschung. Ideal für Erdaushub, Kanäle, Tröge und Wannen in Kubikmeter und Liter.',
    keywords: 'Trapezprisma Volumen Rechner, Graben Volumen berechnen, Aushub Graben Rechner, Tränke Volumen Liter, Trapezprofil Volumen',
    shortTagline: 'Berechne das Volumen von Gräben, Entwässerungskanälen, Trögen und Dämmen.',
    howToCalculate: [
      'Miss die obere Breite a, die untere Sohlbreite b, die senkrechte Tiefe h und die Länge l.',
      'Berechne die durchschnittliche Breite: (a + b) / 2.',
      'Multipliziere mit Tiefe und Länge: V = ((a + b) / 2) × h × l.',
    ],
    formulaHtml: 'V = ½ · (a + b) · h · l',
    formulaNote: 'Dabei sind a die obere Breite, b die Sohlbreite, h die Grabentiefe und l die Länge.',
    practicalExamples: [
      {
        title: 'Erdaushub für Baugräben',
        desc: 'Kubaturberechnung für Leitungsgräben mit normgerechter Böschung zur Abfuhrplanung.',
      },
      {
        title: 'Futter- und Wassertröge',
        desc: 'Fassungsvermögen landwirtschaftlicher Tröge mit trapezförmigem Querschnitt.',
      },
      {
        title: 'Entwässerungsgräben',
        desc: 'Kapazitätsbestimmung für Regenrückhalte- und Straßenseitengräben in Kubikmetern.',
      },
    ],
    faqs: [
      {
        question: 'Wie lautet die Formel für ein Trapezprisma?',
        answer: 'Die Formel lautet V = ((a + b) / 2) · h · l, wobei a die obere Breite, b die untere Breite, h die senkrechte Tiefe und l die Länge ist.',
      },
      {
        question: 'Wie berechnet man den Erdaushub eines Grabens in m³?',
        answer: 'Messe obere Breite, Sohlbreite, Tiefe und Länge in Metern. Wende V = ((a + b) / 2) · h · l an, um den Aushub in m³ zu erhalten.',
      },
      {
        question: 'Wie ermittelt man das Fassungsvermögen eines Futtertrogs in Litern?',
        answer: 'Berechne das Volumen in Kubikzentimetern und teile das Ergebnis durch 1.000 für die Kapazität in Litern.',
      },
    ],
    relatedGermanSlugs: [
      'quader-volumen-rechner',
      'dreiecksprisma-volumen-rechner',
      'rechteckige-pyramide-volumen-rechner',
      'rohr-volumen-rechner',
    ],
    inputLabels: {
      topWidth: 'Breite oben (a)',
      bottomWidth: 'Breite unten (b)',
      height: 'Tiefe / Höhe (h)',
      length: 'Länge (l)',
    },
  },

  'liegender-zylindertank-volumen-rechner': {
    slug: 'liegender-zylindertank-volumen-rechner',
    englishSlug: 'horizontal-tank-volume-calculator',
    spanishSlug: 'calculadora-volumen-tanque-cilindrico-horizontal',
    shapeId: 'horizontal_tank_fill',
    shapeName: 'Liegender Zylindertank',
    categoryLabel: 'Tanques und Rohre',
    title: 'Liegender Zylindertank Rechner',
    h1: 'Liegender Zylindertank Rechner',
    metaDescription: 'Berechne den Füllstand und Restinhalt eines liegenden Zylindertanks anhand der Peilstab-Füllhöhe. Genaue Tabelle für Heizöl und Kraftstoff.',
    keywords: 'Liegender Zylindertank Rechner, Peilstab Tank Rechner, Heizöltank Füllstand berechnen, Zylindertank liegend Teilvolumen, Tankinhalt Tabelle berechnen',
    shortTagline: 'Berechne den Teilinhalt liegender Zylindertanks aus Radius, Länge und Peilstab-Füllhöhe.',
    howToCalculate: [
      'Miss den Innenradius r des Tanks, die zylindrische Länge l und den Flüssigkeitsstand d mit dem Peilstab.',
      'Berechne den Kreissegmentanteil der benetzten Kreisfläche mit dem Arkuskosinus im Bogenmaß.',
      'Multipliziere die Flüssigkeitsquerschnittsfläche mit der Tanklänge, um das Volumen in Litern zu erhalten.',
    ],
    formulaHtml: 'V = [r² · arccos((r - d) / r) - (r - d) · √(2rd - d²)] · l',
    formulaNote: 'Dabei ist d die gemessene Füllhöhe und der Winkel des Arkuskosinus steht im Bogenmaß.',
    practicalExamples: [
      {
        title: 'Heizöltanks im Keller',
        desc: 'Genaues Ablesen der Restmenge an Heizöl anhand der Zentimeter-Markierung des Peilstabs.',
      },
      {
        title: 'Kraftstoff- und Wassertanks',
        desc: 'Abrechnung und Nachfüllplanung für liegende Diesel- und Löschwassertanks.',
      },
      {
        title: 'Milchtanks',
        desc: 'Bestimmung der gelagerten Milchmenge in liegenden Edelstahl-Kühltanks.',
      },
    ],
    faqs: [
      {
        question: 'Wie berechnet man das Teilvolumen eines liegenden Zylinders?',
        answer: 'Mit der Kreissegmentformel V = [r² · arccos((r - d) / r) - (r - d) · √(2rd - d²)] · l, wobei der Arkuskosinus im Bogenmaß ausgewertet wird.',
      },
      {
        question: 'Warum ist die Füllhöhe nicht proportional zum Inhalt?',
        answer: 'Weil der runde Querschnitt in der Mitte am breitesten und oben sowie unten schmaler ist. Bei 25 % Füllhöhe enthält der Tank deutlich weniger als 25 % des Gesamtvolumens.',
      },
      {
        question: 'Wie rechnet man Peilstab-cm in Heizöl-Liter um?',
        answer: 'Durchmesser, Länge und gemessenen Füllstand in Zentimetern in die Zylinderformel einsetzen und das Resultat in cm³ durch 1.000 teilen.',
      },
    ],
    relatedGermanSlugs: [
      'zylinder-volumen-rechner',
      'kapsel-volumen-rechner',
      'rohr-volumen-rechner',
      'trapezprisma-volumen-rechner',
    ],
    inputLabels: {
      radius: 'Tankinnenradius (r)',
      length: 'Tanklänge (l)',
      fillDepth: 'Flüssigkeitsstand / Peilstab (d)',
    },
  },
};
