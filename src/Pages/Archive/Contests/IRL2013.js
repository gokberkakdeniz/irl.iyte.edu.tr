import React from 'react'
import IRLBase from './IRLBase'
import { Container, Col, Row, Image } from 'react-bootstrap'

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
          9 kategoride yapılan yarışmaların sonunda toplam 30 ödül verildi. 26-27 Ekim 2013 
          tarihinde iki gün süren yarışmada, tasarla – yap – yarıştır kategorisinde hiç durmadan 
          ve uyumadan 24 saatte robot yapmanın yanı sıra yangın söndüren, çizgi izleyen, mini sumo, 
          çoklu mini sumo, sumo, arazi, roboworker ve serbest kategorilerde robot yarışmaları 
          düzenlendi. Etkinliğin en heyecanlı yarışmaları arasında Roboworker kategorisinde 
          Neotech’in ana sponsorluğunda düzenlenen “İnsansı Robotlarla Futbol Karşılaşması ve 
          “40 Dakikada Kendi Robotunu Yap” workshopları yer aldı. ASELSAN Proje Geliştirme 
          Müdürü Alper Erdener’in “İnsansız Araçlar” konulu bir sunum yaptığı etkinliğe pek 
          çok kurum ve kuruluş da destek verdi. KAZANANLAR İki gün süren yarışmalar sonucunda 
          İYTE Makine Mühendisliği Bölümü Öğretim Üyesi Dr. Mehmet İsmet Candede, ASELSAN Proje 
          Geliştirme Müdürü Alper Erdener, Neotek Ürün Geliştirme Müdür Yardımcısı Deniz Eren, 
          Canop Mühendislikten Ruhi Dede, IZTECH Genel Koordinatörü Gizem Ateş ve Etiya’dan Uğur 
          Gemici’den oluşan jürinin oylarıyla kazananlar ve kategorileri şöyle oldu: 
        </p>

        <b>Çizgi izleyen</b>
        <ol>
          <li>SDU-12 - Süleyman Demirel Üniversitesi</li>
          <li>Kurşun - Ege Üniversitesi Meslek Yüksek Okulu</li>
          <li>Arslan - Ege Üniversitesi Meslek Yüksek Okulu</li>
        </ol>
        
        <b>Sumo</b>
        <ol>
          <li>Çanakkale Üniversitesi ÇÖMÜ Robot Takımı</li>
          <li>Neşter adlı robotuyla Ali Elmas</li>
          <li>Kyubi adlı robotuyla Emre Tarhana</li>
        </ol>

        <b>Mini Sumo</b>
        <ol>
          <li>Kunt adlı robot ile Adil Karaağaç Teknik Endüstri Lisesi</li>
          <li>Noname adlı robot ile İstanbul Aydın Üniversitesi</li>
          <li>Bitirdim adlı robotu ile Ali Elmas</li>
        </ol>

        <b>Çoklu Mini Sumo</b>
        <ol>
          <li>Sakarya Üniversitesi Yakup Ürken</li>
          <li>Tokat Zile Endüstri Meslek Lisesi Ali Rıza Doğan</li>
          <li>İstanbul Aydın Üniversitesi Robot Kulübü</li>
        </ol>

        <b>Çöp Toplayan</b>
        <ol>
          <li>Tokat Zile Endüstri Meslek Lisesi Ali Rıza Doğan</li>
          <li>Stabil - Mustafa Türkcan</li>
          <li>Kör Olası Çöpçüler - Bahçeşehir Üniversitesi</li>
        </ol>

        <b>Yangın Söndüren</b>
        <ol>
          <li>Blauer - Fatih Çeken</li>
          <li>Blauer 3 - Fatih Çeken</li>
          <li>Stable - Eray Aktokluk - Kocaeli Doğa Koleji</li>
        </ol>

        <b>Arazi</b>
        <ol>
          <li>Pineapple SUV 4 L - Anıl Dinçeröz</li>
          <li>Arazi 60 - Tokat Zile Endüstri Meslek Lisei Ali Rıza Doğan</li>
          <li>Pineapple SUV 4 M - Anıl Dinçeröz</li>
        </ol>

        <b>Serbest</b>
        <ol>
          <li>Özel TAKEV Anadolu ve Fen Lisesi - Görme engelliler için gözlük</li>
          <li>İstanbul Teknik Üniversitesi ve İstanbul Ticaret Üniversitesi - Şebelek</li>
          <li>Bahçeşehir Üniversitesi - Hawore Craft Projesi</li>
        </ol>

        <b>Tasarla - Yap - Yarıştır</b>
        <ol>
          <li>Ankara Üniversitesi - Röböt</li>
          <li>Stabil Can</li>
          <li>Sakarya Üniversitesi</li>    
        </ol>

        <br/>

        <Container>
          <Row>
            <Col xs={12} md={6} lg={3}>
              <Image src="images/archive/2013/1.jpg" style={{ width: "100%", marginBottom: "30px" }}/>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Image src="images/archive/2013/2.jpg" style={{ width: "100%", marginBottom: "30px" }}/>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Image src="images/archive/2013/3.jpg" style={{ width: "100%", marginBottom: "30px" }}/>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Image src="images/archive/2013/4.jpg" style={{ width: "100%", marginBottom: "30px" }}/>
            </Col>
          </Row>
        </Container>
       </IRLBase>
      </>
    )
  }
}