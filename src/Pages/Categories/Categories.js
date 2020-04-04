import React from 'react'
import { Section } from './../../Components'
import Title from '../Title'
import CategoryShort from './Category/CategoryShort'

import './Categories.css'



export default function Categories() {
  return (
    <>
      <Title pageName="Kategoriler"></Title>
      <Section
        title="Kategoriler"
      >
        <CategoryShort
          name="Arazi"
          logo="images/categories/arazi.png"
        >
          Rampayla yüksel ama kazıklı voyvodadan geçerken sakın düşme. 
          Sallanıp dönerken aklına mukayyet ol, çünkü pinpon toplarıyla 
          boğuşup samanlık ve kızgın kedi kumlarını da atlatman gerek. 
          Oobleck gölünden geçerken ona iyi davran çünkü garip hareketleri var. 
        </CategoryShort>

        <CategoryShort
          name="Çizgi İzleyen"
          logo="images/categories/cizgi_izleyen.png"
        >
          Sen de pistin tozunu attırmak için mi geldin?
        </CategoryShort>

        <CategoryShort
          name="Çizgi Labirent"
          logo="images/categories/cizgi_labirent.png"
        >
          Bu labirent bildiğin labirentlere benzemez, duvarları yoktur. 
          Robotunun en kestirme yolu bulması için tam 7 dakikası var. 
          Çizgiden şaşma, tanımadıklarınla konuşma ve çıkmazlara girip 
          Minator’a yem olma! 
        </CategoryShort>

        <CategoryShort
          name="Futro"
          logo="images/categories/futro.png"
        >
          Dar alanda rakibini geçip, sana doğru gelen pası ağlarla 
          buluşturmak istiyorsan; ekip arkadaşını ve robotlarınızı kap 
          gel. IRL’nin en yeni kategorilerinden biri olan Futro’da, 8 
          dakika içinde kimin daha çok gol atabileceğini göster. 
          Dikkat, Futro takım ruhunuzu gösterebileceğiniz bir kategoridir! 
        </CategoryShort>

        <CategoryShort
          name="Mini Sumo"
          logo="images/categories/mini_sumo.png"
        >
          Not Found
          <br/>
          The requested URL /kategoriler/mini-sumo was not found on this server. :D
        </CategoryShort>

        <CategoryShort
          name="Robothon"
          logo="images/categories/robothon.png"
        >
          Açıklama Not Found :/
        </CategoryShort>

        <CategoryShort
          name="Serbest"
          logo="images/categories/serbest.png"
        >
          Serbest kategori robotları, klasik kategori 
          robotlarının dışında farklı amaçlarla tasarlanmıştır. 
          Kategori üstü bu robotlar; özgünlük, uygulanabilirlik, 
          tasarım, performans gibi alanlarda kendilerini gösteren, 
          herhangi bir fikir ya da fiziki boyut sınırlaması 
          olmayan robotlardır. 
        </CategoryShort>


        <CategoryShort
          name="Tasarla-Yap-Yarıştır"
          logo="images/categories/tasarla.png"
        >
           Bedeni elektronik aksam ve K’nex parçalarından, zihni 
           kodlardan meydana gelen, temaya en uygun robotlar yapılmaya 
           çalışılır. Gelen ekiplerin kısıtlı malzemeleri ve 24 saat
            süreleri vardır. Ve en eğlenceli tarafı kategorinin teması 
            yarışma gününe kadar yarışmacılara duyurulmaz. Ekiplerin strese 
            karşı savaş verdiği, tüm bilgi birikimi ve deneyimlerini 
            ortaya koyduğu bir yarışmadır. 
        </CategoryShort>
      </Section>
    </>
  )
}