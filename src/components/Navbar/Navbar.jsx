import "./Navbar.css";
import logo from "../../assets/images/Home-image/logo.png";
import { Link, useLocation } from "react-router-dom";
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
import arrovImg from "../../assets/images/Home-image/arrow-more.svg";
import item_1_icon from "../../assets/images/Home-image/service-intro-icon-1.svg";

import axios from "axios";
import { LangContext } from "../../context/langContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

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

const Navbar = () => {
  const [menuBarsToggle, setMenuBarsToggle] = useState(false);
  const currentLanguageCode = cookie.get("i18next") || "ru";
  const currentLanguage = language.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();
  const [sevvicesMenu, setSevvicesMenu] = useState([]);
  const location = useLocation();
  const [servicesShow, setServicesShow] = useState(false);
  const [studioShow, setStudioShow] = useState(false);

  const { changeLang, setchangeLang } = useContext(LangContext);

  function getRandomColor() {
    const colors = [
      "#017BFF",
      "#FFCB26",
      "#00B535",
      "#61ADB0",
      "#D3B687",
      "#C17CB3",
      "#4C3ABD",
      "#D93B29",
      "#C17CB3",
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

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

        const updatedItems = response?.data?.map((item) => ({
          ...item,
          bgColor: getRandomColor(),
        }));
        setSevvicesMenu(updatedItems);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [changeLang]);

  return (
    location.pathname !== "/sitemap.xml" && (
      <>
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
                    <li
                      className="nav-link"
                      onClick={() => setMenuBarsToggle(false)}
                    >
                      <Link to={"/"}>{t("navbar.home")}</Link>
                    </li>

                    <li className="nav-link dropdown-box">
                      <div
                        className="link_icon"
                        style={{
                          alignItems: "center",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                        onClick={() => setStudioShow((prev) => !prev)}
                      >
                        <Link
                          to={"/studio"}
                          onClick={() => setMenuBarsToggle(false)}
                        >
                          {t("navbar.studio")}
                        </Link>
                        <RiArrowDropDownLine className="dropdown-icon" />
                      </div>

                      <ul
                        className={`dropdown-menu ${
                          studioShow ? "active" : "no_active"
                        }`}
                        // style={{ display: `${studioShow ? "flex" : "none"}` }}
                      >
                        <li
                          className="dropdown-link"
                          onClick={() => setMenuBarsToggle(false)}
                        >
                          <Link to={"/algoritm-job"}>
                            {t("navbar.work_algorithm")}
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-link dropdown-box">
                      <div
                        onClick={() => {
                          setServicesShow((prev) => !prev);
                        }}
                        style={{
                          alignItems: "center",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                        className="link_icon"
                      >
                        <Link
                          to={"/services"}
                          onClick={() => setMenuBarsToggle(false)}
                        >
                          {t("navbar.services")}
                        </Link>
                        <RiArrowDropDownLine className="dropdown-icon" />
                      </div>

                      <ul
                        style={{}}
                        className={`dropdown-menu ${
                          servicesShow ? "active" : "no_active"
                        } `}
                        onClick={() => setMenuBarsToggle(false)}
                      >
                        {sevvicesMenu.map((item) => (
                          <li>
                            <Link to={`/services/sub_menu/${item.id}`}>
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li
                      className="nav-link"
                      onClick={() => setMenuBarsToggle(false)}
                    >
                      <Link to={"/blog"}> {t("navbar.blog")}</Link>
                    </li>
                    <li
                      className="nav-link"
                      onClick={() => setMenuBarsToggle(false)}
                    >
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
                        setchangeLang(localStorage.getItem("lang"));
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
        <div className="slider_nav">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
            }}
            className="mySwiper"
          >
            {sevvicesMenu.map((item) => (
              <SwiperSlide>
                <Link to={`/services/sub_menu/${item.id}`}>
                  <div
                    className="intro__slider-slide"
                    style={{ backgroundColor: `${item.bgColor}` }}
                  >
                    <h3 className="intro__slide-title">
                      <span>
                        <img src={item.img} alt="icon" />
                      </span>
                      {item?.name}
                    </h3>
                    <div className="intro__slide-text">
                      <p
                        className="card-desc"
                        dangerouslySetInnerHTML={{
                          __html: item?.content.slice(0, 200),
                        }}
                      />
                    </div>
                    <div className="intro__slide-row">
                      <a
                        href="uslugi_internetservisy"
                        className="services__item-btn"
                      >
                        <img src={arrovImg} alt="img" />
                      </a>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </>
    )
  );
};

export default Navbar;
