import React from "react"
// import BG1 from "../components/layouts/assets/bckCon1.svg"
import { ContactMe } from "../styles/ContactStyle"

function Contact() {
  return (
    <ContactMe>
      <div className="pattern1"></div>
      <div className="pattern2"></div>
      <div className="pattern3"></div>

      <svg width="100%" height="100vh">
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
        <div>
          <form>
            <input
              type="text"
              // value={}
              id="NameInput"
              placeholder="Your name"
            />
            <br />
            <input
              type="text"
              // value={}
              id="emailInput"
              placeholder="Email address"
            />{" "}
            <br />
            <input
              type="text"
              // value={}
              id="MessageInput"
              placeholder="Message..."
            />
          </form>
        </div>
      </section>

      {/* <ContactFooter /> */}
    </ContactMe>
  )
}

export default Contact
