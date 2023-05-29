import './Home-our-studio.css'
import table from '../../assets/images/Home-image/table.png'

const HomeOurStudio = () => {
  return (
    <div className='our-studio'>
       <div className="our-studio-element">
           <div className="container-head">
               <h3 className='title'>Принципы работы нашей студии</h3>
               <p>Принципы работы нашей студии</p>
               <p>Мы пообщаемся с вами и предложим решение, которое даст максимальный результат в ближайшее время. Не каждому бизнесу подходит SEO или нужен многостраничный сайт или web приложение.</p>
           </div>
           <div className="container-body">
               <img className='table' src={table} alt="table" /> 
           </div>
       </div>
    </div>
  )
}

export default HomeOurStudio