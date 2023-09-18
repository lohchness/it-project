import { FunctionComponent } from "react";
import styles from "./ContactInfo.module.css";

type ContactInfoType = {
  email?: string;
  phoneNumber?: string;
  address?: string;
};

const ContactInfo: FunctionComponent<ContactInfoType> = ({
  email,
  phoneNumber,
  address,
}) => {
  return (
    <div className={styles.contactInfo}>
      <div className={styles.email}>
        <div className={styles.blahemailcom}>{email}</div>
        <img className={styles.iconMail} alt="" src="/undefined19.png" />
      </div>
      <div className={styles.phoneNumber}>
        <div className={styles.div}>{phoneNumber}</div>
        <img className={styles.iconCall} alt="" src="/undefined20.png" />
      </div>
      <div className={styles.address}>
        <div className={styles.houseStreetCity}>{address}</div>
        <img
          className={styles.iconLocationSharp}
          alt=""
          src="/undefined21.png"
        />
      </div>
      <div className={styles.header}>
        <div className={styles.headerChild} />
        <b className={styles.blah}>Contact Info</b>
      </div>
    </div>
  );
};

export default ContactInfo;
