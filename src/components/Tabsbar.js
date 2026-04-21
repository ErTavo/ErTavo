import Tab from "./Tab";
import styles from "@/styles/Tabsbar.module.css";
import { ROUTES } from "@/constants/routes";
import { EXTS_FILES } from "@/constants/exts";

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      {ROUTES.map(({ path, name, ext }) => (
        <Tab key={path} path={path} filename={`${name}.${ext}`} icon={EXTS_FILES[ext].icon} />
      ))}
    </div>
  );
};

export default Tabsbar;
