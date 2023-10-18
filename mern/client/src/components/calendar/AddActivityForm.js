import "./AddActivityForm.css";
import React, { useState } from "react";

export default function AddActivityForm() {

  const [form, setForm] = useState({
    description: "",
    date: "",
    fromTime: "",
    toTime: "",
    location: "",
  })

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value};
    })
  }

  async function onSubmit(e) {
    e.preventDefault();
    const newEvent = {...form};

    await fetch("http://localhost:5050/event", {
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

    setForm({description:"", date:"", fromTime:"",toTime:"",location:""});
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
