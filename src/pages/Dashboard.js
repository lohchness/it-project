import { useState, useCallback } from "react";
import AddTaskPopUp from "../components/AddTaskPopUp";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const [isAddTaskPopUpOpen, setAddTaskPopUpOpen] = useState(false);
  const navigate = useNavigate();

  const openAddTaskPopUp = useCallback(() => {
    setAddTaskPopUpOpen(true);
  }, []);

  const closeAddTaskPopUp = useCallback(() => {
    setAddTaskPopUpOpen(false);
  }, []);

  const onShowMoreTextClick = useCallback(() => {
    navigate("/calendar");
  }, [navigate]);

  const onShowMoreText1Click = useCallback(() => {
    navigate("/calendar");
  }, [navigate]);

  const onConnectionsText1Click = useCallback(() => {
    navigate("/connections");
  }, [navigate]);

  const onProfileTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCalenderTextClick = useCallback(() => {
    navigate("/calendar");
  }, [navigate]);

  const onMessengerTextClick = useCallback(() => {
    navigate("/messaging");
  }, [navigate]);

  return (
    <>
      <div className={styles.dashboard}>
        <div className={styles.dashboardCrmContainer}>
          <span>Dashboard</span>
          <span className={styles.span}>{` `}</span>
          <span className={styles.crm}>{`> CRM`}</span>
        </div>
        <div className={styles.tasks}>
          <img className={styles.tasksChild} alt="" src="/rectangle-62.svg" />
          <div className={styles.tasksHeading}>
            <div className={styles.myTasks}>My Tasks</div>
          </div>
          <button className={styles.addTask} onClick={openAddTaskPopUp}>
            <div className={styles.addTask1}>+ Add Task</div>
          </button>
          <div className={styles.task1}>
            <img
              className={styles.tickTaskDone}
              alt=""
              src="/tick-task-done.svg"
            />
            <div className={styles.writeUserStories}>
              Write user stories and create a motivational model
            </div>
            <div className={styles.thAugust2023}>10th August, 2023</div>
            <img className={styles.deleteIcon} alt="" src="/delete.svg" />
          </div>
          <div className={styles.task2}>
            <img
              className={styles.tickTaskDone}
              alt=""
              src="/circle-not-done.svg"
            />
            <div className={styles.writeUserStories}>Design user interface</div>
            <div className={styles.thAugust2023}>15th August, 2023</div>
            <img className={styles.deleteIcon} alt="" src="/delete1.svg" />
          </div>
          <div className={styles.task3}>
            <img
              className={styles.tickTaskDone}
              alt=""
              src="/circle-not-done.svg"
            />
            <div className={styles.writeUserStories}>Set up the project</div>
            <div className={styles.thAugust2023}>25th August, 2023</div>
            <img className={styles.deleteIcon} alt="" src="/delete2.svg" />
          </div>
          <div className={styles.task4}>
            <img
              className={styles.tickTaskDone}
              alt=""
              src="/circle-not-done1.svg"
            />
            <div className={styles.writeUserStories}>
              Blablablablablablablablablablablablablabla
            </div>
            <div className={styles.thAugust2023}>10th August, 2024</div>
            <img className={styles.deleteIcon} alt="" src="/delete3.svg" />
          </div>
        </div>
        <div className={styles.totalConnections}>
          <div className={styles.connectionsMadeThis}>Total connections</div>
          <div className={styles.div}>254</div>
        </div>
        <div className={styles.connectionThisMonth}>
          <div className={styles.connectionsMadeThis}>
            Connections made this month
          </div>
          <div className={styles.div1}>22</div>
        </div>
        <div className={styles.upcomingEvents}>
          <img
            className={styles.upcomingEventsChild}
            alt=""
            src="/rectangle-51.svg"
          />
          <a className={styles.showMore}>
            <img
              className={styles.interfaceCalendarBlankCaleIcon}
              alt=""
              src="/interfacecalendarblankcalendardatedaymonth.svg"
            />
            <div className={styles.profile} onClick={onShowMoreTextClick}>
              Show More
            </div>
          </a>
          <img
            className={styles.upcomingEventsItem}
            alt=""
            src="/vector-3.svg"
          />
          <img
            className={styles.upcomingEventsInner}
            alt=""
            src="/vector-3.svg"
          />
          <div className={styles.locations}>
            <div className={styles.location}>Location</div>
            <div className={styles.location1}>Alan Gilbert Building G01</div>
            <div className={styles.location1}>
              Zoom URL: zoom.meeting/wiuefosjdkjashkdjfl
            </div>
            <div className={styles.location3}>
              Supersupersupersupersupersupersuperlonglocat...
            </div>
          </div>
          <div className={styles.times}>
            <div className={styles.myTasks}>Time</div>
            <div className={styles.location1}>4:00pm - 4:30pm</div>
            <div className={styles.location1}>9:00am - 11:00am</div>
            <div className={styles.location1}>2:00pm - 3:15am</div>
          </div>
          <div className={styles.dates}>
            <div className={styles.date}>Date</div>
            <div className={styles.date1}>
              <div className={styles.aug}>
                <p className={styles.p}>
                  <b className={styles.b}>26</b>
                </p>
                <p className={styles.aug1}>Aug</p>
              </div>
            </div>
            <div className={styles.date2}>
              <div className={styles.aug}>
                <p className={styles.p}>
                  <b className={styles.b}>30</b>
                </p>
                <p className={styles.aug1}>Aug</p>
              </div>
            </div>
            <div className={styles.date3}>
              <div className={styles.aug}>
                <p className={styles.p}>
                  <b className={styles.b}>18</b>
                </p>
                <p className={styles.aug1}>Sep</p>
              </div>
            </div>
          </div>
          <div className={styles.descriptions}>
            <div className={styles.location}>Description</div>
            <div className={styles.location1}>Room Tour with Aiden Tang</div>
            <div className={styles.location1}>
              Video conference with Bunny Superlong...
            </div>
            <div className={styles.location3}>
              Event 3 Description blablabla
            </div>
          </div>
          <div className={styles.header}>
            <div className={styles.myTasks}>Upcoming Events</div>
          </div>
        </div>
        <div className={styles.connections}>
          <img
            className={styles.connectionsChild}
            alt=""
            src="/rectangle-63.svg"
          />
          <div className={styles.tasksHeading1}>
            <div className={styles.myTasks}>Connections</div>
          </div>
          <input
            className={styles.searchBar}
            placeholder="search..."
            type="text"
          />
          <a className={styles.showMore2}>
            <img
              className={styles.interfaceCalendarBlankCaleIcon}
              alt=""
              src="/interfacecalendarblankcalendardatedaymonth1.svg"
            />
            <div className={styles.profile} onClick={onShowMoreText1Click}>
              Show More
            </div>
          </a>
          <div className={styles.bar}>
            <div className={styles.name}>Name</div>
            <div className={styles.lastContactParent}>
              <div className={styles.lastContact}>Last Contact</div>
              <img
                className={styles.interfacePageControllerScroIcon}
                alt=""
                src="/interfacepagecontrollerscrollupdownmovescrollvertical.svg"
              />
            </div>
            <div className={styles.touch}>Touch</div>
            <div className={styles.lastContactParent}>
              <div className={styles.tag}>{`Tag `}</div>
              <img
                className={styles.interfacePageControllerScroIcon}
                alt=""
                src="/interfacepagecontrollerscrollupdownmovescrollvertical.svg"
              />
            </div>
          </div>
          <div className={styles.contactHistory1}>
            <div className={styles.rectangle} />
            <div className={styles.nameParent}>
              <div className={styles.name1}>Name</div>
              <div className={styles.lastcontact}>16/08/2022</div>
              <div className={styles.touchstatus}>In touch</div>
            </div>
            <div className={styles.touchstatusWrapper}>
              <div className={styles.aug}>Student</div>
            </div>
          </div>
          <div className={styles.contactHistory2}>
            <div className={styles.rectangle} />
            <div className={styles.nameParent}>
              <div className={styles.name1}>Name</div>
              <div className={styles.lastcontact}>16/08/2022</div>
              <div className={styles.touchstatus}>In touch</div>
            </div>
            <div className={styles.touchstatusWrapper}>
              <div className={styles.aug}>Student</div>
            </div>
          </div>
          <div className={styles.contactHistory3}>
            <div className={styles.rectangle} />
            <div className={styles.nameParent}>
              <div className={styles.name1}>Name</div>
              <div className={styles.lastcontact}>16/08/2022</div>
              <div className={styles.touchstatus}>In touch</div>
            </div>
            <div className={styles.touchstatusWrapper}>
              <div className={styles.aug}>Student</div>
            </div>
          </div>
          <div className={styles.contactHistory4}>
            <div className={styles.rectangle} />
            <div className={styles.nameParent}>
              <div className={styles.name1}>Name</div>
              <div className={styles.lastcontact}>16/08/2022</div>
              <div className={styles.touchstatus}>In touch</div>
            </div>
            <div className={styles.touchstatusWrapper}>
              <div className={styles.aug}>Student</div>
            </div>
          </div>
          <div className={styles.contactHistory5}>
            <div className={styles.rectangle} />
            <div className={styles.nameParent}>
              <div className={styles.name1}>Name</div>
              <div className={styles.lastcontact}>16/08/2022</div>
              <div className={styles.touchstatus}>In touch</div>
            </div>
            <div className={styles.touchstatusWrapper}>
              <div className={styles.aug}>Student</div>
            </div>
          </div>
          <div className={styles.contactHistory6}>
            <div className={styles.rectangle} />
            <div className={styles.nameParent}>
              <div className={styles.name1}>Name</div>
              <div className={styles.lastcontact}>16/08/2022</div>
              <div className={styles.touchstatus}>In touch</div>
            </div>
            <div className={styles.touchstatusWrapper}>
              <div className={styles.aug}>Student</div>
            </div>
          </div>
        </div>
        <div className={styles.navFrame}>
          <div className={styles.nav}>
            <img className={styles.vectorIcon} alt="" src="/vector20.svg" />
            <nav className={styles.pages}>
              <div className={styles.dashboard1}>Dashboard</div>
              <div className={styles.profile} onClick={onConnectionsText1Click}>
                Connections
              </div>
              <div className={styles.profile} onClick={onProfileTextClick}>
                Profile
              </div>
              <div className={styles.profile} onClick={onCalenderTextClick}>
                Calender
              </div>
              <div className={styles.messenger} onClick={onMessengerTextClick}>
                Messenger
              </div>
            </nav>
          </div>
        </div>
      </div>
      {isAddTaskPopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.4)"
          placement="Centered"
          onOutsideClick={closeAddTaskPopUp}
        >
          <AddTaskPopUp onClose={closeAddTaskPopUp} />
        </PortalPopup>
      )}
    </>
  );
};

export default Dashboard;
