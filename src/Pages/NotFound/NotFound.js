import React from 'react'
import { Section } from './../../Components'
import Title from '../Title'

import './NotFound.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class NotFound extends React.Component {
  render() {
    return (
      <>
        <Title pageName="Sayfa Bulunamadı"></Title>
        <Section id="notfound">
          <FontAwesomeIcon icon="sad-tear" size="6x" />
          <br/>
          <h1>Aradığınız sayfa bulunamadı.</h1>
          <h6>Görünüşe göre robotlarımızdan biri onu yemiş...</h6>
          <br/>
          <FontAwesomeIcon icon="robot" size="lg" />

        </Section>
      </>
    )
  }
}