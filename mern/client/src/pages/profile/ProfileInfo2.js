import { useCallback } from "react";
import ContactHistorySectionContainer from "/Users/a1/Downloads/it-project/mern/client/src/components/ContactHistorySectionContainer";
import NoteSectionContainer from "/Users/a1/Downloads/it-project/mern/client/src/components/NoteSectionContainer";
import ExperienceSection from "/Users/a1/Downloads/it-project/mern/client/src/components/ExperienceSection";
import UpcomingEventsSectionContainer from "/Users/a1/Downloads/it-project/mern/client/src/components/UpcomingEventsSectionContainer";
import ContactFormContainer from "/Users/a1/Downloads/it-project/mern/client/src/components/ContactFormContainer";
import { useNavigate } from "react-router-dom";
import Header from "/Users/a1/Downloads/it-project/mern/client/src/components/Header";
import styles from "./ProfileInfo2.module.css";

const ProfileInfo2 = () => {

  return (
    <div className={styles.profile}>
      <div className={styles.profilecrmFrame}>
        <div className={styles.profileCrmContainer}>
          <span>Profile</span>
          <span className={styles.span}>{` `}</span>
          <span className={styles.crm}>{`> CRM`}</span>
        </div>
      </div>
      <div className={styles.historyFrame}>
        <ContactHistorySectionContainer />
      </div>
      <div className={styles.noteFrame}>
        <NoteSectionContainer />
      </div>
      <div className={styles.experienceFrame}>
        <ExperienceSection />
      </div>
      <div className={styles.eventFrame}>
        <UpcomingEventsSectionContainer />
      </div>
      <div className={styles.detailFrame}>
        <div className={styles.detailsSection}>
          <ContactFormContainer />
        </div>
      </div>
      <Header />
      
    </div>
  );
};

export default ProfileInfo2;
