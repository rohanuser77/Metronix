"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { MetronixLogo, GlobeLangIcon } from "@/components/icons/MetronixIcons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { locale, setLocale, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t("nav_features"), href: "/features" },
    { label: t("nav_how_it_works"), href: "/how-it-works" },
    { label: t("nav_scholarships"), href: "/scholarships" },
    { label: t("nav_for_schools"), href: "/for-schools" },
    { label: t("nav_about"), href: "/about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-subtle"
          : "bg-white border-b border-slate-200/80"
      }`}
    >
      <div className="content-container section-wrapper h-full flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <MetronixLogo size={32} />
          <span className="font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-brand-600 transition-colors">
            Metronix
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-brand-600 font-semibold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT: LANGUAGE SWITCHER & CTA */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Functional Language Toggle */}
          <div className="flex items-center rounded-lg border border-slate-200 bg-slate-50 p-0.5 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`px-2.5 py-1 rounded-md transition-all ${
                locale === "en"
                  ? "bg-white text-slate-900 shadow-subtle font-bold"
                  : "text-slate-500 hover:text-slate-900"
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLocale("hi")}
              className={`px-2.5 py-1 rounded-md transition-all ${
                locale === "hi"
                  ? "bg-white text-slate-900 shadow-subtle font-bold"
                  : "text-slate-500 hover:text-slate-900"
              }`}
              aria-label="हिंदी में बदलें"
            >
              हिंदी
            </button>
          </div>

          <Link href="/early-access" className="btn-primary text-xs py-2 px-4">
            {t("nav_get_started")}
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Mobile Language Switcher */}
          <div className="flex items-center rounded-md border border-slate-200 bg-slate-50 p-0.5 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`px-2 py-0.5 rounded ${locale === "en" ? "bg-white text-slate-900 font-bold" : "text-slate-500"}`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLocale("hi")}
              className={`px-2 py-0.5 rounded ${locale === "hi" ? "bg-white text-slate-900 font-bold" : "text-slate-500"}`}
            >
              हिंदी
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50"
            aria-label="Toggle navigation menu"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d={menuOpen ? "M4 4l12 12M4 16L16 4" : "M3 6h14M3 12h14M3 18h14"} />
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-5 space-y-3 shadow-card">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm font-medium text-slate-700 py-1.5 hover:text-brand-600"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/early-access"
            onClick={() => setMenuOpen(false)}
            className="btn-primary w-full justify-center mt-3 text-sm py-2.5"
          >
            {t("nav_get_started")}
          </Link>
        </div>
      )}
    </header>
  );
}
