import styled from "styled-components"
// import kkkk from "../components/layouts/assets/kkkk"

export const MyHome = styled.div`
  background-color: transparent;
  padding-top: 5rem;
  position: relative;
  width: 100%;
  z-index: 20;

  .pattern1 {
    background: ${({ theme }) => theme.colors.barColor};
    position: absolute;
    z-index: 10;
    height: 13rem;
    width: 100%;
    transform: skewY(-35deg);
    left: 0;
    right: 0;
    top: 12.4rem;
  }

  .pattern2 {
    background: ${({ theme }) => theme.colors.barColor};
    position: absolute;
    z-index: 10;
    height: 13rem;
    width: 100%;
    transform: skewY(-35deg);
    left: 0;
    right: 0;
    top: 30rem;
  }
  .pattern3 {
    position: absolute;
    background: ${({ theme }) => theme.colors.barColor};
    z-index: 10;
    height: 13rem;
    width: 100%;
    transform: skewY(35deg);
    left: 0;
    right: 0;
    top: 30rem;
  }

  .pattern4 {
    position: absolute;
    background: ${({ theme }) => theme.colors.barColor};
    z-index: 10;
    height: 13rem;
    width: 100%;
    transform: skewY(35deg);
    left: 0;
    right: 0;
    top: 65rem;
  }
  .pattern5 {
    position: absolute;
    background: ${({ theme }) => theme.colors.barColor};
    z-index: 10;
    height: 13rem;
    width: 100%;
    transform: skewY(35deg);
    left: 0;
    right: 0;
    top: 82.5rem;
  }
  .pattern6 {
    background: ${({ theme }) => theme.colors.barColor};
    position: absolute;
    z-index: 10;
    height: 13rem;
    width: 100%;
    transform: skewY(-35deg);
    left: 0;
    right: 0;
    top: 82.5rem;
  }
  .pattern7 {
    position: absolute;
    background: ${({ theme }) => theme.colors.barColor};
    z-index: 10;
    height: 13rem;
    width: 100%;
    transform: skewY(35deg);
    left: 0;
    right: 0;
    top: 115rem;
  }
  .pattern8 {
    position: absolute;
    background: ${({ theme }) => theme.colors.barColor};
    z-index: 10;
    height: 13rem;
    width: 100%;
    transform: skewY(-35deg);
    left: 0;
    right: 0;
    top: 115rem;
  }
  .pattern9 {
    position: absolute;
    background: ${({ theme }) => theme.colors.barColor};
    z-index: 10;
    height: 13rem;
    width: 100%;
    transform: skewY(-35deg);
    left: 0;
    right: 0;
    top: 134rem;
  }

  .homeFooter {
    position: absolute;
    bottom: 0;
  }
  .myNameContainer {
    width: 89%;
    margin: auto;
    z-index: 99;
    padding-top: 3.4rem;
  }

  .aboutAniebo {
    display: flex;
    flex-direction: column-reverse;
  }

  .xbox {
    font-size: 3.5rem;
    position: relative;
    text-shadow: 0px 0px 3px ${({ theme }) => theme.colors.purple};
    color: ${({ theme }) => theme.colors.barColor};
    font-family: Chivo;
    font-style: normal;
    font-weight: 900;
    z-index: 99;
    top: 0;
  }

  .fullName {
    display: flex;
    grid-gap: 0.9rem;
    margin-top: 2.2rem;
  }
  .xbox .inside {
    font-size: 3.5rem;
    background-image: linear-gradient(180deg, #f8f6ef 10%, #f8f6ef 100%);
    background-clip: text;
    -webkit-background-clip: text;
    text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
    color: transparent;
    text-shadow: none;
    top: -5%;
    left: -1%;
    position: absolute;
    z-index: 99;
  }
  .xbox:before {
    content: attr(data-char);
    font-size: 3.5rem;
    position: absolute;
    text-shadow: 0px 0px 4px ${({ theme }) => theme.colors.purple};
    clip-path: polygon(
      0% 100%,
      0% 0%,
      100% 0%,
      100% 50%,
      50% 50%,
      100% 50%,
      100% 100%
    );
    animation-name: loading;
    animation-duration: 10s;
    animation-delay: -0.1s;
    animation-timing-function: cubic-bezier(0, 0.1, 0.9, 0.81);
    animation-direction: reverse;
    mix-blend-mode: color;
  }
  .xbox:after {
    content: attr(data-char);
    font-size: 3.5rem;
    position: absolute;
    text-shadow: 0px 0px 4px ${({ theme }) => theme.colors.purple};
    clip-path: polygon(
      0% 100%,
      0% 0%,
      100% 0%,
      100% 50%,
      50% 50%,
      100% 50%,
      100% 100%
    );
    animation-name: loading;
    animation-duration: 10s;
    animation-timing-function: cubic-bezier(0, 0.1, 0.9, 0.81);
    animation-direction: reverse;
    mix-blend-mode: color;
    left: 0;
    top: 0;
  }
  @keyframes loading {
    0% {
      clip-path: polygon(
        0% 100%,
        0% 0%,
        100% 0%,
        100% 50%,
        50% 50%,
        100% 50%,
        100% 100%
      );
    }
    12.5% {
      clip-path: polygon(
        0% 100%,
        0% 0%,
        100% 0%,
        100% 50%,
        50% 50%,
        100% 100%,
        100% 100%
      );
    }
    25% {
      clip-path: polygon(
        0% 100%,
        0% 0%,
        100% 0%,
        100% 50%,
        50% 50%,
        50% 100%,
        50% 100%
      );
    }
    37.5% {
      clip-path: polygon(
        0% 100%,
        0% 0%,
        100% 0%,
        100% 50%,
        50% 50%,
        0% 100%,
        0% 100%
      );
    }
    50% {
      clip-path: polygon(
        0% 50%,
        0% 0%,
        100% 0%,
        100% 50%,
        50% 50%,
        0% 50%,
        0% 50%
      );
    }
    62.5% {
      clip-path: polygon(
        0% 0%,
        0% 0%,
        100% 0%,
        100% 50%,
        50% 50%,
        0% 0%,
        0% 0%
      );
    }
    75% {
      clip-path: polygon(
        50% 0%,
        50% 0%,
        100% 0%,
        100% 50%,
        50% 50%,
        50% 0%,
        50% 0%
      );
    }
    87.5% {
      clip-path: polygon(
        100% 0%,
        100% 0%,
        100% 0%,
        100% 50%,
        50% 50%,
        100% 0%,
        100% 0%
      );
    }
    100% {
      clip-path: polygon(
        100% 50%,
        100% 50%,
        100% 50%,
        100% 50%,
        50% 50%,
        100% 50%,
        100% 50%
      );
    }
  }
  @keyframes loading2 {
    0% {
      clip-path: polygon(
        0% 100%,
        0% 0%,
        100% 0%,
        100% 50%,
        50% 50%,
        100% 50%,
        100% 100%
      );
    }
    12.5% {
      clip-path: polygon(
        0% 100%,
        0% 0%,
        100% 0%,
        100% 50%,
        50% 50%,
        100% 100%,
        100% 100%
      );
    }
    25% {
      clip-path: polygon(
        0% 100%,
        0% 0%,
        100% 0%,
        100% 50%,
        50% 50%,
        50% 100%,
        50% 100%
      );
    }
    37.5% {
      clip-path: polygon(
        0% 100%,
        0% 0%,
        100% 0%,
        100% 50%,
        50% 50%,
        0% 100%,
        0% 100%
      );
    }
    50% {
      clip-path: polygon(
        0% 50%,
        0% 0%,
        100% 0%,
        100% 50%,
        50% 50%,
        0% 50%,
        0% 50%
      );
    }
    62.5% {
      clip-path: polygon(
        0% 0%,
        0% 0%,
        100% 0%,
        100% 50%,
        50% 50%,
        0% 0%,
        0% 0%
      );
    }
    75% {
      clip-path: polygon(
        50% 0%,
        50% 0%,
        100% 0%,
        100% 50%,
        50% 50%,
        50% 0%,
        50% 0%
      );
    }
    87.5% {
      clip-path: polygon(
        100% 0%,
        100% 0%,
        100% 0%,
        100% 50%,
        50% 50%,
        100% 0%,
        100% 0%
      );
    }
    100% {
      clip-path: polygon(
        100% 50%,
        100% 50%,
        100% 50%,
        100% 50%,
        50% 50%,
        100% 50%,
        100% 50%
      );
    }
  }

  .homeFooter {
    position: absolute;
    bottom: 0;
  }
  .currentRole {
    // border: 2px solid red;
    position: relative;
    z-index: 99;
    color: ${({ theme }) => theme.colors.textColor};
    font-family: Work Sans;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    // line-height: 21px;
  }
  .letsCodeBtn {
    margin-top: 4rem;
    // border: 2px solid red;
    position: relative;
    z-index: 20;
    display: inline-block;
  }

  .img-circle {
    position: absolute;
    left: -40px;
    top: -40px;
  }
  .img-circle2 {
    // border: 2px solid red;
    position: absolute;
    top: -100px;
    right: -50px;
  }

  .homeAboutMe {
    // border: 2px solid red;
    position: relative;
    z-index: 20;
    width: 100%;
  }
  .homeAboutBgText {
    position: absolute;
    top: 25px;
  }

  .homeAboutMeText {
    margin-left: -13rem;
    margin-top: 19rem;
  }
  @media ${({ theme }) => theme.mediaQueries.above768} {
    .homeAboutBgText {
      top: 40px;
    }
    .fullName {
      display: flex;
      flex-direction: column;
      grid-gap: unset;
      margin-top: unset;
    }

    .xbox,
    .xbox .inside,
    .xbox:before,
    .xbox:after {
      font-size: 5.8rem;
    }

    .aboutAniebo {
      display: unset;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 4rem;
    }
  }

  @media ${({ theme }) => theme.mediaQueries.medium} {
    .pattern1 {
      top: 12rem;
      transform: skewY(-15.5deg);
      height: 13rem;
    }
    .pattern2 {
      top: 32.5rem;
      transform: skewY(-15.5deg);
      height: 13rem;
    }
    .pattern3 {
      top: 32.5rem;
      transform: skewY(15.5deg);
      height: 13rem;
    }
    .pattern4 {
      transform: skewY(15.5deg);
      height: 13rem;
      top: 67.5rem;
    }
    .pattern5 {
      transform: skewY(15.5deg);
      top: 84.5rem;
    }
    .pattern6 {
      transform: skewY(-15.5deg);
      top: 84.8rem;
    }
    .pattern7 {
      top: 117rem;
      transform: skewY(15.5deg);
      height: 13rem;
    }
    .pattern8 {
      top: 117rem;
      transform: skewY(-15.5deg);
    }
    .pattern9 {
      top: 134.5rem;
      transform: skewY(-15.5deg);
    }
    .xbox1 {
      margin-top: -1.9rem;
    }
    .fullName {
      display: flex;
      flex-direction: column;
      grid-gap: unset;
    }
    .xbox,
    .xbox .inside,
    .xbox:before,
    .xbox:after {
      font-size: 8.5rem;
    }
  }
  @media ${({ theme }) => theme.mediaQueries.large} {
    .pattern1 {
      top: 14.3rem;
      transform: skewY(-14deg);
    }
    .pattern2 {
      top: 36rem;
      transform: skewY(-14deg);
    }
    .pattern3 {
      top: 36.5rem;
      transform: skewY(14deg);
    }
    .pattern4 {
      transform: skewY(14deg);
      top: 71.5rem;
    }
    .pattern5 {
      transform: skewY(14deg);
      top: 88.5rem;
    }
    .pattern6 {
      transform: skewY(-14deg);
      top: 88.5rem;
    }
    .pattern7 {
      top: 126rem;
      transform: skewY(14deg);
    }
    .pattern8 {
      top: 126rem;
      transform: skewY(-14deg);
    }
    .pattern9 {
      top: 146rem;
      transform: skewY(-14deg);
    }
  }
  @media (min-width: 481px) and (max-width: 1023px) {
    .pattern1 {
      height: 12rem;
      transform: skewY(-17deg);
    }
    .pattern2 {
      height: 12rem;
      transform: skewY(-17deg);
      top: 32rem;
    }
    .pattern3 {
      height: 12rem;
      transform: skewY(17deg);
      top: 32rem;
    }
    .pattern4 {
      transform: skewY(17deg);
      top: 67rem;
    }
    .pattern5 {
      transform: skewY(17deg);
      top: 84rem;
    }
    .pattern6 {
      transform: skewY(-17deg);
      top: 84rem;
    }
    .pattern7 {
      transform: skewY(17deg);
      top: 117rem;
    }
    .pattern8 {
      transform: skewY(-17deg);
      top: 117rem;
    }
    .pattern9 {
      transform: skewY(-17deg);
      top: 138rem;
    }
  }
  @media (max-width: 280px) {
    .xbox,
    .xbox .inside,
    .xbox:before,
    .xbox:after {
      font-size: 2.5rem;
    }
  }
`

export const AboutAniebo = styled.section`
  width: 89%;
  margin: auto;
  padding-top: 5.8rem;

  .aboutTitle {
    position: relative;
    z-index: 30;
    font-family: "Chivo";
    font-style: black;
    font-weight: 900;
    font-size: clamp(2.1rem, 3vw, 2.8125rem);
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.neutral};
    white-space: nowrap;
  }

  .aboutText {
    padding-top: clamp(0.1rem, 0.5rem, 2rem);
  }
  .aboutText > * {
    padding-top: 0.7rem;
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 400;
    font-size: clamp(0.9rem, 2vw, 1rem);
    line-height: 1.3125rem;
  }
  .aboutText2 {
    padding-top: 0;
  }
  .aboutAniebo1 {
    position: relative;
    z-index: 20;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5rem;
  }

  .downloadResumeButton {
    margin-top: 2rem;
  }
  .skillsCard {
    border-top: 3px solid ${({ theme }) => theme.colors.purple};
    background: #11171b;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    height: 270px;
    padding: 25px 40px 0 40px;
  }

  .skillSet {
    // border: 2px solid red;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    grid-gap: 1.5rem;
    margin-top: 0.4rem;
  }
  .cssLogo {
    // border: 2px solid red;
    width: 42.2px;
    height: 40px;
  }
  .skillSetRating {
    // border: 2px solid green;
    width: 100%;
    display: flex;
    flex-direction: column;
    grid-gap: 0.6rem;
  }
  .skillRatingBar {
    background: ${({ theme }) => theme.colors.progressBar};
    height: 6px;
  }
  .skillRatingBar1 {
    // border: 2px solid red;
  }

  // media queries for my about second paragraph text
  @media ${({ theme }) => theme.mediaQueries.above768} {
    .aboutText2 {
      padding-top: 0.7rem;
    }
  }
  @media ${({ theme }) => theme.mediaQueries.below768} {
    .aboutAniebo1 {
      display: unset;
    }
    .skillsCard {
      margin-top: 2rem;
    }
    .fullName {
      margin-top: 2.2rem;
    }
  }
`
