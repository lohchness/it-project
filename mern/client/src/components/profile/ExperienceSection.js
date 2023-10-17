import React, { useState, useEffect, useCallback } from "react";
import ExperiencePopUp from "./ExperiencePopUp";
import PortalPopup from "../PortalPopup";
//import Experience from "./Experience";
//import styles from "./ExperienceSection.module.css";
import styles from "./NoteSectionContainer.module.css";

// const Experience = (props) => (
//   //<div className = "row-wrapper">
//     <tr height = "30px">
//       <td>{props.experience.experienceHeader}
//       <td width = "80%">{props.experience.description}</td>
//         <td>
//           <button className="delete-button"
//             onClick={() => {
//               props.deleteExperience(props.experience._id);
//             }}
//           >
//             <img className="delete-icon" alt="" src="/DeleteIcon.png" />
//           </button>
//         </td>
//       </td>
//     </tr>
//    //</div>
//  );

const Experience = (props) => (
  <tr>
    <td>
      <b>{props.experience.experienceHeader}</b>
      <br />
      <div style={{ marginLeft: '20px' }}>{props.experience.description}</div>
    </td>
    <td>
      <button className="delete-button" onClick={() => props.deleteExperience(props.experience._id)}>
        <img className="delete-icon" alt="" src="/DeleteIcon.png" />
      </button>
    </td>
  </tr>
);

////////////////////////////
 export default function ExperienceSection() {
  const [experiences, setExperiences] = useState([]);
  const [isExperiencePopUpOpen, setExperiencePopUpOpen] = useState(false);

  const openExperiencePopUp = useCallback(() => {
    setExperiencePopUpOpen(true);
  }, []);

  const closeExperiencePopUp = useCallback(() => {
    setExperiencePopUpOpen(false);
  }, []);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getExperiences() {
      const response = await fetch(`http://localhost:5050/experience/`);
  
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
  
      const experiences = await response.json();
      setExperiences(experiences);
    }
  
    getExperiences();
    return;
  }, [experiences.length]);

 // This method will delete a record
 async function deleteExperience(id) {
  await fetch(`http://localhost:5050/experience/${id}`, {
    method: "DELETE"
  });

  const newExperiences = experiences.filter((el) => el._id !== id);
  setExperiences(newExperiences);
}

 // This method will map out the records on the table
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
};

