import styled from "styled-components"
import Link from "../components/shared/NavLink"

export const Nav = styled.nav`
  border: 2px solid orange;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  padding: 0.625rem clamp(0.6rem, 3vw, 2.5rem);
  color: ${({ theme }) => theme.colors.textColor};

  .myIntials {
    font-family: Wingdings 3;
    font-style: Regular;
    font-size: 20px;
    line-height: 100%;
    font-weight: lighter;
    color: ${({ theme }) => theme.colors.neutral};
  }
  .navLinkList {
    // border: 2px solid yellow;
    display: flex;
  }
  .navLinkItem {
    // border: 2px solid purple;
    list-style-type: none;
    display: flex;
    padding: 0 2rem;
  }
  .socialIcons {
    display: flex;
    grid-gap: 1rem;
    font-size: 1.3rem;
  }
  .socialLink {
    color: ${({ theme }) => theme.colors.textColor};
    cursor: pointer;
  }

  .socialLink:hover {
    color: ${({ theme }) => theme.colors.lightColor};
  }
  .sortIcon {
    display: none;
  }

  // Media Query
  @media ${({ theme }) => theme.mediaQueries.below768} {
    .navLinkList,
    .socialIcons {
      display: none;
    }

    .sortIcon {
      border: 2px solid blue;
      display: block;
    }
  }
`

export const MyLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 1rem;
  line-height: 1rem;
  line-height: 100%;

  // &:active {
  //   color: ${({ theme }) => theme.colors.purple};
  // }

  &.is-active {
    color: ${({ theme }) => theme.colors.lightColor};
  }
`
