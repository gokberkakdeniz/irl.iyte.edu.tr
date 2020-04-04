import React from 'react'
import { Section } from './../../Components'
import Title from '../Title'

import './Categories.css'



export default class Contact extends React.Component {
  render() {
    return (
      <>
        <Title pageName="Kategoriler"></Title>
        <Section
          title="Kategoriler"
        >
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Officiis reiciendis quae quo autem, iure minus dolor repellendus
             sequi. Aut nostrum eum dignissimos veritatis rem ipsa voluptas 
             aspernatur repellendus porro maxime!
          </p>
        </Section>
      </>
    )
  }
}