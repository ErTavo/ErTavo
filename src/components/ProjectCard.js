"use client";

import styles from "@/styles/ProjectCard.module.css";
import LinkIcon from "@/svg/Linkicon";
import GithubIcon from "@/svg/Githubicon";
import PropTypes from "prop-types";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectCard({ project }) {
  const { lang } = useLanguage();
  const description = lang === 'en'
    ? (project.description_en || project.description)
    : project.description;

  return (
    <div className={styles.card}>
      <div>
        <h3 className={styles.title}>{project.name}</h3>
        <p>{description}</p>
      </div>
      <div className={styles.stats}>
        <div>
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noopener noreferrer">
              <GithubIcon height={20} width={20} className={styles.icon} />
            </a>
          )}
          <a href={project.href} target="_blank" rel="noopener noreferrer">
            <LinkIcon height={20} width={20} className={styles.icon} />
          </a>
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};
