import { useMemo } from "react";
import styles from "./EventInfo.module.css";

const EventInfo = ({
    dateDay,
    dateMonth,
    description,
    time,
    location,
    event2Top,
    event2ZIndex,
    onEventButtonClick,
}) => {
    // const eventStyle = useMemo(() => {
    //     return {
    //         top: event2Top,
    //         zIndex: event2ZIndex,
    //     };
    // }, [event2Top, event2ZIndex]);

    return (
        <div className={styles.event}>
            <div className={styles.eventDate}>
                <b>{dateDay}</b>
                <div>{dateMonth}</div>
            </div>
            <div className={styles.eventDescription}>{description}</div>
            <div className={styles.eventTime}>{time}</div>
            <div className={styles.eventLocation}>{location}</div>
            <div className={styles.eventButton} onClick={onEventButtonClick}>
                <img className={styles.groupIcon} alt="" src="/group5.svg" />
            </div>
        </div>
    );
};

export default EventInfo;
