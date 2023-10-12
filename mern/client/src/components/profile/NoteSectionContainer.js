import React, { useEffect, useState, useCallback } from "react";
//import { link } from "react-router-dom";
import NotesPopUp from "./NotesPopUp";
import PortalPopup from "../PortalPopup";
import styles from "./NoteSectionContainer.module.css";

const Note = (props) => (
  <div className = "note-row-wrapper">
   <tr height = "30px">
     <img className="tick-task-done" alt="" src="/GreenTick.png" />
     <td width = "80%">{props.note.description}</td>
     <td>{props.note.header}</td>
     <td>
       <button className="delete-button"
         onClick={() => {
           props.deleteNote(props.note._id);
          }}
        >
        <img className="delete-icon" alt="" src="/DeleteIcon.png" />
        </button>
      </td>
    </tr>
  </div>
);

////////////////////////////
export default function NoteContainer() {
  const [notes, setNotes] = useState([]);
  const [isNotesPopUpOpen, setNotesPopUpOpen] = useState(false);

  const openNotesPopUp = useCallback(() => {
    setNotesPopUpOpen(true);
  }, []);

  const closeNotesPopUp = useCallback(() => {
    setNotesPopUpOpen(false);
  }, []);

// This method fetches the records from the database.
useEffect(() => {
  async function getNotes() {
    const response = await fetch(`http://localhost:5050/note/`);

    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }

    const notes = await response.json();
    setNotes(notes);
  }

  getNotes();
  return;
}, [notes.length]);

 // This method will delete a record
 async function deleteNote(id) {
  await fetch(`http://localhost:5050/note/${id}`, {
    method: "DELETE"
  });

  const newNotes = notes.filter((el) => el._id !== id);
  setNotes(newNotes);
}

// This method will map out the records on the table
function NoteContainer() {
  return notes.map((note) => {
    return (
      <Note
        note={note}
        deleteNote={() => deleteNote(note._id)}
        key={note._id}
      />
    );
  });
}
  
  return (
    <>
      <div className={styles.noteSection}>
      <div className={styles.header}>
          <div className={styles.notes}>My Notes</div>
        </div>
        <table>
          <tbody>{NoteContainer()}</tbody>
        </table>
        <button className={styles.addNoteButton} onClick={openNotesPopUp}>
          <div className={styles.groupIcon}>+ Add Note</div>
        </button>
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

