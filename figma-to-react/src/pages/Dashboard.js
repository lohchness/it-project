import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
const Dashboard = () => {
  const navigate = useNavigate();

  const onProfileTextClick = useCallback(() => {
    navigate("/profile-info-2");
  }, [navigate]);

  const onCalendarTextClick = useCallback(() => {
    navigate("/calendar");
  }, [navigate]);

  const onAddTaskContainerClick = useCallback(() => {
    navigate("/dashboard-add-task");
  }, [navigate]);

  const onShowMoreTextClick = useCallback(() => {
    navigate("/calendar");
  }, [navigate]);

  const onUsernameContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="dashboard4">
      <div className="navigation-bar4">
        <div className="navigation-bar-child2" />
        <div className="profile4" onClick={onProfileTextClick}>
          Profile
        </div>
        <div className="dashboard5">Dashboard</div>
        <div className="connections6">Connections</div>
        <div className="calendar3" onClick={onCalendarTextClick}>
          Calendar
        </div>
        <img className="dashboard-icon4" alt="" src="/dashboard-icon4.svg" />
      </div>
      <div className="tasks1">
        <img className="tasks-item" alt="" src="/rectangle-6.svg" />
        <div className="tasks-heading1">
          <div className="tasks-heading-item" />
          <div className="my-tasks1">My Tasks</div>
        </div>
        <div className="add-task3" onClick={onAddTaskContainerClick}>
          <div className="add-task-child1" />
          <div className="add-task4">+ Add Task</div>
        </div>
        <div className="task11">
          <div className="task1-item" />
          <div className="write-user-stories1">
            Write user stories and create a motivational model
          </div>
          <div className="th-august-20233">10th August, 2023</div>
          <img className="tick-task-done1" alt="" src="/tick-task-done.svg" />
          <img className="delete-icon12" alt="" src="/delete.svg" />
        </div>
        <div className="task21">
          <div className="task2-item" />
          <div className="design-user-interface1">Design user interface</div>
          <div className="th-august-20234">15th August, 2023</div>
          <img className="circle-not-done3" alt="" src="/circle-not-done.svg" />
          <img className="delete-icon13" alt="" src="/delete1.svg" />
        </div>
        <div className="task31">
          <div className="task2-item" />
          <div className="design-user-interface1">Set up the project</div>
          <div className="th-august-20234">25th August, 2023</div>
          <img className="circle-not-done3" alt="" src="/circle-not-done.svg" />
          <img className="delete-icon13" alt="" src="/delete1.svg" />
        </div>
        <div className="task41">
          <div className="task1-item" />
          <div className="write-user-stories1">
            Blablablablablablablablablablablablablabla
          </div>
          <div className="th-august-20233">10th August, 2024</div>
          <img
            className="circle-not-done5"
            alt=""
            src="/circle-not-done1.svg"
          />
          <img className="delete-icon12" alt="" src="/delete.svg" />
        </div>
      </div>
      <div className="total-connections2">
        <div className="total-connections-item" />
        <div className="div8">254</div>
        <div className="total-connections3">Total connections</div>
      </div>
      <div className="connection-this-month1">
        <div className="connection-this-month-item" />
        <div className="div9">22</div>
        <div className="connections-made-this1">
          Connections made this month
        </div>
      </div>
      <div className="tags1">
        <img className="tags-inner" alt="" src="/rectangle-5.svg" />
        <div className="tag11">
          <div className="tag-11" />
          <div className="landlords1">Landlords</div>
          <div className="details3">Details</div>
        </div>
        <div className="tag21">
          <div className="tag2-inner" />
          <div className="details4">Details</div>
          <div className="tag3-inner" />
          <div className="students1">Students</div>
        </div>
        <div className="tag31">
          <div className="tag3-inner" />
          <div className="other-renters3">Other Renters</div>
          <div className="tag3-child1" />
          <div className="details5">Details</div>
        </div>
        <div className="tags-child1" />
        <div className="tag-heading1">
          <div className="tag-heading-item" />
          <div className="connection-tags1">Connection Tags</div>
        </div>
      </div>
      <div className="upcoming-events2">
        <img className="upcoming-events-inner" alt="" src="/rectangle-51.svg" />
        <div className="upcoming-events-child1" />
        <img
          className="interface-calendar-blank-cale-icon1"
          alt=""
          src="/interfacecalendarblankcalendardatedaymonth.svg"
        />
        <div className="show-more1" onClick={onShowMoreTextClick}>
          Show More
        </div>
        <div className="event-11">
          <div className="room-tour-with2">Room Tour with Aiden Tang</div>
          <div className="pm-430pm2">4:00pm - 4:30pm</div>
          <div className="alan-gilbert-building3">
            Alan Gilbert Building G01
          </div>
          <div className="date8">
            <div className="date-child3" />
            <div className="aug8">
              <p className="p5">
                <b className="b5">26</b>
              </p>
              <p className="aug9">Aug</p>
            </div>
          </div>
        </div>
        <div className="event-22">
          <div className="room-tour-with2">
            Video conference with Bunny Superlong...
          </div>
          <div className="pm-430pm2">9:00am - 11:00am</div>
          <div className="alan-gilbert-building3">
            Zoom URL: zoom.meeting/wiuefosjdkjashkdjfl
          </div>
          <div className="date8">
            <div className="date-child3" />
            <div className="aug8">
              <p className="p5">
                <b className="b5">30</b>
              </p>
              <p className="aug9">Aug</p>
            </div>
          </div>
        </div>
        <div className="event-32">
          <div className="room-tour-with2">Event 3 Description blablabla</div>
          <div className="pm-315am1">2:00pm - 3:15am</div>
          <div className="alan-gilbert-building3">
            Supersupersupersupersupersupersuperlonglocat...
          </div>
          <div className="date10">
            <div className="date-child3" />
            <div className="aug8">
              <p className="p5">
                <b className="b5">18</b>
              </p>
              <p className="aug9">Sep</p>
            </div>
          </div>
        </div>
        <div className="bar3">
          <div className="date11">Date</div>
          <div className="description4">Description</div>
          <div className="time2">Time</div>
          <div className="location2">Location</div>
        </div>
        <div className="upcoming-events3">Upcoming Events</div>
      </div>
      <div className="dashboard-crm-container1">
        <span>Dashboard</span>
        <span className="crm3">{` > CRM`}</span>
      </div>
      <img className="dashboard-child" alt="" src="/vector-3.svg" />
      <img className="dashboard-item" alt="" src="/vector-3.svg" />
      <div className="username6" onClick={onUsernameContainer1Click}>
        <div className="username7">
          <div className="username-child2" />
          <div className="username-child3" />
          <div className="logout">
            <div className="logout1">Logout</div>
            <img className="logout-icon" alt="" src="/logout-icon.svg" />
          </div>
          <img className="vector-icon4" alt="" src="/vector.svg" />
          <div className="username8">Username</div>
          <img className="mask-group-icon11" alt="" src="/mask-group@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
