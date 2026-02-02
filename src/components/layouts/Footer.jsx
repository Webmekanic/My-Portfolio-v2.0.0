import React from "react"
import { FooterSection } from "../../styles/footerStyle"
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi"
import Button from "../shared/Button"

const Footer = ({ classname }) => {
  const footerYear = new Date().getFullYear()

    const handleClick = () => {
      router.push("/about");
    };

  return (
    <FooterSection className={classname}>
      <div className="contactSection">
        <div className="contactTitle">
          <h2 className="contactTitleText">
            Ready to build? <br />
            let’s grab a coffee
          </h2>
        </div>
        <div>
          <p className="contactText">
            Let’s discuss your next project over a digital coffee. <br />
            Got an idea? Need suggestions? Reach out!
          </p>
          <div className="contactButton">
            <Button
              variant="primary"
              text={"Send Message"}
              handleClick={handleClick}
            />
            <Button text={"Book a Call"} handleClick={handleClick} />
          </div>
        </div>
      </div>
      <div className="horizontalLine"></div>
      <div className="contactAddresses">
        <section className="copyRight">
          <p className="myInfo">&copy; David Aniebo {footerYear} </p>
          <p className="myInfo myRole">Software Engineer</p>
          <a className="myEmail" href="mailto:aniebovictor001@gmail.com">
            davidaniebo001@gmail.com
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
            href="https://www.linkedin.com/in/david-aniebo/"
            target="_blank"
            rel="noreferrer"
            className="socialLink"
          >
            <FiLinkedin />
          </a>
          <a
            href="https://twitter.com/Webmekanic_"
            target="_blank"
            rel="noreferrer"
            className="socialLink"
          >
            <FiTwitter />
          </a>
        </div>
      </div>
    </FooterSection>
  );
}

export default Footer
