"use client";
import { useLanguage } from "@/context/LanguageContext";
import {
  AtomLabIcon,
  ChatBotIcon,
  AcademicCapIcon,
  LaptopOfflineIcon,
  ArrowRightIcon,
} from "@/components/icons/MetronixIcons";
import Link from "next/link";

export default function CoreCapabilities() {
  const { t, locale } = useLanguage();

  const capabilities = [
    {
      icon: <AtomLabIcon size={26} className="text-cyan" />,
      title: t("cap_labs_title"),
      desc: t("cap_labs_desc"),
      href: "/features",
      cta: locale === "hi" ? "प्रयोगशाला विवरण" : "Explore Simulations",
    },
    {
      icon: <ChatBotIcon size={26} className="text-brand-600" />,
      title: t("cap_ai_title"),
      desc: t("cap_ai_desc"),
      href: "/how-it-works",
      cta: locale === "hi" ? "एआई कार्यप्रणाली" : "How the Tutor Works",
    },
    {
      icon: <AcademicCapIcon size={26} className="text-emerald" />,
      title: t("cap_scholarship_title"),
      desc: t("cap_scholarship_desc"),
      href: "/scholarships",
      cta: locale === "hi" ? "छात्रवृत्ति खोजें" : "Search Grants",
    },
    {
      icon: <LaptopOfflineIcon size={26} className="text-slate-700" />,
      title: t("cap_offline_title"),
      desc: t("cap_offline_desc"),
      href: "/for-schools",
      cta: locale === "hi" ? "ऑफलाइन इंफ्रास्ट्रक्चर" : "Institutional Setup",
    },
  ];

  return (
    <section className="section-wrapper py-section bg-canvas-subtle">
      <div className="content-container text-left">
        <div className="max-w-3xl mb-12">
          <span className="badge-neutral mb-3">
            {locale === "hi" ? "प्लेटफॉर्म संरचना" : "Core Architecture"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            {t("capabilities_title")}
          </h2>
          <p className="text-base text-slate-600 mt-2">
            {t("capabilities_sub")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="card-modern flex flex-col justify-between hover:border-brand-300"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-5">
                  {cap.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {cap.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {cap.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={cap.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 hover:text-brand-700 transition-colors"
                >
                  <span>{cap.cta}</span>
                  <ArrowRightIcon size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
