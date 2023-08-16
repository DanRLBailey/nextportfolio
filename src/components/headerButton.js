import styles from "../styles/headerButton.module.scss";

export default function HeaderButton({ link, text }) {
  return (
    <a
      className={styles.headerButton}
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <span className={styles.headerButtonText}>{text}</span>
    </a>
  );
}
