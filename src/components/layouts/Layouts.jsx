import React, { useContext, useEffect, useRef } from "react"
import Navbar from "./Navbar"
import PortfolioContext from "../../context/portfolio/PortfolioContext"
import MobileMenu from "./MobileMenu"
import Loading from "./Loading"
import { MyLayout } from "../../styles/LayoutStyle"
import { Outlet } from "react-router-dom"
import { useLocation } from "react-router-dom"

const Layouts = () => {
  const location = useLocation()

  const path = location.pathname || ""
  // const pathExist = path[path.length - 1] || null

  const { menu, loading, dispatch } = useContext(PortfolioContext)
  const ref = useRef(path)

  useEffect(() => {
    if (path) {
      dispatch({ type: "SET_LOADING", payload: true })
      console.log("set")

      ref.current = path
    }
  }, [path, dispatch])

  useEffect(() => {
    if (ref.current === path) {
      console.log("unset")
      setTimeout(() => {
        dispatch({ type: "SET_LOADING", payload: false })
      }, 3000)
    }
  }, [path, dispatch])

  console.log(ref.current)

  return (
    <MyLayout>
      <Navbar />
      {/* <Footer /> */}
      {menu && <MobileMenu />}
      {loading ? <Loading /> : <Outlet />}
    </MyLayout>
  )
}

export default Layouts
