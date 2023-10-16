import React, { useState } from "react";
import styles from "./AboutMeEditPopUp.module.css";

export default function AboutMeEditPopUp({ onClose, currentData, onSave }) {
  const [formData, setFormData] = useState(currentData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // Call the onSave function and pass the updated data to it
    onSave(formData);
    onClose();
  };

  return (
    <div className={styles.aboutMeEditPopUp}>
      <div className={styles.aboutMeBackground} />
      <button className={styles.confirmEditButton} onClick={handleSubmit}>
        <div className={styles.confirm}>Confirm</div>
      </button>
      <button className={styles.cancelEditButton} onClick={onClose}>
        <div className={styles.confirm}>Cancel</div>
      </button>
      <input
        className={styles.address}
        placeholder="Address (house, street, City)"
        type="text"
        name="address"
        value={formData.address}
        onChange={handleInputChange}
      />
      <input
        className={styles.phoneNumber}
        placeholder="Phone Number"
        type="text"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleInputChange}
      />
      <input
        className={styles.email}
        placeholder="Email"
        type="text"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <input
        className={styles.mainContact}
        placeholder="Main Contact"
        type="text"
        name="mainContact"
        value={formData.mainContact}
        onChange={handleInputChange}
      />
      <input
        className={styles.aboutMe}
        placeholder="About Me"
        type="text"
        name="aboutMe"
        value={formData.aboutMe}
        onChange={handleInputChange}
      />
    </div>
  );
}