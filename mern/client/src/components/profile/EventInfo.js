import { useMemo } from "react";
import styles from "./EventInfo.module.css";

const EventInfo = ({
  dateDay,
  dateMonth,
  description1,
  time1,
  location1,
  event2Top,
  event2ZIndex,
  onEventButton2Click,
}) => {
  const event2Style = useMemo(() => {
    return {
      top: event2Top,
      zIndex: event2ZIndex,
    };
  }, [event2Top, event2ZIndex]);

  return (
    <div className={styles.event2} style={event2Style}>
      <div className={styles.roomTourWith}>{description1}</div>
      <div className={styles.pm430pm}>{time1}</div>
      <div className={styles.alanGilbertBuilding}>{location1}</div>
      <div className={styles.date2}>
        <div className={styles.date2Child} />
        <div className={styles.date1}>
          <p className={styles.p}>
            <b className={styles.b}>{dateDay}</b>
          </p>
          <p className={styles.aug}>{dateMonth}</p>
        </div>
      </div>
      <div className={styles.eventButton2} onClick={onEventButton2Click}>
        <img className={styles.groupIcon} alt="" src="/group5.svg" />
      </div>
    </div>
  );
};

export default EventInfo;
