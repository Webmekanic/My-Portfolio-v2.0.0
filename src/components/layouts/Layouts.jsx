import React, { useContext } from "react"
import { Outlet } from "react-router-dom"
// import Footer from "./Footer"
import Navbar from "./Navbar"
import { MyLayout } from "../../styles/LayoutStyle"
import PortfolioContext from "../../context/portfolio/PortfolioContext"
import MobileMenu from "./MobileMenu"
import Loading from "./Loading"

const Layouts = () => {
  const { menu, loading } = useContext(PortfolioContext)

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
