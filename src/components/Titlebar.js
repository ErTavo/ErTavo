import styles from "@/styles/Titlebar.module.css";
import { OPTIONS, TITLE, BUTTONS } from "@/constants/titlebar";
import VSCodeIcon from "@/svg/VSCodeicon";

const Titlebar = () => {
  return (
    <section className={styles.titlebar}>
      <VSCodeIcon className={styles.icon} />
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