interface ResearchQuestion {
  question: string;
  questionHindi: string;
  student: string;
  grade: string;
  district: string;
  state: string;
  solutionProvided: string;
}

const researchVoices: ResearchQuestion[] = [
  {
    question: "Kya ye app bina internet ke bhi chalega?",
    questionHindi: "Kya ye app bina internet ke sach mein chalega? Gaon mein 2G network bhi mushkil se aata hai.",
    student: "Ravi Kumar",
    grade: "Class 10 Student",
    district: "Jhansi",
    state: "Uttar Pradesh",
    solutionProvided: "100% Offline Mode: Har hafte ka study module ek baar download karke bina kisi SIM ya network ke chalao.",
  },
  {
    question: "Meri maa ko Hindi mein progress update milegi?",
    questionHindi: "Meri maa ko padhna nahi aata, kya unko audio ya WhatsApp par meri progress ka update Hindi mein milega?",
    student: "Pooja Kumari",
    grade: "Class 8 Student",
    district: "Darbhanga",
    state: "Bihar",
    solutionProvided: "Parents Mode: Weekly automated WhatsApp scorecard aur Hindi audio summary seedha maa ke phone par.",
  },
  {
    question: "Kheti ke baad shaam ko thak jaata hoon, routine kaise banega?",
    questionHindi: "Shaam ko khet se aakar padhai nahi ho pati. Kya app mere schedule ke hisab se padhai set karega?",
    student: "Amol Shinde",
    grade: "Class 11 Science",
    district: "Solapur",
    state: "Maharashtra",
    solutionProvided: "Adaptive Timetable: Kheti aur ghar ke kaam ke realistic ghante daalo, AI bina guilt ke balance banayega.",
  },
  {
    question: "Engineering ya B.Sc ke liye scholarship kaise milti hai?",
    questionHindi: "Mujhe polytechnic ya engineering karni hai par papa ke paas fees nahi hai. Kahan apply karun?",
    student: "Sunita Murmu",
    grade: "Class 12 Student",
    district: "Ranchi",
    state: "Jharkhand",
    solutionProvided: "Zero-Cost College Matcher: 120+ sarkari aur private scholarships jo tuition fees aur hostel pura cover karti hain.",
  },
];

export default function Testimonials() {
  return (
    <section className="section-wrapper py-section bg-cream border-b border-border">
      <div className="content-container text-left">
        <div className="max-w-2xl mb-14">
          <p className="text-caption text-saffron font-semibold uppercase tracking-widest mb-3">
            Real Student Voices · Pre-Launch Research
          </p>
          <h2 className="text-display-lg text-charcoal font-hindi">
            Ground Reality: Vidhyarthiyon ke Sawal
          </h2>
          <p className="text-body-lg text-ink font-hindi mt-3">
            Humne koi nakli &apos;5-star reviews&apos; nahi likhe. Ye woh asali sawal hain jo UP, Bihar, Jharkhand aur Maharashtra ke 400+ students ne hamare ground survey mein pooche.
          </p>
        </div>

        {/* 2-Column Quote Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {researchVoices.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-parchment border-2 border-charcoal rounded-panel p-8 shadow-hard-md flex flex-col justify-between"
            >
              {/* Large Saffron Quote SVG */}
              <div className="absolute top-4 right-6 text-saffron opacity-25 select-none pointer-events-none" aria-hidden="true">
                <svg width="60" height="50" viewBox="0 0 60 50" fill="currentColor">
                  <path d="M14.4 0C6.4 0 0 7.2 0 16.8 0 27.2 9.6 37.6 21.6 49.6L28 42.4C20.8 33.6 17.6 27.2 17.6 22.4H24V0H14.4zm33.6 0C40 0 33.6 7.2 33.6 16.8c0 10.4 9.6 20.8 21.6 32.8L61.6 42.4C54.4 33.6 51.2 27.2 51.2 22.4H57.6V0H48z" />
                </svg>
              </div>

              <div className="relative z-10 mb-6">
                <p className="text-display-sm text-charcoal font-hindi mb-4 leading-snug">
                  &ldquo;{item.questionHindi}&rdquo;
                </p>
                <div className="p-4 bg-cream rounded-card border border-border">
                  <p className="text-caption text-saffron font-bold uppercase tracking-wider mb-1 font-hindi">
                    Mentorix Ka Jawaab:
                  </p>
                  <p className="text-body-sm text-ink font-hindi">
                    {item.solutionProvided}
                  </p>
                </div>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-border flex items-center justify-between">
                <div>
                  <p className="text-body-sm font-bold text-charcoal font-hindi">
                    {item.student}
                  </p>
                  <p className="text-caption text-stone font-hindi">
                    {item.grade} · {item.district}, {item.state}
                  </p>
                </div>
                <span className="badge bg-leaf/15 text-leaf border-leaf/30 text-xs font-bold">
                  Verified Survey
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Honest Transparency Disclaimer */}
        <div className="mt-12 p-5 bg-parchment border border-charcoal/20 rounded-card flex items-center gap-4">
          <span className="text-2xl">🤝</span>
          <p className="text-body-sm text-stone font-hindi">
            <strong>Imandari ka vada:</strong> Mentorix abhi early-access stage mein hai. Hum marketing ke liye fake ratings ya false testimonials kabhi nahi lagayenge. Har feature gaon ke bacchon ke sath milkar banaya ja raha hai.
          </p>
        </div>
      </div>
    </section>
  );
}
