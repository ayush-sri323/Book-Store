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
import "antd/dist/antd.min.css";
import { Button } from "antd";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <img className={styles.maskGroupIcon} alt="" src="/mask-group5@2x.png" />
      <div className={styles.homeChild} />
      <img
        className={styles.unsplashnvqykdpe0rwIcon}
        alt=""
        src="/unsplashnvqykdpe0rw@2x.png"
      />
      <b className={styles.designYourInteror}>
        Design your interor with high quality.
      </b>
      <div className={styles.allRightReservedContainer}>
        <p className={styles.p}>2022</p>
        <p className={styles.p}>ALL RIGHT RESERVED</p>
      </div>
      <div className={styles.homeItem} />
      <img className={styles.maskGroupIcon1} alt="" src="/mask-group6@2x.png" />
      <div className={styles.homeInner} />
      <div className={styles.groupParent}>
        <div className={styles.parent}>
          <div className={styles.div}>350+</div>
          <div className={styles.projectCompleted}>Project Completed</div>
        </div>
        <div className={styles.group}>
          <div className={styles.div1}>23+</div>
          <div className={styles.projectCompleted}>Professional Teams</div>
        </div>
        <div className={styles.container}>
          <div className={styles.div2}>15+</div>
          <div className={styles.projectCompleted}>Years Experience</div>
        </div>
      </div>
      <div className={styles.wereOneOfTheBestFurniturParent}>
        <div className={styles.wereOneOf}>
          “We're one of the best furniture agency. Prioritizing customers and
          making purchases easy are the hallmarks of our agency.”
        </div>
        <div className={styles.about}>ABOUT</div>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.homeParent}>
        <div className={styles.home1}>Home</div>
        <div className={styles.aboutUs}>About Us</div>
        <div className={styles.ourTeams}>Our Teams</div>
        <div className={styles.services}>Services</div>
      </div>
      <div className={styles.contactUsWrapper}>
        <div className={styles.contactUs}>Contact Us</div>
      </div>
      <div className={styles.groupContainer}>
        <div className={styles.dananzWrapper}>
          <b className={styles.dananz}>Dananz</b>
        </div>
        <img className={styles.groupItem} alt="" src="/vector-286.svg" />
      </div>
      <img className={styles.vectorIcon} alt="" src="/vector-288.svg" />
      <img className={styles.homeChild1} alt="" src="/vector-289.svg" />
      <div className={styles.rectangleParent}>
        <div className={styles.groupInner} />
        <img className={styles.ellipseIcon} alt="" src="/ellipse-332@2x.png" />
        <div className={styles.ceoOfDananzParent}>
          <div className={styles.ceoOfDananz}>CEO of Dananz</div>
          <div className={styles.argaDanaan}>Arga Danaan</div>
        </div>
      </div>
      <div className={styles.learnMoreWrapper}>
        <div className={styles.contactUs}>Learn More</div>
      </div>
      <div className={styles.onlineLearningWith}>
        Online learning with us does not interfere with your daily life. because
        learning can be done anytime and anywhere.
      </div>
      <div className={styles.serviceParent}>
        <div className={styles.service}>SERVICE</div>
        <div className={styles.attractiveFurnitureWith}>
          attractive furniture with the best quality.
        </div>
        <div className={styles.customizeYourInterior}>
          Customize your interior design into a dream place with the best
          designers and quality furniture. We try our best to fulfill your
          expectations.
        </div>
        <div className={styles.lineDiv} />
      </div>
      <div className={styles.interiorDesign}>Interior Design</div>
      <div className={styles.div3}>01</div>
      <div className={styles.vintageParent}>
        <div className={styles.vintage}>Vintage</div>
        <div className={styles.home1}>01</div>
      </div>
      <div className={styles.div5}>02</div>
      <div className={styles.div6}>03</div>
      <div className={styles.consultant}>Consultant</div>
      <div className={styles.groupDiv}>
        <div className={styles.home1}>02</div>
        <div className={styles.vintage}>Minimalist</div>
      </div>
      <div className={styles.constructionConsultant}>
        Construction Consultant
      </div>
      <div className={styles.parent1}>
        <div className={styles.home1}>03</div>
        <div className={styles.vintage}>Modern</div>
      </div>
      <div className={styles.parent2}>
        <div className={styles.home1}>03</div>
        <div className={styles.vintage}>transitional</div>
      </div>
      <img className={styles.arrowRightIcon} alt="" src="/arrowright.svg" />
      <img className={styles.arrowRightIcon1} alt="" src="/arrowright1.svg" />
      <img className={styles.arrowRightIcon2} alt="" src="/arrowright1.svg" />
      <img className={styles.arrowRightIcon3} alt="" src="/arrowright1.svg" />
      <img className={styles.arrowRightIcon4} alt="" src="/arrowright1.svg" />
      <img className={styles.arrowRightIcon5} alt="" src="/arrowright2.svg" />
      <img className={styles.arrowRightIcon6} alt="" src="/arrowright2.svg" />
      <div className={styles.productParent}>
        <div className={styles.service}>PRODUCT</div>
        <div className={styles.chooseYourProduct}>
          Choose your product themes.
        </div>
        <div className={styles.findTheTheme}>
          Find the theme you want. If our choice of theme is not what you want,
          you can customize it as you want.
        </div>
        <div className={styles.groupChild1} />
      </div>
      <div className={styles.theUseOf}>
        the use of simple and limited elements to get the best effect or
        impression.
      </div>
      <div className={styles.theUseOf1}>
        the use of simple and limited elements to get the best effect or
        impression.
      </div>
      <div className={styles.theUseOf2}>
        the use of simple and limited elements to get the best effect or
        impression.
      </div>
      <div className={styles.theUseOf3}>
        the use of simple and limited elements to get the best effect or
        impression.
      </div>
      <div className={styles.groupParent1}>
        <div className={styles.materialParent}>
          <div className={styles.service}>MATERIAL</div>
          <div className={styles.groupChild2} />
          <div className={styles.choiceOfMaterials}>
            choice of materials for quality furniture.
          </div>
          <div className={styles.youCanCustom}>
            You can custom the material as desired. And our furniture uses the
            best materials and selected quality materials.
          </div>
          <Button
            className={styles.frameButton}
            type="primary"
            size="middle"
            shape="default"
          >
            See Materials
          </Button>
        </div>
        <img
          className={styles.groupIcon}
          alt=""
          src="/group-1000004358@2x.png"
        />
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.rectangleDiv} />
        <div className={styles.groupWrapper}>
          <div className={styles.letsDiscussMakingYourInteParent}>
            <div className={styles.letsDiscussMaking}>
              let's discuss making your interior like a dream place!
            </div>
            <div className={styles.contactUsBelowToWorkTogetParent}>
              <div className={styles.contactUsBelow}>
                Contact us below to work together to build your amazing interior
              </div>
              <Button
                className={styles.groupChild3}
                type="default"
                size="middle"
                shape="default"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.homeChild2} alt="" src="/vector-32.svg" />
      <div className={styles.enterYourEmailToGetTheLaParent}>
        <div className={styles.enterYourEmail}>
          Enter your email to get the laterst news
        </div>
        <div className={styles.emailAddress}>Email Address</div>
        <img className={styles.groupChild4} alt="" src="/ellipse-74.svg" />
      </div>
      <div className={styles.oneOfThe}>One of the best furniture agency.</div>
      <div className={styles.ellipseParent}>
        <img className={styles.groupChild5} alt="" src="/ellipse-320.svg" />
        <img className={styles.groupChild6} alt="" src="/ellipse-320.svg" />
        <img className={styles.groupChild7} alt="" src="/ellipse-320.svg" />
        <img className={styles.groupChild8} alt="" src="/ellipse-320.svg" />
        <div className={styles.followUsOn}>Follow us On</div>
      </div>
      <div className={styles.homeChild3} />
      <div className={styles.groupParent2}>
        <div className={styles.dananzWrapper}>
          <b className={styles.dananz}>Dananz</b>
        </div>
        <img className={styles.groupItem} alt="" src="/vector-286.svg" />
      </div>
      <img className={styles.homeChild4} alt="" src="/group-10000044031.svg" />
    </div>
  );
};

export default Home;
