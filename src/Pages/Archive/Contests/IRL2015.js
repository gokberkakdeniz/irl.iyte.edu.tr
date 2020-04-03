import React from 'react'
import IRLBase from './IRLBase'
import { Container, Col, Row, Image } from 'react-bootstrap'

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

        <b>Tasarla-Yap-Yarıştır</b>
        <ol>
          <li>İTÜ – ARIGE</li>
          <li>SAKARYA ÜNİVERSİTESİ</li>
          <li>Yıldız Teknik Üniversitesi – YTUROK</li>
        </ol>

        <b>Serbest Kategori</b>
        <ol>
          <li>Engelsiz Yaşam – Işıklar Askeri Hava Lisesi</li>
          <li>Bal Porsuğu</li>
          <li>Deaf and Mute</li>
        </ol>

        <b>Çizgi İzleyen</b>
        <ol>
          <li>Kültür_Line_4 - Özel Bursa Kültür Okulları</li>
          <li>Mi Manci – Karabük IEEE</li>
          <li>Yoda</li>
        </ol>

        <b>Mini Sumo</b>
        <ol>
          <li>Kartal</li>
          <li>KTO Aladağ</li>
          <li>KTO Gaflet</li>
        </ol>

        <b>Çoklu Mini Sumo</b>
        <ol>
          <li>Prematüre</li>
          <li>Çoklu Robot</li>
          <li>Börtecine Karatay (İki tane Ücüncümüz vardır.)</li>
        </ol>

        <b>Sumo</b>
        <ol>
          <li>Senju</li>
          <li>İtachi</li>
          <li>Aragon</li>
        </ol>

        <b>Arazi</b>
        <ol>
          <li>Börtecine</li>
          <li>Kamyoncu</li>
          <li>SUV4H</li>
        </ol>

        <b>Yangın Söndüren</b>
        <ol>
          <li>Lee-Fire</li>
          <li>Tulumbacı</li>
          <li>Ayasor</li>
        </ol>

        <b>Çöp Toplayan</b>
        <ol>
          <li>Çöp Yiyen Arı</li>
          <li>Çöperek Arısı</li>
        </ol>

        <br/>

        <Container>
          <Row>
            <Col xs={12} md={6} lg={4}>
              <Image src="images/archive/2015/1.jpg" style={{ width: "100%", marginBottom: "30px" }}/>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Image src="images/archive/2015/2.jpg" style={{ width: "100%", marginBottom: "30px" }}/>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Image src="images/archive/2015/3.jpg" style={{ width: "100%", marginBottom: "30px" }}/>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Image src="images/archive/2015/4.jpg" style={{ width: "100%", marginBottom: "30px" }}/>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Image src="images/archive/2015/5.jpg" style={{ width: "100%", marginBottom: "30px" }}/>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Image src="images/archive/2015/6.jpg" style={{ width: "100%", marginBottom: "30px" }}/>
            </Col>
          </Row>
        </Container>
       </IRLBase>
      </>
    )
  }
}