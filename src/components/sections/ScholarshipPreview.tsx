"use client";
import { useState } from "react";
import Link from "next/link";

export default function ScholarshipPreview() {
  const [income, setIncome] = useState<string>("under2L");
  const [category, setCategory] = useState<string>("general");
  const [marks, setMarks] = useState<string>("above75");

  // Simulated instant match counter
  const getCalculatedScholarships = () => {
    let count = 4;
    let maxAmount = "₹25,000";
    if (income === "under2L") {
      count += 5;
      maxAmount = "₹75,000";
    }
    if (category === "sc_st" || category === "obc") {
      count += 4;
      maxAmount = "₹85,000";
    }
    if (marks === "above85") {
      count += 3;
      maxAmount = "₹1,00,000";
    }
    return { count, maxAmount };
  };

  const { count, maxAmount } = getCalculatedScholarships();

  return (
    <section className="w-full bg-saffron text-white py-section border-b-2 border-charcoal">
      <div className="content-container section-wrapper">
        <div className="max-w-3xl mb-12 text-left">
          <span className="inline-block bg-charcoal text-cream text-caption font-bold px-3 py-1 rounded-badge uppercase tracking-wider mb-4 shadow-hard-sm">
            Zero-Cost College Calculator
          </span>
          <h2 className="text-display-lg text-white font-hindi">
            Tere liye kaunsi scholarship hai?
          </h2>
          <p className="text-body-lg text-white/90 font-hindi mt-3">
            Income, category, aur marks ke hisaab se — NSP, state sarkari yojana, aur private corporate trusts se automatic match.
          </p>
        </div>

        {/* 3-Step Interactive Form Preview Card */}
        <div className="grid grid-cols-1 lg:grid-cols-[60fr_40fr] gap-8 items-stretch">
          <div className="bg-cream text-charcoal rounded-panel p-6 sm:p-8 border-2 border-charcoal shadow-hard-xl text-left">
            <h3 className="text-display-sm text-charcoal font-hindi mb-6 flex items-center gap-2">
              <span>🎯</span>
              <span>1 Minute Eligibility Check</span>
            </h3>

            {/* Step 1: Income */}
            <div className="mb-6">
              <label className="text-caption uppercase tracking-wider font-bold text-stone block mb-2 font-mono">
                Step 1: Parivaar ki saalana aamdani (Annual Family Income)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: "under2L", label: "₹2.5 Lakh se kam" },
                  { id: "under5L", label: "₹2.5L - ₹5 Lakh" },
                  { id: "above5L", label: "₹5 Lakh se zyada" },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setIncome(opt.id)}
                    className={`py-2.5 px-3 rounded-btn border-2 text-xs font-bold font-hindi transition-all text-center ${
                      income === opt.id
                        ? "bg-saffron text-white border-charcoal shadow-hard-sm"
                        : "bg-parchment text-ink border-border hover:border-charcoal"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Category */}
            <div className="mb-6">
              <label className="text-caption uppercase tracking-wider font-bold text-stone block mb-2 font-mono">
                Step 2: Varg / Category
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: "general", label: "General" },
                  { id: "obc", label: "OBC" },
                  { id: "sc_st", label: "SC / ST" },
                  { id: "girls", label: "Girl Student" },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setCategory(opt.id)}
                    className={`py-2.5 px-3 rounded-btn border-2 text-xs font-bold font-hindi transition-all text-center ${
                      category === opt.id
                        ? "bg-saffron text-white border-charcoal shadow-hard-sm"
                        : "bg-parchment text-ink border-border hover:border-charcoal"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Marks */}
            <div className="mb-6">
              <label className="text-caption uppercase tracking-wider font-bold text-stone block mb-2 font-mono">
                Step 3: Pichhli kaksha ke marks (%)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: "under60", label: "50% - 65%" },
                  { id: "above75", label: "65% - 80%" },
                  { id: "above85", label: "80% se zyada (Merit)" },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setMarks(opt.id)}
                    className={`py-2.5 px-3 rounded-btn border-2 text-xs font-bold font-hindi transition-all text-center ${
                      marks === opt.id
                        ? "bg-saffron text-white border-charcoal shadow-hard-sm"
                        : "bg-parchment text-ink border-border hover:border-charcoal"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <p className="text-caption text-stone font-hindi">
              🔒 Aapka data 100% surakshit hai. Kisi third-party ko nahi becha jaata.
            </p>
          </div>

          {/* RESULT CARD */}
          <div className="bg-cream text-charcoal rounded-panel p-6 sm:p-8 border-2 border-charcoal shadow-hard-xl flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <span className="badge bg-leaf/20 text-leaf border-leaf/40 text-xs font-bold">
                  Matched Live
                </span>
                <span className="text-caption text-stone font-mono">NSP + State Schemes</span>
              </div>

              <div className="my-6">
                <p className="text-caption text-stone uppercase tracking-wider font-bold">
                  Total Eligible Scholarships:
                </p>
                <div className="flex items-baseline gap-3 my-2">
                  <span className="text-display-xl font-extrabold text-charcoal font-sans">
                    {count}
                  </span>
                  <span className="text-body-md font-bold text-leaf font-hindi">
                    Schemes Uplabdh
                  </span>
                </div>

                <div className="p-4 bg-parchment rounded-card border-2 border-charcoal shadow-hard-sm mt-4">
                  <p className="text-caption text-stone font-hindi font-medium">
                    Sambhavit Anudaan (Estimated Grant):
                  </p>
                  <p className="text-display-sm text-saffron font-bold">
                    {maxAmount} / saal tak
                  </p>
                  <p className="text-caption text-ink font-hindi mt-1">
                    Tuition fees + Kitabein + Hostel kharch shaamil
                  </p>
                </div>
              </div>

              <ul className="space-y-2 text-caption text-ink font-hindi border-t border-border pt-4">
                <li>✓ National Means-cum-Merit Scholarship (NMMSS)</li>
                <li>✓ Post-Matric Scholarship for Rural & Tribal Youth</li>
                <li>✓ Reliance / Tata Trust Rural STEM Fellowship</li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-border">
              <Link
                href="/scholarships"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-charcoal text-cream font-bold text-body-md rounded-btn shadow-hard-md hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard-lg transition-all"
              >
                Pura Scholarship Database Dekho →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
