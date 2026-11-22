import Link from "next/link";
import { MetronixLogo } from "@/components/icons/MetronixIcons";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-200">
      <div className="content-container section-wrapper py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start text-left">
          
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <MetronixLogo size={32} />
              <span className="font-extrabold text-xl tracking-tight text-slate-900">
                Metronix
              </span>
            </Link>
            <p className="text-sm text-slate-600 max-w-md leading-relaxed">
              An offline-first, vernacular STEM learning platform built for secondary school students. Engineered for low-bandwidth environments, NCERT curriculum alignment, and direct scholarship discovery.
            </p>
            <div className="text-xs text-slate-500 font-mono">
              Architecture: Offline-Synchronized SQLite Engine · Zero Data Runtime
            </div>
          </div>

          {/* Academic Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Learning System
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/features" className="hover:text-brand-600 transition-colors">
                  Curriculum & Labs
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-brand-600 transition-colors">
                  Student Workflow
                </Link>
              </li>
              <li>
                <Link href="/scholarships" className="hover:text-brand-600 transition-colors">
                  Scholarship Matcher
                </Link>
              </li>
              <li>
                <Link href="/early-access" className="hover:text-brand-600 transition-colors">
                  Student Portal Access
                </Link>
              </li>
            </ul>
          </div>

          {/* Institutional Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Institutional & Research
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/for-schools" className="hover:text-brand-600 transition-colors">
                  Schools & NGO Programs
                </Link>
              </li>
              <li>
                <Link href="/for-parents" className="hover:text-brand-600 transition-colors">
                  Parent Progress Reports
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-600 transition-colors">
                  Mission & Manifesto
                </Link>
              </li>
              <li>
                <span className="text-slate-500">contact@metronix.edu</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Metronix Education Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-slate-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/about" className="hover:text-slate-900 transition-colors">
              Terms of Service
            </Link>
            <Link href="/about" className="hover:text-slate-900 transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
