import { useMemo } from "react";
import styles from "./ConnectionComponent.module.css";

const ConnectionComponent = ({
  connectionName,
  lastContact,
  touchStatus,
  tagName,
  avatar,
  lastContactLeft,
  deleteTop,
  deleteBottom,
  connectionLeft,
  connectionWidth,
  losingTouchLeft,
  landlordLeft,
  deleteWidth,
  deleteLeft,
  vectorIconBottom,
  deleteHeight,
  connection2Position,
  connection2Top,
  nameTarget,
  nameTextDecoration,
  nameCursor,
  nameBorder,
  namePadding,
  nameBackgroundColor,
  vector2,
  vectorIconObjectFit,
  vector,
  vectorIconObjectFit1,
  vector1,
  vectorIconObjectFit2,
  vector3,
  vectorIconObjectFit3,
}) => {
  const thFeb2023Style = useMemo(() => {
    return {
      left: lastContactLeft,
    };
  }, [lastContactLeft]);

  const deleteStyle = useMemo(() => {
    return {
      top: deleteTop,
      bottom: deleteBottom,
      width: deleteWidth,
      left: deleteLeft,
      height: deleteHeight,
    };
  }, [deleteTop, deleteBottom, deleteWidth, deleteLeft, deleteHeight]);

  const connection2Style = useMemo(() => {
    return {
      left: connectionLeft,
      width: connectionWidth,
      position: connection2Position,
      top: connection2Top,
    };
  }, [connectionLeft, connectionWidth, connection2Position, connection2Top]);

  const losingTouchStyle = useMemo(() => {
    return {
      left: losingTouchLeft,
    };
  }, [losingTouchLeft]);

  const landlordStyle = useMemo(() => {
    return {
      left: landlordLeft,
    };
  }, [landlordLeft]);

  const vectorIconStyle = useMemo(() => {
    return {
      bottom: vectorIconBottom,
      objectFit: vectorIconObjectFit1,
    };
  }, [vectorIconBottom, vectorIconObjectFit1]);

  const nameStyle = useMemo(() => {
    return {
      textDecoration: nameTextDecoration,
      cursor: nameCursor,
      border: nameBorder,
      padding: namePadding,
      backgroundColor: nameBackgroundColor,
    };
  }, [
    nameTextDecoration,
    nameCursor,
    nameBorder,
    namePadding,
    nameBackgroundColor,
  ]);

  const vectorIcon1Style = useMemo(() => {
    return {
      objectFit: vectorIconObjectFit,
    };
  }, [vectorIconObjectFit]);

  const vectorIcon2Style = useMemo(() => {
    return {
      objectFit: vectorIconObjectFit2,
    };
  }, [vectorIconObjectFit2]);

  const vectorIcon3Style = useMemo(() => {
    return {
      objectFit: vectorIconObjectFit3,
    };
  }, [vectorIconObjectFit3]);

  return (
    <div className={styles.connection2} style={connection2Style}>
      <div className={styles.thFeb2023} style={thFeb2023Style}>
        {lastContact}
      </div>
      <div className={styles.losingTouch} style={losingTouchStyle}>
        {touchStatus}
      </div>
      <a className={styles.name} target={nameTarget} style={nameStyle}>
        {connectionName}
      </a>
      <div className={styles.connection2Child} />
      <div className={styles.landlord} style={landlordStyle}>
        {tagName}
      </div>
      <img className={styles.maskGroupIcon} alt="" src={avatar} />
      <img
        className={styles.connection2Item}
        alt=""
        src={vector2}
        style={vectorIcon1Style}
      />
      <button className={styles.delete} style={deleteStyle}>
        <img
          className={styles.vectorIcon}
          alt=""
          src={vector}
          style={vectorIconStyle}
        />
        <img
          className={styles.vectorIcon1}
          alt=""
          src={vector1}
          style={vectorIcon2Style}
        />
        <img
          className={styles.vectorIcon2}
          alt=""
          src={vector3}
          style={vectorIcon3Style}
        />
      </button>
    </div>
  );
};

export default ConnectionComponent;
