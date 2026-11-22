"use client";
import { useLanguage } from "@/context/LanguageContext";
import {
  BookOpenIcon,
  AtomLabIcon,
  ChatBotIcon,
  AcademicCapIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from "@/components/icons/MetronixIcons";
import Link from "next/link";

export default function StudentJourney() {
  const { t, locale } = useLanguage();

  const journeySteps = [
    {
      num: "01",
      icon: <BookOpenIcon size={24} className="text-brand-600" />,
      title: t("step1_title"),
      desc: t("step1_desc"),
      highlight: locale === "hi" ? "0 MB डेटा उपयोग" : "0 MB Data During Study",
    },
    {
      num: "02",
      icon: <AtomLabIcon size={24} className="text-cyan" />,
      title: t("step2_title"),
      desc: t("step2_desc"),
      highlight: locale === "hi" ? "50+ संवादात्मक प्रयोग" : "50+ Interactive Simulations",
    },
    {
      num: "03",
      icon: <ChatBotIcon size={24} className="text-emerald" />,
      title: t("step3_title"),
      desc: t("step3_desc"),
      highlight: locale === "hi" ? "24/7 तत्काल स्पष्टीकरण" : "24/7 Instant Clarification",
    },
    {
      num: "04",
      icon: <AcademicCapIcon size={24} className="text-brand-700" />,
      title: t("step4_title"),
      desc: t("step4_desc"),
      highlight: locale === "hi" ? "₹12,000–₹50,000 अनुदान मार्ग" : "₹12,000–₹50,000 Grant Match",
    },
  ];

  return (
    <section className="section-wrapper py-section bg-white border-y border-slate-200">
      <div className="content-container text-left">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="badge-brand mb-3">
            {locale === "hi" ? "विद्यार्थी अध्ययन अनुभव" : "Student Workflow"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            {t("student_journey_title")}
          </h2>
          <p className="text-base text-slate-600 mt-2">
            {t("student_journey_sub")}
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
            <span className="w-2 h-2 rounded-full bg-brand-600" />
            <span>{t("student_journey_example")}</span>
          </div>
        </div>

        {/* 4 Steps Timeline / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {journeySteps.map((step, idx) => (
            <div
              key={idx}
              className="card-modern flex flex-col justify-between relative bg-canvas-subtle hover:bg-white border-slate-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-subtle">
                    {step.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    STEP {step.num}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-700 flex items-center gap-1.5">
                  <CheckCircleIcon size={14} className="text-emerald" />
                  {step.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Deep Dive Callout Link */}
        <div className="mt-10 p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-slate-900">
              {locale === "hi"
                ? "क्या आप पाठ्यक्रम के अनुसार पूरा विस्तृत विवरण देखना चाहते हैं?"
                : "Looking for detailed syllabus mapping across State and CBSE boards?"}
            </p>
            <p className="text-xs text-slate-500 mt-0.5">
              {locale === "hi"
                ? "कक्षा 6 से 12 तक विज्ञान एवं गणित के 50 से अधिक विषय संकलित हैं।"
                : "Covers Class 6 through 12 Science, Mathematics, Physics, Chemistry, and Agriculture."}
            </p>
          </div>
          <Link href="/features" className="btn-secondary text-xs shrink-0">
            <span>{locale === "hi" ? "सभी विषय देखें" : "View Curriculum Topics"}</span>
            <ArrowRightIcon size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
