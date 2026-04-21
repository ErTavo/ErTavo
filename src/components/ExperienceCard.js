"use client";

import styles from '@/styles/ExperienceCard.module.css';
import PropTypes from "prop-types";
import { useLanguage } from '@/context/LanguageContext';

export default function ExperienceCard({ experience }) {
  const { lang } = useLanguage();
  const isEn = lang === 'en';

  const name = isEn ? (experience.name_en || experience.name) : experience.name;
  const description = isEn ? (experience.description_en || experience.description) : experience.description;
  const duration = isEn ? (experience.duration_en || experience.duration) : experience.duration;
  const time = isEn ? (experience.time_en || experience.time) : experience.time;

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h4 className={styles.title}>{name}</h4>
        <hr/>
        <p className={styles.description}>{description}</p>
        <hr/>
        <strong><p className={styles.place}>{experience.place}</p></strong>
        <p className={styles.time}>{time} | <strong>{duration}</strong></p>
        <hr/>
        <div className={styles.tags}>
          {experience.tools.map((tool) => (
            <span key={tool.id} className={tool.className}>
              {tool.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

ExperienceCard.propTypes = {
  experience: PropTypes.object.isRequired,
};
