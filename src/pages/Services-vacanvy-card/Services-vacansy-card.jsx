import "./Services-vacanvy-card.css";
import { Link, useParams } from "react-router-dom";

const ServicesVacansyCard = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="services-child">
      <div className="section-container">
        <div className="services-child-head">
          <h3 className="title">Услуги и цены по созданию сайтов</h3>
          <p>
            Вы можете выбрать как отдельные работы по созданию сайта, так и
            комплексные пакеты, где мы выполняем все необходимые работы под
            ключ. Если не знаете, с чего начать – спросите нашего специалиста,
            это бесплатно!
          </p>
        </div>
        <div className="services-child-card-wrapper">
          {[1, 2, 3, 4, 5].map((item) => (
            <div className="services-child-card">
              <div className="card-head">
                <h4 className="card-title">
                  Разработка сайтов образовательных учреждений
                </h4>
                <p className="card-content">
                  Создаем и развиваем электронные издания, корпоративные блоги,
                  общественные сайты и другие проекты с большими объемами
                  информации. Интегрируем сторонние источники.
                </p>
              </div>
              <div className="card-link_btn">
                <Link to={"/services/landing-page-v-spb"}>Подробнее</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesVacansyCard;
