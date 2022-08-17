import React from "react"
import { Outlet } from "react-router-dom"
// import Footer from "./Footer"
import Navbar from "./Navbar"
import { MyLayout } from "../../styles/LayoutStyle"

function Layouts() {
  return (
    <MyLayout>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </MyLayout>
  )
}

export default Layouts
