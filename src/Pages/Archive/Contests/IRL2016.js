import React from 'react'
import IRLBase from './IRLBase'
import { Container, Col, Row, Image, ListGroup } from 'react-bootstrap'

export default class IRL2016 extends React.Component {
  render() {
    return (
      <>
        <IRLBase year="2016" {...this.props}>
          <p>
            IZTECH Roboleague, her sene olduğu gibi 22-23 Ekim 2016 tarihlerinde de İYTE Kampüsü'nde
            her yaştan robot meraklılarının robotlarını yarıştırmalarına olanak sağladı. Mini Sumo,
            Çoklu Mini Sumo, Serbest, Çizgi İzleyen, Arazi, Tasarla-Yap-Yarıştır kategorilerine ek
            olarak "Çizgi Labirent" kategorisi 2016 yılında ilk kez düzenlendi. IEEE İYTE Öğrenci
            Kolu olarak, farklı kategorilerden robotların yarışmasıyla gerçekleşen 2 günün sonunda
            toplamda 17 ödül kazananlarına ulaştırıldı.
        </p>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Tasarla-Yap-Yarıştır</ListGroup.Item>
            <ListGroup.Item as="li">Süleyman Demirel Üniversitesi</ListGroup.Item>
            <ListGroup.Item as="li">İTÜ</ListGroup.Item>
            <ListGroup.Item as="li">Dokuz Eylül Üniversitesi</ListGroup.Item>
          </ListGroup>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Serbest Kategori</ListGroup.Item>
            <ListGroup.Item as="li">Cyanlog</ListGroup.Item>
            <ListGroup.Item as="li">CATROVER</ListGroup.Item>
            <ListGroup.Item as="li">Dokuz Eylül Üniversitesi</ListGroup.Item>
          </ListGroup>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Çizgi İzleyen</ListGroup.Item>
            <ListGroup.Item as="li">Özel Bursa Kültür Okulları Robotix Team</ListGroup.Item>
            <ListGroup.Item as="li">Özel Bursa Kültür Okulları Robotix Team</ListGroup.Item>
            <ListGroup.Item as="li">Dumlupınar Üniversitesi Robot Topluluğu</ListGroup.Item>
          </ListGroup>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Çoklu Mini Sumo</ListGroup.Item>
            <ListGroup.Item as="li">Robokale</ListGroup.Item>
          </ListGroup>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Mini Sumo</ListGroup.Item>
            <ListGroup.Item as="li">Doğacan - Çanakkale Doğa Okulları</ListGroup.Item>
            <ListGroup.Item as="li">Snake 1 - OCTOPUS</ListGroup.Item>
            <ListGroup.Item as="li">Doğacan 4 - Çanakkale Doğa Okulları</ListGroup.Item>
          </ListGroup>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Arazi</ListGroup.Item>
            <ListGroup.Item as="li">İzmir Atatürk Lisesi EKibi</ListGroup.Item>
            <ListGroup.Item as="li">Arıege</ListGroup.Item>
            <ListGroup.Item as="li">OCTOPUS</ListGroup.Item>
          </ListGroup>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Çizgi Labirent</ListGroup.Item>
            <ListGroup.Item as="li">MR. President - ODTÜ RAS</ListGroup.Item>
          </ListGroup>

          <br />

          <Container>
            <Row>
              <Col xs={12} md={6} lg={6}>
                <Image src="images/archive/2016/1.jpg" style={{ width: "100%", marginBottom: "30px" }} />
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Image src="images/archive/2016/2.jpg" style={{ width: "100%", marginBottom: "30px" }} />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6} lg={6}>
                <Image src="images/archive/2016/3.jpg" style={{ width: "100%", marginBottom: "30px" }} />
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Image src="images/archive/2016/4.jpg" style={{ width: "100%", marginBottom: "30px" }} />
              </Col>
            </Row>
          </Container>
        </IRLBase>
      </>
    )
  }
}