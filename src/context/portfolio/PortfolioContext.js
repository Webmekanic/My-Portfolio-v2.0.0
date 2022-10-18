import { createContext, useReducer } from "react"
import portfolioReducer from "./PortfolioReducer"

const PortfolioContext = createContext()

export const PortfolioProvider = ({ children }) => {
  const initialState = {
    loading: false,
    menu: false,
  }

  const [state, dispatch] = useReducer(portfolioReducer, initialState)

  return (
    <PortfolioContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PortfolioContext.Provider>
  )
}

export default PortfolioContext