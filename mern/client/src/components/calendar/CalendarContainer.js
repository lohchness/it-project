import { startOfMonth, endOfMonth, differenceInDays, subMonths, addMonths} from "date-fns";
import { useState, useEffect } from "react";
import { SERVER_URL } from "../../index.js";
import Cookies from "universal-cookie";
import "./CalendarContainer.css";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function CalendarContainer() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([]);

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
              const response = await fetch(`${SERVER_URL}/event?email=${userEmail}`); 
              const events = await response.json();
              setEvents(events);
          } catch (error) {
              console.error("Error fetching notes:", error);
          }
      }
      getEvents();
      return;
  }, [tokenValue]);

  const renderEventsForDate = (date) => {
    //const dateKey = format(date, "dd/MM/yyyy"); // Convert date to "dd/mm/yyyy" format
    const eventsForDate = events.filter((event) => {
      const eventDate = new Date(event.date.slice(6,10),event.date.slice(3,5),event.date.slice(0,2));
      return  eventDate.getTime() === date.getTime();
    });

    if (eventsForDate.length > 0) {
      return eventsForDate.map((event) => (
        <div className="calendar-event">{event.description}</div>
      ));
    }

    return null;
  };

  const startDate = startOfMonth(currentDate);
  const endDate = endOfMonth(currentDate);
  const numDays = differenceInDays(endDate, startDate) + 1;
  const startDay = startDate.getDay();
  const endDay = 6 - endDate.getDay();

  return (
    <div className="calendar-wrapper">
      <div className="calendar-heading">
        <div className="arrow-button" onClick={()=>setCurrentDate(subMonths(currentDate, 1))}>{`<`}</div>
        <div className="heading">{currentDate.toLocaleDateString('en-us', { year:"numeric", month:"short"})}</div>
        <div className="arrow-button" onClick={()=>setCurrentDate(addMonths(currentDate, 1))}>{`>`}</div>
      </div>
      <div className="days-of-week">{days.map((day) => <div >{day}</div>)}</div>
      <div className="grid-wrapper">
        {Array.from({length: startDay}).map((_) => ( <div className = "cell" />))}
        {Array.from({length: numDays}).map((_, index) => (
           <div className="cell">
             {index+1}
             {renderEventsForDate(new Date(currentDate.getFullYear(), currentDate.getMonth()+1, index + 1))}
           </div>
        ))}
        {Array.from({length: endDay}).map((_) => ( <div className = "cell" />))}
      </div>
    </div>
  );
};