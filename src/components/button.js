import styles from "../styles/button.module.scss";

export default function Button({ link, text, id }) {
  return (
    <a className={styles.button} id={id} href={link}>
      <span class={styles.buttonText}>{text}</span>
    </a>
  );
}
