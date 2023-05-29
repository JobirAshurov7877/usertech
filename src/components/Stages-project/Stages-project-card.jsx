import './Stages-project.css'

const StagesProjectCard = ({title, description}) => {
  return (
     <div className="card">
       <h2 className="card-title">{title}</h2>
       <div className="description">
         <p>
           {description}
         </p>
       </div>
     </div>
  )
}

export default StagesProjectCard