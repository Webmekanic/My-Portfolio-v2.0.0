import styled from "styled-components"

export const AboutMe = styled.div`
  // border: 2px solid red;
  background-color: transparent;
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  z-index: 10;

  .pattern1 {
    // border: 2px solid red;
    background: ${({ theme }) => theme.colors.barColor};
    position: absolute;
    top: 75px;
    width: 1440px;
    height: 180px;
    z-index: 10;
    transform: rotate(-15deg);
    top: 252px;
    left: -30px;
    right: 5px;
    z-index: 10;
  }

  .pattern2 {
    background: ${({ theme }) => theme.colors.barColor};
    position: absolute;
    top: 70px;
    width: 1440px;
    height: 180px;
    z-index: 10;
    transform: rotate(15deg);
    top: 610px;
    left: -30px;
    right: 5px;
    z-index: 10;
  }
  .pattern3 {
    // border: 2px solid red;
    background: ${({ theme }) => theme.colors.barColor};
    position: absolute;
    top: 70px;
    width: 1440px;
    height: 180px;
    z-index: 10;
    transform: rotate(-15deg);
    top: 550px;
    left: -30px;
    right: 5px;
    z-index: 10;
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

  .aboutFooter {
    position: absolute;
    left: 0;
    right: 0;
    height: auto;
    z-index: 99;
    bottom: 10px;
  }

  @media ${({ theme }) => theme.mediaQueries.below768} {
    .pattern1 {
      // top: 0;
      top: -10px;
      transform: rotate(-18deg);
      height: 160px;
    }
    .pattern2 {
      // border: 1px solid red;
      top: 600px;
      transform: rotate(30deg);
      left: -65px;
      height: 160px;
    }
    .pattern3 {
      top: 250px;
      transform: rotate(-18deg);
      left: -70px;
      height: 160px;
    }
  }
`
