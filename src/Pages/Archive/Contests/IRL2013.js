import React from 'react'
import IRLBase from './IRLBase'
import { Container, Col, Row, Image, ListGroup } from 'react-bootstrap'

export default class IRL2013 extends React.Component {
  render() {
    return (
      <>
        <IRLBase year="2013" {...this.props}>
          <p>
            Çeşitli üniversite, yüksekokul ve meslek lisesinden yaklaşık 750 katılımcının
            250 projeyle yer aldığı yarışmada binin üzerindeki katılımcının yüzde 30’u lise,
            yüzde 60’ı üniversite, yüzde 10’u da firmalar düzeyinde oldu. İlköğretim
            öğrencilerinden oluşan ekiplerin de izleyici olarak ilgi gösterdiği organizasyonda
            9 kategoride yapılan yarışmaların sonunda toplam 30 ödül verildi. 
          </p>
            
          <p>
            26-27 Ekim 2013
            tarihinde iki gün süren yarışmada, tasarla – yap – yarıştır kategorisinde hiç durmadan
            ve uyumadan 24 saatte robot yapmanın yanı sıra yangın söndüren, çizgi izleyen, mini sumo,
            çoklu mini sumo, sumo, arazi, roboworker ve serbest kategorilerde robot yarışmaları
            düzenlendi. 
          </p>
          
          <p>
            Etkinliğin en heyecanlı yarışmaları arasında Roboworker kategorisinde
            Neotech’in ana sponsorluğunda düzenlenen “İnsansı Robotlarla Futbol Karşılaşması ve
            “40 Dakikada Kendi Robotunu Yap” workshopları yer aldı. ASELSAN Proje Geliştirme
            Müdürü Alper Erdener’in “İnsansız Araçlar” konulu bir sunum yaptığı etkinliğe pek
            çok kurum ve kuruluş da destek verdi. 
          </p>
            
          <p>
            İki gün süren yarışmalar sonucunda
            İYTE Makine Mühendisliği Bölümü Öğretim Üyesi Dr. Mehmet İsmet Candede, ASELSAN Proje
            Geliştirme Müdürü Alper Erdener, Neotek Ürün Geliştirme Müdür Yardımcısı Deniz Eren,
            Canop Mühendislikten Ruhi Dede, IZTECH Genel Koordinatörü Gizem Ateş ve Etiya’dan Uğur
            Gemici’den oluşan jürinin oylarıyla kazananlar ve kategorileri şöyle oldu:
          </p>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Çizgi izleyen</ListGroup.Item>
            <ListGroup.Item as="li">SDU-12 - Süleyman Demirel Üniversitesi</ListGroup.Item>
            <ListGroup.Item as="li">Kurşun - Ege Üniversitesi Meslek Yüksek Okulu</ListGroup.Item>
            <ListGroup.Item as="li">Arslan - Ege Üniversitesi Meslek Yüksek Okulu</ListGroup.Item>
          </ListGroup>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Sumo</ListGroup.Item>
            <ListGroup.Item as="li">Çanakkale Üniversitesi ÇÖMÜ Robot Takımı</ListGroup.Item>
            <ListGroup.Item as="li">Neşter adlı robotuyla Ali Elmas</ListGroup.Item>
            <ListGroup.Item as="li">Kyubi adlı robotuyla Emre Tarhana</ListGroup.Item>
          </ListGroup>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Mini Sumo</ListGroup.Item>
            <ListGroup.Item as="li">Kunt adlı robot ile Adil Karaağaç Teknik Endüstri Lisesi</ListGroup.Item>
            <ListGroup.Item as="li">Noname adlı robot ile İstanbul Aydın Üniversitesi</ListGroup.Item>
            <ListGroup.Item as="li">Bitirdim adlı robotu ile Ali Elmas</ListGroup.Item>
          </ListGroup>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Çoklu Mini Sumo</ListGroup.Item>
            <ListGroup.Item as="li">Sakarya Üniversitesi Yakup Ürken</ListGroup.Item>
            <ListGroup.Item as="li">Tokat Zile Endüstri Meslek Lisesi Ali Rıza Doğan</ListGroup.Item>
            <ListGroup.Item as="li">İstanbul Aydın Üniversitesi Robot Kulübü</ListGroup.Item>
          </ListGroup>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Çöp Toplayan</ListGroup.Item>
            <ListGroup.Item as="li">Tokat Zile Endüstri Meslek Lisesi Ali Rıza Doğan</ListGroup.Item>
            <ListGroup.Item as="li">Stabil - Mustafa Türkcan</ListGroup.Item>
            <ListGroup.Item as="li">Kör Olası Çöpçüler - Bahçeşehir Üniversitesi</ListGroup.Item>
          </ListGroup>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Yangın Söndüren</ListGroup.Item>
            <ListGroup.Item as="li">Blauer - Fatih Çeken</ListGroup.Item>
            <ListGroup.Item as="li">Blauer 3 - Fatih Çeken</ListGroup.Item>
            <ListGroup.Item as="li">Stable - Eray Aktokluk - Kocaeli Doğa Koleji</ListGroup.Item>
          </ListGroup>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Arazi</ListGroup.Item>
            <ListGroup.Item as="li">Pineapple SUV 4 L - Anıl Dinçeröz</ListGroup.Item>
            <ListGroup.Item as="li">Arazi 60 - Tokat Zile Endüstri Meslek Lisei Ali Rıza Doğan</ListGroup.Item>
            <ListGroup.Item as="li">Pineapple SUV 4 M - Anıl Dinçeröz</ListGroup.Item>
          </ListGroup>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Serbest</ListGroup.Item>
            <ListGroup.Item as="li">Özel TAKEV Anadolu ve Fen Lisesi - Görme engelliler için gözlük</ListGroup.Item>
            <ListGroup.Item as="li">İstanbul Teknik Üniversitesi ve İstanbul Ticaret Üniversitesi - Şebelek</ListGroup.Item>
            <ListGroup.Item as="li">Bahçeşehir Üniversitesi - Hawore Craft Projesi</ListGroup.Item>
          </ListGroup>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Tasarla - Yap - Yarıştır</ListGroup.Item>
            <ListGroup.Item as="li">Ankara Üniversitesi - Röböt</ListGroup.Item>
            <ListGroup.Item as="li">Stabil Can</ListGroup.Item>
            <ListGroup.Item as="li">Sakarya Üniversitesi</ListGroup.Item>
          </ListGroup>

          <br />

          <Container>
            <Row>
              <Col xs={12} md={6} lg={3}>
                <Image src="images/archive/2013/1.jpg" style={{ width: "100%", marginBottom: "30px" }} />
              </Col>
              <Col xs={12} md={6} lg={3}>
                <Image src="images/archive/2013/2.jpg" style={{ width: "100%", marginBottom: "30px" }} />
              </Col>
              <Col xs={12} md={6} lg={3}>
                <Image src="images/archive/2013/3.jpg" style={{ width: "100%", marginBottom: "30px" }} />
              </Col>
              <Col xs={12} md={6} lg={3}>
                <Image src="images/archive/2013/4.jpg" style={{ width: "100%", marginBottom: "30px" }} />
              </Col>
            </Row>
          </Container>
        </IRLBase>
      </>
    )
  }
}