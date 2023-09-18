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
    </div>
  );
};

export default Experience;
