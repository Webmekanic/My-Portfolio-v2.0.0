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
    transform: rotate(8deg);
    top: 410px;
    left: -30px;
    right: 20px;
  }

  .contactTitle {
    font-family: Chivo;
    font-style: normal;
    font-size: clamp(1.9rem, 2vw, 2.5rem);
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.neutral};
    z-index: 99;
    margin-bottom: 0.5rem;
    font-weight: 700;
  }

  .formSection {
    position: absolute;
    z-index: 99;
    top: 80px;
    left: 50%;
    width: 90%;
    transform: translate(-50%);
  }

  .contactText {
    width: 45%;
    color: ${({ theme }) => theme.colors.textColor};
    margin-bottom: 1rem;
  }
  .contactForm {
    display: flex;

    .contactInput {
      width: 50%;
    }

    #NameInput,
    #emailInput {
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
      padding: 0.6rem 1.6rem;
    }
    .linkedinContact {
      color: ${({ theme }) => theme.colors.lightColor};
      position: absolute;
      font-size: 38px;
      left: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
    }

    .twitterContact {
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
    margin-top: 1.2rem;
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
      top: 265px;
      transform: rotate(-18deg);
      left: -55px;
    }

    .pattern3 {
      top: 500px;
      transform: rotate(25deg);
      left: -300px;
    }

    .contactText {
      width: 100%;
    }
    .contactForm {
      display: block;
      width: 100%;

      .contactInput {
        width: 100%;
      }

      #NameInput,
      #emailInput,
      #MessageInput {
        width: 100%;
      }
    }

    .contactBtn {
      margin-top: 1.25rem;
      float: right;
    }

    .contactLocations {
      display: none;
    }
  }
`
