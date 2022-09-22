import styled from "styled-components"

export const ProjectItemStyle = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.purple};
  width: 350px;
  height: auto;
  padding: 15px;
  border-radius: 5px;
  background-color: #090d0f;

  .projectBg {
    height: 200px;
    position: relative;
    background-color: #485dab;
    border-radius: 3px;
  }
  .projectDescription {
    border: 2px solid yellow;
    margin-top: 10px;
  }
`
