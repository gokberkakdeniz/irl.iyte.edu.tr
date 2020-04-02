import React from 'react'

import Countdown from 'react-countdown'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'


import './Masthead.css'

const FormButtons = ({ mobile }) => {
  return (
    <p className="d-block d-xl-none text-center">
      <Button className="btn-join shadow-none">Kayıt Ol</Button>
      <Button className="btn-getinvite shadow-none">Davetiye İste</Button>
    </p>
  )
}

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
              <Col xl={{ order: 0, span: 10 }} xs={{ order: 0, span: 12 }}>
                <p className="competetion">
                  <span className="competetion-name">IZTECH RoboLeague'20</span>
                  <br />
                  <span className="competetion-date">19-20 Ekim 2020</span>
                  <br />
                  <span className="competetion-place">İzmir Yüksek Teknoloji Enstitüsü Kampüsü</span>
                </p>
                <FormButtons />
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
