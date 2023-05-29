import './Studio-services.css'

const StudioServicesCard = ({icon,title,description}) => {
     return (
          <div className="studio-services-card">
               <div className="card-head">
                    <div className="card-head-box">
                         <img src={icon} alt="icon" />
                    </div>
                    <h4 className="card-body-title">{title}</h4>
               </div>
               <div className="card-body">
                    <p className="card-body-description">{description}</p>
               </div>
          </div>
     )
}

export default StudioServicesCard