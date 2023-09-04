import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./DashboardAddTask.css";
const DashboardAddTask = () => {
  const navigate = useNavigate();

  const onProfileTextClick = useCallback(() => {
    navigate("/profile-info-2");
  }, [navigate]);

  const onCalendarTextClick = useCallback(() => {
    navigate("/calendar");
  }, [navigate]);

  const onAddTaskContainer1Click = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onShowMoreTextClick = useCallback(() => {
    navigate("/calendar");
  }, [navigate]);

  return (
    <div className="dashboard-add-task">
      <div className="navigation-bar">
        <div className="navigation-bar-child" />
        <div className="profile" onClick={onProfileTextClick}>
          Profile
        </div>
        <div className="dashboard">Dashboard</div>
        <div className="connections">Connections</div>
        <div className="calendar" onClick={onCalendarTextClick}>
          Calendar
        </div>
        <img className="dashboard-icon" alt="" src="/dashboard-icon.svg" />
      </div>
      <div className="tasks">
        <img className="tasks-child" alt="" src="/rectangle-6.svg" />
        <div className="tasks-heading">
          <div className="tasks-heading-child" />
          <div className="my-tasks">My Tasks</div>
        </div>
        <div className="add-task">
          <div className="add-task-child" />
          <div className="description">
            <span>Description</span>
            <span className="span">|</span>
          </div>
          <div className="add-task-item" />
          <div className="due-date">Due Date</div>
          <div className="add-task-inner" />
          <div className="add-task1">+ Add Task</div>
        </div>
        <div className="task1">
          <div className="task1-child" />
          <div className="write-user-stories">
            Write user stories and create a motivational model
          </div>
          <div className="th-august-2023">10th August, 2023</div>
          <img className="tick-task-done" alt="" src="/tick-task-done.svg" />
          <img className="delete-icon" alt="" src="/delete.svg" />
        </div>
        <div className="task2">
          <div className="task2-child" />
          <div className="design-user-interface">Design user interface</div>
          <div className="th-august-20231">15th August, 2023</div>
          <img className="circle-not-done" alt="" src="/circle-not-done.svg" />
          <img className="delete-icon1" alt="" src="/delete1.svg" />
        </div>
        <div className="task3">
          <div className="task2-child" />
          <div className="design-user-interface">Set up the project</div>
          <div className="th-august-20231">25th August, 2023</div>
          <img className="circle-not-done" alt="" src="/circle-not-done.svg" />
          <img className="delete-icon1" alt="" src="/delete1.svg" />
        </div>
        <div className="task4">
          <div className="task1-child" />
          <div className="write-user-stories">
            Blablablablablablablablablablablablablabla
          </div>
          <div className="th-august-2023">10th August, 2024</div>
          <img
            className="circle-not-done2"
            alt=""
            src="/circle-not-done1.svg"
          />
          <img className="delete-icon" alt="" src="/delete.svg" />
        </div>
        <div className="add-task2" onClick={onAddTaskContainer1Click}>
          <div className="rectangle-div" />
          <div className="confirm">Confirm</div>
        </div>
      </div>
      <div className="total-connections">
        <div className="total-connections-child" />
        <div className="div">254</div>
        <div className="total-connections1">Total connections</div>
      </div>
      <div className="connection-this-month">
        <div className="connection-this-month-child" />
        <div className="div1">22</div>
        <div className="connections-made-this">Connections made this month</div>
      </div>
      <div className="tags">
        <img className="tags-child" alt="" src="/rectangle-5.svg" />
        <div className="tag1">
          <div className="tag-1" />
          <div className="landlords">Landlords</div>
          <div className="details">Details</div>
        </div>
        <div className="tag2">
          <div className="tag2-child" />
          <div className="details1">Details</div>
          <div className="tag2-item" />
          <div className="students">Students</div>
        </div>
        <div className="tag3">
          <div className="tag2-item" />
          <div className="other-renters">Other Renters</div>
          <div className="tag3-item" />
          <div className="details2">Details</div>
        </div>
        <div className="tags-item" />
        <div className="tag-heading">
          <div className="tag-heading-child" />
          <div className="connection-tags">Connection Tags</div>
        </div>
      </div>
      <div className="upcoming-events">
        <img className="upcoming-events-child" alt="" src="/rectangle-51.svg" />
        <div className="upcoming-events-item" />
        <img
          className="interface-calendar-blank-cale-icon"
          alt=""
          src="/interfacecalendarblankcalendardatedaymonth.svg"
        />
        <div className="show-more" onClick={onShowMoreTextClick}>
          Show More
        </div>
        <div className="event-1">
          <div className="room-tour-with">Room Tour with Aiden Tang</div>
          <div className="pm-430pm">4:00pm - 4:30pm</div>
          <div className="alan-gilbert-building">Alan Gilbert Building G01</div>
          <div className="date">
            <div className="date-child" />
            <div className="aug">
              <p className="p">
                <b className="b">26</b>
              </p>
              <p className="aug1">Aug</p>
            </div>
          </div>
        </div>
        <div className="event-2">
          <div className="room-tour-with">
            Video conference with Bunny Superlong...
          </div>
          <div className="pm-430pm">9:00am - 11:00am</div>
          <div className="alan-gilbert-building">
            Zoom URL: zoom.meeting/wiuefosjdkjashkdjfl
          </div>
          <div className="date">
            <div className="date-child" />
            <div className="aug">
              <p className="p">
                <b className="b">30</b>
              </p>
              <p className="aug1">Aug</p>
            </div>
          </div>
        </div>
        <div className="event-3">
          <div className="room-tour-with">Event 3 Description blablabla</div>
          <div className="pm-315am">2:00pm - 3:15am</div>
          <div className="alan-gilbert-building">
            Supersupersupersupersupersupersuperlonglocat...
          </div>
          <div className="date2">
            <div className="date-child" />
            <div className="aug">
              <p className="p">
                <b className="b">18</b>
              </p>
              <p className="aug1">Sep</p>
            </div>
          </div>
        </div>
        <div className="bar">
          <div className="date3">Date</div>
          <div className="description1">Description</div>
          <div className="time">Time</div>
          <div className="location">Location</div>
        </div>
        <div className="upcoming-events1">Upcoming Events</div>
      </div>
      <div className="dashboard-crm-container">
        <span>Dashboard</span>
        <span className="crm">{` > CRM`}</span>
      </div>
      <img className="dashboard-add-task-child" alt="" src="/vector-3.svg" />
      <img className="dashboard-add-task-item" alt="" src="/vector-3.svg" />
      <div className="username">
        <div className="username-child" />
        <div className="username-item" />
        <img className="vector-icon" alt="" src="/vector.svg" />
        <div className="username1">Username</div>
        <img className="mask-group-icon" alt="" src="/mask-group@2x.png" />
      </div>
    </div>
  );
};

export default DashboardAddTask;
