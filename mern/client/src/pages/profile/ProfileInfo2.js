import { useCallback } from "react";

import ContactHistorySectionContainer from "../../components/profile/ContactHistorySectionContainer";
import NoteSectionContainer from "../../components/profile/NoteSectionContainer";
import ExperienceSection from "../../components/profile/ExperienceSection";
import UpcomingEventsSectionContainer from "../../components/profile/UpcomingEventsSectionContainer";
import ContactFormContainer from "../../components/profile/ContactFormContainer";

import Header from "../../components/Header";
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
