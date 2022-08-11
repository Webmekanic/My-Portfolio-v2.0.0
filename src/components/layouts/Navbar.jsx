import React from "react"
import { Link } from "react-router-dom"
import {
  NavbarContainer,
  NavbarLinkContainer,
  NavbarLink,
} from "../../styles/NavStyle"
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi"

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLinkContainer>
        <NavbarLink className="nav-link" to="/about">
          About
        </NavbarLink>
        <NavbarLink className="nav-link" to="/works">
          Works
        </NavbarLink>
        <NavbarLink className="nav-link" to="/contact">
          Contact
        </NavbarLink>
      </NavbarLinkContainer>
    </NavbarContainer>
  )
}

export default Navbar
