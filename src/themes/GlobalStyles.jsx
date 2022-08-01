import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`


html{
  height: 100%;
}

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Rubik', sans-serif;
}
body{
  background: hsl(228, 33%, 97%);
  padding-bottom: 35px;

}
`

export default GlobalStyle
