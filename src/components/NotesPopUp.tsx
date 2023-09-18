import { FunctionComponent } from "react";
import styles from "./NotesPopUp.module.css";

type NotesPopUpType = {
  onClose?: () => void;
};

const NotesPopUp: FunctionComponent<NotesPopUpType> = ({ onClose }) => {
  return (
    <div className={styles.notesPopup}>
      <div className={styles.popup} />
      <input className={styles.notes} placeholder="Note header" type="text" />
      <input
        className={styles.description}
        placeholder="Description"
        type="text"
      />
      <div className={styles.confirmExperienceButton} onClick={onClose}>
        <div className={styles.confirm}>Confirm</div>
      </div>
      <button className={styles.cancelExperienceButton} onClick={onClose}>
        <div className={styles.cancel}>Cancel</div>
      </button>
    </div>
  );
};

export default NotesPopUp;
