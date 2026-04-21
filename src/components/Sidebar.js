"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/styles/Sidebar.module.css";
import { pathsTop, pathsBottom } from "@/constants/sidebar";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        {pathsTop.map(({ Icon, path }) => (
          <Link href={path} key={path}>
            <div
              className={`${styles.iconContainer} ${
                pathname === path ? styles.active : ""
              }`}
            >
              <Icon
                fill={
                  pathname === path
                    ? "rgb(225, 228, 232)"
                    : "rgb(106, 115, 125)"
                }
                className={styles.icon}
              />
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.sidebarBottom}>
        {pathsBottom.map(({ Icon, path }) => (
          <div className={styles.iconContainer} key={path}>
            <Link href={path} key={path}>
              <Icon
                fill={
                  pathname === path
                    ? "rgb(225, 228, 232)"
                    : "rgb(106, 115, 125)"
                }
                className={styles.icon}
              />
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
