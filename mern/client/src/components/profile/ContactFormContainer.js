import React, { useCallback } from "react";
import ProfilePic from "./ProfilePic";
import ContactInfo from "./ContactInfo";
import AboutMe from "./AboutMe";
import styles from "./ContactFormContainer.module.css";
import AboutMeEditPopUp from "./AboutMeEditPopUp.js"
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";

import { SERVER_URL } from "../../index.js";

export default function ContactFormContainer() {
    const [profile, setProfile] = useState([]);
    const [isEditPopupOpen, setEditPopupOpen] = useState(false);

    const onContactNameButtonClick = useCallback(() => {
        // Please sync "Messaging" to the project
    }, []);

    const cookies = new Cookies();
    const tokenValue = cookies.get("token");

    // This method fetches the records from the database.
    useEffect(() => {
        async function getProfile() {
            try {
                //console.log(profileID);

                //const cookies = new Cookies(); 
                //const tokenValue = cookies.get("token"); 

                const email = await fetch(`${SERVER_URL}/user/get-current-user`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${tokenValue}`
                    }
                });
                const emailData = await email.json();
                const userEmail = emailData.user.userEmail;

                const response = await fetch(`${SERVER_URL}/user/get-user-by-email?email=${userEmail}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${tokenValue}`, // Include the JWT token for authentication
                    },
                });

                //const response = await User.findOne({ email: IDnEmail.email });

                if (!response.ok) {
                    const message = `An error occurred: ${response.statusText}`;
                    window.alert(message);
                    return;
                }

                const profileData = await response.json();
                setProfile(profileData.user);
            } catch (error) {
                console.error("Error fetching profile:", error);
            }
        }

        getProfile();
        //getProfile2();
        // return;
    }, [tokenValue]);

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
            window.location.reload();
        } catch (error) {
            console.error("Error saving profile data:", error);
        }

        setEditPopupOpen(false); // Close the popup whether the save was successful or not
    };


    return (
        <div className={styles.frameParent}>
            <div className={styles.profilePicParent}>
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
                autoFocus={true}
                disabled={false}
                onClick={onContactNameButtonClick}
            >
                {profile && (
                    <b className={styles.contactName}>{`Contact ${profile.firstName}`}</b>
                )}
            </button>
        </div>
    );
};
