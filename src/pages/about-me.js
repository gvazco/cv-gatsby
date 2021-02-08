import React from "react"
import LayoutBasic from "../layouts/LayoutBasic"
import Seo from "../components/Seo"

export default function AboutMe() {
  return (
    <LayoutBasic menuColor="#000">
      <Seo title="About" />
      <h2>About Me</h2>
    </LayoutBasic>
  )
}
