"use client";

import { createContext, useContext, useState, useEffect } from 'react';
import translations from '@/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState('es');

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-lang');
    if (saved === 'en' || saved === 'es') setLangState(saved);
  }, []);

  const setLang = (l) => {
    setLangState(l);
    localStorage.setItem('portfolio-lang', l);
  };

  const t = (key) => translations[lang]?.[key] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
