import React, { useCallback, useState, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import "./Navbar.css";
import { SERVER_URL } from "../index.js";


const Navbar = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState(null);
    const [navMenuVisible, setNavMenuVisible] = useState(false);

  const onLogoutClick = useCallback(() => {
    const tokenValue = cookies.get("token");
    if (tokenValue) {
      cookies.remove("token");
    }
    navigate("/login");
  }, [navigate]);

    const onHamburgerMenuClick = () => {
        if (navMenuVisible) {
            setNavMenuVisible(false);
        } else {
            setNavMenuVisible(true);
        }
    }

    return (
        <div className="nav-bar-wrapper">
            <div className="nav-bar">
                <div className="hamburgermenu" onClick={onHamburgerMenuClick}>
                    <img src="/Vector.png" height="17px" width="17px"/>
                </div> 
               
                <nav className={`pages-wrapper ${navMenuVisible ? 'visible' : ''}`}>
                    <NavLink className={nav => (nav.isActive ? "page-link current-page" : "page-link")} to="/dashboard" >
                        Dashboard
                    </NavLink>
                    <NavLink className={nav => (nav.isActive ? "page-link current-page" : "page-link")} to="/connections" >
                        Connections
                    </NavLink>
                    <NavLink className={nav => (nav.isActive ? "page-link current-page" : "page-link")} to="/profile" >
                        Profile
                    </NavLink>
                    <NavLink className={nav => (nav.isActive ? "page-link current-page" : "page-link")} to="/calendar" >
                        Calendar
                    </NavLink>
                    <NavLink className={nav => (nav.isActive ? "page-link current-page" : "page-link")} to="/messaging" >
                        Messaging
                    </NavLink>
                </nav>
                <button className="logout-button" onClick={onLogoutClick}>
                    <img src="/logout-icon.png" height="25px" width="25px"/>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
