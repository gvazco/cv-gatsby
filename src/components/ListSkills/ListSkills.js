import React from "react"
import SkillBar from "react-skills-bars"
import "./ListSkills.scss"

export default function ListSkills(props) {
  const { skills, colors } = props
  //   console.log(props)
  return (
    <div className="list-skills">
      <SkillBar
        skills={skills}
        colors={colors}
        animationDelay={0}
        animationDuration={1500}
      />
    </div>
  )
}
