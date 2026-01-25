import React, { useRef, useState, useContext, useEffect } from "react"
import { useRouter } from "next/router"
import Footer from "../src/components/layouts/Footer"
import BgText from "../src/components/shared/BgText"
import Button from "../src/components/shared/Button"
import Socials from "../src/components/shared/Socials"
import { talksList } from "../src/styles/ContactStyle"
import { talksSection } from "../src/styles/HomeStyle"
import emailjs from "@emailjs/browser"
import Navbar from "../src/components/layouts/Navbar"
import MobileMenu from "../src/components/layouts/MobileMenu"
import Loading from "../src/components/layouts/Loading"
import PortfolioContext from "../src/context/portfolio/PortfolioContext"

const Contact = () => {
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

  if (loading) return <Loading />

  return (
    <>
      <Navbar />
      {menu && <MobileMenu />}
      <talksList>
        <div className="pattern1"></div>
        <div className="pattern2"></div>
        <div className="pattern3"></div>
        <section className="talksSection">
          <BgText text={"Contact"} classname="ContactBgText" />
          <talksSection>
            <div className="talksContainer">
              <h1 className="aboutTitle">Contact Me</h1>
              <p className="contactText">
                Let's discuss your next project over a digital coffee. Got an
                idea? Need suggestions? Feel free to reach out at anytime.
              </p>
              <section className="talksList">
                <section className="contactForm">
                  <form className="contactInput" ref={form} onSubmit={sendEmail}>
                    <input
                      type="text"
                      id="NameInput"
                      placeholder="Your name"
                      onChange={onChange}
                      name="name"
                      value={name}
                    />
                    <br />
                    <input
                      type="email"
                      id="emailInput"
                      placeholder="Email address"
                      onChange={onChange}
                      name="email"
                      value={email}
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
                handleClick={sendEmail}
              />
            </div>
          </talksSection>
        </section>

        <Footer classname="contact-footer" />
      </talksList>
    </>
  )
}

export default Contact
