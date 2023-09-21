import styles from "./AddTaskPopUp.module.css";

const AddTaskPopUp = ({ onClose }) => {
  return (
    <div className={styles.addTaskPopup}>
      <div className={styles.popup} />
      <input className={styles.dueDate} placeholder="Due Date" type="text" />
      <input
        className={styles.description}
        placeholder="Description"
        type="text"
      />
      <div className={styles.confirmExperienceButton} onClick={onClose}>
        <div className={styles.confirm}>Confirm</div>
      </div>
      <button className={styles.cancelExperienceButton} onClick={onClose}>
        <div className={styles.cancel}>Cancel</div>
      </button>
    </div>
  );
};

export default AddTaskPopUp;
