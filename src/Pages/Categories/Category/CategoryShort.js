import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'

import './CategoryShort.css'

export default function CategoryShortBase(props) {
  return (
    <Container className="category">
      <Row>
        <Col className="category-left align-self-center" xs={2}>
          <Image className="category-image" fluid src={props.logo} />
          <h5 className="category-name">{props.name}</h5>
        </Col>
        <Col className="category-right">
          <p className="category-short-text">
            {props.children}
          </p>
          <Button className="category-read-more" variant="outline-secondary" size="sm">Daha fazla bilgi almak için</Button>
        </Col>
      </Row>
    </Container>
  );
}