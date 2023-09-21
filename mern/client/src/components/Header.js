import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const navigate = useNavigate();
  const onDashboardTextClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onConnectionsTextClick = useCallback(() => {
    navigate("/connections");
  }, [navigate]);

  const onProfileTextClick = useCallback(() => {
    navigate("/profile-info-2");
  }, [navigate]);

  const onCalenderTextClick = useCallback(() => {
    navigate("/calendar");
  }, [navigate]);

  const onMessengerTextClick = useCallback(() => {
    navigate("/messaging");
  }, [navigate]);

  return (
    <div className="nav-bar-wrapper">
      <div className="nav-bar">
        <div className="hamburgermenu">
          <img src="/Vector.png" height="17px" width="17px"/>
        </div>
        <nav className="pages-wrapper">
          <div className="pages" onClick ={onDashboardTextClick}>
            Dashboard
          </div>
          <div className="pages" onClick={onConnectionsTextClick}>
            Connections
          </div>
          <div className="pages" onClick={onProfileTextClick}>
            Profile
          </div>
          <div className="pages" onClick={onCalenderTextClick}>
            Calender
          </div>
          <div className="pages" onClick={onMessengerTextClick}>
            Messenger
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
