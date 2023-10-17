import React, { useCallback } from "react";
import ProfilePic from "./ProfilePic";
import ContactInfo from "./ContactInfo";
import AboutMe from "./AboutMe";
import styles from "./ContactFormContainer.module.css";
import AboutMeEditPopUp from "./AboutMeEditPopUp.js"
import { useEffect, useState } from "react";

export default function ContactFormContainer() {
  const [profile, setProfile] = useState([]); 
  const [isEditPopupOpen, setEditPopupOpen] = useState(false);

  const onContactNameButtonClick = useCallback(() => {
    // Please sync "Messaging" to the project
  }, []);

  // This method fetches the records from the database.
  useEffect(() => {

    const profileID = "12345"; // random now until u get profile id

    async function getProfile() {
      try {
        //const response = await fetch(`http://localhost:5050/profile/${profileId}`);
        const response = await fetch(`http://localhost:5050/profile`);
        if (!response.ok) {
          const message = `An error occurred: ${response.statusText}`;
          window.alert(message);
          return;
        }

        const profileData = await response.json();
        setProfile(profileData);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    }

    getProfile();
    //getProfile2();
    // return;
  }, []);

  const handleSave = async (updatedData) => {
    try {
      const response = await fetch(`http://localhost:5050/profile/${profile._id}`, {
        method: "PATCH", // Use the appropriate HTTP method (e.g., PATCH) for updating data
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });
  
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
  
      // Assuming your server responds with the updated profile data, you can update your state with it.
      const updatedProfileData = await response.json();
      setProfile(updatedProfileData);
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
            nameLastName={profile.lastName}
            jobPosition={profile.jobPosition}
          />
        )}
        {profile && (
          <ContactInfo
            email={profile.email}
            phoneNumber={profile.phoneNumber}
            address={profile.address}
          />
        )}
        <button
          className={styles.editButton}
          onClick={() => setEditPopupOpen(true)}
        >
          Edit
        </button>
      </div>

      <div className={styles.aboutMeWrapper}>
        {profile && <AboutMe mainApp={profile.mainApp} />}
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
