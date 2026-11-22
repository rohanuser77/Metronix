export type Locale = "en" | "hi";

export interface TranslationDictionary {
  [key: string]: string;
}

export type TranslationKey =
  | "nav_features"
  | "nav_how_it_works"
  | "nav_virtual_labs"
  | "nav_scholarships"
  | "nav_for_schools"
  | "nav_about"
  | "nav_get_started"
  | "hero_badge"
  | "hero_title_1"
  | "hero_title_accent"
  | "hero_subtitle"
  | "hero_cta_try_ai"
  | "hero_cta_explore_labs"
  | "hero_trust_offline"
  | "hero_trust_ncert"
  | "hero_trust_scholarships"
  | "student_journey_title"
  | "student_journey_sub"
  | "student_journey_example"
  | "step1_title"
  | "step1_desc"
  | "step2_title"
  | "step2_desc"
  | "step3_title"
  | "step3_desc"
  | "step4_title"
  | "step4_desc"
  | "ai_solver_title"
  | "ai_solver_sub"
  | "ai_solver_placeholder"
  | "ai_solver_button"
  | "ai_solver_sample_1"
  | "ai_solver_sample_2"
  | "ai_solver_sample_3"
  | "capabilities_title"
  | "capabilities_sub"
  | "cap_labs_title"
  | "cap_labs_desc"
  | "cap_ai_title"
  | "cap_ai_desc"
  | "cap_scholarship_title"
  | "cap_scholarship_desc"
  | "cap_offline_title"
  | "cap_offline_desc"
  | "cta_banner_title"
  | "cta_banner_sub"
  | "cta_banner_button"
  | "footer_tagline"
  | "footer_rights";

export const translations: Record<Locale, Record<TranslationKey, string>> = {
  en: {
    nav_features: "Features",
    nav_how_it_works: "Student Journey",
    nav_virtual_labs: "Virtual Labs",
    nav_scholarships: "Scholarships",
    nav_for_schools: "For Institutions",
    nav_about: "About",
    nav_get_started: "Get Started",
    hero_badge: "Offline-First STEM Learning Platform",
    hero_title_1: "Quality STEM Education,",
    hero_title_accent: "Everywhere.",
    hero_subtitle: "Metronix provides Class 6–12 students with curriculum-aligned virtual science laboratories, an intelligent 24/7 AI study assistant, and direct scholarship discovery—engineered to operate reliably with minimal or no internet connectivity.",
    hero_cta_try_ai: "Try AI Study Assistant",
    hero_cta_explore_labs: "Explore Virtual Labs",
    hero_trust_offline: "Operates 100% Offline",
    hero_trust_ncert: "NCERT & State Curriculum Aligned",
    hero_trust_scholarships: "Comprehensive Scholarship Matcher",
    student_journey_title: "How Metronix Works for a Student",
    student_journey_sub: "Experience how an individual learner uses Metronix to master complex STEM concepts independently.",
    student_journey_example: "Example Student: Aarav Sharma, Grade 10 (Secondary School)",
    step1_title: "01. Morning Review & Micro-Lessons",
    step1_desc: "Aarav opens concise, 10-minute conceptual modules downloaded once over local Wi-Fi. No active internet connection is required during study sessions.",
    step2_title: "02. Hands-on Virtual Laboratory Practice",
    step2_desc: "He conducts simulated physics experiments—such as verifying Ohm's Law and studying lens focal lengths—directly on an entry-level smartphone.",
    step3_title: "03. Real-Time Clarification with AI Tutor",
    step3_desc: "When encountering a challenging numerical problem, Aarav queries the Metronix AI assistant for structured, step-by-step conceptual guidance.",
    step4_title: "04. Scholarship Discovery & Institutional Pathways",
    step4_desc: "Metronix maps his academic progress to central and state merit scholarships, providing eligibility requirements and application timelines.",
    ai_solver_title: "Metronix AI Study Assistant",
    ai_solver_sub: "Ask any academic question across Physics, Chemistry, Mathematics, or Biology for an immediate structured explanation.",
    ai_solver_placeholder: "Type a science or math question (e.g., Explain Newton's First Law with practical examples)...",
    ai_solver_button: "Ask Assistant",
    ai_solver_sample_1: "Explain Newton's First Law of Motion",
    ai_solver_sample_2: "How does soil pH affect plant nutrient absorption?",
    ai_solver_sample_3: "What are the eligibility criteria for the NMMSS Scholarship?",
    capabilities_title: "Core Educational Capabilities",
    capabilities_sub: "A focused learning ecosystem built for deep conceptual understanding and academic equity.",
    cap_labs_title: "Interactive Virtual Labs",
    cap_labs_desc: "Over 50 curriculum-mapped science simulations allowing students to manipulate variables, observe reactions, and record data without physical laboratory hardware.",
    cap_ai_title: "Intelligent Socratic Tutor",
    cap_ai_desc: "A patient AI study companion that guides students through problem-solving methodologies rather than simply providing rote answers.",
    cap_scholarship_title: "Scholarship & Pathway Navigator",
    cap_scholarship_desc: "Automated eligibility filtering across national, state, and foundation grant programs to eliminate financial barriers to higher secondary education.",
    cap_offline_title: "Bandwidth-Agnostic Architecture",
    cap_offline_desc: "Designed from first principles to synchronize content lightweightly, enabling full functionality on low-spec hardware and 2G mobile data.",
    cta_banner_title: "Empower Your Learning Journey Today",
    cta_banner_sub: "Join thousands of students and educators utilizing Metronix for verified STEM excellence.",
    cta_banner_button: "Request Early Access",
    footer_tagline: "Empowering every student with accessible, rigorous, and offline-capable STEM education.",
    footer_rights: "All rights reserved. Metronix Education Technologies.",
  },
  hi: {
    nav_features: "विशेषताएं",
    nav_how_it_works: "विद्यार्थी यात्रा",
    nav_virtual_labs: "वर्चुअल लैब्स",
    nav_scholarships: "छात्रवृत्तियां",
    nav_for_schools: "संस्थानों के लिए",
    nav_about: "हमारे बारे में",
    nav_get_started: "शुरू करें",
    hero_badge: "ऑफलाइन-प्रथम एसटीईएम शिक्षण मंच",
    hero_title_1: "गुणवत्तापूर्ण विज्ञान और गणित शिक्षा,",
    hero_title_accent: "हर विद्यार्थी तक।",
    hero_subtitle: "मेट्रोनिक्स कक्षा 6 से 12 तक के छात्रों को पाठ्यक्रम-आधारित वर्चुअल प्रयोगशालाएं, 24/7 एआई अध्ययन सहायक और छात्रवृत्ति मार्गदर्शन प्रदान करता है—जो बिना इंटरनेट के भी सुचारू रूप से कार्य करता है।",
    hero_cta_try_ai: "एआई अध्ययन सहायक आज़माएं",
    hero_cta_explore_labs: "वर्चुअल लैब्स देखें",
    hero_trust_offline: "शत-प्रतिशत ऑफलाइन सक्षम",
    hero_trust_ncert: "एनसीईआरटी एवं राज्य पाठ्यक्रम आधारित",
    hero_trust_scholarships: "व्यापक छात्रवृत्ति मार्गदर्शक",
    student_journey_title: "विद्यार्थी के लिए मेट्रोनिक्स की कार्यप्रणाली",
    student_journey_sub: "देखें कि कैसे एक छात्र मेट्रोनिक्स की सहायता से जटिल वैज्ञानिक सिद्धांतों को स्वतंत्र रूप से समझता है।",
    student_journey_example: "उदाहरण विद्यार्थी: आरव शर्मा, कक्षा 10",
    step1_title: "01. प्रातःकालीन समीक्षा एवं सूक्ष्म-पाठ",
    step1_desc: "आरव वाई-फाई से एक बार डाउनलोड किए गए 10-मिनट के स्पष्ट मॉड्यूल्स का अध्ययन करता है। अध्ययन के दौरान सक्रिय इंटरनेट की आवश्यकता नहीं होती।",
    step2_title: "02. व्यावहारिक वर्चुअल प्रयोगशाला अभ्यास",
    step2_desc: "वह सीधे अपने स्मार्टफोन पर भौतिकी के प्रयोग—जैसे ओम के नियम का सत्यापन और लेंस की फोकस दूरी—का सुरक्षित अनुकरण करता है।",
    step3_title: "03. एआई शिक्षक के साथ त्वरित शंका समाधान",
    step3_desc: "किसी कठिन प्रश्न पर अटकने पर, आरव मेट्रोनिक्स एआई सहायक से चरणबद्ध और तार्किक मार्गदर्शन प्राप्त करता है।",
    step4_title: "04. छात्रवृत्ति खोज एवं उच्च शिक्षा के अवसर",
    step4_desc: "मेट्रोनिक्स उसकी शैक्षणिक प्रगति के आधार पर केंद्रीय और राज्य स्तरीय मेरिट छात्रवृत्तियों की पात्रता और समयसीमा प्रदान करता है।",
    ai_solver_title: "मेट्रोनिक्स एआई अध्ययन सहायक",
    ai_solver_sub: "भौतिकी, रसायन, गणित अथवा जीव विज्ञान से संबंधित कोई भी प्रश्न पूछें और तत्काल सुव्यवस्थित उत्तर प्राप्त करें।",
    ai_solver_placeholder: "अपना वैज्ञानिक या गणितीय प्रश्न यहां लिखें...",
    ai_solver_button: "प्रश्न पूछें",
    ai_solver_sample_1: "न्यूटन के गति के प्रथम नियम की व्याख्या करें",
    ai_solver_sample_2: "मिट्टी का पीएच पौधों के पोषण को कैसे प्रभावित करता है?",
    ai_solver_sample_3: "एनएमएमएसएस छात्रवृत्ति के लिए पात्रता मानदंड क्या हैं?",
    capabilities_title: "प्रमुख शैक्षणिक क्षमताएं",
    capabilities_sub: "गहन वैचारिक स्पष्टता और शैक्षणिक समानता के लिए निर्मित एक केंद्रित शिक्षण प्रणाली।",
    cap_labs_title: "संवादात्मक वर्चुअल लैब्स",
    cap_labs_desc: "50 से अधिक वैज्ञानिक प्रयोग जो छात्रों को भौतिक प्रयोगशाला के बिना भी उपकरणों को नियंत्रित करने और परिणाम देखने की सुविधा देते हैं।",
    cap_ai_title: "बुद्धिमान अध्ययन साथी",
    cap_ai_desc: "एक मार्गदर्शक एआई शिक्षक जो केवल उत्तर देने के बजाय समस्या-समाधान की वैज्ञानिक पद्धति सिखाता है।",
    cap_scholarship_title: "छात्रवृत्ति खोजक",
    cap_scholarship_desc: "उच्च शिक्षा के वित्तीय अवरोधों को दूर करने के लिए राष्ट्रीय एवं राज्य छात्रवृत्तियों की स्वचालित पात्रता जांच।",
    cap_offline_title: "कम बैंडविड्थ पर सुगम संचालन",
    cap_offline_desc: "सीमित इंटरनेट और सामान्य स्मार्टफ़ोन पर भी पूर्ण गति से कार्य करने के लिए तकनीकी रूप से अनुकूलित।",
    cta_banner_title: "अपनी शैक्षणिक यात्रा को आज ही सशक्त बनाएं",
    cta_banner_sub: "मेट्रोनिक्स के साथ अध्ययन कर रहे हजारों छात्रों और शिक्षकों से जुड़ें।",
    cta_banner_button: "अर्ली एक्सेस का अनुरोध करें",
    footer_tagline: "हर विद्यार्थी को सुलभ, व्यवस्थित एवं गुणवत्तापूर्ण एसटीईएम शिक्षा प्रदान करने के प्रति समर्पित।",
    footer_rights: "सर्वाधिकार सुरक्षित। मेट्रोनिक्स एजुकेशन टेक्नोलॉजीज।",
  },
};
