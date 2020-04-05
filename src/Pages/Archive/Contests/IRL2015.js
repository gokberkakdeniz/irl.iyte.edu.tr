import React from 'react'
import IRLBase from './IRLBase'
import { Container, Col, Row, Image, ListGroup } from 'react-bootstrap'

export default class IRL2015 extends React.Component {
  render() {
    return (
      <>
        <IRLBase year="2015" {...this.props}>
          <p>
            IZTECH RoboLeague 2015, Türkiye’nin dört bir yanından sayıları 1000’in üzerinde her yaştan
            robot meraklılarının katılımıyla 24-25 Ekim 2015 tarihlerinde İYTE Kampüsü’nde (Makine Müh.
            ve Kütüphane gösteri merkezinde) gerçekleşmiştir. 250’yi aşkın robot, 300’ü aşan yarışmacı
            sayısı ve toplamda 1000’den fazla kişiye ev sahipliği yapmış, Türkiye'nin dört bir yanından
            katılımcıların olduğu bir organizasyondur. Üç ana kategoriden oluşan IZTECH RoboLeague’e
            internet üzerinden yüzlerce robot sever kayıt yapmıştır. Farklı kategorilerde ve workshoplarla
            birlikte toplamda 26 ödül sahiplerini buldu.
        </p>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Tasarla-Yap-Yarıştır</ListGroup.Item>
            <ListGroup.Item as="li">İTÜ – ARIGE</ListGroup.Item>
            <ListGroup.Item as="li">SAKARYA ÜNİVERSİTESİ</ListGroup.Item>
            <ListGroup.Item as="li">Yıldız Teknik Üniversitesi – YTUROK</ListGroup.Item>
          </ListGroup>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Serbest Kategori</ListGroup.Item>
            <ListGroup.Item as="li">Engelsiz Yaşam – Işıklar Askeri Hava Lisesi</ListGroup.Item>
            <ListGroup.Item as="li">Bal Porsuğu</ListGroup.Item>
            <ListGroup.Item as="li">Deaf and Mute</ListGroup.Item>
          </ListGroup>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Çizgi İzleyen</ListGroup.Item>
            <ListGroup.Item as="li">Kültür_Line_4 - Özel Bursa Kültür Okulları</ListGroup.Item>
            <ListGroup.Item as="li">Mi Manci – Karabük IEEE</ListGroup.Item>
            <ListGroup.Item as="li">Yoda</ListGroup.Item>
          </ListGroup>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Mini Sumo</ListGroup.Item>
            <ListGroup.Item as="li">Kartal</ListGroup.Item>
            <ListGroup.Item as="li">KTO Aladağ</ListGroup.Item>
            <ListGroup.Item as="li">KTO Gaflet</ListGroup.Item>
          </ListGroup>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Çoklu Mini Sumo</ListGroup.Item>
            <ListGroup.Item as="li">Prematüre</ListGroup.Item>
            <ListGroup.Item as="li">Çoklu Robot</ListGroup.Item>
            <ListGroup.Item as="li">Börtecine Karatay (İki tane Ücüncümüz vardır.)</ListGroup.Item>
          </ListGroup>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Sumo</ListGroup.Item>
            <ListGroup.Item as="li">Senju</ListGroup.Item>
            <ListGroup.Item as="li">İtachi</ListGroup.Item>
            <ListGroup.Item as="li">Aragon</ListGroup.Item>
          </ListGroup>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Arazi</ListGroup.Item>
            <ListGroup.Item as="li">Börtecine</ListGroup.Item>
            <ListGroup.Item as="li">Kamyoncu</ListGroup.Item>
            <ListGroup.Item as="li">SUV4H</ListGroup.Item>
          </ListGroup>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Yangın Söndüren</ListGroup.Item>
            <ListGroup.Item as="li">Lee-Fire</ListGroup.Item>
            <ListGroup.Item as="li">Tulumbacı</ListGroup.Item>
            <ListGroup.Item as="li">Ayasor</ListGroup.Item>
          </ListGroup>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Çöp Toplayan</ListGroup.Item>
            <ListGroup.Item as="li">Çöp Yiyen Arı</ListGroup.Item>
            <ListGroup.Item as="li">Çöperek Arısı</ListGroup.Item>
          </ListGroup>

          <br />

          <Container>
            <Row>
              <Col xs={12} md={6} lg={4}>
                <Image src="images/archive/2015/1.jpg" style={{ width: "100%", marginBottom: "30px" }} />
              </Col>
              <Col xs={12} md={6} lg={4}>
                <Image src="images/archive/2015/2.jpg" style={{ width: "100%", marginBottom: "30px" }} />
              </Col>
              <Col xs={12} md={6} lg={4}>
                <Image src="images/archive/2015/3.jpg" style={{ width: "100%", marginBottom: "30px" }} />
              </Col>
              <Col xs={12} md={6} lg={4}>
                <Image src="images/archive/2015/4.jpg" style={{ width: "100%", marginBottom: "30px" }} />
              </Col>
              <Col xs={12} md={6} lg={4}>
                <Image src="images/archive/2015/5.jpg" style={{ width: "100%", marginBottom: "30px" }} />
              </Col>
              <Col xs={12} md={6} lg={4}>
                <Image src="images/archive/2015/6.jpg" style={{ width: "100%", marginBottom: "30px" }} />
              </Col>
            </Row>
          </Container>
        </IRLBase>
      </>
    )
  }
}