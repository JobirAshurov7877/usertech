import "./Footer.css";
import logo from "../../assets/images/Home-image/Logo_light.png";
import { Link } from "react-router-dom";
import cnLang from "../../assets/images/Home-image/zh-CN.png";
import engLang from "../../assets/images/Home-image/en.png";
import ruLang from "../../assets/images/Home-image/ru.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-element">
        <div className="element-container">
          <div className="footer_box_l">
            <div className="navs-box">
              <div className="logo">
                <img src={logo} alt="logo" />
              </div>
              <ul className="footer-nav-menu">
                <li className="footer-nav-link">
                  <Link>Главная</Link>
                </li>
                <li className="footer-nav-link">
                  <Link>Студия</Link>
                </li>
                <li className="footer-nav-link">
                  <Link>Услуги</Link>
                </li>
                <li className="footer-nav-link">
                  <Link>Блог</Link>
                </li>
                <li className="footer-nav-link">
                  <Link>Вакансии</Link>
                </li>
              </ul>

              <div className="language">
                <div className="box">
                  <img src={cnLang} alt="" />
                </div>
                <div className="box">
                  <img src={engLang} alt="" />
                </div>
                <div className="box">
                  <img src={ruLang} alt="" />
                </div>
              </div>
            </div>
            <div className="footer-description">
              <p>
                Мы занимаемся разработкой веб-сайтов для России и зарубежных
                рынков с 2010 года. Наша команда – более пятидесяти сотрудников
                в разных странах и городах.
              </p>
            </div>
          </div>
          <div className="footer_box_r">
            <div className="footer_box_r__wrapper">
              <h4 className="phone-number">
                <a href="">+79997103995</a>
              </h4>
              <p className="location">191119, город Санкт-Петербург, Социалистическая 21</p>
              <p className="mail">
              <a href="">e-mail : usertech78@ya.ru</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
