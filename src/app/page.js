"use client";

import styles from "@/app/home.module.css";
import Link from "next/link";
import Illustration from "@/components/Illustration";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className={styles.container}>
      <div className={styles.foreground}>
        <p className={styles.greeting}>{t('greeting')}</p>
        <h1 className={styles.name}>{"I'm Gustavo Gutiérrez"}</h1>
        <h3 className={styles.bio}>{t('bio')}</h3>
        <div className={styles.buttons}>
          <a
            href="https://www.linkedin.com/in/gustavogutierrez01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={styles.button}>{t('btnLinkedin')}</button>
          </a>
          <Link href="/contact">
            <button className={styles.outlined}>{t('btnContact')}</button>
          </Link>
        </div>
      </div>
      <Illustration className={styles.illustration} />
    </div>
  );
}
