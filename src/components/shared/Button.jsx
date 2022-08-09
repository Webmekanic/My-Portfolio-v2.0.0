import React from "react"
import styled from "styled-components"

const PageButton = styled.button`
  border: 2px solid red;
  display: inline-block;
  font-size: 14px;
  letter-spacing: 0.0938rem;
  text-transform: capitalize;
  padding: 0.9375rem 1.875rem;
  min-width: 150px;
  background: transparent;
  cursor: pointer;
  font-family: "Work Sans";
  font-style: regular;
  font-weight: 400;
  border: 2px solid ${({ theme }) => theme.colors.lightColor};
  color: ${({ theme }) => theme.colors.lightColor};
  margin: 30px auto;
`

function Button({ text }) {
  return <PageButton>{text}</PageButton>
}

export default Button
