import styled from "styled-components"

export const MyHome = styled.div`
  border: 2px solid red;
  background-color: transparent;
  padding-top: 5rem;
  position: relative;
  width: 100%;
  z-index: 20;

  .pTag {
    // margin-top: 20rem;
  }
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
    // border: 2px solid red;
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
  .homeContainer {
    // border: 2px solid purple;
    // height: 100%;
    // position: relative;
  }

  .myName {
    color: rgba(0, 0, 0, 0.5);
    text-shadow: 3px 3px 0 #aaa;
  }

  .homeFooter {
    position: absolute;
    bottom: 0;
    // border: 2px solid red;
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
`
