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
    </div>
  );
};

export default Note;
