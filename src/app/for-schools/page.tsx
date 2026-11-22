import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SchoolPartnershipForm from "@/components/forms/SchoolPartnershipForm";

export const metadata = {
  title: "For Schools & NGOs — Mentorix",
  description: "Rural schools, panchayats aur NGOs ke liye Mentorix Offline Kiosk Pack aur Teacher Sahayak toolkit.",
};

export default function ForSchoolsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-cream pt-20">
        {/* Banner */}
        <section className="section-wrapper py-16 bg-parchment border-b-2 border-charcoal">
          <div className="content-container text-left">
            <span className="badge bg-saffron text-white border-charcoal text-caption font-bold px-3 py-1 mb-4 shadow-hard-sm">
              Institutional Partnership
            </span>
            <h1 className="text-display-lg sm:text-display-xl text-charcoal font-hindi mb-4">
              Schools, Panchayats aur NGOs ke Liye
            </h1>
            <p className="text-body-lg text-ink font-hindi max-w-2xl leading-relaxed">
              Jahan internet bilkul nahi hai, wahan bhi har bacche tak STEM shiksha pahunchane ke liye hamare offline hardware aur software solutions.
            </p>
          </div>
        </section>

        {/* 2 Main Solutions: Teacher Sahayak + Offline Kiosk */}
        <section className="section-wrapper py-section">
          <div className="content-container text-left">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {/* Solution 1 */}
              <div className="bg-cream border-2 border-charcoal rounded-panel p-8 shadow-hard-lg flex flex-col justify-between">
                <div>
                  <span className="badge bg-career-eng/15 text-career-eng border-career-eng/40 text-xs font-bold mb-4">
                    For Teachers
                  </span>
                  <h2 className="text-display-sm text-charcoal font-hindi mb-3">
                    Teacher Sahayak Toolkit
                  </h2>
                  <p className="text-body-md text-ink font-hindi leading-relaxed mb-6">
                    Gramin kshetro ke shikshak par dher saara administrative kaam hota hai. Teacher Sahayak mode unka bojh aadha karta hai:
                  </p>
                  <ul className="space-y-3 text-body-sm text-ink font-hindi">
                    <li className="flex items-start gap-2.5">
                      <span className="text-leaf font-bold">✓</span>
                      <span>Blackboard par banane ke liye ready STEM diagrams & formulas</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-leaf font-bold">✓</span>
                      <span>Bina internet ke chalne wale offline classroom simulations</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-leaf font-bold">✓</span>
                      <span>1-click monthly student performance report PDF for education officers</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Solution 2 */}
              <div className="bg-cream border-2 border-charcoal rounded-panel p-8 shadow-hard-lg flex flex-col justify-between">
                <div>
                  <span className="badge bg-sky/15 text-sky border-sky/40 text-xs font-bold mb-4">
                    For Zero-Internet Areas
                  </span>
                  <h2 className="text-display-sm text-charcoal font-hindi mb-3">
                    Offline Kiosk Micro-Server Pack
                  </h2>
                  <p className="text-body-md text-ink font-hindi leading-relaxed mb-6">
                    Ek Raspberry Pi ya purane Android tablet par poora Mentorix server chal sakta hai:
                  </p>
                  <ul className="space-y-3 text-body-sm text-ink font-hindi">
                    <li className="flex items-start gap-2.5">
                      <span className="text-leaf font-bold">✓</span>
                      <span>Local WiFi hotspot se 30-40 phones ek saath connect ho sakte hain</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-leaf font-bold">✓</span>
                      <span>Solar battery ya power bank par 8 ghante lagatar chalne yogya</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-leaf font-bold">✓</span>
                      <span>Hafte mein ek baar volunteer ke pen-drive se naye tests update hote hain</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Partnership Form Card */}
            <div className="bg-parchment border-2 border-charcoal rounded-panel p-8 sm:p-12 shadow-hard-xl max-w-2xl mx-auto">
              <h3 className="text-display-sm text-charcoal font-hindi mb-2">
                Hamare sath pilot shuru karein
              </h3>
              <p className="text-body-sm text-stone font-hindi mb-6">
                Apne school ya sanstha ki jankari likhein, hamari team aapse sampark karegi:
              </p>
              <SchoolPartnershipForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
