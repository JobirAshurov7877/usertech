import "./Footer.css";
import logo from "../../assets/images/Home-image/Logo_light.png";
import { Link, useLocation } from "react-router-dom";
import cnLang from "../../assets/images/Home-image/zh-CN.png";
import engLang from "../../assets/images/Home-image/en.png";
import ruLang from "../../assets/images/Home-image/ru.png";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookie from "js-cookie";
import { useContext } from "react";
import { LangContext } from "../../context/langContext";
const language = [
  {
    code: "ru",
    name: "Russian",
    country_code: "ru",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },

  {
    code: "zh-hant",
    name: "China",
    country_code: "zh-hant",
  },
];

const Footer = () => {
  const { changeLang, setchangeLang } = useContext(LangContext);
  const currentLanguageCode = cookie.get("i18next") || "ru";
  const currentLanguage = language.find((l) => l.code === currentLanguageCode);

  const location = useLocation();

  const { t } = useTranslation();
  return (
    location.pathname !== "/sitemap.xml" && (
      <footer className="footer">
        <div className="footer-element">
          <div className="element-container">
            <div className="footer_box_l">
              <div className="navs-box">
                <div className="logo">
                  <Link to={"/"}>
                    <img src={logo} alt="logo" />
                  </Link>
                </div>
                <ul className="footer-nav-menu">
                  <li className="footer-nav-link">
                    <Link to={"/"}>{t("navbar.home")}</Link>
                  </li>
                  <li className="footer-nav-link">
                    <Link to={"/studio"}>{t("navbar.studio")}</Link>
                  </li>
                  <li className="footer-nav-link">
                    <Link to={"/services"}>{t("navbar.services")}</Link>
                  </li>
                  <li className="footer-nav-link">
                    <Link to={"/blog"}>{t("navbar.blog")}</Link>
                  </li>
                  <li className="footer-nav-link">
                    <Link to={"/jobs"}>{t("navbar.jobs")}</Link>
                  </li>
                </ul>

                <div className="language">
                  <div
                    className="box"
                    onClick={() => {
                      i18next.changeLanguage("cn");
                      localStorage.setItem("lang", "zh-hant");
                      setchangeLang(localStorage.getItem("lang"));
                    }}
                  >
                    <img src={cnLang} alt="" />
                  </div>
                  <div
                    className="box"
                    onClick={() => {
                      i18next.changeLanguage("en");
                      localStorage.setItem("lang", "en");
                      setchangeLang(localStorage.getItem("lang"));
                    }}
                  >
                    <img src={engLang} alt="" />
                  </div>
                  <div
                    className="box"
                    onClick={() => {
                      i18next.changeLanguage("ru");
                      localStorage.setItem("lang", "ru");
                      setchangeLang(localStorage.getItem("lang"));
                    }}
                  >
                    <img src={ruLang} alt="" />
                  </div>
                </div>
              </div>
              <div className="footer-description">
                <p>{t("footer.description")}</p>
              </div>
            </div>
            <div className="footer_box_r">
              <div className="footer_box_r__wrapper">
                <h4 className="phone-number">
                  <a href="">+79997103995</a>
                </h4>
                <p className="location">{t("footer.address")}</p>
                <p>
                  <Link to={"/polisy"}>Политика конфиденциальности</Link>
                </p>
                <br />
                <p className="mail">
                  <a href="">{t("footer.email")}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  );
};

export default Footer;
