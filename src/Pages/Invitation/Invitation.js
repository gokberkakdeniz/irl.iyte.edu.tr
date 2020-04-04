import React from 'react'
import { Section } from './../../Components'
import Title from '../Title'

export default class Invitation extends React.Component {
  render() {
    return (
      <>
        <Title pageName="Davetiye"></Title>
        <Section
          title="Davetiye"
        >
          <h5>Davetiye Kimler İçindir?</h5>
          
          <p>
            Katılım için davetiye zorunlu değildir.
          </p>

          <p>
            Davetiye bağlı bulunduğunuz kurum ya da birim 
            istediği taktirde okulumuzun SKS birimi tarafından
            sizin biriminize doğrudan gönderilecektir. 
            Bu nedenle vereceğiniz bilgiler önemlidir. 
            Yanlış verilen bilgilerden kaynaklı ulaşmayan
            belgelere ve kaybolan belgelere ait tüm 
            sorumluluklar size aittir.
          </p>

          <h5>Davetiye Formu</h5>

          <p>
            ...
          </p>
        </Section>
      </>
    )
  }
}