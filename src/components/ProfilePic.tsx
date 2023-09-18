import { FunctionComponent } from "react";
import styles from "./ProfilePic.module.css";

type ProfilePicType = {
  profilePic?: string;
  nameLastName?: string;
  jobPosition?: string;
};

const ProfilePic: FunctionComponent<ProfilePicType> = ({
  profilePic,
  nameLastName,
  jobPosition,
}) => {
  return (
    <div className={styles.profilePic}>
      <div className={styles.frameParent}>
        <div className={styles.maskGroupParent}>
          <img className={styles.maskGroupIcon} alt="" src={profilePic} />
          <div className={styles.nameLastnameParent}>
            <div className={styles.nameLastname}>{nameLastName}</div>
            <div className={styles.jobPosition}>{jobPosition}</div>
          </div>
        </div>
        <div className={styles.facebookButtonParent}>
          <div className={styles.facebookButton}>
            <img className={styles.vectorIcon} alt="" src="/undefined11.png" />
          </div>
          <div className={styles.instagramButton}>
            <img className={styles.vectorIcon1} alt="" src="/undefined12.png" />
            <img className={styles.vectorIcon2} alt="" src="/undefined13.png" />
            <img className={styles.vectorIcon3} alt="" src="/undefined14.png" />
          </div>
          <div className={styles.facebookButton}>
            <img className={styles.vectorIcon4} alt="" src="/undefined15.png" />
          </div>
        </div>
      </div>
      <div className={styles.editProfileButton}>
        <img className={styles.vectorIcon5} alt="" src="/undefined16.png" />
        <img className={styles.vectorIcon6} alt="" src="/undefined17.png" />
        <img className={styles.vectorIcon7} alt="" src="/undefined18.png" />
      </div>
    </div>
  );
};

export default ProfilePic;
