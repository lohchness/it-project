import ContactHistoryInfo from "./ContactHistoryInfo";
import styles from "./ContactHistorySectionContainer.module.css";
import Cookies from "universal-cookie";
import { SERVER_URL } from "../../index.js";
import React, { useEffect, useState } from "react";

export default function ContactHistorySectionContainer() {
  const [histories, setHistories] = useState([]);


  const cookies = new Cookies(); 
  const tokenValue = cookies.get("token"); 

  useEffect(() => {
    async function getHistories() {
      try {
        const email = await fetch(`${SERVER_URL}/user/get-current-user`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${tokenValue}`
          }
        }); 
        const emailData = await email.json();
        const userEmail = emailData.user.userEmail;
        console.log("userEmail", userEmail)
  
        const response = await fetch(`${SERVER_URL}/history?email=${userEmail}`);
  
        if (response.status === 200) {
          const histories = await response.json();
          setHistories(histories);
        } else if (response.status === 404) {
          // No records found, set histories to an empty array or handle it as needed.
          setHistories([]);
        } else {
          const message = `An error occurred: ${response.statusText}`;
          window.alert(message);
        }
      } catch (error) {
        console.error("Error fetching histories:", error);
      }
    }
  
    getHistories();
  }, [tokenValue]);

  function HistoryContainer() {
    return histories.map((history) => {
      return (
        <ContactHistoryInfo
        date={history.data}
        contactType={history.type}
        description={history.description}
        />
      );
    });
  }


  return (
    <div className={styles.contactHistorySection}>
      <div className={styles.contactHistorySectionChild} />
      <table>
        <tbody>{HistoryContainer()}</tbody>
      </table>
      <div className={styles.header}>
        <div className={styles.headerChild} />
        <b className={styles.contactHistory}>Contact History</b>
        {/* <div className={styles.historyButton}>
          <img className={styles.groupIcon} alt="" src="/group1.svg" />
        </div> */}
      </div>
      <div className={styles.detailBar}>
        <div className={styles.type}>Type</div>
        <div className={styles.description}>Description</div>
        <div className={styles.date}>Date</div>
      </div>
    </div>
  );
};