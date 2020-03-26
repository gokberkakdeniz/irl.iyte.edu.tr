import React from 'react'

import Countdown from 'react-countdown'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'


import './Masthead.css'

const FormButtons = ({ mobile }) => {
  if (mobile) return (
    <p className="d-block d-xl-none text-center">
      <Button className="btn-join shadow-none">Kayıt Ol</Button>
      <Button className="btn-getinvite shadow-none">Davetiye İste</Button>
    </p>
  )

  return (
    <p className="d-none d-xl-block">
      <br />
      <br />
      <Button className="btn-join shadow-none">Kayıt Ol</Button>
      <Button className="btn-getinvite shadow-none">Davetiye İste</Button>
    </p>
  )

}

const countdownRenderer = ({ total, days, hours, minutes, seconds, completed }) => {
  if (completed) return <></>;

  return (
    // <div style={{textAlign: "left"}}>
    // <span className="countdown-number">{days}</span>
    // <span className="countdown-text">GÜN</span>
    // <span className="countdown-number">{hours}</span>
    // <span className="countdown-text">SAAT</span>
    // <span className="countdown-number">{minutes}</span>
    // <span className="countdown-text">DAKİKA</span>
    // <span className="countdown-number">{seconds}</span>
    // <span className="countdown-text">SANİYE</span>
    // </div>
    <table>
      <tbody>
        <tr className="countdown-number">
          <td>{days}</td>
        </tr>
        <tr className="countdown-text">
          <td>GÜN</td>
        </tr>

        <tr className="countdown-spacer" />

        <tr className="countdown-number">
          <td>{hours}</td>
        </tr>
        <tr className="countdown-text">
          <td>SAAT</td>
        </tr>

        <tr className="countdown-spacer" />

        <tr className="countdown-number">
          <td>{minutes}</td>
        </tr>
        <tr className="countdown-text">
          <td>DAKİKA</td>
        </tr>

        <tr className="countdown-spacer" />

        <tr className="countdown-number">
          <td>{seconds}</td>
        </tr>
        <tr className="countdown-text">
          <td>SANİYE</td>
        </tr>
      </tbody>
    </table>
    // <>
    //     <div className="countdown number">
    //         {days}
    //     </div>
    //     <div className="countdown text">
    //         gün
    //     </div>
    // </>
  )

}

export default class Masthead extends React.Component {
  render() {
    return (
      <div id="Top">
        <Jumbotron fluid id="Masthead">
          <Container>
            <Row>
              <Col xl={{ offset: 0, order: 0, span: 1 }} xs={{ order: 1, span: 12 }}>
                <Countdown date={new Date(2020, 10, 15)} renderer={countdownRenderer}></Countdown>
                <FormButtons mobile={true} />
              </Col>
              <Col xl={{ order: 1, span: 11 }} xs={{ order: 0, span: 12 }}>
                <p style={{ marginTop: "80px"}}>
                  <span className="competetion-name">IZTECH RoboLeague'20</span>
                  <br />
                  <span className="competetion-date">19-20 Ekim 2020</span>
                  <br />
                  <span className="competetion-place">İzmir Yüksek Teknoloji Enstitüsü Kampüsü</span>
                </p>
                <FormButtons mobile={false} />
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    )
  }
}
