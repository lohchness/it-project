import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Calendar.css";
const Calendar = () => {
  const navigate = useNavigate();

  const onProfileTextClick = useCallback(() => {
    navigate("/profile-info-2");
  }, [navigate]);

  const onDashboardTextClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onConnectionsTextClick = useCallback(() => {
    navigate("/connections");
  }, [navigate]);

  return (
    <div className="calendar4">
      <div className="navigation-bar5">
        <div className="navigation-bar-child3" />
        <div className="profile5" onClick={onProfileTextClick}>
          Profile
        </div>
        <div className="dashboard6" onClick={onDashboardTextClick}>
          Dashboard
        </div>
        <div className="connections7" onClick={onConnectionsTextClick}>
          Connections
        </div>
        <div className="calendar5">Calendar</div>
        <img className="dashboard-icon5" alt="" src="/dashboard-icon5.svg" />
      </div>
      <img className="background-icon" alt="" src="/background.svg" />
      <div className="month-year">
        <div className="heading1" />
        <div className="august-2023">AUGUST, 2023</div>
        <div className="div10">{`<`}</div>
        <div className="div11">{`>`}</div>
      </div>
      <div className="row-1">
        <div className="day-1">
          <div className="day1" />
          <div className="div12">30</div>
        </div>
        <div className="day-2">
          <div className="day2" />
          <div className="div13">31</div>
        </div>
        <div className="day-3">
          <img className="day3-icon" alt="" src="/day3.svg" />
          <div className="div14">1</div>
        </div>
        <div className="day-4">
          <div className="div15">2</div>
          <img className="day3-icon" alt="" src="/day3.svg" />
        </div>
        <div className="day-5">
          <div className="div16">3</div>
          <img className="day3-icon" alt="" src="/day3.svg" />
        </div>
        <div className="day-6">
          <div className="div15">4</div>
          <img className="day3-icon" alt="" src="/day3.svg" />
        </div>
        <div className="day-7">
          <div className="div18">5</div>
          <div className="day11" />
        </div>
      </div>
      <div className="row-2">
        <div className="day3-icon">
          <div className="day1" />
          <div className="div16">6</div>
        </div>
        <div className="day-21">
          <div className="day2" />
          <div className="div20">7</div>
        </div>
        <div className="day-3">
          <img className="day3-icon" alt="" src="/day3.svg" />
          <div className="div14">8</div>
        </div>
        <div className="day-4">
          <div className="div15">9</div>
          <img className="day3-icon" alt="" src="/day3.svg" />
        </div>
        <div className="day-5">
          <div className="div23">10</div>
          <img className="day3-icon" alt="" src="/day3.svg" />
        </div>
        <div className="day-6">
          <div className="div18">11</div>
          <img className="day3-icon" alt="" src="/day3.svg" />
        </div>
        <div className="day-7">
          <div className="div25">12</div>
          <div className="day11" />
        </div>
        <div className="blablablsdkfalsdjkcoscikmdlkan">
          Blablablsdkfalsdjkcoscikmdlkand
        </div>
      </div>
      <div className="row-3">
        <div className="day3-icon">
          <div className="day1" />
          <div className="div26">13</div>
        </div>
        <div className="day-21">
          <div className="day2" />
          <div className="div23">14</div>
        </div>
        <div className="day-3">
          <img className="day3-icon" alt="" src="/day3.svg" />
          <div className="div28">15</div>
        </div>
        <div className="day-4">
          <div className="div23">16</div>
          <img className="day3-icon" alt="" src="/day3.svg" />
        </div>
        <div className="day-52">
          <div className="div26">17</div>
          <img className="day3-icon" alt="" src="/day3.svg" />
        </div>
        <div className="day-6">
          <div className="div23">18</div>
          <img className="day3-icon" alt="" src="/day3.svg" />
        </div>
        <div className="day-7">
          <div className="div25">19</div>
          <div className="day11" />
        </div>
      </div>
      <div className="row-4">
        <div className="day3-icon">
          <div className="day1" />
          <div className="div12">20</div>
        </div>
        <div className="day-21">
          <div className="day2" />
          <div className="div13">21</div>
        </div>
        <div className="day-3">
          <img className="day3-icon" alt="" src="/day3.svg" />
          <div className="div26">22</div>
        </div>
        <div className="day-4">
          <img className="day3-icon" alt="" src="/day4.svg" />
          <div className="div12">23</div>
        </div>
        <div className="day-53">
          <img className="day3-icon" alt="" src="/day5.svg" />
          <div className="div37">24</div>
        </div>
        <div className="day-63">
          <img className="day3-icon" alt="" src="/day5.svg" />
          <div className="div37">25</div>
        </div>
        <div className="day-73">
          <div className="day17" />
          <div className="div39">26</div>
        </div>
        <div className="room-tour-with3">Room Tour with Aiden Tang</div>
      </div>
      <div className="row-5">
        <div className="day3-icon">
          <div className="day18" />
          <div className="div40">27</div>
        </div>
        <div className="day-21">
          <div className="day24" />
          <div className="div37">28</div>
        </div>
        <div className="day-3">
          <img className="day3-icon" alt="" src="/day5.svg" />
          <div className="div23">29</div>
        </div>
        <div className="day-4">
          <img className="day3-icon" alt="" src="/day5.svg" />
          <div className="div37">30</div>
        </div>
        <div className="day-54">
          <img className="day3-icon" alt="" src="/day5.svg" />
          <div className="div44">1</div>
        </div>
        <div className="day-64">
          <img className="day3-icon" alt="" src="/day5.svg" />
          <div className="div20">2</div>
        </div>
        <div className="day-74">
          <div className="day17" />
          <div className="div15">3</div>
        </div>
        <div className="video-conference-with2">
          Video conference with Bunny...
        </div>
      </div>
      <div className="username9">
        <div className="username-child4" />
        <img className="vector-icon5" alt="" src="/vector3.svg" />
        <div className="username10">Username</div>
        <img className="mask-group-icon12" alt="" src="/mask-group@2x.png" />
      </div>
      <div className="add-activity">
        <div className="new-event-heading">
          <img
            className="new-event-heading-child"
            alt=""
            src="/rectangle-63.svg"
          />
          <div className="new-event-heading-item" />
          <div className="add-activity1">Add Activity</div>
        </div>
        <div className="task-button">
          <div className="task-button-child" />
          <div className="task">Task</div>
        </div>
        <div className="event-button">
          <div className="event-button-child" />
          <div className="event">Event</div>
        </div>
        <div className="description5">
          <div className="type1">Type:</div>
          <div className="description-child" />
          <div className="new-activity-description-container">
            <span>New activity description</span>
            <span className="span2">|</span>
          </div>
        </div>
        <div className="date12">
          <div className="date-child6" />
          <div className="ddmmyyyy">dd/mm/yyyy</div>
          <div className="date13">Date:</div>
        </div>
        <div className="location3">
          <div className="location-child" />
          <div className="location4">Location:</div>
        </div>
        <div className="time3">
          <div className="time-child" />
          <div className="time-item" />
          <div className="from">From:</div>
          <div className="time-inner" />
          <div className="to">To:</div>
          <div className="time4">Time:</div>
        </div>
      </div>
      <div className="sun-mon-tue">{`Sun                Mon                 Tue                 Wed                 Thu                   Fri                   Sat `}</div>
      <div className="calendar-crm-container">
        <span>Calendar</span>
        <span className="crm4">{` > CRM`}</span>
      </div>
      <div className="calendar-child" />
      <div className="submit">Submit</div>
    </div>
  );
};

export default Calendar;
