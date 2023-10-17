import React, { useEffect, useState, useCallback } from "react";
import EventInfo from "./EventInfo";
import styles from "./UpcomingEventsSectionContainer.module.css";

export default function UpcomingEventsSectionContainer() {
  const [events, setEvents] = useState([]);

  const onEventButton2Click = useCallback(() => {
    // Please sync "Calendar" to the project
  }, []);

  const onEventButton3Click = useCallback(() => {
    // Please sync "Calendar" to the project
  }, []);

  useEffect(() => {
    async function getEvents() {
      const response = await fetch(`http://localhost:5050/events/`);
  
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
  
      const events = await response.json();
      setEvents(events);
    }
  
    getEvents();
    return;
  }, [events.length]);

    // This method will map out the records on the table
  function EventContainer() {
    return events.map((event) => {
      return (
        <EventInfo
          dateDay={event.date.slice(0,2)} 
          dateMonth={event.data.slice(3,5)}
          description1={event.description}
          time1={event.fromTime + event.toTime}
          location1={event.location}
          onEventButton2Click={onEventButton2Click}
        />
      );
    });
  }

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
      <table>
        <tbody>{EventContainer()}</tbody>
      </table> 
      <div className={styles.detailBar}>
        <div className={styles.date}>Date</div>
        <div className={styles.description}>Description</div>
        <div className={styles.time}>Time</div>
        <div className={styles.location}>Location</div>
      </div>
    </div>
  );
};
