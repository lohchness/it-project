import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfileInfo2.css";
const ProfileInfo2 = () => {
  const navigate = useNavigate();

  const onGroupContainer2Click = useCallback(() => {
    navigate("/messaging");
  }, [navigate]);

  const onProfileTextClick = useCallback(() => {
    navigate("/profile-info-2");
  }, [navigate]);

  const onCalendarTextClick = useCallback(() => {
    navigate("/calendar");
  }, [navigate]);

  return (
    <div className="profile-info-2">
      <div className="profile-info-2-child" />
      <div className="profile-info-2-item" />
      <img className="profile-info-2-inner" alt="" src="/vector-31.svg" />
      <div className="profile-info-2-child1" />
      <b className="blah">{`Upcoming Events `}</b>
      <img className="experience-tab-icon" alt="" src="/experience-tab.svg" />
      <div className="experience-tab">
        <img className="experience-tab-child" alt="" src="/rectangle-52.svg" />
        <div className="interface-text-formatting-list" />
        <div className="interface-delete-bin-1-remove" />
        <div className="contact-history-1">
          <div className="rectangle" />
          <div className="name">{`Planned Meeting `}</div>
          <div className="lastcontact">16/08/2022</div>
          <div className="touchstatus">{`Assign pages that the group members must individual design. `}</div>
          <img
            className="interface-delete-bin-1-remove-icon"
            alt=""
            src="/interfacedeletebin1removedeleteemptybintrashgarbage.svg"
          />
        </div>
      </div>
      <div className="contact-history-2">
        <div className="rectangle" />
        <div className="name">{`Assign task `}</div>
        <div className="lastcontact">17/08/2022</div>
        <div className="touchstatus">
          Assign task to design profile page UI.
        </div>
        <img className="group-icon" alt="" src="/group.svg" />
      </div>
      <div className="notes">
        <img className="notes-child" alt="" src="/rectangle-61.svg" />
        <div className="discussed-how-to-container">
          <ul className="discussed-how-to">{`Discussed how to ................................., suggested to .................... about the thing. `}</ul>
        </div>
        <div className="discussed-how-to-container1">
          <ul className="discussed-how-to">{`Discussed how to ................................., suggested to .................... about the thing. `}</ul>
        </div>
        <b className="notes1">Notes</b>
        <b className="aug-2nd">Aug 2nd</b>
        <b className="sept-23rd">
          <span>Sept 23rd</span>
          <span className="span1">{` `}</span>
        </b>
        <div className="notes-item" />
      </div>
      <div className="contact-info">
        <div className="contact-info-child" />
        <div className="blahemailcom">blah@email.com</div>
        <img className="icon-mail" alt="" src="/-icon-mail.svg" />
        <div className="div2">+12 34567890</div>
        <img className="icon-call1" alt="" src="/vector1.svg" />
        <div className="address">
          <div className="house-street-city">house, street, city</div>
          <img
            className="icon-location-sharp"
            alt=""
            src="/-icon-location-sharp.svg"
          />
        </div>
        <b className="blah1">Contact Info</b>
      </div>
      <div className="wdawfjkafnjkenjfnejfknakjenfjn">
        wdawfjkafnjkenjfnejfknakjenfjnajkefjkajfaefnkajefjanfjkanfkjanjkfnajkfnjakfnfjaejv
        ak vak vakejkavnajevnajkv aev aej va jekvja vaj vja vak
      </div>
      <div className="awdkmakwdka-wdaw-daw">
        awdkmakwdka wdaw daw da wd awd a wd
      </div>
      <b className="about-me">About Me</b>
      <div className="profile-info-2-child2" />
      <div className="rectangle-group">
        <div className="group-item" />
        <b className="contact-history">Contact History</b>
        <div className="interface-arrows-button-up-ar" />
      </div>
      <img
        className="interface-setting-menu-1-butt-icon"
        alt=""
        src="/interfacesettingmenu1buttonparallelhorizontallinesmenunavigationthreehamburger.svg"
      />
      <div className="fields">
        <b className="type">Type</b>
        <b className="description2">Description</b>
        <b className="date4">Date</b>
      </div>
      <div className="experience-tab-wrapper">
        <div className="experience-tab1">
          <img className="experience-tab-item" alt="" src="/rectangle-53.svg" />
          <b className="blah2">EMPTY</b>
          <div className="experience-tab-inner" />
        </div>
      </div>
      <div className="rectangle-container" onClick={onGroupContainer2Click}>
        <div className="group-inner" />
        <b className="contact-name">Contact ...Name</b>
      </div>
      <img className="group-icon1" alt="" src="/group1.svg" />
      <div className="group-div">
        <div className="group-child1" />
        <b className="experiences">
          <p className="experiences1">Experiences</p>
        </b>
        <div className="group-child2" />
      </div>
      <img
        className="interface-setting-menu-1-butt-icon1"
        alt=""
        src="/interfacesettingmenu1buttonparallelhorizontallinesmenunavigationthreehamburger.svg"
      />
      <div className="event-21">
        <div className="assign-task">Room Tour with Aiden Tang</div>
        <div className="pm-3pm">4:00pm - 4:30pm</div>
        <div className="alan-gilbert-building1">Alan Gilbert Building G01</div>
        <div className="date5">
          <div className="date-child1" />
          <div className="aug4">
            <p className="experiences1">
              <b className="b3">26</b>
            </p>
            <p className="aug5">Aug</p>
          </div>
        </div>
      </div>
      <div className="event-31">
        <div className="assign-task">Assign task</div>
        <div className="pm-3pm">2pm - 3pm</div>
        <div className="alan-gilbert-building1">Alan Gilbert Building G01</div>
        <div className="date5">
          <div className="date-child1" />
          <div className="aug4">
            <p className="experiences1">
              <b className="b3">26</b>
            </p>
            <p className="aug5">Aug</p>
          </div>
        </div>
      </div>
      <div className="bar1">
        <div className="date7">Date</div>
        <div className="description3">Description</div>
        <div className="time1">Time</div>
        <div className="location1">Location</div>
      </div>
      <div className="navigation-bar1">
        <div className="navigation-bar-item" />
        <div className="profile1" onClick={onProfileTextClick}>
          Profile
        </div>
        <div className="dashboard1">Dashboard</div>
        <div className="connections1">Connections</div>
        <div className="calendar1" onClick={onCalendarTextClick}>
          Calendar
        </div>
        <img className="dashboard-icon1" alt="" src="/dashboard-icon1.svg" />
      </div>
      <div className="profile-crm-container">
        <span>Profile</span>
        <span className="crm1">{` > CRM`}</span>
      </div>
    </div>
  );
};

export default ProfileInfo2;
