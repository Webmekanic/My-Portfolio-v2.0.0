import React from "react"
import { ProjectItemStyle } from "../../styles/ProjectItemStyle"
import { FiGithub, FiExternalLink } from "react-icons/fi"

const ProjectItem = ({
  projectName,
  aboutProject,
  techUsed,
  projectImg,
  repoLink,
  liveLink,
}) => {
  return (
    <ProjectItemStyle>
      <section className="projectContainer">
        <div className="projectBg"></div>
        <div className="projectSummary">
          <p className="projectTitle">Advice generator app</p>
          <div className="skillsTag"></div>
          <p className="projectDescription">
            The perfect project if you're learning how to interact with
            3rd-party APIs. This challenge uses the Advice Slip API to generate
            random quotes of advice.
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
