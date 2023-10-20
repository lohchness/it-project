import React, { useEffect, useState, useCallback } from "react";
//import { link } from "react-router-dom";
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
        <img className="delete-icon" alt="" src="/DeleteIcon.png" />
      </button>
    </td>
  </tr>
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

  const cookies = new Cookies(); 
  const tokenValue = cookies.get("token"); 

// This method fetches the records from the database.
useEffect(() => {
  async function getNotes() {
    try {
      const email = await fetch(`${SERVER_URL}/user/get-current-user`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${tokenValue}`
        }
      }); 
      const emailData = await email.json();
      const userEmail = emailData.user.userEmail;

      const response = await fetch(`${SERVER_URL}/note?email=${userEmail}`); // Add a query parameter for the user's email

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
  return;
}, [tokenValue]);

  // This method will delete a record
  async function deleteNote(id) {
    await fetch(SERVER_URL + `/note/${id}`, {
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
          <b className={styles.notes}>Notes</b>
          <button className={styles.addNoteButton} onClick={openNotesPopUp}>
            <div className={styles.groupIcon}>+</div>
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
};

