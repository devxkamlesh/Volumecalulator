export interface JapaneseFaq {
  question: string;
  answer: string;
}

export interface JapanesePracticalExample {
  title: string;
  desc: string;
}

export interface JapaneseToolDetail {
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
  practicalExamples: JapanesePracticalExample[];
  faqs: JapaneseFaq[];
  relatedJapaneseSlugs: string[];
  inputLabels: Record<string, string>;
}

export const JAPANESE_TOOLS: Record<string, JapaneseToolDetail> = {
  'cube-volume-calculator': {
    slug: 'cube-volume-calculator',
    englishSlug: 'cube-volume-calculator',
    shapeId: 'cube',
    shapeName: '立方体',
    categoryLabel: '基本立体 3D',
    title: '立方体の体積計算機',
    h1: '立方体の体積計算機',
    metaDescription: '立方体の一辺の長さから体積と表面積を瞬時に計算。立方メートル（m³）、リットル、立方センチメートル（cm³）への換算と計算手順付き。',
    keywords: '立方体 体積 計算, 立方体の体積の求め方, 立方体 体積 公式, 立方体 体積 リットル, 一辺から立方体の体積',
    shortTagline: '一辺の長さから立方体コンテナ、ダンボール箱、サイコロの体積と容積を計算します。',
    howToCalculate: [
      '立方体の一辺の長さ（a）を測定します。立方体はすべての面が合同な正方形であるため、縦・横・高さは同一です。',
      '一辺の長さを3回掛け合わせます：V = a × a × a = a³。',
      '算出された立方単位を、リットル（L）や立方メートル（m³）などの必要な単位に換算します。',
    ],
    formulaHtml: 'V = a³',
    formulaNote: 'a は立方体の一辺の長さです。全体の表面積は A = 6a² で求められます。',
    practicalExamples: [
      {
        title: 'ダンボール・保管箱',
        desc: '一辺50cmの立方体保管箱は 50 × 50 × 50 = 125,000 cm³、つまり正確に125リットルの荷物を収容できます。',
      },
      {
        title: 'コンクリート基礎ブロック',
        desc: '土木建築工事における正方形構造基礎の打設コンクリート必要立米数（m³）の算出。',
      },
      {
        title: 'キューブ水槽の水量',
        desc: 'アクアリウムやテラリウム用キューブ型水槽の水量（リットル数）の精密測定。',
      },
    ],
    faqs: [
      {
        question: '立方体の一辺の長さから体積を求める公式は？',
        answer: '一辺の長さを a とすると、V = a³（一辺 × 一辺 × 一辺）で計算します。',
      },
      {
        question: '表面積（S）から体積を求める方法は？',
        answer: '1面の面積から一辺 a = √(S / 6) を求め、V = a³ に代入します。',
      },
      {
        question: '一辺1メートルの立方体に入る水の量は何リットル？',
        answer: '容積 1 m³ はちょうど 1,000リットル に相当します。',
      },
    ],
    relatedJapaneseSlugs: [
      'rectangular-prism-volume-calculator',
      'cylinder-volume-calculator',
      'sphere-volume-calculator',
    ],
    inputLabels: {
      edge: '一辺の長さ',
    },
  },

  'rectangular-prism-volume-calculator': {
    slug: 'rectangular-prism-volume-calculator',
    englishSlug: 'box-volume-calculator',
    shapeId: 'rectangular_prism',
    shapeName: '直方体・箱',
    categoryLabel: '基本立体 3D',
    title: '直方体・箱の体積計算機',
    h1: '直方体・箱の体積計算機',
    metaDescription: '直方体や段ボール箱の縦・横・高さから体積と容積を計算。m³、リットル、cm³への換算と配送サイズ算出に対応。',
    keywords: '直方体 体積 計算, 箱の体積 計算, 直方体の体積 公式, ダンボール 容積 m3, 直方体 容積 リットル',
    shortTagline: '縦・横・高さの3辺から直方体、ダンボール箱、配送荷物の容積を素早く求めます。',
    howToCalculate: [
      '直方体の縦の長さ（l）、横の幅（w）、高さ（h）を測定します。',
      '3つの寸法を掛け合わせます：V = l × w × h。',
      '得られた容積をリットル、立方メートル、または立方フィートに換算します。',
    ],
    formulaHtml: 'V = l × w × h',
    formulaNote: 'l は縦、w は横、h は高さを表します。表面積は A = 2(lw + lh + wh) です。',
    practicalExamples: [
      {
        title: '宅配便・段ボール箱',
        desc: '縦40cm、横30cm、高さ20cmの箱の容積は 40 × 30 × 20 = 24,000 cm³（24リットル、0.024 m³）です。',
      },
      {
        title: '海上コンテナ輸送（CBM）',
        desc: '国際物流において長さ、幅、高さをメートル単位で測定し、立米容積（CBM）を算出。',
      },
      {
        title: '直方体水槽・貯水タンク',
        desc: '水槽の内寸から満水時の水重量および水量（L）を正確に計算。',
      },
    ],
    faqs: [
      {
        question: '直方体の体積を求める公式は？',
        answer: 'V = 縦 × 横 × 高さ（V = l × w × h）です。',
      },
      {
        question: '段ボール箱の容積（m³）を計算する方法は？',
        answer: '縦・横・高さをセンチ（cm）で掛けて、1,000,000 で割ります。',
      },
      {
        question: '直方体の体積をリットルに換算するには？',
        answer: '立方センチメートル（cm³）の値を 1,000 で割ります。',
      },
    ],
    relatedJapaneseSlugs: [
      'cube-volume-calculator',
      'cylinder-volume-calculator',
      'trapezoidal-prism-volume-calculator',
    ],
    inputLabels: {
      length: '縦・長さ',
      width: '横・幅',
      height: '高さ',
    },
  },

  'cylinder-volume-calculator': {
    slug: 'cylinder-volume-calculator',
    englishSlug: 'cylinder-volume-calculator',
    shapeId: 'cylinder',
    shapeName: '円柱',
    categoryLabel: '曲線立体 3D',
    title: '円柱の体積計算機',
    h1: '円柱の体積計算機',
    metaDescription: '円柱の底面半径または直径と高さから体積・容積を即座に計算。円筒タンク、配管、缶の容量をリットル・m³で算出。',
    keywords: '円柱 体積 計算, 円柱 体積 リットル, 円柱の体積 公式 直径, 円柱 容積 計算機, 円筒タンク 容量 計算',
    shortTagline: '円柱型タンク、ドラム缶、金属パイプの体積を底面半径と高さから算出します。',
    howToCalculate: [
      '円柱の底面の半径（r）または直径（d = 2r）を測ります。',
      '円柱の垂直の高さ（h）を測定します。',
      '公式 V = π × r² × h を適用して体積を計算します。',
    ],
    formulaHtml: 'V = π × r² × h',
    formulaNote: 'r は底面円の半径、h は円柱の高さ、π ≈ 3.14159265 です。',
    practicalExamples: [
      {
        title: '円筒形水槽・受水槽',
        desc: '直径1m（半径0.5m）、深さ2mの円筒タンクは π × 0.5² × 2 ≈ 1.571 m³（約1,571リットル）です。',
      },
      {
        title: 'ドラム缶の容量',
        desc: '標準的な200Lドラム缶（内径約57cm、高さ約85cm）の内容積計算。',
      },
      {
        title: '円形シリンダー・ピストン',
        desc: '油圧機械や内燃エンジンの気筒排気量計算におけるストローク容積の導出。',
      },
    ],
    faqs: [
      {
        question: '円柱の体積を求める公式は？',
        answer: '底面の半径を r、高さを h とすると、V = πr²h です。',
      },
      {
        question: '直径（d）から直接体積を求める公式は？',
        answer: 'V = (πd²h) / 4 を使用します。',
      },
      {
        question: '円筒形水槽の水量をリットルで求めるには？',
        answer: '体積を m³ で算出し、1,000倍するとリットル数になります。',
      },
    ],
    relatedJapaneseSlugs: [
      'pipe-volume-calculator',
      'cone-volume-calculator',
      'horizontal-tank-volume-calculator',
    ],
    inputLabels: {
      radius: '底面半径',
      height: '垂直の高さ',
    },
  },

  'sphere-volume-calculator': {
    slug: 'sphere-volume-calculator',
    englishSlug: 'sphere-volume-calculator',
    shapeId: 'sphere',
    shapeName: '球',
    categoryLabel: '曲線立体 3D',
    title: '球の体積計算機',
    h1: '球の体積計算機',
    metaDescription: '球の半径、直径、円周から体積と表面積を計算。アルキメデスの公式に基づき、リットルやm³へ自動換算。',
    keywords: '球の体積 計算, 球の体積 公式, 球 体積 直径から, 球の体積 求め方 身の上に心配ある, 球の表面積と体積',
    shortTagline: 'ボール、球形ガスタンク、天体の体積を半径または直径から正確に算出します。',
    howToCalculate: [
      '球の中心から表面までの半径（r）、または直径（d）を測定します。',
      '半径を3乗し、4/3 と円周率 π を掛けます：V = (4/3) × π × r³。',
      '得られた容積をリットル、m³、またはガロンに換算します。',
    ],
    formulaHtml: 'V = (4/3) × π × r³',
    formulaNote: 'r は球の半径です。表面積は A = 4πr² で求められます。',
    practicalExamples: [
      {
        title: 'スポーツ用ボール',
        desc: '直径22cm（半径11cm）のサッカーボールの内容積は (4/3) × π × 11³ ≈ 5,575 cm³（約5.58リットル）です。',
      },
      {
        title: '球形ガス貯蔵タンク',
        desc: '高圧ガス貯蔵用ガスホルダーの幾何学的内体積の計算。',
      },
      {
        title: '金属ベアリング球',
        desc: '機械部品用ベアリングボールの材料体積と密度の測定。',
      },
    ],
    faqs: [
      {
        question: '球の体積の公式（語呂合わせ）は？',
        answer: '半径を r として V = (4/3)πr³（「身の上に心配ある参上」）です。',
      },
      {
        question: '直径から球の体積を計算する公式は？',
        answer: 'V = (πd³) / 6 で直接算出できます。',
      },
      {
        question: '半球の体積はどう計算しますか？',
        answer: '球全体の体積を半分にします：V = (2/3)πr³。',
      },
    ],
    relatedJapaneseSlugs: [
      'spherical-cap-volume-calculator',
      'ellipsoid-volume-calculator',
      'cylinder-volume-calculator',
    ],
    inputLabels: {
      radius: '球の半径',
    },
  },

  'cone-volume-calculator': {
    slug: 'cone-volume-calculator',
    englishSlug: 'cone-volume-calculator',
    shapeId: 'cone',
    shapeName: '円錐',
    categoryLabel: '曲線立体 3D',
    title: '円錐の体積計算機',
    h1: '円錐の体積計算機',
    metaDescription: '円錐の底面半径と高さから体積、母線長、表面積を計算。ホッパー、漏斗、三角コーンの容積計算に対応。',
    keywords: '円錐 体積 計算, 円錐の体積 公式, 円錐 体積 リットル, 円すい 体積 求め方, 母線から円錐の体積',
    shortTagline: 'ホッパー、じょうご、コーン型容器の体積を底面半径と垂直高さから求めます。',
    howToCalculate: [
      '底面の円の半径（r）を測定します。',
      '頂点から底面までの垂直の高さ（h）を測定します。',
      '底面積（πr²）に高さを掛け、3で割ります：V = (1/3) × π × r² × h。',
    ],
    formulaHtml: 'V = (1/3) × π × r² × h',
    formulaNote: '母線長（斜高）は s = √(r² + h²)、側面積は A_lateral = πrs です。',
    practicalExamples: [
      {
        title: 'じょうご・漏斗',
        desc: '開口部半径6cm、深さ10cmの円錐形漏斗の容量は (1/3) × π × 36 × 10 ≈ 377 cm³（約0.38L）です。',
      },
      {
        title: '穀物・骨材サイロホッパー',
        desc: '粉粒体排出部の円錐形ホッパー内部容積の設計計算。',
      },
      {
        title: 'ロードコーン・三角コーン',
        desc: '工事用コーンや造形物の樹脂成形に必要な材料体積の算出。',
      },
    ],
    faqs: [
      {
        question: '円錐の体積を求める公式は？',
        answer: 'V = (1/3)πr²h（底面積 × 高さ ÷ 3）です。',
      },
      {
        question: '円柱と円錐の体積比はどうなっていますか？',
        answer: '底面と高さが同じ場合、円錐の体積は円柱のちょうど 3分の1（1/3） です。',
      },
      {
        question: '母線（s）と底面半径から高さを求めるには？',
        answer: '三平方の定理により h = √(s² - r²) で高さを算出します。',
      },
    ],
    relatedJapaneseSlugs: [
      'cylinder-volume-calculator',
      'conical-frustum-volume-calculator',
      'sphere-volume-calculator',
    ],
    inputLabels: {
      radius: '底面半径',
      height: '垂直の高さ',
    },
  },

  'capsule-volume-calculator': {
    slug: 'capsule-volume-calculator',
    englishSlug: 'capsule-volume-calculator',
    shapeId: 'capsule',
    shapeName: 'カプセル',
    categoryLabel: 'タンク・配管 3D',
    title: 'カプセルの体積計算機',
    h1: 'カプセルの体積計算機',
    metaDescription: '円柱の両端に半球を結合したカプセル型構造の体積と表面積を計算。圧力容器、LPガスタンク、錠剤カプセル対応。',
    keywords: 'カプセル 体積 計算, カプセル型タンク 容量, 薬 カプセル 容積, LPガス 圧力容器 体積, 円筒 半球 体積',
    shortTagline: '両端に半球を持つ円筒型圧力容器や医薬品カプセルの容積を計算します。',
    howToCalculate: [
      'カプセルの半径（r）を測定します。',
      '中央の円柱部分の直線長さ（a）を測定します（全長 L の場合は a = L - 2r）。',
      '円柱体積（πr²a）と両端の2つの半球（球全体の体積 (4/3)πr³）を合算します。',
    ],
    formulaHtml: 'V = π × r² × ((4/3)r + a)',
    formulaNote: 'r は半径、a は円柱部分の長さです。全体の表面積は A = 2πr(2r + a) です。',
    practicalExamples: [
      {
        title: 'LPガス・高圧タンク（ブレットタンク）',
        desc: '両端が鏡板（半球）になったガス貯槽の幾何学的最大貯蔵容積の計算。',
      },
      {
        title: '医薬品ハードカプセル',
        desc: '0号や1号カプセルの粉末充填容積と体内崩壊面積の精密計算。',
      },
      {
        title: '潜水艇・高圧減圧チャンバー',
        desc: '深海探査艇や医療用気圧チャンバーの気体容量算出。',
      },
    ],
    faqs: [
      {
        question: '幾何学カプセルの体積の公式は？',
        answer: '円柱部長さ a、半径 r のとき、V = πr²((4/3)r + a) です。',
      },
      {
        question: '全長（L）から円柱部の長さ（a）を出すには？',
        answer: '直径を引いて求めます：a = L - 2r。',
      },
      {
        question: 'カプセル体積は実生活でどこに使われますか？',
        answer: '医薬品の錠剤充填量の計算や、高圧ガス用の横型貯蔵タンク（ブレットタンク）の設計に使われます。',
      },
    ],
    relatedJapaneseSlugs: [
      'cylinder-volume-calculator',
      'sphere-volume-calculator',
      'horizontal-tank-volume-calculator',
    ],
    inputLabels: {
      radius: 'カプセル半径',
      barrelLength: '円柱部の長さ',
    },
  },

  'spherical-cap-volume-calculator': {
    slug: 'spherical-cap-volume-calculator',
    englishSlug: 'spherical-cap-volume-calculator',
    shapeId: 'spherical_cap',
    shapeName: '球冠・ドーム',
    categoryLabel: '曲線立体 3D',
    title: '球冠・ドームの体積計算機',
    h1: '球冠・ドームの体積計算機',
    metaDescription: '球の一部（球冠・球欠）の体積と表面積を計算。ドーム型建築、ボウル容器、球形タンク底部の容積に対応。',
    keywords: '球冠 体積 計算, ドーム 体積 計算, 球欠 公式, 浅いボウル 容積 計算, 球の一部 体積',
    shortTagline: 'ドーム型屋根、浅いボウル、球体の一部を切り取った形状の体積を計算します。',
    howToCalculate: [
      '底面の円の半径（r）を測定します。',
      '球冠の垂直の高さ・深さ（h）を測定します。',
      '公式 V = (πh / 6) × (3r² + h²) を適用して計算します。',
    ],
    formulaHtml: 'V = (π × h / 6) × (3r² + h²)',
    formulaNote: '元の球の半径 R と高さ h から求める場合は V = (1/3)πh²(3R - h) です。',
    practicalExamples: [
      {
        title: 'ドーム型建築物',
        desc: '半球ドームや浅い球冠屋根の内部空気容積および空調設計容量の算出。',
      },
      {
        title: 'ボウル・皿の容量',
        desc: 'キッチンボウルや球形底面を持つ食器の液体収容力（ミリリットル）の計算。',
      },
      {
        title: '圧力容器の鏡板',
        desc: 'ボイラーやタンクの皿形鏡板部分の容積と耐圧強度の検討。',
      },
    ],
    faqs: [
      {
        question: '球冠（球の一部）の体積を求める公式は？',
        answer: '底面半径 r、高さ h の場合、V = (πh / 6)(3r² + h²) です。',
      },
      {
        question: 'ドーム建築の内部空間の容積を計算する方法は？',
        answer: '床面の半径 r と頂点の高さ h を測り、球冠の公式に代入します。',
      },
      {
        question: '半球と球冠の違いは何ですか？',
        answer: '高さと半径が一致する（h = r）場合が半球で、それ以外の切り取り部分はすべて一般的な球冠です。',
      },
    ],
    relatedJapaneseSlugs: [
      'sphere-volume-calculator',
      'ellipsoid-volume-calculator',
      'cylinder-volume-calculator',
    ],
    inputLabels: {
      baseRadius: '底面半径',
      height: '球冠の高さ',
    },
  },

  'conical-frustum-volume-calculator': {
    slug: 'conical-frustum-volume-calculator',
    englishSlug: 'conical-frustum-volume-calculator',
    shapeId: 'conical_frustum',
    shapeName: '円錐台',
    categoryLabel: '曲線立体 3D',
    title: '円錐台の体積計算機',
    h1: '円錐台の体積計算機',
    metaDescription: '円錐台（切頭円錐）の上面半径、底面半径、高さから体積を計算。バケツ、植木鉢、テーパー容器の容量換算。',
    keywords: '円錐台 体積 計算, バケツ 容量 計算, 植木鉢 土の量 リットル, 円錐台 公式, テーパー 円筒 体積',
    shortTagline: 'バケツ、植木鉢、テーパー型コップの体積を上下の半径と高さから計算します。',
    howToCalculate: [
      '上面の円の半径（r₁）と底面の円の半径（r₂）を測ります。',
      '上下の面を結ぶ垂直の高さ（h）を測定します。',
      '公式 V = (πh / 3) × (r₁² + r₁r₂ + r₂²) を用いて計算します。',
    ],
    formulaHtml: 'V = (π × h / 3) × (r₁² + r₁r₂ + r₂²)',
    formulaNote: 'r₁ は上面半径、r₂ は底面半径、h は垂直高さです。',
    practicalExamples: [
      {
        title: '水汲みバケツ',
        desc: '上口半径12cm、底半径9cm、深さ25cmの掃除用バケツの容量は約8.7リットルです。',
      },
      {
        title: '植木鉢の培養土量',
        desc: 'テーパー状のプランターや号数鉢に必要な園芸用培養土の容量計算。',
      },
      {
        title: '紙コップ・ドリンクカップ',
        desc: 'カフェや自動販売機で使用されるテーパーカップの規格容量の算出。',
      },
    ],
    faqs: [
      {
        question: '円錐台（切頭円錐）の体積を求める公式は？',
        answer: '上面半径 r₁、底面半径 r₂、高さ h のとき、V = (πh / 3)(r₁² + r₁r₂ + r₂²) です。',
      },
      {
        question: 'バケツに入る水の容量（リットル）を計算するには？',
        answer: 'cm単位で計算して出た体積（cm³）を 1,000 で割ります。',
      },
      {
        question: '直径から直接計算できますか？',
        answer: 'はい：V = (πh / 12)(d₁² + d₁d₂ + d₂²) で計算可能です。',
      },
    ],
    relatedJapaneseSlugs: [
      'cone-volume-calculator',
      'cylinder-volume-calculator',
      'pipe-volume-calculator',
    ],
    inputLabels: {
      topRadius: '上面半径',
      bottomRadius: '底面半径',
      height: '垂直の高さ',
    },
  },

  'ellipsoid-volume-calculator': {
    slug: 'ellipsoid-volume-calculator',
    englishSlug: 'ellipsoid-volume-calculator',
    shapeId: 'ellipsoid',
    shapeName: '楕円体',
    categoryLabel: '曲線立体 3D',
    title: '楕円体の体積計算機',
    h1: '楕円体の体積計算機',
    metaDescription: '3本の半軸長から楕円体の体積と表面積を計算。回転楕円体、扁球、ラグビーボール型の容積換算。',
    keywords: '楕円体 体積 計算, 回転楕円体 体積 公式, ラグビーボール 体積, 扁球 体積 計算, 楕円球 容積',
    shortTagline: 'スイカ、ラグビーボール、扁平な惑星などの楕円球の体積を3つの半軸から計算します。',
    howToCalculate: [
      '楕円体の中心から3方向への半軸長（a、b、c）を測定します（直径の半分）。',
      '3本の半軸を掛け合わせ、4/3 と π を掛けます：V = (4/3) × π × a × b × c。',
      '得られた容積をリットルや立法メートルなどの単位に換算します。',
    ],
    formulaHtml: 'V = (4/3) × π × a × b × c',
    formulaNote: 'a、b、c は直交する3本の半軸長です。3軸が同一（a = b = c）の場合は球になります。',
    practicalExamples: [
      {
        title: 'ラグビーボール',
        desc: '長軸半軸14cm、短軸半軸9cmのボールの内部容積計算。',
      },
      {
        title: '天体・地球楕円体',
        desc: '自転による遠心力で赤道部が膨らんだ回転楕円体の体積算出。',
      },
      {
        title: 'スイカ・果実の体積',
        desc: '楕円球形状の農産物の選別規格および比重・糖度測定前の体積計算。',
      },
    ],
    faqs: [
      {
        question: '楕円体の体積を求める公式は？',
        answer: '3本の半軸長を a, b, c とすると、V = (4/3)πabc です。',
      },
      {
        question: '球と楕円体の違いは何ですか？',
        answer: '球は3軸の半径がすべて等しく（a = b = c）、楕円体は軸の長さが異なります。',
      },
      {
        question: 'スイカやラグビーボールの半軸はどう測りますか？',
        answer: '全長・全幅・全高をそれぞれ測定し、2で割って a, b, c を求めます。',
      },
    ],
    relatedJapaneseSlugs: [
      'sphere-volume-calculator',
      'spherical-cap-volume-calculator',
      'torus-volume-calculator',
    ],
    inputLabels: {
      semiAxisA: '半軸長 a',
      semiAxisB: '半軸幅 b',
      semiAxisC: '半軸高 c',
    },
  },

  'square-pyramid-volume-calculator': {
    slug: 'square-pyramid-volume-calculator',
    englishSlug: 'square-pyramid-volume-calculator',
    shapeId: 'square_pyramid',
    shapeName: '正四角錐',
    categoryLabel: '角柱・角錐 3D',
    title: '正四角錐の体積計算機',
    h1: '正四角錐の体積計算機',
    metaDescription: '底面が正方形の四角錐の体積と斜高・表面積を計算。ピラミッド型屋根、モニュメント、ホッパーの容積算出。',
    keywords: '正四角錐 体積 計算, 四角錐の体積 公式, ピラミッド型屋根 容積, 底面が正方形の四角錐 体積, 四角錐 体積 求め方',
    shortTagline: 'ピラミッド型屋根や正方形ホッパーの体積を底面の一辺と垂直高さから計算します。',
    howToCalculate: [
      '正方形底面の一辺の長さ（a）を測定します。',
      '底面中心から頂点までの垂直高さ（h）を測定します。',
      '底面積（a²）に高さを掛け、3で割ります：V = (1/3) × a² × h。',
    ],
    formulaHtml: 'V = (1/3) × a² × h',
    formulaNote: 'a は正方形底面の一辺、h は垂直高さです。側面の斜高は s = √((a/2)² + h²) です。',
    practicalExamples: [
      {
        title: 'ピラミッド型屋根（方形屋根）',
        desc: '底面一辺6m、高さ2.5mの方形屋根の内部空気容積は (1/3) × 36 × 2.5 = 30 m³ です。',
      },
      {
        title: '正方形ホッパー・漏斗',
        desc: '粉粒体プラントの角型ホッパー底部の収容能力計算。',
      },
      {
        title: '記念碑・オベリスク頂部',
        desc: '石造モニュメントやピラミディオンの材料体積・石材重量の算出。',
      },
    ],
    faqs: [
      {
        question: '正四角錐の体積の公式は？',
        answer: '底面の一辺 a、垂直の高さ h のとき、V = (1/3)a²h です。',
      },
      {
        question: '側面の斜高（s）から垂直の高さを求めるには？',
        answer: 'h = √(s² - (a/2)²) を計算して求めます。',
      },
      {
        question: 'なぜ角錐の体積には 1/3 を掛けるのですか？',
        answer: '同じ底面積と高さを持つ四角柱の容積の中に、四角錐がちょうど3杯分収まるためです。',
      },
    ],
    relatedJapaneseSlugs: [
      'rectangular-pyramid-volume-calculator',
      'cube-volume-calculator',
      'cone-volume-calculator',
    ],
    inputLabels: {
      baseEdge: '底面の一辺',
      height: '垂直の高さ',
    },
  },

  'rectangular-pyramid-volume-calculator': {
    slug: 'rectangular-pyramid-volume-calculator',
    englishSlug: 'rectangular-pyramid-volume-calculator',
    shapeId: 'rectangular_pyramid',
    shapeName: '長方形四角錐',
    categoryLabel: '角柱・角錐 3D',
    title: '長方形四角錐の体積計算機',
    h1: '長方形四角錐の体積計算機',
    metaDescription: '底面が長方形の四角錐の体積と表面積を計算。寄棟屋根、小屋裏空間、角型ホッパーの容積をm³・Lで算出。',
    keywords: '長方形四角錐 体積 計算, 底面が長方形の四角錐 体積, 寄棟屋根 小屋裏 体積 計算, 四角錐 容積 m3, 矩形四角錐 公式',
    shortTagline: '寄棟屋根の小屋裏や長方形ホッパーの体積を底面の縦・横と高さから求めます。',
    howToCalculate: [
      '底面の縦の長さ（l）と横の幅（w）を測定します。',
      '頂点から底面までの垂直高さ（h）を測定します。',
      '底面積（l × w）に高さを掛け、3で割ります：V = (1/3) × l × w × h。',
    ],
    formulaHtml: 'V = (1/3) × l × w × h',
    formulaNote: 'l は底面の縦、w は底面の横、h は垂直高さです。',
    practicalExamples: [
      {
        title: '住宅の寄棟・小屋裏空間',
        desc: '縦8m、横5m、高さ2mの屋根裏換気空間の空気容積は (1/3) × 40 × 2 ≈ 26.67 m³ です。',
      },
      {
        title: '長方形シュート・角ホッパー',
        desc: '製鉄所やリサイクルプラントにおける投入口の容積設計。',
      },
      {
        title: 'テント・仮設構造物',
        desc: '底面が長方形のピラミッド型キャンプテントの居住空間容積の算出。',
      },
    ],
    faqs: [
      {
        question: '長方形を底面とする四角錐の体積公式は？',
        answer: '縦 l、横 w、高さ h のとき、V = (1/3)lwh です。',
      },
      {
        question: 'ピラミッド型屋根裏の空気容積を計算するには？',
        answer: '屋根裏床面の縦と横、棟（頂点）までの高さを測り、公式に当てはめます。',
      },
      {
        question: '体積の単位は何が使われますか？',
        answer: '立方メートル（m³）やリットル（L）、立方センチメートル（cm³）が使われます。',
      },
    ],
    relatedJapaneseSlugs: [
      'square-pyramid-volume-calculator',
      'rectangular-prism-volume-calculator',
      'triangular-prism-volume-calculator',
    ],
    inputLabels: {
      baseLength: '底面の縦',
      baseWidth: '底面の横',
      height: '垂直の高さ',
    },
  },

  'triangular-prism-volume-calculator': {
    slug: 'triangular-prism-volume-calculator',
    englishSlug: 'triangular-prism-volume-calculator',
    shapeId: 'triangular_prism',
    shapeName: '三角柱',
    categoryLabel: '角柱・角錐 3D',
    title: '三角柱の体積計算機',
    h1: '三角柱の体積計算機',
    metaDescription: '三角柱の底面三角形と長さから体積と表面積を計算。三角屋根、くさび形、テントの容積算出に対応。',
    keywords: '三角柱 体積 計算, 三角柱の体積 公式, 三角屋根 小屋裏 容積, くさび形 体積 計算, 三角テント 容積',
    shortTagline: '三角屋根の屋根裏、くさび形構造、三角テントの体積を底面三角形と長さから計算します。',
    howToCalculate: [
      '底面の三角形の底辺（b）と三角形の高さ（h）を測定します。',
      '三角柱の奥行き・柱の長さ（L）を測定します。',
      '底面三角形の面積（(1/2) × b × h）に長さを掛けます：V = (1/2) × b × h × L。',
    ],
    formulaHtml: 'V = (1/2) × b × h × L',
    formulaNote: 'b は底辺、h は三角形の高さ、L は柱の長さです。',
    practicalExamples: [
      {
        title: '切妻屋根の小屋裏空間',
        desc: '幅6m、高さ2m、奥行き10mの三角屋根裏の空気容積は (1/2) × 6 × 2 × 10 = 60 m³ です。',
      },
      {
        title: '三角テントの居住容積',
        desc: 'Aフレーム型キャンプテントの内部有効空間の計算。',
      },
      {
        title: 'くさび形機械ストッパー',
        desc: '金属加工やくさび形固定治具の材料体積と重量の計算。',
      },
    ],
    faqs: [
      {
        question: '三角柱の体積を求める公式は？',
        answer: 'V = (1/2) × b × h_Δ × L（底面三角形の面積 × 柱の長さ）です。',
      },
      {
        question: '正三角形を底面とする三角柱の体積は？',
        answer: '一辺 s のとき、V = (√3 / 4)s² × L です。',
      },
      {
        question: '山型テント（三角テント）の容積を計算するには？',
        answer: '入口幅 × 中央の高さ ÷ 2 × テントの奥行きで算出します。',
      },
    ],
    relatedJapaneseSlugs: [
      'trapezoidal-prism-volume-calculator',
      'rectangular-prism-volume-calculator',
      'square-pyramid-volume-calculator',
    ],
    inputLabels: {
      base: '底面の底辺',
      height: '底面の高さ',
      length: '柱の長さ',
    },
  },

  'pipe-volume-calculator': {
    slug: 'pipe-volume-calculator',
    englishSlug: 'pipe-volume-calculator',
    shapeId: 'hollow_cylinder',
    shapeName: '中空円柱・パイプ',
    categoryLabel: 'タンク・配管 3D',
    title: 'パイプ・中空円柱の体積計算機',
    h1: 'パイプ・中空円柱の体積計算機',
    metaDescription: 'パイプ（中空円柱）の管内水量および金属部肉厚体積を外径・内径・長さから瞬時に計算。配管容量算出。',
    keywords: 'パイプ 体積 計算, 配管 水量 計算 リットル, 中空円柱 体積 公式, パイプ 肉厚 重量 体積, 配管 容積 計算機',
    shortTagline: '水道管、鋼管、ホースの内側の水容量と管自体の肉厚材料体積を算出します。',
    howToCalculate: [
      '外半径（R）または外径、および内半径（r）または内径を測ります。',
      'パイプの全長・長さ（L）を測定します。',
      '外側の円柱体積から内側の空洞体積を引きます：V = π × (R² - r²) × L。',
    ],
    formulaHtml: 'V = π × (R² - r²) × L',
    formulaNote: '管内の液体容量（内容積）のみを求める場合は V_fluid = π × r² × L です。',
    practicalExamples: [
      {
        title: '給水管・消火配管の保有水量',
        desc: '内径100mm（半径50mm = 0.05m）、長さ50mの配管保有水量は π × 0.05² × 50 ≈ 0.393 m³（約393リットル）です。',
      },
      {
        title: '鋼管・パイプ杭の金属重量',
        desc: '外径と肉厚から金属部の断面積と体積を求め、鉄の比重7.85を掛けて重量を算出。',
      },
      {
        title: 'コンクリートヒューム管',
        desc: '下水道工事におけるプレキャスト管のコンクリート使用量計算。',
      },
    ],
    faqs: [
      {
        question: 'パイプの中を通る液体の容量（内容積）を計算するには？',
        answer: '内径の半径 r_i と長さ L から、V = πr_i²L で計算します。',
      },
      {
        question: 'パイプ自体の肉厚（金属部）の体積を求める公式は？',
        answer: '外半径 R、内半径 r のとき、V = π(R² - r²)L です。',
      },
      {
        question: '内径50mm・長さ10mの塩ビ管に入る水の量は？',
        answer: '内半径 2.5 cm のため、約 19.6リットル 入ります。',
      },
    ],
    relatedJapaneseSlugs: [
      'cylinder-volume-calculator',
      'horizontal-tank-volume-calculator',
      'torus-volume-calculator',
    ],
    inputLabels: {
      outerRadius: '外半径',
      innerRadius: '内半径',
      length: 'パイプの長さ',
    },
  },

  'torus-volume-calculator': {
    slug: 'torus-volume-calculator',
    englishSlug: 'torus-volume-calculator',
    shapeId: 'torus',
    shapeName: 'トーラス・Oリング',
    categoryLabel: '曲線立体 3D',
    title: 'トーラス・Oリングの体積計算機',
    h1: 'トーラス・Oリングの体積計算機',
    metaDescription: 'トーラス（円環体・ドーナツ型）およびOリングの体積と表面積を大半径・小半径から計算。ゴムシール設計対応。',
    keywords: 'トーラス 体積 計算, Oリング 体積 計算, トーラス 公式 体積, ドーナツ型 容積 計算, 円環体 体積',
    shortTagline: 'Oリング、ゴムパッキン、ドーナツ形状の体積と表面積を大半径と小半径から計算します。',
    howToCalculate: [
      'ドーナツの中心から管の中心線までの大半径（R）を測定します。',
      '管断面の円の半径である小半径（r）を測定します。',
      '公式 V = 2 × π² × R × r² を適用して体積を計算します。',
    ],
    formulaHtml: 'V = 2 × π² × R × r²',
    formulaNote: 'R はトーラスの中心半径、r は管の半径（R ≥ r）です。表面積は A = 4π²Rr です。',
    practicalExamples: [
      {
        title: 'Oリングシール・ゴムパッキン',
        desc: '中心径50mm（R=25mm）、線径3mm（r=1.5mm）のOリングのゴム材料体積は 2 × π² × 25 × 1.5² ≈ 1,110 mm³（約1.11 cm³）です。',
      },
      {
        title: 'ドーナツ型浮き輪',
        desc: 'プールや海水浴で使用される大型ドーナツ浮き輪の空気封入容積計算。',
      },
      {
        title: '核融合トカマク炉心',
        desc: 'トーラス状真空容器内部のプラズマ閉じ込め容積の幾何学的計算。',
      },
    ],
    faqs: [
      {
        question: 'トーラス（円環体）の体積を求める公式は？',
        answer: 'ドーナツの中心から管の中心までの大半径を R、管自体の小半径を r とすると、V = 2π²Rr² です。',
      },
      {
        question: 'Oリングの内径（d_i）と線径（w）から体積を求めるには？',
        answer: 'r = w / 2、R = (d_i + w) / 2 としてトーラスの公式に代入します。',
      },
      {
        question: 'トーラスの表面積の公式は？',
        answer: '表面積は A = 4π²Rr で求められます。',
      },
    ],
    relatedJapaneseSlugs: [
      'pipe-volume-calculator',
      'cylinder-volume-calculator',
      'ellipsoid-volume-calculator',
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
    shapeName: '台形柱・溝',
    categoryLabel: '角柱・角錐 3D',
    title: '台形柱・溝の体積計算機',
    h1: '台形柱・溝の体積計算機',
    metaDescription: '台形柱（台形断面の角柱）の体積と法面土量を計算。掘削トレンチ、農業用水路、給水槽の立米数・L換算。',
    keywords: '台形柱 体積 計算, 溝 掘削 土量 計算, 台形水路 容積 計算, 家畜 水飲み場 容積 リットル, トレンチ 体積 公式',
    shortTagline: '開削トレンチの掘削土量、水路、台形型給水タンクの容積を断面寸法と長さから計算します。',
    howToCalculate: [
      '台形断面の上底幅（a）と下底幅（b）を測定します。',
      '溝や構造物の垂直の深さ・高さ（h）を測定します。',
      '長さ（L）を掛け合わせます：V = ((a + b) / 2) × h × L。',
    ],
    formulaHtml: 'V = ((a + b) / 2) × h × L',
    formulaNote: 'a は上底、b は下底、h は垂直高さ、L は長さです。',
    practicalExamples: [
      {
        title: '土木工事の配管トレンチ掘削',
        desc: '上幅1.2m、底幅0.8m、深さ1.5m、延長20mの掘削土量は ((1.2 + 0.8) / 2) × 1.5 × 20 = 30 m³（立米）です。',
      },
      {
        title: '農業用水路・側溝',
        desc: 'コンクリート台形水路の満水時流水断面積および区間総容量の計算。',
      },
      {
        title: '家畜用水飲みトラフ',
        desc: '傾斜壁面を持つトラフ型給水容器の貯水容量（リットル）計算。',
      },
    ],
    faqs: [
      {
        question: '台形柱の体積を求める公式は？',
        answer: '上底 a、下底 b、深さ h、長さ L のとき、V = ((a + b) / 2) × h × L です。',
      },
      {
        question: '法面（斜面）のある溝の掘削土量（m³）を計算するには？',
        answer: 'メートル単位で V = ((a + b) / 2) × h × L を計算すると、そのまま土量（立米数）になります。',
      },
      {
        question: '台形型の給水槽の水量をリットルで求めるには？',
        answer: 'cm単位で算出した体積（cm³）を 1,000 で割ります。',
      },
    ],
    relatedJapaneseSlugs: [
      'triangular-prism-volume-calculator',
      'rectangular-prism-volume-calculator',
      'horizontal-tank-volume-calculator',
    ],
    inputLabels: {
      topWidth: '上底幅 a',
      bottomWidth: '下底幅 b',
      height: '垂直の深さ・高さ h',
      length: '長さ L',
    },
  },

  'horizontal-tank-volume-calculator': {
    slug: 'horizontal-tank-volume-calculator',
    englishSlug: 'horizontal-tank-volume-calculator',
    shapeId: 'horizontal_tank_fill',
    shapeName: '横型円筒タンク',
    categoryLabel: 'タンク・配管 3D',
    title: '横型円筒タンクの容量計算機',
    h1: '横型円筒タンクの容量計算機',
    metaDescription: '横置き円筒タンクの液位（ディップスティック深さ）から残存液量を計算。灯油タンク、水槽、地下タンクの残量L換算。',
    keywords: '横型円筒タンク 容量 計算, 横置きタンク 残量 計算, 検尺棒 液量 換算, 灯油タンク 残量 リットル, 横型シリンダー 部分容積',
    shortTagline: '横置きシリンダー型タンクの液面深さ（ゲージ棒）から残りの燃料や水の量を計算します。',
    howToCalculate: [
      'タンクの半径（r）または内径、および円筒の長さ（L）を測ります。',
      '検尺棒（ディップスティック）で底からの液面深さ（h）を測定します。',
      '円弧弓形積分公式を適用して、部分充填液量体積を算出します。',
    ],
    formulaHtml: 'V = [r² × arccos((r - h)/r) - (r - h)√(2rh - h²)] × L',
    formulaNote: 'h は液面の深さ（0 ≤ h ≤ 2r）、arccos はラジアン単位です。',
    practicalExamples: [
      {
        title: 'ホーム灯油タンク（屋外200L/490L）',
        desc: '直径60cm、長さ100cmのタンクで油面高さ30cm（半分）のとき、残量はちょうど満杯の半分（約141リットル）です。',
      },
      {
        title: 'ガソリンスタンド地下貯油槽',
        desc: '大型地下横型タンクの検尺棒測定値（cm）から実在庫液量（kL）への換算。',
      },
      {
        title: '薬品工場ブレンドタンク',
        desc: 'バッチ処理工程における横型反応釜の投入液位レベル管理。',
      },
    ],
    faqs: [
      {
        question: '横置き円筒タンクの一部の液量を計算する公式は？',
        answer: '半径 r、長さ L、液面の深さ h のとき：V = [r² × arccos((r - h)/r) - (r - h)√(2rh - h²)] × L です（arccos はラジアン単位）。',
      },
      {
        question: 'なぜ検尺棒の液位（cm）と残容量は比例しないのですか？',
        answer: '円形断面の中央部が最も広く上下が狭いため、液位1cmあたりの体積が一定ではないからです。',
      },
      {
        question: '満杯時の最大容量はどう計算しますか？',
        answer: '通常の円柱の公式 V = πr²L で最大満水容量を求められます。',
      },
    ],
    relatedJapaneseSlugs: [
      'cylinder-volume-calculator',
      'capsule-volume-calculator',
      'pipe-volume-calculator',
    ],
    inputLabels: {
      radius: 'タンク半径 r',
      length: 'タンク長さ L',
      fillDepth: '液面の深さ h',
    },
  },
};
