export interface ChineseFaq {
  question: string;
  answer: string;
}

export interface ChinesePracticalExample {
  title: string;
  desc: string;
}

export interface ChineseToolDetail {
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
  practicalExamples: ChinesePracticalExample[];
  faqs: ChineseFaq[];
  relatedChineseSlugs: string[];
  inputLabels: Record<string, string>;
}

export const CHINESE_TOOLS: Record<string, ChineseToolDetail> = {
  'cube-volume-calculator': {
    slug: 'cube-volume-calculator',
    englishSlug: 'cube-volume-calculator',
    shapeId: 'cube',
    shapeName: '正方体',
    categoryLabel: '基础三维立体',
    title: '正方体体积计算器',
    h1: '正方体体积计算器',
    metaDescription: '在线正方体体积计算器，输入棱长即时计算立方体体积与表面积，支持立方米、升、立方厘米自动换算。',
    keywords: '正方体体积计算器, 正方体体积公式, 立方体体积怎么算, 正方体容积升计算, 边长算正方体体积',
    shortTagline: '通过棱长快速计算正方体容器、包装箱及立方形积木的体积与表面积。',
    howToCalculate: [
      '测量正方体任意一条棱的长度（a），因正方体各棱长均相等。',
      '将棱长自乘三次：V = a × a × a = a³。',
      '将计算出的立方单位换算为升（L）或立方米（m³）等所需容量单位。',
    ],
    formulaHtml: 'V = a³',
    formulaNote: 'a 为正方体棱长。表面积计算公式为 A = 6a²。',
    practicalExamples: [
      {
        title: '包装箱与收纳盒',
        desc: '边长50厘米的正方体收纳箱容积为 50 × 50 × 50 = 125,000 cm³，即刚好可容纳 125 升物品。',
      },
      {
        title: '混凝土基础方块',
        desc: '建筑工程中正方形基础打桩所需浇筑混凝土方量（m³）的快速核算。',
      },
      {
        title: '方形鱼缸水体',
        desc: '水族箱正方体玻璃缸注水容积（升数）的精准测定。',
      },
    ],
    faqs: [
      {
        question: '正方体的体积怎么计算？',
        answer: '边长自乘三次：V = a³（a 为棱长）。',
      },
      {
        question: '已知表面积（S）如何求体积？',
        answer: '先求边长 a = √(S / 6)，再求体积 V = a³。',
      },
      {
        question: '1米边长的正方体能装多少升水？',
        answer: '1 m³ 刚好等于 1000升 水。',
      },
    ],
    relatedChineseSlugs: [
      'rectangular-prism-volume-calculator',
      'cylinder-volume-calculator',
      'sphere-volume-calculator',
    ],
    inputLabels: {
      edge: '棱长',
    },
  },

  'rectangular-prism-volume-calculator': {
    slug: 'rectangular-prism-volume-calculator',
    englishSlug: 'box-volume-calculator',
    shapeId: 'rectangular_prism',
    shapeName: '长方体・纸箱',
    categoryLabel: '基础三维立体',
    title: '长方体体积计算器',
    h1: '长方体体积计算器',
    metaDescription: '在线长方体与快递纸箱体积计算器，输入长宽高即时计算体积立方米与容积升数，支持物流包装换算。',
    keywords: '长方体体积计算器, 纸箱体积计算公式, 长方体容积计算, 箱子立方米计算, 长宽高算体积升',
    shortTagline: '输入长、宽、高三边尺寸，快速计算长方体、纸箱及集装箱货物的立方数与容积。',
    howToCalculate: [
      '测量长方体的长（l）、宽（w）和高（h）。',
      '将三边长度相乘：V = l × w × h。',
      '将体积单位换算为立方米（m³）或除以1000换算为升（L）。',
    ],
    formulaHtml: 'V = l × w × h',
    formulaNote: 'l、w、h 分别为长、宽、高。表面积计算公式为 A = 2(lw + lh + wh)。',
    practicalExamples: [
      {
        title: '电商快递纸箱',
        desc: '规格 40cm × 30cm × 20cm 的纸箱体积为 24,000 cm³，即 0.024 立方米或 24 升。',
      },
      {
        title: '集装箱货柜拼箱',
        desc: '国际货运中按长宽高米数计算货物体积（CBM），用于计算海运与空运计费吨。',
      },
      {
        title: '家用储物柜空间',
        desc: '家具摆放与橱柜内部净容量的精确规划。',
      },
    ],
    faqs: [
      {
        question: '长方体体积的计算公式是什么？',
        answer: 'V = a × b × h（长 × 宽 × 高）。',
      },
      {
        question: '快递纸箱的立方数（m³）怎么算？',
        answer: '测量厘米尺寸相乘后除以 1,000,000：m³ = (长 × 宽 × 高) / 1,000,000。',
      },
      {
        question: '纸箱容积怎么换算成升？',
        answer: '计算立方厘米（cm³）后除以 1,000。',
      },
    ],
    relatedChineseSlugs: [
      'cube-volume-calculator',
      'cylinder-volume-calculator',
      'trapezoidal-prism-volume-calculator',
    ],
    inputLabels: {
      length: '长度',
      width: '宽度',
      height: '高度',
    },
  },

  'cylinder-volume-calculator': {
    slug: 'cylinder-volume-calculator',
    englishSlug: 'cylinder-volume-calculator',
    shapeId: 'cylinder',
    shapeName: '圆柱体',
    categoryLabel: '旋转曲面立体',
    title: '圆柱体体积计算器',
    h1: '圆柱体体积计算器',
    metaDescription: '在线圆柱体体积计算器，支持输入半径或直径与高度，快速计算圆柱水桶、油桶容量升数与立方米。',
    keywords: '圆柱体体积计算器, 圆柱体积公式, 圆柱水箱容积计算升, 圆柱直径算体积, 圆柱形桶容积',
    shortTagline: '根据底面半径（或直径）与高，计算圆柱形水桶、立式储罐及圆柱管道的体积。',
    howToCalculate: [
      '测量底面半径（r）或直径（d）以及圆柱垂直高度（h）。',
      '计算底面积乘以高：V = πr²h（或使用直径公式 V = πd²h / 4）。',
      '将立方米体积乘以1000快速换算为公制升数。',
    ],
    formulaHtml: 'V = π · r² · h',
    formulaNote: 'r 为底面半径，h 为高，π ≈ 3.14159265。表面积公式为 A = 2πr(r + h)。',
    practicalExamples: [
      {
        title: '立式圆柱储水罐',
        desc: '底面直径2米、高3米的圆柱形水塔容量为 9.42 立方米，可储存约 9,425 升水。',
      },
      {
        title: '工业标准油桶',
        desc: '标准200升工业油桶内径与高度容积校验与残液计量。',
      },
      {
        title: '圆柱形粮仓仓容',
        desc: '农业散装粮食仓储圆柱筒仓容积与吨位换算。',
      },
    ],
    faqs: [
      {
        question: '圆柱体体积的公式是什么？',
        answer: 'V = π · r² · h（r 为底面半径，h 为高）。',
      },
      {
        question: '用直径（d）直接怎么算圆柱体积？',
        answer: '公式为 V = (π · d² · h) / 4。',
      },
      {
        question: '圆柱形水桶能装多少升水？',
        answer: '计算立方米体积后乘以 1,000 即得升数。',
      },
    ],
    relatedChineseSlugs: [
      'pipe-volume-calculator',
      'cone-volume-calculator',
      'capsule-volume-calculator',
    ],
    inputLabels: {
      radius: '底面半径',
      height: '高度',
    },
  },

  'sphere-volume-calculator': {
    slug: 'sphere-volume-calculator',
    englishSlug: 'sphere-volume-calculator',
    shapeId: 'sphere',
    shapeName: '球体',
    categoryLabel: '旋转曲面立体',
    title: '球体体积计算器',
    h1: '球体体积计算器',
    metaDescription: '在线球体体积计算器，输入球半径或直径快速计算球体容积、表面积及半球容量，附带详细计算步骤。',
    keywords: '球体体积计算器, 球的体积公式, 球体直径算体积, 球体容积计算, 半球体体积公式',
    shortTagline: '输入球半径或直径，即时求解球体体积、表面积以及半球容器的水容量。',
    howToCalculate: [
      '测定球体半径（r）或直径（d）。若测出周长（C），则半径 r = C / (2π)。',
      '代入球体公式计算：V = 4/3 × π × r³。',
      '若使用直径，则直接计算：V = πd³ / 6。',
    ],
    formulaHtml: 'V = ⁴⁄₃ · π · r³',
    formulaNote: 'r 为球半径。球表面积计算公式为 A = 4πr²。',
    practicalExamples: [
      {
        title: '球形储气罐',
        desc: '化工园区直径10米的高压天然气球罐内部几何容积为约 523.6 立方米。',
      },
      {
        title: '轴承钢球与球磨机球介质',
        desc: '机械制造中金属球体体积与理论重量的精准核算。',
      },
      {
        title: '半球形穹顶水池',
        desc: '景观半球形喷泉水池与半球容器储水量计算。',
      },
    ],
    faqs: [
      {
        question: '球体体积的计算公式是什么？',
        answer: 'V = 4/3 · π · r³（r 为半径）。',
      },
      {
        question: '已知直径如何求球体体积？',
        answer: '直接使用公式 V = (π · d³) / 6。',
      },
      {
        question: '半球的体积怎么算？',
        answer: '完整球体体积除以二：V = 2/3 · π · r³。',
      },
    ],
    relatedChineseSlugs: [
      'spherical-cap-volume-calculator',
      'ellipsoid-volume-calculator',
      'cylinder-volume-calculator',
    ],
    inputLabels: {
      radius: '球体半径',
    },
  },

  'cone-volume-calculator': {
    slug: 'cone-volume-calculator',
    englishSlug: 'cone-volume-calculator',
    shapeId: 'cone',
    shapeName: '圆锥体',
    categoryLabel: '锥体立体',
    title: '圆锥体积计算器',
    h1: '圆锥体积计算器',
    metaDescription: '在线圆锥体积计算器，输入底面半径与垂高或母线长，即时计算圆锥体容积与表面积。',
    keywords: '圆锥体积计算器, 圆锥体体积公式, 圆锥容积升, 母线算圆锥高度',
    shortTagline: '根据底面半径与高计算圆锥体积，支持由斜高（母线）推算垂直高度。',
    howToCalculate: [
      '测定圆锥底面半径（r）与垂直高度（h）。',
      '若已知母线长（s），由勾股定理求高：h = √(s² - r²)。',
      '代入圆锥公式：V = 1/3 × π × r² × h。',
    ],
    formulaHtml: 'V = ⅓ · π · r² · h',
    formulaNote: 'r 为底面半径，h 为垂直高。母线 s = √(r² + h²)。',
    practicalExamples: [
      {
        title: '砂石料堆方量',
        desc: '工程现场散堆呈圆锥形的沙堆、碎石堆实际立方数（m³）估算。',
      },
      {
        title: '漏斗与下料斗',
        desc: '工业漏斗与食品加料漏斗盛装粉体或液体的容积计算。',
      },
      {
        title: '圆锥形冰淇淋筒',
        desc: '食品包装与模具设计中圆锥内容积核算。',
      },
    ],
    faqs: [
      {
        question: '圆锥体积的计算公式是什么？',
        answer: 'V = 1/3 · π · r² · h（底面积 × 高 ÷ 3）。',
      },
      {
        question: '圆锥与圆柱体积关系如何？',
        answer: '等底等高的圆锥体积恰好是圆柱体积的三分之一（1/3）。',
      },
      {
        question: '已知母线（l）与底面半径怎么求高？',
        answer: '利用勾股定理计算：h = √(l² - r²)。',
      },
    ],
    relatedChineseSlugs: [
      'cylinder-volume-calculator',
      'conical-frustum-volume-calculator',
      'square-pyramid-volume-calculator',
    ],
    inputLabels: {
      radius: '底面半径',
      height: '垂直高度',
    },
  },

  'capsule-volume-calculator': {
    slug: 'capsule-volume-calculator',
    englishSlug: 'capsule-volume-calculator',
    shapeId: 'capsule',
    shapeName: '胶囊体',
    categoryLabel: '组合工程立体',
    title: '胶囊体积计算器',
    h1: '胶囊体积计算器',
    metaDescription: '在线胶囊体体积计算器，由圆柱中段与两端半球组合而成，适用于药用胶囊装量与卧式储气罐容积计算。',
    keywords: '胶囊体积计算器, 胶囊罐容积公式, 储气罐体积计算, 胶囊体容积',
    shortTagline: '快速计算两端带半球封头的圆柱胶囊体、储气罐与医药胶囊颗粒的理论容积。',
    howToCalculate: [
      '确定圆柱截面半径（r）与圆柱段长度（a）。',
      '若只知总长（L），则圆柱段长为 a = L - 2r。',
      '将圆柱体积与两端半球（合成一个完整球）相加：V = πr²(4/3 r + a)。',
    ],
    formulaHtml: 'V = π · r² · (⁴⁄₃r + a)',
    formulaNote: 'r 为半径，a 为圆柱段长度。总体长 L = a + 2r。',
    practicalExamples: [
      {
        title: '医药胶囊药粉充填',
        desc: '药剂学标准00号与0号胶囊内部有效容积与粉末充填量计算。',
      },
      {
        title: '卧式LPG液化气储罐',
        desc: '两端半球封头的高压气体容器整体储量与立米数核算。',
      },
      {
        title: '潜水器与耐压舱体',
        desc: '深海勘探耐压壳体排水量与内部可用空间计算。',
      },
    ],
    faqs: [
      {
        question: '胶囊体的体积计算公式是什么？',
        answer: 'V = π · r² · (4/3 r + a)（其中 a 为圆柱段长，r 为半径）。',
      },
      {
        question: '已知总长（L）如何求圆柱段长？',
        answer: '总长减去两端半球直径即可：a = L - 2r。',
      },
      {
        question: '胶囊体体积在工程中有哪些实际应用？',
        answer: '主要应用于药用胶囊颗粒充填量估算以及工业卧式压力储罐（子弹罐）的设计。',
      },
    ],
    relatedChineseSlugs: [
      'cylinder-volume-calculator',
      'sphere-volume-calculator',
      'horizontal-tank-volume-calculator',
    ],
    inputLabels: {
      radius: '截面半径',
      cylHeight: '圆柱段长度',
    },
  },

  'spherical-cap-volume-calculator': {
    slug: 'spherical-cap-volume-calculator',
    englishSlug: 'spherical-cap-volume-calculator',
    shapeId: 'spherical_cap',
    shapeName: '球冠・穹顶',
    categoryLabel: '曲面截体',
    title: '球冠体积计算器',
    h1: '球冠体积计算器',
    metaDescription: '在线球冠与穹顶体积计算器，输入底面半径与拱高，快速计算浅碗、穹顶建筑内部容积与球缺空间。',
    keywords: '球冠体积计算器, 球缺体积公式, 穹顶空间体积, 浅碗容积计算',
    shortTagline: '精确计算球体被平面截取部分（球缺/球冠）、天文台穹顶与浅碗容器的容积。',
    howToCalculate: [
      '测定球冠底面圆半径（r）与垂直拱高（h）。',
      '若已知原球体母球半径（R），则 h 与 r 满足 R = (r² + h²) / (2h)。',
      '代入球缺公式：V = (πh / 6)(3r² + h²)。',
    ],
    formulaHtml: 'V = ⅙ · π · h · (3r² + h²)',
    formulaNote: 'r 为球冠底面半径，h 为球冠高度。母球半径为 R = (r² + h²) / (2h)。',
    practicalExamples: [
      {
        title: '球形建筑穹顶',
        desc: '体育馆、天文台或温室半球穹顶内部空气体积与空调冷负荷计算。',
      },
      {
        title: '浅碗与凹面透镜容器',
        desc: '曲面凹槽器具、水盘及工业反射镜腔体的容积测量。',
      },
      {
        title: '球形封头部分容积',
        desc: '压力容器碟形或球形封头末端盛装液体的体积测定。',
      },
    ],
    faqs: [
      {
        question: '球冠（球缺）体积的计算公式是什么？',
        answer: 'V = (π · h / 6)(3r² + h²)（r 为底面半径，h 为球冠高度）。',
      },
      {
        question: '建筑穹顶的内部容积如何计算？',
        answer: '测量地面跨度得出底面半径 r，测量顶端垂高 h，直接代入球冠公式即可。`',
      },
      {
        question: '球冠与半球有什么区别？',
        answer: '半球是高度与半径完全相等（h = r）的特例，其余任何高度截取的球体部分均为一般球冠。',
      },
    ],
    relatedChineseSlugs: [
      'sphere-volume-calculator',
      'conical-frustum-volume-calculator',
      'ellipsoid-volume-calculator',
    ],
    inputLabels: {
      baseRadius: '底面圆半径',
      height: '球冠高度',
    },
  },

  'conical-frustum-volume-calculator': {
    slug: 'conical-frustum-volume-calculator',
    englishSlug: 'conical-frustum-volume-calculator',
    shapeId: 'conical_frustum',
    shapeName: '圆台・水桶',
    categoryLabel: '锥体立体',
    title: '圆台体积计算器',
    h1: '圆台体积计算器',
    metaDescription: '在线圆台体积计算器，输入上底半径、下底半径与高度，即时计算平底水桶、花盆容积与台体体积。',
    keywords: '圆台体积计算器, 水桶容积计算升, 圆台体积公式, 截头圆锥体积',
    shortTagline: '计算切头圆锥（圆台）、标准手提水桶、花盆及喇叭口容器的容积与升数。',
    howToCalculate: [
      '测量顶面半径（r1）、底面半径（r2）以及圆台垂直高度（h）。',
      '计算底面积平方和项与交叉乘积项：r1² + r1×r2 + r2²。',
      '代入圆台公式：V = (πh / 3)(r1² + r1×r2 + r2²)。',
    ],
    formulaHtml: 'V = ⅓ · π · h · (r₁² + r₁r₂ + r₂²)',
    formulaNote: 'r1 与 r2 分别为顶底两面半径，h 为垂直高。',
    practicalExamples: [
      {
        title: '家用手提塑料水桶',
        desc: '上口半径14cm、底面半径10cm、高25cm的圆台水桶容量约为 11.4 升。',
      },
      {
        title: '园艺种植花盆',
        desc: '倒圆台形花盆所需装填营养土升数与肥料配比计算。',
      },
      {
        title: '工业锥形搅拌缸',
        desc: '底部收窄的化工反应罐与食品配料槽容积校准。',
      },
    ],
    faqs: [
      {
        question: '圆台（截头圆锥）体积的计算公式是什么？',
        answer: 'V = (π · h / 3)(r1² + r1 · r2 + r2²)。',
      },
      {
        question: '怎样计算水桶容量是多少升？',
        answer: '以厘米（cm）为单位代入计算出立方厘米（cm³），再除以 1,000 即得升数。',
      },
      {
        question: '可以用直径直接计算圆台体积吗？',
        answer: '可以，公式为 V = (π · h / 12)(d1² + d1 · d2 + d2²)。',
      },
    ],
    relatedChineseSlugs: [
      'cone-volume-calculator',
      'cylinder-volume-calculator',
      'trapezoidal-prism-volume-calculator',
    ],
    inputLabels: {
      topRadius: '顶面半径',
      bottomRadius: '底面半径',
      height: '垂直高度',
    },
  },

  'ellipsoid-volume-calculator': {
    slug: 'ellipsoid-volume-calculator',
    englishSlug: 'ellipsoid-volume-calculator',
    shapeId: 'ellipsoid',
    shapeName: '椭球体',
    categoryLabel: '旋转曲面立体',
    title: '椭球体体积计算器',
    h1: '椭球体体积计算器',
    metaDescription: '在线椭球体体积计算器，输入三轴半轴长快速计算椭球容积、旋转椭球体及橄榄球形物体的体积。',
    keywords: '椭球体体积计算器, 椭球体积公式, 橄榄球体积计算, 旋转椭球体容积',
    shortTagline: '输入长、宽、高三个方向的半轴长度，求解三轴不规则椭球体及旋转椭球体的容积。',
    howToCalculate: [
      '测定椭球体在 X、Y、Z 三个互相垂直方向的总轴长。',
      '各轴总长除以 2 得到半轴长度 a、b、c。',
      '代入公式计算：V = 4/3 × π × a × b × c。',
    ],
    formulaHtml: 'V = ⁴⁄₃ · π · a · b · c',
    formulaNote: 'a、b、c 为椭球体的三个半轴长度。若 a = b = c 则退化为球体。',
    practicalExamples: [
      {
        title: '橄榄球与西瓜体积',
        desc: '对称旋转椭球体形瓜果、体育用球的排水法容积验证与密度测量。',
      },
      {
        title: '地球大地测量学近似',
        desc: '地球扁椭球体（WGS84参考系）的理论体积与天体模型计算。',
      },
      {
        title: '椭圆封头储罐',
        desc: '工业压力容器两端标准椭圆封头容积校核。',
      },
    ],
    faqs: [
      {
        question: '椭球体的体积计算公式是什么？',
        answer: 'V = 4/3 · π · a · b · c（其中 a、b、c 为三半轴长）。',
      },
      {
        question: '球体与椭球体有什么区别？',
        answer: '球体的三个半轴半径完全相等（a = b = c），而椭球体各轴长通常不同。',
      },
      {
        question: '如何测量椭圆形物体的半轴？',
        answer: '测量全长、全宽、全高三个总尺寸，分别除以 2 得到对应的半轴长 a、b、c。',
      },
    ],
    relatedChineseSlugs: [
      'sphere-volume-calculator',
      'capsule-volume-calculator',
      'cylinder-volume-calculator',
    ],
    inputLabels: {
      a: '半轴 a',
      b: '半轴 b',
      c: '半轴 c',
    },
  },

  'square-pyramid-volume-calculator': {
    slug: 'square-pyramid-volume-calculator',
    englishSlug: 'square-pyramid-volume-calculator',
    shapeId: 'square_pyramid',
    shapeName: '正四棱锥',
    categoryLabel: '锥体立体',
    title: '正四棱锥体积计算器',
    h1: '正四棱锥体积计算器',
    metaDescription: '在线正四棱锥体积计算器，输入底面正方形边长与垂直高或斜高，即时求解金字塔形立体体积与表面积。',
    keywords: '正四棱锥体积计算器, 金字塔体积公式, 四棱锥容积, 锥体体积计算',
    shortTagline: '基于正方形底边长与垂直高，计算埃及金字塔形建筑及锥形顶盖的体积。',
    howToCalculate: [
      '测量底面正方形的一边长度（a）与顶点到地面的垂高（h）。',
      '若已知侧面斜高（s），由勾股定理求垂直高：h = √(s² - (a/2)²)。',
      '代入正四棱锥公式：V = 1/3 × a² × h。',
    ],
    formulaHtml: 'V = ⅓ · a² · h',
    formulaNote: 'a 为底边长，h 为垂直高度。侧面斜高为 s = √(h² + (a/2)²)。',
    practicalExamples: [
      {
        title: '金字塔建筑体量',
        desc: '埃及吉萨大金字塔等古代巨石方锥建筑的原始石料体积估算。',
      },
      {
        title: '四坡屋顶尖顶阁楼',
        desc: '住宅正方形尖顶阁楼内部可利用空间与空气流通体积测定。',
      },
      {
        title: '金字塔形包装盒',
        desc: '精品巧克力、香水及礼品异形包装盒容量设计。',
      },
    ],
    faqs: [
      {
        question: '正四棱锥体积的计算公式是什么？',
        answer: 'V = 1/3 · a² · h（a 为底边长，h 为垂直高度）。',
      },
      {
        question: '已知侧面斜高（s）怎么求垂直高？',
        answer: '通过公式 h = √(s² - (a/2)²) 计算得出。',
      },
      {
        question: '为什么棱锥体积要乘以三分之一（1/3）？',
        answer: '因为等底等高的棱柱内部刚好可以无缝容纳三个完全等体积的四棱锥。',
      },
    ],
    relatedChineseSlugs: [
      'rectangular-pyramid-volume-calculator',
      'cone-volume-calculator',
      'cube-volume-calculator',
    ],
    inputLabels: {
      baseEdge: '底边长',
      height: '垂直高度',
    },
  },

  'rectangular-pyramid-volume-calculator': {
    slug: 'rectangular-pyramid-volume-calculator',
    englishSlug: 'rectangular-pyramid-volume-calculator',
    shapeId: 'rectangular_pyramid',
    shapeName: '长方四棱锥',
    categoryLabel: '锥体立体',
    title: '长方四棱锥体积计算器',
    h1: '长方四棱锥体积计算器',
    metaDescription: '在线长方四棱锥体积计算器，底面为矩形长宽，输入底长、底宽与高度快速计算四坡屋顶与漏斗容积。',
    keywords: '长方四棱锥体积计算器, 矩形底四棱锥公式, 坡屋顶阁楼体积, 四棱锥立方数',
    shortTagline: '以矩形为底面的四棱锥体积计算，常用于四坡屋顶空间核算与下料槽体容积。',
    howToCalculate: [
      '测定底面矩形的长（l）和宽（w）。',
      '测定顶点到底面的垂直高度（h）。',
      '代入矩形四棱锥公式：V = 1/3 × l × w × h。',
    ],
    formulaHtml: 'V = ⅓ · l · w · h',
    formulaNote: 'l 为底面长度，w 为底面宽度，h 为垂直高度。',
    practicalExamples: [
      {
        title: '四坡屋顶阁楼容积',
        desc: '住宅坡屋顶内部阁楼总空气体积与隔热保温材料需求量计算。',
      },
      {
        title: '方形矿石漏斗',
        desc: '工业进料漏斗四棱锥底部收纳矿石物料的额定容积校验。',
      },
      {
        title: '建筑异形采光顶',
        desc: '商业中庭矩形棱锥玻璃采光顶罩体空间体积。',
      },
    ],
    faqs: [
      {
        question: '底面为长方形的四棱锥体积公式是什么？',
        answer: 'V = 1/3 · l · w · h（长 × 宽 × 高 ÷ 3）。',
      },
      {
        question: '四坡屋顶阁楼需要测量哪些尺寸？',
        answer: '需要测量底面楼板的长、宽，以及屋脊顶端到底面的垂直高度。',
      },
      {
        question: '结果支持哪些计量单位？',
        answer: '支持立方米（m³）、升（L）、立方厘米（cm³）及英制立方英尺等单位。',
      },
    ],
    relatedChineseSlugs: [
      'square-pyramid-volume-calculator',
      'rectangular-prism-volume-calculator',
      'cone-volume-calculator',
    ],
    inputLabels: {
      length: '底面长度',
      width: '底面宽度',
      height: '垂直高度',
    },
  },

  'triangular-prism-volume-calculator': {
    slug: 'triangular-prism-volume-calculator',
    englishSlug: 'triangular-prism-volume-calculator',
    shapeId: 'triangular_prism',
    shapeName: '三棱柱・三角帐篷',
    categoryLabel: '柱体立体',
    title: '三棱柱体积计算器',
    h1: '三棱柱体积计算器',
    metaDescription: '在线三棱柱体积计算器，输入三角形底宽、底高与柱体长度，即时计算三角屋顶与人字帐篷容积。',
    keywords: '三棱柱体积计算器, 三棱柱体积公式, 三角帐篷容积, 楔形体体积',
    shortTagline: '根据三角形底面底宽、垂直高与棱柱长度，快速计算三角柱及人字双坡屋顶的容积。',
    howToCalculate: [
      '测定底面三角形的底边宽度（b）与底面三角形的垂直高度（h_triangle）。',
      '测定棱柱总长度（L）。',
      '底面积乘以柱长计算体积：V = (1/2 × b × h_triangle) × L。',
    ],
    formulaHtml: 'V = ½ · b · h_Δ · L',
    formulaNote: 'b 为底边宽，h_Δ 为三角形高，L 为棱柱长度。底面积 A = 1/2 · b · h_Δ。',
    practicalExamples: [
      {
        title: '人字双坡帐篷容积',
        desc: '露营三角帐篷底宽2米、中心高1.5米、长3米，内部空气容量为 4.5 立方米（4500升）。',
      },
      {
        title: '双坡屋顶结构木方',
        desc: '仓库双坡尖顶内部空间与空调通风量测算。',
      },
      {
        title: '三棱镜光学玻璃',
        desc: '高精度光学分光玻璃棱镜原料质量与体积核算。',
      },
    ],
    faqs: [
      {
        question: '三棱柱体积的计算公式是什么？',
        answer: 'V = 1/2 · b · h_Δ · L（底面三角形面积 × 棱柱长度）。',
      },
      {
        question: '如果是正三角形底面的三棱柱怎么算？',
        answer: '正三角形边长为 a 时，公式为 V = (√3 / 4) · a² · L。',
      },
      {
        question: '人字形帐篷的容积怎么算？',
        answer: '入口底宽 × 中心高度 ÷ 2 × 帐篷纵深长度。',
      },
    ],
    relatedChineseSlugs: [
      'trapezoidal-prism-volume-calculator',
      'rectangular-prism-volume-calculator',
      'cube-volume-calculator',
    ],
    inputLabels: {
      base: '底边宽度',
      height: '三角形高度',
      length: '柱体长度',
    },
  },

  'pipe-volume-calculator': {
    slug: 'pipe-volume-calculator',
    englishSlug: 'pipe-volume-calculator',
    shapeId: 'hollow_cylinder',
    shapeName: '管道・空心圆柱',
    categoryLabel: '工程管道管件',
    title: '管道水容量计算器',
    h1: '管道水容量计算器',
    metaDescription: '在线管道水容量与空心圆柱体积计算器，输入内外径与管长，快速计算管道内水容积升数及管壁金属体积。',
    keywords: '管道水容量计算器, 空心圆柱体积公式, 水管存水量升, 管道容积计算',
    shortTagline: '计算管道内液体通过容积以及空心圆柱管壁实体材质的体积与重量。',
    howToCalculate: [
      '测定管道内半径（r_in）、外半径（R_out）与管道长度（L）。',
      '内含液体容积为内圆柱体积：V_inner = π × r_in² × L。',
      '管壁材料实体体积为内外体积之差：V_wall = π × (R_out² - r_in²) × L。',
    ],
    formulaHtml: 'V_内 = π · r_内² · L',
    formulaNote: 'r_内 为内半径，R_外 为外半径，L 为管长。管壁材料体积为 V_壁 = π(R_外² - r_内²)L。',
    practicalExamples: [
      {
        title: '给排水管道存水量',
        desc: '内径50毫米、长10米给水管内部储水量为 19.63 升，可快速核算排空水耗。',
      },
      {
        title: '钢管管壁钢材用量',
        desc: '建筑用无缝钢管截面钢料立方数与理论吨位计算。',
      },
      {
        title: '工业套管换热器',
        desc: '同轴双层换热管内外层流体通道截面容量评估。',
      },
    ],
    faqs: [
      {
        question: '如何计算管道中能容纳多少升液体？',
        answer: '利用内半径 r_内 与长度 L 计算：V = π · r_内² · L，再乘以单位换算为升。',
      },
      {
        question: '管道自身管壁材料的体积公式是什么？',
        answer: 'V = π · (R_外² - r_内²) · L（外圆柱体积减内圆柱体积）。',
      },
      {
        question: '内径50mm、长10米水管能装多少水？',
        answer: '内半径为 2.5 厘米，代入公式算得容积约为 19.6 升。',
      },
    ],
    relatedChineseSlugs: [
      'cylinder-volume-calculator',
      'torus-volume-calculator',
      'horizontal-tank-volume-calculator',
    ],
    inputLabels: {
      outerRadius: '管道外半径',
      innerRadius: '管道内半径',
      height: '管道长度',
    },
  },

  'torus-volume-calculator': {
    slug: 'torus-volume-calculator',
    englishSlug: 'torus-volume-calculator',
    shapeId: 'torus',
    shapeName: '圆环体・O型圈',
    categoryLabel: '旋转曲面立体',
    title: '圆环体体积计算器',
    h1: '圆环体体积计算器',
    metaDescription: '在线圆环体与O型密封圈体积计算器，输入大半径与小半径，即时计算甜甜圈形圆环体积与表面积。',
    keywords: '圆环体体积计算器, O型圈体积公式, 甜甜圈体积计算, 环形体容积',
    shortTagline: '基于环中心大半径与管身小半径，求解圆环体（甜甜圈）与橡胶O型密封圈体积。',
    howToCalculate: [
      '测定圆环中心线到环体中心的大半径（R）。',
      '测定圆环管身自身的截面小半径（r）。',
      '代入圆环体公式计算：V = 2π² × R × r²。',
    ],
    formulaHtml: 'V = 2π² · R · r²',
    formulaNote: 'R 为主半径（环心至截面心），r 为管截面半径。表面积公式为 A = 4π²Rr。',
    practicalExamples: [
      {
        title: '机械橡胶O型密封圈',
        desc: '液压系统耐油氟胶O型圈材料用量、胶料称重与模具收缩率计算。',
      },
      {
        title: '救生圈与游泳圈充气量',
        desc: '环形浮力装置安全充气容积与水面浮力测定。',
      },
      {
        title: '烘焙甜甜圈面团体积',
        desc: '食品烘焙中圆环形面包模具膨胀系数与容量评估。',
      },
    ],
    faqs: [
      {
        question: '圆环体（环形体）体积的计算公式是什么？',
        answer: 'V = 2 · π² · R · r²（R 为大半径，r 为管身小半径）。',
      },
      {
        question: '已知O型圈内径（di）与线径（w）怎么求体积？`',
        answer: '小半径 r = w / 2，大半径 R = (di + w) / 2，代入圆环体公式即可。',
      },
      {
        question: '圆环体的表面积公式是什么？',
        answer: '表面积为 A = 4 · π² · R · r。',
      },
    ],
    relatedChineseSlugs: [
      'pipe-volume-calculator',
      'cylinder-volume-calculator',
      'sphere-volume-calculator',
    ],
    inputLabels: {
      majorRadius: '大半径 R',
      minorRadius: '小半径 r',
    },
  },

  'trapezoidal-prism-volume-calculator': {
    slug: 'trapezoidal-prism-volume-calculator',
    englishSlug: 'trapezoidal-prism-volume-calculator',
    shapeId: 'trapezoidal_prism',
    shapeName: '梯形柱・水渠土方',
    categoryLabel: '工程土方开挖',
    title: '梯形柱体积计算器',
    h1: '梯形柱体积计算器',
    metaDescription: '在线梯形柱体积与水沟土方量计算器，输入顶宽、底宽、深度与沟长，快速计算排水沟挖土方立方米。',
    keywords: '梯形柱体积计算器, 水沟土方量计算, 水渠容积升, 梯形断面土方',
    shortTagline: '快速计算带有放坡坡度的水沟、排水渠挖土方立方数以及牲畜饮水槽的容积。',
    howToCalculate: [
      '测量梯形截面的顶面开口宽度（a）与底面宽度（b）。',
      '测量垂直深度（h）与水渠或管沟总长度（L）。',
      '截面积乘以沟长计算体积：V = ((a + b) / 2) × h × L。',
    ],
    formulaHtml: 'V = ½ · (a + b) · h · L',
    formulaNote: 'a 为顶宽，b 为底宽，h 为截面高（深度），L 为柱体长度。',
    practicalExamples: [
      {
        title: '农田灌溉明渠土方',
        desc: '顶宽1.5米、底宽0.8米、深0.6米、长100米的水渠土方开挖量为 69 立方米。',
      },
      {
        title: '牧场梯形长条饮水槽',
        desc: '养殖场长条形饮水槽盛水量与清洗排空容量测定。',
      },
      {
        title: '道路边沟排水能力',
        desc: '公路防汛梯形边沟最大过水容积与暴雨排涝负荷核算。',
      },
    ],
    faqs: [
      {
        question: '梯形柱体积的计算公式是什么？',
        answer: 'V = ((a + b) / 2) · h · L（梯形截面积 × 柱长）。',
      },
      {
        question: '如何计算带放坡梯形沟的挖土方量（m³）？',
        answer: '全部尺寸以米（m）为单位代入公式计算，得出的数值即为土方方量（立方米）。',
      },
      {
        question: '梯形给水槽的水量怎么算成升？',
        answer: '以厘米（cm）计算出体积（cm³）后除以 1,000 即得升数。',
      },
    ],
    relatedChineseSlugs: [
      'triangular-prism-volume-calculator',
      'rectangular-prism-volume-calculator',
      'conical-frustum-volume-calculator',
    ],
    inputLabels: {
      topWidth: '顶面宽度 a',
      bottomWidth: '底面宽度 b',
      depth: '截面深度 h',
      length: '总长度 L',
    },
  },

  'horizontal-tank-volume-calculator': {
    slug: 'horizontal-tank-volume-calculator',
    englishSlug: 'horizontal-tank-volume-calculator',
    shapeId: 'horizontal_tank_fill',
    shapeName: '卧式储罐・油罐残量',
    categoryLabel: '工程储罐液位',
    title: '卧式油罐残量计算器',
    h1: '卧式油罐残量计算器',
    metaDescription: '在线卧式圆柱储罐残量计算器，输入储罐半径、长度及量油尺液位深度，精准换算油罐剩余容积与升数。',
    keywords: '卧式油罐残量计算器, 圆柱卧罐液位算容积, 油罐量油尺换算升, 卧式储罐容积',
    shortTagline: '基于量油尺探入的液位深度，精确计算未满卧式圆柱油罐及化工储罐的存液量。',
    howToCalculate: [
      '测定卧式罐体半径（r）、总长度（L）以及液体垂直浸没深度（h）。',
      '根据圆形截面弓形积分公式计算截面液体面积。',
      '截面积乘以储罐总长得出体积，并换算为公制升数或加仑。',
    ],
    formulaHtml: 'V = [r²\\arccos(\\frac{r-h}{r}) - (r-h)\\sqrt{2rh - h²}] \\cdot L',
    formulaNote: 'r 为储罐半径，h 为液位高度，L 为长度。公式中 arccos 取弧度制。',
    practicalExamples: [
      {
        title: '柴油发电机卧式日用油箱',
        desc: '通过量油尺快速测定半空柴油罐内剩余柴油升数，保障备用供电不间断。',
      },
      {
        title: '加油站埋地卧式油罐',
        desc: '加油站定期探尺盘点地下储油罐油品库存。',
      },
      {
        title: '化工厂卧式甲醇原料储罐',
        desc: '原料进出库日结与液位变送器读数标定。',
      },
    ],
    faqs: [
      {
        question: '未注满的卧式圆柱储罐液体容积如何计算？',
        answer: '利用公式 V = [r² · arccos((r-h)/r) - (r-h)√(2rh - h²)] · L（arccos 为弧度制）。',
      },
      {
        question: '为什么量油尺读数与剩余容量不成正比？',
        answer: '因为圆形截面中间宽两端窄，单位高度在半满时包含的液体体积远大于底部或顶部。',
      },
      {
        question: '量油尺深度如何快速换算成升？',
        answer: '尺寸以厘米代入公式计算出立方厘米（cm³），再除以 1,000 即得剩余升数。',
      },
    ],
    relatedChineseSlugs: [
      'cylinder-volume-calculator',
      'capsule-volume-calculator',
      'pipe-volume-calculator',
    ],
    inputLabels: {
      radius: '储罐半径 r',
      length: '储罐长度 L',
      fillDepth: '液位深度 h',
    },
  },
};
