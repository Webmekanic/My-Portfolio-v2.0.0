import React, { useRef, useState, useContext, useEffect } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
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
  TalksSection,
} from "../src/styles/HomeStyle"
import Socials from "../src/components/shared/Socials"
import Carousel from "../src/components/carousel/Carousel"
import emailjs from "@emailjs/browser"
import PortfolioContext from "../src/context/portfolio/PortfolioContext"
import { getProjects, getBlogPosts, getEvents, getAwards } from "../src/context/portfolio/PortfolioActions"
import MobileMenu from "../src/components/layouts/MobileMenu"
import Loading from "../src/components/layouts/Loading"
import TypingEffect from "../src/components/shared/TypingEffect"
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import BlogItem from "../src/components/shared/BlogItem";
import EventCard from "../src/components/shared/EventCard";
import AwardItem from "../src/components/shared/AwardItem";
import CardSkeleton from "../src/components/shared/CardSkeleton";
import { BlogItemStyle } from "../src/styles/BlogtemStyle";


 gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  const router = useRouter();
  const form = useRef();
  const { menu, loading, dispatch } = useContext(PortfolioContext);
  const { events, awards, blogPosts } = useContext(PortfolioContext);
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

useEffect(() => {
  if (loading) return;
  if (!sectionRef.current || !triggerRef.current) return;

  const ctx = gsap.context(() => {
    // total horizontal distance to travel = how much wider the track is than the viewport
    const getScrollDistance = () =>
      sectionRef.current.scrollWidth - triggerRef.current.offsetWidth;

    gsap.fromTo(
      sectionRef.current,
      {
        x: 0,
      },
      {
        x: () => -getScrollDistance(),
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: () => "+=" + getScrollDistance(), // scroll distance matches actual content width
          scrub: true,
          pin: true,
          // pinType: "transform",
          invalidateOnRefresh: true, // recalculates on resize
        },
      },
    );
  });

  return () => ctx.revert();
}, [loading]);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  })

  const { name, email, message } = contact

  useEffect(() => {
    const getprod = async () => {
      const { projects } = await getProjects()
      const { blogPosts } = await getBlogPosts()
      const { events } = await getEvents()
      const { awards } = await getAwards()
      console.log({ projects, "blogPosts": blogPosts, "events": events, "awards": awards })
      dispatch({ type: "GET_PROJECTS", payload: projects })
      dispatch({ type: "GET_BLOG_POSTS", payload: blogPosts })
      dispatch({ type: "GET_EVENTS", payload: events })
      dispatch({ type: "GET_AWARDS", payload: awards })
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

  const handleClick = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth" });
  };

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
                    <div className="skillItem">
                      <img
                        srcSet="/assets/mongodb-icon.png"
                        alt="MongoDB Logo"
                      />
                    </div>
                    <div className="skillItem">
                      <img
                        srcSet="/assets/Javascript-logo.png"
                        alt="JavaScript Logo"
                      />
                    </div>
                    <div className="skillItem">
                      <img
                        srcSet="/assets/Laravel-logo.png"
                        alt="Laravel Logo"
                      />
                    </div>
                    <div className="skillItem">
                      <img
                        srcSet="/assets/reactjs-logo.png"
                        alt="React.js Logo"
                      />
                    </div>
                    <div className="skillItem">
                      <img srcSet="/assets/avatar.png" alt="HTML Logo" />
                    </div>
                    <div className="skillItem">
                      <img srcSet="/assets/vuejs-logo.png" alt="Vue.js Logo" />
                    </div>
                  </div>
                  <div className="aboutTextDescription">
                    <div className="aboutText">
                      <p>
                        I am a Software Engineer passionate about building
                        elegant, user-centered products with clean, maintainable
                        code, combining strong frontend engineering skills with
                        a keen eye for intuitive interfaces and exceptional user
                        experiences.
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
                    </div>

                    <div className="letsCodeBtn">
                      <Button
                        variant="primary"
                        text={"Let's Build"}
                        handleClick={handleClick}
                      />
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
          <section className="projectSection" id="projects">
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

          <section className="talksSection">
            <TalksSection>
              <BlogItemStyle>
                <div className="talksContainer">
                  <h1 className="aboutTitle">Talks and Engagements</h1>
                  <p className="contactText">
                    Here are some talks, workshops, and events where I've shared
                    ideas.
                  </p>
                </div>
                {/*  */}
                {blogPosts?.length === undefined ? (
                  <CardSkeleton cards={3} cardWidth="100%" />
                ) : (
                  blogPosts.map((blogPost, index) => (
                    <BlogItem
                      key={index}
                      date={blogPost.fields.datePosted}
                      duration={blogPost.fields.readTime}
                      title={blogPost.fields.title}
                      description={blogPost.fields.description}
                      talkImg={blogPost.fields.coverPhoto?.fields?.file?.url}
                      talkLink={blogPost.fields.blogLink}
                    />
                  ))
                )}
              </BlogItemStyle>
            </TalksSection>
          </section>
          <section className="scroll-section-outer">
            <div className="section-heading-wrapper">
              <h1 className="talk-and-engagements">Talks and Engagements</h1>
              <p className="talk-and-engagements-subheading">
                Here are some talks, workshops, and events where I've shared
                ideas.
              </p>
            </div>
            <div className="scroll-clip">
              <div ref={triggerRef} className="scroll-trigger-wrapper">
                <div ref={sectionRef} className="scroll-section-inner">
                  <div className="scroll-section">
                    <div ref={sectionRef} className="scroll-section-inner">
                      {events?.length === undefined ? (
                        <CardSkeleton cards={4} cardWidth="400px" />
                      ) : (
                        events.map((event) => (
                          <div className="scroll-section" key={event.sys.id}>
                            <EventCard
                              eventImg={
                                event.fields.eventflyer?.fields?.file?.url
                              }
                              eventName={event.fields.eventName}
                              sessionTopic={event.fields.talkTitle}
                              eventLink={event.fields.eventLink}
                            />
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="awardSection">
            <h1 className="aboutTitle">Recognitions</h1>
            <p className="contactText">
              Here are some cool stuff I have worked on
            </p>
            <div className="awardWrapper">
              <div className="awardWrapper">
                {awards?.length === undefined ? (
                  <CardSkeleton cards={3} cardWidth="100%" />
                ) : (
                  awards.map((award) => (
                    <AwardItem
                      key={award.sys.id}
                      date={award.fields.dateRecieved}
                      title={award.fields.awardName}
                      description={award.fields.awardDescription}
                      link={award.fields.awardLink}
                    />
                  ))
                )}
              </div>
            </div>
          </section>
        </section>
        <Footer classname="contact-footer" id="contact" />
      </MyHome>
    </>
  );
}

export default Home
