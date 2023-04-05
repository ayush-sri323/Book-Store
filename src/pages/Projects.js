import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import ProjectContainer from "../components/ProjectContainer";
import Header from "../components/Header";
import styles from "./Projects.module.css";

const Projects = () => {
  const navigate = useNavigate();

  const onFrameContainer54Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHeaderLinkContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.projects}>
      <div className={styles.background}>
        <div className={styles.frameParent}>
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
        <div className={styles.frameGroup}>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" src="/ellipse-224.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-203.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-233.svg" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" src="/ellipse-244.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-1912.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-254.svg" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" src="/ellipse-284.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-1913.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-294.svg" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" src="/ellipse-327.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-1914.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-336.svg" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" src="/ellipse-224.svg" />
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
          <div className={styles.projects1}>projects</div>
        </div>
        <div className={styles.listOfMy}>List of my projects</div>
      </div>
      <div className={styles.frameParent1}>
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
              <div className={styles.projectParent}>
                <div className={styles.liveWrapper}>
                  <div className={styles.live}>{`Live <~>`}</div>
                </div>
                <div className={styles.demoWrapper}>
                  <div className={styles.live}>{`Cached >=`}</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.project}>
            <img
              className={styles.projectChild}
              alt=""
              src="/rectangle-223@2x.png"
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
              <div className={styles.projectParent}>
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
              src="/rectangle-224@2x.png"
            />
            <div className={styles.htmlParent}>
              <div className={styles.html}>React</div>
              <div className={styles.html}>Express</div>
              <div className={styles.html}>Discord.js</div>
              <div className={styles.html}>Node.js</div>
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
              <div className={styles.chertnodes}>ProtectX</div>
              <div className={styles.minecraftServersHosting}>
                Discord anti-crash bot
              </div>
              <div className={styles.projectParent}>
                <div className={styles.liveFrame}>
                  <div className={styles.live}>{`Live <~>`}</div>
                </div>
                <div className={styles.demoWrapper}>
                  <div className={styles.live}>{`Cached >=`}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.projectParent}>
          <ProjectContainer
            rectangle22="/rectangle-226@2x.png"
            hTML="HTML"
            sCSS="CSS"
            python="JS"
            chertNodes="Kotik Bot"
            minecraftServersHosting="Multi-functional discord bot"
            live={`Live <~>`}
          />
          <ProjectContainer
            rectangle22="rectangle-227@2x.png"
            hTML="Vue"
            sCSS="TS"
            python="Less"
            chertNodes="Portfolio"
            minecraftServersHosting="You’re using it rn"
            live={`Github <~>`}
            propWidth="334px"
            propFlexShrink="0"
          />
        </div>
      </div>
      <div className={styles.h2}>
        <div className={styles.live}>#</div>
        <div className={styles.smallProjects}>complete-apps</div>
      </div>
      <Header
        onFrameContainer113Click={onFrameContainer54Click}
        onHeaderLinkContainerClick={onHeaderLinkContainerClick}
      />
      <div className={styles.media}>
        <img
          className={styles.line10Stroke}
          alt=""
          src="/line-10-stroke1.svg"
        />
        <div className={styles.githubParent}>
          <img className={styles.githubIcon} alt="" src="/github.svg" />
          <img className={styles.githubIcon} alt="" src="/dribble.svg" />
          <img className={styles.githubIcon} alt="" src="/figma.svg" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
