import styles from "./UsernameDropDown.module.css";

const UsernameDropDown = () => {
  return (
    <button className={styles.username}>
      <div className={styles.usernameChild} />
      <img className={styles.vectorIcon} alt="" src="/undefined9.png" />
      <div className={styles.username1}>Username</div>
    </button>
  );
};

export default UsernameDropDown;
