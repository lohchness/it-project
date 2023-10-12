import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ConnectionsForm.css";
const ConnectionsForm = () => {
  const navigate = useNavigate();

  const onShowMoreTextClick = useCallback(() => {
    navigate("/calendar");
  }, [navigate]);

  return (
    <div className="connections6">
      <div className="tasks-heading1">
        <div className="connections7">Connections</div>
      </div>
      <input className="search-bar1" placeholder="search..." type="text" />
      <a className="show-more2">
        <img
          className="interface-calendar-blank-cale-icon1"
          alt=""
          src="/undefined7.png"
        />
        <div className="show-more3" onClick={onShowMoreTextClick}>
          Show More
        </div>
      </a>
      <div className="bar1">
        <div className="name9">Name</div>
        <div className="last-contact-parent">
          <div className="last-contact1">Last Contact</div>
          <img
            className="interface-page-controller-scro-icon"
            alt=""
            src="/undefined10.png"
          />
        </div>
        <div className="touch1">Touch</div>
        <div className="last-contact-parent">
          <div className="tag1">{`Tag `}</div>
          <img
            className="interface-page-controller-scro-icon"
            alt=""
            src="/undefined10.png"
          />
        </div>
      </div>


    </div>
  );
};

export default ConnectionsForm;
