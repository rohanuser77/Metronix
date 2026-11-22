import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { CheckCircleIcon, ArrowRightIcon } from "@/components/icons/MetronixIcons";

export const metadata = {
  title: "About & Mission — Metronix",
  description: "Metronix is committed to delivering accessible, rigorous, and offline-capable STEM learning for secondary school students across India.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-canvas-subtle pt-20">
        {/* Banner */}
        <section className="section-wrapper py-14 bg-white border-b border-slate-200 text-left">
          <div className="content-container">
            <span className="badge-brand mb-3">Our Core Mission</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Bridging the STEM Divide Through Rigorous Engineering
            </h1>
            <p className="text-base text-slate-600 mt-3 max-w-3xl leading-relaxed">
              Every student possesses the innate intellectual capacity to excel in science and mathematics. Our purpose is to eliminate infrastructure, bandwidth, and economic constraints that hinder that potential.
            </p>
          </div>
        </section>

        {/* Core Principles */}
        <section className="section-wrapper py-section text-left">
          <div className="content-container max-w-4xl space-y-10">
            
            <div className="card-modern">
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                The Structural Educational Challenge
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Conventional digital education platforms assume high-speed fiber internet, multi-gigabyte daily allowances, and expensive flagship devices. Over 70% of secondary students in rural and semi-urban India face intermittent 2G/3G connectivity, shared family phones, and schools without physical laboratory apparatus.
              </p>
            </div>

            <div className="card-modern space-y-6">
              <h2 className="text-xl font-bold text-slate-900">
                Foundational Engineering Principles
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">
                    1. 100% Offline-First Architecture
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Learning should never halt when network connectivity drops. Every simulation, mathematical formula model, and practice problem operates reliably from local on-device SQLite caching.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">
                    2. Socratic Rather than Rote Tutoring
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    True scientific understanding requires inquiry. Our AI study companion leads students through conceptual deduction and contextual physical analogies rather than outputting immediate homework answers.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">
                    3. Direct Pathways to Higher Education
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Academic mastery must translate into tangible career opportunities. We actively bridge students to central, state, and foundation grant schemes so financial constraints do not preclude higher secondary completion.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="p-8 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h3 className="text-lg font-bold text-white">
                  Join the Metronix Educational Movement
                </h3>
                <p className="text-xs text-slate-300 mt-1 max-w-md">
                  Whether you are a student, educator, or institutional partner, explore our deployment resources today.
                </p>
              </div>
              <Link href="/early-access" className="btn-primary bg-brand-500 hover:bg-brand-600 whitespace-nowrap text-xs py-3 px-5">
                <span>Enroll Student Profile</span>
                <ArrowRightIcon size={14} />
              </Link>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
