import React from "react"
import { ProjectItemStyle } from "../../styles/ProjectItemStyle"

const ProjectItem = () => {
  return (
    <ProjectItemStyle>
      <div className="projectBg"></div>
      <div className="projectDescription">
        <p>SureVoter</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat ullam
          pariatur nesciunt maiores! Voluptatem, deleniti quasi. Totam ducimus
          facilis omnis!
        </p>
      </div>
    </ProjectItemStyle>
  )
}

export default ProjectItem
