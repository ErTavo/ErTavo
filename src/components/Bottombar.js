"use client";

import BellIcon from "@/svg/Bellicon";
import SourceControlIcon from "@/svg/SourceControlicon";
import CheckIcon from "@/svg/Checkicon";
import ErrorIcon from "@/svg/Erroricon";
import WarningIcon from "@/svg/Warningicon";
import styles from "@/styles/Bottombar.module.css";
import TerminalIcon from "@/svg/Terminalicon";
import { useLanguage } from "@/context/LanguageContext";

const Bottombar = () => {
  const { lang, setLang } = useLanguage();

  return (
    <footer className={styles.bottombar}>
      <div className={styles.container}>
        <a
          href="https://github.com/ErTavo/ErTavo"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.section}
        >
          <SourceControlIcon className={styles.icon} />
          <p>main</p>
        </a>
        <div className={styles.section}>
          <ErrorIcon className={styles.icon} />
          <p className={styles.errorText}>0</p>&nbsp;&nbsp;
          <WarningIcon className={styles.icon} />
          <p>0</p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.section}>
          <TerminalIcon className={styles.icon} />
        </div>
        <div className={styles.section}>
          <CheckIcon className={styles.icon} />
          <p>Prettier</p>
        </div>
        <button
          className={styles.section}
          onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
          title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', padding: '0 8px', fontWeight: 600, fontSize: '0.75rem' }}
        >
          {lang === 'es' ? 'ES' : 'EN'}
        </button>
        <div className={styles.section}>
          <BellIcon />
        </div>
      </div>
    </footer>
  );
};

export default Bottombar;
