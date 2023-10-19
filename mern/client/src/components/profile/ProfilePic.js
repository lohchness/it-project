import { useState, useCallback, useRef } from "react";
import AboutMeEditPopUp from "./AboutMeEditPopUp";
import PortalPopup from "../PortalPopup";
import styles from "./ProfilePic.module.css";

export default function ProfilePic({ profilePic, nameLastName, jobPosition }) {
  const [isAboutMeEditPopUpOpen, setAboutMeEditPopUpOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null); // Create a ref for the file input element

  const openAboutMeEditPopUp = useCallback(() => {
    //setAboutMeEditPopUpOpen(true);
  }, []);

  const closeAboutMeEditPopUp = useCallback(() => {
    //setAboutMeEditPopUpOpen(false);
  }, []);

  const linkFacebookProfile = () => {
    // Replace 'your-facebook-url' with the actual URL of your Facebook profile or page.
    const facebookUrl = "https://www.facebook.com";
    // Open Facebook in a new tab or window.
    window.open(facebookUrl, "_blank");
  };

  const linkInstagramProfile = () => {
    const instaURL = "https://www.instagram.com";
    window.open(instaURL, "blank_");
  };

  const linkTwitterProfile = () => {
    const twitterURL = "https://twitter.com/i/flow/login";
    window.open(twitterURL, "blank_");
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleEditProfileClick = () => {
    // Programmatically trigger the click event on the file input element
    fileInputRef.current.click();
  };

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
            <button className={styles.facebookButton} onClick={linkFacebookProfile}>
              <img className={styles.vectorIcon} alt="Facebook" src="/vector3.svg" />
            </button>
            <button className={styles.instagramButton} onClick={linkInstagramProfile}>
              <img className={styles.vectorIcon1} alt="" src="/vector4.svg" />
              <img className={styles.vectorIcon2} alt="" src="/vector5.svg" />
              <img className={styles.vectorIcon3} alt="" src="/vector6.svg" />
            </button>
            <button className={styles.instagramButton} onClick={linkTwitterProfile}>
              <img className={styles.vectorIcon4} alt="" src="/vector7.svg" />
            </button>
          </div>
        </div>
        <button className={styles.editProfileButton} onClick={handleEditProfileClick}>
          <input
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleFileChange}
            ref={fileInputRef} //{/* Attach the ref */}
          />
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
