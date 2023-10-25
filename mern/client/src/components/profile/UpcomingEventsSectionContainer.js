import React, { useEffect, useState, useCallback } from "react";
import EventInfo from "./EventInfo";
import styles from "./UpcomingEventsSectionContainer.module.css";
import Cookies from "universal-cookie";
import { SERVER_URL } from "../../index.js";

export default function UpcomingEventsSectionContainer({ userData }) {
  const [events, setEvents] = useState([]);

  const onEventButtonClick = useCallback(() => {
    // Please sync "Calendar" to the project
  }, []);

  const cookies = new Cookies();
  const tokenValue = cookies.get("token");

  useEffect(() => {
    async function getEvents() {
      try {
        if (!userData) {
          return; // Return early if userData is not available
        }

        const userEmail = userData.email;
        console.log("userEmail", userEmail);

        const response = await fetch(`${SERVER_URL}/event?email=${userEmail}`);

        if (!response.ok) {
          const message = `An error occurred: ${response.statusText}`;
          window.alert(message);
          return;
        }

        const events = await response.json();
        setEvents(events);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    }

    getEvents();
  }, [userData]);

  function EventContainer() {
    return events.map((event) => {
      return (
        <EventInfo
          className={styles.eventInfo}
          dateDay={event.date.slice(0, 2)}
          dateMonth={event.date.slice(3, 5)}
          description={event.description}
          time={event.fromTime + "-" + event.toTime}
          location={event.location}
          onEventButtonClick={onEventButtonClick}
          key={event._id} // Added a unique key for each event
        />
      );
    });
  }

  return (
    <div className={styles.upcomingEventsSection}>
      <div className={styles.header}>Upcoming Events</div>
      <div className={styles.upcomingEventsContainer}>
        <div className={styles.detailBar}>
          <div className={styles.dateHeader}>Date</div>
          <div className={styles.descriptionHeader}>Description</div>
          <div className={styles.timeHeader}>Time</div>
          <div className={styles.locationHeader}>Location</div>
        </div>
        <div className={styles.eventContainer}>{EventContainer()}</div>
      </div>
    </div>
  );
}
