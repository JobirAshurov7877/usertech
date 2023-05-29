import './Home-our-suggestions.css'
import radioImg from '../../assets/images/Home-image/radio-check.png'

const OurSuggestionsCard = ({cardTitle,description}) => {
  return (
    <div className='our-suggestions-card'>
         <div className="card-head">
          <img src={radioImg} alt="" />
             <h5>{cardTitle}</h5>
         </div>
         <div className="card-body">
            <p>{description}</p>
         </div>
    </div>
  )
}

export default OurSuggestionsCard