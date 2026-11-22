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
        // === MENTORIX BRAND COLORS ===
        saffron:    "#F97316",   // Primary brand, CTAs, hero accent
        amber:      "#FBBF24",   // Secondary accent, XP/gamification
        // Neutrals
        charcoal:   "#1C1A17",   // Headings, strong text
        ink:        "#3D3A35",   // Body text
        stone:      "#7C7570",   // Muted, captions
        cream:      "#FAFAF7",   // Page background
        parchment:  "#F3EFE8",   // Card/section backgrounds
        border:     "#E8E2DA",   // Hairline borders
        // Semantic
        leaf:       "#22C55E",   // Success, correct answers, streaks
        sky:        "#0EA5E9",   // Info, links, science
        rose:       "#EF4444",   // Errors, alerts
        // Career path accents (used only in those specific contexts)
        "career-eng":  "#8B5CF6",  // Engineering path badge
        "career-med":  "#14B8A6",  // Medical/Agri path badge
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        hindi: ["Mukta", "system-ui", "sans-serif"],
        mono:  ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        "display-xl": ["4rem",    { lineHeight: "1.05", letterSpacing: "-0.025em", fontWeight: "800" }],
        "display-lg": ["3rem",    { lineHeight: "1.08", letterSpacing: "-0.02em",  fontWeight: "800" }],
        "display-md": ["2.25rem", { lineHeight: "1.1",  letterSpacing: "-0.02em",  fontWeight: "700" }],
        "display-sm": ["1.75rem", { lineHeight: "1.15", letterSpacing: "-0.015em", fontWeight: "700" }],
        "body-lg":    ["1.125rem",{ lineHeight: "1.65" }],
        "body-md":    ["1rem",    { lineHeight: "1.65" }],
        "body-sm":    ["0.875rem",{ lineHeight: "1.6"  }],
        "caption":    ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.08em" }],
      },
      boxShadow: {
        // === HARD EDITORIAL SHADOWS — The Mentorix signature ===
        "hard-sm":   "2px 2px 0px #1C1A17",
        "hard-md":   "4px 4px 0px #1C1A17",
        "hard-lg":   "6px 6px 0px #1C1A17",
        "hard-xl":   "8px 8px 0px #1C1A17",
        // Saffron hover variant (applied on :hover via CSS)
        "hard-saffron-sm": "2px 2px 0px #F97316",
        "hard-saffron-md": "4px 4px 0px #F97316",
        "hard-saffron-lg": "6px 6px 0px #F97316",
        "hard-saffron-xl": "8px 8px 0px #F97316",
        "none": "none",
      },
      borderRadius: {
        "badge":  "4px",   // Sharp badges — authoritative
        "btn":    "8px",   // Buttons — grounded, not pill
        "card":   "12px",  // Standard cards
        "panel":  "16px",  // Large panels
        "frame":  "20px",  // Illustration frames
      },
      spacing: {
        "section":    "80px",   // Standard section vertical padding
        "section-sm": "48px",   // Mobile section padding
        "content":    "1200px", // Max content width
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "card-pop": {
          "0%":   { transform: "translateX(0) translateY(0)", boxShadow: "4px 4px 0px #1C1A17" },
          "100%": { transform: "translateX(-2px) translateY(-2px)", boxShadow: "8px 8px 0px #F97316" },
        },
      },
      animation: {
        marquee:  "marquee 30s linear infinite",
        "fade-up": "fade-up 0.4s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
