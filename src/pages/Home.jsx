import React from "react"
// import Footer from "../components/layouts/Footer"
import { MyHome } from "../styles/HomeStyle"
// import { MySkills } from "../styles/SkillStyle"
// import BgText from "../components/shared/BgText"

function Home() {
  return (
    <>
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
        {/* <MySkills /> */}

        <section className="myNameContainer">
          <div className="fullName">
            <div class="xbox" data-char="David">
              David<div class="inside">David</div>
            </div>
            <div class="xbox xbox1" data-char=" Aniebo">
              Aniebo<div class="inside"> Aniebo</div>
            </div>
          </div>
          {/* <p>Software Engineer</p> */}
        </section>
      </MyHome>
      {/* <Footer classname="homeFooter" /> */}
    </>
  )
}

export default Home
