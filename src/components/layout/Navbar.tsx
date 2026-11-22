"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Scholarships", href: "/scholarships" },
  { label: "For Parents", href: "/for-parents" },
  { label: "For Schools", href: "/for-schools" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-200
        ${scrolled ? "bg-cream border-b border-border shadow-hard-sm" : "bg-cream/95 border-b border-transparent"}`}
    >
      <div className="content-container section-wrapper h-full flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group focus-visible:outline-saffron">
          <svg width="140" height="32" viewBox="0 0 140 32" fill="none" aria-label="Mentorix Logo">
            <text x="0" y="24" fontFamily="Plus Jakarta Sans" fontWeight="800" fontSize="22" fill="#1C1A17">
              Mento
            </text>
            {/* The saffron dot accent */}
            <circle cx="96" cy="8" r="4" fill="#F97316" />
            <text x="88" y="24" fontFamily="Plus Jakarta Sans" fontWeight="800" fontSize="22" fill="#1C1A17">
              r
            </text>
            <text x="97" y="24" fontFamily="Plus Jakarta Sans" fontWeight="800" fontSize="22" fill="#1C1A17">
              ix
            </text>
          </svg>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-body-sm font-medium transition-colors duration-150 relative py-1
                  ${isActive ? "text-saffron font-bold" : "text-ink hover:text-charcoal"}
                  after:absolute after:bottom-0 after:left-0 after:h-0.5 
                  ${isActive ? "after:w-full after:bg-saffron" : "after:w-0 after:bg-saffron hover:after:w-full after:transition-all"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA & Language Badge */}
        <div className="hidden md:flex items-center gap-4">
          <span className="badge bg-parchment text-ink border-border text-xs px-2.5 py-1 font-hindi">
            हिंदी + EN
          </span>
          <Link href="/early-access" className="btn-primary text-sm py-2 px-5">
            Join Waitlist →
          </Link>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden p-2 rounded-btn border-2 border-charcoal bg-cream shadow-hard-sm"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`block w-5 h-0.5 bg-charcoal mb-1.5 transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-charcoal mb-1.5 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-charcoal transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* MOBILE DRAWER */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-cream border-b-2 border-charcoal 
                        shadow-hard-md py-6 px-6 flex flex-col gap-3 animate-fade-up">
          <div className="flex items-center justify-between pb-2 border-b border-border">
            <span className="text-caption text-stone uppercase tracking-wider">Navigation</span>
            <span className="badge bg-parchment text-ink border-border text-xs font-hindi">हिंदी + EN</span>
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-body-md font-medium py-2 border-b border-border transition-colors
                ${pathname === link.href ? "text-saffron font-bold" : "text-ink"}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/early-access"
            className="btn-primary mt-2 justify-center py-3"
            onClick={() => setMenuOpen(false)}
          >
            Join Waitlist →
          </Link>
        </div>
      )}
    </header>
  );
}
