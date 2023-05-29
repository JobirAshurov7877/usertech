import './Home-our-suggestions.css'
import OurSuggestionsCard from './Our-suggestions-card'

const HomeOurSuggestions = () => {
  return (
    <div className='our-suggestions'>
      <div className="our-suggestions-element">
        <h3 className="title">Будем честны с Вами</h3>
        <div className="cardBox">
        <OurSuggestionsCard  cardTitle={"Мы не сделаем плохой сайт"} description={"Под оффером: на 7 дней за 19900 рублей"}/>
        <OurSuggestionsCard  cardTitle={"Мы не будем продавать вместо вас по заявкам"} description={"Мы выстраиваем систему, а перезванивать по заявкам это уже на ваших плечах"}/>
        <OurSuggestionsCard  cardTitle={"Мы не делаем шаблонные сайты за 1 день "} description={"Мы создаем с нуля авторский продукт под вас"}/>
        <OurSuggestionsCard  cardTitle={"Если для вас важна цена, а не результат"} description={"Вам лучше искать разработчиков в другом месте "}/>
        <OurSuggestionsCard  cardTitle={"Мы делаем продукт,который приносит Вам прибыль"} description={"Под оффером: на 7 дней за 19900 рублей"}/>
        <OurSuggestionsCard  cardTitle={"Нам не к чему повышать чек из-за бесполезных рейтингов4"} description={"Мы не гонимся за наградами желтой прессы ,а работаем на результат "}/>
        </div>
      </div>
    </div>
  )
}

export default HomeOurSuggestions