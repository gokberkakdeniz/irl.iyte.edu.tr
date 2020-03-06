import React from 'react'
import { Section } from './../../../Components'
import { Badge } from 'react-bootstrap'

export default class Announcements extends React.Component {
  render() {
    return (
      <Section
        title="Haberler ve Duyurular"
        accent="tomato"
      >
        <h3>
          irl.iyte.edu.tr v0.2 <Badge variant="secondary">06.04.2020</Badge>
        </h3>

        <p>
          github: <a href="https://github.com/ieeeiztech/irl.iyte.edu.tr" className="href">https://github.com/ieeeiztech/irl.iyte.edu.tr</a>
        </p>        
      </Section>
    )
  }
}