import React from 'react'
import { Section } from './../../Components'
import Title from '../Title'
import { Accordion } from 'react-bootstrap'
import Contests from './Contests'

export default class Archive extends React.Component {
  render() {
    return (
      <>
        <Title pageName="Arşiv"></Title>
        <Section
          title="Arşiv"
        >
          <Accordion defaultActiveKey={Contests[0].name.substring(3)}>
            {Contests.map(Contest => <Contest key={Contest.name} />)}
          </Accordion>
        </Section>
      </>
    )
  }
}