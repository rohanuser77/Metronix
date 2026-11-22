import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mentorix.in"),
  title: "Mentorix — Woh rah jo sirf tere liye bani hai",
  description: "Class 6–12 ke rural students ke liye offline-first, vernacular, gamified STEM learning. AI mentor, virtual labs, aur scholarship matcher — sab Hindi mein.",
  keywords: ["rural education", "STEM India", "scholarship finder", "offline learning", "Hindi education app", "Class 6-12", "NCERT hindi"],
  openGraph: {
    title: "Mentorix — Gaon ka Beta, IIT ki Taiyari",
    description: "Rural India ke liye offline-first AI education platform. Virtual pocket labs, 24/7 AI dost, zero-cost college.",
    url: "https://mentorix.in",
    siteName: "Mentorix",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Mentorix" }],
    locale: "hi_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mentorix — Rural India STEM Platform",
    description: "Offline-first AI education for Class 6–12 students",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Mukta:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="bg-cream text-ink antialiased selection:bg-saffron/20 selection:text-charcoal min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
