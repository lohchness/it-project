import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import styles from "./NotesPopUp.module.css";

import { SERVER_URL } from "../../index.js";
import Cookies from "universal-cookie";

export default function NotesPopUp({ onClose }) {
  const [form, setForm] = useState({
    description: "",
    header: "",
    email: "", // Initialize email as an empty string
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the user's email when the component mounts
    const cookies = new Cookies();
    const tokenValue = cookies.get("token");

    fetch(`${SERVER_URL}/user/get-current-user`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${tokenValue}`
      }
    })
      .then((response) => response.json())
      .then((emailData) => {
        const userEmail = emailData.user.userEmail;
        // Set the email address in the state
        setForm((prevForm) => ({
          ...prevForm,
          email: userEmail,
        }));
      })
      .catch((error) => {
        console.error("Error fetching email:", error);
      });
  }, []); // The empty dependency array ensures this effect runs once when the component mounts

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const newNote = { ...form };

    const response = await fetch(SERVER_URL + "/note", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNote),
    });

    if (!response.ok) {
      window.alert("Error creating a new note.");
      return;
    }

    setForm({ description: "", header: "", email: form.email }); // Reset form, keeping the email
    navigate("/dashBoard");
  }

  return (
    <div className={styles.NotesPopUp}>
      <form onSubmit={onSubmit}>
        <div className="popup notes-popup">
          <input
            className={styles.notes}
            placeholder="Note header"
            type="text"
            id="position"
            value={form.header}
            onChange={(e) => updateForm({ header: e.target.value })}
            required
          />
          <div className="description-wrapper">
            <textarea
              name="description"
              placeholder="Description"
              type="text"
              id="position"
              value={form.description}
              onChange={(e) => updateForm({ description: e.target.value })}
              required
            />
          </div>
          <div className={styles.confirmExperienceButton}>
            <input
              type="submit"
              value="Confirm"
              className="confirm-control"
            />
          </div>
          <button className={styles.cancelExperienceButton} onClick={onClose}>
            <div className="cancel">Cancel</div>
          </button>
        </div>
      </form>
    </div>
  );
}