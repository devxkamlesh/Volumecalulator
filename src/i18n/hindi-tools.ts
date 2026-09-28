export interface HindiFaq {
  question: string;
  answer: string;
}

export interface HindiPracticalExample {
  title: string;
  desc: string;
}

export interface HindiToolDetail {
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
  practicalExamples: HindiPracticalExample[];
  faqs: HindiFaq[];
  relatedHindiSlugs: string[];
  inputLabels: Record<string, string>;
}

export const HINDI_TOOLS: Record<string, HindiToolDetail> = {
  'cube-volume-calculator': {
    slug: 'cube-volume-calculator',
    englishSlug: 'cube-volume-calculator',
    shapeId: 'cube',
    shapeName: 'घन',
    categoryLabel: 'मूल त्रिविमीय आकृतियां',
    title: 'घन का आयतन कैलकुलेटर',
    h1: 'घन का आयतन कैलकुलेटर',
    metaDescription: 'भुजा की लंबाई से घन का आयतन और कुल पृष्ठीय क्षेत्रफल निकालें। लीटर, घन मीटर और घन फुट में त्वरित रूपांतरण।',
    keywords: 'घन का आयतन कैलकुलेटर, cube ka volume formula, ghan ka aayatan kaise nikale, ghan ka aayatan, cube volume in liters',
    shortTagline: 'घन की भुजा नापकर कुल आयतन, पानी की क्षमता और पृष्ठीय क्षेत्रफल निकालें।',
    howToCalculate: [
      'घन की किसी एक भुजा की लंबाई (a) नापें, क्योंकि घन की सभी भुजाएं बराबर होती हैं।',
      'भुजा की लंबाई को तीन बार गुणा करें: V = a × a × a = a³।',
      'प्राप्त परिणाम को अपनी आवश्यकतानुसार लीटर या घन मीटर में बदलें।',
    ],
    formulaHtml: 'V = a³',
    formulaNote: 'जहाँ a घन की भुजा है। कुल पृष्ठीय क्षेत्रफल सूत्र: A = 6a²।',
    practicalExamples: [
      {
        title: 'घनाकार भंडारण बॉक्स',
        desc: '50 सेमी भुजा वाले बॉक्स का आयतन 50 × 50 × 50 = 125,000 घन सेमी होता है, जो ठीक 125 लीटर के बराबर है।',
      },
      {
        title: 'कंक्रीट का घनाकार ब्लॉक',
        desc: 'भवन निर्माण में 1.5 मीटर भुजा वाले कंक्रीट ब्लॉक के लिए 3.375 घन मीटर कंक्रीट की आवश्यकता होती है।',
      },
      {
        title: 'घनाकार पानी की टंकी',
        desc: '1 मीटर भुजा वाली पानी की टंकी में ठीक 1,000 लीटर पानी संग्रहित किया जा सकता है।',
      },
    ],
    faqs: [
      {
        question: 'घन का आयतन कैसे निकालें?',
        answer: 'भुजा को तीन बार गुणा करें: V = a³ (जहाँ a भुजा की लंबाई है)।',
      },
      {
        question: 'कुल पृष्ठीय क्षेत्रफल (S) से आयतन कैसे निकालें?',
        answer: 'भुजा a = √(S / 6) निकालें, फिर आयतन V = a³ की गणना करें।',
      },
      {
        question: '1 मीटर के घन में कितने लीटर पानी आता है?',
        answer: '1 घन मीटर (m³) में ठीक 1,000 लीटर पानी आता है।',
      },
    ],
    relatedHindiSlugs: [
      'rectangular-prism-volume-calculator',
      'cylinder-volume-calculator',
      'sphere-volume-calculator',
    ],
    inputLabels: {
      edge: 'भुजा की लंबाई (a)',
    },
  },

  'rectangular-prism-volume-calculator': {
    slug: 'rectangular-prism-volume-calculator',
    englishSlug: 'box-volume-calculator',
    shapeId: 'rectangular_prism',
    shapeName: 'घनाभ / बॉक्स',
    categoryLabel: 'मूल त्रिविमीय आकृतियां',
    title: 'घनाभ का आयतन कैलकुलेटर',
    h1: 'घनाभ का आयतन कैलकुलेटर',
    metaDescription: 'लंबाई, चौड़ाई और ऊंचाई से घनाभ या बॉक्स का आयतन निकालें। घन मीटर, लीटर और कार्टन सीबीएम का सटीक हिसाब।',
    keywords: 'घनाभ का आयतन कैलकुलेटर, box volume calculator in cubic meters, ghanabh ka aayatan, carton cbm calculator, rectangular prism volume',
    shortTagline: 'कार्टन बॉक्स, कमरे और कंटेनर का आयतन व लीटर क्षमता आसानी से निकालें।',
    howToCalculate: [
      'बॉक्स की लंबाई (l), चौड़ाई (w) और ऊंचाई (h) को समान इकाई में मापें।',
      'तीनों मापों का आपस में गुणा करें: V = l × w × h।',
      'सेंटीमीटर से क्यूबिक मीटर में बदलने के लिए गुणनफल को 10,00,000 से भाग दें।',
    ],
    formulaHtml: 'V = l × w × h',
    formulaNote: 'जहाँ l लंबाई, w चौड़ाई और h ऊंचाई है। पृष्ठीय क्षेत्रफल: A = 2(lw + lh + wh)।',
    practicalExamples: [
      {
        title: 'शिपिंग कार्टन बॉक्स',
        desc: '60 सेमी × 40 सेमी × 30 सेमी के कार्टन का आयतन 72,000 घन सेमी यानी 0.072 क्यूबिक मीटर (CBM) होता है।',
      },
      {
        title: 'कमरे में हवा का आयतन',
        desc: '5 मीटर लंबे, 4 मीटर चौड़े और 3 मीटर ऊंचे कमरे में कुल 60 घन मीटर यानी 60,000 लीटर हवा समाती है।',
      },
      {
        title: 'पानी का आयताकार हौज',
        desc: '2 मीटर × 1.5 मीटर × 1 मीटर माप वाले हौज की कुल जल संचयन क्षमता 3,000 लीटर होती है।',
      },
    ],
    faqs: [
      {
        question: 'घनाभ का आयतन निकालने का सूत्र क्या है?',
        answer: 'आयतन का सूत्र V = l × w × h (लंबाई × चौड़ाई × ऊंचाई) है।',
      },
      {
        question: 'कार्टन बॉक्स का क्यूबिक मीटर (m³) कैसे निकालें?',
        answer: 'सेंटीमीटर में तीनों विमाओं का गुणा करें और 10,00,000 से भाग दें।',
      },
      {
        question: 'आयतन को लीटर में कैसे बदलें?',
        answer: 'सेंटीमीटर क्यूब (cm³) मान को 1,000 से भाग दें या घन मीटर (m³) को 1,000 से गुणा करें।',
      },
    ],
    relatedHindiSlugs: [
      'cube-volume-calculator',
      'cylinder-volume-calculator',
      'trapezoidal-prism-volume-calculator',
    ],
    inputLabels: {
      length: 'लंबाई (l)',
      width: 'चौड़ाई (w)',
      height: 'ऊंचाई (h)',
    },
  },

  'cylinder-volume-calculator': {
    slug: 'cylinder-volume-calculator',
    englishSlug: 'cylinder-volume-calculator',
    shapeId: 'cylinder',
    shapeName: 'बेलन',
    categoryLabel: 'वक्राकार ठोस',
    title: 'बेलन का आयतन कैलकुलेटर',
    h1: 'बेलन का आयतन कैलकुलेटर',
    metaDescription: 'त्रिज्या और ऊंचाई से बेलन का आयतन निकालें। पानी की गोल टंकी, ड्रम और पाइप की लीटर क्षमता ज्ञात करें।',
    keywords: 'बेलन का आयतन कैलकुलेटर, cylinder volume calculator in liters, belan ka aayatan sutra, water tank capacity in liters, belan ka aayatan',
    shortTagline: 'बेलनाकार ड्रम, पाइप और टंकियों का आयतन व क्षमता तुरंत निकालें।',
    howToCalculate: [
      'वृत्ताकार आधार की त्रिज्या (r) और बेलन की सीधी ऊंचाई (h) नापें।',
      'त्रिज्या का वर्ग करें (r²) और उसे पाई (π ≈ 3.14159) से गुणा करें।',
      'प्राप्त आधार क्षेत्रफल को ऊंचाई से गुणा करें: V = π × r² × h।',
    ],
    formulaHtml: 'V = π · r² · h',
    formulaNote: 'जहाँ r आधार त्रिज्या और h ऊंचाई है। वक्र पृष्ठ क्षेत्रफल: A = 2πrh।',
    practicalExamples: [
      {
        title: 'पानी की गोल सिंटेक्स टंकी',
        desc: '1 मीटर त्रिज्या और 2 मीटर ऊंचाई वाली गोल टंकी का आयतन 6.283 घन मीटर यानी 6,283 लीटर होता है।',
      },
      {
        title: 'डीजल और तेल का ड्रम',
        desc: '30 सेमी त्रिज्या और 90 सेमी ऊंचाई का मानक ड्रम लगभग 254.4 लीटर तरल धारण कर सकता है।',
      },
      {
        title: 'कंक्रीट का गोल खंभा',
        desc: '40 सेमी व्यास और 3 मीटर ऊंचे खंभे की ढलाई के लिए 0.377 घन मीटर कंक्रीट लगती है।',
      },
    ],
    faqs: [
      {
        question: 'बेलन का आयतन सूत्र क्या है?',
        answer: 'सूत्र V = π · r² · h है, जहाँ r त्रिज्या और h सीधी ऊंचाई है।',
      },
      {
        question: 'व्यास (d) से सीधा आयतन कैसे निकालें?',
        answer: 'व्यास के लिए सीधा सूत्र V = (π · d² · h) / 4 का उपयोग किया जाता है।',
      },
      {
        question: 'गोल पानी की टंकी में कितने लीटर पानी आता है?',
        answer: 'घन मीटर (m³) में आयतन निकालकर उसे 1,000 से गुणा करने पर कुल लीटर ज्ञात होते हैं।',
      },
    ],
    relatedHindiSlugs: [
      'pipe-volume-calculator',
      'cone-volume-calculator',
      'horizontal-tank-volume-calculator',
    ],
    inputLabels: {
      radius: 'त्रिज्या (r)',
      height: 'ऊंचाई (h)',
    },
  },

  'sphere-volume-calculator': {
    slug: 'sphere-volume-calculator',
    englishSlug: 'sphere-volume-calculator',
    shapeId: 'sphere',
    shapeName: 'गोला',
    categoryLabel: 'वक्राकार ठोस',
    title: 'गोले का आयतन कैलकुलेटर',
    h1: 'गोले का आयतन कैलकुलेटर',
    metaDescription: 'त्रिज्या या व्यास से गोले का आयतन निकालें। गेंद, खगोलीय पिंड और गोलाकार पानी की टंकी की क्षमता गणना।',
    keywords: 'गोले का आयतन कैलकुलेटर, gole ka aayatan formula, sphere volume from diameter, gole ka aayatan, sphere volume in liters',
    shortTagline: 'त्रिज्या या व्यास दर्ज कर गेंद और गोलाकार टैंक का आयतन निकालें।',
    howToCalculate: [
      'गोले के केंद्र से सतह तक की दूरी यानी त्रिज्या (r) नापें।',
      'त्रिज्या का घन निकालें (r³ = r × r × r)।',
      'उसे (4/3) × π से गुणा करें: V = (4/3) × π × r³।',
    ],
    formulaHtml: 'V = ⁴⁄₃ · π · r³',
    formulaNote: 'जहाँ r त्रिज्या है। गोले का सम्पूर्ण पृष्ठीय क्षेत्रफल: A = 4πr²।',
    practicalExamples: [
      {
        title: 'फुटबॉल का आयतन',
        desc: '11 सेमी त्रिज्या वाली फीफा फुटबॉल का आयतन लगभग 5,575 घन सेमी होता है।',
      },
      {
        title: 'गोलाकार गैस टैंक',
        desc: '5 मीटर त्रिज्या वाले गोलाकार एलपीजी टैंक में लगभग 5,23,598 लीटर गैस समाती है।',
      },
      {
        title: 'लोहे की गोली (शॉटपुट)',
        desc: '6 सेमी त्रिज्या की ठोस लोहे की गोली का आयतन 904.78 घन सेमी होता है।',
      },
    ],
    faqs: [
      {
        question: 'गोले के आयतन का सूत्र क्या है?',
        answer: 'गोले का सूत्र V = (4/3) · π · r³ है, जहाँ r गोले की त्रिज्या है।',
      },
      {
        question: 'व्यास से आयतन कैसे निकालें?',
        answer: 'व्यास (d) से सीधा सूत्र V = (π · d³) / 6 प्रयोग करें।',
      },
      {
        question: 'अर्धगोले (Hemisphere) का आयतन क्या होता है?',
        answer: 'अर्धगोले का आयतन पूर्ण गोले का आधा होता है: V = (2/3) · π · r³।',
      },
    ],
    relatedHindiSlugs: [
      'ellipsoid-volume-calculator',
      'spherical-cap-volume-calculator',
      'cylinder-volume-calculator',
    ],
    inputLabels: {
      radius: 'त्रिज्या (r)',
    },
  },

  'cone-volume-calculator': {
    slug: 'cone-volume-calculator',
    englishSlug: 'cone-volume-calculator',
    shapeId: 'cone',
    shapeName: 'शंकु',
    categoryLabel: 'वक्राकार ठोस',
    title: 'शंकु का आयतन कैलकुलेटर',
    h1: 'शंकु का आयतन कैलकुलेटर',
    metaDescription: 'त्रिज्या और ऊंचाई से शंकु का आयतन निकालें। आइसक्रीम कोन, फनल और अनाज के ढेरों की सटीक क्षमता।',
    keywords: 'शंकु का आयतन कैलकुलेटर, shanku ka aayatan formula, cone volume in liters, shanku ka aayatan, cone volume calculator',
    shortTagline: 'शंकु आकार के पात्रों, हॉपर और कीप का आयतन व धारिता तुरंत निकालें।',
    howToCalculate: [
      'शंकु के वृत्ताकार आधार की त्रिज्या (r) नापें।',
      'आधार से शीर्ष बिंदु तक की लंबवत ऊंचाई (h) ज्ञात करें।',
      'सूत्र V = (1/3) × π × r² × h लागू करें।',
    ],
    formulaHtml: 'V = ⅓ · π · r² · h',
    formulaNote: 'जहाँ r त्रिज्या और h लंबवत ऊंचाई है। तिर्यक ऊंचाई: l = √(r² + h²)।',
    practicalExamples: [
      {
        title: 'सड़क का ट्रैफिक कोन',
        desc: '15 सेमी आधार त्रिज्या और 60 सेमी ऊंचाई वाले खोखले कोन का आंतरिक आयतन 14.137 लीटर होता है।',
      },
      {
        title: 'अनाज का शंक्वाकार ढेर',
        desc: '3 मीटर त्रिज्या और 2 मीटर ऊंचे गेहूं के ढेरे में कुल 18.85 घन मीटर अनाज होता है।',
      },
      {
        title: 'आइसक्रीम वेफर कोन',
        desc: '2.5 सेमी त्रिज्या और 12 सेमी गहरे कोन में लगभग 78.5 घन सेमी आइसक्रीम आती है।',
      },
    ],
    faqs: [
      {
        question: 'शंकु का आयतन सूत्र क्या है?',
        answer: 'शंकु का सूत्र V = (1/3) · π · r² · h है, जहाँ r त्रिज्या और h ऊंचाई है।',
      },
      {
        question: 'शंकु और बेलन के आयतन में क्या संबंध है?',
        answer: 'समान आधार और समान ऊंचाई होने पर शंकु का आयतन बेलन का एक-तिहाई (1/3) होता है।',
      },
      {
        question: 'तिर्यक ऊंचाई (l) से लंबवत ऊंचाई कैसे निकालें?',
        answer: 'पाइथागोरस प्रमेय से लंबवत ऊंचाई h = √(l² - r²) निकाली जाती है।',
      },
    ],
    relatedHindiSlugs: [
      'cylinder-volume-calculator',
      'conical-frustum-volume-calculator',
      'square-pyramid-volume-calculator',
    ],
    inputLabels: {
      radius: 'आधार त्रिज्या (r)',
      height: 'लंबवत ऊंचाई (h)',
    },
  },

  'capsule-volume-calculator': {
    slug: 'capsule-volume-calculator',
    englishSlug: 'capsule-volume-calculator',
    shapeId: 'capsule',
    shapeName: 'कैप्सूल',
    categoryLabel: 'टैंक और औद्योगिक पाइप',
    title: 'कैप्सूल का आयतन कैलकुलेटर',
    h1: 'कैप्सूल का आयतन कैलकुलेटर',
    metaDescription: 'कैप्सूल आकार के दबाव पात्रों, एलपीजी बुलेट टैंकों और दवा कैप्सूल का आयतन व क्षमता तुरंत निकालें।',
    keywords: 'कैप्सूल का आयतन कैलकुलेटर, capsule tank volume calculator, capsule shape capacity, bullet tank volume, capsule volume formula',
    shortTagline: 'दवाइयों के कैप्सूल और औद्योगिक बुलेट गैस टैंकों का सटीक आयतन निकालें।',
    howToCalculate: [
      'मध्य भाग के बेलन की त्रिज्या (r) और उसकी सीधी लंबाई (a) नापें।',
      'दोनों सिरों पर स्थित दो अर्धगोले मिलकर एक पूर्ण गोला बनाते हैं।',
      'बेलन और पूर्ण गोले का आयतन जोड़ें: V = πr²( (4/3)r + a )।',
    ],
    formulaHtml: 'V = π · r² · (⁴⁄₃r + a)',
    formulaNote: 'जहाँ r त्रिज्या और a बेलनाकार भाग की लंबाई है। कुल लंबाई: L = a + 2r।',
    practicalExamples: [
      {
        title: 'एलपीजी बुलेट गैस टैंक',
        desc: '1.5 मीटर त्रिज्या और 8 मीटर बेलन लंबाई वाले बुलेट टैंक की कुल क्षमता लगभग 70,685 लीटर होती है।',
      },
      {
        title: 'फार्मास्युटिकल कैप्सूल',
        desc: '3 मिमी त्रिज्या और 14 मिमी बेलन लंबाई वाले दवा कैप्सूल का आंतरिक आयतन 509 घन मिमी होता है।',
      },
      {
        title: 'रासायनिक दबाव रिएक्टर',
        desc: 'रासायनिक संयंत्रों में दोनों सिरों पर गोल कैप्सूल नुमा रिएक्टरों का तरल आयतन ज्ञात करना।',
      },
    ],
    faqs: [
      {
        question: 'कैप्सूल का आयतन सूत्र क्या है?',
        answer: 'सूत्र V = π · r² · ((4/3)r + a) है, जहाँ a बेलनाकार भाग की लंबाई है।',
      },
      {
        question: 'कुल लंबाई (L) से बेलन की लंबाई कैसे निकालें?',
        answer: 'दोनों सिरों की दो त्रिज्याएं घटाकर बेलन की लंबाई a = L - 2r ज्ञात करें।',
      },
      {
        question: 'इसका उपयोग कहां होता है?',
        answer: 'दवाइयों के कैप्सूल और कारखानों में एलपीजी बुलेट गैस टैंकों की धारिता मापने में।',
      },
    ],
    relatedHindiSlugs: [
      'cylinder-volume-calculator',
      'horizontal-tank-volume-calculator',
      'sphere-volume-calculator',
    ],
    inputLabels: {
      radius: 'त्रिज्या (r)',
      side: 'बेलन भाग की लंबाई (a)',
    },
  },

  'spherical-cap-volume-calculator': {
    slug: 'spherical-cap-volume-calculator',
    englishSlug: 'spherical-cap-volume-calculator',
    shapeId: 'spherical_cap',
    shapeName: 'गुंबद / गोलीय चाप',
    categoryLabel: 'वक्राकार ठोस',
    title: 'गुंबद का आयतन कैलकुलेटर',
    h1: 'गुंबद का आयतन कैलकुलेटर',
    metaDescription: 'गोलीय चाप और स्थापत्य गुंबदों का आंतरिक आयतन निकालें। आधार त्रिज्या और ऊंचाई से हवा का परिमाण ज्ञात करें।',
    keywords: 'गुंबद का आयतन कैलकुलेटर, spherical dome volume, goliya khand ka aayatan, spherical cap volume formula, dome capacity',
    shortTagline: 'वास्तुकला गुंबदों और गोलीय ढक्कनों के नीचे का त्रिविमीय स्थान नापें।',
    howToCalculate: [
      'गुंबद के फर्श या आधार की त्रिज्या (r) नापें।',
      'फर्श के केंद्र से गुंबद के शिखर तक की सीधी ऊंचाई (h) मापें।',
      'सूत्र V = (π × h / 6) × (3r² + h²) में मान रखकर हल करें।',
    ],
    formulaHtml: 'V = ⅙ · π · h · (3r² + h²)',
    formulaNote: 'जहाँ r आधार त्रिज्या और h लंबवत ऊंचाई है। यदि गोले की त्रिज्या R ज्ञात हो: V = ⅓πh²(3R - h)।',
    practicalExamples: [
      {
        title: 'मंदिर या मस्जिद का गुंबद',
        desc: '6 मीटर आधार त्रिज्या और 4 मीटर ऊंचे गुंबद के नीचे 276.46 घन मीटर हवा समाती है।',
      },
      {
        title: 'औद्योगिक स्टोरेज साइलो ढक्कन',
        desc: 'अनाज और सीमेंट साइलो के ऊपरी गोलीय चाप वाले ढक्कन की भंडारण क्षमता का मापन।',
      },
      {
        title: 'ऑब्जर्वेटरी खगोलीय डोम',
        desc: 'दूरबीन वेधशाला के गोलाकार गुंबद में वातानुकूलन और वायु संचार के लिए आयतन गणना।',
      },
    ],
    faqs: [
      {
        question: 'गोलीय चाप का आयतन सूत्र क्या है?',
        answer: 'सूत्र V = (π · h / 6) · (3r² + h²) है, जहाँ r आधार त्रिज्या और h ऊंचाई है।',
      },
      {
        question: 'गुंबद के अंदर की हवा का आयतन कैसे निकालें?',
        answer: 'आधार त्रिज्या और केंद्र की सीधी ऊंचाई नापकर गोलीय चाप सूत्र में रखें।',
      },
      {
        question: 'अर्धगोले और गुंबद में क्या अंतर है?',
        answer: 'अर्धगोले में ऊंचाई आधार त्रिज्या के बराबर (h = r) होती है, जबकि गुंबद में ऊंचाई कुछ भी हो सकती है।',
      },
    ],
    relatedHindiSlugs: [
      'sphere-volume-calculator',
      'ellipsoid-volume-calculator',
      'cone-volume-calculator',
    ],
    inputLabels: {
      radius: 'आधार त्रिज्या (r)',
      height: 'चाप की ऊंचाई (h)',
    },
  },

  'conical-frustum-volume-calculator': {
    slug: 'conical-frustum-volume-calculator',
    englishSlug: 'conical-frustum-volume-calculator',
    shapeId: 'conical_frustum',
    shapeName: 'शंकु छिन्नक / बाल्टी',
    categoryLabel: 'प्रिज्म और पिरामिड',
    title: 'बाल्टी का आयतन कैलकुलेटर',
    h1: 'बाल्टी का आयतन कैलकुलेटर (शंकु छिन्नक)',
    metaDescription: 'पानी की बाल्टी, गमले और शंकु छिन्नक का आयतन निकालें। ऊपरी व निचली त्रिज्या से लीटर क्षमता की गणना।',
    keywords: 'बाल्टी का आयतन कैलकुलेटर, shanku chhinnak ka aayatan, bucket capacity in liters, conical frustum volume formula, balti ka aayatan',
    shortTagline: 'बाल्टी, फूलों के गमले और शंक्वाकार हॉपर में तरल की क्षमता ज्ञात करें।',
    howToCalculate: [
      'बाल्टी के ऊपरी मुंह की त्रिज्या (r₁) और तली की त्रिज्या (r₂) मापें।',
      'तली से ऊपर तक की सीधी लंबवत ऊंचाई (h) नापें।',
      'सूत्र V = (π × h / 3) × (r₁² + r₁r₂ + r₂²) में मान रखकर हल करें।',
    ],
    formulaHtml: 'V = ⅓ · π · h · (r₁² + r₁r₂ + r₂²)',
    formulaNote: 'जहाँ r₁ ऊपरी त्रिज्या, r₂ निचली त्रिज्या और h ऊंचाई है।',
    practicalExamples: [
      {
        title: 'घरेलू प्लास्टिक बाल्टी',
        desc: '15 सेमी ऊपरी त्रिज्या, 10 सेमी निचली त्रिज्या और 30 सेमी ऊंचाई की बाल्टी में लगभग 15.18 लीटर पानी आता है।',
      },
      {
        title: 'मिट्टी का गमला',
        desc: '12 सेमी ऊपर, 8 सेमी नीचे और 20 सेमी ऊंचे गमले में 6.49 लीटर मिट्टी समाती है।',
      },
      {
        title: 'सीमेंट कंक्रीट मिलाने वाला बर्तन',
        desc: 'निर्माण कार्यों में प्रयुक्त होने वाले शंक्वाकार तगाड़ी बर्तनों का आयतन मापना।',
      },
    ],
    faqs: [
      {
        question: 'शंकु छिन्नक का सूत्र क्या है?',
        answer: 'सूत्र V = (π · h / 3) · (r₁² + r₁r₂ + r₂²) है, जहाँ r₁ और r₂ दोनों सिरों की त्रिज्याएं हैं।',
      },
      {
        question: 'बाल्टी में कितने लीटर पानी आएगा कैसे निकालें?',
        answer: 'सेंटीमीटर में आयतन (cm³) निकालें और 1,000 से भाग देकर लीटर प्राप्त करें।',
      },
      {
        question: 'क्या सीधे व्यास से निकाल सकते हैं?',
        answer: 'हाँ, व्यासों (d₁, d₂) के लिए सूत्र V = (π · h / 12) · (d₁² + d₁d₂ + d₂²) है।',
      },
    ],
    relatedHindiSlugs: [
      'cone-volume-calculator',
      'cylinder-volume-calculator',
      'pipe-volume-calculator',
    ],
    inputLabels: {
      topRadius: 'शीर्ष त्रिज्या (r₁)',
      bottomRadius: 'आधार त्रिज्या (r₂)',
      height: 'ऊंचाई (h)',
    },
  },

  'ellipsoid-volume-calculator': {
    slug: 'ellipsoid-volume-calculator',
    englishSlug: 'ellipsoid-volume-calculator',
    shapeId: 'ellipsoid',
    shapeName: 'दीर्घवृत्तज',
    categoryLabel: 'वक्राकार ठोस',
    title: 'दीर्घवृत्तज का आयतन कैलकुलेटर',
    h1: 'दीर्घवृत्तज का आयतन कैलकुलेटर',
    metaDescription: 'तीनों अर्ध-अक्षों से दीर्घवृत्तज (अंडाकार ठोस) का आयतन निकालें। रग्बी बॉल, तरबूज और अंडाकार टैंक की गणना।',
    keywords: 'दीर्घवृत्तज का आयतन कैलकुलेटर, ellipsoid volume formula, rugby ball volume, dirghavrittaj ka aayatan, ellipsoid in liters',
    shortTagline: 'अंडाकार आकृतियों, रग्बी गेंदों और अंडाकार टैंकों का सटीक आयतन निकालें।',
    howToCalculate: [
      'केंद्र से तीनों दिशाओं के अर्ध-अक्षों (a, b, c) की लंबाई मापें।',
      'तीनों अर्ध-अक्षों का आपस में गुणा करें (a × b × c)।',
      'प्राप्त गुणनफल को (4/3) × π से गुणा करें: V = (4/3) × π × a × b × c।',
    ],
    formulaHtml: 'V = ⁴⁄₃ · π · a · b · c',
    formulaNote: 'जहाँ a, b, c तीनों अर्ध-अक्ष हैं। यदि a = b = c हो तो यह पूर्ण गोला बन जाता है।',
    practicalExamples: [
      {
        title: 'रग्बी की गेंद',
        desc: '14 सेमी, 9 सेमी और 9 सेमी अर्ध-अक्ष वाली रग्बी गेंद का आयतन लगभग 4,750 घन सेमी होता है।',
      },
      {
        title: 'बड़ा अंडाकार तरबूज',
        desc: '18 सेमी, 12 सेमी और 12 सेमी अर्ध-अक्ष वाले तरबूज का आयतन लगभग 10.85 लीटर होता है।',
      },
      {
        title: 'भूगर्भीय अंडाकार तेल भंडार',
        desc: 'भूगर्भ में प्राकृतिक रूप से बने दीर्घवृत्ताभ कूपों में कच्चे तेल का आयतन आंकना।',
      },
    ],
    faqs: [
      {
        question: 'दीर्घवृत्तज का आयतन सूत्र क्या है?',
        answer: 'सूत्र V = (4/3) · π · a · b · c है, जहाँ a, b, c तीन अर्ध-अक्ष हैं।',
      },
      {
        question: 'गोले और दीर्घवृत्तज में क्या अंतर है?',
        answer: 'गोले में तीनों त्रिज्याएं बराबर होती हैं, जबकि दीर्घवृत्तज में तीनों अक्ष भिन्न हो सकते हैं।',
      },
      {
        question: 'अर्ध-अक्ष मान कैसे निकालें?',
        answer: 'कुल लंबाई, चौड़ाई और ऊंचाई को 2 से भाग देने पर अर्ध-अक्ष मान प्राप्त होते हैं।',
      },
    ],
    relatedHindiSlugs: [
      'sphere-volume-calculator',
      'spherical-cap-volume-calculator',
      'capsule-volume-calculator',
    ],
    inputLabels: {
      axisA: 'अर्ध-अक्ष a (लंबाई / 2)',
      axisB: 'अर्ध-अक्ष b (चौड़ाई / 2)',
      axisC: 'अर्ध-अक्ष c (ऊंचाई / 2)',
    },
  },

  'square-pyramid-volume-calculator': {
    slug: 'square-pyramid-volume-calculator',
    englishSlug: 'square-pyramid-volume-calculator',
    shapeId: 'square_pyramid',
    shapeName: 'वर्गाकार पिरामिड',
    categoryLabel: 'प्रिज्म और पिरामिड',
    title: 'वर्गाकार पिरामिड का आयतन',
    h1: 'वर्गाकार पिरामिड का आयतन कैलकुलेटर',
    metaDescription: 'वर्गाकार आधार वाले पिरामिड का आयतन निकालें। मिस्र के पिरामिड और पिरामिडनुमा छतों की सटीक घन माप।',
    keywords: 'वर्गाकार पिरामिड का आयतन, square pyramid volume formula, pyramid ka aayatan, square base pyramid volume, pyramid in m3',
    shortTagline: 'वर्गाकार आधार और शीर्ष बिंदु वाले पिरामिड का आयतन व पदार्थ मात्रा निकालें।',
    howToCalculate: [
      'पिरामिड के वर्गाकार आधार की एक भुजा (a) नापें।',
      'आधार के केंद्र से शीर्ष तक की लंबवत सीधी ऊंचाई (h) मापें।',
      'सूत्र V = (1/3) × a² × h लागू करके गणना पूरी करें।',
    ],
    formulaHtml: 'V = ⅓ · a² · h',
    formulaNote: 'जहाँ a आधार भुजा और h लंबवत ऊंचाई है। तिर्यक ऊंचाई s = √(h² + (a/2)²)।',
    practicalExamples: [
      {
        title: 'गीज़ा का महान पिरामिड',
        desc: 'मूल 230.4 मीटर आधार भुजा और 146.6 मीटर ऊंचाई के अनुसार इसका आयतन लगभग 25,92,900 घन मीटर है।',
      },
      {
        title: 'पिरामिडनुमा मंडप की छत',
        desc: '4 मीटर भुजा और 2.5 मीटर ऊंचाई वाली छत के नीचे 13.33 घन मीटर स्थान रहता है।',
      },
      {
        title: 'कांच का सजावटी पिरामिड',
        desc: '10 सेमी भुजा और 15 सेमी ऊंचे ठोस शीशे के पिरामिड का आयतन 500 घन सेमी होता है।',
      },
    ],
    faqs: [
      {
        question: 'वर्गाकार पिरामिड का सूत्र क्या है?',
        answer: 'सूत्र V = (1/3) · a² · h है, जहाँ a आधार भुजा और h लंबवत ऊंचाई है।',
      },
      {
        question: 'तिर्यक ऊंचाई (s) से लंब ऊंचाई कैसे निकालें?',
        answer: 'पाइथागोरस प्रमेय से लंब ऊंचाई h = √(s² - (a/2)²) प्राप्त की जाती है।',
      },
      {
        question: 'इसमें 1/3 क्यों होता है?',
        answer: 'समान आधार और ऊंचाई वाले तीन पिरामिड मिलकर एक संपूर्ण वर्गाकार प्रिज्म बनाते हैं।',
      },
    ],
    relatedHindiSlugs: [
      'rectangular-pyramid-volume-calculator',
      'cone-volume-calculator',
      'triangular-prism-volume-calculator',
    ],
    inputLabels: {
      base: 'आधार भुजा (a)',
      height: 'लंबवत ऊंचाई (h)',
    },
  },

  'rectangular-pyramid-volume-calculator': {
    slug: 'rectangular-pyramid-volume-calculator',
    englishSlug: 'rectangular-pyramid-volume-calculator',
    shapeId: 'rectangular_pyramid',
    shapeName: 'आयताकार पिरामिड',
    categoryLabel: 'प्रिज्म और पिरामिड',
    title: 'आयताकार पिरामिड का आयतन',
    h1: 'आयताकार पिरामिड का आयतन कैलकुलेटर',
    metaDescription: 'आयताकार आधार वाले पिरामिड का आयतन निकालें। ढलान वाली छत, हूपर और पिरामिडनुमा संरचनाओं की गणना।',
    keywords: 'आयताकार पिरामिड का आयतन, rectangular pyramid volume, roof attic volume calculator, rectangular pyramid formula, pyramid in liters',
    shortTagline: 'आयताकार आधार वाली छतों और हॉपरों का त्रिविमीय आयतन तुरंत निकालें।',
    howToCalculate: [
      'आधार आयत की लंबाई (l) और चौड़ाई (w) नापें।',
      'आधार तल से शीर्ष बिंदु तक की लंबवत ऊंचाई (h) मापें।',
      'सूत्र V = (1/3) × l × w × h लागू करके हल करें।',
    ],
    formulaHtml: 'V = ⅓ · l · w · h',
    formulaNote: 'जहाँ l आधार लंबाई, w आधार चौड़ाई और h लंबवत ऊंचाई है।',
    practicalExamples: [
      {
        title: 'मकान की चार-ढलानी छत',
        desc: '10 मीटर लंबी, 6 मीटर चौड़ी और 3 मीटर ऊंची छत के नीचे कुल 60 घन मीटर आयतन रहता है।',
      },
      {
        title: 'अनाज भंडारण हॉपर',
        desc: '3 मीटर × 2 मीटर आयताकार शीर्ष और 2.4 मीटर गहरे हॉपर की क्षमता 4.8 घन मीटर यानी 4,800 लीटर होती है।',
      },
      {
        title: 'स्थापत्य स्मारकीय संरचना',
        desc: 'आयताकार आधार पर निर्मित स्मारकों के निर्माण में प्रयुक्त पत्थरों का कुल घनफल ज्ञात करना।',
      },
    ],
    faqs: [
      {
        question: 'आयताकार पिरामिड का सूत्र क्या है?',
        answer: 'सूत्र V = (1/3) · l · w · h है, जहाँ l लंबाई, w चौड़ाई और h ऊंचाई है।',
      },
      {
        question: 'छत का आयतन कैसे निकालें?',
        answer: 'आधार लंबाई, चौड़ाई और चोटी की लंबवत ऊंचाई का गुणा करके 3 से भाग दें।',
      },
      {
        question: 'आयतन की मानक इकाई क्या है?',
        answer: 'अंतरराष्ट्रीय मानक में घन मीटर (m³) या लीटर का उपयोग किया जाता है।',
      },
    ],
    relatedHindiSlugs: [
      'square-pyramid-volume-calculator',
      'rectangular-prism-volume-calculator',
      'triangular-prism-volume-calculator',
    ],
    inputLabels: {
      length: 'आधार लंबाई (l)',
      width: 'आधार चौड़ाई (w)',
      height: 'लंबवत ऊंचाई (h)',
    },
  },

  'triangular-prism-volume-calculator': {
    slug: 'triangular-prism-volume-calculator',
    englishSlug: 'triangular-prism-volume-calculator',
    shapeId: 'triangular_prism',
    shapeName: 'त्रिभुजाकार प्रिज्म',
    categoryLabel: 'प्रिज्म और पिरामिड',
    title: 'त्रिभुजाकार प्रिज्म का आयतन',
    h1: 'त्रिभुजाकार प्रिज्म का आयतन कैलकुलेटर',
    metaDescription: 'त्रिभुजाकार प्रिज्म का आयतन निकालें। टेंट, वेज और त्रिकोणीय छतों की घन मीटर व लीटर में गणना।',
    keywords: 'त्रिभुजाकार प्रिज्म का आयतन, triangular prism volume formula, wedge volume calculator, tent volume in liters, tribhujakar prism',
    shortTagline: 'कैंपिंग टेंट, वेज और त्रिकोणीय प्रिज्म का सटीक आयतन व धारिता निकालें।',
    howToCalculate: [
      'त्रिकोणीय सिरे के आधार (b) और त्रिभुज की ऊंचाई (h) को नापें।',
      'त्रिभुज का क्षेत्रफल निकालें: A = (1/2) × b × h।',
      'क्षेत्रफल को प्रिज्म की कुल लंबाई (L) से गुणा करें: V = A × L।',
    ],
    formulaHtml: 'V = ½ · b · h · L',
    formulaNote: 'जहाँ b त्रिभुज आधार, h त्रिभुज ऊंचाई और L प्रिज्म की लंबाई है।',
    practicalExamples: [
      {
        title: 'पारंपरिक कैंपिंग टेंट',
        desc: '2 मीटर आधार, 1.5 मीटर ऊंचाई और 3 मीटर लंबे टेंट का आंतरिक आयतन 4.5 घन मीटर होता है।',
      },
      {
        title: 'कांच का ऑप्टिकल प्रिज्म',
        desc: 'भौतिकी प्रयोगशाला में 5 सेमी आधार, 4 सेमी ऊंचाई और 10 सेमी लंबे ग्लास प्रिज्म का आयतन 100 घन सेमी होता है।',
      },
      {
        title: 'लकड़ी की पच्चर (वेज)',
        desc: 'भारी मशीनरी को स्थिर करने के लिए बनाई गई त्रिकोणीय वेज के लकड़ी का घनफल मापना।',
      },
    ],
    faqs: [
      {
        question: 'त्रिभुजाकार प्रिज्म का सूत्र क्या है?',
        answer: 'सूत्र V = (1/2) · b · h · L है, जहाँ b आधार, h ऊंचाई और L प्रिज्म की लंबाई है।',
      },
      {
        question: 'समबाहु त्रिभुज आधार वाले प्रिज्म का आयतन?',
        answer: 'समबाहु त्रिभुज आधार के लिए सूत्र V = (√3 / 4) · a² · L का प्रयोग होता है।',
      },
      {
        question: 'टेंट का आयतन कैसे निकालें?',
        answer: 'प्रवेश द्वार की चौड़ाई × ऊंचाई / 2 करके टेंट की कुल लंबाई से गुणा करें।',
      },
    ],
    relatedHindiSlugs: [
      'rectangular-prism-volume-calculator',
      'trapezoidal-prism-volume-calculator',
      'square-pyramid-volume-calculator',
    ],
    inputLabels: {
      base: 'त्रिभुज आधार (b)',
      height: 'त्रिभुज ऊंचाई (h)',
      length: 'प्रिज्म की लंबाई (L)',
    },
  },

  'pipe-volume-calculator': {
    slug: 'pipe-volume-calculator',
    englishSlug: 'pipe-volume-calculator',
    shapeId: 'hollow_cylinder',
    shapeName: 'खोखला बेलन / पाइप',
    categoryLabel: 'टैंक और औद्योगिक पाइप',
    title: 'पाइप का आयतन कैलकुलेटर',
    h1: 'पाइप का आयतन कैलकुलेटर (खोखला बेलन)',
    metaDescription: 'पाइप में पानी का आयतन और पाइप की दीवार का ठोस पदार्थ आयतन निकालें। बोरवेल, प्लंबिंग और स्टील पाइप की क्षमता।',
    keywords: 'पाइप का आयतन कैलकुलेटर, pipe water capacity in liters, khokhla belan ka aayatan, pipe volume calculator, plumbing pipe liters',
    shortTagline: 'पाइपलाइन में पानी की मात्रा और पाइप दीवार का ठोस पदार्थ घनफल निकालें।',
    howToCalculate: [
      'आंतरिक त्रिज्या (r) और बाहरी त्रिज्या (R) को समान इकाई में मापें।',
      'पाइप में जल क्षमता के लिए आंतरिक बेलन सूत्र लगाएं: V = π × r² × L।',
      'पाइप दीवार के पदार्थ आयतन के लिए सूत्र V = π × (R² - r²) × L प्रयोग करें।',
    ],
    formulaHtml: 'V = π · (R² - r²) · L',
    formulaNote: 'जहाँ R बाहरी त्रिज्या, r आंतरिक त्रिज्या और L लंबाई है। जल धारिता सूत्र: V = πr²L।',
    practicalExamples: [
      {
        title: 'घरेलू पीवीसी पानी का पाइप',
        desc: '50 मिमी (5 सेमी) आंतरिक व्यास और 10 मीटर लंबे पाइप में लगभग 19.63 लीटर पानी ठहरता है।',
      },
      {
        title: 'बोरवेल पाइपलाइन',
        desc: '100 मिमी आंतरिक व्यास वाली 50 मीटर गहरी बोरवेल पाइप में कुल 392.7 लीटर पानी भरा रहता है।',
      },
      {
        title: 'स्टील पाइप का वजन निर्धारण',
        desc: 'पाइप की धातु का ठोस आयतन निकालकर स्टील के घनत्व (7850 किग्रा/घन मीटर) से गुणा कर वजन जानना।',
      },
    ],
    faqs: [
      {
        question: 'पाइप में पानी की क्षमता कैसे निकालें?',
        answer: 'आंतरिक त्रिज्या (r) से सूत्र V = π · r² · L का उपयोग करें।',
      },
      {
        question: 'पाइप दीवार का ठोस आयतन क्या है?',
        answer: 'धातु आयतन का सूत्र V = π · (R² - r²) · L है, जहाँ R बाहरी व r आंतरिक त्रिज्या है।',
      },
      {
        question: '10 मीटर लंबी 50 मिमी आंतरिक पाइप में कितना पानी आएगा?',
        answer: 'इस पाइप में लगभग 19.63 लीटर पानी समाता है।',
      },
    ],
    relatedHindiSlugs: [
      'cylinder-volume-calculator',
      'horizontal-tank-volume-calculator',
      'capsule-volume-calculator',
    ],
    inputLabels: {
      outerRadius: 'बाहरी त्रिज्या (R)',
      innerRadius: 'आंतरिक त्रिज्या (r)',
      height: 'पाइप की लंबाई (L)',
    },
  },

  'torus-volume-calculator': {
    slug: 'torus-volume-calculator',
    englishSlug: 'torus-volume-calculator',
    shapeId: 'torus',
    shapeName: 'तोरस / ओ-रिंग',
    categoryLabel: 'वक्राकार ठोस',
    title: 'टोरस का आयतन कैलकुलेटर',
    h1: 'टोरस का आयतन कैलकुलेटर (ओ-रिंग / डोनट)',
    metaDescription: 'डोनट और ओ-रिंग आकार के टोरस का आयतन निकालें। मुख्य त्रिज्या और ट्यूब त्रिज्या से सीलिंग रिंग की गणना।',
    keywords: 'टोरस का आयतन कैलकुलेटर, o-ring volume formula, torus volume in liters, donut shape volume, torus formula in cm3',
    shortTagline: 'ओ-रिंग, रबर सील और डोनट नुमा गोलाकार वलयों का सटीक आयतन निकालें।',
    howToCalculate: [
      'टोरस के केंद्र से ट्यूब के केंद्र तक की मुख्य त्रिज्या (R) मापें।',
      'ट्यूब की अपनी अनुप्रस्थ काट त्रिज्या (r) नापें।',
      'सूत्र V = 2 × π² × R × r² लागू करके आयतन निकालें।',
    ],
    formulaHtml: 'V = 2 · π² · R · r²',
    formulaNote: 'जहाँ R मुख्य केंद्र त्रिज्या और r ट्यूब त्रिज्या है (R ≥ r)। पृष्ठीय क्षेत्रफल: A = 4π²Rr।',
    practicalExamples: [
      {
        title: 'ऑटोमोबाइल रबर ओ-रिंग',
        desc: 'R = 30 मिमी और r = 2.5 मिमी वाली सीलिंग ओ-रिंग का रबर आयतन 3,701 घन मिमी (3.7 सेमी³) होता है।',
      },
      {
        title: 'स्वीमिंग लाइफबॉय ट्यूब',
        desc: 'R = 40 सेमी और r = 10 सेमी वाले लाइफबॉय रिंग का कुल आंतरिक वायु आयतन लगभग 78.95 लीटर होता है।',
      },
      {
        title: 'डोनट खाद्य निर्माण',
        desc: 'बेकरी उत्पादन में मानक डोनट के आटे के आयतन और वजन का सटीक निर्धारण।',
      },
    ],
    faqs: [
      {
        question: 'टोरस (डोनट) का आयतन सूत्र क्या है?',
        answer: 'सूत्र V = 2 · π² · R · r² है, जहाँ R मुख्य त्रिज्या और r ट्यूब की त्रिज्या है।',
      },
      {
        question: 'ओ-रिंग का आयतन कैसे निकालें?',
        answer: 'क्रॉस-सेक्शन मोटाई w से r = w/2 और R = (आंतरिक व्यास + w)/2 सूत्र में रखें।',
      },
      {
        question: 'टोरस का कुल पृष्ठीय क्षेत्रफल क्या है?',
        answer: 'कुल पृष्ठीय क्षेत्रफल का सूत्र A = 4 · π² · R · r होता है।',
      },
    ],
    relatedHindiSlugs: [
      'pipe-volume-calculator',
      'cylinder-volume-calculator',
      'sphere-volume-calculator',
    ],
    inputLabels: {
      majorRadius: 'मुख्य त्रिज्या (R)',
      minorRadius: 'ट्यूब त्रिज्या (r)',
    },
  },

  'trapezoidal-prism-volume-calculator': {
    slug: 'trapezoidal-prism-volume-calculator',
    englishSlug: 'trapezoidal-prism-volume-calculator',
    shapeId: 'trapezoidal_prism',
    shapeName: 'समलंब प्रिज्म / खाई',
    categoryLabel: 'प्रिज्म और पिरामिड',
    title: 'समलंब प्रिज्म आयतन कैलकुलेटर',
    h1: 'समलंब प्रिज्म आयतन कैलकुलेटर',
    metaDescription: 'समलंब प्रिज्म, सिंचाई नहर और खाई की खुदाई का आयतन निकालें। ऊपर व नीचे की चौड़ाई और गहराई से घन मीटर की गणना।',
    keywords: 'समलंब प्रिज्म आयतन कैलकुलेटर, trench excavation volume, trapezoidal prism calculator, nahar ki khudai volume, samlamb prism aayatan',
    shortTagline: 'सिंचाई नहर, नाली, खाई और पशुओं के पानी के हौद का घनफल निकालें।',
    howToCalculate: [
      'ऊपरी चौड़ाई (a), निचली चौड़ाई (b) और लंबवत गहराई (h) नापें।',
      'समलंब अनुप्रस्थ काट का क्षेत्रफल निकालें: A = ((a + b) / 2) × h।',
      'क्षेत्रफल को खाई या प्रिज्म की लंबाई (L) से गुणा करें: V = A × L।',
    ],
    formulaHtml: 'V = ½ · (a + b) · h · L',
    formulaNote: 'जहाँ a ऊपरी चौड़ाई, b निचली चौड़ाई, h गहराई और L लंबाई है।',
    practicalExamples: [
      {
        title: 'सिंचाई नहर की खुदाई',
        desc: '3 मीटर ऊपर, 1.5 मीटर नीचे, 1 मीटर गहरी और 100 मीटर लंबी नहर की कुल मिट्टी खुदाई 225 घन मीटर होती है।',
      },
      {
        title: 'पशुओं का पानी पीने का हौद',
        desc: '80 सेमी ऊपर, 50 सेमी नीचे, 40 सेमी गहरा और 2 मीटर लंबा हौद 520 लीटर पानी रखता है।',
      },
      {
        title: 'सड़क किनारे पानी की नाली',
        desc: 'बारिश के पानी की निकासी के लिए समलंब आकार में बनाई जाने वाली नालियों की जल प्रवाह क्षमता।',
      },
    ],
    faqs: [
      {
        question: 'समलंब प्रिज्म का आयतन सूत्र क्या है?',
        answer: 'सूत्र V = ((a + b) / 2) · h · L है, जहाँ a ऊपर की चौड़ाई, b नीचे की, h गहराई और L लंबाई है।',
      },
      {
        question: 'खाई की मिट्टी (m³) कैसे निकालें?',
        answer: 'सभी मापों को मीटर में लेकर सीधे सूत्र में गुणा करने पर घन मीटर (CBM) प्राप्त होता है।',
      },
      {
        question: 'हौद में कितने लीटर पानी आएगा?',
        answer: 'सेंटीमीटर में आयतन (cm³) निकालें और 1,000 से भाग देकर लीटर प्राप्त करें।',
      },
    ],
    relatedHindiSlugs: [
      'triangular-prism-volume-calculator',
      'rectangular-prism-volume-calculator',
      'horizontal-tank-volume-calculator',
    ],
    inputLabels: {
      topWidth: 'ऊपरी चौड़ाई (a)',
      bottomWidth: 'निचली चौड़ाई (b)',
      height: 'गहराई या ऊंचाई (h)',
      length: 'कुल लंबाई (L)',
    },
  },

  'horizontal-tank-volume-calculator': {
    slug: 'horizontal-tank-volume-calculator',
    englishSlug: 'horizontal-tank-volume-calculator',
    shapeId: 'horizontal_tank_fill',
    shapeName: 'क्षैतिज बेलनाकार टैंक',
    categoryLabel: 'टैंक और औद्योगिक पाइप',
    title: 'क्षैतिज टैंक आयतन कैलकुलेटर',
    h1: 'क्षैतिज बेलनाकार टैंक आयतन कैलकुलेटर',
    metaDescription: 'क्षैतिज बेलनाकार टैंक में तेल और पानी की गहराई से लीटर निकालें। डिपस्टिक स्केल और अंशिक भराव का सटीक हिसाब।',
    keywords: 'क्षैतिज टैंक आयतन कैलकुलेटर, horizontal tank dipstick liters, tank volume calculation, diesel tank level liters, kshitij belan tank',
    shortTagline: 'डीजल और पानी के क्षैतिज टैंक में गेज स्केल सेमी से वास्तविक लीटर निकालें।',
    howToCalculate: [
      'टैंक की आंतरिक त्रिज्या (r) और कुल बेलनाकार लंबाई (L) नापें।',
      'डिपस्टिक स्केल से टैंक की तली से तरल की गहराई (h) नापें।',
      'वृत्तखंड के क्षेत्रफल सूत्र से तरल काट निकालें और लंबाई से गुणा करें।',
    ],
    formulaHtml: 'V = [r² · arccos((r-h)/r) - (r-h)√(2rh - h²)] · L',
    formulaNote: 'जहाँ r त्रिज्या, L लंबाई और h तरल गहराई है (0 ≤ h ≤ 2r)। कोण रेडियन में मापा जाता है।',
    practicalExamples: [
      {
        title: 'पेट्रोल पंप का अंडरग्राउंड डीजल टैंक',
        desc: '1 मीटर त्रिज्या और 5 मीटर लंबे टैंक में 0.5 मीटर गहराई पर लगभग 3,071 लीटर डीजल शेष होता है।',
      },
      {
        title: 'ट्रैक्टर पानी का टैंकर',
        desc: '0.6 मीटर त्रिज्या और 2.5 मीटर लंबे टैंकर में आधा भरे होने (h = 0.6 मी) पर 1,414 लीटर पानी होता है।',
      },
      {
        title: 'फैक्ट्री का रासायनिक भंडारण टैंक',
        desc: 'दैनिक स्टॉक रजिस्टर के लिए डिपस्टिक से तरल स्तर नापकर सटीक रासायनिक मात्रा की गणना।',
      },
    ],
    faqs: [
      {
        question: 'अधूरे भरे क्षैतिज टैंक में द्रव का आयतन कैसे निकालें?',
        answer: 'सूत्र V = [r² · arccos((r-h)/r) - (r-h)√(2rh - h²)] · L लागू किया जाता है।',
      },
      {
        question: 'स्केल सेमी और लीटर समानुपाती क्यों नहीं होते?',
        answer: 'क्योंकि वृत्ताकार टैंक बीच में सबसे चौड़ा और तली व शीर्ष पर संकरा होता है।',
      },
      {
        question: 'स्केल सेमी को लीटर में कैसे बदलें?',
        answer: 'सेमी में मापकर सूत्र से प्राप्त घन सेमी (cm³) को 1,000 से भाग देकर लीटर निकालें।',
      },
    ],
    relatedHindiSlugs: [
      'cylinder-volume-calculator',
      'capsule-volume-calculator',
      'pipe-volume-calculator',
    ],
    inputLabels: {
      radius: 'टैंक की त्रिज्या (r)',
      length: 'टैंक की लंबाई (L)',
      fillDepth: 'तरल की गहराई (h)',
    },
  },
};
