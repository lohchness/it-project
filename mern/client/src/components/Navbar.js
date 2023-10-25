import React, { useCallback, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import "./Navbar.css";
import { SERVER_URL } from "../index.js";


const Navbar = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState(null);

  const onLogoutClick = useCallback(() => {
    const tokenValue = cookies.get("token");
    if (tokenValue) {
      cookies.remove("token");
    }
    navigate("/login");
  }, [navigate]);

//   const onConnectionsClick = () => {
//     // Set userEmail to null when navigating to "Connections"
//     setUserEmail(null);
//     navigate("/connections");
//   };

//   const onProfileClick = () => {
//     // Set userEmail to the current user's email when navigating to "Profile"
//     fetchUserEmail();
//   };

  const fetchUserEmail = async () => {
    const tokenValue = cookies.get("token");
    if (tokenValue) {
      cookies.remove("token");
    }
    try {
        
      const emailResponse = await fetch(`${SERVER_URL}/user/get-current-user`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${tokenValue}`
        }
      });
      const emailData = await emailResponse.json();
      const userEmail_tmp = emailData.user.userEmail;
      setUserEmail(userEmail_tmp);
    } catch (error) {
      console.error("Error fetching user email:", error);
    }
  };

  return (
    <div className="nav-bar-wrapper">
      <div className="nav-bar">
        <nav className="pages-wrapper">
          <NavLink to="/dashboard" className="page-link" end>
            Dashboard
          </NavLink>
          <NavLink to="/connections" className="page-link" end>
            Connections
          </NavLink>
          <NavLink to="/profile" className="page-link" end>
            Profile
          </NavLink>
          <NavLink to="/calendar" className="page-link" end>
            Calendar
          </NavLink>
          <NavLink to="/messaging" className="page-link" end>
            Messaging
          </NavLink>
        </nav>
        <button className="logout-button" onClick={onLogoutClick}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
