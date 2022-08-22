import React from "react"
import Button from "../components/shared/Button"
import Footer from "../components/layouts/Footer"
import { GrLocation } from "react-icons/gr"

// import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi"
import { ContactMe } from "../styles/ContactStyle"

const Contact = () => {
  return (
    <ContactMe>
      <div className="pattern1"></div>
      <div className="pattern2"></div>
      <div className="pattern3"></div>

      <svg className="svg" width="100%" height="100vh">
        <text x="20%" y="55%">
          Contact
        </text>
      </svg>
      <section className="formSection">
        <h1 className="contactTitle">Contact Me</h1>
        <p className="contactText">
          Let’s discuss your next project over a digital coffee. Got an idea?
          Need suggestions? Feel free to reach out at anytime.
        </p>
        <div className="contactMe">
          <div className="contactForm">
            <form className="contactInput">
              <input type="text" id="NameInput" placeholder="Your name" />
              <br />
              <input type="email" id="emailInput" placeholder="Email address" />
              <br />
              <textarea id="MessageInput" placeholder="Message..."></textarea>
              {/* <input type="text" placeholder="Message..." /> */}
            </form>
            <div className="contactLocations">
              <div className="linkedinContact">
                <GrLocation />
                {/* <Button /> */}
              </div>
              <div>
                <GrLocation />
                {/* <Button /> */}
              </div>
              <div>
                <GrLocation />
                {/* <Button /> */}
              </div>
              <div>
                <GrLocation />
                {/* <Button /> */}
              </div>
            </div>
          </div>
          <Button text={"send"} className="contactBtn" />
        </div>
      </section>
      <Footer classname="contact-footer" />
    </ContactMe>
  )
}

export default Contact
