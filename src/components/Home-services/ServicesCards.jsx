import { Link } from 'react-router-dom'
import './Home-services.css'
import { HiOutlineArrowRight } from 'react-icons/hi';

const ServicesCards = ({category,title,body}) => {
     console.log(body)
  return (
    <div className='services-card'>
      <div className="card-header">
          <h3>{category}</h3>
          <h4>{title}</h4>
          <ul>
               {body.map((item,i)=>(
                    <li>{item}</li>
               ))}
          </ul>
      </div>
      <div className="services-card-path">
          <Link>Подробнее <HiOutlineArrowRight /></Link>
      </div>
    </div>
  )
}

export default ServicesCards
