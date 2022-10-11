import styles from "../styles/project.module.scss";
import Button from "./button";
import Image from "next/image";

export default function Project({
  name,
  description,
  image,
  staticImage,
  link,
}) {
  return (
    <div className={styles.project}>
      <div className={styles.projectDetails}>
        <h1>
          <span>{name}</span>
        </h1>
        <div className={styles.description}>{description}</div>
        {link && <Button link={link} text="View More"></Button>}
      </div>
      <div className={styles.projectImage}>
        {image && (
          <Image
            className={styles.image}
            src={`/images/${image}`}
            layout="fill"
          />
        )}
        {staticImage && (
          <Image
            className={styles.staticImage}
            src={`/images/${staticImage}`}
            layout="fill"
          />
        )}
      </div>
    </div>
  );
}
