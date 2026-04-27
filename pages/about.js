import React, { useContext, useEffect } from "react"
import BgText from "../src/components/shared/BgText"
import Footer from "../src/components/layouts/Footer"
import Button from "../src/components/shared/Button"
import { AboutMe } from "../src/styles/AboutStyle"
import { AboutAniebo } from "../src/styles/HomeStyle"
import styled from "styled-components"
import Navbar from "../src/components/layouts/Navbar"
import MobileMenu from "../src/components/layouts/MobileMenu"
import Loading from "../src/components/layouts/Loading"
import PortfolioContext from "../src/context/portfolio/PortfolioContext"
const About = () => {
  const { menu, loading, dispatch } = useContext(PortfolioContext)

  useEffect(() => {
    dispatch({ type: "SET_LOADING", payload: true })
    dispatch({ type: "SET_MENU", payload: false })

    setTimeout(() => {
      dispatch({ type: "SET_LOADING", payload: false })
    }, 3000)
  }, [dispatch])

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

  if (loading) return <Loading />

  return (
    <>
      <Navbar />
      {menu && <MobileMenu />}
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
                  <img className="cssLogo" src="/assets/cssLogo.svg" alt="CSS" />
                  <div className="skillSetRating">
                    <div className="skillRatingBar"></div>
                    <div className="skillRatingBar"></div>
                  </div>
                </div>
                <div className="skillSet">
                  <img className="cssLogo" src="/assets/htmlIcon.svg" alt="HTML" />
                  <div className="skillSetRating">
                    <div className="skillRatingBar"></div>
                    <div className="skillRatingBar"></div>
                  </div>
                </div>
                <div className="skillSet">
                  <img className="cssLogo" src="/assets/reactjs.svg" alt="React" />
                  <div className="skillSetRating">
                    <div className="skillRatingBar"></div>
                    <div className="skillRatingBar"></div>
                  </div>
                </div>
                <div className="skillSet">
                  <img className="cssLogo" src="/assets/jsLogo.svg" alt="JavaScript" />
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
