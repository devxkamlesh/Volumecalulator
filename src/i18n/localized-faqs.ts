import type { LocaleCode } from './home-locales';

export interface LocalizedFaq {
  question: string;
  answer: string;
}

export const LOCALIZED_FAQS: Record<LocaleCode, readonly LocalizedFaq[]> = {
  es: [
    { question: '¿Cómo calcular el volumen de un cilindro?', answer: 'Usa la fórmula V = πr²h. Mide el radio interior r y la altura h en la misma unidad, eleva el radio al cuadrado y multiplica el resultado por π y por la altura. El resultado queda en unidades cúbicas.' },
    { question: '¿Cómo calcular los litros de agua que tiene una piscina?', answer: 'Calcula primero el volumen en metros cúbicos. En una piscina rectangular multiplica largo × ancho × profundidad media. Después multiplica los m³ por 1.000 para obtener litros. Para un fondo inclinado, la profundidad media es (parte poco profunda + parte profunda) ÷ 2.' },
    { question: '¿Cuál es la fórmula para sacar el volumen de una caja o prisma rectangular?', answer: 'La fórmula es V = largo × ancho × alto. Si las tres medidas están en metros, el resultado se obtiene en m³; si están en centímetros, se obtiene en cm³.' },
    { question: '¿Cuántos litros hay en un metro cúbico (1 m³)?', answer: 'Un metro cúbico equivale exactamente a 1.000 litros. Por tanto, para convertir m³ a litros se multiplica por 1.000; para convertir litros a m³ se divide entre 1.000.' },
    { question: '¿Cómo calcular el CBM para envíos marítimos o aéreos?', answer: 'Mide el largo, ancho y alto exterior del paquete en metros y multiplícalos: CBM = largo × ancho × alto. Para varios bultos iguales, multiplica el CBM de uno por la cantidad total.' },
  ],
  pt: [
    { question: 'Como calcular o volume de um cilindro passo a passo?', answer: 'Use V = πr²h. Meça o raio interno e a altura na mesma unidade, eleve o raio ao quadrado e multiplique por π e pela altura. O resultado será expresso em unidades cúbicas.' },
    { question: "Como calcular a quantidade de litros de uma caixa d'água?", answer: 'Calcule o volume interno da caixa. Para uma caixa retangular, multiplique comprimento × largura × altura em metros e depois multiplique por 1.000 para converter m³ em litros. Para uma caixa cilíndrica, use V = πr²h.' },
    { question: 'Quantos litros de água cabem na minha piscina?', answer: 'Calcule o volume da piscina em m³ e multiplique por 1.000. Em uma piscina retangular, use comprimento × largura × profundidade média. Para fundo inclinado, a profundidade média é a soma da parte rasa e da parte funda dividida por 2.' },
    { question: 'Qual é a fórmula do volume de um cubo e de um paralelepípedo?', answer: 'Para um cubo, V = a³, onde a é a aresta. Para um paralelepípedo retangular, V = comprimento × largura × altura.' },
    { question: 'Quantos litros tem 1 m³ (metro cúbico)?', answer: 'Um metro cúbico contém exatamente 1.000 litros. Multiplique m³ por 1.000 para obter litros.' },
  ],
  de: [
    { question: 'Wie berechnet man das Volumen eines Zylinders?', answer: 'Verwenden Sie V = πr²h. Quadrieren Sie den Innenradius r und multiplizieren Sie ihn mit π und der Höhe h. Alle Längen müssen in derselben Einheit angegeben sein.' },
    { question: 'Wie viel Liter Wasser passen in meinen Pool?', answer: 'Berechnen Sie das Poolvolumen in Kubikmetern und multiplizieren Sie es mit 1.000. Für einen rechteckigen Pool gilt Länge × Breite × mittlere Wassertiefe. Bei Gefälle ist die mittlere Tiefe (flach + tief) ÷ 2.' },
    { question: 'Wie berechnet man das Volumen von einem Quader?', answer: 'Für einen Quader gilt V = Länge × Breite × Höhe. Werden alle Maße in Metern eingesetzt, ergibt sich das Volumen in m³.' },
    { question: 'Was ist die Formel für das Volumen einer Kugel?', answer: 'Das Kugelvolumen wird mit V = ⁴⁄₃πr³ berechnet. Dabei ist r der Radius vom Mittelpunkt bis zur Oberfläche.' },
    { question: 'Wie rechnet man Kubikmeter (m³) in Liter um?', answer: 'Multiplizieren Sie Kubikmeter mit 1.000. Ein Kubikmeter entspricht exakt 1.000 Litern; umgekehrt werden Liter durch 1.000 geteilt.' },
  ],
  fr: [
    { question: "Comment calculer le volume d'un cylindre ?", answer: 'Utilisez V = πr²h. Mesurez le rayon intérieur r et la hauteur h dans la même unité, puis multipliez le carré du rayon par π et par la hauteur.' },
    { question: "Comment calculer le volume d'une piscine en m³ et en litres ?", answer: 'Pour une piscine rectangulaire, multipliez longueur × largeur × profondeur moyenne. Le résultat en m³ se convertit en litres en le multipliant par 1 000. Pour un fond incliné, utilisez la moyenne des profondeurs minimale et maximale.' },
    { question: "Quelle est la formule pour calculer le volume d'un cône et d'une sphère ?", answer: 'Le volume d’un cône est V = ⅓πr²h. Le volume d’une sphère est V = ⁴⁄₃πr³. Le rayon et la hauteur doivent être exprimés dans des unités compatibles.' },
    { question: "Comment calculer le volume d'un pavé droit (boîte rectangulaire) ?", answer: 'Multipliez la longueur par la largeur et la hauteur : V = L × l × h. Des mesures en mètres donnent un résultat en m³.' },
    { question: 'Combien de litres contient un mètre cube (m³) ?', answer: 'Un mètre cube contient exactement 1 000 litres. Pour passer des litres aux m³, divisez par 1 000.' },
  ],
  ru: [
    { question: 'Как рассчитать объем цилиндра по формуле?', answer: 'Используйте формулу V = πr²h. Возведите внутренний радиус r в квадрат и умножьте на π и высоту h. Все размеры должны быть выражены в совместимых единицах.' },
    { question: 'Как посчитать объем воды в круглом и прямоугольном бассейне?', answer: 'Для прямоугольного бассейна умножьте длину, ширину и среднюю глубину. Для круглого используйте V = πr²h. Объем в м³ умножьте на 1 000, чтобы получить литры.' },
    { question: 'Какая формула для расчета объема шара (сферы)?', answer: 'Объем шара рассчитывается по формуле V = ⁴⁄₃πr³, где r — радиус от центра до поверхности.' },
    { question: 'Как рассчитать объем коробки (прямоугольного параллелепипеда) в литрах?', answer: 'Умножьте внутреннюю длину, ширину и высоту. Если размеры указаны в метрах, умножьте полученные м³ на 1 000 для перевода в литры.' },
    { question: 'Сколько литров в одном кубическом метре (м³)?', answer: 'В одном кубическом метре ровно 1 000 литров. Для обратного перевода разделите количество литров на 1 000.' },
  ],
  ja: [
    { question: '円柱の体積の求め方と公式は？', answer: '公式は V = πr²h です。内側の半径 r を二乗し、円周率 π と高さ h を掛けます。半径と高さは同じ単位にそろえてください。' },
    { question: '球の体積の公式（身の上に心配あーる）の計算方法は？', answer: '球の体積は V = ⁴⁄₃πr³ で求めます。「身の上に心配あーる」は 4/3 × π × r³ を覚えるための語呂合わせです。' },
    { question: '直方体や立方体の体積はどうやって計算する？', answer: '直方体は V = 長さ × 幅 × 高さです。立方体はすべての辺が等しいため、V = a³ となります。' },
    { question: '水槽やプールの水量は何リットル？計算ツールの使い方', answer: '内寸から体積を m³ で計算し、1,000 倍するとリットルになります。長方形の水槽は長さ × 幅 × 水深、円形プールは πr²h を使います。' },
    { question: '1立方メートル（m³）は何リットル（L）ですか？', answer: '1 m³ は正確に 1,000 L です。m³ から L へは 1,000 倍し、L から m³ へは 1,000 で割ります。' },
  ],
  zh: [
    { question: '圆柱体的体积怎么算？公式是什么？／圓柱體的體積怎麼算？公式是什麼？', answer: '公式为 V = πr²h。先将内半径 r 平方，再乘以圆周率 π 和高度 h。半径与高度应使用相同或可换算的单位。' },
    { question: '长方体和正方体的体积计算公式是什么？／長方體和正方體的體積計算公式是什麼？', answer: '长方体公式为 V = 长 × 宽 × 高；正方体各边相等，因此公式为 V = a³。' },
    { question: '球体体积和表面积怎么计算？／球體體積和表面積怎麼計算？', answer: '球体体积为 V = ⁴⁄₃πr³，表面积为 A = 4πr²，其中 r 是球的半径。' },
    { question: '水池或鱼缸的水容量怎么算（升与立方米换算）？', answer: '先用内部尺寸算出立方米。长方形水池用长 × 宽 × 平均水深。1 m³ 等于 1,000 升，因此将 m³ 乘以 1,000 即得升数。' },
    { question: '海运和快递中的 CBM（立方米）体积怎么算？', answer: '将货物外部的长、宽、高换算成米后相乘：CBM = 长 × 宽 × 高。多个相同箱子再乘以箱数。' },
  ],
  it: [
    { question: 'Come si calcola il volume di un cilindro?', answer: 'Usa V = πr²h. Eleva al quadrato il raggio interno r e moltiplica per π e per l’altezza h, usando unità compatibili.' },
    { question: "Come calcolare i litri d'acqua di una piscina rotonda o rettangolare?", answer: 'Per una piscina rettangolare moltiplica lunghezza × larghezza × profondità media. Per una piscina rotonda usa V = πr²h. Moltiplica i m³ per 1.000 per ottenere i litri.' },
    { question: 'Qual è la formula per calcolare il volume della sfera?', answer: 'La formula è V = ⁴⁄₃πr³, dove r è il raggio dal centro alla superficie.' },
    { question: 'Come si calcola il volume di un parallelepipedo (scatola)?', answer: 'Moltiplica lunghezza, larghezza e altezza interne: V = l × w × h. Misure in metri producono un risultato in m³.' },
    { question: 'Quanti litri ci sono in un metro cubo (m³)?', answer: 'Un metro cubo contiene esattamente 1.000 litri. Per convertire litri in m³, dividi per 1.000.' },
  ],
  ar: [
    { question: 'كيف يتم حساب حجم الأسطوانة الدائرية؟', answer: 'استخدم القانون V = πr²h. ربّع نصف القطر الداخلي r ثم اضرب الناتج في π وفي الارتفاع h، مع استخدام وحدات قياس متوافقة.' },
    { question: 'كيف أحسب سعة خزان المياه باللتر والمتر المكعب؟', answer: 'احسب الحجم الداخلي للخزان بالمتر المكعب. للخزان المستطيل اضرب الطول في العرض في الارتفاع، وللأسطواني استخدم V = πr²h. اضرب المتر المكعب في 1,000 للحصول على اللترات.' },
    { question: 'كيف أحسب حجم الماء في المسبح؟', answer: 'للمسبح المستطيل اضرب الطول في العرض في متوسط عمق الماء. إذا كان القاع مائلاً فمتوسط العمق يساوي مجموع العمق الضحل والعميق مقسوماً على 2.' },
    { question: 'ما هو قانون حساب حجم الكرة والمخروط؟', answer: 'حجم الكرة V = ⁴⁄₃πr³، وحجم المخروط V = ⅓πr²h. يرمز r إلى نصف القطر وh إلى الارتفاع العمودي.' },
    { question: 'المتر المكعب كم لتر يساوي؟', answer: 'المتر المكعب الواحد يساوي 1,000 لتر بالضبط. للتحويل من اللترات إلى م³ اقسم على 1,000.' },
  ],
  hi: [
    { question: 'बेलन (Cylinder) का आयतन निकालने का सूत्र क्या है?', answer: 'सूत्र V = πr²h है। अंदर की त्रिज्या r का वर्ग करके उसे π और ऊँचाई h से गुणा करें। सभी माप समान या परिवर्तनीय इकाइयों में होने चाहिए।' },
    { question: 'पानी की टंकी (Water Tank) में कितने लीटर पानी आएगा कैसे निकालें?', answer: 'टंकी के अंदर का आयतन m³ में निकालें। आयताकार टंकी के लिए लंबाई × चौड़ाई × ऊँचाई और बेलनाकार टंकी के लिए V = πr²h लगाएँ। m³ को 1,000 से गुणा करने पर लीटर मिलते हैं।' },
    { question: 'घनाभ (Cuboid) और घन (Cube) का आयतन कैसे ज्ञात करें?', answer: 'घनाभ का आयतन V = लंबाई × चौड़ाई × ऊँचाई है। घन की सभी भुजाएँ बराबर होती हैं, इसलिए उसका आयतन V = a³ है।' },
    { question: '1 क्यूबिक मीटर (m³) में कितने लीटर होते हैं?', answer: 'एक क्यूबिक मीटर में ठीक 1,000 लीटर होते हैं। लीटर से m³ में बदलने के लिए 1,000 से भाग दें।' },
    { question: 'गोले (Sphere) और शंकु (Cone) का आयतन कैसे निकालते हैं?', answer: 'गोले का आयतन V = ⁴⁄₃πr³ और शंकु का आयतन V = ⅓πr²h है। r त्रिज्या और h लंबवत ऊँचाई है।' },
  ],
};
