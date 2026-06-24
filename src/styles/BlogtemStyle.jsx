import styled from "styled-components";

export const BlogItemStyle = styled.section`
    width: 89%;
    margin: auto;

  .talksList {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    grid-gap: 8rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryBorder};
    padding: 1.2rem 0;
  }

  .talksList:last-of-type {
    border-bottom: none;
  }

  .talkItem {
    width: 55%;
  }

  .talkLink {
    font-family: "Chivo Mono", monospace;
    font-style: Regular;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.lightColor};
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.7rem;
  }

  .contactText {
    width: 45%;
    color: ${({ theme }) => theme.colors.textColor};
    position: relative;
    z-index: 20;
  }

  .talkImage {
    width: 360px;
    height: 189px;
  }

  .talkImage img {
    border-radius: 12px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  // .talksList {
  //   border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryBorder};
  //   padding: 1.2rem 0;
  //   grid-gap: 2rem;
  //   position: relative;
  //   z-index: 20;
  // }

  // .talksList:last-child {
  //   border-bottom: none;
  // }

  .talkInfo {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .talkDate,
  .talkDuration {
    font-family: "Chivo Mono", monospace;
    font-style: light;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.secondaryColor};
    margin-bottom: 1rem;
  }

  .talkSeparator {
    font-weight: 300;
    color: ${({ theme }) => theme.colors.secondaryColor};
    border-radius: 50%;
    width: 5px;
    height: 5px;
    background: ${({ theme }) => theme.colors.white};
    flex-shrink: 0;
    margin: 0 0.4rem;
    margin-bottom: 1rem;
  }

  .talkTitle {
    font-family: "Chivo Mono", monospace;
    font-style: Regular;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: ${({ theme }) => theme.colors.white};
  }

  .talkDescription {
    font-family: "Chivo Mono", monospace;
    font-style: Regular;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.tertiaryColor};
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  @media ${({ theme }) => theme.mediaQueries.below768} {
    .talksList {
      display: flex;
      flex-direction: column-reverse;
      justify-content: flex-start;
      gap: 1.5rem;
    }

    .talkItem {
      width: 100%;
    }

    .talkDescription {
      display: none;
    }

    .talkImage {
      width: 100%;
      height: auto;
    }

    .talkImage img {
      height: auto;
    }
  }

  @media ${({ theme }) => theme.mediaQueries.large} {
    .talksList {
      grid-gap: 6rem;
    }
  }
`;
