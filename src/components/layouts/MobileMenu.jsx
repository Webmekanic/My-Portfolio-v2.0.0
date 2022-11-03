/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState, useEffect, useContext } from "react"
import styled from "styled-components"
import { MyLink, Hamburger } from "../../styles/NavStyle"
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi"
import { AiOutlineClose } from "react-icons/ai"
import PortfolioContext from "../../context/portfolio/PortfolioContext"

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
  const { menu, dispatch } = useContext(PortfolioContext)
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    setToggle(menu)
  }, [menu])

  return (
    <Hamburger toggle={toggle}>
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
      {/* <button></button> */}
      <AiOutlineClose
        className="closeMenu"
        onClick={() => dispatch({ type: "SET_MENU" })}
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
