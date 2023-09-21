import { FunctionComponent, useState, useCallback } from "react";
import AboutMeEditPopUp from "./AboutMeEditPopUp";
import PortalPopup from "./PortalPopup";
import styles from "./ProfilePic.module.css";

type ProfilePicType = {
  profilePic?: string;
  nameLastName?: string;
  jobPosition?: string;
};

const ProfilePic: FunctionComponent<ProfilePicType> = ({
  profilePic,
  nameLastName,
  jobPosition,
}) => {
  const [isAboutMeEditPopUpOpen, setAboutMeEditPopUpOpen] = useState(false);

  const openAboutMeEditPopUp = useCallback(() => {
    setAboutMeEditPopUpOpen(true);
  }, []);

  const closeAboutMeEditPopUp = useCallback(() => {
    setAboutMeEditPopUpOpen(false);
  }, []);

  return (
    <>
      <div className={styles.profilePic}>
        <div className={styles.frameParent}>
          <div className={styles.maskGroupParent}>
            <img className={styles.maskGroupIcon} alt="" src={profilePic} />
            <div className={styles.nameLastnameParent}>
              <div className={styles.nameLastname}>{nameLastName}</div>
              <div className={styles.jobPosition}>{jobPosition}</div>
            </div>
          </div>
          <div className={styles.facebookButtonParent}>
            <div className={styles.facebookButton}>
              <img className={styles.vectorIcon} alt="" src="/vector3.svg" />
            </div>
            <div className={styles.instagramButton}>
              <img className={styles.vectorIcon1} alt="" src="/vector4.svg" />
              <img className={styles.vectorIcon2} alt="" src="/vector5.svg" />
              <img className={styles.vectorIcon3} alt="" src="/vector6.svg" />
            </div>
            <div className={styles.facebookButton}>
              <img className={styles.vectorIcon4} alt="" src="/vector7.svg" />
            </div>
          </div>
        </div>
        <button
          className={styles.editProfileButton}
          onClick={openAboutMeEditPopUp}
        >
          <img className={styles.vectorIcon5} alt="" src="/vector8.svg" />
          <img className={styles.vectorIcon6} alt="" src="/vector9.svg" />
          <img className={styles.vectorIcon7} alt="" src="/vector10.svg" />
        </button>
      </div>
      {isAboutMeEditPopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAboutMeEditPopUp}
        >
          <AboutMeEditPopUp onClose={closeAboutMeEditPopUp} />
        </PortalPopup>
      )}
    </>
  );
};

export default ProfilePic;
