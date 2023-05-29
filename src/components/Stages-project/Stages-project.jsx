import StagesProjectCard from './Stages-project-card'
import './Stages-project.css'
import gifRobot from '../../assets/images/Home-image/robot.gif'

const StageProject = () => {
  return (
    <div className="stagesProject">
      <div className="stagesProject-element">
        <div className="element-container">
          <div className="stagesProject-box_l">
            <div className="title">Этапы развития Вашего проекта</div>
            <div className="box">
              <StagesProjectCard title={'Этап 1'}  description={"Изучаем ваше ТЗ или помогаем вас его составить. Анализируем группу в среднем сегменте. Определяем целевую аудиторию сайта."} />
              <StagesProjectCard title={'Этап 2'} description={"Разработка структуры и дизайна сайта в онлайн-режиме. Отрисовка дизайнерами адаптивных версий сайта. Согласование дизайн-макета с заказчиком."}/>
              <StagesProjectCard title={'Этап 3'}  description={"Верстка макетов дизайна с учетом SEO. Адаптация верстки под все платформы. Тестирование верстки. Согласование с заказчиком."} />
              <StagesProjectCard title={'Этап 4'} description={"Натяжка вёрстки на систему CMS. Программирование сайта и создание функционала. настройка и тестирование функционала сайта."}/>
              <StagesProjectCard title={'Этап 5'}  description={"Наполнение сайта контентом. Базовая SEO оптимизация сайта. Размещение сайта на Хостинг."} />
              <StagesProjectCard title={'Этап 6'}  description={"Поддержка сайта.Запуск и сопровждение рекламы для привлечения клиентов."}/>
            </div>
          </div>
          <div className="stagesProject-box_r">
            <img src={gifRobot} alt="img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StageProject