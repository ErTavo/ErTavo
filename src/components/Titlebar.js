import Image from "next/image";
import styles from "@/styles/Titlebar.module.css";
import { OPTIONS, TITLE, BUTTONS } from "@/constants/titlebar";

const Titlebar = () => {
  return (
    <section className={styles.titlebar}>
      <Image 
        src="https://luisarana631.github.io/Profile-page/vscode_icon.svg"
        alt="VSCode Icon"
        width={15}
        height={15}
        className={styles.icon}
      />
      <div className={styles.items}>
        {OPTIONS.map((option,) => (
          <p key={`option_titlebar_${option}`}>
            {option}
          </p>
        ))}
      </div>
      <p className={styles.title}>{TITLE}</p>
      <div className={styles.windowButtons}>
        {BUTTONS.map((button) => (
          <span key={`button_titlebar_${button}`} className={styles[button]}></span>
        ))}
      </div>
    </section>
  )
}

export default Titlebar;