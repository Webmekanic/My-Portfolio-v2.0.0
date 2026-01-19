import React, { useRef } from "react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import { FiGithub, FiExternalLink } from "react-icons/fi"
import { ProjectItemStyle } from "../../styles/ProjectItemStyle"
import { useTransform, motion, useScroll } from "framer-motion"

const ProjectItem = ({
  i = 0,
  project,
  title,
  description,
  projectImg,
  cardWidth,
  projectRepo,
  projectDemo,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null)

  const scale = progress && range && targetScale 
    ? useTransform(progress, range, [1, targetScale])
    : 1

  const opacity = progress && range 
    ? useTransform(progress, range, [1, 0.6])
    : 1

  return (
    <ProjectItemStyle
      ref={container}
      style={{
        width: cardWidth,
        top: `calc(10vh + ${i * 30}px)`,
      }}
    >
        <motion.section
          className="projectContainer"
          style={{
            scale: i === 0 ? 1 : scale,
            opacity: i === 0 ? 1 : opacity,
            transformOrigin: "top center",
            display: "flex",
            flexDirection: i % 2 === 0 ? "row" : "row-reverse",
          }}
        >
          <div
            className="projectBg"
            style={{
              backgroundImage: `url(${projectImg})`,
            }}
          ></div>
          <div className="projectSummary">
            <p className="projectTitle">{title || <Skeleton />}</p>
            <div className="skillsTag"></div>
            <p className="projectDescription">
              {description || <Skeleton count={5} />}
            </p>
            <div className="projectLinks">
              <a
                className="socialLink"
                href={projectRepo}
                target="_blank"
                rel="noreferrer"
              >
                <button className="projectItemBtn">
                  Repo
                  <FiGithub />
                </button>
              </a>

              <a
                className="socialLink"
                href={projectDemo}
                target="_blank"
                rel="noreferrer"
              >
                <button className="projectItemBtn">
                  Live Link
                  <FiExternalLink />
                </button>
              </a>
            </div>
          </div>
        </motion.section>
      </ProjectItemStyle>
  )
}
export default ProjectItem