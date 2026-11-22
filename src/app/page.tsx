"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import StudentJourney from "@/components/sections/StudentJourney";
import CoreCapabilities from "@/components/sections/CoreCapabilities";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons/MetronixIcons";
import { useLanguage } from "@/context/LanguageContext";

export default function HomePage() {
  const { t, locale } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* 1. Hero with immediate AI Study Assistant right on screen */}
        <HeroSection />

        {/* 2. Concrete Student Experience: "What a student can do on Metronix" (Aarav, Class 10) */}
        <StudentJourney />

        {/* 3. Core Capabilities: 4 Clean Pillars directing to dedicated pages */}
        <CoreCapabilities />

        {/* 4. Streamlined, professional call to action */}
        <section className="section-wrapper py-16 bg-navy text-white text-left">
          <div className="content-container">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-brand-200 border border-white/20 mb-4">
                {locale === "hi" ? "निशुल्क अर्ली एक्सेस" : "Verified STEM Platform"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {t("cta_banner_title")}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
                {t("cta_banner_sub")}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/early-access" className="btn-primary bg-brand-500 hover:bg-brand-600 py-3 px-6 text-sm">
                  <span>{t("cta_banner_button")}</span>
                  <ArrowRightIcon size={16} />
                </Link>
                <Link href="/for-schools" className="btn-secondary py-3 px-6 text-sm bg-transparent border-white/30 text-white hover:bg-white/10">
                  <span>{locale === "hi" ? "संस्थानों एवं शिक्षकों के लिए" : "For Schools & Institutions"}</span>
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
