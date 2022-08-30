import styled from "styled-components"

export const BgTextStyle = styled.svg`
  position: absolute;
  top: 0;
  z-index: 88;
  margin-top: -9%;
  margin-left: 38.375rem;

  text {
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
`
