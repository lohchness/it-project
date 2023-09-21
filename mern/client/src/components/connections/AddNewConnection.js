import { useMemo } from "react";
import styles from "./AddNewConnection.module.css";

const AddNewConnection = ({
  addNewConnectionTop,
  addNewConnectionLeft,
  vector,
  vectorIconHeight,
  vectorIconWidth,
  vectorIconTop,
  vectorIconRight,
  vectorIconBottom,
  vectorIconLeft,
  vectorIconMaxWidth,
  vectorIconMaxHeight,
  vectorIconObjectFit,
}) => {
  const addNewConnectionStyle = useMemo(() => {
    return {
      top: addNewConnectionTop,
      left: addNewConnectionLeft,
    };
  }, [addNewConnectionTop, addNewConnectionLeft]);

  const vectorIcon4Style = useMemo(() => {
    return {
      height: vectorIconHeight,
      width: vectorIconWidth,
      top: vectorIconTop,
      right: vectorIconRight,
      bottom: vectorIconBottom,
      left: vectorIconLeft,
      maxWidth: vectorIconMaxWidth,
      maxHeight: vectorIconMaxHeight,
      objectFit: vectorIconObjectFit,
    };
  }, [
    vectorIconHeight,
    vectorIconWidth,
    vectorIconTop,
    vectorIconRight,
    vectorIconBottom,
    vectorIconLeft,
    vectorIconMaxWidth,
    vectorIconMaxHeight,
    vectorIconObjectFit,
  ]);

  return (
    <button className={styles.addNewConnection} style={addNewConnectionStyle}>
      <img
        className={styles.vectorIcon}
        alt=""
        src={vector}
        style={vectorIcon4Style}
      />
      <div className={styles.addNewConnection1}>Add New Connection</div>
    </button>
  );
};

export default AddNewConnection;
