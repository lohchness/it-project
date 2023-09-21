import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Calendar.module.css";

const Calendar = () => {
  const navigate = useNavigate();

  const onDashboardTextClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onConnectionsTextClick = useCallback(() => {
    navigate("/connections");
  }, [navigate]);

  const onProfileTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMessengerTextClick = useCallback(() => {
    navigate("/messaging");
  }, [navigate]);

  return (
    <div className={styles.calendar}>
      <div className={styles.calendarCrmContainer}>
        <span>Calendar</span>
        <span className={styles.span}>{` `}</span>
        <span className={styles.crm}>{`> CRM`}</span>
      </div>
      <div className={styles.calendar1}>
        <img className={styles.backgroundIcon} alt="" src="/background1.svg" />
        <div className={styles.monthYear}>
          <div className={styles.div}>{`<`}</div>
          <div className={styles.div}>AUGUST, 2023</div>
          <div className={styles.div}>{`>`}</div>
        </div>
        <div className={styles.row1}>
          <div className={styles.day1}>
            <div className={styles.day11} />
            <div className={styles.div2}>30</div>
          </div>
          <div className={styles.day1}>
            <div className={styles.day21} />
            <div className={styles.div3}>31</div>
          </div>
          <div className={styles.day3}>
            <img className={styles.day3Icon} alt="" src="/day3.svg" />
            <div className={styles.div4}>1</div>
          </div>
          <div className={styles.day3}>
            <div className={styles.div5}>2</div>
            <img className={styles.day3Icon} alt="" src="/day3.svg" />
          </div>
          <div className={styles.day3}>
            <div className={styles.div6}>3</div>
            <img className={styles.day3Icon} alt="" src="/day3.svg" />
          </div>
          <div className={styles.day3}>
            <div className={styles.div5}>4</div>
            <img className={styles.day3Icon} alt="" src="/day3.svg" />
          </div>
          <div className={styles.day3}>
            <div className={styles.div8}>5</div>
            <div className={styles.day12} />
          </div>
        </div>
        <div className={styles.row2}>
          <div className={styles.day13}>
            <div className={styles.day11} />
            <div className={styles.div6}>6</div>
          </div>
          <div className={styles.day22}>
            <div className={styles.day21} />
            <div className={styles.div10}>7</div>
          </div>
          <div className={styles.day31}>
            <img className={styles.day3Icon} alt="" src="/day3.svg" />
            <div className={styles.div4}>8</div>
          </div>
          <div className={styles.day41}>
            <div className={styles.div5}>9</div>
            <img className={styles.day3Icon} alt="" src="/day3.svg" />
          </div>
          <div className={styles.day51}>
            <div className={styles.div13}>10</div>
            <img className={styles.day3Icon} alt="" src="/day3.svg" />
          </div>
          <div className={styles.day61}>
            <div className={styles.div8}>11</div>
            <img className={styles.day3Icon} alt="" src="/day3.svg" />
          </div>
          <div className={styles.day71}>
            <div className={styles.div15}>12</div>
            <div className={styles.day12} />
          </div>
          <div className={styles.blablablsdkfalsdjkcoscikmdlkan}>
            Blablablsdkfalsdjkcoscikmdlkand
          </div>
        </div>
        <div className={styles.row3}>
          <div className={styles.day3}>
            <div className={styles.day11} />
            <div className={styles.div16}>13</div>
          </div>
          <div className={styles.day3}>
            <div className={styles.day21} />
            <div className={styles.div13}>14</div>
          </div>
          <div className={styles.day3}>
            <img className={styles.day3Icon} alt="" src="/day3.svg" />
            <div className={styles.div18}>15</div>
          </div>
          <div className={styles.day3}>
            <div className={styles.div13}>16</div>
            <img className={styles.day3Icon} alt="" src="/day3.svg" />
          </div>
          <div className={styles.day52}>
            <div className={styles.div16}>17</div>
            <img className={styles.day3Icon} alt="" src="/day3.svg" />
          </div>
          <div className={styles.day3}>
            <div className={styles.div13}>18</div>
            <img className={styles.day3Icon} alt="" src="/day3.svg" />
          </div>
          <div className={styles.day3}>
            <div className={styles.div15}>19</div>
            <div className={styles.day12} />
          </div>
        </div>
        <div className={styles.row4}>
          <div className={styles.day13}>
            <div className={styles.day11} />
            <div className={styles.div2}>20</div>
          </div>
          <div className={styles.day22}>
            <div className={styles.day21} />
            <div className={styles.div3}>21</div>
          </div>
          <div className={styles.day31}>
            <img className={styles.day3Icon} alt="" src="/day3.svg" />
            <div className={styles.div16}>22</div>
          </div>
          <div className={styles.day41}>
            <img className={styles.day3Icon} alt="" src="/day4.svg" />
            <div className={styles.div2}>23</div>
          </div>
          <div className={styles.day51}>
            <img className={styles.day3Icon} alt="" src="/day3.svg" />
            <div className={styles.div27}>24</div>
          </div>
          <div className={styles.day61}>
            <img className={styles.day3Icon} alt="" src="/day3.svg" />
            <div className={styles.div27}>25</div>
          </div>
          <div className={styles.day71}>
            <div className={styles.day12} />
            <div className={styles.div29}>26</div>
          </div>
          <div className={styles.roomTourWith}>Room Tour with Aiden Tang</div>
        </div>
        <div className={styles.row5}>
          <div className={styles.day13}>
            <div className={styles.day11} />
            <div className={styles.div30}>27</div>
          </div>
          <div className={styles.day22}>
            <div className={styles.day21} />
            <div className={styles.div27}>28</div>
          </div>
          <div className={styles.day31}>
            <img className={styles.day3Icon} alt="" src="/day3.svg" />
            <div className={styles.div13}>29</div>
          </div>
          <div className={styles.day41}>
            <img className={styles.day3Icon} alt="" src="/day3.svg" />
            <div className={styles.div27}>30</div>
          </div>
          <div className={styles.day54}>
            <img className={styles.day3Icon} alt="" src="/day3.svg" />
            <div className={styles.div34}>1</div>
          </div>
          <div className={styles.day64}>
            <img className={styles.day3Icon} alt="" src="/day3.svg" />
            <div className={styles.div10}>2</div>
          </div>
          <div className={styles.day74}>
            <div className={styles.day12} />
            <div className={styles.div5}>3</div>
          </div>
          <div className={styles.videoConferenceWith}>
            Video conference with Bunny...
          </div>
        </div>
        <div
          className={styles.days}
        >{`Sun                Mon                 Tue                 Wed                 Thu                   Fri                   Sat `}</div>
      </div>
      <div className={styles.addActivity}>
        <img
          className={styles.addActivityChild}
          alt=""
          src="/rectangle-61.svg"
        />
        <div className={styles.heading}>
          <div className={styles.addActivity1}>Add Activity</div>
        </div>
        <div className={styles.activityType}>
          <div className={styles.type}>Type:</div>
          <div className={styles.eventButton}>
            <div className={styles.type}>Event</div>
          </div>
          <div className={styles.taskButton}>
            <div className={styles.type}>Task</div>
          </div>
        </div>
        <input
          className={styles.description}
          placeholder="New activity description|"
          type="text"
        />
        <div className={styles.date}>
          <div className={styles.date1}>Date:</div>
          <input
            className={styles.ddmmyy}
            placeholder="dd/mm/yyyy"
            type="date"
          />
        </div>
        <div className={styles.location}>
          <div className={styles.location1}>Location:</div>
          <input className={styles.locationChild} type="text" />
        </div>
        <div className={styles.time}>
          <div className={styles.time1}>Time:</div>
          <div className={styles.fromto}>
            <div className={styles.fromtoChild} />
            <input className={styles.fromtoItem} type="time" />
            <div className={styles.from}>From:</div>
            <input className={styles.fromtoInner} type="time" />
            <div className={styles.to}>To:</div>
          </div>
        </div>
        <button className={styles.submitButton}>
          <div className={styles.submit}>Submit</div>
        </button>
      </div>
      <div className={styles.navFrame}>
        <div className={styles.nav}>
          <button className={styles.hamburgermenu}>
            <img className={styles.vectorIcon} alt="" src="/vector11.svg" />
            <img className={styles.vectorIcon1} alt="" src="/vector12.svg" />
            <img className={styles.vectorIcon2} alt="" src="/vector11.svg" />
          </button>
          <nav className={styles.pages}>
            <div className={styles.dashboard} onClick={onDashboardTextClick}>
              Dashboard
            </div>
            <div className={styles.dashboard} onClick={onConnectionsTextClick}>
              Connections
            </div>
            <div className={styles.dashboard} onClick={onProfileTextClick}>
              Profile
            </div>
            <div className={styles.calender}>Calender</div>
            <div className={styles.messenger} onClick={onMessengerTextClick}>
              Messenger
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
