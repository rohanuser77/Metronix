import Link from "next/link";

interface Step {
  number: string;
  stepNum: string;
  titleHindi: string;
  subtitle: string;
  details: string;
  accent: string;
  tilt: string;
  mockupText: {
    tag: string;
    headline: string;
    sub: string;
    stat: string;
  };
}

const steps: Step[] = [
  {
    number: "01",
    stepNum: "Kadam 1",
    titleHindi: "Download karo — Offline bhi chalega",
    subtitle: "Pehle hafte ka saara syllabus 10MB mein",
    details: "Gaon ke haat ya school ke WiFi se ek baar download karo. Uske baad bina SIM ya bina internet ke pure mahine lab, notes aur test practice chalegi.",
    accent: "#0EA5E9",
    tilt: "-rotate-2",
    mockupText: {
      tag: "Offline Sync",
      headline: "Class 9 Science Pack",
      sub: "Downloaded • 0 MB Data Consumed",
      stat: "42 Topics Ready Offline",
    },
  },
  {
    number: "02",
    stepNum: "Kadam 2",
    titleHindi: "AI mentor se apni pace pe seekho",
    subtitle: "Koyi jaldbaazi nahi, bina kisi jhijhak ke",
    details: "Class mein teacher se poochte hue sharam aati thi? Mentorix AI se 10 baar poocho — Hindi mein, rozmarra ke desi udaharan (examples) ke saath.",
    accent: "#F97316",
    tilt: "rotate-2",
    mockupText: {
      tag: "AI Dost Chat",
      headline: "Newton ka Niyam",
      sub: "\"Tractor ke brake lagne par kyu jhukte hain?\"",
      stat: "Instant Doubt Solution",
    },
  },
  {
    number: "03",
    stepNum: "Kadam 3",
    titleHindi: "Scholarship lo, college jao — Free mein",
    subtitle: "Paise ki wajah se padhai nahi rukegi",
    details: "Hamara scholarship radar tumhari aamdani, category aur marks se match karke direct application guide karta hai. Zero cost higher education ka sapna sach.",
    accent: "#22C55E",
    tilt: "-rotate-1",
    mockupText: {
      tag: "Scholarship Matched",
      headline: "INSPIRE + State Medhavi",
      sub: "Eligible for ₹50,000/year Grant",
      stat: "Form Ready in Hindi",
    },
  },
];

export default function HowItWorks() {
  return (
    <section className="section-wrapper py-section bg-cream border-b border-border">
      <div className="content-container text-left">
        <div className="max-w-2xl mb-16">
          <p className="text-caption text-saffron font-semibold uppercase tracking-widest mb-3">
            Student Journey
          </p>
          <h2 className="text-display-lg text-charcoal font-hindi">
            Kaise Kaam Karta Hai?
          </h2>
          <p className="text-body-lg text-ink font-hindi mt-3">
            Sirf 3 aasan kadam — phone kholo, seekho, aur aage badho. Koyi mehenga coaching institute nahi chahiye.
          </p>
        </div>

        {/* 3 Step Cards with large typographic editorial numbers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-parchment border-2 border-charcoal rounded-panel p-8 shadow-hard-lg flex flex-col justify-between overflow-hidden"
            >
              {/* Huge typographic step number in background (editorial magazine style) */}
              <div
                className="absolute top-2 right-4 text-[7rem] sm:text-[8.5rem] font-extrabold text-charcoal/[0.06] select-none pointer-events-none font-mono leading-none"
                aria-hidden="true"
              >
                {step.number}
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="text-caption font-bold px-2 py-0.5 rounded-badge uppercase text-white shadow-hard-sm"
                    style={{ backgroundColor: step.accent }}
                  >
                    {step.stepNum}
                  </span>
                </div>

                <h3 className="text-display-sm text-charcoal font-hindi mb-2">
                  {step.titleHindi}
                </h3>
                <p className="text-body-sm font-bold text-saffron font-hindi mb-4">
                  {step.subtitle}
                </p>
                <p className="text-body-sm text-ink font-hindi leading-relaxed mb-8">
                  {step.details}
                </p>
              </div>

              {/* Illustrated phone screen mockup for this step */}
              <div className={`relative z-10 ${step.tilt} transition-transform hover:rotate-0 mt-auto`}>
                <div className="bg-cream border-2 border-charcoal rounded-card p-4 shadow-hard-md">
                  <div className="flex items-center justify-between pb-2 border-b border-border text-[11px] font-bold text-stone">
                    <span className="font-hindi">{step.mockupText.tag}</span>
                    <span className="text-leaf">● Online/Offline</span>
                  </div>
                  <div className="pt-3">
                    <p className="text-body-sm font-bold text-charcoal font-hindi">
                      {step.mockupText.headline}
                    </p>
                    <p className="text-caption text-ink font-hindi mt-1">
                      {step.mockupText.sub}
                    </p>
                    <div className="mt-3 py-1 px-2.5 bg-parchment rounded-badge border border-border inline-block text-caption font-bold text-charcoal">
                      ✓ {step.mockupText.stat}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 p-6 bg-parchment rounded-card border-2 border-charcoal shadow-hard-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-display-sm text-charcoal font-hindi">
              Kya aapke paas smart phone ya internet nahi hai?
            </h4>
            <p className="text-body-sm text-stone font-hindi mt-1">
              Hum gaon ke schools aur panchayat centers mein &apos;Mentorix Offline Kiosk Pack&apos; bhi lagate hain.
            </p>
          </div>
          <Link href="/for-schools" className="btn-secondary whitespace-nowrap">
            School / NGO Program Dekhein →
          </Link>
        </div>
      </div>
    </section>
  );
}
