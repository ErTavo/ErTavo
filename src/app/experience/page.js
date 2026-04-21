"use client";

import styles from "@/app/experience/experience.module.css";
import { EXPERIENCE } from "@/constants/experience";
import ExperienceCard from "@/components/ExperienceCard";
import { useLanguage } from "@/context/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <div className={styles.container}>
      <div className={styles.foreground}>
        <h1 className={styles.title}>{t('experienceHeading')}</h1>
        <div className={styles.cards}>
          {[...EXPERIENCE].reverse().map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </div>
  );
}
