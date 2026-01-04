import React, { useRef, useState, useContext, useEffect } from "react"
import { useRouter } from "next/router"
import Navbar from "../src/components/layouts/Navbar"
import Skills from "../src/components/layouts/Skills"
import BgText from "../src/components/shared/BgText"
import Button from "../src/components/shared/Button"
import Footer from "../src/components/layouts/Footer"
import {
  MyHome,
  AboutAniebo,
  ProjectStats,
  ProjectSection,
  ContactSection,
} from "../src/styles/HomeStyle"
import Socials from "../src/components/shared/Socials"
import Carousel from "../src/components/carousel/Carousel"
import emailjs from "@emailjs/browser"
import PortfolioContext from "../src/context/portfolio/PortfolioContext"
import { getProjects } from "../src/context/portfolio/PortfolioActions"
import MobileMenu from "../src/components/layouts/MobileMenu"
import Loading from "../src/components/layouts/Loading"
import TypingEffect from "../src/components/shared/TypingEffect"
const Home = () => {
  const router = useRouter()
  const form = useRef()
  const { menu, loading, dispatch } = useContext(PortfolioContext)

  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  })

  const { name, email, message } = contact

  useEffect(() => {
    const getprod = async () => {
      const { projects } = await getProjects()
      dispatch({ type: "GET_PROJECTS", payload: projects })
    }

    getprod()
  }, [dispatch])

  useEffect(() => {
    dispatch({ type: "SET_LOADING", payload: true })
    dispatch({ type: "SET_MENU", payload: false })

    setTimeout(() => {
      dispatch({ type: "SET_LOADING", payload: false })
    }, 3000)
  }, [dispatch])

  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value })
  }

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then(
        (response) => {
          console.log("Success", response.text)
          router.push("/success")
        },
        (err) => {
          console.log("Failed", err.text)
        }
      )
    e.target.reset()
  }

  const url =
    "https://drive.google.com/file/d/1DSBBj4rwJqRkyRokKVfH29DTWd3QRsYd/view?usp=sharing"

  const handleClick = () => {
    router.push("/about")
  }

  const downloadResume = () => {
    window.open(url, "_blank")
  }

  if (loading) return <Loading />

  return (
    <>
      <Navbar />
      {menu && <MobileMenu />}
      <MyHome>
        <div className="pattern1"></div>
        <div className="pattern2"></div>
        <div className="pattern3"></div>
        <div className="pattern4"></div>
        <div className="pattern5"></div>
        <div className="pattern6"></div>
        <div className="pattern7"></div>
        <div className="pattern8"></div>
        <div className="pattern9"></div>
        <section className="myNameContainer">
          <div className="myBio1">
            <div className="aboutAniebo">
              <div className="fullName">
                <TypingEffect text="David" className="xbox" />
                <TypingEffect text="Aniebo" className="xbox xbox1" />
              </div>
            </div>
            <p className="currentRole">Software Engineer</p>

            <section className="homeAboutSection">
              <AboutAniebo>
                <section className="aboutAniebo1">
                  <div className="skillsCard">
                    <div className="skillItem"></div>
                    <div className="skillItem"></div>
                    <div className="skillItem"></div>
                    <div className="skillItem"></div>
                    <div className="skillItem"></div>
                    <div className="skillItem"></div>
                  </div>
                  <div className="aboutText">
                    <p>
                      I am a Software Engineer with skills in MongoDB,
                      ExpressJS, ReactJS, and NodeJS (MERN Stack), passionate
                      about developing clean, intuitive interfaces and adding my
                      bit to the world of web development.
                    </p>
                    <p className="aboutText2">
                      When I am not knee-deep into programming, I can be found
                      reading playing games or going for a walk with my dogs.
                    </p>
                    <p className="aboutText3">
                      I am open to freelance and full-time positions in an
                      environment which presents fun challenges with provision
                      for constant growth.
                    </p>

                    <div className="letsCodeBtn">
                      <Button text={"Let's Build"} handleClick={handleClick} />
                    </div>
                  </div>
                </section>
              </AboutAniebo>
            </section>
          </div>
        </section>

        <section className="homeAboutMe">
          <ProjectStats>
            <div className="projectStatsContainer">
              <h6 className="certifications">Certifications</h6>
              <div className="certificationsContainer">
                <div className="certificationItem">
                  <img
                    className="certificationLogo"
                    src="/assets/awsCloud.png"
                    alt="AWS Cloud"
                  />
                  <img
                    className="certificationLogo"
                    src="/assets/awsCloud.png"
                    alt="AWS Cloud"
                  />
                  <img
                    className="certificationLogo"
                    src="/assets/awsCloud.png"
                    alt="AWS Cloud"
                  />
                  <img
                    className="certificationLogo"
                    src="/assets/awsCloud.png"
                    alt="AWS Cloud"
                  />
                </div>
              </div>
            </div>
          </ProjectStats>
          <section className="projectSection">
            <ProjectSection>
              <div className="projectSectionContainer">
                <h1 className="aboutTitle">Featured Work</h1>
                <div className="projectParagraph">
                  <p className="sectionDescription">
                    Here are some cool stuff I have worked on
                  </p>
                </div>
              </div>
              <section className="myProject">
                <Carousel initialIndex={4} />
              </section>
            </ProjectSection>
          </section>

          <section className="contactSection">
            <BgText text={"Contact"} classname="contactBgText" />
            <ContactSection>
              <div className="contactContainer">
                <h1 className="aboutTitle">Contact Me</h1>
                <p className="contactText">
                  Let's discuss your next project over a digital coffee. Got an
                  idea? Need suggestions? Feel free to reach out at anytime.
                </p>
                <section className="contactMe">
                  <section className="contactForm">
                    <form
                      className="contactInput"
                      ref={form}
                      onSubmit={sendEmail}
                    >
                      <input
                        type="text"
                        id="NameInput"
                        placeholder="Your name"
                        name="name"
                        value={name}
                        onChange={onChange}
                      />
                      <br />
                      <input
                        type="email"
                        id="emailInput"
                        placeholder="Email address"
                        name="email"
                        value={email}
                        onChange={onChange}
                      />
                      <br />
                      <textarea
                        id="MessageInput"
                        placeholder="Message..."
                        name="message"
                        value={message}
                        onChange={onChange}
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
                      mediaLink="https://twitter.com/Webmekanic_"
                      myHandle="#Twitter"
                      classname="myTwitter"
                    />
                    <Socials
                      mediaLink="https://github.com/Webmekanic"
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
                  handleClick={sendEmail}
                />
              </div>
            </ContactSection>
          </section>
        </section>
        <Footer classname="contact-footer" />
      </MyHome>
    </>
  );
}

export default Home
