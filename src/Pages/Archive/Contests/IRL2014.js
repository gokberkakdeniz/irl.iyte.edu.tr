import React from 'react'
import IRLBase from './IRLBase'
import { Container, Col, Row, Image } from 'react-bootstrap'

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
          kategoride robot yarışları gerçekleştirildi. IEEE İYTE Öğrenci Kolu tarafından 
          düzenlenen 3. IZTECH RoboLeague yarışmasında dereceye girenler açıklanarak ödülleri 
          verildi. Bu kategorilerden en ilgi çekeni Türkiye ve dünyada bir ilk olan “24 saatte 
          Tasarla-Yap- Yarıştır" sloganlı yarışma oldu. Yenilikler, yaratıcı fikirler ve 
          rekabetlerle dolu bu etkinlikte derece kazanan isimler ise şu şekilde sıralanıyor:
        </p>

        <b>Yangın söndüren</b>
        <ol>
          <li>Eray Aktokluk (TED İstanbul Koleji) – Şimşek isimli robotu ile</li>
          <li>Emre Aslan (Ege Üniversitesi) – Tulumbacı isimli robotu ile</li>
          <li>Eray Aktokluk (TED İstanbul Koleji) – Fast isimli robotu ile</li>
        </ol>

        <b>Çizgi izleyen</b>
        <ol>
          <li>Robiz Robot Takımı (Ege Üniversitesi) – Robiz-1 isimli robotu ile</li>
          <li>Ferdi Alakuş (Süleyman Demirel Üniversitesi) – SDÜ Çizgi isimli robotu ile</li>
          <li>Robiz Robot Takımı (Ege Üniversitesi) – Robiz-2 isimli robotu ile</li>
        </ol>

        <b>Çöp Toplayan</b>
        <ol>
          <li>Eray Aktokluk (TED İstanbul Koleji) – Wall-E isimli robotu ile</li>
          <li>Ümit Yelken (İstanbul Teknik Üniversitesi) – Çöpüşen Arı isimli robotu ile</li>
        </ol>

        <b>Mini sumo</b>
        <ol>
          <li>Ömer Yıldırım (Adil Karaağaç Teknik ve Endüstri Meslek Lisesi) – Şehzade Sultan isimli robotu ile</li>
          <li>Talha Asma (Adil Karaağaç Teknik ve Endüstri Meslek Lisesi) – Şehzade Elbrus isimli robotu ile</li>
          <li>Galip Çelik (Adil Karaağaç Teknik ve Endüstri Meslek Lisesi) – Şehzade Yıldırım isimli robotu ile</li>
        </ol>

        <b>Çoklu Mini Sumo</b>
        <ol>
          <li>Sinan Yiğin (Akdeniz Üniversitesi) – MSC1 isimli robotu ile</li>
          <li>Rasim Aydın (Bornova Mazhar Zorlu Teknik ve Endüstri Meslek Lisesi) – MZRoboteam isimli robotu ile</li>
          <li>Yavuz Büyükkoçak (Sakarya Üniversitesi) – Hipotenüs Lab. isimli robotu ile</li>
        </ol>

        <b>Sumo</b>
        <ol>
          <li>Emre Tarhana (High Tech takımı) (Marmara Üniversitesi) – Senju isimli robotu ile</li>
          <li>Emre Tarhana (High Tech takımı) (Marmara Üniversitesi) – Ashura isimli robotu ile</li>
          <li>Mustafa Öztürk (Çanakkale Onsekiz Mart Üniversitesi) – Patron isimli robotu ile</li>
        </ol>

        <b>Arazi</b>
        <ol>
          <li>Mustafa Mehmet (Marmara Üniversitesi) – 61fırtına61 isimli robotu ile</li>
          <li>Caner Topoğlu (Marmara Üniversitesi) –Catastrophic isimli robotu ile</li>
          <li>Selahattin Alpcan (Celal Bayar Üniversitesi) – Rahmi Kula_robomarket isimli robotu ile</li>
        </ol>

        <b>Tasarla – Yap – Yarıştır Kategorisi</b>
        <ol>
          <li>Süleyman Demirel Üniversitesi</li>
          <li>Ankara Üniversitesi</li>
          <li>Özyeğin Üniversitesi IEEE Topluluğu</li>
        </ol>

        <b>Serbest Kategorisi</b>
        <ol>
          <li>Kinect isimli Robotu ile Bahçeşehir Üniversitesi Mekatronik Mühendisliği</li>
          <li>Atlas isimli robotu ile Hava Harp Okulu</li>
          <li>Hexotor isimli robotu ile Koç Üniversitesi IEEE Öğrenci Kolu</li>
        </ol>

        <br/>

        <Container>
          <Row>
            <Col xs={12} md={6} lg={3}>
              <Image src="images/archive/2014/1.jpg" style={{ width: "100%", marginBottom: "30px" }}/>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Image src="images/archive/2014/2.jpg" style={{ width: "100%", marginBottom: "30px" }}/>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Image src="images/archive/2014/3.jpg" style={{ width: "100%", marginBottom: "30px" }}/>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Image src="images/archive/2014/4.jpg" style={{ width: "100%", marginBottom: "30px" }}/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} lg={3}>
              <Image src="images/archive/2014/5.jpg" style={{ width: "100%", marginBottom: "30px" }}/>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Image src="images/archive/2014/6.jpg" style={{ width: "100%", marginBottom: "30px" }}/>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Image src="images/archive/2014/7.jpg" style={{ width: "100%", marginBottom: "30px" }}/>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Image src="images/archive/2014/8.jpg" style={{ width: "100%", marginBottom: "30px" }}/>
            </Col>
          </Row>
        </Container>
       </IRLBase>
      </>
    )
  }
}