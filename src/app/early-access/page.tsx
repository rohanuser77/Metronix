"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function EarlyAccessPage() {
  const [email, setEmail] = useState("");
  const [classLevel, setClassLevel] = useState("Class 10");
  const [stateName, setStateName] = useState("Uttar Pradesh");
  const [goal, setGoal] = useState("Board Exam Topper");
  const [preferredLang, setPreferredLang] = useState("Hindi");
  const [totalJoined, setTotalJoined] = useState(8429);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch current waitlist count from API
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
      setError("Kripya sahi email pata daalein.");
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
          source: `early_access_page_${goal}_${preferredLang}`,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setTotalJoined((prev) => prev + 1);
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Kuch gadbad ho gayi. Kripya punah prayas karein.");
      }
    } catch {
      setError("Network error. Kripya check karein.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-cream pt-20">
        <section className="section-wrapper py-16 bg-parchment border-b-2 border-charcoal">
          <div className="content-container text-left">
            <span className="badge bg-saffron text-white border-charcoal text-caption font-bold px-3 py-1 mb-4 shadow-hard-sm">
              Limited 10,000 Early Access Spots
            </span>
            <h1 className="text-display-lg sm:text-display-xl text-charcoal font-hindi mb-4">
              Mentorix VIP Waitlist
            </h1>
            <p className="text-body-lg text-ink font-hindi max-w-2xl leading-relaxed">
              Pehle 10,000 students ko lifetime muft access, personalized study kit, aur hamare AI mentors ke sath 1-on-1 guidance milegi.
            </p>
          </div>
        </section>

        <section className="section-wrapper py-section">
          <div className="content-container">
            <div className="grid grid-cols-1 lg:grid-cols-[60fr_40fr] gap-12 items-start text-left">
              {/* FORM */}
              <div className="bg-cream border-2 border-charcoal rounded-panel p-8 sm:p-10 shadow-hard-xl">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6 font-hindi">
                    <div>
                      <label className="text-body-sm font-bold text-charcoal block mb-2">
                        1. Apna Email Address Likho *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="apna-email@gmail.com"
                        className="w-full px-4 py-3.5 rounded-btn border-2 border-charcoal bg-parchment text-charcoal font-hindi text-body-md shadow-hard-sm focus:outline-none focus:border-saffron"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-caption font-bold text-stone uppercase block mb-1">
                          Kaksha (Class)
                        </label>
                        <select
                          value={classLevel}
                          onChange={(e) => setClassLevel(e.target.value)}
                          className="w-full px-3.5 py-3 rounded-btn border-2 border-charcoal bg-parchment text-charcoal font-hindi text-body-sm shadow-hard-sm"
                        >
                          <option>Class 6</option>
                          <option>Class 7</option>
                          <option>Class 8</option>
                          <option>Class 9</option>
                          <option>Class 10</option>
                          <option>Class 11 Science</option>
                          <option>Class 12 Science</option>
                          <option>Polytechnic / ITI</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-caption font-bold text-stone uppercase block mb-1">
                          Rajya (State)
                        </label>
                        <select
                          value={stateName}
                          onChange={(e) => setStateName(e.target.value)}
                          className="w-full px-3.5 py-3 rounded-btn border-2 border-charcoal bg-parchment text-charcoal font-hindi text-body-sm shadow-hard-sm"
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
                      <label className="text-caption font-bold text-stone uppercase block mb-1">
                        Aapka Mukhya Lakshya (Primary Goal)
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {[
                          "Board Exam Topper",
                          "IIT / JEE Taiyari",
                          "NEET (Medical)",
                          "Polytechnic / Diploma",
                          "Scholarship Pana",
                        ].map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => setGoal(item)}
                            className={`p-3 rounded-btn border-2 text-xs font-bold text-left font-hindi transition-all ${
                              goal === item
                                ? "bg-saffron text-white border-charcoal shadow-hard-sm"
                                : "bg-parchment text-ink border-border hover:border-charcoal"
                            }`}
                          >
                            🎯 {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-caption font-bold text-stone uppercase block mb-1">
                        Aapki Pasandeeda Bhasha (Language)
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {["Hindi", "Hinglish", "Bhojpuri", "Marathi", "English"].map((lang) => (
                          <button
                            key={lang}
                            type="button"
                            onClick={() => setPreferredLang(lang)}
                            className={`px-3 py-1.5 rounded-btn border-2 text-xs font-bold transition-all ${
                              preferredLang === lang
                                ? "bg-charcoal text-cream border-charcoal"
                                : "bg-parchment text-ink border-border hover:border-charcoal"
                            }`}
                          >
                            {lang}
                          </button>
                        ))}
                      </div>
                    </div>

                    {error && (
                      <p className="text-rose text-body-sm font-hindi font-medium">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full justify-center py-4 text-base font-bold"
                    >
                      {loading ? "Seat Reserve Kar Rahe Hain..." : "Free Early Access Seat Lo →"}
                    </button>

                    <p className="text-stone text-caption text-center font-hindi">
                      🔒 Zero spam. Hamare launch hone par seedha WhatsApp/Email aayega.
                    </p>
                  </form>
                ) : (
                  <div className="bg-leaf/10 border-2 border-leaf rounded-panel p-8 text-center shadow-hard-md">
                    <span className="text-5xl block mb-3">🎉</span>
                    <h3 className="text-display-md text-charcoal font-hindi mb-2">
                      Shabaash! Aapka Sthaan Surakshit Hai.
                    </h3>
                    <p className="text-body-md text-ink font-hindi mb-6">
                      Aapka roll number: <strong>#MTX-{totalJoined}</strong>. Jaise hi launch hoga, aapko sabse pehle direct invite bhejenge.
                    </p>
                    <div className="p-4 bg-cream rounded-card border-2 border-charcoal inline-block text-left font-hindi text-body-sm shadow-hard-sm">
                      <p>✓ Kaksha: {classLevel}</p>
                      <p>✓ Rajya: {stateName}</p>
                      <p>✓ Lakshya: {goal}</p>
                      <p>✓ Bhasha: {preferredLang}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* PROGRESS & PERKS SIDEBAR */}
              <div className="space-y-6">
                <div className="bg-parchment border-2 border-charcoal rounded-panel p-6 shadow-hard-md text-left">
                  <div className="flex items-center justify-between pb-3 border-b border-border">
                    <span className="text-caption font-bold text-stone uppercase font-mono">
                      Live Registrations
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-leaf animate-pulse" />
                  </div>
                  <div className="my-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-display-lg font-extrabold text-charcoal font-mono">
                        {totalJoined.toLocaleString()}
                      </span>
                      <span className="text-body-sm text-stone font-hindi font-medium">
                        / 10,000 Chhatra
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full h-3.5 bg-cream border-2 border-charcoal rounded-full overflow-hidden mt-2 p-0.5">
                      <div
                        className="h-full bg-saffron rounded-full"
                        style={{ width: `${Math.min(100, (totalJoined / 10000) * 100)}%` }}
                      />
                    </div>
                  </div>
                  <p className="text-caption text-stone font-hindi">
                    Lagbhag <strong>{10000 - totalJoined}</strong> spots baaki hain.
                  </p>
                </div>

                <div className="bg-cream border-2 border-charcoal rounded-panel p-6 shadow-hard-md text-left">
                  <h4 className="text-display-sm text-charcoal font-hindi mb-3">
                    Early Access Ke Fayde:
                  </h4>
                  <ul className="space-y-2.5 text-body-sm text-ink font-hindi">
                    <li className="flex items-start gap-2">
                      <span className="text-leaf font-bold">✦</span>
                      <span>Lifetime 100% Free Access (sab virtual labs)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-leaf font-bold">✦</span>
                      <span>VIP Doubt Solver pass — 0 waiting time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-leaf font-bold">✦</span>
                      <span>Early scholarship matching alerts via SMS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-leaf font-bold">✦</span>
                      <span>Mentorix Founder&apos;s Circle badge</span>
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
