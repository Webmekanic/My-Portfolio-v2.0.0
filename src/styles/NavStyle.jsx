import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

export const NavbarContainer = styled.nav`
  border: 2px solid red;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const NavbarLinkContainer = styled.div``
export const NavbarLink = styled(Link)`
  &:hover,
  &:focus {
    color: blue;
  }
  &:active {
    color: red;
  }
`
