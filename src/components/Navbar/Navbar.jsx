import "./Navbar.css";
import logo from "../../assets/images/Home-image/logo.png";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaRegWindowClose, FaBars } from "react-icons/fa";
import cnLang from "../../assets/images/Home-image/zh-CN.png";
import engLang from "../../assets/images/Home-image/en.png";
import ruLang from "../../assets/images/Home-image/ru.png";
import { useContext, useState } from "react";
import React, { useEffect } from "react";
import i18next from "i18next";
import cookie from "js-cookie";
import { useTranslation } from "react-i18next";

import axios from "axios";
import { LangContext } from "../../context/langContext";
const language = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },

  {
    code: "ru",
    name: "Russian",
    country_code: "ru",
  },
  {
    code: "zh-hant",
    name: "China",
    country_code: "zh-hant",
  },
];

const Navbar = () => {
  const [menuBarsToggle, setMenuBarsToggle] = useState(false);
  const currentLanguageCode = cookie.get("i18next") || "en";
  const currentLanguage = language.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();
  const [sevvicesMenu, setSevvicesMenu] = useState([]);

  const { changeLang, setchangeLang } = useContext(LangContext);

  useEffect(() => {
    const getData = async () => {
      try {
        let config = {
          headers: {
            "Accept-Language": changeLang,
          },
        };
        const response = await axios.get(
          "https://api-usertech.ru/api/sayts/sub_menu_all_views_sayts/",
          config
        );

        setSevvicesMenu(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [changeLang]);

  return (
    <nav className="navbar">
      <div className="navbar-element">
        <div className="element-container">
          <div className="element-wrap">
            <div className="logo">
              <Link to={"/"}>
                <img src={logo} alt="Logo" />
              </Link>
            </div>
            <div
              className="menu-bars"
              onClick={() => setMenuBarsToggle((prev) => !prev)}
            >
              {menuBarsToggle ? (
                <FaRegWindowClose className="toggle-icon" />
              ) : (
                <FaBars className="toggle-icon" />
              )}
            </div>
            <div className="nav-link-box">
              <ul className={`nav-menu ${menuBarsToggle ? " " : "hidden"}`}>
                <li className="nav-link">
                  <Link to={"/"}>{t("navbar.home")}</Link>
                </li>
                <li className="nav-link dropdown-box">
                  <Link to={"/studio"}>
                    {t("navbar.studio")}
                    <RiArrowDropDownLine className="dropdown-icon" />
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="dropdown-link">
                      <Link to={"/algoritm-job"}>
                        {t("navbar.work_algorithm")}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-link dropdown-box">
                  <Link to={"/services"}>
                    {t("navbar.services")}
                    <RiArrowDropDownLine className="dropdown-icon" />
                  </Link>

                  <ul className="dropdown-menu">
                    {sevvicesMenu.map((item) => (
                      <li>
                        <Link to={`/services/sub_menu/${item.id}`}>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="nav-link">
                  <Link to={"/blog"}> {t("navbar.blog")}</Link>
                </li>
                <li className="nav-link">
                  <Link to={"/jobs"}> {t("navbar.jobs")}</Link>
                </li>
              </ul>
            </div>
            {/* <Language /> */}

            <div className="language">
              <div className="box">
                <img
                  src={cnLang}
                  alt=""
                  onClick={() => {
                    i18next.changeLanguage("cn");
                    localStorage.setItem("lang", "zh-hant");
                    setchangeLang(localStorage.getItem("lang"));
                  }}
                />
              </div>
              <div className="box">
                <img
                  src={engLang}
                  alt=""
                  onClick={() => {
                    i18next.changeLanguage("en");
                    localStorage.setItem("lang", "en");
                    setchangeLang(localStorage.getItem("lang"));
                  }}
                />
              </div>
              <div className="box">
                <img
                  src={ruLang}
                  alt=""
                  onClick={() => {
                    i18next.changeLanguage("ru");
                    localStorage.setItem("lang", "ru");
                    setchangeLang(localStorage.getItem("lang"))
                  }}
                />
              </div>
            </div>

            <div className="contact">
              <div className="contact-btn">
                <Link to={"/contact"}>{t("navbar.contact")}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
