import React from "react"
import Footer from "../components/layouts/Footer"
import BgText from "../components/shared/BgText"
import { MyWorks } from "../styles/WorkStyle"

const Works = () => {
  return (
    <MyWorks>
      <BgText text={"Project"} />
      <Footer classname="workFooter" />
    </MyWorks>
  )
}

export default Works
