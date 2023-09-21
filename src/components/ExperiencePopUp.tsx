import { FunctionComponent } from "react";
import styles from "./ExperiencePopUp.module.css";

type ExperiencePopUpType = {
  onClose?: () => void;
};

const ExperiencePopUp: FunctionComponent<ExperiencePopUpType> = ({
  onClose,
}) => {
  return (
    <div className={styles.experiencePopup}>
      <div className={styles.expPopBackground} />
      <input
        className={styles.experience}
        placeholder="Experience"
        type="text"
      />
      <input
        className={styles.description}
        placeholder="Description"
        type="text"
      />
      <button className={styles.confirmExperienceButton} onClick={onClose}>
        <div className={styles.confirm}>Confirm</div>
      </button>
      <button className={styles.cancelExperienceButton} onClick={onClose}>
        <div className={styles.confirm}>Cancel</div>
      </button>
    </div>
  );
};

export default ExperiencePopUp;
