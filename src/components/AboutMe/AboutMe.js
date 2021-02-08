import React from "react"
import { Container, Button } from "react-bootstrap"
import CV from "../../images/cv.pdf"
import "./AboutMe.scss"

export default function AboutMe() {
  return (
    <Container className="about-me">
      <p>
        Laboris nostrud irure esse ipsum. Deserunt dolor adipisicing pariatur
        adipisicing velit irure. Reprehenderit duis aliqua occaecat fugiat sint
        ad. Consectetur elit sint proident Lorem elit irure. Duis elit irure qui
        Lorem ea ad nulla. Ut reprehenderit commodo culpa minim aliqua occaecat.
      </p>
      <hr />
      <a href={CV} target="_blank">
        <Button primary>Descargar CV</Button>
      </a>
    </Container>
  )
}
