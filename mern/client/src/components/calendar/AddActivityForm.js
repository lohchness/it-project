import "./AddActivityForm.css";
const AddActivityForm = () => {
  return (
    <div className="add-activity">
      <div className="heading-wrapper">
        <div className="heading">Add Activity</div>
      </div>
      <div className="activity-type">
        <div className="event">Type:</div>
        <div className="event-button">
          <div className="event">Event</div>
        </div>
        <div className="task-button">
          <div className="event">Task</div>
        </div>
      </div>
      <textarea 
          placeholder="Description" 
          type="text"
          />
      <div className="date-wrapper">
        <div className="date">Date:</div>
        <input className="ddmmyy" placeholder="dd/mm/yyyy" type="text" />
      </div>
      <div className="time-wrapper">
        <div>Time:</div>
        <div className="input-wrapper">
          <label>From:
            <input className="time-input" type="text" />
          </label>
          <div/>
          <label>To:
            <input className="time-input" type="text" />
          </label>
        </div>
      </div>
      <div className="location-wrapper">
        <div style={{marginTop:"15px"}}>Location:</div>
        <textarea  
          placeholder="location"
          type="text"
          />
      </div>
      <button className="submit-button">
        <div className="submit">Submit</div>
      </button>
    </div>
  );
};

export default AddActivityForm;
