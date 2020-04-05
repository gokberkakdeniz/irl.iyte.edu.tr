import React from 'react'
import IRLBase from './IRLBase'
import { ListGroup } from 'react-bootstrap'

export default class IRL2017 extends React.Component {
  render() {
    return (
      <>
        <IRLBase year="2017" {...this.props}>
          <p>
            IZTECH RoboLeague'17, Türkiye’nin dört bir yanından sayıları 1000’in üzerinde her yaştan
            robot meraklılarının katılımıyla 21-22 Ekim 2017 tarihlerinde İYTE Kampüsü’nde (Makine
            Müh. ve Kütüphane gösteri merkezinde) gerçekleşmiştir. 200’ü aşkın robot, 350’ü aşan
            yarışmacıya ev sahipliği yapmış, Türkiye'nin dört bir yanından katılımcıların olduğu bir
            organizasyondur. Mini Sumo, Serbest, Çizgi İzleyen, Arazi, Tasarla-Yap-Yarıştır, Çizgi
            Labirent kategorilerine ek olarak "Futro" kategorisi bu yıl ilk kez düzenlendi. Farklı
            kategorilerde ve workshoplarla birlikte toplamda 21 ödül sahiplerini buldu.
        </p>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Tasarla-Yap-Yarıştır</ListGroup.Item>
            <ListGroup.Item as="li">IEEE ODTÜ RAS</ListGroup.Item>
            <ListGroup.Item as="li">AKU Robotek</ListGroup.Item>
            <ListGroup.Item as="li">Deu Robotik</ListGroup.Item>
          </ListGroup>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Serbest Kategori</ListGroup.Item>
            <ListGroup.Item as="li">Bana Ses Ver</ListGroup.Item>
            <ListGroup.Item as="li">Kodobot</ListGroup.Item>
            <ListGroup.Item as="li">Teletouch</ListGroup.Item>
          </ListGroup>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Futro</ListGroup.Item>
            <ListGroup.Item as="li">YTÜROK Ekibi</ListGroup.Item>
            <ListGroup.Item as="li">GEBZE TEKNİK ÜNİVERSİTESİ Robotik ekibi</ListGroup.Item>
            <ListGroup.Item as="li">IEEE ODTÜ RAS</ListGroup.Item>
          </ListGroup>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Çizgi İzleyen</ListGroup.Item>
            <ListGroup.Item as="li">Özel Bursa Kültür Okulları</ListGroup.Item>
            <ListGroup.Item as="li">YTUROK ekibi</ListGroup.Item>
            <ListGroup.Item as="li">MSI ROBOT GRUBU</ListGroup.Item>
          </ListGroup>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Mini Sumo</ListGroup.Item>
            <ListGroup.Item as="li">TEAM MOSTEM</ListGroup.Item>
            <ListGroup.Item as="li">YUNUS EMRE KULAKSIZOĞLU</ListGroup.Item>
            <ListGroup.Item as="li">SELÇUK ÜNİVERSİTESİ – MEHMET YILMAZ</ListGroup.Item>
          </ListGroup>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Arazi</ListGroup.Item>
            <ListGroup.Item as="li">CELAL BAYAR ÜNİVERSİTESİ - Robotik Ekibi</ListGroup.Item>
            <ListGroup.Item as="li">MUFE ROBOTİCS</ListGroup.Item>
            <ListGroup.Item as="li">ÖZEL BURSA KÜLTÜR OKULLARI</ListGroup.Item>
          </ListGroup>

          <ListGroup className="ordered from-second" as="ol">
            <ListGroup.Item as="li">Çizgi Labirent</ListGroup.Item>
            <ListGroup.Item as="li">ERAY AKTOKLUK – Amerikan Koleji</ListGroup.Item>
            <ListGroup.Item as="li">ERAY AKTOKLUK – Amerikan Koleji</ListGroup.Item>
            <ListGroup.Item as="li">ERAY AKTOKLUK – Amerikan Koleji</ListGroup.Item>
          </ListGroup>
        </IRLBase>
      </>
    )
  }
}