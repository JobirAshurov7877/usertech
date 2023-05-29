import './Studio-our-partners.css'

const StudioOurPartnersCard = ({brand}) => {
     return (
          <div className='studio-our-partners-card'>
               <div className="partners-card">
                    <img src={brand} alt="brand" />
               </div>
          </div>
     )
}

export default StudioOurPartnersCard