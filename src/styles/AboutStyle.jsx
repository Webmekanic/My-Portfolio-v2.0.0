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
    // .pattern {
    //   // border: 1px solid yellow;
    //   height: 100vh;
    //   width: 5px;
    //   margin: auto;
    //   background: red;
    //   display: relative;
    //   z-index: 99;
    // }

    .pattern1 {
      top: 16.2rem;
      transform: skewY(-15.5deg);
      height: 11rem;
    }
    .pattern2 {
      top: 35rem;
      transform: skewY(-15.5deg);
      height: 12rem;
      // border: 2px solid red;
    }
    .pattern3 {
      // border: 2px solid red;
      top: 35rem;
      transform: skewY(15.5deg);
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
