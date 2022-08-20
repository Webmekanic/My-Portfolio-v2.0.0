import React from "react"
import Footer from "../components/layouts/Footer"
import { AboutMe } from "../styles/AboutStyle"

const About = () => {
  return (
    <AboutMe>
      <div className="pattern1"></div>
      <div className="pattern2"></div>
      <div className="pattern3"></div>
      <svg className="svg" width="100%" height="100vh">
        <text x="20%" y="55%">
          About
        </text>
      </svg>
      {/* <section>
        <h1 className="aboutTitle">A bit about me</h1>
        <div>
          <p>
            I am a Front-end Developer with skills in HTML, CSS, Bootstrap SaSS
            and ReactJS, passionate about developing clean, intuitive interfaces
            and adding my bit to the world of web development.
          </p>
          <p>
            When I am not knee-deep into programming, I can be found reading
            playing games or going for a walk with my dogs.
          </p>
          <p>
            I am open to freelance and full-time positions in an environment
            which presents fun challenges with provision for constant growth.
          </p>
        </div>
      </section> */}
      <Footer classname="aboutFooter" />
    </AboutMe>
  )
}

export default About
