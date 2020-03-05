import React from 'react'
import './Section.css'
import Container from 'react-bootstrap/Container'

export default class Section extends React.Component {
  render() {
    let Title = <></>
    if (this.props.title) {
      Title = (
        <div className="section-title">
          <div style={{	borderLeftColor: this.props.accent || "steelblue" }}>
            <span>{this.props.title}</span>
          </div>
        </div>
      )
    }

    return (
      <Container id={this.props.id} className="section">
        {Title}
        <div className="section-content">
          {this.props.children}
        </div>
      </Container>
    )
  }
}