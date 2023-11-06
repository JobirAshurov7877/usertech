import "./Home-studio-services.css";
import banner_1_rocket from "../../assets/images/Home-image/banner_1 rocket.png";
import banner_1_picture from "../../assets/images/Home-image/banner_1 picture.png";
import banner_1_diogram from "../../assets/images/Home-image/banner_1 diogram.png";
import banner_2_phone from "../../assets/images/Home-image/banner2_phone.png";
import banner_2_polygon from "../../assets/images/Home-image/Banner2_Polygon.png";

import banner_3_star from "../../assets/images/Home-image/Banner3_star.png";

import banner_4_device from "../../assets/images/Home-image/Banner4_device.png";
import banner_4_circe from "../../assets/images/Home-image/Banner4_circle.png";

import banner_5_polygons from "../../assets/images/Home-image/Banner5_poligons.png";
import banner_5_woman from "../../assets/images/Home-image/Banner5_happy_woman.png";
import banner_5_appStore from "../../assets/images/Home-image/Banner_5_Appstore.png";
import banner_5_Pmarket from "../../assets/images/Home-image/Banner_5Pmarket.png";

import banner_6_bitrix from "../../assets/images/Home-image/bitrix24.png";

import banner_yellow from "../../assets/images/Home-image/Banner_yellow_circle.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { data } from "./data.js";

const HomeStudioServices = () => {
  const { t } = useTranslation();
  return (
    <div className="home-studio-services">
      <div className="section-container">
        <div className="home-studio-services-wrapp">
          {/* banner 1*/}
          <div className="banner complex-web-services">
            <div className="box box__1">
              <div className="box__title">
                <Link to={"/services"}>
                  {t("home-studio-services.card1.title")}
                </Link>
              </div>
              <div className="box__content">
                <p>{t("home-studio-services.card1.title_ul")} </p>
                <ul>
                  {data["home-studio-services"].card1.sub_title_li.map(
                    (item, i) => (
                      <li key={i}>
                        {" "}
                        {t(`home-studio-services.card1.sub_title_li.${i}`)}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
            <div className="box">
              <p>{t("home-studio-services.card2.title")}</p>
              <img src={banner_1_rocket} alt="img" />
            </div>
            <div className="box">
              <img src={banner_1_picture} alt="img" />
            </div>
            <div className="box">
              <p>{t("home-studio-services.card3.title")}</p>
              <img src={banner_1_diogram} alt="img" />
            </div>
          </div>

          {/* Banner 2 */}
          <div className="banner online-shopping">
            <div className="box box__1">
              <div className="box__title">
                <Link to={"/services"}>
                  {t("home-studio-services.card4.title")}
                </Link>
              </div>
              <div className="box__content">
                <p>{t("home-studio-services.card4.title_ul")}</p>
                <ul>
                  {data["home-studio-services"].card4.sub_title_li.map(
                    (item, i) => (
                      <li key={i}>
                        {" "}
                        {t(`home-studio-services.card4.sub_title_li.${i}`)}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
            <div className="box">
              <p>{t("home-studio-services.card5.title")}</p>
              <img src={banner_2_phone} alt="img" />
            </div>
            <div className="box">
              <img src={banner_2_polygon} alt="img" />
            </div>
          </div>

          {/* Banner 3 */}
          <div className="banner corporate-website">
            <div className="box box__1">
              <div className="box__title">
                <Link to={"/services"}>
                  {t("home-studio-services.card6.title")}
                </Link>
              </div>
              <div className="box__content">
                <p>{t("home-studio-services.card6.title_ul")}</p>
                <ul>
                  {data["home-studio-services"].card6.sub_title_li.map(
                    (item, i) => (
                      <li key={i}>
                        {" "}
                        {t(`home-studio-services.card6.sub_title_li.${i}`)}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
            <div className="box">{t("home-studio-services.card7.title")}</div>
            <div className="box">
              <img src={banner_3_star} alt="img" />
            </div>
            <div className="box">
              <p>{t("home-studio-services.card8.title")}</p>
            </div>
          </div>

          {/* Banner 4 */}
          <div className="banner turnkey-landing">
            <div className="box box__1">
              <div className="box__title">
                <Link to={"/services"}>
                  {t("home-studio-services.card9.title")}
                </Link>
              </div>
              <div className="box__content">
                <p>{t("home-studio-services.card9.title")}</p>
                <ul>
                  {data["home-studio-services"].card9.sub_title_li.map(
                    (item, i) => (
                      <li key={i}>
                        {" "}
                        {t(`home-studio-services.card9.sub_title_li.${i}`)}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
            <div className="box">
              <p>{t("home-studio-services.card10.title")}</p>
              <img src={banner_4_device} alt="img" />
            </div>
            <div className="box">
              <img src={banner_4_circe} alt="img" />
            </div>
          </div>

          {/* Banner 5 */}
          <div className="banner applications">
            <div className="box box__1">
              <div className="box__title">
                <Link to={"/services"}>
                  {t("home-studio-services.card11.title")}
                </Link>
              </div>
              <div className="box__content">
                <p>{t("home-studio-services.card11.title_ul")}</p>
                <ul>
                  {data["home-studio-services"].card11.sub_title_li.map(
                    (item, i) => (
                      <li key={i}>
                        {" "}
                        {t(`home-studio-services.card11.sub_title_li.${i}`)}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
            <div className="box">
              <img src={banner_5_polygons} alt="" />
            </div>
            <div className="box">
              <p>{t("home-studio-services.card12.title")}</p>
              <img src={banner_5_woman} alt="img" />
            </div>
            <div className="box">
              <p>{t("home-studio-services.card13.title")}</p>
              <div className="images">
                <img className="app-store" src={banner_5_appStore} alt="img" />
                <img className="play-market" src={banner_5_Pmarket} alt="img" />
              </div>
            </div>
          </div>

          {/* Banner 6 */}
          <div className="banner cms">
            <div className="box box__1">
              <div className="box__title">
                <Link to={"/services"}>
                  {t("home-studio-services.card14.title")}
                </Link>
              </div>
              <div className="box__content">
                <ul>
                  {data["home-studio-services"].card14.sub_title_li.map(
                    (item, i) => (
                      <li key={i}>
                        {" "}
                        {t(`home-studio-services.card14.sub_title_li.${i}`)}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
            <div className="box">
              <div className="bitrix_image">
                <img src={banner_6_bitrix} alt="img" />
              </div>
            </div>
            <div className="box">
              <p>{t("home-studio-services.card15.title")}</p>
              <img src={banner_yellow} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeStudioServices;
