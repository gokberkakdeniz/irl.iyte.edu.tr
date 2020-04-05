import React from 'react'
import { Section } from './../../Components'
import Title from '../Title'

export default class Registration extends React.Component {
  render() {
    return (
      <>
        <Title pageName="Kayıt"></Title>
        <Section
          title="Klasik Kategori Ön Kayıt Formu"
        >
          <p>
            ...
          </p>
        </Section>
        <Section
          title="Robothon Ön Kayıt Formu"
        >
          <p>
            ...
          </p>
        </Section>
      </>
    )
  }
}