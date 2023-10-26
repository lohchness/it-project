import React, { useEffect, useState, useCallback } from "react";
import AddTaskPopUp from "./AddTaskPopUp";
import PortalPopup from "../PortalPopup";
import "./TaskContainer.css";
import "../../pages/dashboard/Dashboard.css";

import { SERVER_URL } from "../../index.js";
import Cookies from "universal-cookie";

const Task = (props) => (
 <div className = "row-wrapper">
   <tr height = "30px">
    <button className="task-checkbox"
      onClick={() => {
        props.updateTask(props.task._id);
      }}
      >
      <img className="tick-task-done" alt="" src="/checkbox.png" / > 
    </button>
     <td width = "80%">{props.task.description}</td>
     <td>{props.task.duedate}</td>
     <td>
       <button className="delete-button"
         onClick={() => {
           props.deleteTask(props.task._id);
          }}
        >
        <img className="delete-icon" alt="" src="/DeleteIcon.png" />
        </button>
      </td>
    </tr>
  </div>
);

export default function TaskContainer() {
  const [tasks, setTasks] = useState([]);
  const [isAddTaskPopUpOpen, setAddTaskPopUpOpen] = useState(false);

  const openAddTaskPopUp = useCallback(() => {
    setAddTaskPopUpOpen(true);
  }, []);

  const closeAddTaskPopUp = useCallback(() => {
    setAddTaskPopUpOpen(false);
  }, []);

  const cookies = new Cookies(); 
  const tokenValue = cookies.get("token"); 

 // This method fetches the records from the database.
 useEffect(() => {
  async function getTasks() {
    try{
      const email = await fetch(`http://localhost:5050/user/get-current-user`,{
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${tokenValue}`
        }
      });

    const emailData = await email.json();
    const userEmail = emailData.user.userEmail;
    
    const response = await fetch(SERVER_URL + `/task?email=${userEmail}`); // Add a query parameter for the user's email

    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }

    const tasks = await response.json();
    setTasks(tasks);

  }catch (error) {
      console.error("Error fetching tasks:", error);
    }
  }
  getTasks();

  return;
}, [tokenValue]);

 // This method will delete a record
 async function deleteTask(id) {
  await fetch(SERVER_URL + `/task/${id}`, {
    method: "DELETE"
  });

  console.log("task deleted");
  const newTasks = tasks.filter((el) => el._id !== id);
  setTasks(newTasks);
}

async function updateTask(id){
  const data = { status: "Done" };

  await fetch(SERVER_URL + `/task/${id}`,{
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log("task done");
  
}

 // This method will map out the records on the table
 function TaskContainer() {
  return tasks.map((task) => {
    return (
      <Task
        task={task}
        deleteTask={() => deleteTask(task._id)}
        updateTask={() => updateTask(task._id)}
        key={task._id}
      />
    );
  });
}
  // This following section will display the table with the records of individuals.
  return (
    <div className="tasks dashboard-widget">
        <div className="widget-heading">My Tasks <button className="add-task" onClick={openAddTaskPopUp}>+ Add Task</button></div>
        <table>
          <tbody>{TaskContainer()}</tbody>
        </table>
      {isAddTaskPopUpOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0)"
          placement="Centered"
          onOutsideClick={closeAddTaskPopUp}
        >
          <AddTaskPopUp onClose={closeAddTaskPopUp} />
        </PortalPopup>
      )}
    </div>
  );
};