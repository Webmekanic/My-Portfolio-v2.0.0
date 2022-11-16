import React, { useRef } from "react"
import Footer from "../components/layouts/Footer"
import BgText from "../components/shared/BgText"
import Button from "../components/shared/Button"
import Socials from "../components/shared/Socials"
import { ContactMe } from "../styles/ContactStyle"
import { ContactSection } from "../styles/HomeStyle"
import emailjs from "@emailjs/browser"

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }

  const handleClick = () => {
    console.log("email sent")
  }

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
                <form className="contactInput" ref={form} onSubmit={sendEmail}>
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
                  mediaLink="https://www.linkedin.com/in/david-aniebo/"
                  myHandle="Linkedin"
                  classname="myLinkedin"
                />
                <Socials
                  mediaLink="http://www.twitter.com/webmekanic_"
                  myHandle="#Twitter"
                  classname="myTwitter"
                />
                <Socials
                  mediaLink="http://github.com/webmekanic"
                  myHandle="GitHub"
                  classname="myGitHub"
                />
                <Socials
                  mediaLink="https://www.codewars.com/users/webmekanic"
                  myHandle="Codewars"
                  classname="myCodewars"
                />
              </div>
            </section>
            <Button
              text={"send"}
              classname="contactBtn"
              handleClick={handleClick}
            />
          </div>
        </ContactSection>
      </section>

      <Footer classname="contact-footer" />
    </ContactMe>
  )
}

export default Contact
