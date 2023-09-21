import { useCallback } from "react";
import ProfilePic from "./ProfilePic";
import ContactInfo from "./ContactInfo";
import AboutMe from "./AboutMe";
import { useNavigate } from "react-router-dom";
import styles from "./ContactFormContainer.module.css";

const ContactFormContainer = () => {
  const navigate = useNavigate();

  const onContactNameButtonClick = useCallback(() => {
    navigate("/messaging");
  }, [navigate]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.profilePicParent}>
        <ProfilePic
          profilePic="/mask-group@2x.png"
          nameLastName="Name LastName"
          jobPosition="Job position"
        />
        <ContactInfo
          email="blah@email.com"
          phoneNumber="+12 34567890"
          address="house, street, city"
        />
      </div>
      <div className={styles.aboutMeWrapper}>
        <AboutMe mainApp="MAIN APP" />
      </div>
      <button
        className={styles.contactNameButton}
        autoFocus={true}
        disabled={false}
        onClick={onContactNameButtonClick}
      >
        <b className={styles.contactName}>Contact ...Name</b>
      </button>
    </div>
  );
};

export default ContactFormContainer;
