import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Map } from './../../Components'

import './Footer.css'

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Container >
          <Row>
            <Col align="center">
              <Map
                mode="place"
                title="İYTE harita"
                q="place_id:ChIJq6qqqvmQuxQRyQNl_qDBcO0"
                zoom="12"
                language="TR"
                style={{ border: "0", width: "100%", height: "256px" }}
                frameBorder="0"
                allowFullScreen
              ></Map>

              <br/>
              <br/>

              <p >
                <b id="student-club-name">IEEE İYTE Öğrenci Topluluğu</b>
                <span id="student-club-address">
                  <br/>
                  İzmir Yüksek Teknoloji Enstitüsü
                  <br/>
                  Gülbahçe Kampüsü, 35430, Urla/İzmir, Türkiye
                </span>
              </p>

              <p className="collapsable-container">
                <a href="https://iyte.edu.tr" className="footer-link collapsable">
                  <FontAwesomeIcon icon="link" />
                  İYTE
                </a>
                &nbsp;
                <a href="http://ieee.iyte.edu.tr" className="footer-link collapsable">
                  <FontAwesomeIcon icon="link"/>
                  İYTE IEEE
                </a>
                &nbsp;
                <a href="https://www.facebook.com/IztechRoboleague"  className="footer-link collapsable">
                  <FontAwesomeIcon icon={["fab", "facebook-square"]}/>
                  IztechRoboleague
                </a>
                &nbsp;
                <a href="https://twitter.com/irlofficial" className="footer-link collapsable">
                  <FontAwesomeIcon icon={["fab", "twitter"]}/>
                  irlofficial
                </a>
                &nbsp;
                <a href="mailto:ieee@iyte.edu.tr" className="footer-link collapsable">
                  <FontAwesomeIcon icon="envelope"/>
                  ieee@iyte.edu.tr
                </a>
              </p>

              <br/>
              <br/>

              <p>
                <a href="https://www.ieee.org/"><img alt="ieee logo" src="images/ieee.png" height="25px"></img></a>
                <b>&nbsp;&nbsp;|&nbsp;</b>
                <a href="https://iyte.edu.tr/"><img alt="ieee logo" src="images/iztech_white.png" height="50px"></img></a>
              </p>

              <div className="footer-bottom collapsable-container">
                <p className="footer-copyright collapsable">
                  Copyright © 2020, IZTECH RoboLeague. All rights are reserved. 
                </p>
                &nbsp;
                <p className="collapsable">
                  <span id="footer-coded"> &lt;\&gt;</span> with <span id="footer-love">&lt;3</span> by Gökberk AKDENİZ. { /* DO NOT DELETE ME :'( */ }
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>        
    )
  }
}