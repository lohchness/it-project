import "./AddActivityForm.css";
import React, { useState, useEffect } from "react";
import { SERVER_URL } from "../../index.js";
import Cookies from "universal-cookie";

export default function AddActivityForm() {

  const [form, setForm] = useState({
    description: "",
    date: "",
    fromTime: "",
    toTime: "",
    location: "",
    email:"",
  })

  useEffect(() => {
    // Fetch the user's email when the component mounts
    const cookies = new Cookies();
    const tokenValue = cookies.get("token");

    fetch(`http://localhost:5050/user/get-current-user`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${tokenValue}`
      }
    })
      .then((response) => response.json())
      .then((emailData) => {
        const userEmail = emailData.user.userEmail;
        // Set the email address in the state
        setForm((prevForm) => ({
          ...prevForm,
          email: userEmail,
        }));
      })
      .catch((error) => {
        console.error("Error fetching email:", error);
      });
  }, []); // The empty dependency array ensures this effect runs once when the component mounts

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value};
    })
  }

  async function onSubmit(e) {
    e.preventDefault();
    const newEvent = {...form};

    await fetch(SERVER_URL +"/event", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(newEvent),
    })
    .catch(error => {
      window.alert(error);
      return;
    });

    setForm({description:"", date:"", fromTime:"",toTime:"",location:"", email: form.email});
    window.location.reload();
  }

  return (
    <div className="add-activity">
      <div className="heading-wrapper">
          <div className="heading">Add Activity</div>
        </div>
        <div className="description">
          Description:
        </div>
      <form onSubmit={onSubmit}>  
        <textarea 
          placeholder="Description" 
          type="text"
          value={form.description}
          onChange={(e) => updateForm({description: e.target.value})}
          />
        <div className="date-wrapper">
          <div className="date">Date:</div>
          <input 
            className="ddmmyy" 
            placeholder="dd/mm/yyyy" 
            type="date"
            value={form.date}
            onChange={(e) => updateForm({date: e.target.value})}
           />
        </div>
        <div className="time-wrapper">
          <div>Time:</div>
          <div className="input-wrapper">
            <label>From:
              <input 
                className="time-input" 
                type="text" 
                value={form.fromTime}
                onChange={(e) => updateForm({fromTime: e.target.value})}
              />
            </label>
            <div/>
            <label>To:
              <input 
                className="time-input" 
                type="text" 
                value={form.toTime}
                onChange={(e) => updateForm({toTime: e.target.value})}
              />
            </label>
          </div>
        </div>
        <div className="location-wrapper">
          <div style={{marginTop:"15px"}}>Location:</div>
          <textarea  
           placeholder="Location"
           type="text"
           value={form.location}
           onChange={(e) => updateForm({location: e.target.value})}
          />
        </div>
        <button className="submit-button">
          <div className="submit">Submit</div>
        </button>
      </form>
    </div>
  );
};
