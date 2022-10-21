import React from "react"
import Aniebo from "./assets/Aniebo.svg"
import JsLogo from "./assets/jsLogo.svg"
import ReactJs from "./assets/reactjs.svg"
import HtmlIcon from "./assets/htmlIcon.svg"
import CssLogo from "./assets/cssLogo.svg"
import { MySkills } from "../../styles/SkillStyle"

const Skills = ({ classNames }) => {
  return (
    <>
      <MySkills className={classNames}>
        <div className="skillsBorder1">
          <div className="skillsBorder2">
            <div className="skillsBorder3">
              <div className="aniIcon">
                <div className="diagonalLine2"></div>
                <div className="diagonalLine3"></div>
                <div className="straightLine"></div>
                <div className="verticalLine"></div>
                <img className="imgIcon" src={Aniebo} alt="" />
                <div className="diagonalLine"></div>
                <div className="diagonalLine1"></div>
              </div>
            </div>
          </div>
        </div>
        {/* skills Icon */}
        <img className="jsLogo" src={JsLogo} alt="JS" />
        <img className="cssLogo" src={CssLogo} alt="CSS" />
        <img className="HtmlIcon" src={HtmlIcon} alt="HTML" />
        <img className="ReactJs" src={ReactJs} alt="React" />
      </MySkills>
    </>
  )
}

export default Skills
