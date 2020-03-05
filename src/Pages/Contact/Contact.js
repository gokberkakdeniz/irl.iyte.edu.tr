import React from 'react'
import { Section } from './../../Components'
import Title from '../Title'
import { Row, Col, Card, Container, ListGroup, ListGroupItem } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Contact.css'

export default class Contact extends React.Component {
  render() {
    return (
      <>
        <Title pageName="İletişim"></Title>
        <Section
          title="İletişim"
        >
          <Container>
            <Row className="justify-content-md-center">
              {[0, 1, 2].map(() => {
                  return (
                    <Col align="center" className="contacts-col">
                      <Card className="people">
                        <Card.Img variant="top" src="https://via.placeholder.com/256" />
                        <Card.Body>
                          <Card.Title>Ali Veli</Card.Title>
                          <Card.Text>
                            Bir Şeyler Koordinatörü
                          </Card.Text>
                          <ListGroup className="list-group-flush">
                            <ListGroupItem>
                              <FontAwesomeIcon icon="phone" className="people-icon"/>
                              <a href="tel:905556667788">+90 555 666 77 88</a>
                            </ListGroupItem>
                            <ListGroupItem>
                              <FontAwesomeIcon icon="envelope" className="people-icon"/>
                              <a href="mail:aliveli@gmail.com">aliveli@gmail.com</a>
                            </ListGroupItem>
                          </ListGroup>
                        </Card.Body>
                      </Card>
                    </Col>
                  )
              })}
            </Row>
          </Container>
        </Section>
      </>
    )
  }
}