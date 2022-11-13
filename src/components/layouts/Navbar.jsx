import React, { useContext } from "react"
import { MyLink, Nav } from "../../styles/NavStyle"
import { FiGithub, FiLinkedin } from "react-icons/fi"
import { CgSortAz } from "react-icons/cg"
import PortfolioContext from "../../context/portfolio/PortfolioContext"

const Navbar = () => {
  const { dispatch } = useContext(PortfolioContext)

  return (
    <Nav>
      <h1 className="myIntials">
        <MyLink
          className="myIntials"
          style={{ textDecoration: "none" }}
          to={"/"}
        >
          DA
        </MyLink>
      </h1>
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
          href="https://www.linkedin.com/in/david-aniebo/"
          target="_blank"
          rel="noreferrer"
          className="socialLink"
        >
          <FiLinkedin />
        </a>
      </div>
      <CgSortAz
        className="sortIcon"
        onClick={() => dispatch({ type: "SET_MENU", payload: true })}
      />
    </Nav>
  )
}

export default Navbar
