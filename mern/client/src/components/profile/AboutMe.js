import styles from "./AboutMe.module.css";

const AboutMe = ({ aboutMeMore, aboutMe1, mainApp }) => {
    return (
        <div className={styles.aboutMe}>
            <div className={styles.header}>About Me</div>
            <div className={styles.aboutMeDescriptionContainer}>{aboutMe1}</div>
            <div className={styles.mainApp}>
                <img className={styles.iconCall} alt="" src="/-icon-call1.svg" />
                <div className={styles.mainApp1}>
                    <b>Main app: </b> {mainApp}
                </div>
            </div>
        </div>
    );
};

export default AboutMe;