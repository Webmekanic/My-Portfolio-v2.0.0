import React from "react"
import { useRouter } from "next/router"
import Navbar from "../src/components/layouts/Navbar"
import Button from "../src/components/shared/Button"
import Footer from "../src/components/layouts/Footer"
import { MyNotFound } from "../src/styles/NotFoundStyle"

const Custom404 = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push("/")
  }

  return (
    <MyNotFound>
      <Navbar />
      <div className="pattern1"></div>
      <div className="pattern2"></div>
      <div className="pattern3"></div>
      <div className="xbox" data-char="404">
        404
        <div className="inside">404</div>
        <div className="inside2">404</div>
      </div>
      <p className="notFoundText">Sorry, there's nothing here</p>
      <Button
        text={"Go Back Home"}
        classname="notFoundBtn"
        handleClick={handleClick}
      />
      <Footer classname="NotFoundFooter" />
    </MyNotFound>
  )
}

export default Custom404
