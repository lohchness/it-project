import "./AddActivityForm.css";
import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";

import { SERVER_URL } from "../../index.js";


export default function AddActivityForm() {
  const [form, setForm] = useState({
    description: "",
    date: "",
    fromTime: "",
    toTime: "",
    location: "",
    email: "", // Initialize email as an empty string
  });

  useEffect(() => {
    // Fetch the user's email when the component mounts
    const fetchUserEmail = async () => {
      const cookies = new Cookies(); 
      const tokenValue = cookies.get("token"); 
      try {
        const email = await fetch(SERVER_URL + "/user/get-current-user", {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${tokenValue}`
          }
        });
        const emailData = await email.json();
        const userEmail = emailData.user.userEmail;
        
        // Set the email address in the state
        setForm((prevForm) => ({
          ...prevForm,
          email: userEmail,
        }));
      } catch (error) {
        console.error("Error fetching email:", error);
      }
    };

    fetchUserEmail();
  }, []); // The empty dependency array ensures this effect runs once when the component mounts

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const newEvent = { ...form };

    // Ensure that the email field is set in the newEvent object
    if (!newEvent.email) {
      window.alert("Email is missing. Please try again.");
      return;
    }

    await fetch(SERVER_URL + "/event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEvent),
    })
      .catch((error) => {
        window.alert(error);
        return;
      });

    setForm({
      description: "",
      date: "",
      fromTime: "",
      toTime: "",
      location: "",
      email: "", // Reset the email field
    });
    window.location.reload();
  }

  return (
    <div className="add-activity">
      <div className="heading-wrapper">
        <div className="heading">Add Activity</div>
      </div>
      <div className="activity-type">Description:</div>
      <form onSubmit={onSubmit}>
        <textarea
          placeholder="Description"
          type="text"
          value={form.description}
          onChange={(e) => updateForm({ description: e.target.value })}
        />
        <div className="date-wrapper">
          <div className="date">Date:</div>
          <input
            className="ddmmyy"
            placeholder="dd/mm/yyyy"
            type="text"
            value={form.date}
            onChange={(e) => updateForm({ date: e.target.value })}
          />
        </div>
        <div className="time-wrapper">
          <div>Time:</div>
          <div className="input-wrapper">
            <label>
              From:
              <input
                className="time-input"
                type="text"
                value={form.fromTime}
                onChange={(e) => updateForm({ fromTime: e.target.value })}
              />
            </label>
            <div />
            <label>
              To:
              <input
                className="time-input"
                type="text"
                value={form.toTime}
                onChange={(e) => updateForm({ toTime: e.target.value })}
              />
            </label>
          </div>
        </div>
        <div className="location-wrapper">
          <div style={{ marginTop: "15px" }}>Location:</div>
          <textarea
            placeholder="Location"
            type="text"
            value={form.location}
            onChange={(e) => updateForm({ location: e.target.value })}
          />
        </div>
        <button className="submit-button">
          <div className="submit">Submit</div>
        </button>
      </form>
    </div>
  );
}