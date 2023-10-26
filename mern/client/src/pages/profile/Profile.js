import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

import ContactHistorySectionContainer from "../../components/profile/ContactHistorySectionContainer";
import NoteSectionContainer from "../../components/profile/NoteSectionContainer";
import ExperienceSection from "../../components/profile/ExperienceSection";
import UpcomingEventsSectionContainer from "../../components/profile/UpcomingEventsSectionContainer";
import ContactFormContainer from "../../components/profile/ContactFormContainer";

import Navbar from "../../components/Navbar";
import styles from "./Profile.module.css";

import { SERVER_URL } from "../../index.js";

const Profile = ({ userEmail, setProfileUserEmail }) => {
    const [profileData, setProfileData] = useState([]);
    console.log("66666");

    const navigate = useNavigate();
    const cookies = new Cookies();
    const tokenValue = cookies.get("token");

    // Define a function to fetch user data
    async function fetchUserData() {
        try {
            if (!userEmail) {
                return; // Return early if userData is not available
            }

            const userResponse = await fetch(`${SERVER_URL}/user/get-user-by-email?email=${userEmail}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${tokenValue}`
                }
            });

            if (!userResponse.ok) {
                const message = `An error occurred: ${userResponse.statusText}`;
                window.alert(message);
                return;
            }

            const userData = await userResponse.json();
            setProfileData(userData.user);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    }

    // Load data when the component mounts
    useEffect(() => {
        // Fetch user's email and user data
        if (tokenValue) {
            fetchUserData();
        }
    }, [tokenValue]);

    // Listen for the window's beforeunload event
    useEffect(() => {
        window.addEventListener("beforeunload", fetchUserData);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener("beforeunload", fetchUserData);
        };
    }, []);

    // Check to see if JWT token exists before loading page
    if (!tokenValue) {
        navigate("/login");
    }

    return (
        <>
            <Navbar />
            <div className={styles.profile}>
                <div className={styles.profileContentContainer}>
                    <div className={styles.left}>
                        <ContactFormContainer userData={profileData} setProfileUserEmail={setProfileUserEmail}/>
                    </div>
                    <div className={styles.right}>
                        <ContactHistorySectionContainer />
                        <UpcomingEventsSectionContainer userData={profileData}/>
                        <div className={styles.lowerRight}>
                            <ExperienceSection userData={profileData}/>
                            <NoteSectionContainer userData={profileData}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
