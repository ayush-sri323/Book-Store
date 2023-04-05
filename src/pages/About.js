import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import FactsContainer from "../components/FactsContainer";
import Header from "../components/Header";
import styles from "./About.module.css";

const About = () => {
  const navigate = useNavigate();

  const onFrameContainer86Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHeaderLinkContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.about}>
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
          <div className={styles.aboutMe}>about-me</div>
        </div>
        <div className={styles.whoAmI}>Who am i?</div>
      </div>
      <div className={styles.about1}>
        <div className={styles.jcGellidonE3numcscugoUnsplaParent}>
          <img
            className={styles.jcGellidonE3numcscugoUnsplaIcon}
            alt=""
            src="/jcgellidone3numcscugounsplashremovebgpreview1-1@2x.png"
          />
          <div className={styles.frameParent1}>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-233.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-233.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-233.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-233.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-233.svg"
              />
            </div>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-233.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-233.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-233.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-233.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-233.svg"
              />
            </div>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-233.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-233.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-233.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-233.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-233.svg"
              />
            </div>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-233.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-233.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-233.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-233.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-233.svg"
              />
            </div>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-233.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-233.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-233.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-233.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-233.svg"
              />
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-233.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-233.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-233.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-233.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-233.svg"
              />
            </div>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-255.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-255.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-255.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-255.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-255.svg"
              />
            </div>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-295.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-295.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-295.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-295.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-295.svg"
              />
            </div>
            <div className={styles.ellipseParent10}>
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-233.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-233.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-233.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-233.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-233.svg"
              />
            </div>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-233.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-233.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-233.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-233.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-233.svg"
              />
            </div>
          </div>
          <img
            className={styles.line7Stroke}
            alt=""
            src="/line-7-stroke3.svg"
          />
        </div>
        <div className={styles.helloImEliasContainer}>
          <p className={styles.helloImElias}>Hello, i’m Elias!</p>
          <p className={styles.helloImElias}>&nbsp;</p>
          <p
            className={styles.helloImElias}
          >{`I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. `}</p>
          <p className={styles.helloImElias}>&nbsp;</p>
          <p className={styles.helloImElias}>
            Transforming my creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
          </p>
        </div>
      </div>
      <div className={styles.skills}>
        <div className={styles.parent}>
          <div className={styles.div1}>#</div>
          <div className={styles.smallProjects}>skills</div>
        </div>
        <div className={styles.blockParent}>
          <div className={styles.block}>
            <div className={styles.languagesWrapper}>
              <div className={styles.div}>Languages</div>
            </div>
            <div className={styles.blockChild} />
            <div className={styles.frameParent3}>
              <div className={styles.typescriptParent}>
                <div className={styles.typescript}>TypeScript</div>
                <div className={styles.typescript}>Lua</div>
                <div className={styles.lua1}>Lua</div>
                <div className={styles.lua1}>Lua</div>
              </div>
              <div className={styles.typescriptParent}>
                <div className={styles.typescript}>Python</div>
                <div className={styles.typescript}>JavaScript</div>
                <div className={styles.lua1}>JavaScript</div>
              </div>
              <div className={styles.pythonGroup}>
                <div className={styles.typescript}>Python</div>
                <div className={styles.typescript}>JavaScript</div>
              </div>
              <div className={styles.pythonGroup}>
                <div className={styles.typescript}>Python</div>
                <div className={styles.typescript}>JavaScript</div>
              </div>
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.languagesWrapper}>
              <div className={styles.div}>Other</div>
            </div>
            <div className={styles.blockChild} />
            <div className={styles.frameParent3}>
              <div className={styles.typescriptParent}>
                <div className={styles.typescript}>HTML</div>
                <div className={styles.typescript}>CSS</div>
                <div className={styles.typescript}>EJS</div>
                <div className={styles.typescript}>SCSS</div>
              </div>
              <div className={styles.typescriptParent}>
                <div className={styles.typescript}>REST</div>
                <div className={styles.typescript}>Jinja</div>
                <div className={styles.lua1}>JavaScript</div>
              </div>
              <div className={styles.pythonGroup}>
                <div className={styles.typescript}>Jinja</div>
                <div className={styles.lua1}>Express.js</div>
              </div>
              <div className={styles.pythonGroup}>
                <div className={styles.typescript}>Python</div>
                <div className={styles.typescript}>JavaScript</div>
              </div>
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.languagesWrapper}>
              <div className={styles.div}>Tools</div>
            </div>
            <div className={styles.blockChild} />
            <div className={styles.frameParent3}>
              <div className={styles.typescriptParent}>
                <div className={styles.typescript}>VSCode</div>
                <div className={styles.typescript}>Neovim</div>
                <div className={styles.lua1}>Lua</div>
                <div className={styles.typescript}>Linux</div>
              </div>
              <div className={styles.typescriptParent}>
                <div className={styles.typescript}>Figma</div>
                <div className={styles.typescript}>XFCE</div>
                <div className={styles.typescript}>Arch</div>
              </div>
              <div className={styles.pythonParent5}>
                <div className={styles.typescript}>Git</div>
                <div className={styles.typescript}>Font Awesome</div>
              </div>
              <div className={styles.pythonParent5}>
                <div className={styles.typescript}>KDE</div>
                <div className={styles.typescript}>fish</div>
              </div>
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.languagesWrapper}>
              <div className={styles.div}>Databases</div>
            </div>
            <div className={styles.blockChild} />
            <div className={styles.frameParent3}>
              <div className={styles.typescriptParent}>
                <div className={styles.typescript}>SQLite</div>
                <div className={styles.typescript}>PostgreSQL</div>
                <div className={styles.lua1}>Lua</div>
                <div className={styles.lua1}>Lua</div>
              </div>
              <div className={styles.typescriptParent}>
                <div className={styles.typescript}>Mongo</div>
                <div className={styles.lua1}>avaScript</div>
                <div className={styles.lua1}>JavaScript</div>
              </div>
              <div className={styles.pythonGroup}>
                <div className={styles.typescript}>Python</div>
                <div className={styles.typescript}>JavaScript</div>
              </div>
              <div className={styles.pythonGroup}>
                <div className={styles.typescript}>Python</div>
                <div className={styles.typescript}>JavaScript</div>
              </div>
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.languagesWrapper}>
              <div className={styles.div}>Frameworks</div>
            </div>
            <div className={styles.blockChild} />
            <div className={styles.frameParent3}>
              <div className={styles.typescriptParent}>
                <div className={styles.typescript}>React</div>
                <div className={styles.typescript}>Vue</div>
                <div className={styles.lua1}>Lua</div>
                <div className={styles.lua1}>Lua</div>
              </div>
              <div className={styles.typescriptParent}>
                <div className={styles.typescript}>Disnake</div>
                <div className={styles.typescript}>Discord.js</div>
                <div className={styles.lua1}>JavaScript</div>
              </div>
              <div className={styles.pythonParent5}>
                <div className={styles.typescript}>Flask</div>
                <div className={styles.typescript}>Express.js</div>
              </div>
              <div className={styles.pythonGroup}>
                <div className={styles.typescript}>Python</div>
                <div className={styles.typescript}>JavaScript</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FactsContainer />
      <Header
        onFrameContainer113Click={onFrameContainer86Click}
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

export default About;
