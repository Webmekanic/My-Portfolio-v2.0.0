import styled from "styled-components"
import { FooterSection } from "./footerStyle"

export const ContactFooter = styled(FooterSection)`
  // border: 2px solid red;
  bottom: 0;
`

export const ContactMe = styled.div`
  background-color: transparent;
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  z-index: 10;

  .footerLayout {
    position: fixed;
    width: 100%;
    z-index: 99;
  }

  .pattern1 {
    background: ${({ theme }) => theme.colors.barColor};
    position: absolute;
    top: 70px;
    width: 1440px;
    height: 175px;
    transform: rotate(-10deg);
    top: 150px;
    left: -30px;
    right: 20px;
    z-index: 10;
  }

  .pattern2 {
    position: absolute;
    background: ${({ theme }) => theme.colors.barColor};
    position: absolute;
    top: 30px;
    width: 1440px;
    height: 170px;
    z-index: 10;
    transform: rotate(-10deg);
    top: 410px;
    left: -30px;
    right: 20px;
  }

  .pattern3 {
    position: absolute;
    background: ${({ theme }) => theme.colors.barColor};
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

  .svg {
    position: absolute;
    top: 0;
    z-index: 88;
    margin-top: -9%;
    // right: -10px;
    margin-left: 38.375rem;
  }
  .svg text {
    font-size: 14vw;
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
    font-family: Chivo;
    font-style: normal;
    font-size: 40px;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.neutral};
    z-index: 99;
    // border: 2px solid red;
    margin-bottom: 1rem;
  }

  .formSection {
    // border: 2px solid red;
    position: absolute;
    z-index: 99;
    top: 80px;
    left: 50%;
    width: 90%;
    transform: translate(-50%);
  }

  .contactText {
    // border: 2px solid pink;
    width: 45%;
    color: ${({ theme }) => theme.colors.textColor};
    margin-bottom: 1rem;
  }
  .contactForm {
    // border: 2px solid white;
    display: flex;

    .contactInput {
      // border: 2px solid yellow;
      width: 50%;
    }

    #NameInput,
    #emailInput {
      // border: 2px solid red;
      width: 75%;
      padding: 0.6rem;
      margin-bottom: 0.8rem;
      background: ${({ theme }) => theme.colors.borderColor};
      color: ${({ theme }) => theme.colors.textColor};
      outline: none;
      border: none;
    }

    #MessageInput {
      width: 75%;
      background: ${({ theme }) => theme.colors.borderColor};
      padding: 10px 0px 120px 10px;
      color: ${({ theme }) => theme.colors.textColor};
      outline: none;
      border: none;
      resize: none;
    }

    .contactLocations {
      // border: 2px solid ${({ theme }) => theme.colors.lightColor};
      // color: ${({ theme }) => theme.colors.lightColor};
      width: 50%;
      position: relative;
    }

    .profileIcon {
      // border: 1px solid red;
      padding: 0.6rem 1.6rem;
    }
    .linkedinContact {
      // border: 2px solid red;
      color: ${({ theme }) => theme.colors.lightColor};
      position: absolute;
      font-size: 38px;
      left: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      // font-weight: lighter;
    }

    .twitterContact {
      // border: 2px solid yellow;
      color: ${({ theme }) => theme.colors.lightColor};
      position: absolute;
      right: 80px;
      top: 10px;
      font-size: 38px;
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
    }
    .githubContact {
      // border: 2px solid red;
      color: ${({ theme }) => theme.colors.lightColor};
      position: absolute;
      font-size: 38px;
      bottom: 60px;
      left: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
    }

    .codewarsContact {
      // border: 2px solid purple;
      color: ${({ theme }) => theme.colors.lightColor};
      position: absolute;
      font-size: 38px;
      right: 100px;
      bottom: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      // opacity: 0.7;
    }

    .profileLinks {
      // border: 2px solid red;
      // padding: 0.6rem 1.6rem;
    }
  }

  .contactBtn {
    margin-top: 1.25rem;
  }

  .contact-footer {
    position: absolute;
    left: 0;
    right: 0;
    height: auto;
    z-index: 99;
    bottom: 10px;
  }

  @media ${({ theme }) => theme.mediaQueries.below768} {
    .pattern1 {
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
    #NameInput,
    #emailInput {
      border: 2px solid purple;
    }

    .contactLocations {
      display: none;
    }
  }
`
