import React from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import LayoutBasic from "../layouts/LayoutBasic"
import "./projects.scss"

export default function Projects() {
  return (
    <LayoutBasic menuColor="#000">
      <Container className="projects">
        <h1>Proyectos</h1>
        <Row>
          <Col xs={12} sm={4} className="project">
            <Card>
              <div className="image" />
              <Card.Body>
                <Card.Title>Google</Card.Title>
                <Card.Text>
                  Commodo ad occaecat aute do id excepteur cupidatat duis irure.
                  Mollit ea sunt est officia culpa sint.
                </Card.Text>
                <a href="#" target="_blank">
                  <Button variant="primary">Ver Proyecto</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </LayoutBasic>
  )
}
