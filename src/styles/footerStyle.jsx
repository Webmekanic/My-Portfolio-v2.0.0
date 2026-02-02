import styled from "styled-components"

export const FooterSection = styled.footer`
  position: relative;
  white-space: nowrap;
  z-index: 99;
  width: 100%;
  padding-bottom: 0.5rem;

  .horizontalLine {
    border-top: 1px solid ${({ theme }) => theme.colors.cardBorderColor};
    margin: 1.875rem auto;
    margin-top: 2.5rem;
  }

  .contactAddresses {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 2.5rem;
  }

  .copyRight {
    display: flex;
    color: ${({ theme }) => theme.colors.textColor};
    font-style: light;
    font-size: clamp(0.8rem, 3vw, 0.875rem);
    margin-top: -0.7rem;
    font-family: "Chivo Mono";
    gap: 0.5rem;
  }

  .myInfo {
    // // border: 2px solid ${({ theme }) => theme.colors.tertiaryColor};
    // padding-right: 5rem;
  }

  .myInfo:first-child {
    padding: 0 0.2rem;
    padding-right: 0.5rem;
    border-right: 1.2px solid ${({ theme }) => theme.colors.tertiaryColor};
  }
  .myRole {
    padding: 0 0.2rem 0 0.2rem;
    padding-right: 0.5rem;
    border-right: 1.2px solid ${({ theme }) => theme.colors.tertiaryColor};
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
    margin-bottom: 10px;
  }
  .socialLink {
    color: ${({ theme }) => theme.colors.textColor};
    cursor: pointer;
  }

  .socialLink:hover {
    color: ${({ theme }) => theme.colors.lightColor};
  }

  .contactSection {
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    gap: 5rem;
  }

  .contactTitleText {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.footerWhite};
    font-family: "Bungee";
    font-weight: 400;
    font-style: regular;
    text-decoration: uppercase;
  }

  .contactText {
    color: ${({ theme }) => theme.colors.tertiaryColor};
    font-size: 16px;
    font-weight: 300;
    font-style: light;
    font-family: "Chivo Mono";
    line-height: 20px;
  }

  .contactButton {
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
  }

  // Media Query
  @media ${({ theme }) => theme.mediaQueries.below768} {
    position: relative;
    .socialIcons {
      position: absolute;
      top: 0px;
      right: unset;
    }
    .myRole {
      border: none;
    }

    .myEmail {
      display: none;
    }
  }
`;

export const SocialLink = styled.div`
  display: flex;
  grid-gap: 1rem;
  font-size: 1.3rem;
  position: absolute;
  right: 0;
  margin-bottom: 10px;

  @media ${({ theme }) => theme.mediaQueries.below768} {
    position: absolute;
    top: 0;
    right: unset;
  }
`
