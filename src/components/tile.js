import styles from "../styles/tile.module.scss";

export default function Tile({ header, children }) {
  return (
    <div className={styles.tile}>
      <h1>
        <span>{header}</span>
      </h1>
      {children}
    </div>
  );
}
