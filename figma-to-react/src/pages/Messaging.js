import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Messaging.css";
const Messaging = () => {
  const navigate = useNavigate();

  const onCalenderTextClick = useCallback(() => {
    navigate("/calendar");
  }, [navigate]);

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
    <div className="messaging">
      <div className="navigation-bar2">
        <div className="navigation-bar-inner" />
        <div className="calender" onClick={onCalenderTextClick}>
          Calender
        </div>
        <div className="profile2" onClick={onProfileTextClick}>
          Profile
        </div>
        <div className="dashboard2" onClick={onDashboardTextClick}>
          Dashboard
        </div>
        <div className="connections2" onClick={onConnectionsTextClick}>
          Connections
        </div>
        <div className="messenger">Messenger</div>
        <img className="dashboard-icon2" alt="" src="/dashboard-icon2.svg" />
      </div>
      <div className="username2">
        <div className="username-inner" />
        <img className="vector-icon2" alt="" src="/vector2.svg" />
        <div className="username3">Username</div>
        <img className="mask-group-icon2" alt="" src="/mask-group2@2x.png" />
      </div>
      <img className="messaging-child" alt="" src="/rectangle-62.svg" />
      <img className="messaging-item" alt="" src="/ellipse-11@2x.png" />
      <div className="messaging-inner" />
      <div className="messaging-child1" />
      <img
        className="fluentcamera-24-regular-icon"
        alt=""
        src="/fluentcamera24regular.svg"
      />
      <img
        className="fluentemoji-laugh-16-regular-icon"
        alt=""
        src="/fluentemojilaugh16regular.svg"
      />
      <img
        className="ant-designpaper-clip-outlined-icon"
        alt=""
        src="/antdesignpaperclipoutlined.svg"
      />
      <div className="anil">Anil</div>
      <div className="online-last">Online - Last seen, 2.02pm</div>
      <div className="today-830pm">Today, 8.30pm</div>
      <div className="today-836pm">Today, 8.36pm</div>
      <div className="today-833pm">Today, 8.33pm</div>
      <div className="today-834pm">Today, 8.34pm</div>
      <div className="today-858pm">Today, 8.58pm</div>
      <div className="type-your-message">Type your message here...</div>
      <div className="line-div" />
      <img
        className="bithree-dots-vertical-icon"
        alt=""
        src="/bithreedotsvertical.svg"
      />
      <img className="ciphone-outline-icon" alt="" src="/ciphoneoutline.svg" />
      <img
        className="fluentvideo-16-regular-icon"
        alt=""
        src="/fluentvideo16regular.svg"
      />
      <img className="bimic-fill-icon" alt="" src="/bimicfill.svg" />
      <div className="messaging-child2" />
      <div className="messaging-child3" />
      <div className="messaging-child4" />
      <div className="messaging-child5" />
      <div className="messaging-child6" />
      <div className="messaging-child7" />
      <div className="ellipse-div" />
      <div className="messaging-child8" />
      <div className="messaging-child9" />
      <div className="messaging-child10" />
      <div className="messaging-child11" />
      <div className="messaging-child12" />
      <div className="hey-there">Hey There!</div>
      <div className="how-are-you">How are you?</div>
      <div className="i-am-doing">I am doing well, Can we meet tomorrow?</div>
      <div className="hello">Hello!</div>
      <div className="i-am-fine">I am fine and how are you?</div>
      <div className="yes-sure">Yes Sure!</div>
      <div className="messaging-child13" />
      <div className="messaging-child14" />
      <div className="messaging-child15" />
      <img className="ellipse-icon" alt="" src="/ellipse-111@2x.png" />
      <img className="messaging-child16" alt="" src="/ellipse-12@2x.png" />
      <img className="messaging-child17" alt="" src="/ellipse-13@2x.png" />
      <img className="messaging-child18" alt="" src="/ellipse-14@2x.png" />
      <img className="messaging-child19" alt="" src="/ellipse-15@2x.png" />
      <img className="messaging-child20" alt="" src="/ellipse-16@2x.png" />
      <img className="messaging-child21" alt="" src="/ellipse-17@2x.png" />
      <img className="messaging-child22" alt="" src="/ellipse-18@2x.png" />
      <img
        className="charmtick-double-icon"
        alt=""
        src="/charmtickdouble.svg"
      />
      <img
        className="charmtick-double-icon1"
        alt=""
        src="/charmtickdouble1.svg"
      />
      <img
        className="phnumber-circle-five-fill-icon"
        alt=""
        src="/phnumbercirclefivefill.svg"
      />
      <img
        className="phnumber-circle-four-fill-icon"
        alt=""
        src="/phnumbercirclefourfill.svg"
      />
      <img
        className="phnumber-circle-one-fill-icon"
        alt=""
        src="/phnumbercircleonefill.svg"
      />
      <img
        className="phnumber-circle-one-fill-icon1"
        alt=""
        src="/phnumbercircleonefill1.svg"
      />
      <img className="bxsearch-icon" alt="" src="/bxsearch.svg" />
      <div className="search">Search</div>
      <div className="friends-forever">Friends Forever</div>
      <div className="anil1">Anil</div>
      <div className="bill-gates">Bill Gates</div>
      <div className="mary-maam">Mary ma’am</div>
      <div className="hahahahah">Hahahahah!</div>
      <div className="april-fools-day">April fool’s day</div>
      <div className="nevermind-bro">Nevermind bro</div>
      <div className="today-952pm">Today, 9.52pm</div>
      <div className="today-952pm1">Today, 9.52pm</div>
      <div className="today-240pm">Today, 2.40pm</div>
      <div className="yesterday-1231pm">Yesterday, 12.31pm</div>
      <div className="today-1211pm">Today, 12.11pm</div>
      <div className="yesterday-1231pm1">Yesterday, 12.31pm</div>
      <div className="wednesday-912am">Wednesday, 9.12am</div>
      <div className="wednesday-1112am">Wednesday, 11.12am</div>
      <div className="kyuuuuu">Kyuuuuu???</div>
      <div className="baag">Baag</div>
      <div className="okay-brother-lets">Okay, brother. let’s see...</div>
      <div className="its-not-going">It’s not going to happen</div>
      <div className="you-have-to">You have to report it...</div>
      <div className="mera-gang">Mera Gang</div>
      <div className="chuuthiya">Chuuthiya</div>
      <div className="victoria-h">Victoria H</div>
      <div className="hiking">Hiking</div>
      <b className="groups">Groups</b>
      <b className="people">People</b>
      <div className="messaging-child23" />
      <div className="messaging-child24" />
      <div className="messaging-child25" />
      <div className="messaging-child26" />
      <div className="messaging-child27" />
      <div className="messaging-child28" />
      <img className="line-icon" alt="" src="/line-14.svg" />
    </div>
  );
};

export default Messaging;
