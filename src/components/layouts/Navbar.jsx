import React from "react"
import styled from "styled-components"
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi"

const MyNav = styled.nav`
  background-color: transparent;
  border: 2px solid red;
  display: flex;
  justify-content: space-between;
`

function Navbar() {
  return (
    <MyNav>
      <h1 className="myInitals">da</h1>
      <ul>
        <li>About</li>
        <li>Works</li>
        <li>Contact</li>
      </ul>
      <div>
        <FiGithub />
        <FiLinkedin />
        {/* <FiTwitter /> */}
      </div>
    </MyNav>
  )
}

export default Navbar
