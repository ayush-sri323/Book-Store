import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Burger.module.css";

const Burger = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/burger-open");
  }, [navigate]);

  return (
    <div className={styles.burger}>
      <div className={styles.header}>
        <div className={styles.logoParent} onClick={onFrameContainerClick}>
          <div className={styles.logo}>
            <div className={styles.union}>
              <div className={styles.unionChild} />
              <div className={styles.unionItem} />
              <div className={styles.unionInner} />
              <div className={styles.rectangleDiv} />
              <div className={styles.unionChild1} />
              <div className={styles.unionChild2} />
              <div className={styles.unionChild3} />
              <div className={styles.unionChild4} />
              <div className={styles.unionChild5} />
              <div className={styles.unionChild6} />
            </div>
          </div>
          <b className={styles.elias}>Elias</b>
        </div>
        <div
          className={styles.rectangleParent}
          onClick={onFrameContainer1Click}
        >
          <div className={styles.frameChild} />
          <div className={styles.frameItem} />
          <div className={styles.frameInner} />
        </div>
      </div>
      <div className={styles.eliasIsAContainer}>
        <span>{`Elias is a `}</span>
        <span className={styles.webDesigner}>web designer</span>
        <span>{` and `}</span>
        <span className={styles.webDesigner}>front-end developer</span>
      </div>
      <div className={styles.heCraftsResponsive}>
        He crafts responsive websites where technologies meet creativity
      </div>
      <div className={styles.button}>
        <div className={styles.live}>Contact me!!</div>
      </div>
      <div className={styles.logoGroup}>
        <img className={styles.logoIcon} alt="" src="/logo3.svg" />
        <img
          className={styles.imageRemovebgPreview2Icon}
          alt=""
          src="/imageremovebgpreview-21@2x.png"
        />
        <div className={styles.dots}>
          <div className={styles.ellipseParent}>
            <img className={styles.ellipseIcon} alt="" src="/ellipse-234.svg" />
            <img className={styles.ellipseIcon} alt="" src="/ellipse-214.svg" />
            <img className={styles.ellipseIcon} alt="" src="/ellipse-225.svg" />
            <img className={styles.ellipseIcon} alt="" src="/ellipse-204.svg" />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="/ellipse-3615.svg"
            />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.ellipseIcon} alt="" src="/ellipse-256.svg" />
            <img className={styles.ellipseIcon} alt="" src="/ellipse-264.svg" />
            <img className={styles.ellipseIcon} alt="" src="/ellipse-245.svg" />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="/ellipse-1915.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="/ellipse-3616.svg"
            />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.ellipseIcon} alt="" src="/ellipse-296.svg" />
            <img className={styles.ellipseIcon} alt="" src="/ellipse-304.svg" />
            <img className={styles.ellipseIcon} alt="" src="/ellipse-285.svg" />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="/ellipse-1916.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="/ellipse-3617.svg"
            />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.ellipseIcon} alt="" src="/ellipse-337.svg" />
            <img className={styles.ellipseIcon} alt="" src="/ellipse-347.svg" />
            <img className={styles.ellipseIcon} alt="" src="/ellipse-328.svg" />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="/ellipse-1917.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="/ellipse-3618.svg"
            />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.ellipseIcon} alt="" src="/ellipse-338.svg" />
            <img className={styles.ellipseIcon} alt="" src="/ellipse-348.svg" />
            <img className={styles.ellipseIcon} alt="" src="/ellipse-329.svg" />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="/ellipse-1918.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="/ellipse-3619.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.frameChild25} />
        <div className={styles.currentlyWorkingOnContainer}>
          <span
            className={styles.currentlyWorkingOn}
          >{`Currently working on `}</span>
          <span className={styles.portfolio}>Portfolio</span>
        </div>
      </div>
    </div>
  );
};

export default Burger;
