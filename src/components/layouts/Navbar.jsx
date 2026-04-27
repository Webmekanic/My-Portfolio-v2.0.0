import React, { useContext } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { MyLink, Nav } from "../../styles/NavStyle"
import { FiGithub, FiLinkedin } from "react-icons/fi"
import { CgSortAz } from "react-icons/cg"
import PortfolioContext from "../../context/portfolio/PortfolioContext"

const Navbar = () => {
  const { dispatch } = useContext(PortfolioContext)
  const router = useRouter()

  return (
    <Nav>
      <h1 className="myIntials">
        <Link href="/">
          <header
            className="myIntials"
            style={{
              textDecoration: "none",
              width: "60px",
              height: "40px",
              cursor: "pointer",
            }}
          >
            <img
              src="/assets/myLogo.svg"
              alt="Logo"
              style={{ width: "100%", height: "100%" }}
            />
          </header>
        </Link>
      </h1>
      <ul className="navLinkList">
        <li className="navLinkItem">
          <MyLink href="/about" className={router.pathname === "/about" ? "is-active" : ""}>
            About
          </MyLink>
        </li>
        <li className="navLinkItem">
          <MyLink href="/works" className={router.pathname === "/works" ? "is-active" : ""}>
            Works
          </MyLink>
        </li>
        <li className="navLinkItem">
          <MyLink href="/contact" className={router.pathname === "/contact" ? "is-active" : ""}>
            Contact
          </MyLink>
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
