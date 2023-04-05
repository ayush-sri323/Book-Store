import FrameComponent from "./FrameComponent";
import styles from "./Quote.module.css";

const Quote = () => {
  return (
    <div className={styles.quote}>
      <div className={styles.withGreatPower}>
        With great power comes great electricity bill
      </div>
      <div className={styles.wrapper}>
        <img className={styles.icon} alt="" src="/.svg" />
      </div>
      <FrameComponent />
      <div className={styles.container}>
        <img className={styles.icon} alt="" src="/.svg" />
      </div>
    </div>
  );
};

export default Quote;
