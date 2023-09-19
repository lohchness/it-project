import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./UpcomingEventsContainer.css";
const UpcomingEventsContainer = () => {
  const navigate = useNavigate();

  const onShowMoreTextClick = useCallback(() => {
    navigate("/calendar");
  }, [navigate]);

  return (
    <div className="upcoming-events">
      <img className="upcoming-events-child" alt="" src="/undefined6.png" />
      <a className="show-more">
        <img
          className="interface-calendar-blank-cale-icon"
          alt=""
          src="/undefined7.png"
        />
        <div className="show-more1" onClick={onShowMoreTextClick}>
          Show More
        </div>
      </a>
      <img className="upcoming-events-item" alt="" src="/undefined8.png" />
      <img className="upcoming-events-inner" alt="" src="/undefined8.png" />
      <div className="locations">
        <div className="location1">Location</div>
        <div className="location11">Alan Gilbert Building G01</div>
        <div className="location11">
          Zoom URL: zoom.meeting/wiuefosjdkjashkdjfl
        </div>
        <div className="location3">
          Supersupersupersupersupersupersuperlonglocat...
        </div>
      </div>
      <div className="times">
        <div className="time1">Time</div>
        <div className="location11">4:00pm - 4:30pm</div>
        <div className="location11">9:00am - 11:00am</div>
        <div className="location11">2:00pm - 3:15am</div>
      </div>
      <div className="dates">
        <div className="date5">Date</div>
        <div className="date13">
          <div className="sep">
            <p className="p2">
              <b className="b2">26</b>
            </p>
            <p className="aug4">Aug</p>
          </div>
        </div>
        <div className="date13">
          <div className="sep">
            <p className="p2">
              <b className="b2">30</b>
            </p>
            <p className="aug4">Aug</p>
          </div>
        </div>
        <div className="date31">
          <div className="sep">
            <p className="p2">
              <b className="b2">18</b>
            </p>
            <p className="aug4">Sep</p>
          </div>
        </div>
      </div>
      <div className="descriptions">
        <div className="location1">Description</div>
        <div className="location11">Room Tour with Aiden Tang</div>
        <div className="location11">
          Video conference with Bunny Superlong...
        </div>
        <div className="location3">Event 3 Description blablabla</div>
      </div>
      <div className="header7">
        <div className="time1">Upcoming Events</div>
      </div>
    </div>
  );
};

export default UpcomingEventsContainer;
