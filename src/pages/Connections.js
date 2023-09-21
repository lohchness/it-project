import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Connections.module.css";

const Connections = () => {
  const navigate = useNavigate();

  const onDashboardClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onConnectionsClick = useCallback(() => {
    navigate("/connections");
  }, [navigate]);

  const onProfileClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCalendarClick = useCallback(() => {
    navigate("/calendar");
  }, [navigate]);

  const onMessengerClick = useCallback(() => {
    navigate("/messaging");
  }, [navigate]);

  return (
    <div className={styles.connections}>
      <div className={styles.background}>
        <img className={styles.backgroundIcon} alt="" src="/background.svg" />
        <div className={styles.showing8Out}>Showing 8 out of 254 Results</div>
        <button className={styles.addNewConnections}>
          <img className={styles.addIcon} alt="" src="/add-icon.svg" />
          <div className={styles.addNewConnection}>Add New Connection</div>
        </button>
        <div className={styles.pages}>
          <button className={styles.page1}>
            <div className={styles.page1Child} />
            <div className={styles.div}>1</div>
          </button>
          <button className={styles.page2}>
            <div className={styles.page2Child} />
            <div className={styles.div1}>2</div>
          </button>
          <button className={styles.page}>
            <div className={styles.page2Child} />
            <div className={styles.div1}>...</div>
          </button>
          <button className={styles.page31}>
            <div className={styles.page2Child} />
            <div className={styles.div3}>31</div>
          </button>
          <button className={styles.page32}>
            <div className={styles.page2Child} />
            <div className={styles.div4}>32</div>
          </button>
        </div>
        <div className={styles.connectionsCrmContainer}>
          <span className={styles.sortBy}>Connections</span>
          <span className={styles.crm}>
            <span className={styles.span}>{` `}</span>
            <span>{`> CRM`}</span>
          </span>
        </div>
        <div className={styles.backgroundChild} />
      </div>
      <div className={styles.connectionlist}>
        <div className={styles.connection1}>
          <div className={styles.thAug2023}>28th Aug, 2023</div>
          <div className={styles.inTouch}>In Touch</div>
          <button className={styles.name}>Aidan Tang</button>
          <div className={styles.connection1Child} />
          <div className={styles.student}>Student</div>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group2@2x.png"
          />
          <img className={styles.connection1Item} alt="" src="/vector-2.svg" />
          <button className={styles.delete}>
            <img className={styles.vectorIcon} alt="" src="/vector14.svg" />
            <img className={styles.vectorIcon1} alt="" src="/vector15.svg" />
            <img className={styles.vectorIcon2} alt="" src="/vector16.svg" />
          </button>
        </div>
        <div className={styles.connection2}>
          <div className={styles.thFeb2023}>9th Feb, 2023</div>
          <div className={styles.losingTouch}>Losing Touch</div>
          <button className={styles.name}>Bunny Superlonglas...</button>
          <div className={styles.connection1Child} />
          <div className={styles.student}>Landlord</div>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group2@2x.png"
          />
          <img className={styles.connection1Item} alt="" src="/vector-2.svg" />
          <button className={styles.delete1}>
            <img className={styles.vectorIcon} alt="" src="/vector17.svg" />
            <img className={styles.vectorIcon1} alt="" src="/vector15.svg" />
            <img className={styles.vectorIcon2} alt="" src="/vector16.svg" />
          </button>
        </div>
        <div className={styles.connection3}>
          <div className={styles.thMay2021}>14th May, 2021</div>
          <div className={styles.notInTouch}>Not In Touch</div>
          <button className={styles.name}>Name Lastname</button>
          <div className={styles.connection1Child} />
          <div className={styles.student}>Landlord</div>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group2@2x.png"
          />
          <img className={styles.connection1Item} alt="" src="/vector-2.svg" />
          <button className={styles.delete2}>
            <img className={styles.vectorIcon} alt="" src="/vector17.svg" />
            <img className={styles.vectorIcon1} alt="" src="/vector15.svg" />
            <img className={styles.vectorIcon2} alt="" src="/vector16.svg" />
          </button>
        </div>
        <div className={styles.connection4}>
          <div className={styles.thAug2023}>22th Aug, 2023</div>
          <div className={styles.inTouch}>In Touch</div>
          <button className={styles.name}>Chicken McSpicy</button>
          <div className={styles.connection1Child} />
          <div className={styles.otherRenters}>Other Renters</div>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group2@2x.png"
          />
          <img className={styles.connection1Item} alt="" src="/vector-2.svg" />
          <button className={styles.delete3}>
            <img className={styles.vectorIcon} alt="" src="/vector17.svg" />
            <img className={styles.vectorIcon1} alt="" src="/vector15.svg" />
            <img className={styles.vectorIcon2} alt="" src="/vector16.svg" />
          </button>
        </div>
        <div className={styles.connection5}>
          <div className={styles.thMay2021}>28th Apr, 2020</div>
          <div className={styles.notInTouch}>Not In Touch</div>
          <button className={styles.name}>Quarter Pounder</button>
          <div className={styles.connection1Child} />
          <div className={styles.student}>Student</div>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group2@2x.png"
          />
          <img className={styles.connection1Item} alt="" src="/vector-2.svg" />
          <button className={styles.delete3}>
            <img className={styles.vectorIcon} alt="" src="/vector17.svg" />
            <img className={styles.vectorIcon1} alt="" src="/vector15.svg" />
            <img className={styles.vectorIcon2} alt="" src="/vector16.svg" />
          </button>
        </div>
        <div className={styles.connection6}>
          <div className={styles.thFeb2023}>5th Jan, 2023</div>
          <div className={styles.losingTouch}>Losing Touch</div>
          <button className={styles.name}>Chicken McNuggets</button>
          <div className={styles.connection1Child} />
          <div className={styles.otherRenters1}>Other Renters</div>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group2@2x.png"
          />
          <img className={styles.connection1Item} alt="" src="/vector-2.svg" />
          <button className={styles.delete5}>
            <img className={styles.vectorIcon} alt="" src="/vector17.svg" />
            <img className={styles.vectorIcon1} alt="" src="/vector18.svg" />
            <img className={styles.vectorIcon2} alt="" src="/vector16.svg" />
          </button>
        </div>
        <div className={styles.connection7}>
          <div className={styles.thJul2023}>18th Jul, 2023</div>
          <div className={styles.inTouch}>In Touch</div>
          <button className={styles.name}>Hash Brown</button>
          <div className={styles.connection1Child} />
          <div className={styles.student}>Landlord</div>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group2@2x.png"
          />
          <img className={styles.connection1Item} alt="" src="/vector-2.svg" />
          <button className={styles.delete3}>
            <img className={styles.vectorIcon} alt="" src="/vector19.svg" />
            <img className={styles.vectorIcon1} alt="" src="/vector18.svg" />
            <img className={styles.vectorIcon2} alt="" src="/vector16.svg" />
          </button>
        </div>
        <div className={styles.connection8}>
          <div className={styles.thJul2023}>3rd Dec, 2022</div>
          <div className={styles.losingTouch}>Losing Touch</div>
          <button className={styles.name}>Oreo McFlurry</button>
          <div className={styles.connection1Child} />
          <div className={styles.student}>Landlord</div>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group2@2x.png"
          />
          <img className={styles.connection1Item} alt="" src="/vector-2.svg" />
          <button className={styles.delete7}>
            <img className={styles.vectorIcon} alt="" src="/vector17.svg" />
            <img className={styles.vectorIcon1} alt="" src="/vector18.svg" />
            <img className={styles.vectorIcon2} alt="" src="/vector16.svg" />
          </button>
        </div>
      </div>
      <div className={styles.bar}>
        <button className={styles.name8}>Name</button>
        <button className={styles.lastContact}>Last Contact</button>
        <button className={styles.touch}>Touch</button>
        <div className={styles.tag}>Tag</div>
      </div>
      <div className={styles.heading}>
        <div className={styles.headingChild} />
        <div className={styles.sortByContainer}>
          <span className={styles.sortBy}>{`Sort by `}</span>
          <span>▼</span>
        </div>
        <div className={styles.filters}>
          <button className={styles.filterAll}>
            <div className={styles.filters1} />
            <div className={styles.all}>ALL</div>
          </button>
          <button className={styles.filterRegistered}>
            <div className={styles.filters2} />
            <div className={styles.registered}>REGISTERED</div>
          </button>
          <button className={styles.filterMadeup}>
            <div className={styles.filters3} />
            <div className={styles.madeUp}>MADE UP</div>
          </button>
        </div>
        <div className={styles.filter}>Filter :</div>
      </div>
      <input className={styles.searchBar} placeholder="search..." type="text" />
      <div className={styles.navFrame}>
        <div className={styles.nav}>
          <button className={styles.hamburgermenu}>
            <img className={styles.vectorIcon24} alt="" src="/vector11.svg" />
            <img className={styles.vectorIcon25} alt="" src="/vector12.svg" />
            <img className={styles.vectorIcon26} alt="" src="/vector11.svg" />
          </button>
          <nav className={styles.pages1}>
            <button className={styles.dashboard} onClick={onDashboardClick}>
              Dashboard
            </button>
            <button
              className={styles.connections2}
              onClick={onConnectionsClick}
            >
              Connections
            </button>
            <button className={styles.dashboard} onClick={onProfileClick}>
              Profile
            </button>
            <button className={styles.dashboard} onClick={onCalendarClick}>
              Calendar
            </button>
            <button className={styles.messenger} onClick={onMessengerClick}>
              Messenger
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Connections;
