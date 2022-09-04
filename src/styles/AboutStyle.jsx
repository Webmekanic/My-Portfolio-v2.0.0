import styled from "styled-components"

export const AboutMe = styled.div`
  background-color: transparent;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  min-height: fill-available;
  min-height: -moz-available;
  min-height: -webkit-fill-available;
  z-index: 20;

  padding-top: 5rem;

  .pattern1 {
    background: ${({ theme }) => theme.colors.barColor};
    position: absolute;
    z-index: 10;
    height: 13rem;
    width: 100%;
    transform: skewY(-35deg);
    left: 0;
    right: 0;
    top: 12.4rem;
  }

  .pattern2 {
    background: ${({ theme }) => theme.colors.barColor};
    position: absolute;
    z-index: 10;
    height: 13rem;
    width: 100%;
    transform: skewY(-35deg);
    left: 0;
    right: 0;
    top: 30rem;
  }

  .pattern3 {
    position: absolute;
    background: ${({ theme }) => theme.colors.barColor};
    z-index: 10;
    height: 13rem;
    width: 100%;
    transform: skewY(35deg);
    left: 0;
    right: 0;
    top: 30rem;
  }

  .aboutFooter {
    position: absolute;
    left: 0;
    right: 0;
    height: auto;
    z-index: 99;
    bottom: 10px;
  }
  .aboutBgText {
    margin-left: 3rem;
    margin-top: -12rem;
  }
  .aboutMeBgText {
    margin-left: -6.5rem;
    margin-top: 2.5rem;
  }
  .aboutContainer {
    width: 93%;
    margin: auto;
  }

  .aboutTitle {
    position: relative;
    z-index: 30;
    font-family: "Chivo";
    font-style: black;
    font-weight: 900;
    font-size: clamp(2.5rem, 3vw, 2.8125rem);
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.neutral};
    white-space: nowrap;
  }
  .aboutAniebo {
    border: 1px solid ${({ theme }) => theme.colors.lightColor};
    position: relative;
    z-index: 30;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-gap: 1rem;
    // margin-top: 1.2rem;
  }
  .aboutText {
    border: 1px solid red;
  }
  .aboutText > * {
    padding-top: 0.7rem;
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 400;
    font-size: clamp(0.9rem, 2vw, 1rem);
    line-height: 1.3125rem;
    color: ${({ theme }) => theme.colors.textColor};
  }
  .aboutText2 {
    padding-top: 0;
  }
  .skillsCard {
    border-top: 3px solid ${({ theme }) => theme.colors.purple};
    background: #11171b;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
  }
  .downloadResumeButton {
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.lightColor};
  }

  @media ${({ theme }) => theme.mediaQueries.medium} {
    height: 100vh;
    .pattern1 {
      top: 12rem;
      transform: skewY(-15.5deg);
      height: 13rem;
    }
    .pattern2 {
      top: 32.5rem;
      transform: skewY(-15.5deg);
      height: 13rem;
    }
    .pattern3 {
      top: 32.5rem;
      transform: skewY(15.5deg);
      height: 13rem;
    }
    .aboutBgText {
      margin-left: 30rem;
      margin-top: -7rem;
    }
    .aboutMeBgText {
      display: none;
    }
    .aboutAniebo {
      grid-template-columns: 1fr 1fr;
      grid-gap: 12rem;
    }
    .aboutText2 {
      padding-top: 0.7rem;
    }
  }
  @media ${({ theme }) => theme.mediaQueries.large} {
    .pattern1 {
      top: 14.3rem;
      transform: skewY(-14deg);
    }
    .pattern2 {
      top: 36rem;
      transform: skewY(-14deg);
    }
    .pattern3 {
      top: 36.5rem;
      transform: skewY(14deg);
    }
    .aboutBgText {
      margin-left: 33.5rem;
      margin-top: -5rem;
    }
    .aboutMeBgText {
      display: none;
    }
  }

  @media (min-width: 481px) and (max-width: 1023px) {
    .pattern1 {
      height: 12rem;
      transform: skewY(-17deg);
    }
    .pattern2 {
      height: 12rem;
      transform: skewY(-17deg);
      top: 32rem;
    }
    .pattern3 {
      height: 12rem;
      transform: skewY(17deg);
      top: 32rem;
    }
    .aboutBgText {
      margin-left: 12rem;
      margin-top: -6rem;
    }
    .aboutMeBgText {
      margin-left: -10rem;
      margin-top: 5rem;
    }
  }
`
