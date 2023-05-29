import './Home-our-preferences.css'
import OurPreferencerCard from './Our-preferencer-card'
import cardImage_1 from '../../assets/images/Home-image/our-preferences-card1.png'
import cardImage_2 from '../../assets/images/Home-image/our-preferences-card2.png'
import cardImage_3 from '../../assets/images/Home-image/our-preferences-card3.png'
import cardImage_4 from '../../assets/images/Home-image/our-preferences-card4.png'
import cardImage_5 from '../../assets/images/Home-image/our-preferences-card5.png'

const HomeOurPreferences = () => {
  return (
    <div className='our-preferences'>
       <div className="our-preferences-element">
               <h2 className="title">Наши преимущества</h2>
               <div className="our-preferences-cardBox">
                    <OurPreferencerCard image={cardImage_1} text={"Предоставляем гибкие условия по случаю и взаимодействию в целом"} />
                    <OurPreferencerCard image={cardImage_2} text={"Умеем слышать клиента и находить общий язык"} />
                    <OurPreferencerCard image={cardImage_3} text={"Постоянно информируем заказчика о состоянии проекта на всех этапах работ"} />
                    <OurPreferencerCard image={cardImage_4} text={"Проводим доскональное тестирование всего кода после разработки"} />
                    <OurPreferencerCard image={cardImage_5} text={"При необходимости берём проект на постоянную поддержку"} />
               </div>            
       </div>
    </div>
  )
}

export default HomeOurPreferences