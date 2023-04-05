import styles from "./Contacts.module.css";

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.instanceParent}>
        <div className={styles.nameWrapper}>
          <div className={styles.name}>Name</div>
        </div>
        <div className={styles.nameWrapper}>
          <div className={styles.name}>Email</div>
        </div>
      </div>
      <div className={styles.nameFrame}>
        <div className={styles.name}>Title</div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.name}>Message</div>
      </div>
      <div className={styles.button}>
        <div className={styles.live}>Send</div>
      </div>
    </div>
  );
};

export default Contacts;
