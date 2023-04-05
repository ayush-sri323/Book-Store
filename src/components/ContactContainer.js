import MessageContainer from "./MessageContainer";
import styles from "./ContactContainer.module.css";

const ContactContainer = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.frameParent}>
        <div className={styles.parent}>
          <div className={styles.div}>#</div>
          <div className={styles.projects}>contacts</div>
        </div>
        <img className={styles.line7Stroke} alt="" src="/line-7-stroke1.svg" />
      </div>
      <div className={styles.imInterestedInFreelanceOpWrapper}>
        <div className={styles.imInterestedIn}>
          I’m interested in freelance opportunities. However, if you have other
          request or question, don’t hesitate to contact me otherwise I will
          suicide
        </div>
      </div>
      <div className={styles.contactInner}>
        <MessageContainer userId1="!Elias#3519" propLeft="0px" />
      </div>
    </div>
  );
};

export default ContactContainer;
