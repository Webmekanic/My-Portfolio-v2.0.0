import styled from "styled-components"

export const AboutMe = styled.div`
  background-color: transparent;
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: 10;

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

  .boutTitle {
  }

  @media ${({ theme }) => theme.mediaQueries.medium} {
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
