import React from "react"
import { MyLink, Hamburger } from "../../styles/NavStyle"
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi"
import styled from "styled-components"

const MenuLink = styled(MyLink)`
  font-family: Chivo;
  font-style: Black;
  font-size: 48px;
  line-height: 6.25rem;

  &:active,
  &:hover {
    color: ${({ theme }) => theme.colors.lightColor};
  }
`

function MobileMenu() {
  return (
    <Hamburger>
      <ul className="MobileNavLink">
        <li className="MobileNavLinkItem">
          <MenuLink to="/about">About</MenuLink>
        </li>
        <li className="MobileNavLinkItem">
          <MenuLink to="/works">Works</MenuLink>
        </li>
        <li className="MobileNavLinkItem">
          <MenuLink to="/contact">Contact</MenuLink>
        </li>
      </ul>
      <button></button>
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
          <FiLinkedin className="" />
        </a>
        <a
          href="https://github.com/Webmekanic"
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
