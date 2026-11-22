import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import {
  BeakerLeafIcon,
  MentorStarIcon,
  ScholarshipRupeeIcon,
  RoutineClockIcon,
  OpportunityRocketIcon,
  FamilyPhoneIcon,
  ExamTargetIcon,
  VillageTrophyIcon,
  TeacherSahayakIcon,
  OfflineKioskIcon,
} from "@/components/icons/MentorixIcons";

export const metadata = {
  title: "Features & Architecture — Mentorix",
  description: "Mentorix ke sabhi 10 pillars: Offline virtual labs, AI mentor in Hindi, zero-cost college scholarship matcher, aur hyperlocal leaderboard.",
};

const allPillars = [
  {
    id: "stem-labs",
    num: "01",
    title: "Pocket Virtual Labs",
    titleHindi: "Pocket Virtual Labs (50+ Simulations)",
    accent: "#0EA5E9",
    icon: <BeakerLeafIcon size={32} color="#0EA5E9" />,
    overview: "Gaon ke 85% sarkari schools mein Science laboratory nahi hoti. Mentorix ke Pocket Labs se har student apne low-cost phone par Physics, Chemistry, aur Agriculture ke simulations chala sakta hai.",
    highlights: [
      "NCERT Class 6–12 curriculum mapped",
      "Kheti aur gaon ke desi udaharano se samjhaya gaya (Soil pH, Solar cells)",
      "Zero internet required — offline SQLite/IndexedDB engine",
      "Lightweight canvas graphics jo 1GB RAM phone par bina atke chale",
    ],
  },
  {
    id: "ai-mentor",
    num: "02",
    title: "AI Dost (24/7 Hindi Mentor)",
    titleHindi: "Bade Bhai Jaisa AI Mentor (Hindi + Hinglish)",
    accent: "#F97316",
    icon: <MentorStarIcon size={32} color="#F97316" />,
    overview: "Class mein haath uthane mein jhijhak hoti hai? Mentorix AI se jitni baar chaho poocho. Ye teacher nahi, ek samajhdar bada bhai hai jo bina daante aasan bhasha mein samjhata hai.",
    highlights: [
      "Pure Hindi, Hinglish aur regional dialects support",
      "Step-by-step Socratic method (ratta maarne se roke)",
      "Voice input aur audio reply — padhne mein dikkat ho toh sun kar seekho",
      "2G network par bhi 100ms ultra-low-bandwidth response",
    ],
  },
  {
    id: "scholarships",
    num: "03",
    title: "Zero-Cost College",
    titleHindi: "Smart Scholarship Matcher & Guide",
    accent: "#22C55E",
    icon: <ScholarshipRupeeIcon size={32} color="#22C55E" />,
    overview: "Har saal hazaaron crore rupaye ki government aur CSR scholarships bin mangi reh jaati hain kyunki gaon tak jankari nahi pahunchti. Mentorix eligibility se direct form bharwata hai.",
    highlights: [
      "National Scholarship Portal (NSP) direct sync",
      "State-level tribal, OBC, aur girls special schemes",
      "Document checklist aur income certificate guide",
      "SMS aur WhatsApp deadline alerts taaki tareekh na choote",
    ],
  },
  {
    id: "routine",
    num: "04",
    title: "Realistic Routine",
    titleHindi: "Kheti aur Gharelu Kaam ke Sath Padhai",
    accent: "#FBBF24",
    icon: <RoutineClockIcon size={32} color="#FBBF24" />,
    overview: "Shehar ke coaching timetable gaon ke bacchon par lagu nahi hote jinhe subah khet par ya shaam ko ghar ke kaam mein hath batana padta hai. Mentorix unke din ke anukool routine banata hai.",
    highlights: [
      "Bina guilt ka timetable — chhutti ya kaam wale din auto-adjust",
      "Chhote 25-minute study bites (Pomodoro optimized for phone)",
      "Daily revision streak system aur XP points",
      "Offline offline task tracker jo raat ko sync hota hai",
    ],
  },
  {
    id: "radar",
    num: "05",
    title: "Opportunity Radar",
    titleHindi: "INSPIRE, ISRO YUVIKA & Talent Hunt Radar",
    accent: "#8B5CF6",
    icon: <OpportunityRocketIcon size={32} color="#8B5CF6" />,
    overview: "INSPIRE MANAK Award se ₹10,000 ka science prize mil sakta hai, par 90% students ko pata hi nahi chalta. Radar sabhi national opportunities track karta hai.",
    highlights: [
      "Department of Science & Technology (DST) INSPIRE alerts",
      "ISRO Young Scientist Programme (YUVIKA) application support",
      "Olympiads, NTSE aur State Science Exhibition forms",
      "Idea submission aur Hindi project synopsis templates",
    ],
  },
  {
    id: "parents",
    num: "06",
    title: "Vernacular Parents Mode",
    titleHindi: "Mata-Pita ke Liye WhatsApp Updates",
    accent: "#14B8A6",
    icon: <FamilyPhoneIcon size={32} color="#14B8A6" />,
    overview: "Agar parents anpadh ya kam padhe-likhe hain, toh bhi unhe bacche ki padhai se alag nahi rakha jayega. Har hafte WhatsApp par saral scorecard aur audio note bhejte hain.",
    highlights: [
      "No app install needed for parents — uses regular WhatsApp / SMS",
      "Local languages: Hindi, Bhojpuri, Marathi, Tamil, Bengali",
      "Praise prompts: Parents ko bataya jata hai ki bacche ki tareef kaise karein",
      "Zero technical jargon — simple progress bars",
    ],
  },
  {
    id: "exams",
    num: "07",
    title: "Exam Command Center",
    titleHindi: "Board + JEE/NEET/Polytechnic Command Center",
    accent: "#EF4444",
    icon: <ExamTargetIcon size={32} color="#EF4444" />,
    overview: "State Boards (UP, Bihar, MP, Rajasthan, Maharashtra) aur Central Boards ke countdown timers, previous 10 years ke solved papers aur daily mock tests offline.",
    highlights: [
      "Live exam countdown widgets",
      "Chapter-wise weightage analysis (kisme se sabse zyada marks aayenge)",
      "Speed tests with Hindi timers",
      "Offline downloadable formula cheat sheets",
    ],
  },
  {
    id: "leaderboard",
    num: "08",
    title: "Mera Gaon, Meri Rank",
    titleHindi: "Hyperlocal District & Block Leaderboards",
    accent: "#FBBF24",
    icon: <VillageTrophyIcon size={32} color="#FBBF24" />,
    overview: "National ranking dekhkar gaon ka baccha darr jata hai. Hum use uske block aur tehsil ke doston ke saath khelne dete hain, jisse aatmavishwas badhta hai.",
    highlights: [
      "Village / Gram Panchayat level badges (Gaon Champion)",
      "Weekly school vs school friendly STEM challenges",
      "Positive reinforcement — continuous progress over raw marks",
      "Village celebration certificates to share with family",
    ],
  },
  {
    id: "teacher-sahayak",
    num: "09",
    title: "Teacher Sahayak Mode",
    titleHindi: "Gramin Shikshak Sahayak Toolkit",
    accent: "#8B5CF6",
    icon: <TeacherSahayakIcon size={32} color="#8B5CF6" />,
    overview: "Sarkari school ke teachers hamare sabse bade saathi hain. Unhe class mein demo dikhane ke liye ready lesson plans aur progress tracking milti hai.",
    highlights: [
      "Ready-to-use blackboard diagrams & lesson outlines",
      "Weekly class progress PDF export for school principals",
      "Teacher XP rewards and community recognition",
      "Single-screen classroom projector mode",
    ],
  },
  {
    id: "offline-kiosk",
    num: "10",
    title: "Offline Kiosk Pack",
    titleHindi: "Zero-Connectivity Village Kiosk Pack",
    accent: "#0EA5E9",
    icon: <OfflineKioskIcon size={32} color="#0EA5E9" />,
    overview: "Jahan mobile network bilkul nahi hai, wahan Panchayat ghar ya Anganwadi mein ek pre-loaded micro-server se 30 students ek saath bina internet padh sakte hain.",
    highlights: [
      "Runs on low-cost Raspberry Pi or old Android tablet",
      "Local WiFi hotspot creates instant village intranet",
      "Weekly sync via pen-drive or when volunteer visits town",
      "Solar battery compatible for power outage resilience",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-cream pt-20">
        {/* Header */}
        <section className="section-wrapper py-16 bg-parchment border-b-2 border-charcoal">
          <div className="content-container text-left">
            <span className="badge bg-saffron text-white border-charcoal text-caption font-bold px-3 py-1 mb-4 shadow-hard-sm">
              Architecture & Features
            </span>
            <h1 className="text-display-lg sm:text-display-xl text-charcoal font-hindi mb-4">
              Pura Platform. Har Suvidha.
            </h1>
            <p className="text-body-lg text-ink font-hindi max-w-2xl leading-relaxed">
              Mentorix sirf ek video lecture app nahi hai. Ye rural India ke har vidyarthi ke liye ek poora shiksha ecosystem hai — jo 100% offline aur vernacular hai.
            </p>
          </div>
        </section>

        {/* Pillars Deep Dive */}
        <section className="section-wrapper py-section">
          <div className="content-container">
            <div className="space-y-12">
              {allPillars.map((pillar, idx) => (
                <div
                  key={pillar.id}
                  id={pillar.id}
                  className="bg-cream border-2 border-charcoal rounded-panel p-8 sm:p-10 shadow-hard-lg flex flex-col lg:flex-row gap-8 items-start justify-between text-left"
                >
                  <div className="lg:max-w-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-12 h-12 rounded-btn flex items-center justify-center border-2 border-charcoal shadow-hard-sm"
                        style={{ backgroundColor: `${pillar.accent}18` }}
                      >
                        {pillar.icon}
                      </div>
                      <div>
                        <span className="text-caption font-mono uppercase tracking-wider text-stone font-bold">
                          Feature {pillar.num}
                        </span>
                        <h2 className="text-display-sm text-charcoal font-hindi">
                          {pillar.titleHindi}
                        </h2>
                      </div>
                    </div>

                    <p className="text-body-md text-ink font-hindi leading-relaxed mb-6">
                      {pillar.overview}
                    </p>

                    <div className="p-4 bg-parchment rounded-card border border-border">
                      <p className="text-caption text-charcoal font-bold uppercase tracking-wider mb-2 font-mono">
                        Key Capabilities:
                      </p>
                      <ul className="space-y-2 text-body-sm text-ink font-hindi">
                        {pillar.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="text-leaf font-bold mt-0.5">✓</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action box */}
                  <div className="w-full lg:w-72 bg-parchment rounded-card border-2 border-charcoal p-6 shadow-hard-sm flex flex-col justify-between">
                    <div>
                      <span className="text-caption uppercase tracking-wider font-bold text-stone font-mono">
                        Available In:
                      </span>
                      <p className="text-body-md font-bold text-charcoal font-hindi mt-1">
                        Early Access Beta
                      </p>
                      <div className="my-4 py-2 px-3 bg-cream rounded-badge border border-border text-caption font-bold text-leaf font-hindi">
                        ● 100% Offline Compatible
                      </div>
                      <p className="text-caption text-stone font-hindi">
                        Class 6 se 12 ke sabhi students ke liye bilkul muft.
                      </p>
                    </div>

                    <Link
                      href="/early-access"
                      className="btn-primary mt-6 text-sm py-2.5 justify-center"
                    >
                      Waitlist Join Karo →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Callout */}
            <div className="mt-16 p-8 bg-charcoal text-cream rounded-panel border-2 border-charcoal shadow-hard-xl text-center max-w-3xl mx-auto">
              <h3 className="text-display-sm text-cream font-hindi mb-3">
                Kya aap kisi sarkari school ya NGO ke sath kaam karte hain?
              </h3>
              <p className="text-body-md text-cream/80 font-hindi mb-6">
                Hum schools ke liye offline server packs aur free teacher training provide karte hain.
              </p>
              <Link href="/for-schools" className="btn-primary justify-center">
                School / NGO Partnership Program →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
