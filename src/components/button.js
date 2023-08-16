import styles from "../styles/button.module.scss";

export default function Button({ link, text, id, blank }) {
  return (
    <a
      className={styles.button}
      id={id}
      href={link}
      target={blank ? "_blank" : ""}
      rel="noreferrer"
    >
      <span class={styles.buttonText}>{text}</span>
    </a>
  );
}
