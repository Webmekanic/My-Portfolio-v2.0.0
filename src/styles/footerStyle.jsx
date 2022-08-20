import styled from "styled-components"

export const FooterSection = styled.footer`
  background-color: transparent;
  // border: 4px solid red;
  // padding-bottom: 1rem;
  position: relative;
  white-space: nowrap;
  // padding: 0 clamp(0.6rem, 3vw, 2.8rem);
  z-index: 99;
  width: 93%;
  margin: auto;

  .horizontalLine {
    border-top: 2px solid ${({ theme }) => theme.colors.lineColor};
    margin: 1.875rem auto;
    margin-top: 3rem;
  }

  .contactAddresses {
    // border: 2px solid ${({ theme }) => theme.colors.purple}
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    // height: 20px;
  }

  .copyRight {
    display: flex;
    color: ${({ theme }) => theme.colors.textColor};
    font-style: Medium;
    font-size: 14px;
  }

  .myInfo:first-child {
    padding-right: 0.2rem;
    border-right: 1.2px solid ${({ theme }) => theme.colors.textColor};
  }
  .myRole {
    padding: 0 0.2rem 0 0.2rem;
    border-right: 1.2px solid ${({ theme }) => theme.colors.textColor};
    margin-right: 0.2rem;
  }
  .myEmail {
    color: ${({ theme }) => theme.colors.textColor};
    text-decoration: none;
    cursor: pointer;
  }
  .socialIcons {
    // border: 2px solid yellow;
    display: flex;
    grid-gap: 1rem;
    font-size: 1.3rem;
    position: absolute;
    right: 0;
    margin-bottom: 10px;
  }
  .socialLink {
    color: ${({ theme }) => theme.colors.textColor};
    cursor: pointer;
  }

  .socialLink:hover {
    color: ${({ theme }) => theme.colors.lightColor};
  }

  // Media Query
  @media ${({ theme }) => theme.mediaQueries.below768} {
    position: relative;
    .socialIcons {
      // border: 2px solid red;
      position: absolute;
      top: 0;
      right: unset;
    }
    .myRole {
      border: none;
    }

    .myEmail {
      display: none;
    }
  }
`
