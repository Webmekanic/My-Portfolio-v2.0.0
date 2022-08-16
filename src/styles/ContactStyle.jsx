import styled from "styled-components"
import BckGD1 from "../components/layouts/assets/bckCon1.svg"
// import kkkk from "../components/layouts/assets/kkkk"

export const ContactMe = styled.div`
  // border: 2px solid red;
  background-color: transparent;
  position: relative;

  .pattern1 {
    border: 2px solid yellow;
    background-image: url(${BckGD1});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 100% 100%;
    position: relative;
    // height: 40rem;
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
