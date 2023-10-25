import React, { useCallback } from "react";
import ProfilePic from "./ProfilePic";
import ContactInfo from "./ContactInfo";
import AboutMe from "./AboutMe";
import styles from "./ContactFormContainer.module.css";
import AboutMeEditPopUp from "./AboutMeEditPopUp.js"
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";

import { SERVER_URL } from "../../index.js";

export default function ContactFormContainer({ userData, setProfileUserEmail }) {
    const [profile, setProfile] = useState([]);
    const [isEditPopupOpen, setEditPopupOpen] = useState(false);

    const onContactNameButtonClick = useCallback(() => {
        // Please sync "Messaging" to the project
    }, []);

    const cookies = new Cookies();
    const tokenValue = cookies.get("token");

    // This method fetches the records from the database.
    useEffect(() => {
        if (userData) {
            setProfile(userData);
        }
    }, [tokenValue, userData]);

    const handleSave = async (updatedData) => {

        try {

            const response = await fetch(`${SERVER_URL}/user/update`, {
                method: "PATCH", // Use the appropriate HTTP method (e.g., PATCH) for updating data
                headers: {
                    "Content-Type": "application/json", 'Authorization': `Bearer ${tokenValue}`
                },
                body: JSON.stringify(updatedData),
            });


            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }

            console.log("handle testing:", response);
            // Assuming your server responds with the updated profile data, you can update your state with it.
            //const updatedProfileData = await response.json();
            //setProfile(updatedProfileData);
            //setProfileUserEmail(updatedData);
            window.location.reload();
        } catch (error) {
            console.error("Error saving profile data:", error);
        }

        setEditPopupOpen(false); // Close the popup whether the save was successful or not
    };


    return (
        <div className={styles.frameParent}>
            <div className={styles.profilePicAndContactInfo}>
                {profile && (
                    <ProfilePic
                        profilePic={profile.profilePic}
                        nameLastName={profile.firstName + ' ' + profile.lastName}
                        jobPosition={profile.position}
                    />
                )}
                {profile && (
                    <ContactInfo
                        email={profile.email}
                        phoneNumber={profile.phoneNumber}
                        address={profile.address}
                    />
                )}
            </div>
            <button
                className={styles.editButton}
                onClick={() => setEditPopupOpen(true)}
            >
                Edit
            </button>
            <div className={styles.aboutMeWrapper}>
                {profile && <AboutMe aboutMe1={profile.about} mainApp={profile.mainApp} />}
            </div>

            {isEditPopupOpen && (
                <AboutMeEditPopUp
                    onClose={() => setEditPopupOpen(false)}
                    currentData={profile}
                    onSave={handleSave}
                />
            )}

            <button
                className={styles.contactNameButton}
                onClick={onContactNameButtonClick}
            >
                {profile && (
                    <b className={styles.contactName}>{`Contact ${profile.firstName}`}</b>
                )}
            </button>
        </div>
    );
};
