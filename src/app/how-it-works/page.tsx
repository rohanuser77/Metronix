"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StudentJourney from "@/components/sections/StudentJourney";
import LiveDoubtSolver from "@/components/sections/LiveDoubtSolver";
import { CheckCircleIcon, ShieldCheckIcon } from "@/components/icons/MetronixIcons";
import { useLanguage } from "@/context/LanguageContext";

export default function HowItWorksPage() {
  const { locale } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-canvas-subtle pt-20">
        {/* Header */}
        <section className="section-wrapper py-14 bg-white border-b border-slate-200 text-left">
          <div className="content-container">
            <span className="badge-brand mb-3">
              {locale === "hi" ? "अध्ययन पद्धति" : "Learning Methodology"}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {locale === "hi"
                ? "विद्यार्थी अध्ययन अनुभव एवं कार्यप्रणाली"
                : "How Students Learn Independently with Metronix"}
            </h1>
            <p className="text-base text-slate-600 mt-3 max-w-3xl leading-relaxed">
              {locale === "hi"
                ? "मेट्रोनिक्स को इस प्रकार डिजाइन किया गया है कि सीमित इंटरनेट कनेक्टिविटी वाले छात्र भी बिना किसी बाधा के उच्च स्तरीय विज्ञान और गणित का अध्ययन कर सकें।"
                : "Designed from first principles to ensure that students with limited or intermittent internet connectivity can master challenging STEM subjects through active simulation and intelligent tutoring."}
            </p>
          </div>
        </section>

        {/* Detailed Student Journey Walkthrough */}
        <StudentJourney />

        {/* Interactive Doubt Solving Demonstration */}
        <section className="section-wrapper py-section bg-canvas-subtle text-left">
          <div className="content-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5 space-y-4">
                <span className="badge-neutral">
                  {locale === "hi" ? "संवादात्मक परीक्षण" : "Live Assistant Demonstration"}
                </span>
                <h2 className="text-2xl font-bold text-slate-900">
                  {locale === "hi"
                    ? "शंका समाधान प्रणाली का प्रत्यक्ष अनुभव"
                    : "Experience the Socratic AI Study Assistant"}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {locale === "hi"
                    ? "मेट्रोनिक्स रटने को हतोत्साहित करता है। जब कोई छात्र प्रश्न पूछता है, तो सहायक उसे वैज्ञानिक सिद्धांतों और व्यावहारिक उदाहरणों के माध्यम से समाधान तक पहुँचाता है।"
                    : "Unlike traditional search engines, Metronix avoids giving unearned final answers. It deconstructs problems into fundamental physical principles, guiding students through Socratic problem-solving."}
                </p>

                <div className="pt-4 space-y-3 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon size={16} className="text-emerald" />
                    <span>{locale === "hi" ? "एनसीईआरटी पाठ्यपुस्तक संदर्भ" : "Indexed to NCERT Secondary Curriculum"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon size={16} className="text-emerald" />
                    <span>{locale === "hi" ? "द्विभाषी क्षमता (अंग्रेजी एवं हिंदी)" : "Bilingual capability (English & Formal Hindi)"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon size={16} className="text-emerald" />
                    <span>{locale === "hi" ? "स्थानीय कैशिंग द्वारा सुरक्षित" : "Cached for immediate offline re-access"}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <LiveDoubtSolver />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
