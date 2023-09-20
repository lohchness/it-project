import { FunctionComponent } from "react";
import styles from "./AboutMeEditPopUp.module.css";

type AboutMeEditPopUpType = {
  onClose?: () => void;
};

const AboutMeEditPopUp: FunctionComponent<AboutMeEditPopUpType> = ({
  onClose,
}) => {
  return (
    <div className={styles.aboutMeEditPopUp}>
      <div className={styles.aboutMeBackground} />
      <button className={styles.confirmEditButton} onClick={onClose}>
        <div className={styles.confirm}>Confirm</div>
      </button>
      <button className={styles.cancelEditButton} onClick={onClose}>
        <div className={styles.confirm}>Cancel</div>
      </button>
      <input
        className={styles.address}
        placeholder="Address (house,street,City)"
        type="text"
      />
      <input
        className={styles.phoneNumber}
        placeholder="Phone Number"
        type="text"
      />
      <input className={styles.email} placeholder="Email" type="text" />
      <input
        className={styles.mainContact}
        placeholder="Main Contact"
        type="text"
      />
      <input className={styles.aboutMe} placeholder="About Me" type="text" />
    </div>
  );
};

export default AboutMeEditPopUp;
