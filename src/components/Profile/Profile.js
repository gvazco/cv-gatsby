import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import profileImage from "../../images/avatar.jpg"
import Social from "./Social"
import "./Profile.scss"

const data = [
  {
    title: "Edad:",
    info: "27 años",
  },
  {
    title: "Dirección:",
    info: "Izcalli Chamapa, 53689, Naucalpan, EdoMéx.",
  },
  {
    title: "E-mail:",
    info: "gustavovazco@allsdigitla.net",
  },
  {
    title: "Teléfono:",
    info: "+52 (55) 8185-3675",
  },
]

export default function Profile() {
  return (
    <div className="profile">
      <div className="wallpaper"></div>
      <div className="dark" />
      <Container className="box">
        <Row className="info">
          <Col xs={12} md={4}>
            <Image src={profileImage} fluid />
          </Col>
          <Col xs={12} md={8} className="info__data">
            <span>¡Hola!</span>
            <p>Gustavo Vázco</p>
            <p>Fullstack developer</p>
            <hr />
            <div className="more-info">
              {data.map((item, index) => (
                <div key={index} className="item">
                  <p>{item.title}</p>
                  <p>{item.info}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <Social />
      </Container>
    </div>
  )
}
