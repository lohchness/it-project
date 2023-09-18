import { FunctionComponent } from "react";
import styles from "./AboutMe.module.css";

type AboutMeType = {
  aboutMeMore?: string;
  aboutMe1?: string;
  mainApp?: string;
};

const AboutMe: FunctionComponent<AboutMeType> = ({
  aboutMeMore,
  aboutMe1,
  mainApp,
}) => {
  return (
    <div className={styles.aboutMe}>
      <div className={styles.header}>
        <div className={styles.headerChild} />
        <b className={styles.aboutMe1}>About Me</b>
      </div>
      <div className={styles.text}>
        <div className={styles.awdkmakwdkaWdawDaw}>{aboutMeMore}</div>
        <div className={styles.wdawfjkafnjkenjfnejfknakjenfjn}>{aboutMe1}</div>
      </div>
      <div className={styles.mainApp}>
        <div className={styles.mainApp1}>{mainApp}</div>
        <img className={styles.iconCall} alt="" src="/undefined22.png" />
      </div>
    </div>
  );
};

export default AboutMe;
