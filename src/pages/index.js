import React from "react"
import LayoutBasic from "../layouts/LayoutBasic"
import Profile from "../components/Profile"
import AboutMe from "../components/AboutMe"
import "./index.scss"

import "./index.scss"

export default function IndexPage() {
  return (
    <LayoutBasic>
      <Profile />
      <AboutMe />
    </LayoutBasic>
  )
}
