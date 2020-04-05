import React from 'react'
import IRLBase from './IRLBase'
import { Container, Col, Row, Image, ListGroup } from 'react-bootstrap'

export default class IRL2014 extends React.Component {
  render() {
    return (
      <>
        <IRLBase year="2014" {...this.props}>
          <p>
            İzmir Yüksek Teknoloji Enstitüsünde (İYTE) üçüncüsü düzenlenen “IZTECH Roboleague’14”
            robot Yarışması, Türkiye’nin dört bir yanından gelen robot meraklılarını İzmir’de
            buluşturdu. 25-26 Ekim 2014 tarihlerinde Makine Mühendisliği Bölümünde yapılan
            yarışmalarda “Klasik robot yarışları ve Tasarla-Yap- Yarıştır” olmak üzere iki ana
            kategoride robot yarışları gerçekleştirildi.
          </p>

          <p>
            IEEE İYTE Öğrenci Kolu tarafından
            düzenlenen 3. IZTECH RoboLeague yarışmasında dereceye girenler açıklanarak ödülleri
            verildi. Bu kategorilerden en ilgi çekeni Türkiye ve dünyada bir ilk olan “24 saatte
            Tasarla-Yap- Yarıştır" sloganlı yarışma oldu. Yenilikler, yaratıcı fikirler ve
            rekabetlerle dolu bu etkinlikte derece kazanan isimler ise şu şekilde sıralanıyor:
          </p>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Yangın söndüren</ListGroup.Item>
            <ListGroup.Item as="li">Eray Aktokluk (TED İstanbul Koleji) – Şimşek isimli robotu ile</ListGroup.Item>
            <ListGroup.Item as="li">Emre Aslan (Ege Üniversitesi) – Tulumbacı isimli robotu ile</ListGroup.Item>
            <ListGroup.Item as="li">Eray Aktokluk (TED İstanbul Koleji) – Fast isimli robotu ile</ListGroup.Item>
          </ListGroup>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Çizgi izleyen</ListGroup.Item>
            <ListGroup.Item as="li">Robiz Robot Takımı (Ege Üniversitesi) – Robiz-1 isimli robotu ile</ListGroup.Item>
            <ListGroup.Item as="li">Ferdi Alakuş (Süleyman Demirel Üniversitesi) – SDÜ Çizgi isimli robotu ile</ListGroup.Item>
            <ListGroup.Item as="li">Robiz Robot Takımı (Ege Üniversitesi) – Robiz-2 isimli robotu ile</ListGroup.Item>
          </ListGroup>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Çöp Toplayan</ListGroup.Item>
            <ListGroup.Item as="li">Eray Aktokluk (TED İstanbul Koleji) – Wall-E isimli robotu ile</ListGroup.Item>
            <ListGroup.Item as="li">Ümit Yelken (İstanbul Teknik Üniversitesi) – Çöpüşen Arı isimli robotu ile</ListGroup.Item>
          </ListGroup>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Mini sumo</ListGroup.Item>
            <ListGroup.Item as="li">Ömer Yıldırım (Adil Karaağaç Teknik ve Endüstri Meslek Lisesi) – Şehzade Sultan isimli robotu ile</ListGroup.Item>
            <ListGroup.Item as="li">Talha Asma (Adil Karaağaç Teknik ve Endüstri Meslek Lisesi) – Şehzade Elbrus isimli robotu ile</ListGroup.Item>
            <ListGroup.Item as="li">Galip Çelik (Adil Karaağaç Teknik ve Endüstri Meslek Lisesi) – Şehzade Yıldırım isimli robotu ile</ListGroup.Item>
          </ListGroup>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Çoklu Mini Sumo</ListGroup.Item>
            <ListGroup.Item as="li">Sinan Yiğin (Akdeniz Üniversitesi) – MSC1 isimli robotu ile</ListGroup.Item>
            <ListGroup.Item as="li">Rasim Aydın (Bornova Mazhar Zorlu Teknik ve Endüstri Meslek Lisesi) – MZRoboteam isimli robotu ile</ListGroup.Item>
            <ListGroup.Item as="li">Yavuz Büyükkoçak (Sakarya Üniversitesi) – Hipotenüs Lab. isimli robotu ile</ListGroup.Item>
          </ListGroup>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Sumo</ListGroup.Item>
            <ListGroup.Item as="li">Emre Tarhana (High Tech takımı) (Marmara Üniversitesi) – Senju isimli robotu ile</ListGroup.Item>
            <ListGroup.Item as="li">Emre Tarhana (High Tech takımı) (Marmara Üniversitesi) – Ashura isimli robotu ile</ListGroup.Item>
            <ListGroup.Item as="li">Mustafa Öztürk (Çanakkale Onsekiz Mart Üniversitesi) – Patron isimli robotu ile</ListGroup.Item>
          </ListGroup>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Arazi</ListGroup.Item>
            <ListGroup.Item as="li">Mustafa Mehmet (Marmara Üniversitesi) – 61fırtına61 isimli robotu ile</ListGroup.Item>
            <ListGroup.Item as="li">Caner Topoğlu (Marmara Üniversitesi) –Catastrophic isimli robotu ile</ListGroup.Item>
            <ListGroup.Item as="li">Selahattin Alpcan (Celal Bayar Üniversitesi) – Rahmi Kula_robomarket isimli robotu ile</ListGroup.Item>
          </ListGroup>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Tasarla – Yap – Yarıştır Kategorisi</ListGroup.Item>
            <ListGroup.Item as="li">Süleyman Demirel Üniversitesi</ListGroup.Item>
            <ListGroup.Item as="li">Ankara Üniversitesi</ListGroup.Item>
            <ListGroup.Item as="li">Özyeğin Üniversitesi IEEE Topluluğu</ListGroup.Item>
          </ListGroup>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Serbest Kategorisi</ListGroup.Item>
            <ListGroup.Item as="li">Kinect isimli Robotu ile Bahçeşehir Üniversitesi Mekatronik Mühendisliği</ListGroup.Item>
            <ListGroup.Item as="li">Atlas isimli robotu ile Hava Harp Okulu</ListGroup.Item>
            <ListGroup.Item as="li">Hexotor isimli robotu ile Koç Üniversitesi IEEE Öğrenci Kolu</ListGroup.Item>
          </ListGroup>

          <br />

          <Container>
            <Row>
              <Col xs={12} md={6} lg={3}>
                <Image src="images/archive/2014/1.jpg" style={{ width: "100%", marginBottom: "30px" }} />
              </Col>
              <Col xs={12} md={6} lg={3}>
                <Image src="images/archive/2014/2.jpg" style={{ width: "100%", marginBottom: "30px" }} />
              </Col>
              <Col xs={12} md={6} lg={3}>
                <Image src="images/archive/2014/3.jpg" style={{ width: "100%", marginBottom: "30px" }} />
              </Col>
              <Col xs={12} md={6} lg={3}>
                <Image src="images/archive/2014/4.jpg" style={{ width: "100%", marginBottom: "30px" }} />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6} lg={3}>
                <Image src="images/archive/2014/5.jpg" style={{ width: "100%", marginBottom: "30px" }} />
              </Col>
              <Col xs={12} md={6} lg={3}>
                <Image src="images/archive/2014/6.jpg" style={{ width: "100%", marginBottom: "30px" }} />
              </Col>
              <Col xs={12} md={6} lg={3}>
                <Image src="images/archive/2014/7.jpg" style={{ width: "100%", marginBottom: "30px" }} />
              </Col>
              <Col xs={12} md={6} lg={3}>
                <Image src="images/archive/2014/8.jpg" style={{ width: "100%", marginBottom: "30px" }} />
              </Col>
            </Row>
          </Container>
        </IRLBase>
      </>
    )
  }
}