import styled from "styled-components"

export const ProjectItemStyle = styled.div`
  border: 1px solid #414141;
  width: 350px;
  height: auto;
  padding: 15px;
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
  // margin-right: 1rem;

  &:hover {
    // border: 1px solid ${({ theme }) => theme.colors.lightColor};
  }

  .projectBg {
    height: 180px;
    position: relative;
    // background-color: #485dab;
    border-radius: 3px;
  }

  .projectBg img {
    height: 100%;
    width: 100%;
    border: 2px solid green;
  }

  .projectSummary {
    margin-top: 10px;
  }
  .projectTitle {
    color: ${({ theme }) => theme.colors.neutral};
    font-size: 20px;
    font-family: Chivo;
    font-style: black;
    font-weight: 600;
    letter-spacing: 1px;
  }

  .skillsTag {
    display: flex;
    flex-direction: row;
    grid-gap: 0.5rem;
  }

  .projectDescription {
    // border: 2px solid red;
    margin-top: 5px;
    font-family: Chivo;
    font-style: black;
    line-height: 1.5;
    height: 120px;
    font-size: 13.8px;
  }
  .projectLinks {
    display: flex;
    text-align: center;
    align-items: center;
    grid-gap: 1rem;

    button {
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      padding: 0.2rem 0.3rem;
      border: 2px solid red;
      grid-gap: 0.4rem;
      border: none;
      border-radius: 3px;
    }
  }
  .socialLink {
    // border: 2px solid red;
    // background-color: ${({ theme }) => theme.colors.lightColor};
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
`
