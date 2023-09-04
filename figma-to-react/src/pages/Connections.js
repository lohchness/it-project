import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Connections.css";
const Connections = () => {
  const navigate = useNavigate();

  const onProfileTextClick = useCallback(() => {
    navigate("/profile-info-2");
  }, [navigate]);

  const onDashboardTextClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onCalendarTextClick = useCallback(() => {
    navigate("/calendar");
  }, [navigate]);

  const onNameTextClick = useCallback(() => {
    navigate("/profile-info-2");
  }, [navigate]);

  return (
    <div className="connections3">
      <div className="navigation-bar3">
        <div className="navigation-bar-child1" />
        <div className="profile3" onClick={onProfileTextClick}>
          Profile
        </div>
        <div className="dashboard3" onClick={onDashboardTextClick}>
          Dashboard
        </div>
        <div className="connections4">Connections</div>
        <div className="calendar2" onClick={onCalendarTextClick}>
          Calendar
        </div>
        <img className="dashboard-icon3" alt="" src="/dashboard-icon3.svg" />
      </div>
      <div className="username4">
        <div className="username-child1" />
        <img className="vector-icon3" alt="" src="/vector3.svg" />
        <div className="username5">Username</div>
        <img className="mask-group-icon3" alt="" src="/mask-group@2x.png" />
      </div>
      <img className="connections-child" alt="" src="/rectangle-54.svg" />
      <img
        className="interface-add-square-square-r-icon"
        alt=""
        src="/interfaceaddsquaresquareremovecrossbuttonsaddplusbutton.svg"
      />
      <div className="connection1">
        <div className="hours-ago">2 hours ago</div>
        <div className="in-touch">In Touch</div>
        <img className="avatar-icon" alt="" src="/avatar@2x.png" />
        <div className="name2" onClick={onNameTextClick}>
          Aidan Tang
        </div>
        <div className="connection1-child" />
        <div className="student">Student</div>
        <img className="connection1-item" alt="" src="/vector-1.svg" />
        <img className="delete-icon4" alt="" src="/delete2.svg" />
      </div>
      <div className="connection2">
        <div className="th-feb-2023">9th Feb, 2023</div>
        <div className="losing-touch">Losing Touch</div>
        <div className="name3">Bunny Superlonglas...</div>
        <div className="connection2-child" />
        <div className="landlord">Landlord</div>
        <img className="avatar-icon" alt="" src="/mask-group@2x.png" />
        <img className="connection2-item" alt="" src="/vector-1.svg" />
        <img className="delete-icon5" alt="" src="/delete2.svg" />
      </div>
      <div className="connection3">
        <div className="th-may-2021">14th May, 2021</div>
        <div className="not-in-touch">Not In Touch</div>
        <div className="name3">Name Lastname</div>
        <div className="connection2-child" />
        <div className="landlord">Landlord</div>
        <img className="avatar-icon" alt="" src="/mask-group@2x.png" />
        <img className="connection2-item" alt="" src="/vector-1.svg" />
        <img className="delete-icon6" alt="" src="/delete2.svg" />
      </div>
      <div className="connection4">
        <div className="th-aug-2023">22th Aug, 2023</div>
        <div className="in-touch">In Touch</div>
        <div className="name3">Chicken McSpicy</div>
        <div className="connection2-child" />
        <div className="other-renters1">Other Renters</div>
        <img className="avatar-icon" alt="" src="/mask-group@2x.png" />
        <img className="connection2-item" alt="" src="/vector-1.svg" />
        <img className="delete-icon7" alt="" src="/delete2.svg" />
      </div>
      <div className="connection5">
        <div className="th-may-2021">28th Apr, 2020</div>
        <div className="not-in-touch">Not In Touch</div>
        <div className="name3">Quarter Pounder</div>
        <div className="connection2-child" />
        <div className="landlord">Student</div>
        <img className="avatar-icon" alt="" src="/mask-group@2x.png" />
        <img className="connection2-item" alt="" src="/vector-1.svg" />
        <img className="delete-icon7" alt="" src="/delete3.svg" />
      </div>
      <div className="connection6">
        <div className="th-feb-2023">5th Jan, 2023</div>
        <div className="losing-touch">Losing Touch</div>
        <div className="name3">Chicken McNuggets</div>
        <div className="connection2-child" />
        <div className="other-renters2">Other Renters</div>
        <img className="avatar-icon" alt="" src="/mask-group@2x.png" />
        <img className="connection2-item" alt="" src="/vector-1.svg" />
        <img className="delete-icon9" alt="" src="/delete3.svg" />
      </div>
      <div className="connection7">
        <div className="th-jul-2023">18th Jul, 2023</div>
        <div className="in-touch">In Touch</div>
        <div className="name3">Hash Brown</div>
        <div className="connection2-child" />
        <div className="landlord">Landlord</div>
        <img className="avatar-icon" alt="" src="/mask-group@2x.png" />
        <img className="connection2-item" alt="" src="/vector-1.svg" />
        <img className="delete-icon7" alt="" src="/delete3.svg" />
      </div>
      <div className="connection8">
        <div className="th-jul-2023">3rd Dec, 2022</div>
        <div className="losing-touch">Losing Touch</div>
        <div className="name3">Oreo McFlurry</div>
        <div className="connection2-child" />
        <div className="landlord">Landlord</div>
        <img className="avatar-icon" alt="" src="/mask-group@2x.png" />
        <img className="connection2-item" alt="" src="/vector-1.svg" />
        <img className="delete-icon11" alt="" src="/delete3.svg" />
      </div>
      <div className="add-new-connection">Add New Connection</div>
      <div className="bar2">
        <div className="name10">Name</div>
        <div className="last-contact">Last Contact</div>
        <div className="touch">Touch</div>
        <div className="tag">Tag</div>
      </div>
      <div className="heading">
        <div className="heading-child" />
        <div className="sort-by-container">
          <span className="sort-by">{`Sort by `}</span>
          <span>▼</span>
        </div>
        <div className="filters">
          <div className="filter-all">
            <div className="filters1" />
            <div className="all">ALL</div>
          </div>
          <div className="filter-registered">
            <div className="filters2" />
            <div className="registered">REGISTERED</div>
          </div>
          <div className="filter-madeup">
            <div className="filters3" />
            <div className="made-up">MADE UP</div>
          </div>
        </div>
        <div className="filter">Filter :</div>
      </div>
      <div className="search-bar">
        <div className="search-bar-child" />
        <div className="search1">search...</div>
      </div>
      <div className="connections-crm-container">
        <span className="sort-by">Connections</span>
        <span className="crm2">{` > CRM`}</span>
      </div>
      <div className="showing-8-out">Showing 8 out of 254 Results</div>
      <div className="pages">
        <div className="page1">
          <div className="page1-child" />
          <div className="div3">1</div>
        </div>
        <div className="page2">
          <div className="page2-child" />
          <div className="div4">2</div>
        </div>
        <div className="page">
          <div className="page2-child" />
          <div className="div4">...</div>
        </div>
        <div className="page31">
          <div className="page2-child" />
          <div className="div6">31</div>
        </div>
        <div className="page32">
          <div className="page2-child" />
          <div className="div7">32</div>
        </div>
      </div>
    </div>
  );
};

export default Connections;
