export interface ToolDetail {
  slug: string;
  shapeId: string;
  title: string;
  h1: string;
  metaDescription: string;
  keywords: string;
  shortTagline: string;
  howToCalculate: string[];
  formulaHtml: string;
  formulaNote: string;
  practicalExamples: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
}

export const TOOL_DETAILS: Record<string, ToolDetail> = {
  'cube-volume-calculator': {
    slug: 'cube-volume-calculator',
    shapeId: 'cube',
    title: 'Cube Volume Calculator',
    h1: 'Cube Volume Calculator',
    metaDescription: 'Calculate the volume and surface area of a cube instantly. Enter the edge length in inches, feet, centimeters, or meters with step-by-step math.',
    keywords: 'cube volume calculator, volume of a cube, calculate cube volume, cube cubic feet, cube side length',
    shortTagline: 'Calculate volume of cubic containers, storage boxes, and dice from side length.',
    howToCalculate: [
      'Measure any one of the cube edges (a). Since all sides of a cube are identical, length = width = height.',
      'Multiply the edge length by itself three times (a × a × a, or a³).',
      'Convert the resulting cubic units into your desired volume measurement (e.g. gallons, liters, cubic feet).',
    ],
    formulaHtml: 'V = a^3',
    formulaNote: 'Where a is the edge (side) length of the cube. Total Surface Area is A = 6a².',
    practicalExamples: [
      { title: 'Moving & Storage Boxes', desc: 'A 2-foot cube storage box holds 2 × 2 × 2 = 8 cubic feet of goods. Convert larger freight estimates with our <a href="/cubic-feet-calculator" class="text-primary hover:underline font-medium">Cubic Feet Calculator</a>.' },
      { title: 'Concrete Footings & Blocks', desc: 'Contractors calculating cubic yards of poured concrete for square structural bases.' },
      { title: 'Cube Aquariums', desc: 'Determine total water capacity in gallons or liters for nano reef and freshwater cube fish tanks.' },
    ],
    faqs: [
      { question: 'What is the formula to find the volume of a cube?', answer: 'The formula is V = a³, where "a" represents the length of any edge. For example, if a = 3 ft, V = 3 × 3 × 3 = 27 ft³.' },
      { question: 'How do you calculate surface area of a cube?', answer: 'A cube has six equal square faces. The surface area formula is A = 6 × a². For an edge of 2 m, A = 6 × 4 = 24 m².' },
      { question: 'Can I use different units for the sides?', answer: 'In a cube, all sides are equal. If you know the edge in inches, our calculator can instantly give you the volume in gallons, liters, or cubic feet.' },
    ],
    relatedSlugs: ['box-volume-calculator', 'cylinder-volume-calculator', 'sphere-volume-calculator'],
  },

  'box-volume-calculator': {
    slug: 'box-volume-calculator',
    shapeId: 'rectangular_prism',
    title: 'Box Volume Calculator',
    h1: 'Box Volume Calculator (Rectangular Prism)',
    metaDescription: 'Quickly calculate the volume of any rectangular box, carton, shipping package, room, or rectangular tank. Step-by-step formulas and unit conversions.',
    keywords: 'box volume calculator, rectangular prism volume calculator, calculate box volume, box volume in gallons, box cubic feet',
    shortTagline: 'Calculate rectangular boxes, cargo containers, rooms, and packages.',
    howToCalculate: [
      'Measure the internal or external Length (l), Width (w), and Height (h) using a ruler or tape measure.',
      'Multiply the three dimensions together: Volume = Length × Width × Height.',
      'Select your preferred output unit (gallons, liters, cubic feet, or cubic meters) to see the capacity.',
    ],
    formulaHtml: 'V = l \\times w \\times h',
    formulaNote: 'Where l = length, w = width, and h = height. Total Surface Area is A = 2(lw + lh + wh).',
    practicalExamples: [
      { title: 'Parcel Shipping & Cargo Freight', desc: 'Calculate dimensional weight for shipping boxes, or use our dedicated <a href="/cubic-feet-calculator" class="text-primary hover:underline font-medium">Cubic Feet Calculator</a> to estimate total freight container space.' },
      { title: 'Rectangular Swimming Pools', desc: 'Estimate water volume for box-shaped basins, or use our specialized <a href="/pool-volume-calculator" class="text-primary hover:underline font-medium">Pool Volume Calculator</a> for pools with shallow and deep ends.' },
      { title: 'Raised Garden Beds', desc: 'Calculate how many cubic feet or cubic yards of soil and compost you need to purchase.' },
    ],
    faqs: [
      { question: 'How do I calculate the volume of a cardboard box?', answer: 'Measure the length, width, and height in inches. Multiply them together to get cubic inches, then divide by 1,728 to find cubic feet.' },
      { question: 'What is the difference between a cube and a rectangular prism?', answer: 'A cube has all 6 equal square sides (l = w = h), whereas a rectangular prism can have different lengths, widths, and heights.' },
      { question: 'How many gallons fit in a 1 cubic foot box?', answer: 'Exactly 7.48052 US liquid gallons fit in 1 cubic foot of space.' },
    ],
    relatedSlugs: ['cube-volume-calculator', 'cylinder-volume-calculator', 'pipe-volume-calculator'],
  },

  'cylinder-volume-calculator': {
    slug: 'cylinder-volume-calculator',
    shapeId: 'cylinder',
    title: 'Cylinder Volume Calculator',
    h1: 'Cylinder Volume Calculator',
    metaDescription: 'Find the volume of any cylinder, round tank, pipe, or drink can. Enter radius or diameter and height to calculate volume in gallons, liters, and m³.',
    keywords: 'cylinder volume calculator, volume of a cylinder, cylindrical tank volume, cylinder volume in gallons, cylinder cubic feet',
    shortTagline: 'Calculate volume of round water tanks, industrial drums, columns, and circular pipes.',
    howToCalculate: [
      'Measure the base radius (r) from the center to the outer edge, or measure diameter and divide by 2.',
      'Square the radius (r × r) and multiply by Pi (π ≈ 3.14159265). This gives the circular base area.',
      'Multiply the base area by the cylinder height (h): Volume = π × r² × h.',
    ],
    formulaHtml: 'V = \\pi r^2 h',
    formulaNote: 'Where r = radius of the circular base, h = height. If you know diameter d, r = d/2.',
    practicalExamples: [
      { title: '55-Gallon Steel Drums', desc: 'Industrial chemical and oil drums with 11.25 in radius and 33.5 in height hold ~55 US gallons.' },
      { title: 'Vertical Water Storage Tanks', desc: 'Calculate rain harvesting or well water holding capacity in gallons or liters. For round swimming pools, use our <a href="/pool-volume-calculator" class="text-primary hover:underline font-medium">Pool Volume Calculator</a>.' },
      { title: 'Circular Concrete Pillars & Columns', desc: 'Determine concrete mix bags needed for civil engineering foundations and sonotubes.' },
    ],
    faqs: [
      { question: 'How do you calculate cylinder volume if you only have the diameter?', answer: 'Divide the diameter by 2 to get the radius (r = d / 2), then apply the formula V = π × r² × h.' },
      { question: 'What is the surface area of a cylinder?', answer: 'Total surface area includes the top and bottom circles plus the curved side: A = 2πr(r + h).' },
      { question: 'How do you convert cylinder volume to gallons?', answer: 'Calculate volume in cubic inches and divide by 231, or calculate in cubic feet and multiply by 7.48.' },
    ],
    relatedSlugs: ['pipe-volume-calculator', 'horizontal-tank-volume-calculator', 'cone-volume-calculator'],
  },

  'sphere-volume-calculator': {
    slug: 'sphere-volume-calculator',
    shapeId: 'sphere',
    title: 'Sphere Volume Calculator',
    h1: 'Sphere Volume Calculator',
    metaDescription: 'Calculate the volume of a sphere, ball, planet, or spherical gas tank. Input radius or diameter for instant multi-unit volume conversions.',
    keywords: 'sphere volume calculator, volume of a sphere, ball volume calculator, spherical volume, sphere cubic feet',
    shortTagline: 'Calculate volume and surface area of balls, globes, domes, and spherical tanks.',
    howToCalculate: [
      'Measure the radius (r) from the exact center of the sphere to any point on its surface.',
      'Cube the radius (r × r × r).',
      'Multiply by 4/3 and by Pi (π): Volume = (4/3) × π × r³.',
    ],
    formulaHtml: 'V = \\frac{4}{3} \\pi r^3',
    formulaNote: 'Where r is radius. Total surface area is A = 4πr².',
    practicalExamples: [
      { title: 'Sports Balls', desc: 'Calculate the air volume inside regulation basketballs (r ≈ 12.1 cm), soccer balls, and tennis balls.' },
      { title: 'Pressurized Horton Spheres', desc: 'Industrial pressurized gas spheres used in oil refineries and chemical plants.' },
      { title: 'Planetary & Celestial Bodies', desc: 'Compute celestial spatial volumes like Earth (mean radius 6,371 km) or the Moon.' },
    ],
    faqs: [
      { question: 'Why is the formula for a sphere (4/3)πr³?', answer: 'Derived through calculus by integrating thin circular discs from -r to +r along the sphere diameter.' },
      { question: 'How do I calculate volume from circumference?', answer: 'Divide the circumference by 2π to find radius: r = C / (2π). Then apply V = (4/3)πr³.' },
    ],
    relatedSlugs: ['capsule-volume-calculator', 'spherical-cap-volume-calculator', 'ellipsoid-volume-calculator'],
  },

  'cone-volume-calculator': {
    slug: 'cone-volume-calculator',
    shapeId: 'cone',
    title: 'Cone Volume Calculator',
    h1: 'Cone Volume Calculator',
    metaDescription: 'Find the volume of a cone, gravel pile, hopper, or funnel with radius and height. Instant volume calculations with step-by-step formula derivation.',
    keywords: 'cone volume calculator, volume of a cone, cone cubic feet calculator, conical volume, cone capacity',
    shortTagline: 'Calculate volume of funnels, conical mounds, traffic cones, and grain hoppers.',
    howToCalculate: [
      'Measure base radius (r) and vertical height (h) from the base center to the apex.',
      'Calculate the base area: A = π × r².',
      'Multiply by height and divide by 3: Volume = (1/3) × π × r² × h (exactly 1/3 the volume of a cylinder with identical base and height).',
    ],
    formulaHtml: 'V = \\frac{1}{3} \\pi r^2 h',
    formulaNote: 'Where r = base radius, h = vertical height, and slant height s = √(r² + h²).',
    practicalExamples: [
      { title: 'Stockpile Gravel & Mulch Cones', desc: 'Quarry managers calculate tons of sand or soil piled in natural conical mounds.' },
      { title: 'Grain & Feed Storage Hoppers', desc: 'Agricultural cones used to dispense grain and animal feed via gravity feed chutes.' },
      { title: 'Funnels & Volcano Cones', desc: 'Fluid transfer funnels and geological volcanic cinder cones.' },
    ],
    faqs: [
      { question: 'Is a cone always 1/3 of a cylinder?', answer: 'Yes! A cone with radius r and height h has exactly 1/3 the volume of a cylinder with the same radius and height.' },
      { question: 'How do I measure height if I only know slant height?', answer: 'Use the Pythagorean theorem: h = √(s² - r²), where s is slant height along the cone slope.' },
    ],
    relatedSlugs: ['conical-frustum-volume-calculator', 'cylinder-volume-calculator', 'square-pyramid-volume-calculator'],
  },

  'capsule-volume-calculator': {
    slug: 'capsule-volume-calculator',
    shapeId: 'capsule',
    title: 'Capsule Volume Calculator',
    h1: 'Capsule Volume Calculator',
    metaDescription: 'Calculate the volume of a capsule shape: a cylinder capped with two hemispheres. Used for pharmaceutical pills, LPG bullet tanks, and pressure vessels.',
    keywords: 'capsule volume calculator, capsule tank volume, pressure vessel volume calculator, capsule volume formula',
    shortTagline: 'Calculate volume of pharmaceutical capsules and industrial bullet pressure tanks.',
    howToCalculate: [
      'Identify radius (r) of the hemispherical end caps and length (a) of the central cylindrical body.',
      'Calculate the two hemisphere caps combined as one full sphere: V_sphere = (4/3) × π × r³.',
      'Calculate the central cylinder volume: V_cylinder = π × r² × a.',
      'Add both volumes together: Total Volume = π × r² × ((4/3)r + a).',
    ],
    formulaHtml: 'V = \\pi r^2 (\\frac{4}{3}r + a)',
    formulaNote: 'Where r = end cap radius, a = cylindrical body length. Total length = a + 2r.',
    practicalExamples: [
      { title: 'Propane & LPG Bullet Tanks', desc: 'Rounded hemispherical ends resist internal pressure evenly without corner stress.' },
      { title: 'Pharmaceutical Gelatin Capsules', desc: 'Determine dosage powder volume for Size 00, 0, and 1 medicinal capsules.' },
    ],
    faqs: [
      { question: 'Why do pressure vessels have rounded ends?', answer: 'Spherical caps distribute internal gas and liquid pressure uniformly, preventing stress concentrations at corners.' },
    ],
    relatedSlugs: ['cylinder-volume-calculator', 'sphere-volume-calculator', 'horizontal-tank-volume-calculator'],
  },

  'spherical-cap-volume-calculator': {
    slug: 'spherical-cap-volume-calculator',
    shapeId: 'spherical_cap',
    title: 'Spherical Cap Calculator',
    h1: 'Spherical Cap / Dome Volume Calculator',
    metaDescription: 'Calculate the volume of a spherical cap, architectural dome, bowl, or dish. Step-by-step calculus formula with base radius and height.',
    keywords: 'spherical cap volume calculator, dome volume calculator, hemispherical bowl volume, spherical dome volume',
    shortTagline: 'Calculate volume of architectural domes, shallow bowls, dishes, and spherical cutoffs.',
    howToCalculate: [
      'Measure base radius (r) of the circular cutoff flat base and height (h) of the cap.',
      'Substitute into the spherical cap equation: V = (π × h / 6) × (3r² + h²).',
    ],
    formulaHtml: 'V = \\frac{\\pi h}{6}(3r^2 + h^2)',
    formulaNote: 'Where r = base radius, h = cap height. Alternatively, with sphere radius R: V = (πh²/3)(3R - h).',
    practicalExamples: [
      { title: 'Observatory & Stadium Domes', desc: 'Calculate indoor air capacity and HVAC requirements for domed structures.' },
      { title: 'Kitchen Bowls & Ladles', desc: 'Determine liquid capacity for circular hemispherical or shallow bowls.' },
    ],
    faqs: [
      { question: 'What is a spherical cap?', answer: 'A spherical cap is the portion of a sphere cut off by a flat plane. If h = R, it is a hemisphere.' },
    ],
    relatedSlugs: ['sphere-volume-calculator', 'cone-volume-calculator', 'torus-volume-calculator'],
  },

  'conical-frustum-volume-calculator': {
    slug: 'conical-frustum-volume-calculator',
    shapeId: 'conical_frustum',
    title: 'Conical Frustum Calculator',
    h1: 'Conical Frustum Volume Calculator',
    metaDescription: 'Calculate the volume of a truncated cone (conical frustum). Ideal for utility buckets, paper coffee cups, flower pots, and lamp shades.',
    keywords: 'conical frustum volume calculator, bucket volume calculator, truncated cone volume, flower pot volume',
    shortTagline: 'Calculate volume of buckets, paper cups, planters, and tapered containers.',
    howToCalculate: [
      'Measure top radius (r₁), bottom radius (r₂), and vertical height (h).',
      'Compute (r₁² + r₁ × r₂ + r₂²).',
      'Multiply by (π × h / 3): Volume = (π × h / 3) × (r₁² + r₁r₂ + r₂²).',
    ],
    formulaHtml: 'V = \\frac{\\pi h}{3}(r_1^2 + r_1 r_2 + r_2^2)',
    formulaNote: 'Where r₁ = top radius, r₂ = bottom radius, and h = vertical height between bases.',
    practicalExamples: [
      { title: '5-Gallon Utility Buckets', desc: 'Standard hardware store buckets have tapered sides for easy nesting when stacked.' },
      { title: 'Takeout Coffee Cups', desc: '12 oz, 16 oz, and 20 oz disposable paper cups are frustums.' },
      { title: 'Flower Pots & Planters', desc: 'Soil volume calculations for round gardening pots.' },
    ],
    faqs: [
      { question: 'What is a conical frustum?', answer: 'A frustum is a cone whose tip (apex) has been sliced off parallel to its base, creating two parallel circular ends of different sizes.' },
    ],
    relatedSlugs: ['cone-volume-calculator', 'cylinder-volume-calculator', 'box-volume-calculator'],
  },

  'ellipsoid-volume-calculator': {
    slug: 'ellipsoid-volume-calculator',
    shapeId: 'ellipsoid',
    title: 'Ellipsoid Volume Calculator',
    h1: 'Ellipsoid Volume Calculator',
    metaDescription: 'Calculate the volume of an ellipsoid or scalene spheroid with semi-axes a, b, and c. Used for rugby balls, watermelons, and celestial planets.',
    keywords: 'ellipsoid volume calculator, volume of an ellipsoid, spheroid volume calculator, triaxial ellipsoid volume',
    shortTagline: 'Calculate volume of rugby balls, watermelons, eggs, and oblate spheroids.',
    howToCalculate: [
      'Measure the three principal semi-axes (a, b, c) from the center to the three orthogonal surfaces.',
      'Multiply all three semi-axes: (a × b × c).',
      'Multiply by (4/3) × π: Volume = (4/3) × π × a × b × c.',
    ],
    formulaHtml: 'V = \\frac{4}{3} \\pi a b c',
    formulaNote: 'Where a, b, and c are the semi-principal axes (half of each total dimension).',
    practicalExamples: [
      { title: 'American Footballs & Rugby Balls', desc: 'Prolate spheroids with two equal equatorial axes and one longer longitudinal axis.' },
      { title: 'Watermelons & Produce', desc: 'Agricultural packing and weight estimation for oblong fruits.' },
    ],
    faqs: [
      { question: 'How is an ellipsoid related to a sphere?', answer: 'A sphere is simply a special case of an ellipsoid where all three semi-axes are equal (a = b = c = r).' },
    ],
    relatedSlugs: ['sphere-volume-calculator', 'capsule-volume-calculator', 'torus-volume-calculator'],
  },

  'square-pyramid-volume-calculator': {
    slug: 'square-pyramid-volume-calculator',
    shapeId: 'square_pyramid',
    title: 'Square Pyramid Calculator',
    h1: 'Square Pyramid Volume Calculator',
    metaDescription: 'Calculate volume and surface area of a pyramid with a square base. Enter base edge length and vertical height with live mathematical steps.',
    keywords: 'square pyramid volume calculator, volume of a square pyramid, square base pyramid volume, pyramid volume formula',
    shortTagline: 'Calculate volume of square pyramids, pyramid roofs, and monuments.',
    howToCalculate: [
      'Measure the edge length (a) of the square base.',
      'Measure vertical height (h) perpendicular from base center to the apex.',
      'Calculate base area (a²) and multiply by height divided by 3: Volume = (1/3) × a² × h.',
    ],
    formulaHtml: 'V = \\frac{1}{3} a^2 h',
    formulaNote: 'Where a = base side length, h = vertical height. Slant height s = √((a/2)² + h²).',
    practicalExamples: [
      { title: 'Great Pyramid of Giza', desc: 'Original base of 230.3 m and height of 146.6 m yields approx. 2.58 million m³ of stone.' },
      { title: 'Architectural Pyramid Roofs', desc: 'Air volume and insulation requirements for square hip roof caps.' },
    ],
    faqs: [
      { question: 'What is the volume formula for a square pyramid?', answer: 'V = (1/3) × a² × h, where "a" is base edge length and "h" is vertical height.' },
    ],
    relatedSlugs: ['rectangular-pyramid-volume-calculator', 'cone-volume-calculator', 'cube-volume-calculator'],
  },

  'rectangular-pyramid-volume-calculator': {
    slug: 'rectangular-pyramid-volume-calculator',
    shapeId: 'rectangular_pyramid',
    title: 'Rectangular Pyramid Calculator',
    h1: 'Rectangular Pyramid Volume Calculator',
    metaDescription: 'Find the volume of a pyramid with a rectangular base (length ≠ width). Accurate formulas and instant unit conversions.',
    keywords: 'rectangular pyramid volume calculator, volume of a rectangular pyramid, right rectangular pyramid volume',
    shortTagline: 'Calculate volume of rectangular pyramids and hip roofs.',
    howToCalculate: [
      'Measure base length (l), base width (w), and vertical height (h).',
      'Compute base area: A = l × w.',
      'Multiply base area by height and divide by 3: Volume = (1/3) × l × w × h.',
    ],
    formulaHtml: 'V = \\frac{1}{3} l w h',
    formulaNote: 'Where l = base length, w = base width, and h = vertical height to apex.',
    practicalExamples: [
      { title: 'Building Roof Caps', desc: 'Calculating attic volume for rectangular pyramid roofs.' },
    ],
    faqs: [
      { question: 'How is a rectangular pyramid different from a square pyramid?', answer: 'A rectangular pyramid has a base with different length and width (l ≠ w), while a square pyramid has equal base edges (l = w = a).' },
    ],
    relatedSlugs: ['square-pyramid-volume-calculator', 'triangular-prism-volume-calculator', 'box-volume-calculator'],
  },

  'triangular-prism-volume-calculator': {
    slug: 'triangular-prism-volume-calculator',
    shapeId: 'triangular_prism',
    title: 'Triangular Prism Calculator',
    h1: 'Triangular Prism Volume Calculator',
    metaDescription: 'Calculate the volume of a triangular prism with triangle base, triangle height, and prism length. Clear formulas and instant unit conversions.',
    keywords: 'triangular prism volume calculator, volume of a triangular prism, wedge volume calculator, triangle prism capacity',
    shortTagline: 'Calculate volume of A-frame tents, wedges, Toblerone boxes, and roof trusses.',
    howToCalculate: [
      'Measure base of the triangle (b) and height of the triangle (h).',
      'Calculate the triangular end area: A_tri = (1/2) × b × h.',
      'Multiply by the length of the prism (l): Volume = (1/2) × b × h × l.',
    ],
    formulaHtml: 'V = \\frac{1}{2} b h l',
    formulaNote: 'Where b = triangle base, h = triangle height, and l = prism length.',
    practicalExamples: [
      { title: 'Camping A-Frame Tents', desc: 'Determine interior air volume and sleeping space inside triangular ridge tents.' },
      { title: 'Cheese Wedges & Packaging', desc: 'Calculate food volume in triangular prism retail packaging.' },
    ],
    faqs: [
      { question: 'What is the formula for a triangular prism?', answer: 'V = (1/2) × base × height × length. It is half the volume of a rectangular box with the same dimensions.' },
    ],
    relatedSlugs: ['trapezoidal-prism-volume-calculator', 'box-volume-calculator', 'square-pyramid-volume-calculator'],
  },

  'pipe-volume-calculator': {
    slug: 'pipe-volume-calculator',
    shapeId: 'hollow_cylinder',
    title: 'Pipe Volume Calculator',
    h1: 'Pipe & Hollow Cylinder Volume Calculator',
    metaDescription: 'Calculate pipe wall material volume and internal fluid capacity. Enter outer radius, inner radius (or thickness), and pipe length.',
    keywords: 'pipe volume calculator, tube volume calculator, hollow cylinder volume calculator, pipe water capacity',
    shortTagline: 'Calculate pipe wall material volume and internal liquid capacity for plumbing & drainage.',
    howToCalculate: [
      'Measure outer radius (R), inner radius (r), and total pipe length (h).',
      'To find pipe wall material: V_wall = π × (R² - r²) × h.',
      'To find fluid capacity inside the pipe: V_fluid = π × r² × h.',
    ],
    formulaHtml: 'V_{wall} = \\pi (R^2 - r^2) h',
    formulaNote: 'Where R = outer radius, r = inner radius, and h = pipe length. Internal fluid capacity is V_fluid = πr²h.',
    practicalExamples: [
      { title: 'Plumbing & Drainage Pipes', desc: 'Calculate gallons of water contained inside long underground sewer and supply mains.' },
      { title: 'Steel & Metal Weight Estimation', desc: 'Multiply wall material volume by steel density (7,850 kg/m³) to find pipe weight.' },
      { title: 'Concrete Culverts', desc: 'Determine concrete volume required to manufacture hollow precast drainage culverts.' },
    ],
    faqs: [
      { question: 'How do I calculate volume if I know pipe thickness instead of inner radius?', answer: 'Subtract wall thickness from outer radius: r = R - thickness.' },
      { question: 'How do I find how much water a pipe holds?', answer: 'Use only the inner radius (r): V_water = π × r² × length. Our calculator provides both wall volume and water capacity.' },
    ],
    relatedSlugs: ['cylinder-volume-calculator', 'horizontal-tank-volume-calculator', 'trapezoidal-prism-volume-calculator'],
  },

  'torus-volume-calculator': {
    slug: 'torus-volume-calculator',
    shapeId: 'torus',
    title: 'Torus Volume Calculator',
    h1: 'Torus Volume Calculator (Donut & O-Ring)',
    metaDescription: 'Calculate the volume and surface area of a torus (donut or o-ring). Input major radius R and tube radius r for instant results.',
    keywords: 'torus volume calculator, volume of a torus, donut volume calculator, o-ring volume',
    shortTagline: 'Calculate volume and surface area of donuts, o-rings, tire tubes, and magnetic toroids.',
    howToCalculate: [
      'Measure major radius (R) from the center of the hole to the center of the tube.',
      'Measure minor radius (r), which is the radius of the circular tube itself.',
      'Apply the Pappus centroid theorem: Volume = 2 × π² × R × r².',
    ],
    formulaHtml: 'V = 2 \\pi^2 R r^2',
    formulaNote: 'Where R = center-to-tube radius, r = circular cross-section tube radius (r must be ≤ R).',
    practicalExamples: [
      { title: 'Rubber O-Rings & Gaskets', desc: 'Calculate rubber material volume required for automotive and aerospace seal manufacturing.' },
      { title: 'Inflatable Swimming Rings', desc: 'Determine air volume needed to inflate river tubes and swimming rings.' },
    ],
    faqs: [
      { question: 'What is the formula for torus volume?', answer: 'V = 2π²Rr², where R is the distance from the center of the whole ring to the center of the tube, and r is the radius of the tube.' },
    ],
    relatedSlugs: ['cylinder-volume-calculator', 'sphere-volume-calculator', 'pipe-volume-calculator'],
  },

  'trapezoidal-prism-volume-calculator': {
    slug: 'trapezoidal-prism-volume-calculator',
    shapeId: 'trapezoidal_prism',
    title: 'Trapezoidal Prism Calculator',
    h1: 'Trapezoidal Prism & Trench Calculator',
    metaDescription: 'Calculate the volume of trapezoidal ditches, trenches, drainage swales, canals, and livestock troughs. Multi-unit volume math made easy.',
    keywords: 'trapezoidal prism volume calculator, trench volume calculator, trough volume calculator, swale ditch volume',
    shortTagline: 'Calculate volume of drainage swales, farm troughs, trenches, and canals.',
    howToCalculate: [
      'Measure top width (a), bottom width (b), depth / height (h), and total trench length (l).',
      'Calculate trapezoidal cross-section area: A_cross = (a + b) / 2 × h.',
      'Multiply by length: Volume = A_cross × l.',
    ],
    formulaHtml: 'V = \\frac{a + b}{2} \\times h \\times l',
    formulaNote: 'Where a = top width, b = bottom width, h = depth, and l = length.',
    practicalExamples: [
      { title: 'Excavation & Drainage Trenches', desc: 'Calculate cubic yards of dirt removed during ditch digging or gravel backfill required.' },
      { title: 'Agricultural Water Troughs', desc: 'Determine total water holding capacity for cattle and sheep troughs.' },
    ],
    faqs: [
      { question: 'How do you calculate volume of an excavation trench?', answer: 'Average the top width and bottom width: (a + b) / 2, multiply by depth, then multiply by trench length.' },
    ],
    relatedSlugs: ['triangular-prism-volume-calculator', 'box-volume-calculator', 'horizontal-tank-volume-calculator'],
  },

  'horizontal-tank-volume-calculator': {
    slug: 'horizontal-tank-volume-calculator',
    shapeId: 'horizontal_tank_fill',
    title: 'Horizontal Tank Calculator',
    h1: 'Horizontal Tank Volume Calculator (Liquid Fill Depth)',
    metaDescription: 'Calculate the exact liquid volume and fill percentage of a horizontal cylindrical tank filled to depth d. Advanced circular segment calculus math.',
    keywords: 'horizontal tank volume calculator, horizontal cylinder tank fill calculator, dipstick tank volume, liquid fill depth calculator',
    shortTagline: 'Calculate exact liquid volume in horizontal cylindrical oil, fuel, and water storage tanks.',
    howToCalculate: [
      'Enter tank radius (r), tank length (L), and current liquid dipstick depth (d ≤ 2r).',
      'Our engine integrates the circular segment area: A_seg = r² arccos((r-d)/r) - (r-d)√(2rd - d²).',
      'Multiplies by tank length L to give exact fluid volume in gallons, liters, and fill percentage.',
    ],
    formulaHtml: 'V_{fill} = [r^2 \\arccos(\\frac{r-d}{r}) - (r-d)\\sqrt{2rd - d^2}] \\times L',
    formulaNote: 'Where r = tank radius, L = length, d = liquid depth (d ≤ 2r). Total tank capacity is V_total = πr²L.',
    practicalExamples: [
      { title: 'Above-Ground Fuel & Diesel Tanks', desc: 'Use a wooden dipstick to measure liquid inches and convert directly to remaining gallons.' },
      { title: 'Chemical & Water Storage', desc: 'Determine when to schedule tank re-fills based on current fill percentage.' },
    ],
    faqs: [
      { question: 'Why isn’t a horizontal tank linear with depth?', answer: 'Because the tank is circular, a 1-inch increase in depth near the middle holds significantly more liquid than 1 inch near the bottom or top.' },
      { question: 'What is the maximum depth allowed?', answer: 'Liquid depth (d) cannot exceed twice the radius (d ≤ 2r), which corresponds to a completely full tank.' },
    ],
    relatedSlugs: ['cylinder-volume-calculator', 'pipe-volume-calculator', 'capsule-volume-calculator'],
  },
};
