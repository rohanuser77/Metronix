import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SchoolPartnershipForm from "@/components/forms/SchoolPartnershipForm";
import { LaptopOfflineIcon, UsersIcon, CheckCircleIcon } from "@/components/icons/MetronixIcons";

export const metadata = {
  title: "For Institutions & Schools — Metronix",
  description: "Deploy offline STEM micro-servers and curriculum-aligned laboratory software in government and rural secondary schools.",
};

export default function ForSchoolsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-canvas-subtle pt-20">
        {/* Banner */}
        <section className="section-wrapper py-14 bg-white border-b border-slate-200 text-left">
          <div className="content-container">
            <span className="badge-brand mb-3">Institutional Infrastructure</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Institutional STEM Deployments for Zero-Internet Regions
            </h1>
            <p className="text-base text-slate-600 mt-3 max-w-3xl leading-relaxed">
              Metronix partners with state school education boards, district administrative collectors, and nonprofit foundations to provide fully offline laboratory software and instructional aids.
            </p>
          </div>
        </section>

        {/* 2 Core Deployment Models */}
        <section className="section-wrapper py-section text-left">
          <div className="content-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              
              {/* Kiosk Pack */}
              <div className="card-modern">
                <div className="w-10 h-10 rounded-lg bg-cyan-soft border border-cyan/20 flex items-center justify-center text-cyan mb-4">
                  <LaptopOfflineIcon size={22} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Metronix Offline Kiosk Micro-Server
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  A standalone plug-and-play microcomputer running on low-power hardware (such as a Raspberry Pi or repurposed Android tablet):
                </p>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon size={14} className="text-emerald shrink-0 mt-0.5" />
                    <span>Emits a local Wi-Fi intranet supporting up to 35 student devices simultaneously</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon size={14} className="text-emerald shrink-0 mt-0.5" />
                    <span>Operates continuously for 8 hours on standard 5V power banks or solar storage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon size={14} className="text-emerald shrink-0 mt-0.5" />
                    <span>Synchronizes assessment metrics asynchronously whenever an instructor visits a town center</span>
                  </li>
                </ul>
              </div>

              {/* Teacher Toolkit */}
              <div className="card-modern">
                <div className="w-10 h-10 rounded-lg bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-600 mb-4">
                  <UsersIcon size={22} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Instructional Teaching Assistant Toolkit
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  Empowering rural educators with curriculum-aligned demonstration templates and automatic administrative reporting:
                </p>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon size={14} className="text-emerald shrink-0 mt-0.5" />
                    <span>Pre-rendered blackboard technical diagrams for complex Physics and Chemistry reactions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon size={14} className="text-emerald shrink-0 mt-0.5" />
                    <span>Automated single-click class mastery PDF exports for Block Education Officers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon size={14} className="text-emerald shrink-0 mt-0.5" />
                    <span>Adaptive question banks organized strictly by learning outcome taxonomy</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Institutional Form */}
            <div className="max-w-2xl mx-auto bg-white border border-slate-200 rounded-2xl p-8 shadow-card">
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Register for an Institutional Pilot
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Complete the inquiry form below to evaluate Metronix hardware packs or curriculum licensing for your educational institution.
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
