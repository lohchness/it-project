import { FunctionComponent } from "react";
import styles from "./Note.module.css";

type NoteType = {
  description?: string;
  date?: string;
};

const Note: FunctionComponent<NoteType> = ({ description, date }) => {
  return (
    <div className={styles.note1}>
      <div className={styles.text1}>
        <ul className={styles.discussedHowTo}>{description}</ul>
      </div>
      <b className={styles.date1}>{date}</b>
      <button className={styles.delete}>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
        <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
      </button>
    </div>
  );
};

export default Note;
