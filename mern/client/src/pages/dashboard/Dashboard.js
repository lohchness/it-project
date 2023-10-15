import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

import TaskContainer from "../../components/dashboard/TaskContainer";
import UpcomingEventsContainer from "../../components/dashboard/UpcomingEventsContainer";
import ConnectionsForm from "../../components/dashboard/ConnectionsForm";

import Navbar from "../../components/Navbar";
import "./Dashboard.css";

const Dashboard = () => {
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
            <div className="dashboard">
                <Navbar />
                <div className="dashboard-crm-container">
                    <span className="span">{` Dashboard `}</span>
                    <span className="crm">{`> CRM`}</span>
                </div>
                <TaskContainer />
                <div className="total-connections">
                    <div className="connections-made-this">Total connections</div>
                    <div className="total-connect">254</div>
                </div>
                <div className="monthly-connections">
                    <div className="connections-made-this">Connections made this month</div>
                    <div className="monthly-connect">22</div>
                </div>
                <UpcomingEventsContainer />
                <ConnectionsForm />
            </div>
        );
    }
};

export default Dashboard;
