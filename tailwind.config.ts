import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // === METRONIX GLOBAL EDUCATIONAL PALETTE ===
        // Primary brand & interactive action (Trust Blue & Deep Navy)
        brand: {
          50:  "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          500: "#3B82F6",
          600: "#2563EB", // Primary CTA Blue
          700: "#1D4ED8", // Hover Blue
          800: "#1E40AF",
          900: "#1E3A8A",
          950: "#0F254B", // Deep Academic Navy
        },
        navy: {
          DEFAULT: "#0A2540",
          deep:    "#07172A",
          surface: "#0F2744",
        },
        // Mastery / Verified STEM Success (Emerald & Teal)
        emerald: {
          DEFAULT: "#059669",
          soft:    "#ECFDF5",
          border:  "#A7F3D0",
        },
        cyan: {
          DEFAULT: "#0284C7",
          soft:    "#F0F9FF",
        },
        // Surfaces & Backgrounds (Soft, low-fatigue neutrals)
        canvas: {
          DEFAULT: "#FFFFFF",
          subtle:  "#F8FAFC", // Main soft page background
          elevated:"#F1F5F9", // Card fill
          border:  "#E2E8F0", // Hairline clean border
        },
        // High-contrast slate typography
        slate: {
          950: "#020617",
          900: "#0F172A", // Primary Headings
          800: "#1E293B", // Strong Text
          700: "#334155", // Main Body Text
          600: "#475569",
          500: "#64748B", // Muted / Captions
          400: "#94A3B8",
          300: "#CBD5E1",
          200: "#E2E8F0",
          100: "#F1F5F9",
          50:  "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        hindi: ["Mukta", "system-ui", "sans-serif"],
        mono:  ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        "subtle":   "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        "card":     "0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px -1px rgba(0, 0, 0, 0.08)",
        "card-hover":"0 10px 15px -3px rgba(15, 37, 75, 0.08), 0 4px 6px -4px rgba(15, 37, 75, 0.06)",
        "elevated": "0 20px 25px -5px rgba(15, 37, 75, 0.1), 0 8px 10px -6px rgba(15, 37, 75, 0.06)",
      },
      borderRadius: {
        "sm": "6px",
        "md": "8px",
        "lg": "12px",
        "xl": "16px",
        "2xl": "20px",
      },
      spacing: {
        "section": "72px",
        "section-sm": "40px",
      },
    },
  },
  plugins: [],
};

export default config;
