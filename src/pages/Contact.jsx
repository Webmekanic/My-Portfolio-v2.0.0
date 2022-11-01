import React, { useContext, useEffect } from "react"
import Footer from "../components/layouts/Footer"
import BgText from "../components/shared/BgText"
import Button from "../components/shared/Button"
import Socials from "../components/shared/Socials"
import { ContactMe } from "../styles/ContactStyle"
import { ContactSection } from "../styles/HomeStyle"
import PortfolioContext from "../context/portfolio/PortfolioContext"

const Contact = () => {
  return (
    <ContactMe>
      <div className="pattern1"></div>
      <div className="pattern2"></div>
      <div className="pattern3"></div>
      <section className="contactSection">
        <BgText text={"Contact"} classname="ContactBgText" />
        <ContactSection>
          <div className="contactContainer">
            <h1 className="aboutTitle">Contact Me</h1>
            <p className="contactText">
              Let’s discuss your next project over a digital coffee. Got an
              idea? Need suggestions? Feel free to reach out at anytime.
            </p>
            <section className="contactMe">
              <section className="contactForm">
                <form className="contactInput">
                  <input type="text" id="NameInput" placeholder="Your name" />
                  <br />
                  <input
                    type="email"
                    id="emailInput"
                    placeholder="Email address"
                  />
                  <br />
                  <textarea
                    id="MessageInput"
                    placeholder="Message..."
                  ></textarea>
                </form>
              </section>
              <div className="contactLocations">
                <Socials
                  mediaLink="http://www.twitter.com/webmekanic"
                  myHandle="Linkedin"
                  classname="myLinkedin"
                />
                <Socials
                  mediaLink="http://www.twitter.com/webmekanic"
                  myHandle="#Twitter"
                  classname="myTwitter"
                />
                <Socials
                  mediaLink="http://www.twitter.com/webmekanic"
                  myHandle="GitHub"
                  classname="myGitHub"
                />
                <Socials
                  mediaLink="http://www.twitter.com/webmekanic"
                  myHandle="Codewars"
                  classname="myCodewars"
                />
              </div>
            </section>
            <Button text={"send"} classname="contactBtn" />
          </div>
        </ContactSection>
      </section>

      <Footer classname="contact-footer" />
    </ContactMe>
  )
}

export default Contact
