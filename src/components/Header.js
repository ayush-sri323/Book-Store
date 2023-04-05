import styles from "./Header.module.css";

const Header = ({ onFrameContainer113Click, onHeaderLinkContainerClick }) => {
  return (
    <div className={styles.header}>
      <div className={styles.logoParent} onClick={onFrameContainer113Click}>
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
      <div className={styles.headerLinkParent}>
        <div className={styles.headerLink} onClick={onHeaderLinkContainerClick}>
          <div className={styles.div}>#</div>
          <div className={styles.home}>home</div>
        </div>
        <div className={styles.headerLink1}>
          <div className={styles.elias}>#</div>
          <div className={styles.home1}>works</div>
        </div>
        <div className={styles.headerLink1}>
          <div className={styles.elias}>#</div>
          <div className={styles.home1}>about-me</div>
        </div>
        <div className={styles.headerLink1}>
          <div className={styles.elias}>#</div>
          <div className={styles.home1}>contacts</div>
        </div>
        <div className={styles.languageSwitcher}>
          <div className={styles.en}>EN</div>
          <img
            className={styles.languageSwitcherChild}
            alt=""
            src="/group-58.svg"
          />
          <div className={styles.ruParent}>
            <div className={styles.elias}>RU</div>
            <div className={styles.elias}>UA</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
