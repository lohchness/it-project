import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

import ContactHistorySectionContainer from "../../components/profile/ContactHistorySectionContainer";
import NoteSectionContainer from "../../components/profile/NoteSectionContainer";
import ExperienceSection from "../../components/profile/ExperienceSection";
import UpcomingEventsSectionContainer from "../../components/profile/UpcomingEventsSectionContainer";
import ContactFormContainer from "../../components/profile/ContactFormContainer";

import Header from "../../components/Header";
import styles from "./Profile.module.css";

const Profile = () => {
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
    } 
    return (
        <div className={styles.profile}>
            <div className={styles.profilecrmFrame}>
                <div className={styles.profileCrmContainer}>
                    <span>Profile</span>
                    <span className={styles.span}>{` `}</span>
                    <span className={styles.crm}>{`> CRM`}</span>
                </div>
            </div>
            <div className={styles.historyFrame}>
                <ContactHistorySectionContainer />
            </div>
            <div className={styles.noteFrame}>
                <NoteSectionContainer />
            </div>
            <div className={styles.experienceFrame}>
                <ExperienceSection />
            </div>
            <div className={styles.eventFrame}>
                <UpcomingEventsSectionContainer />
            </div>
            <div className={styles.detailFrame}>
                <div className={styles.detailsSection}>
                    <ContactFormContainer />
                </div>
            </div>
            <Header />

        </div>
    );
};

export default Profile;