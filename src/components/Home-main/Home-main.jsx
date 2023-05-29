import { Link } from 'react-router-dom'
import './Home-main.css'
import gifRobot from '../../assets/images/Home-image/robot.gif'
import  line_top  from '../../assets/images/Home-image/line_top.png'
import  line_bottom  from '../../assets/images/Home-image/line-bottom.png'

const HomeMain = () => {
  return (
    <div className='home-main'>
       <div className="main-element">
          <div className="element-container">
               <div className="main-text-box">
                    <div className="text-box-header">
                         <h1>Сайт для вашего бизнеса под ключ</h1>
                         <p>МЫ АГЕНСТВО ПОЛНОГО ЦИКЛА для IT продуктов. Создаем простые решения для сложных задач вашего проекта. Разработаем IT продукт, настроим рекламу и построем из этого стабильную систему по привлечению клиентов</p>
                    </div>
                    <div className="text-box-button">
                         <Link to={'/'}> Узнать подробнее</Link>
                    </div>
               </div>
               <div className="main-image-box">
                    <img src={gifRobot} alt="" />
               </div>
          </div>
          <div className="main-widget">
               <div className="line-top">
                    <img src={line_top} alt="" />
               </div>
               <div className="main-widget-box">
                    <div className="title">
                         <h3>1к+</h3>
                    </div>
                    <div className="desc">
                         <p>
                            Успешных проектов успели реализовать за все время
                         </p>
                    </div>
               </div>
               <div className="main-widget-box">
                    <div className="title">
                         <h3>более 13 лет</h3>
                    </div>
                    <div className="desc">
                         <p>
                         опыта разработки сервисов любой сложности
                         </p>
                    </div>
               </div>
               <div className="main-widget-box">
                    <div className="title">
                         <h3>более 200</h3>
                    </div>
                    <div className="desc">
                         <p>
                            постоянных клиентов
                         </p>
                    </div>
               </div>
               <div className="main-widget-box">
                    <div className="title">
                         <h3>100+</h3>
                    </div>
                    <div className="desc">
                         <p>
                         Успешных кейсов продвижений сайтов 
                         </p>
                    </div>
               </div>
               <div className="line-bottom">
                    <img src={line_bottom} alt="" />
               </div>
          </div>
       </div>
    </div>
  )
}

export default HomeMain