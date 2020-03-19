import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function(props) {
  return (
    <Card className="people">
      {
        props.image
          ? <Card.Img variant="top" src={ props.image } />
          : <></>
      }
      <Card.Body>
        <Card.Title>{ props.name || "Name Surname" }</Card.Title>
        { 
          props.position 
            ? <Card.Text> 
              { props.position }
              </Card.Text> 
            : <></> 
        }
        {
          (props.phone || props.email) 
            ? <ListGroup className="list-group-flush people-list">
                {
                  props.phone 
                    ? <ListGroupItem>
                        <FontAwesomeIcon icon="phone" className="people-icon"/>
                        <br/>
                        <a href={ `tel:${props.phone.replace(/ /g, "")}` }>{ props.phone }</a>
                      </ListGroupItem>
                    : <></>
                }
                {
                  props.email 
                    ? <ListGroupItem>
                        <FontAwesomeIcon icon="envelope" className="people-icon"/>
                        <br/>
                        <a href={ `mail:${props.email}` }>{ props.email }</a>
                      </ListGroupItem>
                    : <></>
                }
              </ListGroup>
            : <></>                      
        }
      </Card.Body>
    </Card>
  )
}