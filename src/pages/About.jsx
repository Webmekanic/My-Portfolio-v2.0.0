import React from "react"
import BgText from "../components/shared/BgText"
import Footer from "../components/layouts/Footer"
import { AboutMe } from "../styles/AboutStyle"
import Button from "../components/shared/Button"

const About = () => {
  return (
    <AboutMe>
      <div className="pattern1"></div>
      <div className="pattern2"></div>
      <div className="pattern3"></div>
      <BgText text={"About"} classname="aboutBgText" />
      <BgText text={"Me"} classname="aboutMeBgText" />
      <section className="aboutContainer">
        <h1 className="aboutTitle">A bit about me</h1>
        <section className="aboutAniebo">
          <div className="aboutText">
            <p>
              I am a Front-end Developer with skills in HTML, CSS, Bootstrap
              SaSS and ReactJS, passionate about developing clean, intuitive
              interfaces and adding my bit to the world of web development.
            </p>
            <p className="aboutText2">
              When I am not knee-deep into programming, I can be found reading
              playing games or going for a walk with my dogs.
            </p>
            <p>
              I am open to freelance and full-time positions in an environment
              which presents fun challenges with provision for constant growth.
            </p>
            <Button text={"Download Resume"} className="downloadResumeButton" />
          </div>
          <section className="skillsCard">
            <div className="skillSet">
              <img src="" alt="" />
              <div className="skillSetRating">
                <div className="skillRatingBar"></div>
                <div className="skillRatingBar"></div>
              </div>
            </div>
          </section>
        </section>
      </section>
      <Footer classname="aboutFooter" />
    </AboutMe>
  )
}

export default About
