import React from "react"
import Menu from "../components/Menu"

export default function LayoutBasic(props) {
  const { children, menuColor } = props
  // console.log(props)

  return (
    <>
      <Menu menuColor={menuColor} />
      {children}
    </>
  )
}
