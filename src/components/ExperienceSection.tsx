import { FunctionComponent, useState, useCallback } from "react";
import ExperiencePopUp from "./ExperiencePopUp";
import PortalPopup from "./PortalPopup";
import Experience from "./Experience";
import styles from "./ExperienceSection.module.css";

const ExperienceSection: FunctionComponent = () => {
  const [isExperiencePopUpOpen, setExperiencePopUpOpen] = useState(false);

  const openExperiencePopUp = useCallback(() => {
    setExperiencePopUpOpen(true);
  }, []);

  const closeExperiencePopUp = useCallback(() => {
    setExperiencePopUpOpen(false);
  }, []);

  return (
    <>
      <section className={styles.experienceSection}>
        <div className={styles.experienceSectionChild} />
        <Experience
          description="Worked here for ............................., learn ...................... this will help ............"
          header="Experience Title"
        />
        <div className={styles.experience2}>
          <div className={styles.text2}>
            <ul className={styles.workedHereFor}>
              Worked here for ............................., learn
              ...................... this will help ............
            </ul>
          </div>
          <b className={styles.header2}>The place worked at</b>
        </div>
        <div className={styles.header}>
          <div className={styles.headerChild} />
          <b className={styles.experiences}>
            <p className={styles.experiences1}>Experiences</p>
          </b>
          <button
            className={styles.addExperienceButton}
            onClick={openExperiencePopUp}
          >
            <img className={styles.groupIcon} alt="" src="/undefined5.png" />
          </button>
        </div>
      </section>
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

export default ExperienceSection;
