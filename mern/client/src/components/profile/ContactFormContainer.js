import { useCallback } from "react";
import ProfilePic from "./ProfilePic";
import ContactInfo from "./ContactInfo";
import AboutMe from "./AboutMe";
import styles from "./ContactFormContainer.module.css";

const ContactFormContainer = () => {
  const onContactNameButtonClick = useCallback(() => {
    // Please sync "Messaging" to the project
  }, []);

  return (
    <div className={styles.frameParent}>
      <div className={styles.profilePicParent}>
        <ProfilePic
          profilePic="/undefined10.png"
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
    </div>
  );
};

export default ContactFormContainer;
