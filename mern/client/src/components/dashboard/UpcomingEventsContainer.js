import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { SERVER_URL } from "../../index.js";
import Cookies from "universal-cookie";

import "./UpcomingEventsContainer.css";
import "../../pages/dashboard/Dashboard.css";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const Event = (props) => (
    <div className="event-row">
        <div className = "event-date">
          {months[Number(props.event.date.slice(3, 5))-1]} 
          <b>{props.event.date.slice(0, 2)} </b>
        </div>
        <div className="event-text">{props.event.description}</div>
        <div>{props.event.fromTime}-{props.event.toTime}</div>
        <div className="event-text">{props.event.location}</div>
        <button className="event-delete-button" onClick={() => {props.deleteEvent(props.event._id);}}>
            <img className="event-delete" alt="" src="/WhiteDeleteIcon.png" />
        </button>
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
            try {
                const email = await fetch(`${SERVER_URL}/user/get-current-user`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${tokenValue}`
                    }
                });

                const emailData = await email.json();
                const userEmail = emailData.user.userEmail;

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

    async function deleteEvent(id) {
        await fetch(`${SERVER_URL}/event/${id}`, {
          method: "DELETE"
        });
      
        console.log("event deleted");
        const newEvents = events.filter((el) => el._id !== id);
        setEvents(newEvents);
      }

    function EventContainer() {
        return events.map((event) => {
            return (
                <Event
                    event={event}
                    deleteEvent={() => deleteEvent(event._id)}
                    key={event._id}
                />
            );
        });
    }
    return (
        <div className="upcoming-events dashboard-widget">
            <div className="widget-heading">
                <div>Upcoming Events</div>
            </div>
            <div className="event-container">
                <div className="event-bar">
                    <div>Date</div> <div>Description</div> <div>Time</div> <div>Location</div>
                </div>
                <div className="events">
                    {EventContainer()}
                </div>
            </div>
            <div className="show-more">
                <img
                    className="interface-calendar-icon"
                    alt=""
                    src="/calendar-icon.png"
                />
                <div className="show-more-text" onClick={onShowMoreTextClick}>
                    Show More
                </div>
            </div>
        </div>
    );
};
