import styles from "./AboutMe.module.css";

const AboutMe = ({ aboutMeMore, aboutMe1, mainApp }) => {
  return (
    <div className={styles.aboutMe}>
      <div className={styles.header}>
        <div className={styles.headerChild} />
        <b className={styles.aboutMe1}>About Me</b>
      </div>
      <div className={styles.aboutMeDescriptionContainer}>
        <p className={styles.iAdmD}>
          i adm d s asda asdasd asdas asda as ds asd asd as a a a s sd a asd asd
          asd asd a a s d as da sad.
        </p>
        <p className={styles.iAdmD}>&nbsp;</p>
        <p className={styles.iAdmD}>dsa a sd dsa a s</p>
        <p className={styles.iAdmD}>&nbsp;</p>
        <p className={styles.iAdmD}>
          awdawdawdandaw awd awd awd a wd aa aw d d d aw f g rdg aw da wd adw ag
          awgf
        </p>
        <p className={styles.iAdmD}>
          aw awd aw d awd awd awd awd awd aw d aw da w dsa d a d w ads d a d ad
          a d a d sa d ad ada d a a a a a a a aaaaa a da wgf aw g wa.
        </p>
      </div>
      <div className={styles.mainApp}>
        <div className={styles.mainApp1}>{mainApp}</div>
        <img className={styles.iconCall} alt="" src="/-icon-call1.svg" />
      </div>
    </div>
  );
};

export default AboutMe;
