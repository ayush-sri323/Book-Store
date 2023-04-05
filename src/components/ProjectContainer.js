import { useMemo } from "react";
import styles from "./ProjectContainer.module.css";

const ProjectContainer = ({
  rectangle22,
  hTML,
  sCSS,
  python,
  chertNodes,
  minecraftServersHosting,
  live,
  propWidth,
  propFlexShrink,
}) => {
  const projectStyle = useMemo(() => {
    return {
      width: propWidth,
      flexShrink: propFlexShrink,
    };
  }, [propWidth, propFlexShrink]);

  return (
    <div className={styles.project} style={projectStyle}>
      <img className={styles.projectChild} alt="" src={rectangle22} />
      <div className={styles.htmlParent}>
        <div className={styles.html}>{hTML}</div>
        <div className={styles.html}>{sCSS}</div>
        <div className={styles.html}>{python}</div>
        <div className={styles.flask}>Flask</div>
        <div className={styles.flask}>Flask</div>
        <div className={styles.flask}>Flask</div>
      </div>
      <div className={styles.htmlGroup}>
        <div className={styles.html}>HTML</div>
        <div className={styles.html}>SCSS</div>
        <div className={styles.html}>Python</div>
        <div className={styles.html}>Flask</div>
        <div className={styles.flask}>Flask</div>
        <div className={styles.flask}>Flask</div>
      </div>
      <div className={styles.chertnodesParent}>
        <div className={styles.chertnodes}>{chertNodes}</div>
        <div className={styles.minecraftServersHosting}>
          {minecraftServersHosting}
        </div>
        <div className={styles.instanceParent}>
          <div className={styles.liveWrapper}>
            <div className={styles.live}>{live}</div>
          </div>
          <div className={styles.demoWrapper}>
            <div className={styles.live}>{`Cached >=`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer;
