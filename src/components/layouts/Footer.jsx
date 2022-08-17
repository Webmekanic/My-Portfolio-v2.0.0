import React from "react"
import { FooterSection } from "../../styles/footerStyle"

import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi"

const Footer = () => {
  const footerYear = new Date().getFullYear()

  return (
    <FooterSection>
      <div className="horizontalLine"></div>
      <div className="contactAddresses">
        <section className="copyRight">
          <p className="myInfo">&copy; David Aniebo {footerYear} </p>
          <p className="myInfo myRole">Software Engineer</p>
          <a className="myEmail" href="mailto:aniebovictor001@gmail.com">
            davidaniebo@gmail.com
          </a>
        </section>

        {/* social icons */}
        <div className="socialIcons">
          <a
            className="socialLink"
            href="https://github.com/Webmekanic"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
          </a>
          <a
            href="https://github.com/Webmekanic"
            target="_blank"
            rel="noreferrer"
            className="socialLink"
          >
            <FiLinkedin className="" />
          </a>
          <a
            href="https://github.com/Webmekanic"
            target="_blank"
            rel="noreferrer"
            className="socialLink"
          >
            <FiTwitter className="" />
          </a>
        </div>
      </div>
    </FooterSection>
  )
}

export default Footer
