"use client";
import { useLanguage } from "@/context/LanguageContext";
import {
  ShieldCheckIcon,
  BookOpenIcon,
  AcademicCapIcon,
  ArrowRightIcon,
} from "@/components/icons/MetronixIcons";
import LiveDoubtSolver from "@/components/sections/LiveDoubtSolver";
import Link from "next/link";

export default function HeroSection() {
  const { t, locale } = useLanguage();

  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-canvas-subtle border-b border-slate-200 overflow-hidden">
      {/* Subtle modern structural grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(#0A2540 1px, transparent 1px),
            linear-gradient(90deg, #0A2540 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="content-container section-wrapper relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          
          {/* Left Column: Focused Editorial Pitch */}
          <div className="lg:col-span-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-xs font-semibold text-brand-700 mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-600" />
              <span>{t("hero_badge")}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              <span>{t("hero_title_1")}</span>{" "}
              <span className="text-brand-600 block mt-1">{t("hero_title_accent")}</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              {t("hero_subtitle")}
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/early-access" className="btn-primary py-3 px-6 text-sm">
                <span>{t("hero_cta_try_ai")}</span>
                <ArrowRightIcon size={16} />
              </Link>
              <Link href="/features" className="btn-secondary py-3 px-6 text-sm">
                <span>{t("hero_cta_explore_labs")}</span>
              </Link>
            </div>

            {/* Trust points */}
            <div className="mt-10 pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-medium text-slate-600">
              <div className="flex items-center gap-2">
                <ShieldCheckIcon size={16} className="text-emerald shrink-0" />
                <span>{t("hero_trust_offline")}</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpenIcon size={16} className="text-brand-600 shrink-0" />
                <span>{t("hero_trust_ncert")}</span>
              </div>
              <div className="flex items-center gap-2">
                <AcademicCapIcon size={16} className="text-cyan shrink-0" />
                <span>{t("hero_trust_scholarships")}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Study Assistant Tool Right on Home Screen */}
          <div className="lg:col-span-6 w-full">
            <LiveDoubtSolver />
          </div>

        </div>
      </div>
    </section>
  );
}
