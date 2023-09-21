import { useState, useCallback } from "react";
import NotesPopUp from "./NotesPopUp";
import PortalPopup from "../PortalPopup";
import Note from "./Note 1";
import styles from "./NoteSectionContainer.module.css";

const NoteSectionContainer = () => {
  const [isNotesPopUpOpen, setNotesPopUpOpen] = useState(false);

  const openNotesPopUp = useCallback(() => {
    setNotesPopUpOpen(true);
  }, []);

  const closeNotesPopUp = useCallback(() => {
    setNotesPopUpOpen(false);
  }, []);

  return (
    <>
      <div className={styles.noteSection}>
        <div className={styles.noteBackground} />
        <div className={styles.header}>
          <div className={styles.headerBackground} />
          <b className={styles.notes}>Notes</b>
          <div className={styles.addNoteButton} onClick={openNotesPopUp}>
            <img className={styles.groupIcon} alt="" src="/group2.svg" />
          </div>
        </div>
        <div className={styles.individualNotes}>
          <Note
            description="Discussed how to ................................., suggested to .................... about the thing. "
            date="Aug 2nd"
          />
          <Note
            description="Discussed how to ................................., suggested to .................... about the thing. "
            date="Sept 23rd "
          />
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

export default NoteSectionContainer;
