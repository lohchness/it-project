import styles from "./ContactInfo.module.css";

const ContactInfo = ({ email, phoneNumber, address }) => {
  return (
    <div className={styles.contactInfo}>
      <div className={styles.email}>
        <div className={styles.blahemailcom}>{email}</div>
        <img className={styles.iconMail} alt="" src="/-icon-mail.svg" />
      </div>
      <div className={styles.phoneNumber}>
        <div className={styles.div}>{phoneNumber}</div>
        <img className={styles.iconCall} alt="" src="/-icon-call.svg" />
      </div>
      <div className={styles.address}>
        <div className={styles.houseStreetCity}>{address}</div>
        <img
          className={styles.iconLocationSharp}
          alt=""
          src="/-icon-location-sharp.svg"
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
