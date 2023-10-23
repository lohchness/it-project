import React, { useEffect, useState, useCallback } from "react";
import EventInfo from "./EventInfo";
import styles from "./UpcomingEventsSectionContainer.module.css";
import Cookies from "universal-cookie";
import { SERVER_URL } from "../../index.js";

export default function UpcomingEventsSectionContainer() {
  const [events, setEvents] = useState([]);

  const onEventButton2Click = useCallback(() => {
    // Please sync "Calendar" to the project
  }, []);



  const cookies = new Cookies(); 
  const tokenValue = cookies.get("token"); 

  useEffect(() => {
    async function getEvents() {
      try {

        const email = await fetch(`${SERVER_URL}/user/get-current-user`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${tokenValue}`
          }
        }); 
        const emailData = await email.json();
        const userEmail = emailData.user.userEmail;
        console.log("userEmail", userEmail)

        const response = await fetch(`${SERVER_URL}/event?email=${userEmail}`); // Add a query parameter for the user's email    

        if (!response.ok) {
          const message = `An error occurred: ${response.statusText}`;
          window.alert(message);
          return;
        }
    
        const events = await response.json();
        setEvents(events);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    }
  
    getEvents();
    return;
  }, [tokenValue]);

    // This method will map out the records on the table
    function EventContainer() {
        return events.map((event) => {
            return (
                <EventInfo
                    dateDay={event.date.slice(0, 2)}  // Use event.date here
                    dateMonth={event.date.slice(3, 5)}  // Use event.date here
                    description1={event.description}
                    time1={event.fromTime + '-' + event.toTime}
                    location1={event.location}
                    onEventButton2Click={onEventButton2Click}
                />
            );
        });
    }

    return (
      <div className={styles.event}>
          <div className={styles.eventDate}>
              <b>{dateDay}</b>
              <div>{dateMonth}</div>
          </div>
          <div className={styles.eventDescription}>{description}</div>
          <div className={styles.eventTime}>{time}</div>
          <div className={styles.eventLocation}>{location}</div>
          <div className={styles.eventButton} onClick={onEventButtonClick}>
              <img className={styles.groupIcon} alt="" src="/group5.svg" />
          </div>
      </div>
    );
};
