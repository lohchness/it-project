import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import styles from "./ExperiencePopUp.module.css";
import { SERVER_URL } from "../../index.js";
import Cookies from "universal-cookie";

export default function ExperiencePopUp({ onClose }) {
  const [form, setForm] = useState({
    description: "",
    experienceHeader: "",
    email: "", // Initialize email as an empty string
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the user's email when the component mounts
    const cookies = new Cookies();
    const tokenValue = cookies.get("token");

    fetch(`http://localhost:5050/user/get-current-user`, {
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
    const newExperience = { ...form };

    const response = await fetch(SERVER_URL + "/experience", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newExperience),
    });

    if (!response.ok) {
      window.alert("Error creating a new experience.");
      return;
    }

    setForm({ description: "", experienceHeader: "", email: form.email }); // Reset form, keeping the email
    window.location.reload();
  }

  return (
    <div className={styles.experiencePopup}>
      <form onSubmit={onSubmit}>
        <div className="popup experience-popup">
          <input
            className={styles.experience}
            placeholder="Experience header"
            type="text"
            id="position"
            value={form.experienceHeader}
            onChange={(e) => updateForm({ experienceHeader: e.target.value })}
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