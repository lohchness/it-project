import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContactHistorySectionContainer from "../components/ContactHistorySectionContainer";
import NoteSectionContainer from "../components/NoteSectionContainer";
import ExperienceSection from "../components/ExperienceSection";
import UpcomingEventsSectionContainer from "../components/UpcomingEventsSectionContainer";
import ContactFormContainer from "../components/ContactFormContainer";
import styles from "./ProfileInfo2.module.css";

const ProfileInfo2 = () => {
  const navigate = useNavigate();

  const onEventButton2Click = useCallback(() => {
    navigate("/calendar");
  }, [navigate]);

  const onEventButton3Click = useCallback(() => {
    navigate("/calendar");
  }, [navigate]);

  const onDashboardTextClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onConnectionsTextClick = useCallback(() => {
    navigate("/connections");
  }, [navigate]);

  const onProfileTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCalenderTextClick = useCallback(() => {
    navigate("/calendar");
  }, [navigate]);

  const onMessengerTextClick = useCallback(() => {
    navigate("/messaging");
  }, [navigate]);

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
