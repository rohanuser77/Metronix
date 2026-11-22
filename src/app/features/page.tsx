import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import {
  AtomLabIcon,
  ChatBotIcon,
  AcademicCapIcon,
  CompassTargetIcon,
  LaptopOfflineIcon,
  UsersIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from "@/components/icons/MetronixIcons";

export const metadata = {
  title: "Platform Features & Curriculum — Metronix",
  description: "Curriculum-mapped virtual science laboratories, intelligent AI study assistant, and offline-capable STEM learning modules.",
};

const curriculumModules = [
  {
    subject: "Physics",
    grade: "Classes 9–12",
    simulationsCount: "18 Interactive Labs",
    topics: [
      "Ohm's Law & Circuit Analysis: Variable resistance and voltage curves",
      "Optics & Lens Mechanics: Focal point adjustments and ray diagram simulations",
      "Newtonian Mechanics & Inertia: Friction, gravitational pull, and momentum models",
      "Electromagnetic Induction: Solenoid field lines and Faraday's law",
    ],
  },
  {
    subject: "Chemistry",
    grade: "Classes 8–12",
    simulationsCount: "16 Interactive Labs",
    topics: [
      "Acid-Base Neutralization & pH Titration: Colorimetric indicators and reaction rates",
      "Periodic Table Trends: Electronegativity, atomic radii, and ionization energy",
      "Chemical Bonding: Ionic versus covalent electron transfer models",
      "Electrochemistry & Galvanic Cells: Anode/cathode potentials and ion migration",
    ],
  },
  {
    subject: "Biology & Agricultural STEM",
    grade: "Classes 6–12",
    simulationsCount: "14 Interactive Labs",
    topics: [
      "Soil Chemistry & Plant Nutrition: NPK balance, soil acidity, and root absorption",
      "Cell Structure & Microscopic Scaling: Plant vs. animal cell organelle dynamics",
      "Photosynthesis & Respiration Rates: Light intensity and carbon capture curves",
      "Genetics & Heredity: Mendelian monohybrid and dihybrid cross simulators",
    ],
  },
  {
    subject: "Applied Mathematics",
    grade: "Classes 6–12",
    simulationsCount: "12 Interactive Labs",
    topics: [
      "Geometric Trigonometry: Real-world elevation and distance calculations",
      "Coordinate Geometry: Interactive linear equations and slope visualizations",
      "Statistical Probability: Random variable distributions and sample variance",
      "Quadratic Mechanics: Parabolic trajectory analysis and projectile graphs",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-canvas-subtle pt-20">
        {/* Header */}
        <section className="section-wrapper py-14 bg-white border-b border-slate-200 text-left">
          <div className="content-container">
            <span className="badge-brand mb-3">Academic Curriculum & Labs</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Curriculum-Mapped Virtual Science Laboratories
            </h1>
            <p className="text-base text-slate-600 mt-3 max-w-3xl leading-relaxed">
              Metronix bridges the laboratory deficit by delivering rigorous, NCERT-aligned virtual experimentation modules designed to run with full fidelity on low-cost devices without continuous internet.
            </p>
          </div>
        </section>

        {/* Curriculum Modules */}
        <section className="section-wrapper py-section">
          <div className="content-container text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {curriculumModules.map((mod, idx) => (
                <div key={idx} className="card-modern flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                      <span className="text-xs font-bold font-mono text-brand-600 uppercase">
                        {mod.grade}
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                        {mod.simulationsCount}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-4">
                      {mod.subject}
                    </h3>

                    <ul className="space-y-3 text-sm text-slate-600">
                      {mod.topics.map((t, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircleIcon size={16} className="text-emerald shrink-0 mt-0.5" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">
                      Runs 100% Offline via SQLite cache
                    </span>
                    <Link href="/early-access" className="text-xs font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1">
                      <span>Launch Sample Lab</span>
                      <ArrowRightIcon size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Support Banner */}
            <div className="mt-14 p-8 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h3 className="text-lg font-bold text-white">
                  Looking to deploy Metronix laboratories across your institution?
                </h3>
                <p className="text-sm text-slate-300 mt-1 max-w-xl">
                  We supply offline micro-server hardware packs and instructional lesson kits for government schools, coaching institutes, and educational NGOs.
                </p>
              </div>
              <Link href="/for-schools" className="btn-primary bg-brand-500 hover:bg-brand-600 whitespace-nowrap text-xs py-3 px-5">
                Institutional Partnership Details
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
