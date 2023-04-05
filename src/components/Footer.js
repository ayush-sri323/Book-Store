import { useMemo } from "react";
import styles from "./Footer.module.css";

const Footer = ({ groupSvgUrl, propLeft }) => {
  const footerStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={styles.footer} style={footerStyle}>
      <div className={styles.footerChild} />
      <div className={styles.frameParent}>
        <div className={styles.groupParent}>
          <div className={styles.groupContainer}>
            <div className={styles.eliasParent}>
              <b className={styles.elias}>Elias</b>
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
            </div>
            <div className={styles.webDesignerIs}>Web designer is the best</div>
            <div className={styles.eliaseliasml}>elias@elias.ml</div>
          </div>
          <div className={styles.mediaParent}>
            <div className={styles.media}>Media</div>
            <img className={styles.groupChild} alt="" src={groupSvgUrl} />
          </div>
        </div>
        <div className={styles.copyright2022Made}>
          © Copyright 2022. Made by Elias
        </div>
      </div>
    </div>
  );
};

export default Footer;
