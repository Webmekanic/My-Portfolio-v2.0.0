import styled from "styled-components"

export const SocialHandle = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  margin: auto;

  .location {
    font-size: 36px;
    margin: auto;
    color: ${({ theme }) => theme.colors.lightColor};
    cursor: pointer;
    margin-bottom: 5px;
  }

  .mediaBtn {
    padding: 10px 35px;
    transform: translateY(-100%);
    transition: all linear 3s;
  }
  .slideIn {
    padding: 10px 35px;
    transform: translateY(0%);
    transition: all linear 3s;
  }
`
