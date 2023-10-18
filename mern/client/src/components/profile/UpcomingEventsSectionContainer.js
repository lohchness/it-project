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

  // const onEventButton3Click = useCallback(() => {
  //   // Please sync "Calendar" to the project
  // }, []);


  const cookies = new Cookies(); 
  const tokenValue = cookies.get("token"); 

  useEffect(() => {
    async function getEvents() {
      try {

        const email = await fetch(`http://localhost:5050/user/get-current-user`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${tokenValue}`
          }
        }); 
        const emailData = await email.json();
        const userEmail = emailData.user.userEmail;
        console.log("userEmail", userEmail)

        const response = await fetch(SERVER_URL + `/event?email=${userEmail}`); // Add a query parameter for the user's email    

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
    <div className={styles.upcomingEventsSection}>
      <div className={styles.eveBackground} />
      <div className={styles.header}>
        <div className={styles.headerChild} />
        <b className={styles.headingText}>{`Upcoming Events `}</b>
        {/* <div className={styles.eventsButton}>
          <img className={styles.groupIcon} alt="" src="/group4.svg" />
        </div> */}
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
