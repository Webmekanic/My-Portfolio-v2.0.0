import React, { memo } from "react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import { FiGithub, FiExternalLink } from "react-icons/fi"
import { ProjectItemStyle } from "../../styles/ProjectItemStyle"

const ProjectItem = ({
  project,
  title,
  description,
  projectImg,
  cardWidth,
}) => {
  return (
    <ProjectItemStyle
      className="my-project-cards"
      primary={true}
      style={{
        width: cardWidth,
      }}
    >
      <section className="projectContainer">
        <div
          className="projectBg"
          style={{
            backgroundImage: `url(${projectImg})`,
          }}
        >
          {/* <img src={projectImg || <Skeleton />} alt="Project" /> */}
        </div>
        <div className="projectSummary">
          <p className="projectTitle">{title || <Skeleton />}</p>
          <div className="skillsTag"></div>
          <p className="projectDescription">
            {description || <Skeleton count={5} />}
          </p>
          <div className="projectLinks">
            <button>
              Repo
              <a
                className="socialLink"
                href="https://github.com/Webmekanic"
                target="_blank"
                rel="noreferrer"
              >
                <FiGithub />
              </a>
            </button>
            <button>
              Live View
              <a
                className="socialLink"
                href="https://github.com/Webmekanic"
                target="_blank"
                rel="noreferrer"
              >
                <FiExternalLink />
              </a>
            </button>
          </div>
        </div>
      </section>
    </ProjectItemStyle>
  )
}
export default ProjectItem
