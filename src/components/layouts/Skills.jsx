import React from "react"
import { MySkills } from "../../styles/SkillStyle"

const Skills = ({ classNames }) => {
  return (
    <>
      <MySkills className={classNames}>
        <div className="skillsBorder1">
          <div className="skillsBorder2">
            <div className="skillsBorder3">
              <div className="aniIcon">
                <img className="imgIcon" src="/assets/Aniebo.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* skills Icon */}
        <img className="jsLogo" src="/assets/jsLogo.svg" alt="JS" />
        <img className="cssLogo" src="/assets/cssLogo.svg" alt="CSS" />
        <img className="HtmlIcon" src="/assets/htmlIcon.svg" alt="HTML" />
        <img className="ReactJs" src="/assets/reactjs.svg" alt="React" />
      </MySkills>
    </>
  )
}

export default Skills
