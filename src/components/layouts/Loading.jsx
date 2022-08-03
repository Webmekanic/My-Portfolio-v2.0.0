import React from "react"
import styled, { keyframes } from "styled-components"

const pulse = keyframes`
0% {
  transform: scale(1);
    }
100% {
  transform: scale(0.7);
    }
`

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
    margin: auto;
    border: 2px solid red;
    position: relative;
  }

  .loadingImg {
    // border: 2px solid yellow;
    height: 100%;
    width: 100%;
    position: relative;
    // animation: ${pulse} 2s linear infinite;
  }

  .vector-left {
    color: ${({ theme }) => theme.colors.purple};
    border: 3px solid ${({ theme }) => theme.colors.purple};
    width: 40px;
    height: 40px;
    border-right: none;
    border-top: none;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
  }
  .vector-top {
    border: 3px solid ${({ theme }) => theme.colors.purple};
    width: 40px;
    height: 40px;
    border-bottom: none;
    border-right: none;
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
  }
  .vector-right {
    border: 3px solid ${({ theme }) => theme.colors.purple};
    width: 40px;
    height: 40px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    border-left: none;
    border-bottom: none;
  }
  .vector-bottom {
    border: 3px solid ${({ theme }) => theme.colors.purple};
    width: 40px;
    height: 40px;
    // transform: rotate(45deg);
    border-top: none;
    border-left: none;
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
  }

  .nameInitial {
    color: ${({ theme }) => theme.colors.purple};
    position: absolute;
  }
  .line {
    width: 75vw;
    margin-top: 3.5rem;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.borderColor};
    border-radius: 3px;
  }
  .inner {
    border-radius: 3px;
    width: 100%;
    height: inherit;
    background: linear-gradient(
      90deg,
      rgba(138, 250, 236, 1) 0%,
      rgba(113, 81, 182, 1) 35%,
      rgba(138, 250, 236, 1) 100%
    );
    // animation: ${slide} 2s ease-in-out infinite;
  }
`

const Loading = () => {
  return (
    <LoadSection>
      <section className="loadWrapper">
        <div className="loadBoxContainer">
          <p className="nameInitial">D</p>
          <div className="loadingImg">
            <div className="vector-left"></div>
            <div className="vector-top"></div>
            <div className="vector-bottom"></div>
            <div className="vector-right"></div>
          </div>
        </div>
        <div className="line">
          <div className="inner"></div>
        </div>
      </section>
    </LoadSection>
  )
}

export default Loading
