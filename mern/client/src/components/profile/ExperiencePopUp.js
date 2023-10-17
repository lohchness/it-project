import React, { useState } from "react";
import { useNavigate } from "react-router";
import styles from "./ExperiencePopUp.module.css";
import stylesNote from "./NotesPopUp.module.css";

import { SERVER_URL } from "../../index.js";

export default function ExperiencePopUp({ onClose }) {

    const [form, setForm] = useState({
        description: "",
        experienceHeader: "",
    });
    const navigate = useNavigate();

    // These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    // This function will handle the submission.
    async function onSubmit(e) {
        e.preventDefault();

        // When a post request is sent to the create url, we'll add a new record to the database.
        const newExperience = { ...form };

        await fetch(SERVER_URL + "/experience", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newExperience),
        })
            .catch(error => {
                window.alert(error);
                return;
            });

        setForm({ description: "", experienceHeader: "" });
        //navigate("/");
        window.location.reload();
    }

return (
  <div className={stylesNote.NotesPopUp}>
      <form onSubmit={onSubmit}>
        <div className="popup">
        <input 
          className={stylesNote.notes}
          placeholder="Experience header" 
          type="text" 
          id="position"
          value={form.experienceHeader}
          onChange={(e) => updateForm({experienceHeader: e.target.value})}
          required
          />
        <div className = "description-wrapper">
          <textarea 
           name="description" 
           placeholder="Description" 
           type="text"
           id="position"
           value={form.description}
           onChange={(e) => updateForm({description: e.target.value })}
           required
          />
        </div>
        <div className="confirm-button">
          <input
           type="submit"
           value="Confirm"
           className="confirm-control"
         />
        </div>
        <button className="cancel-button" onClick={onClose}>
          <div className="cancel">Cancel</div>
        </button>
        </div>
      </form>
    </div>
  );
};

