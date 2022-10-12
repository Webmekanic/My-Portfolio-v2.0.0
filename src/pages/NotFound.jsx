import React from "react"
import Navbar from "../components/layouts/Navbar"
import { MyNotFound } from "../styles/NotFoundStyle"

function NotFound() {
  return (
    <MyNotFound>
      <Navbar />
      <div className="pattern1"></div>
      <div className="pattern2"></div>
      <div className="pattern3"></div>
    </MyNotFound>
  )
}

export default NotFound
