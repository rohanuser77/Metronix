import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { CheckCircleIcon, ArrowRightIcon } from "@/components/icons/MetronixIcons";

export const metadata = {
  title: "Parent Progress Reporting — Metronix",
  description: "Weekly vernacular progress scorecards and audio summaries delivered directly to parents via WhatsApp and SMS without requiring an app installation.",
};

export default function ForParentsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-canvas-subtle pt-20">
        {/* Banner */}
        <section className="section-wrapper py-14 bg-white border-b border-slate-200 text-left">
          <div className="content-container">
            <span className="badge-brand mb-3">Parental Engagement System</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Transparent Academic Progress in Every Family&apos;s Native Language
            </h1>
            <p className="text-base text-slate-600 mt-3 max-w-3xl leading-relaxed">
              Parents should never feel excluded from their child&apos;s educational advancement due to language or literacy barriers. Metronix delivers weekly automated scorecards and audio voice notes directly to standard phones.
            </p>
          </div>
        </section>

        {/* Breakdown */}
        <section className="section-wrapper py-section text-left">
          <div className="content-container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

              <div className="card-modern">
                <span className="text-xs font-bold font-mono text-brand-600 uppercase">
                  Channel 01
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-2 mb-2">
                  Zero Application Burden
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Parents do not need to download or navigate an unfamiliar smartphone application. Reports are delivered directly via standard WhatsApp messages or SMS.
                </p>
              </div>

              <div className="card-modern">
                <span className="text-xs font-bold font-mono text-brand-600 uppercase">
                  Channel 02
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-2 mb-2">
                  Vernacular Audio Summaries
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  For parents who prefer listening over reading, a single tap plays a concise 45-second voice overview in Hindi, Bhojpuri, Marathi, Bengali, or Tamil.
                </p>
              </div>

              <div className="card-modern">
                <span className="text-xs font-bold font-mono text-brand-600 uppercase">
                  Channel 03
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-2 mb-2">
                  Institutional Fee Transparency
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Clear, objective information on subsidized polytechnic courses and government scholarship opportunities to protect families from exploitative private fee structures.
                </p>
              </div>

            </div>

            {/* Simulated Parent WhatsApp Report Preview */}
            <div className="max-w-2xl mx-auto bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-card">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                <span className="text-xs font-bold text-slate-900">
                  Sample Parent Report Dispatch
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  Every Sunday 10:00 AM
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2 leading-relaxed">
                <p className="font-semibold text-slate-900">
                  Weekly Academic Overview: Aarav Sharma (Class 10 - Section B)
                </p>
                <p>
                  Namaste. During the past 7 days, Aarav has completed 3 virtual physics experiments on Electricity and maintained a 5-day daily study streak.
                </p>
                <div className="p-2.5 rounded bg-white border border-slate-200 font-mono text-[11px] space-y-1">
                  <div>Curriculum Topics Mastered: 4 Modules</div>
                  <div>Focus Time Logged: 3 hours 40 minutes</div>
                  <div>Upcoming Target: NMMSS Scholarship Practice Exam</div>
                </div>
                <p className="text-slate-500 text-[11px]">
                  Audio report available in Hindi: [▶ Audio Note: 0:42]
                </p>
              </div>

              <div className="mt-6 flex justify-end">
                <Link href="/early-access" className="btn-primary text-xs py-2 px-4">
                  <span>Register Student Profile</span>
                  <ArrowRightIcon size={14} />
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
