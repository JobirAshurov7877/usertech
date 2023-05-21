import './Home-customers.css'
import gifRobot from '../../assets/images/Home-image/robot.gif'
import { Link } from 'react-router-dom'
const HomeCustomers = () => {
  return (
    <div className='customers'>
     <div className="customers-wrap">
     <div className="customers-element">
          <div className="element-container">
             <div className="customersBox_l">
               <div className="box-head">
                    <h3>Создали IT продукт , а что дальше ?</h3>
                    <h3>Мы помогаем клиентам в следующих ситуациях:</h3>
               </div>
               <div className="box-body">
                    <img src={gifRobot} alt="img" />
               </div>
             </div>
             <div className="customersBox_r">
               <ul>
                    <h4 className="title">Никогда не привлекали клиентов из интернета</h4>
                    <li>Никогда не было сайта</li>
                    <li>Н Не знали, что такое контекстная реклама,SEO-продвижение, и как с этого можно полностью загрузить отдел продаж</li>
                    <li>Не знали, что из интернета можно получать клиентов </li>
                    <li>Не знали таких терминов как СTR, СРС, СРА, RОМI, ДРР и что важно знать про</li>
               </ul>
               <ul>
                    <h4 className="title">Был сайт и реклама в интернете, но не получили нужого результата</h4>
                    <li>Никогда не было сайта</li>
                    <li>Н Не знали, что такое контекстная реклама,SEO-продвижение, и как с этого можно полностью загрузить отдел продаж</li>
                    <li>Не знали, что из интернета можно получать клиентов </li>
                    <li>Не знали таких терминов как СTR, СРС, СРА, RОМI, ДРР и что важно знать про</li>
               </ul>
             </div>
          </div>
     </div>
     </div>

     <div className="customers-card">
               <div className="customers-card-head">
                    <h3 className='title'>Комплексное продвижение</h3>
                    <ul>
                         <li>SEO-продвижение</li>
                         <li>Содержание</li>
                         <li>SERM</li>
                         <li>Реклама в Яндекс.Директ</li>
                         <li> Геомаркетинг, продвижение в контекстном поиске</li>
                         <li>SMM – продвижение соц.сетей</li>
                         <li> Настройка таргетированной рекламы для SMM</li>
                         <li>UX, улучшение конверсии сайта</li>
                    </ul>
               </div>
               <div className="customers-card-btn">
                    <Link>Подробнее</Link>
               </div>
     </div>
     <div className="customers-card">
               <div className="customers-card-head">
                    <h3 className='title'>Комплексное продвижение</h3>
                    <ul>
                         <li>SEO-продвижение</li>
                         <li>Содержание</li>
                         <li>SERM</li>
                         <li>Реклама в Яндекс.Директ</li>
                         <li> Геомаркетинг, продвижение в контекстном поиске</li>
                         <li>SMM – продвижение соц.сетей</li>
                         <li> Настройка таргетированной рекламы для SMM</li>
                         <li>UX, улучшение конверсии сайта</li>
                    </ul>
               </div>
               <div className="customers-card-btn">
                    <Link>Подробнее</Link>
               </div>
     </div>
     <div className="customers-card">
               <div className="customers-card-head">
                    <h3 className='title'>Комплексное продвижение</h3>
                    <ul>
                         <li>SEO-продвижение</li>
                         <li>Содержание</li>
                         <li>SERM</li>
                         <li>Реклама в Яндекс.Директ</li>
                         <li> Геомаркетинг, продвижение в контекстном поиске</li>
                         <li>SMM – продвижение соц.сетей</li>
                         <li> Настройка таргетированной рекламы для SMM</li>
                         <li>UX, улучшение конверсии сайта</li>
                    </ul>
               </div>
               <div className="customers-card-btn">
                    <Link>Подробнее</Link>
               </div>
     </div>
    </div>
  )
}

export default HomeCustomers