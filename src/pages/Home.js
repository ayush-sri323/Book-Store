import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Background from "../components/Background";
import Footer from "../components/Footer";
import ContactContainer from "../components/ContactContainer";
import AboutMeContainer from "../components/AboutMeContainer";
import SkillsContainer from "../components/SkillsContainer";
import ContainerElias from "../components/ContainerElias";
import Quote from "../components/Quote";
import Header from "../components/Header";
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();

  const onFrameContainer113Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHeaderLinkContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onViewAllClick = useCallback(() => {
    navigate("/projects");
  }, [navigate]);

  return (
    <div className={styles.home}>
      <Background />
      <Footer groupSvgUrl="/group-22.svg" propLeft="calc(50% - 685.5px)" />
      <ContactContainer />
      <AboutMeContainer />
      <SkillsContainer />
      <div className={styles.projects}>
        <div className={styles.projectParent}>
          <div className={styles.project}>
            <img
              className={styles.projectChild}
              alt=""
              src="/rectangle-22@2x.png"
            />
            <div className={styles.htmlParent}>
              <div className={styles.html}>HTML</div>
              <div className={styles.html}>SCSS</div>
              <div className={styles.html}>Python</div>
              <div className={styles.html}>Flask</div>
              <div className={styles.flask1}>Flask</div>
              <div className={styles.flask1}>Flask</div>
            </div>
            <div className={styles.htmlGroup}>
              <div className={styles.html}>HTML</div>
              <div className={styles.html}>SCSS</div>
              <div className={styles.html}>Python</div>
              <div className={styles.html}>Flask</div>
              <div className={styles.flask1}>Flask</div>
              <div className={styles.flask1}>Flask</div>
            </div>
            <div className={styles.chertnodesParent}>
              <div className={styles.chertnodes}>ChertNodes</div>
              <div
                className={styles.minecraftServersHosting}
              >{`Minecraft servers hosting `}</div>
              <div className={styles.instanceParent}>
                <div className={styles.liveWrapper}>
                  <div className={styles.live}>{`Live <~>`}</div>
                </div>
                <div className={styles.demoWrapper}>
                  <div className={styles.live}>{`Cached >=`}</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <img
              className={styles.projectChild}
              alt=""
              src="/rectangle-221@2x.png"
            />
            <div className={styles.htmlParent}>
              <div className={styles.html}>React</div>
              <div className={styles.html}>Express</div>
              <div className={styles.html}>Discord.js</div>
              <div className={styles.html}>Node.js</div>
              <div className={styles.flask1}>Flask</div>
              <div className={styles.flask1}>Flask</div>
            </div>
            <div className={styles.htmlParent}>
              <div className={styles.html}>HTML</div>
              <div className={styles.html}>SCSS</div>
              <div className={styles.html}>Python</div>
              <div className={styles.html}>Flask</div>
              <div className={styles.flask1}>Flask</div>
              <div className={styles.flask1}>Flask</div>
            </div>
            <div className={styles.chertnodesParent}>
              <div className={styles.chertnodes}>ProtectX</div>
              <div className={styles.minecraftServersHosting}>
                Discord anti-crash bot
              </div>
              <div className={styles.instanceParent}>
                <div className={styles.liveWrapper}>
                  <div className={styles.live}>{`Live <~>`}</div>
                </div>
                <div className={styles.demoContainer}>
                  <div className={styles.live}>{`Cached >=`}</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.project}>
            <img
              className={styles.projectChild}
              alt=""
              src="/rectangle-222@2x.png"
            />
            <div className={styles.htmlParent}>
              <div className={styles.html}>CSS</div>
              <div className={styles.html}>Express</div>
              <div className={styles.html}>Node.js</div>
              <div className={styles.flask1}>Flask</div>
              <div className={styles.flask1}>Flask</div>
              <div className={styles.flask1}>Flask</div>
            </div>
            <div className={styles.htmlGroup}>
              <div className={styles.html}>HTML</div>
              <div className={styles.html}>SCSS</div>
              <div className={styles.html}>Python</div>
              <div className={styles.html}>Flask</div>
              <div className={styles.flask1}>Flask</div>
              <div className={styles.flask1}>Flask</div>
            </div>
            <div className={styles.chertnodesParent}>
              <div className={styles.chertnodes}>Kahoot Answers Viewer</div>
              <div className={styles.minecraftServersHosting}>
                Get answers to your kahoot quiz
              </div>
              <div className={styles.instanceParent}>
                <div className={styles.liveWrapper}>
                  <div className={styles.live}>{`Live <~>`}</div>
                </div>
                <div className={styles.demoContainer}>
                  <div className={styles.live}>{`Cached >=`}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.h2Parent}>
          <div className={styles.h2}>
            <div className={styles.parent}>
              <div className={styles.live}>#</div>
              <div className={styles.projects1}>projects</div>
            </div>
            <img
              className={styles.line7Stroke}
              alt=""
              src="/line-7-stroke5.svg"
            />
          </div>
          <div
            className={styles.viewAll}
            onClick={onViewAllClick}
          >{`View all ~~>`}</div>
        </div>
      </div>
      <ContainerElias />
      <Quote />
      <div className={styles.phuketIsIn}>Phuket is in thailand</div>
      <Header
        onFrameContainer113Click={onFrameContainer113Click}
        onHeaderLinkContainerClick={onHeaderLinkContainerClick}
      />
      <div className={styles.media}>
        <img className={styles.line10Stroke} alt="" src="/line-10-stroke.svg" />
        <div className={styles.githubParent}>
          <img className={styles.githubIcon} alt="" src="/github.svg" />
          <img className={styles.githubIcon} alt="" src="/dribble.svg" />
          <img className={styles.githubIcon} alt="" src="/figma.svg" />
        </div>
      </div>
    </div>
  );
};

export default Home;
