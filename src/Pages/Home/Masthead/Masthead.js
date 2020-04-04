import React from 'react'
import Countdown from 'react-countdown'
import { Container, Button, Row, Col, Jumbotron } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import './Masthead.css'

const countdownRenderer = ({ total, days, hours, minutes, seconds, completed }) => {
  if (completed) return <></>;

  return (
    <div className="countdown">
      <div className="countdown-box">
        <div className="countdown-number">
          {days}
        </div>
        <div className="countdown-text">
          GÜN
        </div>
      </div>

      <div className="countdown-box">
        <div className="countdown-number">
          {hours}
        </div>
        <div className="countdown-text">
          SAAT
        </div>
      </div>

      <div className="countdown-box">
        <div className="countdown-number">
          {minutes}
        </div>
        <div className="countdown-text">
          DAKİKA
        </div>
      </div>

      <div className="countdown-box">
        <div className="countdown-number">
          {seconds}
        </div>
        <div className="countdown-text">
          SANİYE
        </div>
      </div>
    </div>
  )

}

export default class Masthead extends React.Component {
  render() {
    return (
      <div id="top">
        <Jumbotron fluid id="masthead">
          <Container>
            <Row>
              <Col xl={2} xs={0}></Col> { /* to make centered */ }
              <Col xl={{ order: 0, span: 8 }} xs={{ order: 0, span: 12 }}>
                <p className="competetion">
                  <span className="competetion-name">IZTECH RoboLeague'20</span>
                  <span className="competetion-date">19-20 Ekim 2020</span>
                  <span className="competetion-place">İzmir Yüksek Teknoloji Enstitüsü Kampüsü</span>
                  <br/>
                  <LinkContainer to="/register">
                    <Button className="btn-join shadow-none">Kayıt Ol</Button>
                  </LinkContainer>
                  <LinkContainer to="/invitation">
                    <Button className="btn-getinvite shadow-none">Davetiye İste</Button>
                  </LinkContainer>
                </p>
              </Col>
              <Col xl={{ offset: 0, order: 0, span: 2 }} xs={{ order: 1, span: 12 }}>
                <Countdown date={new Date(2020, 10, 15)} renderer={countdownRenderer}></Countdown>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    )
  }
}
