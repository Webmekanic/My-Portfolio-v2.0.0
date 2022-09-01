import styled from "styled-components"

export const MyWorks = styled.div`
  background-color: transparent;
  position: relative;
  width: 100%;
  overflow: hidden;
  z-index: 10;
  padding-top: 3rem;
  height: 100vh;

  .workFooter {
    // border: 2px solid red;
    position: absolute;
    left: 0;
    right: 0;
    height: auto;
    z-index: 99;
    bottom: 10px;
  }
`
