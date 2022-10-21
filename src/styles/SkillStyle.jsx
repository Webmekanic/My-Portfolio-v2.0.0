import styled from "styled-components"
// cubic - bezier(.85, -0.01, 1, .92) cubic bezier
// cubic-bezier(.99,.99,.26,.26) linear bezier

export const MySkills = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.purple};
  position: relative;
  z-index: 99;
  display: flex;
  align-items: center;
  width: 18.75rem;
  height: 18.75rem;
  border-radius: 50%;
  background: transparent;
  margin: 50px auto;

  .skillsBorder1 {
    border: 1px solid ${({ theme }) => theme.colors.purple};
    position: absolute;
    top: 0.25rem;
    right: 0.25rem;
    left: 0.25rem;
    bottom: 0.25rem;
    border-radius: 50%;
  }

  .skillsBorder2 {
    border: 1px solid ${({ theme }) => theme.colors.purple};
    position: absolute;
    top: 1.5625rem;
    right: 1.5625rem;
    left: 1.5625rem;
    bottom: 1.5625rem;
    border-radius: 50%;
  }
  .aniIcon {
    border: 2px solid red;
    width: 12.5rem;
    height: 12.5rem;
    display: flex;
    margin: auto;
    position: absolute;
    top: 1.5625rem;
    right: 1.5625rem;
    left: 1.5625rem;
    bottom: 1.5625rem;

    .imgIcon {
      // border: 2px solid yellow;
      padding-left: 15px;
      width: 100%;
      height: 100%;
    }

    .straightLine {
      border: 2px solid red;
      position: absolute;
      left: 50%;
      top: -60px;
      transform: translate(-50%);
      height: calc(100% + 130px);
    }

    .verticalLine {
      border: 2px solid red;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, 50%);
      width: calc(100% + 130px);
    }
  }

  .jsLogo {
    // border: 2px solid red;
    position: absolute;
    top: 14px;
    left: 42px;
    width: 53.5px;
    height: 56px;
  }
  .cssLogo {
    // border: 2px solid red;
    width: 75px;
    height: 88px;
    position: absolute;
    top: 0;
    left: 200px;
  }
  .HtmlIcon {
    // border: 2px solid yellow;
    position: absolute;
    top: 220px;
    left: 0;
    width: 80px;
    height: 60px;
  }
  .ReactJs {
    position: absolute;
    top: 190px;
    left: 205px;
    width: 75px;
    height: 60px;
    animation: straightLine 2.5s infinite linear;
  }
  @media ${({ theme }) => theme.mediaQueries.above768} {
  }
  @media ${({ theme }) => theme.mediaQueries.medium} {
    margin: unset;
  }
  @media (max-width: 280px) {
    // width: 100%;
  }

  @keyframes straightLine {
    50% {
      transform: translate3D(35px, -70px, 0);
    }
  }
`
