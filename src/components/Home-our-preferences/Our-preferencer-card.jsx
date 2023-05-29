import './Home-our-preferences.css'
import line from '../../assets/images/Home-image/Line 14.png'
const OurPreferencerCard = ({image,text}) => {
  return (
    <div className='card' >
      <div className="card-box_l">
          <img src={image} alt="img" />
      </div>
      <div className="card-box_r">
          <div className="card-content">
               <p>{text}</p>
               <img src={line} alt="" className="line" />
          </div>
      </div>
    </div>
  )
}

export default OurPreferencerCard