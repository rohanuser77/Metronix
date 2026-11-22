"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CheckCircleIcon, ShieldCheckIcon } from "@/components/icons/MetronixIcons";

export default function EarlyAccessPage() {
  const [email, setEmail] = useState("");
  const [classLevel, setClassLevel] = useState("Class 10");
  const [stateName, setStateName] = useState("Uttar Pradesh");
  const [goal, setGoal] = useState("Secondary Board Mastery");
  const [totalJoined, setTotalJoined] = useState(8432);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/waitlist")
      .then((res) => res.json())
      .then((data) => {
        if (data.totalRegistrations) {
          setTotalJoined(data.totalRegistrations);
        }
      })
      .catch(() => {});
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          classLevel,
          state: stateName,
          source: `metronix_early_access_${goal}`,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setTotalJoined((prev) => prev + 1);
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "An error occurred. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-canvas-subtle pt-20">
        {/* Banner */}
        <section className="section-wrapper py-14 bg-white border-b border-slate-200 text-left">
          <div className="content-container">
            <span className="badge-brand mb-3">Academic Access Portal</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Request Early Student & Educator Access
            </h1>
            <p className="text-base text-slate-600 mt-3 max-w-2xl leading-relaxed">
              Reserve a verified learning seat for the initial cohort. Includes unrestricted offline virtual lab packs, Socratic tutoring, and scholarship tracking.
            </p>
          </div>
        </section>

        {/* Form and Counter */}
        <section className="section-wrapper py-section text-left">
          <div className="content-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Form Card */}
              <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-8 shadow-card">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Student or Parent Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="student@example.com"
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-md text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-600"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1">
                          Academic Class Level *
                        </label>
                        <select
                          value={classLevel}
                          onChange={(e) => setClassLevel(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-600"
                        >
                          <option>Class 6</option>
                          <option>Class 7</option>
                          <option>Class 8</option>
                          <option>Class 9</option>
                          <option>Class 10</option>
                          <option>Class 11 Science</option>
                          <option>Class 12 Science</option>
                          <option>Polytechnic / Vocational</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1">
                          State / Region *
                        </label>
                        <select
                          value={stateName}
                          onChange={(e) => setStateName(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-600"
                        >
                          <option>Uttar Pradesh</option>
                          <option>Bihar</option>
                          <option>Madhya Pradesh</option>
                          <option>Rajasthan</option>
                          <option>Jharkhand</option>
                          <option>Maharashtra</option>
                          <option>Chhattisgarh</option>
                          <option>Other State</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Primary Academic Target
                      </label>
                      <select
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-600"
                      >
                        <option>Secondary Board Examination Mastery</option>
                        <option>National Scholarship Qualifications (NMMSS / INSPIRE)</option>
                        <option>Engineering & Polytechnic Foundations</option>
                        <option>Medical & Life Sciences Foundations</option>
                      </select>
                    </div>

                    {error && (
                      <p className="text-xs text-rose-600 font-medium">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full justify-center py-3 text-xs font-semibold"
                    >
                      {loading ? "Processing Registration..." : "Confirm Early Access Enrollment"}
                    </button>

                    <p className="text-[11px] text-slate-500 text-center">
                      Confidential academic verification. No marketing spam.
                    </p>
                  </form>
                ) : (
                  <div className="text-center py-6">
                    <div className="w-12 h-12 rounded-full bg-emerald-soft text-emerald flex items-center justify-center mx-auto mb-4">
                      <CheckCircleIcon size={28} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                      Enrollment Priority Confirmed
                    </h3>
                    <p className="text-xs text-slate-600 max-w-md mx-auto mb-6">
                      Your priority roll index is <strong>#MTX-{totalJoined}</strong>. You will receive immediate deployment notifications upon the cohort launch.
                    </p>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 font-mono text-left max-w-sm mx-auto space-y-1">
                      <div>Class Level: {classLevel}</div>
                      <div>Region: {stateName}</div>
                      <div>Target Focus: {goal}</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Status Sidebar */}
              <div className="lg:col-span-5 space-y-6">
                <div className="card-modern">
                  <span className="text-xs font-bold font-mono text-slate-400 uppercase">
                    Cohort Capacity
                  </span>
                  <div className="my-3 flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-slate-900 font-mono">
                      {totalJoined.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-500">/ 10,000 Early Seats</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full bg-brand-600 rounded-full"
                      style={{ width: `${Math.min(100, (totalJoined / 10000) * 100)}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-slate-500 mt-2">
                    Approximately {10000 - totalJoined} allocations remaining in the current deployment window.
                  </p>
                </div>

                <div className="card-modern space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Included Capabilities
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-600">
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon size={14} className="text-emerald" />
                      <span>Full offline access to 50+ laboratory modules</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon size={14} className="text-emerald" />
                      <span>Unrestricted query allowances on the Socratic AI tutor</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon size={14} className="text-emerald" />
                      <span>Direct scholarship documentation & deadline tracker</span>
                    </li>
                  </ul>
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
