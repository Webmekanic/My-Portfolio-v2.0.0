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
          <div className="aboutAniebo">
            <div className="fullName">
              <div className="xbox" data-char="David">
                David<div className="inside">David</div>
              </div>
              <div className="xbox xbox1" data-char=" Aniebo">
                Aniebo<div className="inside"> Aniebo</div>
              </div>
            </div>
            <Skills classNames="skillSection" />
          </div>
          <p className="currentRole">Software Engineer</p>
          <div className="letsCodeBtn">
            <img src="/assets/letcodeicon1.svg" alt="" className="img-circle" />
            <img
              src="/assets/letcodeicon2.svg"
              alt=""
              className="img-circle2"
              width={60}
              height={60}
            />
            <Button text={"Let's code"} handleClick={handleClick} />
          </div>
        </section>
        <section className="homeAboutMe">
          <BgText text={"About"} classname="homeAboutBgText" />
          <section className="homeAboutSection">
            <AboutAniebo>
              <h1 className="aboutTitle">A bit about me</h1>
              <section className="aboutAniebo1">
                <div className="aboutText">
                  <p>
                    I am a Software Engineer with skills in MongoDB, ExpressJS,
                    ReactJS, and NodeJS (MERN Stack), passionate about
                    developing clean, intuitive interfaces and adding my bit to
                    the world of web development.
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
            </AboutAniebo>
          </section>
          <ProjectStats>
            <div className="projectStatsContainer">
              <div className="projectStatsWrapper">
                <h1 className="myStats">10</h1>
                <p>Completed Projects</p>
              </div>
              <div className="projectStatsWrapper">
                <h1 className="myStats">10</h1>
                <p>Live Projects</p>
              </div>
              <div className="projectStatsWrapper">
                <h1 className="myStats">10</h1>
                <p>Happy Clients</p>
              </div>
            </div>
          </ProjectStats>
          <section className="projectSection">
            <BgText text={"Project"} classname="homeProjectBgText" />
            <ProjectSection>
              <div className="projectSectionContainer">
                <h1 className="aboutTitle">My Portfolio</h1>
                <div className="projectParagraph">
                  <p className="sectionDescription">
                    Here are some select projects I have been excited to work on
                    with amazing and talented people.
                  </p>
                  <p className="sectionDescription">
                    This is just a glimpse of my capabilities as a developer. I
                    would definitely like to add a touch of my magic to your
                    project.
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
  )
}

export default Home
