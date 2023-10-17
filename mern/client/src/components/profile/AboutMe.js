import styles from "./AboutMe.module.css";

const AboutMe = ({ aboutMeMore, aboutMe1, mainApp }) => {
  return (
    <div className={styles.aboutMe}>
      <div className={styles.header}>
        <div className={styles.headerChild} />
        <b className={styles.aboutMe1}>About Me</b>
      </div>
      <div className={styles.aboutMeDescriptionContainer}>
        Some text about me
      </div>
      <div className={styles.mainApp}>
        <div className={styles.mainApp1}>{mainApp}</div>
        <img className={styles.iconCall} alt="" src="/-icon-call1.svg" />
      </div>
    </div>
  );
};

export default AboutMe;
