import React from "react"
import styled, { keyframes } from "styled-components"
import LoadBox from "./assets/loadBox.svg"

const pulse = keyframes`

`
const LoadSection = styled.div`
  border: 2px solid red;
  background-color: ${({ theme }) => theme.colors.dark};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .loadBoxContainer {
    border: 2px solid red;
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
    border: 2px solid green;
    width: 80vw;
    margin-top: 3.5rem;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.borderColor};
  }
  .inner {
    width: 100%;
    height: inherit;
    // background: #0077b5;
    // animation: slide 2s ease-in-out infinite;
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
          <div className="inner">hgdhgdhd</div>
        </div>
      </section>
    </LoadSection>
  )
}

export default Loading
