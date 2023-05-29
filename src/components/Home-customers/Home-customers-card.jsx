import './Home-customers.css'
import { Link } from 'react-router-dom'

const HomeCustomersCard = () => {
     
  return (
    <div className='home-customers-card'>
               <div className="customers-card-head">
                    <h3 className='title'>Комплексное продвижение</h3>
                    <ul>
                         <li>SEO-продвижение</li>
                         <li>Содержание</li>
                         <li>SERM</li>
                         <li>Реклама в Яндекс.Директ</li>
                         <li>Геомаркетинг, продвижение в контекстном поиске</li>
                         <li>SMM – продвижение соц.сетей</li>
                         <li>Настройка таргетированной рекламы для SMM</li>
                         <li>UX, улучшение конверсии сайта</li>
                    </ul>
               </div>
               <div className="customers-card-btn">
                    <Link>Подробнее</Link>
               </div>

    </div>
  )
}

export default HomeCustomersCard
