import React from 'react'
import './Footer.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Container fluid>
          <Row>
            <Col xs={{span: 12, order: 1}} md={{span: 8, order: 0}}>
              <iframe
                title="İYTE harita"
                src="https://maps.google.com/maps?q=izmir%20y%C3%BCksek%20teknoloji&t=&z=11&ie=UTF8&iwloc=&output=embed" 
                style={{border: "0", width: "100%", height: "100%"}}
                frameBorder="0"
              ></iframe>
            </Col>
            <Col xs={{span: 12, order: 0}} md={{span: 4, order: 1}} align="center">
              <p>
                <b>IEEE İYTE Öğrenci Topluluğu</b>
                  <br/>
                  İzmir Yüksek Teknoloji Enstitüsü
                  <br/>
                  Gülbahçe Kampüsü Urla, İzmir
              </p>
              <p>
                <a href="https://iyte.edu.tr" className="footer-link">
                  <FontAwesomeIcon icon="link" />
                  iyte.edu.tr
                </a>
                <br/>
                <a href="http://ieee.iyte.edu.tr" className="footer-link">
                  <FontAwesomeIcon icon="link"/>
                  ieee.iyte.edu.tr
                </a>                     
              </p>
              <p>
                <a href="https://www.facebook.com/IztechRoboleague"  className="footer-link">
                  <FontAwesomeIcon icon={["fab", "facebook-square"]}/>
                  IztechRoboleague
                </a>
                &nbsp;
                <a href="https://twitter.com/irlofficial" className="footer-link">
                  <FontAwesomeIcon icon={["fab", "twitter"]}/>
                  irlofficial
                </a>
                &nbsp;
                <a href="mailto:ieee@iyte.edu.tr" className="footer-link">
                  <FontAwesomeIcon icon="envelope"/>
                  ieee@iyte.edu.tr
                </a>
              </p>
              <img src="ieee.png" alt="IEEE IZTECH Branch" style={{maxWidth: "100%", maxHeight: "70px"}}/>
            </Col>
          </Row>
          <Row>
            <Col className="footer-copyright">
              <p>
                Copyright 2020, IRL. All rights are reserved. Coded with <span style={{color: "#e25555"}}>&lt;3</span> by Gökberk AKDENİZ.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>        
    )
  }
}