import styled from "styled-components"

export const AboutMe = styled.div`
  // border: 2px solid red;
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
    // border: 2px solid purple;
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

  @media ${({ theme }) => theme.mediaQueries.medium} {
    .pattern1 {
      // border: 2px solid red;
      top: 15rem;
      transform: skewY(-15deg);
      height: 12rem;
    }
    .pattern2 {
      top: 33rem;
      transform: skewY(-15deg);
      height: 12rem;
    }
    .pattern3 {
      border: 2px solid red;
      top: 38rem;
      transform: skewY(15deg);
      height: 12rem;
    }
  }
  @media ${({ theme }) => theme.mediaQueries.large} {
    .pattern1 {
      // border: 2px solid white;
    }
    .pattern2 {
    }
    .pattern3 {
    }
  }
`
