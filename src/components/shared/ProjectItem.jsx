import React, { useContext, useEffect } from "react"
import { ProjectItemStyle } from "../../styles/ProjectItemStyle"
import { FiGithub, FiExternalLink } from "react-icons/fi"
import { getProjects } from "../../context/portfolio/PortfolioActions"
import PortfolioContext from "../../context/portfolio/PortfolioContext"

const ProjectItem = ({ project, title, description, projectImg }) => {
  const { dispatch } = useContext(PortfolioContext)

  useEffect(() => {
    const getprod = async () => {
      const { projects } = await getProjects()
      dispatch({ type: "GET_PROJECTS", payload: projects })
    }

    getprod()
  }, [dispatch])

  return (
    <ProjectItemStyle>
      <section className="projectContainer">
        <div className="projectBg">
          <img src={projectImg} alt="Project" />
        </div>
        <div className="projectSummary">
          <p className="projectTitle">{title}</p>
          <div className="skillsTag"></div>
          <p className="projectDescription">{description}</p>
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
