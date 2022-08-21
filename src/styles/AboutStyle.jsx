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
`
