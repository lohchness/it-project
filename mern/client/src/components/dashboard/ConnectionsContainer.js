import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import "../../pages/dashboard/Dashboard.css";
import "./ConnectionsContainer.css";

const ConnectionsContainer = () => {
    const navigate = useNavigate();

    const onShowMoreTextClick = useCallback(() => {
        navigate("/connections");
    }, [navigate]);

    return (
        <div className="connections-container dashboard-widget">
            <h2 className="widget-heading">Connections</h2>

            <div className="connection-fields">
                <div className="name-field">Name</div>
                <div className="last-contact-field">
                    Last Contact
                    <img className="interface-page-controller-scro-icon" src="/undefined10.png"/>
                </div>
                <div className="touch-field">Touch</div>
                <div className="tag-field">
                    Tag 
                    <img className="interface-page-controller-scro-icon" src="/undefined10.png"/>
                </div>
            </div>

            <a className="show-more-button" onClick={onShowMoreTextClick}>Show More</a>
        </div>
    );
};

export default ConnectionsContainer;
