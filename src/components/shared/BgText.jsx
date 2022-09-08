import React from "react"
import { BgTextStyle } from "../../styles/BgTextStyle"

function BgText({ text, classname }) {
  return (
    <BgTextStyle
      width="100%"
      height="75vh"
      overflow="hidden"
      className={classname}
    >
      <text x="35%" y="55%">
        {text}
      </text>
    </BgTextStyle>
  )
}

export default BgText
