import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

html{
  height: 100%;
}

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body{
  color: white;
  // background: #0C1114;
  font-family: 'Work Sans', sans-serif;

}
`

export default GlobalStyle
