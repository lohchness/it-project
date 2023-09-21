import React, { useEffect, useState, useCallback } from "react";
//import { Link } from "react-router-dom";
import AddTaskPopUp from "./AddTaskPopUp";
import PortalPopup from "./PortalPopup";
import "./TaskContainer.css";

const Task = (props) => (
 <div className = "row-wrapper">
   <tr height = "30px">
     <img className="tick-task-done" alt="" src="/GreenTick.png" />
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

 // This method fetches the records from the database.
 useEffect(() => {
  async function getTasks() {
    const response = await fetch(`http://localhost:5050/task/`);

    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }

    const tasks = await response.json();
    setTasks(tasks);
  }

  getTasks();

  return;
}, [tasks.length]);

 // This method will delete a record
 async function deleteTask(id) {
  await fetch(`http://localhost:5050/task/${id}`, {
    method: "DELETE"
  });

  const newTasks = tasks.filter((el) => el._id !== id);
  setTasks(newTasks);
}

 // This method will map out the records on the table
 function TaskContainer() {
  return tasks.map((task) => {
    return (
      <Task
        task={task}
        deleteTask={() => deleteTask(task._id)}
        key={task._id}
      />
    );
  });
}
  // This following section will display the table with the records of individuals.
  return (
    <div>
      <div className="tasks">
        <div className="tasks-heading">
          <div className="my-tasks">My Tasks</div>
        </div>
        <table>
          <tbody>{TaskContainer()}</tbody>
        </table>
        <button className="add-task-container" onClick={openAddTaskPopUp}>
          <div className="add-task">+ Add Task</div>
        </button>
      </div>
      {isAddTaskPopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.4)"
          placement="Centered"
          onOutsideClick={closeAddTaskPopUp}
        >
          <AddTaskPopUp onClose={closeAddTaskPopUp} />
        </PortalPopup>
      )}
    </div>
  );
};

//export default TaskContainer;
