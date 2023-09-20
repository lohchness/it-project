import { FunctionComponent, useCallback } from "react";
import ContactHistorySectionContainer from "../components/ContactHistorySectionContainer";
import NoteSectionContainer from "../components/NoteSectionContainer";
import ExperienceSection from "../components/ExperienceSection";
import UpcomingEventsSectionContainer from "../components/UpcomingEventsSectionContainer";
import ContactFormContainer from "../components/ContactFormContainer";
import { useNavigate } from "react-router-dom";
import styles from "./ProfileInfo2.module.css";

const ProfileInfo2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onEventButton2Click = useCallback(() => {
    // Please sync "Calendar" to the project
  }, []);

  const onEventButton3Click = useCallback(() => {
    // Please sync "Calendar" to the project
  }, []);

  const onDashboardTextClick = useCallback(() => {
    // Please sync "Dashboard" to the project
  }, []);

  const onConnectionsTextClick = useCallback(() => {
    // Please sync "Connections" to the project
  }, []);

  const onProfileTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCalenderTextClick = useCallback(() => {
    // Please sync "Calendar" to the project
  }, []);

  const onMessengerTextClick = useCallback(() => {
    // Please sync "Messaging" to the project
  }, []);

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
      <div className={styles.navFrame}>
        <div className={styles.nav}>
          <button className={styles.hamburgermenu}>
            <img className={styles.vectorIcon} alt="" src="/vector11.svg" />
            <img className={styles.vectorIcon1} alt="" src="/vector12.svg" />
            <img className={styles.vectorIcon2} alt="" src="/vector11.svg" />
          </button>
          <nav className={styles.pages}>
            <div className={styles.dashboard} onClick={onDashboardTextClick}>
              Dashboard
            </div>
            <div
              className={styles.connections}
              onClick={onConnectionsTextClick}
            >
              Connections
            </div>
            <div className={styles.profile1} onClick={onProfileTextClick}>
              Profile
            </div>
            <div className={styles.connections} onClick={onCalenderTextClick}>
              Calender
            </div>
            <div className={styles.dashboard} onClick={onMessengerTextClick}>
              Messenger
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo2;
