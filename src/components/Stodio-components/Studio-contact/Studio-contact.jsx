import './Studio-contact.css'
import studio_contact_img from '../../../assets/images/Studio-image/Studio-contact-img.jpeg'
import { Link } from 'react-router-dom'

const StudioContact = () => {
  return (
    <div className='studio-contact'>
         <div className="section-container">
               <div className="element-container">
                    <div className="studio-contact-box-img">
                         <img src={studio_contact_img} alt="bg" />
                    </div>
                    <div className="studio-contact-box-text">
                         <h2 className="studio-contact-title">Мы цифровое агенство полного цикла</h2>
                         <p className="studio-contact-description">Нам доверяют аналитику, проектирование, дизайн и разработку любого уровня сложности</p>
                         <p className="studio-contact-button">
                              <Link>Есть проект ? Свяжись с нами</Link>
                         </p>
                         
                    </div>
               </div>
         </div>
    </div>
  )
}

export default StudioContact