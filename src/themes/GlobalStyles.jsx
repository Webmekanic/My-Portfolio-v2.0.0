import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

html{
  // height: 100
}

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
::-webkit-scrollbar {
	width: 7px;
	color: #046d33;
	transition: all 0.4s ease;
}
::-webkit-scrollbar-thumb {
	background: ${({ theme }) => theme.colors.lightColor};
	border-radius: 7px;
	width: 7px;
	transition: all 0.4s ease;
}
::-webkit-scrollbar-track {
	background: ${({ theme }) => theme.colors.dark};
	border-radius: 7px;
	width: 7px;
}
body{
  color: ${({ theme }) => theme.colors.textColor};
  background: #0C1114;
  font-family: 'Work Sans';
}
.aboutTitle {
    position: relative;
    z-index: 30;
    font-family: "Chivo Mono";
    font-style: light;
    font-weight: 300;
    font-size: clamp(1.5rem, 3vw, 1.75rem);
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.textColor};
    white-space: nowrap;
  }
  .sectionDescription{
    font-family: "Chivo Mono";
    font-style: light;
    font-weight: 300;
    font-size: clamp(1rem, 2vw, 1.125rem);
    line-height: 1.3125rem;
    color: ${({ theme }) => theme.colors.tertiaryColor};
  }
`;

export default GlobalStyle
