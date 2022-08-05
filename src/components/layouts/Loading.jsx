import React from "react"
import styled, { keyframes } from "styled-components"

const pulseTop = keyframes`
0% {
  top: -5px;
    }
100% {
  top: calc(-4.7px + 20%);
    }
`
const pulseBottom = keyframes`
0% {
  bottom: -5px;
    }
100% {
  bottom: calc(-4.7px + 20%);
    }
`

const pulseLeft = keyframes`
0% {
  left: 0;
    }
100% {
  left: 20%;
    }
`
const pulseRight = keyframes`
0% {
  right: 0;
    }
100% {
  right: 20%;
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

const pulseAlphaD = keyframes`
0%{
  transform: scale(1);
}

100%{
  transform: scale(1.5)
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
    position: relative;
  }

  .loadingImg {
    height: 100%;
    width: 100%;
    position: relative;
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
    animation: ${pulseLeft} 2s ease-in-out infinite;
    animation-fill-mode: both;
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
    animation: ${pulseTop} 2s ease-in-out infinite;
    animation-fill-mode: both;
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
    animation: ${pulseRight} 2s ease-in-out infinite;
    animation-fill-mode: both;
  }
  .vector-bottom {
    border: 3px solid ${({ theme }) => theme.colors.purple};
    width: 40px;
    height: 40px;
    border-top: none;
    border-left: none;
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    animation: ${pulseBottom} 2s ease-in-out infinite;
    animation-fill-mode: both;
  }

  .nameInitial {
    color: ${({ theme }) => theme.colors.purple};
    position: absolute;
    font-size: 1.8rem;
    // Font family: Work Sans;
    Font style: Medium;
    font-family: sans-serif;
    animation: ${pulseAlphaD} 2s ease-in-out infinite;
    animation-fill-mode: both;
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
    // animation: ${slide} 
    // 2s ease-in-out infinite;
    animation-fill-mode: both;
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
