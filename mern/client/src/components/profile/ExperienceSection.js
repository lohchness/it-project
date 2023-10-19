import React, { useState, useEffect, useCallback } from "react";
import ExperiencePopUp from "./ExperiencePopUp";
import PortalPopup from "../PortalPopup";
import styles from "./NoteSectionContainer.module.css";
import { SERVER_URL } from "../../index.js";
import Cookies from "universal-cookie";

const Experience = (props) => (
  <tr>
    <td>
      <b>{props.experience.experienceHeader}</b>
      <br />
      <div style={{ marginLeft: '20px' }}>{props.experience.description}</div>
    </td>
    <td>
      <button className={styles.deleteButton} onClick={() => props.deleteExperience(props.experience._id)}>
        <img className="delete-icon" alt="" src="/DeleteIcon.png" />
      </button>
    </td>
  </tr>
);

export default function ExperienceSection() {
  const [experiences, setExperiences] = useState([]);
  const [isExperiencePopUpOpen, setExperiencePopUpOpen] = useState(false);

  const openExperiencePopUp = useCallback(() => {
    setExperiencePopUpOpen(true);
  }, []);

  const closeExperiencePopUp = useCallback(() => {
    setExperiencePopUpOpen(false);
  }, []);

  const cookies = new Cookies(); 
  const tokenValue = cookies.get("token"); 

  useEffect(() => {
    async function getExperiences() {
      try {
        const email = await fetch(`http://localhost:5050/user/get-current-user`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${tokenValue}`
          }
        }); 
        const emailData = await email.json();
        const userEmail = emailData.user.userEmail;

        const response = await fetch(SERVER_URL + `/experience?email=${userEmail}`);
    
        if (!response.ok) {
          const message = `An error occurred: ${response.statusText}`;
          window.alert(message);
          return;
        }
    
        const experiences = await response.json();
        setExperiences(experiences);
      } catch (error) { // Added error parameter
        console.error("Error fetching experiences:", error); // Updated error message
      }
    }
  
    getExperiences();
  }, [tokenValue]);

  async function deleteExperience(id) {
    await fetch(SERVER_URL + `/experience/${id}`, {
      method: "DELETE"
    });

    const newExperiences = experiences.filter((el) => el._id !== id);
    setExperiences(newExperiences);
  }

  function ExperienceContainer() {
    return experiences.map((experience) => {
      return (
        <Experience
          experience={experience}
          deleteExperience={() => deleteExperience(experience._id)}
          key={experience._id}
        />
      );
    });
  }

  return (
    <>
      <div className={styles.noteSection}>
        <div className={styles.header}>
          <b className={styles.notes}>Experience</b>
          <button className={styles.addNoteButton} onClick={openExperiencePopUp}>
            <div className={styles.groupIcon}>+</div>
          </button>
        </div>
        <table>
          <tbody>{ExperienceContainer()}</tbody>
        </table>
      </div>
      {isExperiencePopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeExperiencePopUp}
        >
          <ExperiencePopUp onClose={closeExperiencePopUp} />
        </PortalPopup>
      )}
    </>
  );
}