import { useMemo } from "react";
import styles from "./ContactHistoryInfo.module.css";

const ContactHistoryInfo = ({
  date,
  contactType,
  description,
  contactHistory1Top,
  contactHistory1ZIndex,
}) => {
  const contactHistory1Style = useMemo(() => {
    return {
      top: contactHistory1Top,
      zIndex: contactHistory1ZIndex,
    };
  }, [contactHistory1Top, contactHistory1ZIndex]);

  return (
    <div className={styles.contactHistory1} style={contactHistory1Style}>
      <div className={styles.rectangle} />
      <div className={styles.type1}>{contactType}</div>
      <div className={styles.date1}>{date}</div>
      <div className={styles.description1}>{description}</div>
      <div className={styles.historyButton1}>
        <img className={styles.groupIcon} alt="" src="/group.svg" />
      </div>
    </div>
  );
};

export default ContactHistoryInfo;
