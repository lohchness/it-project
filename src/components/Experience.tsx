import { FunctionComponent } from "react";
import styles from "./Experience.module.css";

type ExperienceType = {
  description?: string;
  header?: string;
};

const Experience: FunctionComponent<ExperienceType> = ({
  description,
  header,
}) => {
  return (
    <div className={styles.experience1}>
      <div className={styles.text1}>
        <ul className={styles.workedHereFor}>{description}</ul>
      </div>
      <b className={styles.header1}>{header}</b>
      <button className={styles.delete}>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
        <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
      </button>
    </div>
  );
};

export default Experience;
