import { FunctionComponent } from "react";
import ContactHistoryInfo from "./ContactHistoryInfo";
import styles from "./ContactHistorySectionContainer.module.css";

const ContactHistorySectionContainer: FunctionComponent = () => {
  return (
    <div className={styles.contactHistorySection}>
      <img
        className={styles.contactHistorySectionChild}
        alt=""
        src="/undefined2.png"
      />
      <ContactHistoryInfo
        date="16/08/2022"
        contactType="Planned Meeting "
        description="Assign pages that the group members must individual design. "
      />
      <ContactHistoryInfo
        date="17/08/2022"
        contactType="Assign task "
        description="Assign task to design profile page UI."
        contactHistory1Top="121px"
        contactHistory1ZIndex="2"
      />
      <div className={styles.header}>
        <div className={styles.headerChild} />
        <b className={styles.contactHistory}>Contact History</b>
        <div className={styles.historyButton}>
          <img className={styles.groupIcon} alt="" src="/undefined4.png" />
        </div>
      </div>
      <div className={styles.detailBar}>
        <b className={styles.type}>Type</b>
        <b className={styles.description}>Description</b>
        <b className={styles.date}>Date</b>
      </div>
    </div>
  );
};

export default ContactHistorySectionContainer;
