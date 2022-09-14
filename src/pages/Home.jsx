import React from "react"
import Skills from "../components/layouts/Skills"
import BgText from "../components/shared/BgText"
import Button from "../components/shared/Button"
// import Footer from "../components/layouts/Footer"
import letsCodeIcon1 from "../components/layouts/assets/letcodeicon1.svg"
import letsCodeIcon2 from "../components/layouts/assets/letcodeicon2.svg"
import CssLogo from "../components/layouts/assets/cssLogo.svg"
import JsLogo from "../components/layouts/assets/jsLogo.svg"
import ReactJs from "../components/layouts/assets/reactjs.svg"
import HtmlIcon from "../components/layouts/assets/htmlIcon.svg"
import {
  MyHome,
  AboutAniebo,
  ProjectStats,
  ProjectSection,
} from "../styles/HomeStyle"

function Home() {
  return (
    <>
      <MyHome>
        <div className="pattern1"></div>
        <div className="pattern2"></div>
        <div className="pattern3"></div>
        <div className="pattern4"></div>
        <div className="pattern5"></div>
        <div className="pattern6"></div>
        <div className="pattern7"></div>
        <div className="pattern8"></div>
        <div className="pattern9"></div>
        <section className="myNameContainer">
          <div className="aboutAniebo">
            <div className="fullName">
              <div class="xbox" data-char="David">
                David<div class="inside">David</div>
              </div>
              <div class="xbox xbox1" data-char=" Aniebo">
                Aniebo<div class="inside"> Aniebo</div>
              </div>
            </div>
            <Skills />
          </div>
          <p className="currentRole">Software Engineer</p>
          <div className="letsCodeBtn">
            <img src={letsCodeIcon1} alt="" className="img-circle" />
            <img
              src={letsCodeIcon2}
              alt=""
              className="img-circle2"
              sizes="60px"
            />
            <Button text={"Let’s code"} />
          </div>
        </section>
        <section className="homeAboutMe">
          <BgText text={"About"} classname="homeAboutBgText" />
          {/* <BgText text={"Me"} classname="homeAboutMeText" /> */}
          <section>
            <AboutAniebo>
              <h1 className="aboutTitle">A bit about me</h1>
              <section className="aboutAniebo1">
                <div className="aboutText">
                  <p>
                    I am a Front-end Developer with skills in HTML, CSS,
                    Bootstrap SaSS and ReactJS, passionate about developing
                    clean, intuitive interfaces and adding my bit to the world
                    of web development.
                  </p>
                  <p className="aboutText2">
                    When I am not knee-deep into programming, I can be found
                    reading playing games or going for a walk with my dogs.
                  </p>
                  <p>
                    I am open to freelance and full-time positions in an
                    environment which presents fun challenges with provision for
                    constant growth.
                  </p>
                  <Button
                    text={"Download Resume"}
                    className="downloadResumeButton"
                  />
                </div>
                <div className="skillsCard">
                  <div className="skillSet">
                    <img className="cssLogo" src={CssLogo} alt="CSS" />
                    <div className="skillSetRating">
                      <div className="skillRatingBar"></div>
                      <div className="skillRatingBar"></div>
                    </div>
                  </div>
                  <div className="skillSet">
                    <img className="cssLogo" src={HtmlIcon} alt="CSS" />
                    <div className="skillSetRating">
                      <div className="skillRatingBar"></div>
                      <div className="skillRatingBar"></div>
                    </div>
                  </div>
                  <div className="skillSet">
                    <img className="cssLogo" src={ReactJs} alt="CSS" />
                    <div className="skillSetRating">
                      <div className="skillRatingBar"></div>
                      <div className="skillRatingBar"></div>
                    </div>
                  </div>
                  <div className="skillSet">
                    <img className="cssLogo" src={JsLogo} alt="CSS" />
                    <div className="skillSetRating">
                      <div className="skillRatingBar"></div>
                      <div className="skillRatingBar"></div>
                    </div>
                  </div>
                </div>
              </section>
            </AboutAniebo>
          </section>
          <ProjectStats>
            <div className="projectStatsContainer">
              <div className="projectStatsWrapper">
                <h1 className="myStats">10</h1>
                <p>Completed Projects</p>
              </div>
              <div className="projectStatsWrapper">
                <h1 className="myStats">10</h1>
                <p>Live Projects</p>
              </div>
              <div className="projectStatsWrapper">
                <h1 className="myStats">10</h1>
                <p>Happy Clients</p>
              </div>
            </div>
          </ProjectStats>
          <section className="projectSection">
            <BgText text={"Project"} classname="homeProjectBgText" />
            <ProjectSection>
              <h1 className="aboutTitle">My Portfolio</h1>
              <div className="projectParagraph">
                <p className="sectionDescription">
                  Here are some select projects I have been excited to work on
                  with amazing and talented people.
                </p>
                <p className="sectionDescription">
                  This is just a glimpse of my capabilities as a developer. I
                  would definitely like to add a touch of my magic to your
                  project.
                </p>
              </div>
              <section className="myProject"></section>
            </ProjectSection>
          </section>
        </section>
        {/* <Footer classname="homeFooter" /> */}
      </MyHome>
    </>
  )
}

export default Home
