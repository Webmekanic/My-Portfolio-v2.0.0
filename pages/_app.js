import { ThemeProvider } from "styled-components"
import { PortfolioProvider } from "../src/context/portfolio/PortfolioContext"
import { SkeletonTheme } from "react-loading-skeleton"
import GlobalStyle from "../src/themes/GlobalStyles"
import theme from "../src/themes/Theme"
import "react-loading-skeleton/dist/skeleton.css"

function MyApp({ Component, pageProps }) {
  return (
    <PortfolioProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <Component {...pageProps} />
        </SkeletonTheme>
      </ThemeProvider>
    </PortfolioProvider>
  )
}

export default MyApp
