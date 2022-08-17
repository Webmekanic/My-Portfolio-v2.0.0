import React from "react"
import { ContactMe } from "../styles/ContactStyle"
import BckGD1 from "../components/layouts/assets/bckCon1.svg"
import BckGD2 from "../components/layouts/assets/bckCon2.svg"

function Contact() {
  return (
    <ContactMe>
      <div className="pattern1">
        <img className="BckGD1" src={BckGD1} alt="" />
      </div>
      <div className="pattern2">
        <img className="BckGD2" src={BckGD2} alt="" />
      </div>
    </ContactMe>
  )
}

export default Contact
