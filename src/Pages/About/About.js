import React from 'react'
import { Section } from './../../Components'

import './About.css'
import Title from '../Title'

export default class About extends React.Component {
  render() {
    return (
      <>
        <Title pageName="Hakkımızda"></Title>
        <div id="about-top">
          <span>
            HAKKIMIZDA
          </span>
        </div>
        <Section title="Genel Bakış">
          <p>
            2012 yılından bu yana her yıl aktif bir şekilde düzenlenen 
            ve bu yıl yedincisi düzenlenecek olan IZTECH RoboLeague 
            yarışması, IEEE İYTE Öğrenci Kolu tarafından hayata geçirilmiş 
            en büyük projelerden biri olup her sene 1000’in üzerinde 
            katılımcıya ev sahipliği yapmaktadır. 
            İlk olarak İzmir Yüksek Teknoloji Enstitüsü’nün kuruluşunun 
            20. yılında gerçekleştirilmiş sonrasında gelenekselleşen 
            teknik bir etkinlik olan IZTECH RoboLeague, robot 
            teknolojilerinin sergilendiği, farklı kabiliyetlerde robotların 
            birbirleriyle mücadele etme fırsatı bulduğu ve aynı zamanda 
            teknoloji sektörünü kalifiye bir mühendis ve/veya teknik personel 
            olmaya aday öğrencilerle buluşturmayı hedeflemiş bir organizasyondur. 
            Bu etkinliği diğerlerinden farklı kılan özelliği, her sene çıtayı 
            birkaç adım daha yükseklere taşıyarak yoluna devam etmesi ve 
            Türkiye’de benzeri bulunmayan yenilikleri barındırarak bu alanda 
            kendini yetiştirmiş yetenekli ve bilgili insanları hem kendi 
            içlerinde hem de sektörle bir araya getiren samimi bir platform 
            yaratmasıdır. 
          </p>
        </Section>
        <Section title="Vizyon">
          <p>
            Kendini robotik konusunda geliştirmiş ya da geliştirmeye çalışan her 
            yaştan ve kesimden insanı bir araya getirerek teknolojik bir sinerji
            yaratmak ve Türkiye’de robotik alanına duyulan ilgiyi arttırarak 
            sektörün gelişimine katkıda bulunmak. 
          </p>
        </Section>
        <Section title="Misyon">
          <p>
            Türkiye’nin her tarafından katılımcı sağlayarak çocuklara, gençlere, 
            hâlihazırda mühendislik okumakta olan üniversite öğrencilerine ve 
            robotik severlere ulaşıp onlara daha geniş bir perspektif kazandırmak, 
            robotik alanına özendirmek, bilgi birikimlerini artırmak, her geçen 
            gün yarışmanın kalitesini yükseltmek, aynı zamanda da ülkemizdeki 
            robotik sektörünün gelişimine olanak sağlamaktır. 
          </p>
        </Section>
        <Section title="İçerik">
          <p>
            2014 yılında dünya çapındaki "IEEE Darrel Chong Student Awards" ödülünü 
            kazanan ve Ege Bölgesi’nde bir öğrenci kolu tarafından düzenlenen ulusal 
            çaplı ilk ve tek robot yarışması niteliğini taşıyan IZTECH RoboLeague’in 
            içeriğini eğitim, seminer ve yarışmalar oluşturmaktadır. 
          </p>

          <p>
          Yarışmanın ana kategorileri:
          <ul id="about-categories">
              <li>Çizgi İzleyen,</li>
              <li>Çizgi Labirent,</li>
              <li>Mini Sumo,</li>
              <li>Arazi,</li>
              <li>Futro,</li>
              <li>Serbest,</li>
              <li>Tasarla – Yap – Yarıştır,</li>
              <li>Gitro,</li>
              <li>Robothon</li>
          </ul>
          kategorileri olarak sıralanmaktadır.
          </p>

          <p>
            Türkiye’de robot alanında bilgisi olan insanların boy ölçüştüğü 
            “TASARLA – YAP – YARIŞTIR” ve “Robothon” kategorisinin konsepti sadece 
            IZTECH RoboLeague yarışmasına özgü bir konsepttir ve her yıl yenilenmektedir. 
            Bu kategoriler yarışmacıların dayanıklılık, tecrübe ve yaratıcılığını 
            sınayan 24 ve 36 saatlik maratonlardır. 
          </p>
        </Section>
      </>
    )
  }
}