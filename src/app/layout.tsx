import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://metronix.edu"),
  title: "Metronix — Offline-First STEM Learning Platform",
  description: "Curriculum-aligned virtual science labs, an intelligent AI study assistant, and direct scholarship discovery for Class 6–12 students. Works 100% offline.",
  keywords: ["STEM learning", "virtual labs", "offline education", "NCERT secondary school", "scholarship finder", "AI study assistant"],
  openGraph: {
    title: "Metronix — Offline-First STEM Learning Platform",
    description: "Quality STEM education, virtual labs, and AI mentorship engineered for every student.",
    url: "https://metronix.edu",
    siteName: "Metronix",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Mukta:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="bg-canvas-subtle text-slate-700 antialiased min-h-screen flex flex-col">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
