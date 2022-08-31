import styled from "styled-components"

export const FooterSection = styled.footer`
  background-color: transparent;
  position: relative;
  white-space: nowrap;
  z-index: 99;
  width: 90%;
  margin: auto;
  padding-bottom: 0.5rem;

  .horizontalLine {
    border-top: 2px solid ${({ theme }) => theme.colors.lineColor};
    margin: 1.875rem auto;
    margin-top: 2.5rem;
  }

  .contactAddresses {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .copyRight {
    display: flex;
    color: ${({ theme }) => theme.colors.textColor};
    font-style: Medium;
    font-size: clamp(0.8rem, 3vw, 0.875rem);
    margin-top: -0.7rem;
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
