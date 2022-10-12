import React from "react"
import Navbar from "../components/layouts/Navbar"
import Button from "../components/shared/Button"
import { MyNotFound } from "../styles/NotFoundStyle"

function NotFound() {
  return (
    <MyNotFound>
      <Navbar />
      <div className="pattern1"></div>
      <div className="pattern2"></div>
      <div className="pattern3"></div>
      <div class="xbox" data-char="404">
        404
        <div class="inside">404</div>
        <div class="inside2">404</div>
      </div>
      <p className="notFoundText">Sorry, there’s nothing here</p>
      <Button text={"Go Back Home"} classname="notFoundBtn" />
    </MyNotFound>
  )
}

export default NotFound
