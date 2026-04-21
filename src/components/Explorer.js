"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from 'react';
import { ROUTES } from "@/constants/routes"
import { EXTS_FILES } from "@/constants/exts"
import styles from "@/styles/Explorer.module.css"
import ChevronRight from "@/svg/Chevronrigth";

const Explorer = () => {
  const [portfolioOpen, setPortfolioOpen] = useState(true)
  const pathname = usePathname();

  return (
    <div className={styles.explorer}>
      <p className={styles.title}>
        Explorer
      </p>
      <div>
        <input
          type="checkbox"
          className={styles.checkbox}
          id="portfolio-checkbox"
          checked={portfolioOpen}
          onChange={() => setPortfolioOpen(!portfolioOpen)}
        />
        <label htmlFor="portfolio-checkbox" className={styles.heading}>
          <ChevronRight
            className={styles.chevron}
            style={portfolioOpen ? { transform: 'rotate(90deg)' } : {}}
          />
          Portfolio
        </label>
        <div
          className={styles.files}
          style={portfolioOpen ? { display: 'block' } : { display: 'none' }}
        >
          {ROUTES.map(({path, name, ext}) => (
            <Link href={path} key={path}>
              <div className={`${styles.file} ${
                pathname === path ? styles.activeFile : ""
              }`}>
                <Image
                  src={EXTS_FILES[ext].icon}
                  alt={name}
                  height={18}
                  width={18}
                />{' '}
                <span className={styles.fileName}>{`${name}.${ext}`}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Explorer;