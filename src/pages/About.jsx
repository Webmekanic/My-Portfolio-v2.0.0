import React, { useEffect, useContext } from "react"
import BgText from "../components/shared/BgText"
import Footer from "../components/layouts/Footer"
import Button from "../components/shared/Button"
import { AboutMe } from "../styles/AboutStyle"
import { AboutAniebo } from "../styles/HomeStyle"
import CssLogo from "../components/layouts/assets/cssLogo.svg"
import JsLogo from "../components/layouts/assets/jsLogo.svg"
import ReactJs from "../components/layouts/assets/reactjs.svg"
import HtmlIcon from "../components/layouts/assets/htmlIcon.svg"
import PortfolioContext from "../context/portfolio/PortfolioContext"

const About = () => {
  const { loading, dispatch } = useContext(PortfolioContext)

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "SET_LOADING" })
    }, 3000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <AboutMe>
        <div className="pattern1"></div>
        <div className="pattern2"></div>
        <div className="pattern3"></div>
        <section className="aboutContainer">
          <BgText text={"About"} classname="AboutBgText" />
          <AboutAniebo>
            <h1 className="aboutTitle">A bit about me</h1>
            <section className="aboutAniebo1">
              <div className="aboutText">
                <p>
                  I am a Front-end Developer with skills in HTML, CSS, Bootstrap
                  SaSS and ReactJS, passionate about developing clean, intuitive
                  interfaces and adding my bit to the world of web development.
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
        <Footer classname="aboutFooter socialIcon" />
      </AboutMe>
    </>
  )
}

export default About
