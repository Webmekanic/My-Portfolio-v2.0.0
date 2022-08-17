import styled from "styled-components"

export const ContactMe = styled.div`
  // border: 2px solid red;
  background-color: transparent;
  position: relative;
  height: 100vh;
  width: 100%;

  .pattern1 {
    // border: 2px solid yellow;
    position: absolute;
    width: 100%;
    height: auto;
    top: -10px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
  }

  .BckGD1 {
    height: auto;
    width: 100%;
  }

  .pattern2 {
    // border: 1px solid red;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 450px;
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
