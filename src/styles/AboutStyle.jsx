import styled from "styled-components"

export const AboutMe = styled.div`
  background-color: transparent;
  position: relative;
  z-index: 20;
  width: 100%;
  // padding-bottom: 1rem;
  height: 100vh;

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
  .aboutContainer {
    position: relative;
    z-index: 20;
    width: 100%;
    height: 100vh;
  }
  .AboutBgText {
    position: absolute;
    top: 45px;
  }

  .aboutFooter {
    position: absolute;
    padding-left: 30px;
    padding-right: 30px;
  }

  @media ${({ theme }) => theme.mediaQueries.medium} {
    // border: 2px solid red;
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
  }

  @media ${({ theme }) => theme.mediaQueries.large} {
    padding-bottom: 3rem;

    .skillsCard {
      height: 302px;
    }

    .aboutAniebo1 {
      margin-top: 1rem;
      padding-bottom: 5rem;
    }
    .downloadResumeButton {
      margin-top: 3.5rem;
    }

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

    .aboutFooter {
      // border: 2px solid purple;
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
  }

  @media ${({ theme }) => theme.mediaQueries.above768} {
    overflow: hidden;
    min-height: 100vh;

    .aboutFooter {
      position: relative;
      width: 89%;
      margin: auto;
      padding: unset;
    }
  }
  @media ${({ theme }) => theme.mediaQueries.below768} {
    // border: 2px solid red;
    height: 100%;
    padding-bottom: 1rem;

    .skillsCard {
      background: none;
      box-shadow: none;
      border: none;
      padding: 0;
      margin-top: 3rem;
      // border: 2px solid red;
      // height: unset;
    }
    .skillSet {
      // border: 2px solid red;
      padding: 0;
      margin-top: 1rem;
    }

    // .AboutBgText {
    //   position: absolute;
    //   top: -45px;
    // }

    .aboutFooter {
      // border: 2px solid red;
      margin-top: 2rem;
      padding-bottom: 2rem;
    }

    @media (max-width: 414px) {
      .pattern2 {
        // border: 2px solid green;
        top: 32rem;
      }
      .pattern3 {
        // border: 2px solid green;
        top: 32rem;
      }

      .AboutBgText {
        top: -45px;
      }
    }
  }
`
