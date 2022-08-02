import React from "react"
import styled, { keyframes } from "styled-components"
import LoadBox from "./assets/loadBox.svg"

const slide = keyframes`
0%{
    transform-origin: left;
    transform: scalex(0.3);
  }
 
  25%{
    transform-origin: left;
    transform: scalex(1);
  }
  26%{
    transform-origin: right;
    transform: scalex(1);
  }
  50%{
    transform-origin: right;
    transform: scalex(0.3);
  }
  
  75%{
    transform-origin: right;
    transform: scalex(1);
  }
  76%{
    transform-origin: left;
    transform: scalex(1);
  }
  100%{
    transform-origin: left;
    transform: scalex(0.3);
  }

`
const LoadSection = styled.div`
  // border: 2px solid red;
  background-color: ${({ theme }) => theme.colors.dark};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .loadBoxContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
    height: 115px;
    // position: relative;
    margin: auto;
  }

  .loadingImg {
    width: 100%;
    height: 100%;
  }

  .nameInitial {
    color: ${({ theme }) => theme.colors.purple};
    position: absolute;
  }
  .line {
    width: 80vw;
    margin-top: 3.5rem;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.borderColor};
    border-radius: 3px;
  }
  .inner {
    border-radius: 3px;
    width: 100%;
    height: inherit;
    background: ${({ theme }) => theme.colors.lightColor};
    animation: ${slide} 2s ease-in-out infinite;
  }
`

const Loading = () => {
  return (
    <LoadSection>
      <section className="loadWrapper">
        <div className="loadBoxContainer">
          <p className="nameInitial">D</p>
          <img src={LoadBox} alt="Loading..." className="loadingImg" />
        </div>
        <div className="line">
          <div className="inner"></div>
        </div>
      </section>
    </LoadSection>
  )
}

export default Loading
