import React from 'react'
import IRLBase from './IRLBase'
import { Container, Col, Row, Image } from 'react-bootstrap'

export default class IRL2019 extends React.Component {
  render() {
    return (
      <IRLBase year="2019" {...this.props}>
        <p>
          Yazılı değil, yazılması lazım.
        </p>

        <Container>
          <Row>
            <Col xs={12} md={6} lg={3}>
              <Image src="images/archive/2019/1.jpg" style={{ width: "100%", marginBottom: "30px" }}/>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Image src="images/archive/2019/2.jpg" style={{ width: "100%", marginBottom: "30px" }}/>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Image src="images/archive/2019/3.jpg" style={{ width: "100%", marginBottom: "30px" }}/>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Image src="images/archive/2019/4.jpg" style={{ width: "100%", marginBottom: "30px" }}/>
            </Col>
          </Row>
        </Container>
      </IRLBase>
    )
  }
}