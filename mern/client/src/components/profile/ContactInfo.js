import styles from "./ContactInfo.module.css";

const ContactInfo = ({ email, phoneNumber, address }) => {
    return (
        <div className={styles.contactInfo}>
            <div className={styles.header}>Contact Info</div>
            <div className={styles.contactInfoContent}>
                <div className={styles.address}>
                    <img
                        className={styles.iconLocation}
                        alt=""
                        src="/-icon-location-sharp.svg"
                    />
                    <div className={styles.addressText}>{address}</div>
                </div>
                <div className={styles.phoneNumber}>
                    <img className={styles.iconCall} alt="" src="/-icon-call.svg" />
                    <div className={styles.phoneNumberText}>{phoneNumber}</div>
                </div>
                <div className={styles.email}>
                    <img className={styles.iconMail} alt="" src="/-icon-mail.svg" />
                    <div className={styles.emailText}>{email}</div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
