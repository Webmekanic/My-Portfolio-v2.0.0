import React, { useContext } from "react"
import { NavLink as NavLinkReactRouterDom } from "react-router-dom"
import PortfolioContext from "../../context/portfolio/PortfolioContext"

const Link = function ({ to, children, className, ...props }) {
  const { dispatch } = useContext(PortfolioContext)

  return (
    <NavLinkReactRouterDom
      {...props}
      className={({ isActive }) =>
        [className, isActive ? "is-active" : null].filter(Boolean).join(" ")
      }
      to={to}
      onClick={() => dispatch({ type: "SET_LOADING", payload: true })}
    >
      {children}
    </NavLinkReactRouterDom>
  )
}

export default Link
