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
        <div className={styles.expBackground} />
        <div className={styles.header}>
          <b className={styles.experiences}>
            <p className={styles.experiences1}>Experiences</p>
          </b>
          <button
            className={styles.addExperienceButton}
            onClick={openExperiencePopUp}
          >
            <img className={styles.groupIcon} alt="" src="/group3.svg" />
          </button>
        </div>
        <div className={styles.individualExperiences}>
          <Experience
            description="Worked here for ............................., learn ...................... this will help ..........."
            header="Experience Title"
          />
          <Experience
            description="Worked here for ............................., learn ...................... this will help ............"
            header="The place worked at"
          />
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
