import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata = {
  title: "About Us & Mission — Mentorix",
  description: "Mentorix ki shuruat kyu hui? Gaon ke har vidyarthi ke liye offline-first, vernacular STEM aur higher education ka adhikaar.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-cream pt-20">
        {/* Banner */}
        <section className="section-wrapper py-16 bg-parchment border-b-2 border-charcoal">
          <div className="content-container text-left">
            <span className="badge bg-saffron text-white border-charcoal text-caption font-bold px-3 py-1 mb-4 shadow-hard-sm">
              Our Manifesto
            </span>
            <h1 className="text-display-lg sm:text-display-xl text-charcoal font-hindi mb-4">
              &ldquo;Woh rah jo sirf tere liye bani hai.&rdquo;
            </h1>
            <p className="text-body-lg text-ink font-hindi max-w-2xl leading-relaxed">
              Kyu gaon ke kisan aur mazdoor ke bacchon ko lagta hai ki IIT, NEET ya achhi engineering unke bas ki baat nahi? Hum is soch ko badalne nikle hain.
            </p>
          </div>
        </section>

        {/* Manifesto Content */}
        <section className="section-wrapper py-section">
          <div className="content-container text-left">
            <div className="max-w-3xl space-y-8 font-hindi text-body-lg text-ink leading-relaxed">
              <div className="bg-cream border-2 border-charcoal rounded-panel p-8 shadow-hard-md">
                <h2 className="text-display-sm text-charcoal mb-4">
                  Bharat ke 70% vidyarthi shehar ke EdTech ke liye adrishya (invisible) hain.
                </h2>
                <p>
                  Shehar ke mehenge platforms maante hain ki har bacche ke paas ₹40,000 ka phone hai, 24 ghante 5G WiFi hai, aur ghar wale English mein batcheet samajhte hain. Lekin asali Bharat mein:
                </p>
                <ul className="space-y-2 mt-4 text-body-md text-charcoal font-medium">
                  <li>— 2G/3G network achanak chala jata hai.</li>
                  <li>— Phone par 1GB data pure parivaar ko milta hai.</li>
                  <li>— Science lab sirf kitaab ke photo mein dikhti hai.</li>
                  <li>— English bolne se zyada darr kisi cheez ka nahi lagta.</li>
                </ul>
              </div>

              <div className="bg-parchment border-2 border-charcoal rounded-panel p-8 shadow-hard-md">
                <h2 className="text-display-sm text-charcoal mb-4">
                  Hamara Sankalp: 3 Siddhaant (Principles)
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-saffron text-body-lg mb-1">
                      1. Offline-First, Bandwidth-Agnostic
                    </h3>
                    <p className="text-body-sm text-ink">
                      Har simulation, har formula aur har practice paper bina internet chalega. Padhai ke beech buffering ka pahiya nahi ghoomega.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-saffron text-body-lg mb-1">
                      2. Vernacular & Desi Context
                    </h3>
                    <p className="text-body-sm text-ink">
                      Newton ke niyam ko tractor aur bailgadi se samjhayenge, Archimedes ko kuan aur balti se. Dimag mein baat baithni chahiye, bhasha diwaar nahi banegi.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-saffron text-body-lg mb-1">
                      3. Zero-Cost College Guarantee
                    </h3>
                    <p className="text-body-sm text-ink">
                      Padhai tabhi safal hai jab 12th ke baad fees ke abhav mein kisi ko majboori mein padhai na chhodni pade. Hum har yogya vidyarthi ko scholarship aur sarkari college tak pahunchayenge.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-charcoal text-cream rounded-panel border-2 border-charcoal shadow-hard-xl text-center">
                <p className="text-display-sm font-hindi mb-4">
                  &ldquo;Gaon ka beta, ab IIT aur duniya jeetega.&rdquo;
                </p>
                <Link href="/early-access" className="btn-primary justify-center">
                  Hamari Yatra Ka Hissa Banein →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
