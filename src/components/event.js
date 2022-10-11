import styles from "../styles/event.module.scss";

export default function Event({ location, title, subtitle, date }) {
  return (
    <div className={styles.event}>
      <h1>{title}</h1>
      <h2>{location}</h2>
      {subtitle && <h3>{subtitle}</h3>}
      <span>{date}</span>
    </div>
  );
}
