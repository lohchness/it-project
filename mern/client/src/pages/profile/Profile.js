import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

import ContactHistorySectionContainer from "../../components/profile/ContactHistorySectionContainer";
import NoteSectionContainer from "../../components/profile/NoteSectionContainer";
import ExperienceSection from "../../components/profile/ExperienceSection";
import UpcomingEventsSectionContainer from "../../components/profile/UpcomingEventsSectionContainer";
import ContactFormContainer from "../../components/profile/ContactFormContainer";

import Navbar from "../../components/Navbar";
import styles from "./Profile.module.css";

const Profile = () => {
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
    }
    return (
        <>
            <Navbar />
            <div className={styles.profile}>
                {/* <div className={styles.profilecrmFrame}>
                    <div className={styles.profileCrmContainer}>
                        <span>Profile</span>
                        <span className={styles.span}>{` `}</span>
                        <span className={styles.crm}>{`> CRM`}</span>
                    </div>
                </div> */}
                <div className={styles.profileContentContainer}>
                    <div className={styles.left}>
                        <ContactFormContainer />
                    </div>
                    <div className={styles.right}>
                        <ContactHistorySectionContainer />
                        <UpcomingEventsSectionContainer />
                        <div className={styles.lowerRight}>
                            <ExperienceSection />
                            <NoteSectionContainer />
                        </div>

                    </div>

                </div>

            </div>
        </>
    );
};

export default Profile;