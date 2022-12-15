import React from "react"
import BgText from "../components/shared/BgText"
import Footer from "../components/layouts/Footer"
import Button from "../components/shared/Button"
import CssLogo from "../components/layouts/assets/cssLogo.svg"
import JsLogo from "../components/layouts/assets/jsLogo.svg"
import ReactJs from "../components/layouts/assets/reactjs.svg"
import HtmlIcon from "../components/layouts/assets/htmlIcon.svg"
import { AboutMe } from "../styles/AboutStyle"
import { AboutAniebo } from "../styles/HomeStyle"
import styled from "styled-components"

const About = () => {
  // Link to resume on google drive
  const url =
    "https://drive.google.com/file/d/1DSBBj4rwJqRkyRokKVfH29DTWd3QRsYd/view?usp=sharing"

  const downloadResume = () => {
    window.open(url, "_blank")
  }

  const AboutDavid = styled(AboutAniebo)`
    margin-top: 40px;

    @media ${({ theme }) => theme.mediaQueries.below768} {
      margin-top: 0;
    }
  `

  return (
    <>
      <AboutMe>
        <div className="pattern1"></div>
        <div className="pattern2"></div>
        <div className="pattern3"></div>
        <section className="aboutContainer">
          <BgText text={"About"} classname="AboutBgText" />
          <AboutDavid>
            <h1 className="aboutTitle">A bit about me</h1>
            <section className="aboutAniebo1">
              <div className="aboutText">
                <p>
                  I am a Software Engineer with skills in MongoDB, ExpressJS,
                  ReactJS, and NodeJS (MERN Stack), passionate about developing
                  clean, intuitive interfaces and adding my bit to the world of
                  web development.
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
                  classname="downloadResumeButton"
                  handleClick={downloadResume}
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
          </AboutDavid>
        </section>
        <Footer classname="aboutFooter socialIcon" />
      </AboutMe>
    </>
  )
}

export default About
