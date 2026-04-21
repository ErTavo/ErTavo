"use client";

import { useLanguage } from "@/context/LanguageContext";
import styles from "@/styles/Settings.module.css";

export default function Settings() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t('settingsHeading')}</h1>
      <div className={styles.section}>
        <div className={styles.option}>
          <div>
            <p className={styles.label}>{t('languageLabel')}</p>
            <p className={styles.desc}>{t('languageDesc')}</p>
          </div>
          <div className={styles.toggle}>
            <button
              className={lang === 'es' ? styles.active : styles.inactive}
              onClick={() => setLang('es')}
            >
              ES
            </button>
            <button
              className={lang === 'en' ? styles.active : styles.inactive}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
