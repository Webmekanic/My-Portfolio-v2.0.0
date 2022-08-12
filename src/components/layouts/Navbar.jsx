import React from "react"
import { MyLink, Nav } from "../../styles/NavStyle"
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi"
import { CgSortAz } from "react-icons/cg"

const Navbar = () => {
  return (
    <Nav>
      <h1 className="myIntials">DA</h1>
      <ul className="navLinkList">
        <li className="navLinkItem">
          <MyLink to="/about">About</MyLink>
        </li>
        <li className="navLinkItem">
          <MyLink to="/works">Works</MyLink>
        </li>
        <li className="navLinkItem">
          <MyLink to="/contact">Contact</MyLink>
        </li>
      </ul>
      {/* nabvar icons */}
      <div className="socialIcons">
        <a
          className="socialLink"
          href="https://github.com/Webmekanic"
          target="_blank"
          rel="noreferrer"
        >
          <FiGithub />
        </a>
        <a
          href="https://github.com/Webmekanic"
          target="_blank"
          rel="noreferrer"
          className="socialLink"
        >
          <FiLinkedin />
        </a>
      </div>
      <CgSortAz className="sortIcon" />
    </Nav>
  )
}

export default Navbar
