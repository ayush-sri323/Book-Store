import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import MessageContainer from "../components/MessageContainer";
import Header from "../components/Header";
import styles from "./Contacts1.module.css";

const Contacts1 = () => {
  const navigate = useNavigate();

  const onFrameContainer24Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHeaderLinkContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.contacts}>
      <div className={styles.background}>
        <div className={styles.frameParent}>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-213.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-223.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-203.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" src="/ellipse-254.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-263.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-243.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-1912.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-254.svg" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" src="/ellipse-294.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-303.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-283.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-1913.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-294.svg" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" src="/ellipse-336.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-346.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-326.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-1914.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-336.svg" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-213.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-223.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-203.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" src="/ellipse-223.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-213.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" src="/ellipse-223.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-213.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" src="/ellipse-223.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-213.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
          </div>
          <div className={styles.ellipseParent10}>
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" src="/ellipse-243.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-263.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-254.svg" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" src="/ellipse-223.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-213.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
          </div>
        </div>
        <div className={styles.backgroundChild} />
        <div className={styles.backgroundItem} />
      </div>
      <Footer groupSvgUrl="/group-221.svg" propLeft="calc(50% - 682.5px)" />
      <div className={styles.title}>
        <div className={styles.parent}>
          <div className={styles.div}>/</div>
          <div className={styles.contacts1}>contacts</div>
        </div>
        <div className={styles.whoAmI}>Who am i?</div>
      </div>
      <div className={styles.h2}>
        <div className={styles.supportMeHere}>#</div>
        <div className={styles.smallProjects}>all-media</div>
      </div>
      <div className={styles.media}>
        <img className={styles.twitterIcon} alt="" src="/twitter.svg" />
        <div className={styles.elias}>@elias</div>
      </div>
      <div className={styles.media1}>
        <img className={styles.twitterIcon} alt="" src="/twitter.svg" />
        <div className={styles.elias}>@elias</div>
      </div>
      <div className={styles.contact}>
        <div className={styles.imInterestedInFreelanceOpWrapper}>
          <div className={styles.imInterestedIn}>
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </div>
        </div>
        <div className={styles.groupDiv}>
          <MessageContainer userId1="Elias#1234" propLeft="197px" />
          <div className={styles.supportMeHereParent}>
            <div className={styles.supportMeHere}>Support me here</div>
            <div className={styles.div2}>4149500120690030</div>
          </div>
        </div>
      </div>
      <Header
        onFrameContainer113Click={onFrameContainer24Click}
        onHeaderLinkContainerClick={onHeaderLinkContainerClick}
      />
      <div className={styles.media2}>
        <img
          className={styles.line10Stroke}
          alt=""
          src="/line-10-stroke1.svg"
        />
        <div className={styles.githubParent}>
          <img className={styles.twitterIcon} alt="" src="/github.svg" />
          <img className={styles.twitterIcon} alt="" src="/dribble.svg" />
          <img className={styles.twitterIcon} alt="" src="/figma.svg" />
        </div>
      </div>
    </div>
  );
};

export default Contacts1;
