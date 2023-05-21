import './Home-partners.css'
import radioCheck from '../../assets/images/Home-image/radio-check.png'

const HomePartners = () => {
  return (
    <div className='partners'>
      <div className="partners-element">
        <div className="element-container">
           <div className="partners-box_l">
            <h3>Чем мы можем быть Вам полезны?</h3>
            <h2>95% </h2>
            <h3>наших клиентов окупают услуги уже в первый месяц работы</h3>
           </div>
           <div className="partners-box_r">
            <h5>Разрабатываем веб и мобильные приложения, проводим эффективные маркетинговые кампании. <br /> Как разобраться во всем многообразии услуг и понять какой именно набор нужен именно Вам? Давайте начнем с разработки концепции!</h5>
            <h2 style={{color:'#9F9F9F'}}>5%</h2>
            <h4 style={{color:'#9F9F9F'}}>клиенты, которые заказывали услуги и не внедряли наши рекомендации</h4>
           </div>
        </div>
        <div className="partners-widget">
           <div className="box">
            <img src={radioCheck} alt="" />
            <p>Разработка приложений</p>
           </div>
           <div className="box">
            <img src={radioCheck} alt="" />
            <p>Influence-маркетинг</p>
           </div>
           <div className="box">
            <img src={radioCheck} alt="" />
            <p>Криптовалюты и блокчейн</p>
           </div>
           <div className="box">
            <img src={radioCheck} alt="" />
            <p>PR и медиа</p>
           </div>
           <div className="box">
            <img src={radioCheck} alt="" />
            <p>Web3 и DeFi платформы</p>
           </div>
           <div className="box">
            <img src={radioCheck} alt="" />
            <p>Управление сообществами</p>
           </div>
        </div>
      </div>
    </div>
  )
}

export default HomePartners