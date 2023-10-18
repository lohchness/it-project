import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { SERVER_URL } from "../../index.js";
import Cookies from "universal-cookie";

import "./UpcomingEventsContainer.css";
import "../../pages/dashboard/Dashboard.css";

const Event = (props) => (
  <div className = "event-row">
    <div>{props.event.date}</div>
    <div className= "event-text">{props.event.description}</div>
    <div>{props.event.fromTime}</div>
    <div>{props.event.toTime}</div>
    <div className= "event-text">{props.event.location}</div>
  </div>
)

export default function EventContainer() {
  const [events, setEvents] = useState([]);

    const navigate = useNavigate();
    const onShowMoreTextClick = useCallback(() => {
        navigate("/calendar");
    }, [navigate]);

  const cookies = new Cookies(); 
  const tokenValue = cookies.get("token"); 
  
  useEffect(() => {
    async function getEvents() {
      try{
        const email = await fetch(`http://localhost:5050/user/get-current-user`,{
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${tokenValue}`
          }
        });
  
      const emailData = await email.json();
      const userEmail = emailData.user.userEmail;

      const response = await fetch(SERVER_URL + `/event?email=${userEmail}`); // Add a query parameter for the user's email
  
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
  
      const events = await response.json();
      setEvents(events);
    }catch (error) {
      console.error("Error fetching notes:", error);
    }
  }
  
    getEvents();
  
    return;
  }, [tokenValue]);

  function EventContainer() {
    return events.map((event) => {
      return (
        <Event
          event={event}
          key={event._id}
        />
      );
    });
  }
  return (
    <div className="upcoming-events">
      <div className="event-header">
        <div>Upcoming Events</div>
      </div>
      <div className = "event-container">
        <div className = "event-bar">
          <div>Date</div> <div>Description</div> <div>Time</div> <div>Location</div>
        </div>
        {EventContainer()}
      </div>
      <a className="show-more">
        <img
          className="interface-calendar-icon"
          alt=""
          src="/calendar-icon.png"
        />
        <div onClick={onShowMoreTextClick}>
          Show More
        </div>
      </a>
      <></>
    </div>
  );
};

//export default UpcomingEventsContainer;