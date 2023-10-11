import { useMemo } from "react";
import styles from "./ShowResults.module.css";

const ShowResults = ({
  showingResultsNum = "Showing 0 out of 0 results",
  showing8OutTop,
  showing8OutLeft,
}) => {
  const showing8OutStyle = useMemo(() => {
    return {
      top: showing8OutTop,
      left: showing8OutLeft,
    };
  }, [showing8OutTop, showing8OutLeft]);

  return (
    <div className={styles.showing8Out} style={showing8OutStyle}>
      {showingResultsNum}
    </div>
  );
};

export default ShowResults;
