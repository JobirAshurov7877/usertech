import './Studio-our-partners.css'
import StudioOurPartnersCard from './Studio-our-partners-card'
import brand_1 from '../../../assets/images/Studio-image/advapay.jpeg'
import brand_2 from '../../../assets/images/Studio-image/rostelecom.png'
import brand_3 from '../../../assets/images/Studio-image/garantex.png'
import brand_4 from '../../../assets/images/Studio-image/exmo.png'
import brand_5 from '../../../assets/images/Studio-image/megafon.jpg'
import brand_6 from '../../../assets/images/Studio-image/matchbok.jpeg'

const StudioOurPartners = () => {
     return (
          <div className='studio-our-partners'>
               <div className="section-container">
                    <h4 className="title">Наши партнеры</h4>
                    <div className="studio-our-partners-wrap">
                         <StudioOurPartnersCard brand={brand_1} />
                         <StudioOurPartnersCard brand={brand_2} />
                         <StudioOurPartnersCard brand={brand_3} />
                         <StudioOurPartnersCard brand={brand_4} />
                         <StudioOurPartnersCard brand={brand_5} />
                         <StudioOurPartnersCard brand={brand_6} />
                    </div>
               </div>
          </div>
     )
}

export default StudioOurPartners