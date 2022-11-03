import React, { useContext, useEffect } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import { MyLayout } from "../../styles/LayoutStyle"
import PortfolioContext from "../../context/portfolio/PortfolioContext"
import MobileMenu from "./MobileMenu"
import Loading from "./Loading"
import { useLocation } from "react-router-dom"

const Layouts = () => {
  const location = useLocation()
  const { menu, loading, dispatch } = useContext(PortfolioContext)

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "SET_LOADING", payload: false })
    }, 5000)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, location])

  return (
    <MyLayout>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
      {menu && <MobileMenu />}
      {loading && <Loading />}
    </MyLayout>
  )
}

export default Layouts
