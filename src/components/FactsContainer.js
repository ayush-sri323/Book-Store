import styles from "./FactsContainer.module.css";

const FactsContainer = () => {
  return (
    <div className={styles.facts}>
      <div className={styles.parent}>
        <div className={styles.div}>#</div>
        <div className={styles.smallProjects}>my-fun-facts</div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.factParent}>
          <div className={styles.fact}>
            <div className={styles.iLikeWinter}>
              I like winter more than summer
            </div>
          </div>
          <div className={styles.fact}>
            <div className={styles.iLikeWinter}>
              I often bike with my friends
            </div>
          </div>
        </div>
        <div className={styles.factParent}>
          <div className={styles.fact}>
            <div className={styles.iLikeWinter}>
              <span>{`I like `}</span>
              <span className={styles.pizza}>pizza</span>
              <span>{` and `}</span>
              <span className={styles.pizza}>pasta</span>
            </div>
          </div>
          <div className={styles.fact}>
            <div className={styles.iLikeWinter}>
              <span>{`I was in `}</span>
              <span className={styles.pizza}>Egypt</span>
              <span>{`, `}</span>
              <span className={styles.pizza}>Poland</span>
              <span>{` and `}</span>
              <span className={styles.pizza}>Turkey</span>
            </div>
          </div>
        </div>
        <div className={styles.instanceWrapper}>
          <div className={styles.fact}>
            <div className={styles.iLikeWinter}>
              I’m still studing in school
            </div>
          </div>
        </div>
        <div className={styles.factParent}>
          <div className={styles.fact}>
            <div className={styles.iLikeWinter}>
              <span>{`My favorite movie is `}</span>
              <span className={styles.pizza}>The Green Mile</span>
            </div>
          </div>
          <div className={styles.fact}>
            <div className={styles.iLikeWinter}>I don’t have any siblings</div>
          </div>
        </div>
      </div>
      <div className={styles.instanceContainer}>
        <div className={styles.frameGroup}>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
            <img className={styles.frameChild1} alt="" src="/ellipse-233.svg" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
            <img className={styles.frameChild1} alt="" src="/ellipse-233.svg" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
            <img className={styles.frameChild1} alt="" src="/ellipse-233.svg" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
            <img className={styles.frameChild1} alt="" src="/ellipse-233.svg" />
          </div>
          <div className={styles.ellipseParent2}>
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
          </div>
        </div>
        <img className={styles.logoIcon} alt="" src="/logo2.svg" />
      </div>
    </div>
  );
};

export default FactsContainer;
