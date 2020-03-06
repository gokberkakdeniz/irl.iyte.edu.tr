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
            <br/>
            <br/>
            <Button className="btn-join shadow-none">Kayıt Ol</Button>
            <Button className="btn-getinvite shadow-none">Davetiye İste</Button>
        </p>
    )
    
}

const countdownRenderer = ({ total, days, hours, minutes, seconds, completed }) => {
    if (completed) return (
            <p>Ve başladı!</p>
        )
    
    return (
        <p style={{textAlign: "right"}}>
            <span className="countdown-number">{days}</span>
            <span className="countdown-text">GÜN</span><br/>
            <span className="countdown-number">{hours}</span>
            <span className="countdown-text">SAAT</span><br/>
            <span className="countdown-number">{minutes}</span>
            <span className="countdown-text">DAKİKA</span><br/>
            <span className="countdown-number">{seconds}</span>
            <span className="countdown-text">SANİYE</span>
        </p>
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
                            <Col xl={{ offset: 2, order: 0, span: 3 }} xs={{ order: 1, span: 12 }}>
                                <Countdown date={new Date(2020, 10, 15)} renderer={countdownRenderer}></Countdown>
                                <FormButtons mobile={true}/>
                            </Col>
                            <Col xl={{ order: 1, span: 7 }} xs={{ order: 0, span: 12 }}>
                                <p>
                                    <span className="competetion-name">IZTECH RoboLeague'20</span>
                                    <br/>
                                    <span className="competetion-date">19-20 Ekim 2020</span>
                                    <br/>
                                    <span className="competetion-place">İzmir Yüksek Teknoloji Enstitüsü Kampüsü</span>
                                </p>
                                <FormButtons mobile={false}/>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}
