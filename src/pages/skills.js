import React from "react"
import LayoutBasic from "../layouts/LayoutBasic"
import { Container } from "react-bootstrap"
import ListSkills from "../components/ListSkills"
import {
  frontendSkills,
  frontendSkillsColors,
  backendSkills,
  backendSkillsColors,
  mobileSkills,
  mobileSkillsColors,
  uiSkills,
  uiSkillsColors,
} from "../Utils/skills"

import "./skills.scss"

export default function Skills() {
  return (
    <LayoutBasic menuColor="#000">
      <Container className="skills">
        <div className="skills__block">
          <h2>Diseño Ui/Ux</h2>
          <ListSkills skills={uiSkills} colors={uiSkillsColors} />
        </div>
        <div className="skills__block">
          <h2>Frontend</h2>
          <ListSkills skills={frontendSkills} colors={frontendSkillsColors} />
        </div>
        <div className="skills__block">
          <h2>Backend</h2>
          <ListSkills skills={backendSkills} colors={backendSkillsColors} />
        </div>
        <div className="skills__block">
          <h2>Mobile</h2>
          <ListSkills skills={mobileSkills} colors={mobileSkillsColors} />
        </div>
      </Container>
    </LayoutBasic>
  )
}
