"use client";
import { useState } from "react";

export default function EarlyAccessCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Kripya sahi email address daalein.");
      return;
    }
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "homepage_bottom_cta" }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Kuch gadbad ho gayi. Dobara koshish karein.");
      }
    } catch {
      setError("Network error. Thodi der baad dubara try karein.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-cream py-section">
      <div className="content-container section-wrapper">
        {/* Centered Section — Intentional Contrast */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="relative bg-parchment rounded-panel p-8 sm:p-14 border-2 border-charcoal shadow-hard-xl">
            {/* Subtle scattered dots */}
            <div
              className="absolute inset-0 rounded-panel opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(circle, #1C1A17 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
              aria-hidden="true"
            />

            <div className="relative z-10">
              <span className="badge bg-saffron text-white border-charcoal text-caption font-bold px-3 py-1 mb-4 shadow-hard-sm">
                Limited Early Access · Seemit Seat
              </span>
              <h2 className="text-display-md text-charcoal mb-3 font-hindi">
                Mentorix jald aa raha hai.
              </h2>
              <p className="text-body-lg text-ink mb-8 font-hindi max-w-lg mx-auto">
                Pehle <strong className="text-charcoal font-bold">10,000 students</strong> ko milega free lifetime access aur VIP study kit.
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Apna email address daalo..."
                    className="flex-1 px-4 py-3.5 rounded-btn border-2 border-charcoal bg-cream
                               text-charcoal placeholder:text-stone text-body-md
                               focus:outline-none focus:border-saffron
                               shadow-hard-sm transition-shadow font-hindi"
                    aria-label="Email address"
                    required
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary py-3.5 px-7 disabled:opacity-70 disabled:cursor-not-allowed justify-center whitespace-nowrap"
                  >
                    {loading ? "Jod rahe hain..." : "Join Waitlist →"}
                  </button>
                </form>
              ) : (
                <div className="bg-leaf/10 border-2 border-leaf rounded-card p-6 shadow-hard-sm">
                  <p className="text-leaf font-bold text-display-sm mb-1 font-hindi">
                    🎉 Bahut Shabaash!
                  </p>
                  <p className="text-ink text-body-sm font-hindi">
                    Aap Mentorix early access waitlist mein jud chuke hain. Launch hote hi sabse pehle aapko link bhejenge.
                  </p>
                </div>
              )}

              {error && (
                <p className="text-rose text-body-sm mt-3 font-hindi font-medium">{error}</p>
              )}

              <p className="text-stone text-caption mt-5 font-hindi flex items-center justify-center gap-1.5">
                <span>🔒 Spam nahi karenge. Promise. 🤝</span>
                <span>• Bilkul muft registration</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
