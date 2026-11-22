import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-cream border-t border-charcoal/15 mt-auto">
      <div className="content-container section-wrapper py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          
          {/* COLUMN 1: Logo & Mission Tagline */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-block">
              <svg width="150" height="34" viewBox="0 0 140 32" fill="none" aria-label="Mentorix Logo">
                <text x="0" y="24" fontFamily="Plus Jakarta Sans" fontWeight="800" fontSize="22" fill="#1C1A17">
                  Mento
                </text>
                <circle cx="96" cy="8" r="4" fill="#F97316" />
                <text x="88" y="24" fontFamily="Plus Jakarta Sans" fontWeight="800" fontSize="22" fill="#1C1A17">
                  r
                </text>
                <text x="97" y="24" fontFamily="Plus Jakarta Sans" fontWeight="800" fontSize="22" fill="#1C1A17">
                  ix
                </text>
              </svg>
            </Link>
            <p className="text-body-md text-charcoal font-hindi italic">
              &ldquo;Woh rah jo sirf tere liye bani hai.&rdquo;
            </p>
            <p className="text-body-sm text-stone font-hindi max-w-sm">
              Gaon ke har student ke liye offline-first, vernacular AI shiksha. Pocket virtual labs se lekar zero-cost college admission tak.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-body-sm font-semibold text-charcoal hover:text-saffron transition-colors"
                aria-label="Mentorix Twitter"
              >
                Twitter / X
              </a>
              <span className="text-stone">·</span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-body-sm font-semibold text-charcoal hover:text-saffron transition-colors"
                aria-label="Mentorix Instagram"
              >
                Instagram
              </a>
              <span className="text-stone">·</span>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="text-body-sm font-semibold text-charcoal hover:text-saffron transition-colors"
                aria-label="Mentorix YouTube"
              >
                YouTube
              </a>
            </div>
          </div>

          {/* COLUMN 2: Direct Navigation (No headers, clean editorial) */}
          <div className="flex flex-col gap-3 md:pl-8">
            <p className="text-caption text-stone uppercase tracking-widest mb-1">Raste</p>
            <Link href="/features" className="text-body-md text-ink hover:text-saffron transition-colors">
              Features (6 Pillars + Command Center)
            </Link>
            <Link href="/how-it-works" className="text-body-md text-ink hover:text-saffron transition-colors">
              How It Works (Student Safar)
            </Link>
            <Link href="/scholarships" className="text-body-md text-ink hover:text-saffron transition-colors">
              Scholarship Matcher (Zero-Cost College)
            </Link>
            <Link href="/for-parents" className="text-body-md text-ink hover:text-saffron transition-colors">
              For Parents (WhatsApp Updates in Hindi)
            </Link>
            <Link href="/for-schools" className="text-body-md text-ink hover:text-saffron transition-colors">
              For Schools & NGOs (Offline Kiosk Pack)
            </Link>
            <Link href="/about" className="text-body-md text-ink hover:text-saffron transition-colors">
              About & Mission
            </Link>
          </div>

          {/* COLUMN 3: Contact & Bharat Pride */}
          <div className="flex flex-col gap-4">
            <p className="text-caption text-stone uppercase tracking-widest mb-1">Sampark</p>
            <p className="text-body-md text-charcoal font-semibold">
              jai-hind@mentorix.in
            </p>
            <p className="text-body-sm text-stone font-hindi">
              Schools, Anganwadis aur NGO partners — humein seedha likhein.
            </p>
            <div className="p-4 bg-parchment rounded-card border border-border mt-2">
              <p className="text-body-sm font-bold text-charcoal font-hindi flex items-center gap-2">
                <span>🇮🇳</span> Made with love for Bharat
              </p>
              <p className="text-caption text-stone font-hindi mt-1">
                Optimized for 2G/3G networks, low-cost Android phones, and multilingual homes.
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-caption text-stone">
          <p>© {new Date().getFullYear()} Mentorix Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-charcoal transition-colors">
              Privacy Policy
            </Link>
            <Link href="/about" className="hover:text-charcoal transition-colors">
              Terms of Service
            </Link>
            <Link href="/early-access" className="text-saffron font-semibold hover:underline">
              Join Early Access
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
