import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import "./UpcomingEventsContainer.css";
import "../../pages/dashboard/Dashboard.css";

const UpcomingEventsContainer = () => {
    const navigate = useNavigate();

    const onShowMoreTextClick = useCallback(() => {
        navigate("/calendar");
    }, [navigate]);

    return (
        <div className="upcoming-events dashboard-widget">
            <h2 className="widget-heading">Upcoming Events</h2>
            <div className="events-header">
                <div className="date-field">Date</div>
                <div className="time-field">Time</div>
                <div className="location-field">Location</div>
                <div className="description-field">Description</div>
            </div>
            <div className="events-container">
                <div className="event">
                    <div className="event-date">26 Aug</div>
                    <div className="event-location">Alan Gilbert Building G01</div>
                    <div className="event-time">4:00pm - 4:30pm</div>
                    <div className="event-description">Room Tour with Aiden Tang</div>
                </div>
            </div>
            <img className="line-break" src="/undefined8.png" />
            <a className="show-more">
                <img className="interface-calendar-blank-cale-icon" src="/undefined7.png" />
                <div className="show-more-text" onClick={onShowMoreTextClick}>Show More</div>
            </a>
        </div>
    );
};

export default UpcomingEventsContainer;
