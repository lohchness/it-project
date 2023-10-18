import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

import CalendarContainer from "../../components/calendar/CalendarContainer";
import AddActivityForm from "../../components/calendar/AddActivityForm";
import Navbar from "../../components/Navbar";

//import "./Calendar.css";
const Calendar = () => {
    const navigate = useNavigate();
    const cookies = new Cookies();
    const tokenValue = cookies.get("token");

    // If token does not exist, redirect to login page
    useEffect(() => {
        if (!tokenValue) {
            navigate("/login");
        }
    }, []);

    // Check to see if JWT token exists before laoding page
    if (!tokenValue) {
        navigate("/login");
    } else {
        return (
            <>
                <Navbar />
                <div className="calendar">
                    {/* <div className="calendar-crm-container">
                        <span>Calendar</span>
                        <span className="span">{` `}</span>
                        <span className="crm">{`> CRM`}</span>
                    </div> */}
                    <div className="calendar-activity-form-container">
                        <CalendarContainer />
                        <AddActivityForm />
                    </div>
                </div>
            </>

        );
    }
};

export default Calendar;