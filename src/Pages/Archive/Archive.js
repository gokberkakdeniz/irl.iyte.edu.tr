import React from 'react'
import { Section } from './../../Components'
import Title from '../Title'
import { Accordion } from 'react-bootstrap'
import Contests from './Contests'

export default class Archive extends React.Component {
  render() {
    const defaultActiveKey = "irl" + (window.location.hash.substring(1, window.location.hash.length-2) || Contests.length);

    return (
      <>
        <Title pageName="Arşiv"></Title>
        <Section
          title="Arşiv"
        >
          <Accordion defaultActiveKey={defaultActiveKey}>
            { Contests.map((Contest, id) => <Contest key={ "Contest" + id } contestNo={ Contests.length - id } />) }
          </Accordion>
        </Section>
      </>
    )
  }
}