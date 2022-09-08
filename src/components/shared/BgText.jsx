import React from "react"
import { BgTextStyle } from "../../styles/BgTextStyle"

function BgText({ text, classname }) {
  return (
    <BgTextStyle width="100%" height="75vh" className={classname}>
      <text x="20%" y="55%">
        {text}
      </text>
    </BgTextStyle>
  )
}

export default BgText
