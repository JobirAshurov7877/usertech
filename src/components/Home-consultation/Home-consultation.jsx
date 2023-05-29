import HomeConsultationSlider from './Home-consultation-slider'
import './Home-consultation.css'

const HomeConsultation = () => {  
  return (
    <div className='consultation'>
      <div className="consultation-wrap">
        <div className="consultation-form_l">
          <div className="box">
            <div className="form-head">
              <h3 className="form-title">Получить консультацию</h3>
              <p>Оставьте заявку и в ближайшее время мы свяжемся с Вами</p>
            </div>
            <div className="form-body">
              <form action="">
                <p><input type="text" placeholder='Ваше имя' required /></p>
                <p><input type="text" placeholder='Ваш номер телефона' required /></p>
                <p><textarea placeholder='Ваш вопрос'></textarea></p>
                <p>
                  <div className="form-btn">
                    <input type="submit"  value="Получить консультацию"/>
                  </div>
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="consultation-slider_r">
        <HomeConsultationSlider />
        </div>
      </div>
    </div>
  )
}

export default HomeConsultation