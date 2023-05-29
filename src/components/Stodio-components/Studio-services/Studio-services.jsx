import StudioServicesCard from './Studio-services-card'
import './Studio-services.css'
import web_dev_icon from '../../../assets/images/Studio-image/icon_1.png'
import promotion_icon from '../../../assets/images/Studio-image/icon_2.png'
import mobile_applications_icon from '../../../assets/images/Studio-image/icon_3.png'
import artificial_intelligence_icon from '../../../assets/images/Studio-image/icon_4.png'
import fintech_icon from '../../../assets/images/Studio-image/icon_5.png'

const StudioServices = () => {
  return (
    <div className='studio-services'>
        <div className="section-container">
             <div className="studio-services-wrapper">
                <StudioServicesCard icon={web_dev_icon} title={'Вэб-разработка'} description={'Заказав сайт под ключ у нас, вы получите мощный имиджевый и маркетинговый инструмент. Он повысит ваши продажи и легко продвинется в ТОП.'} 
                />
                
                <StudioServicesCard icon={promotion_icon} title={'Продвижение'} description={'Продвижение сайтов - комплекс работ по привлечению целевого трафика из органической (естественной) выдачи поисковых систем.'} />
                <StudioServicesCard icon={mobile_applications_icon} title={'Мобильные приложения'} description={'Разрабатываем гибридные и нативные мобильные приложения для платформ iOS, Android, Android Wear, watchOS, ipadOS, tvOS, macOS.'} />
                <StudioServicesCard icon={artificial_intelligence_icon} title={'Искусственный интеллект'} description={'Разрабатываем и настраиваем машинное обучение для автоматизации и оптимизации бизнес процессов'} />
                <StudioServicesCard icon={fintech_icon} title={'Финтеч'} description={'Разрабатываем финансовые WEB-сервисы для бизнеса или стартап проекты .'} />
             </div>
        </div>
    </div>
  )
}

export default StudioServices