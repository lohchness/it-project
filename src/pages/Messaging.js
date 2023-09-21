import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Messaging.module.css";

const Messaging = () => {
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

  const onCalenderTextClick = useCallback(() => {
    navigate("/calendar");
  }, [navigate]);

  const onMessengerTextClick = useCallback(() => {
    navigate("/messaging");
  }, [navigate]);

  return (
    <div className={styles.messaging}>
      <img
        className={styles.navigationBarIcon}
        alt=""
        src="/navigation-bar.svg"
      />
      <div className={styles.username}>
        <div className={styles.usernameChild} />
        <img className={styles.vectorIcon} alt="" src="/vector13.svg" />
        <div className={styles.username1}>Username</div>
        <img
          className={styles.maskGroupIcon}
          alt=""
          src="/mask-group1@2x.png"
        />
      </div>
      <div className={styles.searchbar}>
        <div className={styles.searchbar1} />
        <img className={styles.bxsearchIcon} alt="" src="/bxsearch.svg" />
        <div className={styles.search}>Search</div>
      </div>
      <div className={styles.groupchats}>
        <div className={styles.groupchatsChild} />
        <div className={styles.groupchatsItem} />
        <div className={styles.groupchatsInner} />
        <b className={styles.groups}>Groups</b>
        <div className={styles.hiking}>
          <img className={styles.hikingChild} alt="" src="/ellipse-17@2x.png" />
          <div className={styles.wednesday912am}>Wednesday, 9.12am</div>
          <div className={styles.itsNotGoing}>It’s not going to happen</div>
          <div className={styles.hiking1}>Hiking</div>
          <img
            className={styles.phnumberCircleOneFillIcon}
            alt=""
            src="/phnumbercircleonefill.svg"
          />
        </div>
        <div className={styles.hiking2}>
          <img className={styles.hikingChild} alt="" src="/ellipse-17@2x.png" />
          <div className={styles.wednesday912am}>Wednesday, 9.12am</div>
          <div className={styles.itsNotGoing}>It’s not going to happen</div>
          <div className={styles.hiking1}>Hiking</div>
          <img
            className={styles.phnumberCircleOneFillIcon}
            alt=""
            src="/phnumbercircleonefill.svg"
          />
        </div>
        <div className={styles.hiking4}>
          <img className={styles.hikingChild} alt="" src="/ellipse-17@2x.png" />
          <div className={styles.wednesday912am}>Wednesday, 9.12am</div>
          <div className={styles.itsNotGoing}>It’s not going to happen</div>
          <div className={styles.hiking1}>Hiking</div>
          <img
            className={styles.phnumberCircleOneFillIcon}
            alt=""
            src="/phnumbercircleonefill.svg"
          />
        </div>
      </div>
      <div className={styles.mainChatBox}>
        <img
          className={styles.mainChatBoxChild}
          alt=""
          src="/rectangle-6.svg"
        />
        <div className={styles.input}>
          <img className={styles.inputChild} alt="" src="/group-2213.svg" />
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.typeYourMessage}>
              Type your message here...
            </div>
            <img
              className={styles.fluentcamera24RegularIcon}
              alt=""
              src="/fluentcamera24regular.svg"
            />
            <img
              className={styles.fluentemojiLaugh16RegularIcon}
              alt=""
              src="/fluentemojilaugh16regular.svg"
            />
            <img
              className={styles.antDesignpaperClipOutlinedIcon}
              alt=""
              src="/antdesignpaperclipoutlined.svg"
            />
          </div>
        </div>
        <div className={styles.mainChatBoxItem} />
        <div className={styles.talkingTo}>
          <div className={styles.talkingToChild} />
          <div className={styles.talkingToItem} />
          <div className={styles.talkingToInner} />
          <div className={styles.heyThere}>Hey There!</div>
          <div className={styles.howAreYou}>How are you?</div>
          <div className={styles.iAmDoing}>
            I am doing well, Can we meet tomorrow?
          </div>
          <div className={styles.ellipseDiv} />
          <div className={styles.talkingToChild1} />
          <div className={styles.talkingToChild2} />
          <div className={styles.today830pm}>Today, 8.30pm</div>
          <div className={styles.today836pm}>Today, 8.36pm</div>
        </div>
        <div className={styles.ourMsgs}>
          <div className={styles.ourMsgsChild} />
          <div className={styles.ourMsgsItem} />
          <div className={styles.ourMsgsInner} />
          <div className={styles.hello}>Hello!</div>
          <div className={styles.iAmFine}>I am fine and how are you?</div>
          <div className={styles.yesSure}>Yes Sure!</div>
          <div className={styles.ourMsgsChild1} />
          <div className={styles.ourMsgsChild2} />
          <div className={styles.ourMsgsChild3} />
          <div className={styles.today833pm}>Today, 8.33pm</div>
          <div className={styles.today834pm}>Today, 8.34pm</div>
          <div className={styles.today858pm}>Today, 8.58pm</div>
        </div>
        <div className={styles.ourAvatar}>
          <img
            className={styles.ourAvatarChild}
            alt=""
            src="/ellipse-11@2x.png"
          />
          <div className={styles.onlineLast}>Online - Last seen, 2.02pm</div>
          <div className={styles.anil}>Anil</div>
        </div>
      </div>
      <div className={styles.people}>
        <div className={styles.people1} />
        <b className={styles.people2}>People</b>
        <div className={styles.peopleChild} />
        <div className={styles.peopleItem} />
        <div className={styles.peopleInner} />
        <div className={styles.lineDiv} />
        <img className={styles.lineIcon} alt="" src="/line-14.svg" />
        <div className={styles.chatbox1}>
          <img
            className={styles.chatbox1Child}
            alt=""
            src="/ellipse-12@2x.png"
          />
          <div className={styles.today952pm}>Today, 9.52pm</div>
          <div className={styles.anil1}>Anil</div>
          <div className={styles.aprilFoolsDay}>April fool’s day</div>
          <img
            className={styles.charmtickDoubleIcon}
            alt=""
            src="/charmtickdouble.svg"
          />
        </div>
        <div className={styles.chatbox5}>
          <img
            className={styles.chatbox1Child}
            alt=""
            src="/ellipse-12@2x.png"
          />
          <div className={styles.today952pm}>Today, 9.52pm</div>
          <div className={styles.aprilFoolsDay}>April fool’s day</div>
          <img
            className={styles.charmtickDoubleIcon}
            alt=""
            src="/charmtickdouble.svg"
          />
          <div className={styles.victoriaH}>Victoria H</div>
        </div>
        <div className={styles.chatbox2}>
          <img
            className={styles.phnumberCircleOneFillIcon3}
            alt=""
            src="/phnumbercircleonefill.svg"
          />
          <div className={styles.today1211pm}>Today, 12.11pm</div>
          <div className={styles.baag}>Baag</div>
          <img
            className={styles.chatbox2Child}
            alt=""
            src="/ellipse-18@2x.png"
          />
          <div className={styles.chuuthiya}>Chuuthiya</div>
        </div>
        <div className={styles.chatbox3}>
          <img
            className={styles.phnumberCircleOneFillIcon4}
            alt=""
            src="/phnumbercircleonefill.svg"
          />
          <div className={styles.today1211pm1}>Today, 12.11pm</div>
          <div className={styles.baag1}>Baag</div>
          <img
            className={styles.chatbox3Child}
            alt=""
            src="/ellipse-18@2x.png"
          />
          <div className={styles.maryMaam}>Mary ma’am</div>
        </div>
        <div className={styles.chatbox4}>
          <img
            className={styles.phnumberCircleOneFillIcon4}
            alt=""
            src="/phnumbercircleonefill.svg"
          />
          <div className={styles.today1211pm1}>Today, 12.11pm</div>
          <div className={styles.baag1}>Baag</div>
          <img
            className={styles.chatbox3Child}
            alt=""
            src="/ellipse-18@2x.png"
          />
          <div className={styles.maryMaam}>Mary ma’am</div>
        </div>
      </div>
      <div className={styles.navFrame}>
        <div className={styles.nav}>
          <button className={styles.hamburgermenu}>
            <img className={styles.vectorIcon1} alt="" src="/vector11.svg" />
            <img className={styles.vectorIcon2} alt="" src="/vector12.svg" />
            <img className={styles.vectorIcon3} alt="" src="/vector11.svg" />
          </button>
          <nav className={styles.pages}>
            <div className={styles.dashboard} onClick={onDashboardTextClick}>
              Dashboard
            </div>
            <div
              className={styles.connections}
              onClick={onConnectionsTextClick}
            >
              Connections
            </div>
            <div className={styles.dashboard} onClick={onProfileTextClick}>
              Profile
            </div>
            <div className={styles.connections} onClick={onCalenderTextClick}>
              Calender
            </div>
            <div className={styles.messenger} onClick={onMessengerTextClick}>
              Messenger
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Messaging;
