import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./AddTaskPopUp.css";

export default function AddTask({onClose}) {

  const [form, setForm] = useState({
    description: "",
    duedate: "",
  });
  const navigate = useNavigate();

  // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }

 // This function will handle the submission.
 async function onSubmit(e) {
  e.preventDefault();

  // When a post request is sent to the create url, we'll add a new record to the database.
  const newTask = { ...form };

  await fetch("http://localhost:5050/task", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTask),
  })
  .catch(error => {
    window.alert(error);
    return;
  });

  setForm({  description: "", duedate: "" });
  //navigate("/");
  window.location.reload(); 
}
  return (
    <div className="add-task-popup">
      <form onSubmit={onSubmit}>
        <div className="popup">
        <input 
          className="duedate" 
          placeholder="Due Date" 
          type="text" 
          id="position"
          value={form.duedate}
          onChange={(e) => updateForm({duedate: e.target.value })}
          required
          />
        <div className = "description-wrapper">
          <textarea 
           name="description" 
           placeholder="Description" 
           type="text"
           id="position"
           value={form.description}
           onChange={(e) => updateForm({description: e.target.value })}
           required
          />
        </div>
        <div className="confirm-button">
          <input
           type="submit"
           value="Confirm"
           className="confirm-control"
         />
        </div>
        <button className="cancel-button" onClick={onClose}>
          <div className="cancel">Cancel</div>
        </button>
        </div>
      </form>
    </div>
  );

}