import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

const NavLink = function ({ href, children, className, ...props }) {
  const router = useRouter()
  const isActive = router.pathname === href

  return (
    <Link
      {...props}
      href={href}
      className={[className, isActive ? "is-active" : null].filter(Boolean).join(" ")}
    >
      {children}
    </Link>
  )
}

export default NavLink
