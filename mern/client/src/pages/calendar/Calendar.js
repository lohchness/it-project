import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

import CalendarContainer from "../../components/calendar/CalendarContainer";
import AddActivityForm from "../../components/calendar/AddActivityForm";
import Header from "../../components/Header";

//import "./Calendar.css";
const Calendar = () => {
    const navigate = useNavigate();
    const cookies = new Cookies();
    const tokenValue = cookies.get("USER-TOKEN");

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
            <div className="calendar">
                <div className="calendar-crm-container">
                    <span>Calendar</span>
                    <span className="span">{` `}</span>
                    <span className="crm">{`> CRM`}</span>
                </div>
                <CalendarContainer />
                <AddActivityForm />
                <Header />
            </div>
        );
    }
};

export default Calendar;
