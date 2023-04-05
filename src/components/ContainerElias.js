import WebDesigner from "./WebDesigner";
import FrontEndDeveloper from "./FrontEndDeveloper";
import Button from "./Button";
import ImageRemovebgPreview2Icon from "./ImageRemovebgPreview2Icon";
import styles from "./ContainerElias.module.css";

const ContainerElias = () => {
  return (
    <div className={styles.first}>
      <div className={styles.eliasIsAWebDesignerAndFrParent}>
        <div className={styles.eliasIsAContainer}>
          <span>{`Elias is a `}</span>
          <WebDesigner />
          <span>{` and `}</span>
          <FrontEndDeveloper />
        </div>
        <div className={styles.heCraftsResponsive}>
          He crafts responsive websites where technologies meet creativity
        </div>
        <Button />
      </div>
      <div className={styles.logoParent}>
        <img className={styles.logoIcon} alt="" src="/logo1.svg" />
        <ImageRemovebgPreview2Icon />
        <div className={styles.dots}>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.rectangleDiv} />
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

export default ContainerElias;
