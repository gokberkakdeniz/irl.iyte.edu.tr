import React from 'react'
import IRLBase from './IRLBase'
import { ListGroup } from 'react-bootstrap'

export default class IRL2012 extends React.Component {
  render() {
    return (
      <>
       <IRLBase year="2012" {...this.props}>
          <p>
            Iztech RoboLeague (IRL), İzmir Yüksek Teknoloji Enstitüsü IEEE Öğrenci Kolu’nun 
            19 – 20 Ekim 2012 tarihleri arasında ilkini gerçekleştirdiği uluslararası bir 
            robot yarışmasıdır. İzmir Yüksek Teknoloji Enstitüsü’nün kuruluşunun 20. yılında 
            gerçekleştirilen Iztech RoboLeague kapsamında, robot teknolojilerinin sergilenmesi, 
            birbirleriyle mücadele etme atmosferi bulması ve aynı zamanda Türkiye’nin her 
            kesiminden öğrencilerin ve teknoloji sektörünün bir araya geleceği bir atmosfer 
            oluşturulması amaçlanmıştır. Bu organizasyonu diğer robot yarışmalarından ayıran 
            yanı ise, “Yaratıcılığını Yarıştır” sloganı ile yola çıkarak Tasarla-Yap-Yarıştır 
            konseptini ortaya çıkarmış olmasıdır. Organizasyon yalnızca yaratıcılığı ön plana 
            çıkarmakla kalmayıp, endüstriyel robot sektörünü de bünyesine RoboWorker etkinliği 
            ile katmış bulunmaktadır. Kategorilere göre derece kazananlara para ödülünün yanı 
            sıra ve laptop, tablet bilgisayar gibi teknolojik ödüller verildi. 24 saat aralıksız 
            süren Tasarla – Yap - Yarıştır kategorisinin birincisi 3 bin, ikincisi 2 bin, 
            üçüncüsü de bin lirayla ödüllendirildi.
          </p>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Tasarla - Yap - Yarıştır</ListGroup.Item>
            <ListGroup.Item as="li">Ekorob</ListGroup.Item>
            <ListGroup.Item as="li">Yengeç</ListGroup.Item>
            <ListGroup.Item as="li">Robofok</ListGroup.Item>
          </ListGroup>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Serbest Kategori</ListGroup.Item>
            <ListGroup.Item as="li">Midas Erdem Tatlı - İstanbul Kültür Üniversitesi</ListGroup.Item>
            <ListGroup.Item as="li">S.W.A.R.M Görkem Sarıgül - İstanbul Kültür Üniversitesi</ListGroup.Item>
            <ListGroup.Item as="li">Formula Car Visual Mehmet Cahit Özdemir - İstanbul Teknik Üniversitesi</ListGroup.Item>
          </ListGroup>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Arazi Kategorisi</ListGroup.Item>
            <ListGroup.Item as="li">Celal Alp Can Ağaya - Celal Bayar Üniversitesi</ListGroup.Item>
            <ListGroup.Item as="li">Challenger Sabri Can Bozdemir</ListGroup.Item>
            <ListGroup.Item as="li">Destur Özkan Kara</ListGroup.Item>
          </ListGroup>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Mini Sumo</ListGroup.Item>
            <ListGroup.Item as="li">Umut İbrahim Tuna</ListGroup.Item>
            <ListGroup.Item as="li">Goran Ahmet Kazan</ListGroup.Item>
            <ListGroup.Item as="li">Junior Fast Rabia Gülbike Kaya</ListGroup.Item>
          </ListGroup>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Sumo</ListGroup.Item>
            <ListGroup.Item as="li">Başkan - Süleyman Demirel Üniversitesi</ListGroup.Item>
            <ListGroup.Item as="li">İsmini Vermek İstemiyorum - Uludağ Üniversitesi</ListGroup.Item>
            <ListGroup.Item as="li">Hurşit - Yıldız Teknik Üniversitesi</ListGroup.Item>
          </ListGroup>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Çizgi İzleyen</ListGroup.Item>
            <ListGroup.Item as="li">Master of Lines - Ediz Ağarer</ListGroup.Item>
            <ListGroup.Item as="li">Road Runner - Osman Demirci</ListGroup.Item>
            <ListGroup.Item as="li">Anadolu Kaplanı - Muhsin Ağbaş</ListGroup.Item>
          </ListGroup>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Kibele RoboWorker</ListGroup.Item>
            <ListGroup.Item as="li">Yıldız Teknik Üniversitesi</ListGroup.Item>
            <ListGroup.Item as="li">Akdeniz Üniversitesi</ListGroup.Item>
            <ListGroup.Item as="li">Marmara Üniversitesi</ListGroup.Item>
          </ListGroup>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Yangın Söndüren</ListGroup.Item>
            <ListGroup.Item as="li">Hazal Süleymanoğlu ve ekibi</ListGroup.Item>
          </ListGroup>
       </IRLBase>
      </>
    )
  }
}