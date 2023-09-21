import { useMemo } from "react";
import styles from "./PageNumBox.module.css";

const PageNumBox = ({
  pageNum,
  page1Left,
  rectangleDivBackgroundColor,
  rectangleDivBorder,
  rectangleDivBoxSizing,
  divLeft,
}) => {
  const page1Style = useMemo(() => {
    return {
      left: page1Left,
    };
  }, [page1Left]);

  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor,
      border: rectangleDivBorder,
      boxSizing: rectangleDivBoxSizing,
    };
  }, [rectangleDivBackgroundColor, rectangleDivBorder, rectangleDivBoxSizing]);

  const divStyle = useMemo(() => {
    return {
      left: divLeft,
    };
  }, [divLeft]);

  return (
    <button className={styles.page1} style={page1Style}>
      <div className={styles.page1Child} style={rectangleDivStyle} />
      <div className={styles.div} style={divStyle}>
        {pageNum}
      </div>
    </button>
  );
};

export default PageNumBox;
