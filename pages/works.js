import React, { useContext, useEffect, useRef } from "react"
import BgText from "../src/components/shared/BgText"
import ProjectItem from "../src/components/shared/ProjectItem"
import Footer from "../src/components/layouts/Footer"
import PortfolioContext from "../src/context/portfolio/PortfolioContext"
import { ProjectSection } from "../src/styles/HomeStyle"
import CardSkeleton from "../src/components/shared/CardSkeleton"
import { MyWorks } from "../src/styles/WorkStyle"
import Navbar from "../src/components/layouts/Navbar"
import MobileMenu from "../src/components/layouts/MobileMenu"
import Loading from "../src/components/layouts/Loading"
import { getProjects } from "../src/context/portfolio/PortfolioActions"
import { useScroll } from "framer-motion"
import Lenis from "@studio-freight/lenis"

const Works = () => {
  const { projects, menu, loading, dispatch } = useContext(PortfolioContext)
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })

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

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  if (loading) return <Loading />

  return (
    <>
      <Navbar />
      {menu && <MobileMenu />}
      <MyWorks ref={container}>
        <div className="pattern1"></div>
        <div className="pattern2"></div>
        <div className="pattern3"></div>
        <section className="workSection">
          <BgText text={"Project"} classname="WorkBgText" />
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
            <section className="myProject myproject-works">
              {projects.length === undefined ? (
                <CardSkeleton cards={9} />
              ) : (
                projects.map((project, index) => {
                  const targetScale = 1 - (projects.length - index) * 0.08
                  return (
                    <ProjectItem
                      key={index}
                      i={index}
                      project={project.fields}
                      projectImg={project.fields.avatar.fields.file.url}
                      title={project.fields.title}
                      description={project.fields.description}
                      projectRepo={project.fields.repoLink}
                      projectDemo={project.fields.liveLink}
                      progress={scrollYProgress}
                      range={[index * 0.1, 1]}
                      targetScale={targetScale}
                    />
                  )
                })
              )}
            </section>
          </ProjectSection>
        </section>
        <Footer classname="workFooter" />
      </MyWorks>
    </>
  )
}

export default Works
