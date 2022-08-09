import React from "react"
import styled from "styled-components"

const PageButton = styled.button`
  border: 2px solid red;
  display: inline-block;
  padding: 0.9375rem 1.875rem;
  font-size: 14px;
  letter-spacing: 0.0938rem;
  text-transform: capitalize;
  min-width: 150px;
  background: transparent;
  cursor: pointer;
  font-family: "Work Sans";
  font-style: regular;
  font-weight: 400;
  border: 2px solid ${({ theme }) => theme.colors.lightColor};
  margin: 30px auto;
  color: ${({ theme }) => theme.colors.lightColor};
  position: relative;
  margin-left: 5rem;
  overflow: hidden;

  .buttonText {
    position: absolute;
    border: 2px solid red;
    top: 0;
    left: -50px;
    right: 40px;
    bottom: 0;
    transform: skew(-62deg);
    overflow: hidden;
    transition: 0.3s ease-out;
    background-color: ${({ theme }) => theme.colors.lightColor};
  }
`

function Button({ text }) {
  return (
    <PageButton>
      {text}
      <div className="buttonText"></div>
    </PageButton>
  )
}

export default Button
