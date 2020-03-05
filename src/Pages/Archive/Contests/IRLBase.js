import React from 'react'
import { Accordion, Card } from 'react-bootstrap'

export default class IRLBase extends React.Component {
  render() {
    return (
      <>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey={this.props.year} style={{ cursor: "pointer" }}>
            IRL'{this.props.year.substring(2)}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={this.props.year}>
            <Card.Body>
              {this.props.children}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </>
    )
  }
}