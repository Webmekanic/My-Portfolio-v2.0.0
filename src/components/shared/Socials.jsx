import React, { useState } from "react"
import { SocialHandle } from "../../styles/SocialStyle"
import { FaMapMarkerAlt } from "react-icons/fa"
import Button from "./Button"

const Socials = () => {
  const [iconOpen, setIconOpen] = useState(false)

  return (
    <SocialHandle>
      <FaMapMarkerAlt
        className="location"
        onClick={(e) => setIconOpen(!iconOpen)}
      />
      {iconOpen && (
        <Button
          text={"Linkedin"}
          className={iconOpen ? "slideIn" : "mediaBtn"}
        />
      )}
    </SocialHandle>
  )
}

export default Socials
