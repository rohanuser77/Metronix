import {
  BeakerLeafIcon,
  MentorStarIcon,
  ScholarshipRupeeIcon,
  RoutineClockIcon,
  OpportunityRocketIcon,
  FamilyPhoneIcon,
  ExamTargetIcon,
  VillageTrophyIcon,
} from "@/components/icons/MentorixIcons";
import Link from "next/link";

interface PillarItem {
  number: string;
  title: string;
  titleHindi: string;
  description: string;
  accent: string;
  badge: string;
  icon: React.ReactNode;
  colSpan: string;
}

const pillars: PillarItem[] = [
  {
    number: "Pillar 01",
    title: "Pocket STEM Labs",
    titleHindi: "Virtual Pocket Labs (विज्ञान और प्रयोग)",
    description: "50+ mobile-first simulations. Soil pH, electric circuits, lenses, aur plant biology — bina school lab aur bina internet ke.",
    accent: "#0EA5E9",
    badge: "50+ Experiments",
    icon: <BeakerLeafIcon size={28} color="#0EA5E9" />,
    colSpan: "lg:col-span-2",
  },
  {
    number: "Pillar 02",
    title: "AI Dost 24/7",
    titleHindi: "Bade Bhai Jaisa AI Mentor",
    description: "Shuddh Hindi aur Hinglish mein doubts poocho. NCERT class 6–12 ka har formula, concept, aur career query instant samjho.",
    accent: "#F97316",
    badge: "24/7 Hindi",
    icon: <MentorStarIcon size={28} color="#F97316" />,
    colSpan: "lg:col-span-1",
  },
  {
    number: "Pillar 03",
    title: "Zero-Cost College",
    titleHindi: "Smart Scholarship Matcher",
    description: "National Scholarship Portal (NSP), state tribal/OBC schemes, aur private corporate trusts se automatic matching.",
    accent: "#22C55E",
    badge: "₹50,000+ Tak Support",
    icon: <ScholarshipRupeeIcon size={28} color="#22C55E" />,
    colSpan: "lg:col-span-1",
  },
  {
    number: "Pillar 04",
    title: "Smart Routine",
    titleHindi: "Khet aur Ghar ke Saath Timetable",
    description: "Fasal ki katai ya ghar ke kaam ke baad bhi padhai na choote. AI banata hai lachila (flexible) padhai routine.",
    accent: "#FBBF24",
    badge: "Adaptive Routine",
    icon: <RoutineClockIcon size={28} color="#FBBF24" />,
    colSpan: "lg:col-span-1",
  },
  {
    number: "Pillar 05",
    title: "Opportunity Radar",
    titleHindi: "INSPIRE & ISRO Opportunity Radar",
    description: "INSPIRE MANAK Award, ISRO YUVIKA, NTSE aur state science talent forms ke aane se pehle phone pe notification.",
    accent: "#8B5CF6",
    badge: "Deadlines Alert",
    icon: <OpportunityRocketIcon size={28} color="#8B5CF6" />,
    colSpan: "lg:col-span-1",
  },
  {
    number: "Pillar 06",
    title: "Vernacular Bridge",
    titleHindi: "Parents Mode + WhatsApp Updates",
    description: "Parents ko WhatsApp par seedha Hindi, Marathi ya Bhojpuri mein unke bacche ki tarakki ka aasan scorecard milta hai.",
    accent: "#14B8A6",
    badge: "WhatsApp Report",
    icon: <FamilyPhoneIcon size={28} color="#14B8A6" />,
    colSpan: "lg:col-span-2",
  },
  {
    number: "Pillar 07",
    title: "Exam Command",
    titleHindi: "Board + JEE/NEET Command Center",
    description: "State Boards aur central exams ke live count-downs, daily question streaks, aur formula cheat-sheets offline.",
    accent: "#EF4444",
    badge: "Daily Streak",
    icon: <ExamTargetIcon size={28} color="#EF4444" />,
    colSpan: "lg:col-span-1",
  },
  {
    number: "Pillar 08",
    title: "Hyperlocal Glory",
    titleHindi: "\"Mera Gaon, Meri Rank\" Leaderboard",
    description: "National nahi, apne block aur district ke doston ke saath swasth pratispardha. Har hafte gaon ka topper banne ka mauka.",
    accent: "#FBBF24",
    badge: "District Leaderboard",
    icon: <VillageTrophyIcon size={28} color="#FBBF24" />,
    colSpan: "lg:col-span-2",
  },
];

export default function SixPillars() {
  return (
    <section className="bg-parchment py-section border-b border-border">
      <div className="content-container section-wrapper text-left">
        <div className="max-w-2xl mb-12">
          <p className="text-caption text-saffron font-semibold uppercase tracking-widest mb-3">
            The Complete Learning Architecture
          </p>
          <h2 className="text-display-lg text-charcoal font-hindi">
            Ek Platform, Har Suvidha.
          </h2>
          <p className="text-body-lg text-ink font-hindi mt-3">
            City ke sabse mehenge school aur coaching mein jo suvidhayen hoti hain, woh ab Bharat ke har gaon ke mobile par.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`card group ${pillar.colSpan} flex flex-col justify-between hover:-translate-x-1 hover:-translate-y-1 transition-all duration-150`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-btn flex items-center justify-center border-2 border-charcoal shadow-hard-sm"
                    style={{ backgroundColor: `${pillar.accent}18` }}
                  >
                    {pillar.icon}
                  </div>
                  <span className="badge text-[11px] font-bold tracking-wide uppercase px-2.5 py-0.5 rounded-badge border border-charcoal/20 bg-cream text-charcoal shadow-hard-sm">
                    {pillar.badge}
                  </span>
                </div>

                <p className="text-caption text-stone uppercase tracking-wider mb-1 font-mono">
                  {pillar.number} · {pillar.title}
                </p>
                <h3 className="text-display-sm text-charcoal font-hindi mb-3">
                  {pillar.titleHindi}
                </h3>
                <p className="text-body-sm text-ink font-hindi leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-border flex items-center justify-between text-caption font-bold text-charcoal">
                <span className="font-hindi">Works in 100% Offline Mode</span>
                <span className="text-saffron group-hover:translate-x-1 transition-transform">
                  Vistar se Dekho →
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/features" className="btn-secondary">
            Sabhi Features & Offline Tech Padho →
          </Link>
        </div>
      </div>
    </section>
  );
}
