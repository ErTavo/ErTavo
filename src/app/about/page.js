"use client";

import styles from "@/app/about/about.module.css";
import { SKILLS } from "@/constants/skills";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <div className={styles.container}>
      <div className={styles.foreground}>
        <div className={styles.about}>
          <h1 className={styles.title}>{t('aboutHeading')}</h1>
          <p className={styles.text}>
            {t('aboutP1')}
            <br />
            <br />
            {t('aboutP2')}
            <br />
            <br />
            {t('aboutP3')}
          </p>
        </div>
        <div className={styles.skills_banner}>
          <h1 className={styles.title}>{t('skillsHeading')}</h1>
          <div className={styles.skills}>
            {SKILLS.map((skill) => (
              <div key={skill.id} className={styles.skill_card}>
                <Image src={skill.icon} alt={skill.id} height={22} width={22} />
                <p className={styles.skill_name}>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
