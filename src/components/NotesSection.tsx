import { FunctionComponent, useState, useCallback } from "react";
import NotesPopUp from "./NotesPopUp";
import PortalPopup from "./PortalPopup";
import Note from "./Note 1";
import styles from "./NotesSection.module.css";

const NotesSection: FunctionComponent = () => {
  const [isNotesPopUpOpen, setNotesPopUpOpen] = useState(false);

  const openNotesPopUp = useCallback(() => {
    setNotesPopUpOpen(true);
  }, []);

  const closeNotesPopUp = useCallback(() => {
    setNotesPopUpOpen(false);
  }, []);

  return (
    <>
      <div className={styles.notesSection}>
        <img className={styles.notesSectionChild} alt="" src="/undefined.png" />
        <div className={styles.header}>
          <div className={styles.headerBackground} />
          <b className={styles.notes}>Notes</b>
          <div className={styles.addNoteButton} onClick={openNotesPopUp}>
            <img className={styles.groupIcon} alt="" src="/undefined1.png" />
          </div>
        </div>
        <Note
          description="Discussed how to ................................., suggested to .................... about the thing. "
          date="Aug 2nd"
        />
        <div className={styles.note2}>
          <div className={styles.text2}>
            <ul
              className={styles.discussedHowTo}
            >{`Discussed how to ................................., suggested to .................... about the thing. `}</ul>
          </div>
          <b className={styles.date2}>
            <span>Sept 23rd</span>
            <span className={styles.span}>{` `}</span>
          </b>
        </div>
      </div>
      {isNotesPopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNotesPopUp}
        >
          <NotesPopUp onClose={closeNotesPopUp} />
        </PortalPopup>
      )}
    </>
  );
};

export default NotesSection;
