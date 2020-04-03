import React from 'react'
import IRLBase from './IRLBase'
import { Container, Col, Row, Image } from 'react-bootstrap'

export default class IRL2018 extends React.Component {
  render() {
    return (
      <>
       <IRLBase year="2018" {...this.props}>
        <p>
          IZTECH RoboLeague'18, Türkiye’nin dört bir yanından sayıları 1000’in üzerinde her yaştan 
          robot meraklılarının katılımıyla 20-21 Ekim 2018 tarihlerinde İYTE Kampüsü’nde (Makine 
          Mühendisliği binası, İYTE İnovasyon Merkezi ve Kütüphane gösteri merkezinde) gerçekleşmiştir.
        </p>

        <p>
          Klasik kategori altında mini sumo, çizgi izleyen, arazi, çizgi labirent, futro 
          kategorileri; tasarla-yap-yarıştır kategorisi ve serbest kategoriden toplamda 400'e 
          yakın robot yarışmıştır. 
        </p>
        
        <Container>
          <Row>
            <Col xs={12} md={4} lg={4}>
              <Image src="images/archive/2018/1.jpg" style={{ width: "100%", marginBottom: "30px" }}/>
            </Col>
            <Col xs={12} md={4} lg={4}>
              <Image src="images/archive/2018/2.jpg" style={{ width: "100%", marginBottom: "30px" }}/>
            </Col>
            <Col xs={12} md={4} lg={4}>
              <Image src="images/archive/2018/3.jpg" style={{ width: "100%", marginBottom: "30px" }}/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4} lg={4}>
              <Image src="images/archive/2018/4.jpg" style={{ width: "100%", marginBottom: "30px" }}/>
            </Col>
            <Col xs={12} md={4} lg={4}>
              <Image src="images/archive/2018/5.jpg" style={{ width: "100%", marginBottom: "30px" }}/>
            </Col>
            <Col xs={12} md={4} lg={4}>
              <Image src="images/archive/2018/6.jpg" style={{ width: "100%", marginBottom: "30px" }}/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4} lg={4}>
              <Image src="images/archive/2018/7.jpg" style={{ width: "100%", marginBottom: "30px" }}/>
            </Col>
            <Col xs={12} md={4} lg={4}>
              <Image src="images/archive/2018/8.jpg" style={{ width: "100%", marginBottom: "30px" }}/>
            </Col>
            <Col xs={12} md={4} lg={4}>
              <Image src="images/archive/2018/9.jpg" style={{ width: "100%", marginBottom: "30px" }}/>
            </Col>
          </Row>
        </Container>

       </IRLBase>
      </>
    )
  }
}