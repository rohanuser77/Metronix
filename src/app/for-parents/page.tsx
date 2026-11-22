import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata = {
  title: "For Parents (Mata-Pita ke Liye) — Mentorix",
  description: "Aapke bacche ki padhai, aapki bhasha mein. Har hafte WhatsApp progress update aur audio scorecard bina kisi app install kiye.",
};

export default function ForParentsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-cream pt-20">
        {/* Hero */}
        <section className="section-wrapper py-16 bg-charcoal text-cream border-b-2 border-charcoal">
          <div className="content-container text-left">
            <span className="badge bg-saffron text-white border-saffron text-caption font-bold px-3 py-1 mb-4 shadow-hard-saffron-sm">
              Parents Mode · Mata-Pita ke Liye
            </span>
            <h1 className="text-display-lg sm:text-display-xl text-cream font-hindi mb-4">
              Aapke Bacche ki Padhai — Aapki Bhasha Mein.
            </h1>
            <p className="text-body-lg text-cream/80 font-hindi max-w-2xl leading-relaxed">
              Bina kisi nayi app ko download kiye — har Ravivar ko aapke WhatsApp par saral report aur Hindi audio note.
            </p>
          </div>
        </section>

        {/* Feature Points */}
        <section className="section-wrapper py-section">
          <div className="content-container text-left">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-cream border-2 border-charcoal rounded-panel p-8 shadow-hard-md flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-btn bg-saffron/15 border-2 border-charcoal flex items-center justify-center text-saffron text-xl font-bold mb-4 shadow-hard-sm">
                    📱
                  </div>
                  <h3 className="text-display-sm text-charcoal font-hindi mb-3">
                    Seedha WhatsApp Par
                  </h3>
                  <p className="text-body-sm text-ink font-hindi leading-relaxed">
                    Aapko koi complex app nahi chalani padegi. Aapke maujooda WhatsApp number par har hafte ek chhota aur saaf sandesh aayega.
                  </p>
                </div>
              </div>

              <div className="bg-cream border-2 border-charcoal rounded-panel p-8 shadow-hard-md flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-btn bg-leaf/15 border-2 border-charcoal flex items-center justify-center text-leaf text-xl font-bold mb-4 shadow-hard-sm">
                    🎙️
                  </div>
                  <h3 className="text-display-sm text-charcoal font-hindi mb-3">
                    Aawaz mein Sunein
                  </h3>
                  <p className="text-body-sm text-ink font-hindi leading-relaxed">
                    Agar padhna mushkil lage, toh sirf ek button dabakar Hindi, Bhojpuri ya Marathi mein sunein ki baccha kya padh raha hai.
                  </p>
                </div>
              </div>

              <div className="bg-cream border-2 border-charcoal rounded-panel p-8 shadow-hard-md flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-btn bg-sky/15 border-2 border-charcoal flex items-center justify-center text-sky text-xl font-bold mb-4 shadow-hard-sm">
                    💰
                  </div>
                  <h3 className="text-display-sm text-charcoal font-hindi mb-3">
                    Fees aur Sarkari Madad
                  </h3>
                  <p className="text-body-sm text-ink font-hindi leading-relaxed">
                    Sarkari polytechnic, engineering college aur scholarship ki aisi jankari jo private coaching wale aapse chhipaate hain.
                  </p>
                </div>
              </div>
            </div>

            {/* How to Enroll Child */}
            <div className="bg-parchment border-2 border-charcoal rounded-panel p-8 sm:p-12 shadow-hard-lg">
              <h2 className="text-display-md text-charcoal font-hindi mb-6">
                Apne Bacche ko Kaise Jodein?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-hindi">
                <div className="p-4 bg-cream rounded-card border border-border shadow-hard-sm">
                  <span className="text-caption font-bold text-saffron uppercase font-mono">Kadam 1</span>
                  <h4 className="font-bold text-charcoal text-body-lg mt-1 mb-2">Waitlist Join Karein</h4>
                  <p className="text-caption text-ink">Apna ya bacche ka email/phone daal kar seat reserve karein.</p>
                </div>
                <div className="p-4 bg-cream rounded-card border border-border shadow-hard-sm">
                  <span className="text-caption font-bold text-saffron uppercase font-mono">Kadam 2</span>
                  <h4 className="font-bold text-charcoal text-body-lg mt-1 mb-2">Bhasha Chunein</h4>
                  <p className="text-caption text-ink">Hindi, Marathi, Bhojpuri ya Bangla — jo bhasha ghar mein boli jaati hai.</p>
                </div>
                <div className="p-4 bg-cream rounded-card border border-border shadow-hard-sm">
                  <span className="text-caption font-bold text-saffron uppercase font-mono">Kadam 3</span>
                  <h4 className="font-bold text-charcoal text-body-lg mt-1 mb-2">Har Ravivar Update</h4>
                  <p className="text-caption text-ink">Bina data kharch ke bacche ki tarakki par garv mehsus karein.</p>
                </div>
              </div>

              <div className="mt-8 text-center sm:text-left">
                <Link href="/early-access" className="btn-primary">
                  Apne Bacche ka Naam Register Karein →
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
