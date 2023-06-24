import { Link } from 'react-router-dom'
import './Services-page-card'


const ServicesPageCard = ({image,card_title,card_desc}) => {
 
  return (
    <div className='services-page-card'>
        <div className="card-head">
          <img src={image} alt="cardimg" />
        </div>
        <div className="card-body">
          <h4 className="title">{card_title}</h4>
          <p className="desc">{card_desc}</p>
        </div>
        <div className="card-link">
          <Link to={'/'}>Узнать подробнее</Link>
        </div>
    </div>
  )
}

export default ServicesPageCard