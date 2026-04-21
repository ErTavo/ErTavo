"use client";

import styles from "@/app/contact/contact.module.css";
import ContactCode from "@/components/ContactCode";
import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.heading}>{t('reachOut')}</h3>
        <ContactCode />
      </div>
      <div>
        <h3 className={styles.heading}>{t('fillForm')}</h3>
        <ContactForm />
      </div>
    </div>
  );
}
