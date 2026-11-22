import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-20 flex items-center overflow-hidden bg-cream border-b border-border">
      {/* Subtle grid background — NOT gradient blob */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(#1C1A17 1px, transparent 1px),
            linear-gradient(90deg, #1C1A17 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      <div className="content-container section-wrapper relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 lg:gap-16 items-center py-12 lg:py-20">

          {/* LEFT — TEXT COLUMN */}
          <div className="max-w-2xl text-left">
            {/* Eyebrow label — NOT a glowing badge */}
            <p className="text-caption text-saffron font-semibold uppercase tracking-widest mb-6">
              Class 6 se 12 tak · Bilkul Free Shuru Karo
            </p>

            {/* H1 — left-aligned, editorial */}
            <h1 className="text-display-lg sm:text-display-xl text-charcoal mb-6 font-hindi">
              <span className="block">Gaon ka Beta,</span>
              {/* Second line with saffron underline SVG — NOT gradient text */}
              <span className="relative inline-block mt-1">
                IIT ki Taiyari.
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 400 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 9 Q100 2 200 9 Q300 16 398 9"
                    stroke="#F97316"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
            </h1>

            {/* Subheading — bilingual */}
            <p className="text-body-lg text-ink mb-10 max-w-xl font-hindi leading-relaxed">
              Class 6th se 12th ke rural students ke liye —{" "}
              <strong className="text-charcoal font-semibold">AI mentor, offline virtual labs, aur scholarship matcher</strong>{" "}
              — sab kuch Hindi mein, bina internet ke bhi.
            </p>

            {/* CTAs — horizontal, NOT stacked */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/early-access" className="btn-primary text-base py-3.5 px-8 justify-center">
                Early Access Lo →
              </Link>
              <Link href="/how-it-works" className="btn-ghost text-base py-3.5 px-8 justify-center">
                Kaise Kaam Karta Hai?
              </Link>
            </div>

            {/* Trust line — plain text, NOT badges/pills */}
            <p className="text-body-sm text-stone font-hindi flex flex-wrap gap-x-4 gap-y-2">
              <span>✓ No credit card</span>
              <span>✓ Works offline</span>
              <span>✓ Hindi + English</span>
              <span>✓ 2G Network Ready</span>
            </p>
          </div>

          {/* RIGHT — ILLUSTRATION / MOCKUP */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Phone mockup frame */}
            <div
              className="relative w-[300px] sm:w-[330px] bg-charcoal rounded-[36px] p-3.5 shadow-hard-xl transition-transform hover:rotate-0"
              style={{ transform: "rotate(2.5deg)" }}
            >
              {/* Phone notch */}
              <div className="w-24 h-5 bg-charcoal rounded-full mx-auto -mt-1 mb-3 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-ink/50" />
              </div>

              {/* Screen content — AI Mentor chat in Hindi */}
              <div className="bg-parchment rounded-[24px] overflow-hidden border border-charcoal/20" style={{ minHeight: "500px" }}>
                {/* Chat header */}
                <div className="bg-saffron px-4 py-3.5 flex items-center justify-between text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-cream rounded-full flex items-center justify-center text-saffron font-bold text-sm shadow-hard-sm">
                      M
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm font-hindi leading-none">Mentorix AI Dost</p>
                      <p className="text-white/80 text-[11px] font-hindi mt-1">24/7 Sahayak • Hindi mein</p>
                    </div>
                  </div>
                  <span className="bg-charcoal/25 text-white text-[10px] px-2 py-0.5 rounded-badge uppercase font-bold tracking-wider">
                    2G Pe Live
                  </span>
                </div>

                {/* Chat messages */}
                <div className="p-4 space-y-3.5 text-left">
                  {/* AI message */}
                  <div className="flex gap-2">
                    <div className="w-7 h-7 bg-saffron rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold shadow-hard-sm">M</div>
                    <div className="bg-cream rounded-lg rounded-tl-none p-3 shadow-hard-sm max-w-[85%] border border-border">
                      <p className="text-xs text-charcoal font-hindi leading-relaxed">
                        Namaste Ravi! 🙏 Aaj Physics mein Newton ke laws pe kaam karte hain. Teri pace pe, Hindi mein.
                      </p>
                    </div>
                  </div>

                  {/* User message */}
                  <div className="flex gap-2 justify-end">
                    <div className="bg-saffron rounded-lg rounded-tr-none p-3 shadow-hard-sm max-w-[85%] border border-saffron">
                      <p className="text-xs text-white font-hindi leading-relaxed">
                        Haan bhaiya! Mujhe inertia (जड़त्व) samajh nahi aata. Kheti mein kahan lagta hai?
                      </p>
                    </div>
                  </div>

                  {/* AI response */}
                  <div className="flex gap-2">
                    <div className="w-7 h-7 bg-saffron rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold shadow-hard-sm">M</div>
                    <div className="bg-cream rounded-lg rounded-tl-none p-3 shadow-hard-sm max-w-[85%] border border-border">
                      <p className="text-xs text-charcoal font-hindi leading-relaxed">
                        Shaabash! Socho — jab bailgadi (बैलगाड़ी) chalte chalte achanak rukti hai, toh tu aage jhukta hai na? Kyunki tera shareer chalna chahta hai! Yahi pehla niyam hai. 🚜
                      </p>
                    </div>
                  </div>

                  {/* Interactive experiment trigger */}
                  <div className="bg-sky/10 border border-sky/30 rounded-card p-2.5 flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-bold text-sky font-hindi">🧪 Lab Experiment #14</p>
                      <p className="text-[10px] text-ink font-hindi">Inertia Simulator (Offline Mode)</p>
                    </div>
                    <span className="text-[10px] font-bold bg-sky text-white px-2 py-1 rounded-badge">
                      Khel Kar Dekho →
                    </span>
                  </div>

                  {/* XP Badge */}
                  <div className="flex justify-center pt-1">
                    <div className="bg-leaf/15 border border-leaf/40 rounded-badge px-3 py-1.5 inline-flex items-center gap-2 shadow-hard-sm">
                      <span className="text-leaf text-xs font-bold font-hindi">+15 XP — Concept Clear! 🎯</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stats card — slightly offset */}
            <div
              className="absolute -bottom-5 -left-4 sm:-left-8 bg-cream border-2 border-charcoal 
                         rounded-card p-3.5 shadow-hard-md"
              style={{ transform: "rotate(-3deg)" }}
            >
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-leaf animate-pulse" />
                <p className="text-xs text-stone font-hindi font-medium">📴 100% Offline Mode</p>
              </div>
              <p className="text-body-sm font-bold text-charcoal mt-0.5">Zero Data, Pure Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
