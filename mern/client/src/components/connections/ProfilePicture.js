import styles from "./ProfilePicture.module.css";

const ProfilePicture = () => {
  return (
    <a className={styles.profilePicture}>
      <img className={styles.maskGroupIcon} alt="" src="/undefined2.png" />
    </a>
  );
};

export default ProfilePicture;
