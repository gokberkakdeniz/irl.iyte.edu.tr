import React from 'react'
import { Section, Map } from './../../Components'
import { Alert } from 'react-bootstrap'
import Title from '../Title'

export default class Surviving extends React.Component {
  render() {
    return (
      <>
        <Title pageName="Ulaşım ve Konaklama"></Title>

        <Section
          title="Hayatta Kalma Rehberi"
        >
          <p>
            Etkinlik esnasındaki ulaşım, yemek, konaklama ve okul içi bilgilendirmeler için IZTECH RoboLeague’20 Hayatta Kalma Rehberi’ne göz atın!
          </p>
        </Section>

        <Section
          title="Ulaşım"
        >
          <p>
            Üçkuyular(Fahrettin Altay) - İYTE ve Urla - İYTE arasında günün her saatinde 
            belediye otobüsü ve dolmuş çalışmaktadır. 
            Ayrıca, Gülbahçe-İYTE arasında da dolmuş seferleri bulunmaktadır. İzmir-Çeşme otoyolu, 
            özel araçlar için rahat ve güvenli bir alternatif sunmaktadır.
          </p>


          <h5><b>Üçkuyular (Fahrettin Altay)'a Ulaşım</b></h5>
          <p>
            İzmir Otogar – Fahrettin Altay arası ulaşım, otobüs firmalarının Üçkuyular 
            (Fahrettin Altay)'a giden servisleri ile ücretsiz bir şekilde,
            Havaalanı - Fahrettin Altay arası ulaşım, 202 nolu belediye otobüsünün Hava 
            Hastanesi durağında inerek (Hava Hastanesi, Fahrettin Altay merkezine yaklaşık 5 dakika mesafededir.),
            Basmane Tren Garı - Fahrettin Altay arası ulaşım, metronun son durağı 
            olan Fahrettin Altay durağında inip Pazaryeri çıkışından çıkarak sağlanmaktadır.
            İzmir'in farklı yerlerinden Fahrettin Altay'a gelmek için metro ya da tramvay hattını kullanabilirsiniz. 
            Metro hattı ile ilgili bilgilere <a href="https://www.izmirmetro.com.tr/Sayfa/39/18/rayli-sistem-haritasi" className="href">buradan</a>, 
            tramvay hattı ile ilgili bilgilere <a href="http://www.tramizmir.com/?AspxAutoDetectCookieSupport=1" className="href">buradan</a> ulaşabilirsiniz.
          </p>

          <h5><b>Fahrettin Altay - İYTE Arası Ulaşım</b></h5>
          <p>
            Toplu Taşıma ile 736 nolu belediye otobüsü ya da Gülbahçe dolmuşları ile Enstitümüze ulaşabilirsiniz.
            Dolmuşlar önce Mithat Paşa Caddesini, sonra Mustafa Kemal Sahil Caddesini ve son olarak da 
            Mustafa Kemal Sahil Bulvarını takip etmektedir. 
            Yolculuğunuz yaklaşık 1 saat sürecektir.
          </p>

          <p>
            Fahrettin Altay'dan İYTE'ye Dolmuş Saatleri: 7:40 - 8:10 - 8:30 - 9:00 şeklinde devam etmektedir.
            </p>

          <p>
            İYTE'den Fahrettin Altay'a Dolmuş Saatleri: 18:00'e kadar 20 dakikada bir, 18:00-20:00 arası 30 dakikada bir, son araç 21:00'dedir.
            </p>

          <p>
            Aşağıdaki harita dolmuşların kalktığı yeri gösterir. 
            Haritanın sol üst köşesinde bulunan "Daha büyük haritayı görüntüle" butonuna tıklayarak yol tarifi alabilirsiniz.
          </p>

          <Map
            title="İYTE harita"
            mode="place"
            zoom="17"
            q="place_id:ChIJiTZBAUTduxQRg3zGmXcQJ8U"
            language="TR"
            style={{
              border: "0", 
              width: "100%", 
              height: "400px",
              margin: "14px 0 30px 0"
            }}
            frameBorder="0"
            allowFullScreen
          ></Map>

          <p>
            Özel araç ile İzmir-Çeşme Otoyolu Karaburun gişelerinden çıktıktan 5 km sonra Çeşme-Karaburun 
            yol ayrımında kampüs girişini görebilirsiniz.
          </p>

          <h5><b>Urla-İYTE Arası Ulaşım</b></h5>
          <p>
            Urla İYTE dolmuşları ile sağlanabilir. Dolmuşların hafta sonu saatlerine buradan ulaşabilirsiniz. 
            Araçlar Urla merkezde Palmiye Pastanesi önünden geçmektedir. Aşağıdaki harita Palmiye Pastanesini gösterir. 
            Haritanın sol üst köşesinde bulunan "Daha büyük haritayı görüntüle" butonuna tıklayarak yol tarifi alabilirsiniz.
          </p>
          
          <Map
            title="İYTE harita"
            mode="place"
            zoom="18"
            q="place_id:ChIJ8Wy4L2KTuxQRsv_Et6WJjqw"
            language="TR"
            style={{
              border: "0", 
              width: "100%", 
              height: "400px",
              margin: "14px 0 30px 0"
            }}
            frameBorder="0"
            allowFullScreen
          ></Map>
        </Section>

        <Section
          title="Konaklama"
        >
          <p>
            Urla'da konaklamayı düşünüyorsanız merkezde konaklamanızı öneririz. 
            İskele ya da Çeşmealtı gibi mahallelerde konaklarsanız Urla merkeze gelmek için de dolmuş kullanmanız gerekir.
          </p>

          <p>
            Fahrettin Altay, Balçova ya da metro güzergahında bulunan İzmir'in başka semtlerinde bulunan otel, 
            pansiyon gibi yerlerde de konaklayabilirsiniz. 
            Dolmuş güzergahını da göz önünde bulundurmanızı tavsie ederiz.
          </p>

          <p>
            Okulumuza yakın İzmir-Çeşme otoyolu üzerinde Pusula Otel ve La Vida Otel, Urla merkezde Han Otel, 
            okulumuza çok yakın olan Gülbahçe köyünde ise Burla Han Butik Otel bulunmaktadır. 
            Boş yer ve fiyat için gelmeden önce otelleri aramanızı öneririz.
          </p>

          <p>
            Gülbahçe'den İYTE'ye Dolmuş Saatleri: İlk dolmuş 7:45'te ve 20 dakikada bir araç bulunmaktadır.
          </p>

          <Alert variant="warning">
            Önerilen oteller tamamen fikir vermek amaçlıdır. 
            IZTECH RoboLeague konaklama ile ilgili hiçbir sorumluluk kabul etmemektedir ve konaklama masraflarını karşılamamaktadır.
          </Alert>
        </Section>
      </>
    )
  }
}