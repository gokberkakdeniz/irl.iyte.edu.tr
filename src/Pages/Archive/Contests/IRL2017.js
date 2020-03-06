import React from 'react'
import IRLBase from './IRLBase'

export default class IRL2017 extends React.Component {
  render() {
    return (
      <>
       <IRLBase year="2017">
        <p>
          IZTECH RoboLeague'17, Türkiye’nin dört bir yanından sayıları 1000’in üzerinde her yaştan 
          robot meraklılarının katılımıyla 21-22 Ekim 2017 tarihlerinde İYTE Kampüsü’nde (Makine 
          Müh. ve Kütüphane gösteri merkezinde) gerçekleşmiştir. 200’ü aşkın robot, 350’ü aşan 
          yarışmacıya ev sahipliği yapmış, Türkiye'nin dört bir yanından katılımcıların olduğu bir 
          organizasyondur. Mini Sumo, Serbest, Çizgi İzleyen, Arazi, Tasarla-Yap-Yarıştır, Çizgi 
          Labirent kategorilerine ek olarak "Futro" kategorisi bu yıl ilk kez düzenlendi. Farklı 
          kategorilerde ve workshoplarla birlikte toplamda 21 ödül sahiplerini buldu.
        </p>

        <b>Tasarla-Yap-Yarıştır</b>
        <ol>
          <li>IEEE ODTÜ RAS</li>
          <li>AKU Robotek</li>
          <li>Deu Robotik</li>
        </ol>

        <b>Serbest Kategori</b>
        <ol>
          <li>Bana Ses Ver</li>
          <li>Kodobot</li>
          <li>Teletouch</li>
        </ol>

        <b>Futro</b>
        <ol>
          <li>YTÜROK Ekibi</li>
          <li>GEBZE TEKNİK ÜNİVERSİTESİ Robotik ekibi</li>
          <li>IEEE ODTÜ RAS</li>
        </ol>

        <b>Çizgi İzleyen</b>
        <ol>
          <li>Özel Bursa Kültür Okulları</li>
          <li>YTUROK ekibi</li>
          <li>MSI ROBOT GRUBU</li>
        </ol>

        <b>Mini Sumo</b>
        <ol>
          <li>TEAM MOSTEM</li>
          <li>YUNUS EMRE KULAKSIZOĞLU</li>
          <li>SELÇUK ÜNİVERSİTESİ – MEHMET YILMAZ</li>
        </ol>

        <b>Arazi</b>
        <ol>
          <li>CELAL BAYAR ÜNİVERSİTESİ - Robotik Ekibi</li>
          <li>MUFE ROBOTİCS</li>
          <li>ÖZEL BURSA KÜLTÜR OKULLARI</li>
        </ol>

        <b>Çizgi Labirent</b>
        <ol>
          <li>ERAY AKTOKLUK – Amerikan Koleji</li>
          <li>ERAY AKTOKLUK – Amerikan Koleji</li>
          <li>ERAY AKTOKLUK – Amerikan Koleji</li>
        </ol>
       </IRLBase>
      </>
    )
  }
}