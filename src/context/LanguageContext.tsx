"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Locale, TranslationKey } from "@/lib/translations";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "en",
  setLocale: () => {},
  t: (key: TranslationKey) => translations.en[key] || key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const saved = localStorage.getItem("metronix_locale") as Locale | null;
    if (saved === "en" || saved === "hi") {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("metronix_locale", newLocale);
  };

  const t = (key: TranslationKey): string => {
    const activeDict = translations[locale];
    if (activeDict && activeDict[key]) {
      return activeDict[key];
    }
    return translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
