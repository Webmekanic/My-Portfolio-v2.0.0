/* eslint-disable react/jsx-no-duplicate-props */
import React, { useContext } from "react"
import styled from "styled-components"
import PortfolioContext from "../../context/portfolio/PortfolioContext"
import { MyLink, Hamburger } from "../../styles/NavStyle"
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi"
import { AiOutlineClose } from "react-icons/ai"

const MenuLink = styled(MyLink)`
  font-style: Black;
  font-size: 2.6875rem;
  line-height: 6.25rem;
  font-family: chivo;
  font-style: Black;
  font-weight: 900;

  &:active,
  &:hover {
    color: ${({ theme }) => theme.colors.lightColor};
  }
`

const MobileMenu = () => {
  const { dispatch } = useContext(PortfolioContext)

  const closeMenu = () => {
    dispatch({ type: "SET_MENU", payload: false })
  }

  return (
    <Hamburger>
      {/* <ul className="MobileNavLink">
        <li className="MobileNavLinkItem" onClick={closeMenu}>
          <MenuLink href="/about">About</MenuLink>
        </li>
        <li className="MobileNavLinkItem" onClick={closeMenu}>
          <MenuLink href="/works">Works</MenuLink>
        </li>
        <li className="MobileNavLinkItem" onClick={closeMenu}>
          <MenuLink href="/contact">Contact</MenuLink>
        </li>
      </ul> */}
      {/* <button></button> */}
      <AiOutlineClose
        className="closeMenu"
        onClick={closeMenu}
      />
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
        <a
          href="https://twitter.com/Webmekanic_"
          target="_blank"
          rel="noreferrer"
          className="socialLink"
        >
          <FiTwitter />
        </a>
      </div>
    </Hamburger>
  )
}

export default MobileMenu
