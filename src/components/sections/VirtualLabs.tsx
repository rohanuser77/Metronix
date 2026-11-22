"use client";
import { useState } from "react";
import Link from "next/link";

interface Experiment {
  id: string;
  title: string;
  titleHindi: string;
  category: "Agriculture" | "Physics" | "Chemistry" | "Electronics";
  scenario: string;
  options: { label: string; result: string; isCorrect: boolean }[];
  funFact: string;
}

const demoExperiments: Experiment[] = [
  {
    id: "soil-ph",
    title: "Soil pH & Crop Doctor",
    titleHindi: "Khet ki Mitti ki Jaanch (Soil pH)",
    category: "Agriculture",
    scenario: "Tumhare khet ki mitti ka pH 5.2 hai (Tezaabi / Acidic). Gehun (Wheat) ki fasal ke liye kya milana chahiye?",
    options: [
      { label: "Chuna (Lime / Calcium Carbonate)", result: "Bilkul sahi! Chuna acidic mitti ka pH badha kar 6.5–7.0 tak neutral banata hai.", isCorrect: true },
      { label: "Urea aur chemical acid", result: "Nahi, isse mitti aur zyada tezaabi ho jayegi aur beej jal jayenge.", isCorrect: false },
      { label: "Sirf peene ka paani", result: "Paani dalne se mitti ka tezaabi asar khatam nahi hota.", isCorrect: false },
    ],
    funFact: "ICAR ke mutabiq, sahi pH par mitti se 30% zyada fasal utpadan hota hai!",
  },
  {
    id: "pendulum",
    title: "Simple Pendulum & Gravity",
    titleHindi: "Jhula aur Newton ka Pendulum",
    category: "Physics",
    scenario: "Baelgadi ke tyre mein cycle ka speedometer kaise kaam karta hai?",
    options: [
      { label: "Pahiya jitni baar ghoomega, utna distance measure hoga", result: "Correct! Circumference × Chakkar = Total Dooriyan.", isCorrect: true },
      { label: "Hawa ke dabav se", result: "Galat, hawa se dooriyan nahi naapi jaati.", isCorrect: false },
      { label: "Sirf gravity ke karan", result: "Gravity se speed ka sidha hisaab nahi banta.", isCorrect: false },
    ],
    funFact: "Class 9 aur 11 Physics ka circular motion har gaon ke kisan ke tractor mein kaam karta hai.",
  },
];

export default function VirtualLabs() {
  const [activeExp, setActiveExp] = useState<Experiment>(demoExperiments[0]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  return (
    <section className="section-wrapper py-section bg-parchment border-b border-border">
      <div className="content-container text-left">
        <div className="max-w-2xl mb-12">
          <p className="text-caption text-sky font-semibold uppercase tracking-widest mb-3">
            Offline Interactive STEM
          </p>
          <h2 className="text-display-lg text-charcoal font-hindi">
            Virtual Pocket Lab: Haath se Karke Seekho
          </h2>
          <p className="text-body-lg text-ink font-hindi mt-3">
            50+ practical experiments jo bina kisi lab apparatus aur bina kisi internet ke mobile par chalte hain.
          </p>
        </div>

        {/* Interactive Lab Playground Card */}
        <div className="grid grid-cols-1 lg:grid-cols-[40fr_60fr] gap-8 items-stretch">
          {/* LEFT: Experiment Selectors */}
          <div className="flex flex-col gap-4">
            <p className="text-caption text-stone uppercase tracking-wider font-semibold">
              Live Demo: Experiment Chuno
            </p>
            {demoExperiments.map((exp) => (
              <button
                key={exp.id}
                onClick={() => {
                  setActiveExp(exp);
                  setSelectedOption(null);
                }}
                className={`p-5 rounded-card border-2 text-left transition-all shadow-hard-sm ${
                  activeExp.id === exp.id
                    ? "bg-cream border-charcoal shadow-hard-md translate-x-1"
                    : "bg-parchment border-border hover:border-charcoal hover:bg-cream"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="badge bg-sky/15 text-sky border-sky/30 text-xs font-bold">
                    {exp.category}
                  </span>
                  <span className="text-caption text-stone font-hindi font-medium">100% Offline</span>
                </div>
                <h4 className="text-body-lg font-bold text-charcoal font-hindi">
                  {exp.titleHindi}
                </h4>
                <p className="text-caption text-stone mt-1">{exp.title}</p>
              </button>
            ))}

            <div className="mt-4 p-5 bg-cream rounded-card border-2 border-charcoal shadow-hard-sm">
              <p className="text-body-sm font-bold text-charcoal font-hindi">
                🧪 50+ NCERT Lab Experiments Shamil Hain:
              </p>
              <ul className="text-caption text-ink font-hindi space-y-1.5 mt-2">
                <li>• Archimedes Principle & Paani par tairti kishthi</li>
                <li>• Solar Panel Angle & Dhup se bijli utpadan</li>
                <li>• Seed Germination & Mitti ka nitrogen chakra</li>
                <li>• Ohm&apos;s Law & Gaon ki bijli circuit builder</li>
              </ul>
            </div>
          </div>

          {/* RIGHT: Active Experiment Simulator Frame */}
          <div className="bg-cream border-2 border-charcoal rounded-panel p-6 sm:p-8 shadow-hard-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-leaf inline-block animate-pulse" />
                  <span className="text-caption font-bold text-charcoal uppercase tracking-wider">
                    Pocket Lab Simulator #04
                  </span>
                </div>
                <span className="badge bg-amber/20 text-charcoal border-amber/40 text-xs font-bold">
                  Class 8–10 NCERT
                </span>
              </div>

              <div className="my-6">
                <h3 className="text-display-sm text-charcoal font-hindi mb-3">
                  {activeExp.titleHindi}
                </h3>
                <div className="p-4 bg-parchment rounded-card border border-border">
                  <p className="text-body-md text-charcoal font-hindi font-medium leading-relaxed">
                    👉 <strong>Sawal:</strong> {activeExp.scenario}
                  </p>
                </div>
              </div>

              {/* Options */}
              <div className="space-y-3">
                <p className="text-caption text-stone uppercase tracking-wider font-semibold">
                  Apna Answer Select Karo:
                </p>
                {activeExp.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedOption(i)}
                    className={`w-full p-4 rounded-btn border-2 text-left transition-all font-hindi text-body-sm flex items-center justify-between ${
                      selectedOption === i
                        ? opt.isCorrect
                          ? "bg-leaf/10 border-leaf text-charcoal font-bold shadow-hard-sm"
                          : "bg-rose/10 border-rose text-charcoal font-bold shadow-hard-sm"
                        : "bg-cream border-charcoal/30 hover:border-charcoal text-ink"
                    }`}
                  >
                    <span>{opt.label}</span>
                    {selectedOption === i && (
                      <span className="text-sm font-bold">
                        {opt.isCorrect ? "✓ Sahi!" : "✕ Galat"}
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {/* Feedback Alert */}
              {selectedOption !== null && (
                <div
                  className={`mt-4 p-4 rounded-card border-2 shadow-hard-sm animate-fade-up ${
                    activeExp.options[selectedOption].isCorrect
                      ? "bg-leaf/10 border-leaf"
                      : "bg-rose/10 border-rose"
                  }`}
                >
                  <p className="text-body-sm font-hindi font-semibold text-charcoal">
                    {activeExp.options[selectedOption].result}
                  </p>
                  <p className="text-caption text-stone font-hindi mt-1">
                    💡 <strong>Did You Know:</strong> {activeExp.funFact}
                  </p>
                </div>
              )}
            </div>

            <div className="pt-6 mt-6 border-t border-border flex items-center justify-between">
              <span className="text-caption text-stone font-hindi">
                Bina data kharch kiye run hota hai
              </span>
              <Link href="/early-access" className="text-caption font-bold text-saffron hover:underline">
                Sabhi 50+ Labs Unlock Karo →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
