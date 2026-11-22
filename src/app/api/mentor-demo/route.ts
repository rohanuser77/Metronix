import { NextRequest, NextResponse } from "next/server";

interface MentorQuery {
  message: string;
  locale?: "en" | "hi";
}

const educationalAnswers: Record<string, { en: string; hi: string }> = {
  newton: {
    en: "Newton's First Law of Motion states that an object remains at rest, or in uniform motion in a straight line, unless acted upon by an external net force.\n\nKey Concepts:\n1. Inertia: The natural tendency of matter to resist any change in its velocity or state of rest.\n2. Real-World Application: When a moving bus or tractor suddenly brakes, your body continues moving forward because of inertia until an external force (such as a seatbelt or friction) halts it.\n3. Formula: Net Force = 0 implies Acceleration = 0 (Constant Velocity).",
    hi: "न्यूटन के गति का प्रथम नियम कहता है कि प्रत्येक वस्तु अपनी विरामावस्था अथवा एकसमान गति की अवस्था में तब तक बनी रहती है, जब तक कि उस पर कोई बाहरी असंतुलित बल न लगाया जाए।\n\nप्रमुख बिंदु:\n1. जड़त्व (Inertia): किसी वस्तु का वह प्राकृतिक गुण जो उसकी गति या विराम की स्थिति में परिवर्तन का विरोध करता है।\n2. व्यावहारिक उदाहरण: जब कोई वाहन या ट्रैक्टर अचानक रुकता है, तो जड़त्व के कारण यात्री आगे की ओर झुक जाता है।\n3. गणितीय संबंध: यदि कुल बाह्य बल = 0, तो त्वरण = 0।",
  },
  soil: {
    en: "Soil pH measures the acidity or alkalinity of agricultural soil on a logarithmic scale from 0 to 14, where 7.0 is neutral.\n\nKey Effects on Crop Growth:\n1. Nutrient Availability: Most primary nutrients (Nitrogen, Phosphorus, and Potassium) are most soluble and accessible to plant roots between pH 6.0 and 7.5.\n2. Acidic Soils (pH < 6.0): Can lead to aluminum toxicity and phosphorus deficiency. Solved by applying agricultural lime (calcium carbonate).\n3. Alkaline Soils (pH > 7.5): Often limit micronutrient uptake (such as iron and zinc). Treated using organic matter or gypsum.",
    hi: "मिट्टी का पीएच मान (pH) उसकी अम्लीयता अथवा क्षारीयता को 0 से 14 के पैमाने पर मापता है, जिसमें 7.0 उदासीन (Neutral) होता है।\n\nफसलों पर प्रभाव:\n1. पोषक तत्वों की उपलब्धता: अधिकांश मुख्य पोषक तत्व (नाइट्रोजन, फास्फोरस, पोटाश) 6.0 से 7.5 पीएच के बीच पौधों द्वारा सबसे प्रभावी ढंग से अवशोषित होते हैं।\n2. अम्लीय मिट्टी (pH < 6.0): इसमें फॉस्फोरस की कमी हो जाती है। इसे सुधारने के लिए बुझे चूने (कैल्शियम कार्बोनेट) का उपयोग किया जाता है।\n3. क्षारीय मिट्टी: जिप्सम अथवा जैविक खाद मिलाकर इसे संतुलित किया जाता है।",
  },
  scholarship: {
    en: "The National Means-cum-Merit Scholarship Scheme (NMMSS) provides financial assistance to meritorious students from economically weaker sections.\n\nEligibility Criteria:\n1. Minimum Academic Score: At least 55% marks (50% for SC/ST) in the Class 8 examination.\n2. Institutional Requirement: Must be enrolled in a regular Government, Local Body, or Government-aided school.\n3. Income Ceiling: Parental annual income must not exceed ₹3,50,000 from all sources.\n4. Grant Value: ₹12,000 per annum (₹1,000 per month) from Class 9 through Class 12.",
    hi: "नेशनल मीन्स-कम-मेरिट छात्रवृत्ति योजना (NMMSS) आर्थिक रूप से कमजोर वर्गों के मेधावी छात्रों को वित्तीय सहायता प्रदान करती है।\n\nपात्रता मानदंड:\n1. शैक्षणिक अंक: कक्षा 8 की परीक्षा में न्यूनतम 55% अंक (एससी/एसटी के लिए 50%)।\n2. विद्यालय प्रकार: छात्र का सरकारी अथवा सहायता प्राप्त विद्यालय में नियमित अध्ययनरत होना आवश्यक है।\n3. आय सीमा: माता-पिता की कुल वार्षिक आय ₹3,50,000 से अधिक नहीं होनी चाहिए।\n4. छात्रवृत्ति राशि: कक्षा 9 से 12 तक ₹12,000 प्रति वर्ष (₹1,000 प्रतिमाह)।",
  },
  default: {
    en: "Metronix Academic Assistant: Let us break down this topic systematically.\n\n1. Define the Core Principle: Review the fundamental definition established in your NCERT curriculum.\n2. Step-by-Step Derivation: Analyze how the independent variables affect the final outcome.\n3. Practical Observation: Connect the mathematical formulation to an everyday physical observation.\n\nFeel free to specify your grade level or subject to receive a focused breakdown with practice problems.",
    hi: "मेट्रोनिक्स शैक्षणिक सहायक: आइए इस विषय को चरणबद्ध तरीके से समझें।\n\n1. मूल सिद्धांत: अपने पाठ्यक्रम के अनुसार बुनियादी परिभाषा का विश्लेषण करें।\n2. चरणबद्ध समाधान: देखें कि विभिन्न कारक परिणाम को कैसे प्रभावित करते हैं।\n3. व्यावहारिक संबंध: गणितीय सूत्र को दैनिक जीवन के उदाहरणों से जोड़ें।\n\nअभ्यास प्रश्नों के लिए अपनी कक्षा अथवा विषय का उल्लेख करें।",
  },
};

export async function POST(req: NextRequest) {
  try {
    const body: MentorQuery = await req.json();
    const query = (body.message || "").toLowerCase();
    const lang = body.locale === "hi" ? "hi" : "en";

    let responseData = educationalAnswers.default[lang];

    if (query.includes("newton") || query.includes("motion") || query.includes("inertia") || query.includes("गति") || query.includes("जड़त्व")) {
      responseData = educationalAnswers.newton[lang];
    } else if (query.includes("soil") || query.includes("ph") || query.includes("plant") || query.includes("crop") || query.includes("मिट्टी")) {
      responseData = educationalAnswers.soil[lang];
    } else if (query.includes("scholarship") || query.includes("nmmss") || query.includes("grant") || query.includes("fees") || query.includes("छात्रवृत्ति")) {
      responseData = educationalAnswers.scholarship[lang];
    }

    return NextResponse.json({
      reply: responseData,
      status: "success",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    });
  } catch (err) {
    return NextResponse.json({ error: "Failed to generate academic response" }, { status: 500 });
  }
}
