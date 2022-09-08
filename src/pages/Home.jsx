import React from "react"
import Skills from "../components/layouts/Skills"
import BgText from "../components/shared/BgText"
import Button from "../components/shared/Button"
// import Footer from "../components/layouts/Footer"
import { MyHome } from "../styles/HomeStyle"
// import { MySkills } from "../styles/SkillStyle"
// import BgText from "../components/shared/BgText"
import letsCodeIcon1 from "../components/layouts/assets/letcodeicon1.svg"
import letsCodeIcon2 from "../components/layouts/assets/letcodeicon2.svg"

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
          <div className="aboutAniebo">
            <div className="fullName">
              <div class="xbox" data-char="David">
                David<div class="inside">David</div>
              </div>
              <div class="xbox xbox1" data-char=" Aniebo">
                Aniebo<div class="inside"> Aniebo</div>
              </div>
            </div>
            <Skills />
          </div>
          <p className="currentRole">Software Engineer</p>
          <div className="letsCodeBtn">
            <img src={letsCodeIcon1} alt="" className="img-circle" />
            <img
              src={letsCodeIcon2}
              alt=""
              className="img-circle2"
              sizes="60px"
            />
            <Button text={"Let’s code"} />
          </div>
        </section>
        <section className="homeAboutMe">
          <BgText text={"About"} classname="homeAboutBgText" />
          {/* <BgText text={"Me"} classname="homeAboutMeText" /> */}
        </section>
      </MyHome>
      {/* <Footer classname="homeFooter" /> */}
    </>
  )
}

export default Home
