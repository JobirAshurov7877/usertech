import './Home-customers.css'
import gifRobot from '../../assets/images/Home-image/robot.gif'
import { Link } from 'react-router-dom'
import HomeCustomersCard from './Home-customers-card'
const HomeCustomers = () => {
     const cardData = [
          {
               title:"Комплексное продвижение",
               path:"/",
               body:[
                    "SEO-продвижение",
                    "Содержание",
                    "SERM",
                    "Реклама в Яндекс.Директ",
                    "Геомаркетинг, продвижение в контекстном поиске",
                    "SMM – продвижение соц.сетей",
                    "Настройка таргетированной рекламы для SMM",
                    "UX, улучшение конверсии сайта"
               ]
          },
          {
               title:"Yandex direct",
               path:"/",
               body:[
                    "Настройка через Яндекс.Бизнес",
                    "Настройка через Яндекс.Директ",
                    "Подборка активных слов",
                    "Кампании на картах",
                    "Подборка изображений для РСЯ",
                    "Брендированная видеореклама",
                    "Смарт-баннеры",
                    "Настройка систем аналитики и отслеживание целей"
               ]
          },
          {
               title:"SMM/Таргет",
               path:"/",
               body:[
                    "Настройка через Mytarget",
                    "Настройка через ВК/FB/instagram",
                    "Персональная настройка под бизнес.",
                    "Создание сообществ",
                    "Подбор аудиторий, креативы, тексты объявлений",
                    "Размещение объявлений",
                    "Отслеживание эффективности кампании",
               ]
          },
     ]
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
     <div className="card-wrap">
          {cardData.map((item,i)=>(
               <div key={i} className='home-customers-card'>
               <div className="customers-card-head">
                    <h3 className='title'>{item.title}</h3>
                    <ul>
                        {
                         item.body.map((item,i)=>(
                              <li key={i}>{item}</li>
                         ))
                        }
                    </ul>
               </div>
               <div className="customers-card-btn">
                    <Link to={item.path}>Подробнее</Link>
               </div>

    </div>
          ))}
     </div>
    </div>
  )
}

export default HomeCustomers