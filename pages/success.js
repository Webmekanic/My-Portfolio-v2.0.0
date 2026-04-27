import React, { useState } from "react"
import { useRouter } from "next/router"
import { FaTimes } from "react-icons/fa"
import { SuccessPage } from "../src/styles/SuccessStyle"

const Success = () => {
  const router = useRouter()
  const [closeModal, setCloseModal] = useState(true)

  const handleClose = () => {
    setCloseModal(false)
    router.push("/")
  }

  if (!closeModal) return null

  return (
    <SuccessPage>
      <div className="successContainer">
        <div className="closeIcon">
          <FaTimes onClick={handleClose} />
        </div>
        <div className="success-checkmark">
          <div className="check-icon">
            <span className="icon-line line-tip"></span>
            <span className="icon-line line-long"></span>
            <div className="icon-circle"></div>
            <div className="icon-fix"></div>
          </div>
          <p className="successText">success</p>
          <p className="voteSuccessful">Message sent successfully</p>
        </div>
      </div>
    </SuccessPage>
  )
}

export default Success
