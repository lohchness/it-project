import { useCallback } from "react";
import EventInfo from "./EventInfo";
import styles from "./UpcomingEventsSectionContainer.module.css";

const UpcomingEventsSectionContainer = () => {
  const onEventButton2Click = useCallback(() => {
    // Please sync "Calendar" to the project
  }, []);

  const onEventButton3Click = useCallback(() => {
    // Please sync "Calendar" to the project
  }, []);

  return (
    <div className={styles.upcomingEventsSection}>
      <div className={styles.eveBackground} />
      <img className={styles.dividerIcon} alt="" src="/divider.svg" />
      <div className={styles.header}>
        <div className={styles.headerChild} />
        <b className={styles.headingText}>{`Upcoming Events `}</b>
        <div className={styles.eventsButton}>
          <img className={styles.groupIcon} alt="" src="/group4.svg" />
        </div>
      </div>
      <EventInfo
        dateDay="26"
        dateMonth="Aug"
        description1="Room Tour with Aiden Tang"
        time1="4:00pm - 4:30pm"
        location1="Alan Gilbert Building G02"
        onEventButton2Click={onEventButton2Click}
      />
      <EventInfo
        dateDay="27"
        dateMonth="Aug"
        description1="Assign task"
        time1="2pm - 3pm"
        location1="Alan Gilbert Building G01"
        event2Top="115.41px"
        event2ZIndex="4"
        onEventButton2Click={onEventButton3Click}
      />
      <div className={styles.detailBar}>
        <div className={styles.date}>Date</div>
        <div className={styles.description}>Description</div>
        <div className={styles.time}>Time</div>
        <div className={styles.location}>Location</div>
      </div>
    </div>
  );
};

export default UpcomingEventsSectionContainer;
