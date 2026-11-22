"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

interface ScholarshipItem {
  id: string;
  name: string;
  provider: string;
  amount: string;
  category: "all" | "sc_st" | "obc" | "girls" | "merit";
  eligibilityHindi: string;
  deadline: string;
  tag: string;
}

const sampleScholarships: ScholarshipItem[] = [
  {
    id: "nmmss",
    name: "National Means-cum-Merit Scholarship (NMMSS)",
    provider: "Ministry of Education, Govt. of India",
    amount: "₹12,000 / saal (Kaksha 9 se 12 tak)",
    category: "merit",
    eligibilityHindi: "Kaksha 8 mein 55% se adhik marks, sarkari/aided school chhatra, aamdani < ₹3.5 Lakh.",
    deadline: "November 30",
    tag: "Central Govt",
  },
  {
    id: "inspire",
    name: "INSPIRE MANAK Award (DST)",
    provider: "Department of Science & Technology",
    amount: "₹10,000 one-time science project grant",
    category: "all",
    eligibilityHindi: "Kaksha 6–10 ke vidyarthi jinke paas naya science innovation idea ho.",
    deadline: "September 15",
    tag: "Science & Innovation",
  },
  {
    id: "postmatric-scst",
    name: "Post-Matric Scholarship for SC/ST Students",
    provider: "Ministry of Social Justice & Empowerment",
    amount: "Puri college/polytechnic fees + hostel bhatta",
    category: "sc_st",
    eligibilityHindi: "10th pass SC/ST chhatra jo Class 11, 12, ITI, Diploma ya Degree mein hain.",
    deadline: "December 31",
    tag: "Full Fees Cover",
  },
  {
    id: "aicte-pragati",
    name: "AICTE Pragati Scholarship for Girls",
    provider: "AICTE, Govt. of India",
    amount: "₹50,000 / saal",
    category: "girls",
    eligibilityHindi: "Technical diploma ya engineering degree mein pravesh lene wali chhatrayein.",
    deadline: "October 31",
    tag: "Girls in STEM",
  },
  {
    id: "tata-trust",
    name: "Tata Trusts Means Grant for Higher Education",
    provider: "Tata Trusts",
    amount: "₹30,000 - ₹60,000 saalana",
    category: "merit",
    eligibilityHindi: "Gramin chhatra jo Science, Agriculture ya Nursing degree mein padh rahe hain.",
    deadline: "Rolling / Har Mahine",
    tag: "Private Trust",
  },
  {
    id: "obc-postmatric",
    name: "OBC Post-Matric State Scholarship",
    provider: "State Social Welfare Departments",
    amount: "₹8,000 - ₹20,000 / saal",
    category: "obc",
    eligibilityHindi: "OBC varg ke chhatra jinki parivarik aamdani ₹2.5 Lakh se kam ho.",
    deadline: "State Timelines",
    tag: "State Govt",
  },
];

export default function ScholarshipsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filtered = sampleScholarships.filter((s) => {
    const matchesCat = selectedCategory === "all" || s.category === selectedCategory;
    const matchesSearch =
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.eligibilityHindi.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.provider.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-cream pt-20">
        {/* Banner */}
        <section className="section-wrapper py-16 bg-saffron text-white border-b-2 border-charcoal">
          <div className="content-container text-left">
            <span className="badge bg-charcoal text-cream border-charcoal text-caption font-bold px-3 py-1 mb-4 shadow-hard-sm">
              Pillar 03 Deep Dive
            </span>
            <h1 className="text-display-lg sm:text-display-xl text-white font-hindi mb-4">
              Zero-Cost College & Scholarships
            </h1>
            <p className="text-body-lg text-white/95 font-hindi max-w-2xl leading-relaxed">
              Paise ki kami ki wajah se kisi bhi gaon ke vidyarthi ki padhai nahi rukegi. Sarkari aur private fellowships ka poora khazana.
            </p>
          </div>
        </section>

        {/* Filter and Directory */}
        <section className="section-wrapper py-section">
          <div className="content-container text-left">
            {/* Search and Category Tabs */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
              {/* Category Pills */}
              <div className="flex flex-wrap gap-2">
                {[
                  { id: "all", label: "Sabhi (All)" },
                  { id: "girls", label: "Girls in STEM" },
                  { id: "sc_st", label: "SC / ST" },
                  { id: "obc", label: "OBC" },
                  { id: "merit", label: "Merit-cum-Means" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedCategory(tab.id)}
                    className={`py-2 px-4 rounded-btn border-2 text-xs font-bold font-hindi transition-all shadow-hard-sm ${
                      selectedCategory === tab.id
                        ? "bg-charcoal text-cream border-charcoal"
                        : "bg-cream text-ink border-charcoal/30 hover:border-charcoal"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="w-full md:w-72">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Scholarship ya vishay khojo..."
                  className="w-full px-4 py-2.5 rounded-btn border-2 border-charcoal bg-cream font-hindi text-body-sm shadow-hard-sm focus:outline-none focus:border-saffron"
                />
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filtered.map((item) => (
                <div
                  key={item.id}
                  className="bg-cream border-2 border-charcoal rounded-panel p-6 shadow-hard-md flex flex-col justify-between hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard-saffron-lg transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="badge bg-leaf/15 text-leaf border-leaf/40 text-xs font-bold">
                        {item.tag}
                      </span>
                      <span className="text-caption text-stone font-mono">
                        Deadline: {item.deadline}
                      </span>
                    </div>

                    <h3 className="text-display-sm text-charcoal font-hindi mb-2">
                      {item.name}
                    </h3>
                    <p className="text-caption text-stone font-hindi mb-4">
                      {item.provider}
                    </p>

                    <div className="p-3.5 bg-parchment rounded-card border border-border mb-4">
                      <p className="text-caption uppercase tracking-wider font-bold text-stone font-mono">
                        Anudaan Rashi:
                      </p>
                      <p className="text-body-md font-bold text-saffron font-hindi">
                        {item.amount}
                      </p>
                    </div>

                    <p className="text-body-sm text-ink font-hindi leading-relaxed">
                      <strong>Patrata (Eligibility):</strong> {item.eligibilityHindi}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-border flex items-center justify-between">
                    <span className="text-caption text-leaf font-bold font-hindi">
                      ✓ Direct Form Support in App
                    </span>
                    <Link
                      href="/early-access"
                      className="btn-primary text-xs py-2 px-4"
                    >
                      Form Kaise Bharein? →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Document Checklist helper */}
            <div className="mt-14 p-8 bg-parchment border-2 border-charcoal rounded-panel shadow-hard-md">
              <h3 className="text-display-sm text-charcoal font-hindi mb-3">
                📋 Form bharne ke liye kaunse kaghaz chahiye?
              </h3>
              <p className="text-body-sm text-stone font-hindi mb-4">
                Panchayat ya Tehsil se ye 4 dastavez pehle se taiyar rakhein:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-caption font-hindi font-bold text-charcoal">
                <div className="p-3 bg-cream rounded-btn border border-border shadow-hard-sm">
                  1. Aamdani Praman Patra (Income Certificate)
                </div>
                <div className="p-3 bg-cream rounded-btn border border-border shadow-hard-sm">
                  2. Jati Praman Patra (Caste Certificate, if applicable)
                </div>
                <div className="p-3 bg-cream rounded-btn border border-border shadow-hard-sm">
                  3. Pichhli Kaksha ki Marksheet
                </div>
                <div className="p-3 bg-cream rounded-btn border border-border shadow-hard-sm">
                  4. Bank Khata (Aadhaar Linked Account)
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
