"use client";

import styles from '@/app/projects/projects.module.css';
import PROJECTS from '@/constants/projects';
import ProjectCard from '@/components/ProjectCard';
import { useLanguage } from '@/context/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();

  return (
    <>
      <div className={styles.user}>
        <div>
          <h3>{t('projectsUser')}</h3>
        </div>
      </div>
      <div className={styles.container}>
        {PROJECTS.map((group) => (
          <div key={group.type}>
            <h4>{t('projectsType')}</h4>
            <div className={styles.cards}>
              {group.items.map((item) => (
                <ProjectCard key={item.name} project={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
