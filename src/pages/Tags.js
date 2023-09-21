import styles from "./Tags.module.css";

const Tags = () => {
  return (
    <div className={styles.tags}>
      <img className={styles.tagsChild} alt="" src="/rectangle-5.svg" />
      <div className={styles.tag1}>
        <div className={styles.tag11} />
        <div className={styles.landlords}>Landlords</div>
        <div className={styles.details}>Details</div>
      </div>
      <div className={styles.tag2}>
        <div className={styles.tag2Child} />
        <div className={styles.details1}>Details</div>
        <div className={styles.tag2Item} />
        <div className={styles.students}>Students</div>
      </div>
      <div className={styles.tag3}>
        <div className={styles.tag2Item} />
        <div className={styles.otherRenters}>Other Renters</div>
        <div className={styles.tag3Item} />
        <div className={styles.details2}>Details</div>
      </div>
      <div className={styles.tagsItem} />
      <div className={styles.tagHeading}>
        <div className={styles.tagHeadingChild} />
        <div className={styles.connectionTags}>Connection Tags</div>
      </div>
    </div>
  );
};

export default Tags;
