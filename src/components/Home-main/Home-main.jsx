import { Link } from 'react-router-dom'
import './Home-main.css'
import gifRobot from '../../assets/images/Home-image/robot.gif'
import  line_top  from '../../assets/images/Home-image/line_top.png'
import  line_bottom  from '../../assets/images/Home-image/line-bottom.png'
import { useTranslation } from 'react-i18next'
 
const HomeMain = () => {
     const {t} = useTranslation()

  return (
    <div className='home-main'>
       <div className="main-element">
          <div className="element-container">
               <div className="main-text-box">
                    <div className="text-box-header">
                         <h1>{t("Home.Home-main.title")}</h1>
                         <h2>{t("Home.Home-main.description")}</h2>
                    </div>
                    <div className="text-box-button">
                         <Link to={'/services'}>{t("Home.Home-main.btn")}</Link>
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
                         <h3>{t("Home.Home-main.main-bottom-card.0.title")}</h3>
                    </div>
                    <div className="desc">
                         <p>
                         {t("Home.Home-main.main-bottom-card.0.desc")}
                         </p>
                    </div>
               </div>
               <div className="main-widget-box">
                    <div className="title">
                         <h3>{t("Home.Home-main.main-bottom-card.1.title")}</h3>
                    </div>
                    <div className="desc">
                         <p>
                         {t("Home.Home-main.main-bottom-card.1.desc")}
                         </p>
                    </div>
               </div>
               <div className="main-widget-box">
                    <div className="title">
                         <h3>{t("Home.Home-main.main-bottom-card.2.title")}</h3>
                    </div>
                    <div className="desc">
                         <p>
                         {t("Home.Home-main.main-bottom-card.2.desc")}
                         </p>
                    </div>
               </div>
               <div className="main-widget-box">
                    <div className="title">
                         <h3>{t("Home.Home-main.main-bottom-card.3.title")}</h3>
                    </div>
                    <div className="desc">
                         <p>
                         {t("Home.Home-main.main-bottom-card.3.desc")}
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