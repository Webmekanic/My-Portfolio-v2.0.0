import styled from "styled-components"
import { FooterSection } from "./footerStyle"

export const ContactFooter = styled(FooterSection)`
  // border: 2px solid red;
  bottom: 0;
`

export const ContactMe = styled.div`
  // border: 2px solid purple;
  background-color: transparent;
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  z-index: 5;

  .contact-footer {
    position: absolute;
    bottom: 20px;
    left: 0;
    width: 100%;
    right: 0;
    height: auto;
  }

  .pattern1 {
    // border: 2px solid yellow;
    background: #090d0f;
    position: absolute;
    top: 70px;
    width: 1440px;
    height: 175px;
    z-index: 10;
    transform: rotate(-10deg);
    top: 150px;
    left: -30px;
    right: 20px;
    z-index: 10;
  }

  .pattern2 {
    // border: 1px solid red;
    position: absolute;
    background: #090d0f;
    position: absolute;
    top: 30px;
    width: 1440px;
    height: 170px;
    z-index: 10;
    z-index: 10;
    transform: rotate(-10deg);
    top: 410px;
    left: -30px;
    right: 20px;
  }

  .pattern3 {
    // border: 2px solid yellow;
    position: absolute;
    background: #090d0f;
    position: absolute;
    top: 30px;
    width: 1440px;
    height: 170px;
    z-index: 10;
    z-index: 10;
    transform: rotate(8deg);
    top: 410px;
    left: -30px;
    right: 20px;
  }

  svg {
    position: absolute;
    top: 0;
    z-index: 88;
    margin-top: -6%;
    margin-left: 500px;
  }
  svg text {
    // border: 2px solid yellow;
    font-size: 16vw;
    // font-weight: 900;
    font-family: chivo;
    stroke-width: 1px;
    fill: transparent;
    stroke: #7151b6;
    letter-spacing: 4px;
    animation: effect 6s infinite alternate;
    z-index: 20;
    opacity: 0.4;
  }
  @keyframes effect {
    0% {
      stroke-dasharray: 100% 40%;
    }
    100% {
      stroke-dasharray: 40% 0%;
      stroke-dashoffset: 40%;
    }
  }

  .contactTitle {
    font-family: "Chivo";
    font-style: normal;
    // font-weight: 900;
    font-size: 40px;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.neutral};
    z-index: 99;
  }

  .formSection {
    border: 2px solid red;
    position: absolute;
    z-index: 99;
    top: 90px;
    left: 50%;
    // right: 50%;
    width: 90%;
    transform: translate(-50%);
  }
  .contactText {
    border: 2px solid pink;
    width: 40%;
  }
  .contactMe {
    border: 2px solid orange;
  }

  .contactMeIcons {
    border: 2px solid red;
  }

  @media ${({ theme }) => theme.mediaQueries.below768} {
    // border: 2px solid red;
    .pattern1 {
      // border: 2px solid yellow;
      top: 0;
      top: 20px;
      transform: rotate(-18deg);
    }

    .pattern2 {
      // border: 2px solid pink;
      top: 265px;
      transform: rotate(-18deg);
      left: -55px;
    }

    .pattern3 {
      // border: 2px solid purple;
      top: 500px;
      // display: none;
      transform: rotate(25deg);
      left: -300px;
    }
  }
`
