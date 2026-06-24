import styled from "styled-components"

export const ProjectItemStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  position: sticky;
  border-radius: 5px;
  background-image: linear-gradient(
    145deg,
    hsl(203deg 25% 6%) 1%,
    hsl(202deg 25% 6%) 49%,
    hsl(201deg 25% 6%) 51%,
    hsl(201deg 25% 5%) 49%,
    hsl(200deg 25% 5%) 51%,
    hsl(200deg 25% 5%) 99%
  );
  cursor: pointer;

  .projectContainer {
    position: relative;
    background-color: ${({ theme }) => theme.colors.cardColor};
    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.colors.cardBorderColor};
    display: flex;
    flex-direction: row;
    gap: 32px;
    padding: 12px;
    height: 380px;
    min-height: 380px;
    width: 100%;
    overflow: hidden;
  }

  .projectBg {
    width: 50%;
    height: 100%;
    flex-shrink: 0;
    border-radius: 12px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    overflow: hidden;

    :hover {
      transition: transform 1s ease;
      transform: scale(1.02);
    }
  }

  .projectSummary {
    width: 50%;
    margin-top: 10px;
    padding: 0 0.5rem 0.5rem;
  }
  .projectTitle {
    color: ${({ theme }) => theme.colors.footerWhite};
    font-size: 28px;
    font-family: "Chivo mono";
    font-weight: 300;
    font-style: light;
    padding-top: 0.5rem;
  }

  .skillsTag {
    display: flex;
    flex-direction: row;
    grid-gap: 0.5rem;
  }

  .projectDescription {
    color: ${({ theme }) => theme.colors.textColor};
    margin-top: 5px;
    font-family: "Chivo mono";
    font-style: light;
    line-height: 1.5;
    font-size: 16px;
    // display: flex;
    // align-items: center;
    margin-top: 2rem;
  }
  .projectLinks {
    display: flex;
    text-align: center;
    align-items: center;
    grid-gap: 1rem;
    margin-top: 2rem;

    .socialLink {
      text-decoration: none;
    }
    .projectItemBtn {
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      padding: 0.2rem 0.3rem;
      border: 2px solid red;
      grid-gap: 0.4rem;
      border: none;
      border-radius: 3px;
      cursor: pointer;
    }
  }

  .skill1 {
    width: auto;
    height: 15px;
    position: relative;
    background: white;
    border-left: none;
    font-size: 11px;
    font-weight: bold;
    padding-left: 10px;
    color: purple;

    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 0;
      border-left: 7.5px solid black;
      border-top: 7.5px solid transparent;
      border-bottom: 7.5px solid transparent;
    }

    &:before {
      content: "";
      position: absolute;
      right: -7.5px;
      bottom: 0;
      width: 0;
      height: 0;
      border-left: 7.5px solid white;
      border-top: 7.5px solid transparent;
      border-bottom: 7.5px solid transparent;
    }
  }

  @media ${({ theme }) => theme.mediaQueries.below768} {
  .projectContainer {
      flex-direction: column !important;
      height: auto;
      min-height: unset;
      overflow: visible;
      gap: 20px;
      align-items: stretch;
    }

    .projectBg {
      width: 100%;
      height: 220px;
    }

    .projectSummary {
      width: 100%;
      margin-top: 0;
      padding: 0 0.25rem 0.75rem;
    }

    .projectTitle {
      font-size: 22px;
      padding-top: 0;
    }

    .projectDescription {
      margin-top: 1rem;
      font-size: 14px;
    }

    .projectLinks {
      margin-top: 1.25rem;
      flex-wrap: wrap;
    }
  }

  @media ${({ theme }) => theme.mediaQueries.above768} {

  }
  @media ${({ theme }) => theme.mediaQueries.medium} {

  }
`;