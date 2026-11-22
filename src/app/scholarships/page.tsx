"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { AcademicCapIcon, CheckCircleIcon, ArrowRightIcon } from "@/components/icons/MetronixIcons";
import { useLanguage } from "@/context/LanguageContext";

interface ScholarshipItem {
  id: string;
  name: string;
  provider: string;
  amount: string;
  category: "all" | "sc_st" | "obc" | "girls" | "merit";
  eligibility: string;
  deadline: string;
  tag: string;
}

const scholarshipDirectory: ScholarshipItem[] = [
  {
    id: "nmmss",
    name: "National Means-cum-Merit Scholarship Scheme (NMMSS)",
    provider: "Department of School Education & Literacy, Govt. of India",
    amount: "₹12,000 per annum (Classes 9 to 12)",
    category: "merit",
    eligibility: "Class 8 examination score ≥ 55% (50% for SC/ST), enrolled in Govt/Aided school, family annual income ≤ ₹3,50,000.",
    deadline: "November 30",
    tag: "National Scheme",
  },
  {
    id: "inspire",
    name: "INSPIRE MANAK Award Scheme",
    provider: "Department of Science & Technology (DST)",
    amount: "₹10,000 project grant + National Science Fair Nomination",
    category: "all",
    eligibility: "Students of Classes 6 to 10 demonstrating innovative, original technological ideas through school nomination.",
    deadline: "September 15",
    tag: "Science & Innovation",
  },
  {
    id: "aicte-pragati",
    name: "AICTE Pragati Scholarship for Female Students",
    provider: "All India Council for Technical Education (AICTE)",
    amount: "₹50,000 per annum for tuition & technical resources",
    category: "girls",
    eligibility: "Female students entering approved technical diploma or degree programs, family annual income ≤ ₹8,00,000.",
    deadline: "October 31",
    tag: "Women in STEM",
  },
  {
    id: "postmatric-scst",
    name: "Centrally Sponsored Post-Matric Scholarship for SC/ST",
    provider: "Ministry of Social Justice & Empowerment",
    amount: "Full non-refundable institutional fees + monthly maintenance allowance",
    category: "sc_st",
    eligibility: "Post-secondary students in recognized higher secondary, polytechnic, or undergraduate programs, income ≤ ₹2,50,000.",
    deadline: "December 31",
    tag: "Full Tuition Support",
  },
  {
    id: "tata-trust",
    name: "Tata Trusts Higher Education Grant for Rural Students",
    provider: "Tata Trusts Foundation",
    amount: "₹30,000 to ₹60,000 per academic year",
    category: "merit",
    eligibility: "Rural students pursuing STEM, Nursing, or Agriculture degrees with demonstrable academic excellence.",
    deadline: "Rolling Quarterly Submissions",
    tag: "Foundation Grant",
  },
  {
    id: "obc-postmatric",
    name: "State Post-Matric Fellowship for OBC Students",
    provider: "State Social Welfare Departments",
    amount: "₹8,000 to ₹20,000 per annum",
    category: "obc",
    eligibility: "OBC category students in secondary or vocational courses, family annual income ≤ ₹2,50,000.",
    deadline: "State-Specific Calendar",
    tag: "State Government",
  },
];

export default function ScholarshipsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { locale } = useLanguage();

  const filtered = scholarshipDirectory.filter((s) => {
    const matchesCategory = selectedCategory === "all" || s.category === selectedCategory;
    const matchesSearch =
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.eligibility.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-canvas-subtle pt-20">
        {/* Banner */}
        <section className="section-wrapper py-14 bg-white border-b border-slate-200 text-left">
          <div className="content-container">
            <span className="badge-brand mb-3">Institutional Pathway Navigator</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Zero-Cost Higher Secondary & Higher Education Pathways
            </h1>
            <p className="text-base text-slate-600 mt-3 max-w-3xl leading-relaxed">
              Every year, substantial government and philanthropic grant funds remain underutilized due to information barriers. Metronix matches eligible students directly with application checklists and verification requirements.
            </p>
          </div>
        </section>

        {/* Directory Controls */}
        <section className="section-wrapper py-section">
          <div className="content-container text-left">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {[
                  { id: "all", label: "All Schemes" },
                  { id: "merit", label: "Merit-cum-Means" },
                  { id: "girls", label: "Women in STEM" },
                  { id: "sc_st", label: "SC / ST" },
                  { id: "obc", label: "OBC" },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-all border ${
                      selectedCategory === cat.id
                        ? "bg-slate-900 text-white border-slate-900 shadow-subtle"
                        : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Search Field */}
              <div className="w-full md:w-80">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter by scheme name or provider..."
                  className="w-full px-3.5 py-2 text-xs bg-white border border-slate-200 rounded-md text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-600"
                />
              </div>
            </div>

            {/* Scholarships List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filtered.map((item) => (
                <div key={item.id} className="card-modern flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                      <span className="text-[11px] font-bold font-mono px-2 py-0.5 rounded bg-brand-50 text-brand-700 border border-brand-200">
                        {item.tag}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        Deadline: {item.deadline}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-1 leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-500 mb-4">{item.provider}</p>

                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 mb-4">
                      <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400 block font-mono">
                        Grant Entitlement:
                      </span>
                      <span className="text-sm font-bold text-brand-700 mt-0.5 block">
                        {item.amount}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      <strong className="text-slate-800">Eligibility Criteria:</strong> {item.eligibility}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-emerald font-semibold flex items-center gap-1.5">
                      <CheckCircleIcon size={14} />
                      Application Guide in App
                    </span>
                    <Link href="/early-access" className="btn-secondary text-xs py-1.5 px-3">
                      View Document Checklist
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Document Verification Standards */}
            <div className="mt-12 p-6 rounded-xl bg-white border border-slate-200">
              <h4 className="text-sm font-bold text-slate-900 mb-2">
                Prerequisite Verification Documentation
              </h4>
              <p className="text-xs text-slate-500 mb-4">
                Students applying for national merit grants should ensure the following documentation is verified by local authorities:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs font-medium text-slate-700">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  1. Tehsildar-Issued Income Certificate
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  2. Community / Category Certificate
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  3. Verified Previous Academic Marksheets
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  4. Aadhaar-Seeded Bank Account (DBT Enabled)
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
