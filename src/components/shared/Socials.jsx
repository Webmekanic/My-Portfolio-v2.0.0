import React from "react"
import { SocialHandle } from "../../styles/SocialStyle"
import { HiOutlineLocationMarker } from "react-icons/hi"

const Socials = () => {
  return (
    <SocialHandle>
      <HiOutlineLocationMarker />
      <button className="socials">
        <a
          href="http://www.codewars.com/webmekanic"
          target="_blank"
          rel="noreferrer"
        >
          kgkgitititi
        </a>
      </button>
    </SocialHandle>
  )
}

export default Socials
