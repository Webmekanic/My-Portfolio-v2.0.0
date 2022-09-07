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
	background: ${({ theme }) => theme.colors.textColor};
	border-radius: 7px;
	width: 7px;
	transition: all 0.4s ease;
}
::-webkit-scrollbar-track {
	background: #0C1114;
	border-radius: 7px;
	width: 7px;
}
body{
  color: white;
  background: #0C1114;
  font-family: 'Work Sans';
}
`

export default GlobalStyle
