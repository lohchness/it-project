import { useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

import "./Navbar.css";

const Navbar = () => {
    const navigate = useNavigate();
    const cookies = new Cookies();

    const onLogoutClick = useCallback(() => {
        // clear jwt token
        cookies.remove("token");
        navigate("/login");
    }, [navigate]);

    return (
        <div className="nav-bar-wrapper">
            <div className="nav-bar">
                {/* only needed when page is resized to be very narrow
                <div className="hamburgermenu">
                    <img src="/Vector.png" height="17px" width="17px"/>
                </div> 
                */}
                <nav className="pages-wrapper">
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
