import styled from "styled-components"
import Footer from "../components/layouts/Footer"

export const ContactFooter = styled(Footer)`
  border: 2px solid pink;
  // position: absolute;
  // top: 0;
  // left: 0;
  // right: 0;
`

export const ContactMe = styled.div`
  border: 2px solid purple;
  background-color: transparent;
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  z-index: 5;

  .pattern1 {
    // border: 2px solid yellow;
    background: #090d0f;
    position: absolute;
    top: 30px;
    width: 1440px;
    height: 175px;
    z-index: 10;
    transform: rotate(-10deg);
    top: 165px;
    left: -30px;
    right: 20px;
    z-index: 10;
  }

  // .BckGD1 {
  //   height: auto;
  //   width: 100%;
  // }

  .pattern2 {
    // border: 1px solid red;
    position: absolute;
    background: #090d0f;
    position: absolute;
    top: 30px;
    width: 1440px;
    height: 175px;
    z-index: 10;
    z-index: 10;
    transform: rotate(-10deg);
    top: 410px;
    left: -30px;
    right: 20px;
  }

  .pattern3 {
    // border: 2px solid yellow;
    // border: 1px solid red;
    position: absolute;
    background: #090d0f;
    position: absolute;
    top: 30px;
    width: 1440px;
    height: 175px;
    z-index: 10;
    z-index: 10;
    transform: rotate(10deg);
    top: 410px;
    left: -30px;
    right: 20px;
  }

  svg {
    background: #101010;
  }
  svg text {
    font-size: 10vw;
    font-weight: 900;
    stroke-width: 1px;
    fill: transparent;
    stroke: #ffff00;
    letter-spacing: 4px;
    animation: effect 6s infinite alternate;
  }
  @keyframes effect {
    0% {
      stroke-dasharray: 0 70%;
    }
    100% {
      stroke-dasharray: 10% 0%;
      stroke-dashoffset: 20%;
      text-shadow: 0px 0px 20px #ff0, 0px 0px 40px #ff0, 0px 0px 60px #ff0,
        0px 0px 80px #ff0, 0px 0px 100px #ff0;
    }
  }

  @media ${({ theme }) => theme.mediaQueries.below768} {
    margin-top: 3.6rem;
  }
`
