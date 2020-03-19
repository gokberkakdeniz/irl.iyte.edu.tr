import React from 'react'
import { Section } from './../../Components'
import Title from '../Title'
import { Row, Container, Col } from 'react-bootstrap'
import PeopleCard from './PeopleCard'
import './Contact.css'



export default class Contact extends React.Component {
  render() {
    return (
      <>
        <Title pageName="İletişim"></Title>
        <Section
          title="İletişim"
        >
          <Container id="contacts">
            <Row className="justify-content-md-center">
              <Col xs={12} md={12} lg={4} align="center" className="contacts-col">
                <PeopleCard 
                  name="Yunus Vergili"
                  position="IRL'20 Genel Koordinatörü"
                  phone="+90 0541 862 7285"
                  email="yunusvergili96@gmail.com"
                />
              </Col>
              <Col xs={12} md={6} lg={4} align="center" className="contacts-col">
                <PeopleCard 
                  name="Utku Ercanlı"
                  position="IRL'20 Teknik Ekip Koordinatörü"
                  phone="+90 0536 278 4202"
                  email="utkuercanli16@hotmail.com"
                />
              </Col>
              <Col xs={12} md={6} lg={4} align="center" className="contacts-col">
                <PeopleCard 
                  name="Asuman Didar Bingöl"
                  position="IRL'20 Sponsorluk Koordinatörü"
                  phone="+90 0533 024 7484"
                  email="asumandidarbingol@gmail.com"
                />
              </Col>
            </Row>
          </Container>
        </Section>
      </>
    )
  }
}