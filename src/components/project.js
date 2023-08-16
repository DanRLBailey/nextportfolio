import styles from "../styles/project.module.scss";
import Button from "./button";
import Image from "next/image";

export default function Project({ name, description, image, link }) {
  return (
    <div className={styles.project}>
      <div className={styles.projectDetails}>
        <h1>
          <span>{name}</span>
        </h1>
        <div className={styles.description}>{description}</div>
        {link && (
          <Button
            link={link}
            text={link.includes("git") ? "View Repository" : "View Demo"}
          ></Button>
        )}
      </div>
      <div className={styles.projectImage}>
        {image && (
          <Image
            className={styles.image}
            src={`/images/${image}`}
            layout="fill"
            alt={`Image depicting a screenshot of ${name}`}
          />
        )}
      </div>
    </div>
  );
}
