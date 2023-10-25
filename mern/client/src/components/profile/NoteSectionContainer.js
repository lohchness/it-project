import React, { useEffect, useState, useCallback } from "react";
import NotesPopUp from "./NotesPopUp";
import PortalPopup from "../PortalPopup";
import styles from "./NoteSectionContainer.module.css";
import { SERVER_URL } from "../../index.js";
import Cookies from "universal-cookie";

const Note = (props) => (
  <tr>
    <td>
      <b>{props.note.header}</b>
      <br />
      <div style={{ marginLeft: '20px' }}>{props.note.description}</div>
    </td>
    <td>
      <button className={styles.deleteButton} onClick={() => props.deleteNote(props.note._id)}>
        <img className={styles.deleteIcon} alt="" src="/DeleteIcon.png" />
      </button>
    </td>
  </tr>
);

export default function NoteSectionContainer({ userData }) {
  const [notes, setNotes] = useState([]);
  const [isNotesPopUpOpen, setNotesPopUpOpen] = useState(false);

  const openNotesPopUp = useCallback(() => {
    setNotesPopUpOpen(true);
  }, []);

  const closeNotesPopUp = useCallback(() => {
    setNotesPopUpOpen(false);
  }, []);

  const cookies = new Cookies();
  const tokenValue = cookies.get("token");

  useEffect(() => {
    async function getNotes() {
      try {
        if (!userData) {
          return; // Return early if userData is not available
        }

        const userEmail = userData.email;

        const response = await fetch(`${SERVER_URL}/note?email=${userEmail}`);

        if (!response.ok) {
          const message = `An error occurred: ${response.statusText}`;
          window.alert(message);
          return;
        }

        const notes = await response.json();
        setNotes(notes);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    }

    getNotes();
  }, [userData]);

  async function deleteNote(id) {
    await fetch(SERVER_URL + `/note/${id}`, {
      method: "DELETE",
    });

    const newNotes = notes.filter((el) => el._id !== id);
    setNotes(newNotes);
  }

  function NoteContainer() {
    return notes.map((note) => (
      <Note
        note={note}
        deleteNote={() => deleteNote(note._id)}
        key={note._id}
      />
    ));
  }

  return (
    <>
      <div className={styles.noteSection}>
        <div className={styles.header}>
          Notes
          <button className={styles.addNoteButton} onClick={openNotesPopUp}>
            +
          </button>
        </div>
        <table>
          <tbody>{NoteContainer()}</tbody>
        </table>
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
}
