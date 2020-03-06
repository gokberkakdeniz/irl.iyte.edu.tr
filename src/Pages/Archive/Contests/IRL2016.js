import React from 'react'
import IRLBase from './IRLBase'
import { Container, Col, Row, Image } from 'react-bootstrap'

export default class IRL2016 extends React.Component {
  render() {
    return (
      <>
       <IRLBase year="2016">
        <p>
          IZTECH Roboleague, her sene olduğu gibi 22-23 Ekim 2016 tarihlerinde de İYTE Kampüsü'nde 
          her yaştan robot meraklılarının robotlarını yarıştırmalarına olanak sağladı. Mini Sumo, 
          Çoklu Mini Sumo, Serbest, Çizgi İzleyen, Arazi, Tasarla-Yap-Yarıştır kategorilerine ek 
          olarak "Çizgi Labirent" kategorisi 2016 yılında ilk kez düzenlendi. IEEE İYTE Öğrenci 
          Kolu olarak, farklı kategorilerden robotların yarışmasıyla gerçekleşen 2 günün sonunda 
          toplamda 17 ödül kazananlarına ulaştırıldı. 
        </p>

        <b>Tasarla-Yap-Yarıştır</b>
        <ol>
          <li>Süleyman Demirel Üniversitesi</li>
          <li>İTÜ</li>
          <li>Dokuz Eylül Üniversitesi</li>
        </ol>

        <b>Serbest Kategori</b>
        <ol>
          <li>Cyanlog</li>
          <li>CATROVER</li>
          <li>Dokuz Eylül Üniversitesi</li>
        </ol>

        <b>Çizgi İzleyen</b>
        <ol>
          <li>Özel Bursa Kültür Okulları Robotix Team</li>
          <li>Özel Bursa Kültür Okulları Robotix Team</li>
          <li>Dumlupınar Üniversitesi Robot Topluluğu</li>
        </ol>

        <b>Çoklu Mini Sumo</b>
        <ol>
          <li>Robokale</li>
        </ol>

        <b>Mini Sumo</b>
        <ol>
          <li>Doğacan - Çanakkale Doğa Okulları</li>
          <li>Snake 1 - OCTOPUS</li>
          <li>Doğacan 4 - Çanakkale Doğa Okulları</li>
        </ol>

        <b>Arazi</b>
        <ol>
          <li>İzmir Atatürk Lisesi EKibi</li>
          <li>Arıege</li>
          <li>OCTOPUS</li>
        </ol>

        <b>Çizgi Labirent</b>
        <ol>
          <li>MR. President - ODTÜ RAS</li>
        </ol>

        <br/>

        <Container>
          <Row>
            <Col xs={12} md={6} lg={6}>
              <Image src="images/archive/2016/1.jpg" style={{ width: "100%", marginBottom: "30px" }}/>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <Image src="images/archive/2016/2.jpg" style={{ width: "100%", marginBottom: "30px" }}/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} lg={6}>
              <Image src="images/archive/2016/3.jpg" style={{ width: "100%", marginBottom: "30px" }}/>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <Image src="images/archive/2016/4.jpg" style={{ width: "100%", marginBottom: "30px" }}/>
            </Col>
          </Row>
        </Container>
       </IRLBase>
      </>
    )
  }
}