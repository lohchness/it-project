import { FunctionComponent, useCallback } from "react";
import NotesSection from "../components/NotesSection";
import ContactHistorySectionContainer from "../components/ContactHistorySectionContainer";
import ExperienceSection from "../components/ExperienceSection";
import UpcomingEventsSectionContainer from "../components/UpcomingEventsSectionContainer";
import ProfilePic from "../components/ProfilePic";
import ContactInfo from "../components/ContactInfo";
import AboutMe from "../components/AboutMe";
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

  const onContactNameButtonClick = useCallback(() => {
    // Please sync "Messaging" to the project
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
    <div className={styles.profileInfo2}>
      <div className={styles.profilecrmFrame}>
        <div className={styles.profileCrmContainer}>
          <span>Profile</span>
          <span className={styles.span}>{` `}</span>
          <span className={styles.crm}>{`> CRM`}</span>
        </div>
      </div>
      <div className={styles.noteFrame}>
        <NotesSection />
      </div>
      <div className={styles.historyFrame}>
        <ContactHistorySectionContainer />
      </div>
      <div className={styles.experienceFrame}>
        <ExperienceSection />
      </div>
      <div className={styles.eventFrame}>
        <UpcomingEventsSectionContainer />
      </div>
      <div className={styles.detailFrame}>
        <div className={styles.detailsSection}>
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
            <div className={styles.aboutMeParent}>
              <AboutMe
                aboutMeMore="awdkmakwdka wdaw daw da wd awd a wd"
                aboutMe1="wdawfjkafnjkenjfnejfknakjenfjnajkefjkajfaefnkajefjanfjkanfkjanjkfnajkfnjakfnfjaejv ak vak vakejkavnajevnajkv aev aej va jekvja vaj vja vak"
                mainApp="MAIN APP"
              />
              <button
                className={styles.contactNameButton}
                autoFocus={true}
                disabled={false}
                onClick={onContactNameButtonClick}
              >
                <b className={styles.contactName}>Contact ...Name</b>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.navFrame}>
        <div className={styles.nav}>
          <button className={styles.hamburgermenu}>
            <img className={styles.vectorIcon} alt="" src="/undefined23.png" />
            <img className={styles.vectorIcon1} alt="" src="/undefined24.png" />
            <img className={styles.vectorIcon2} alt="" src="/undefined23.png" />
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
            <div className={styles.profile} onClick={onProfileTextClick}>
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
