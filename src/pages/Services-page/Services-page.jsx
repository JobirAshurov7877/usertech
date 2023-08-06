import "./Services-page.css";
import { Link } from "react-router-dom";
import image from "../../assets/images/Services-image/services-contact.png";
import { useContext, useEffect } from "react";
import { LangContext } from "../../context/langContext";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useState } from "react";

const ServicesPage = () => {
  const { t } = useTranslation();
  const { changeLang, setchangeLang } = useContext(LangContext);
  const [services, setsServices] = useState([]);

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

        setsServices(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [changeLang]);
  return (
    <div className="services-page">
      <div className="section-container">
        <div className="services-page-head">
          <h3 className="title">{t("Services.title")}</h3>
          <p>{t("Services.content")}</p>
        </div>
        <div className="services-page-cards">
          <div
            className="cardBox"
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "40px",
              marginBottom: "40px",
            }}
          >
            {services?.map((item, i) => (
              <div className="services-page-card">
                <div className="card-head">
                  <img src={item?.img} alt="img" />
                </div>
                <h4 className="card-title">{item?.name}</h4>
                <div className="card-content">
                  <p
                    className="card-desc"
                    dangerouslySetInnerHTML={{
                      __html: item?.content,
                    }}
                  />
                </div>
                <Link
                  to={`/services/sub_menu/${item.id}`}
                  className="card_link"
                >
                  {t("Services.button_card")}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="services-contact">
          <div className="services-contact-container">
            <div className="services-contact-box-l">
              <img src={image} alt="" />
            </div>
            <div className="services-contact-box-r">
              <h3 className="services-contact-title">
                {t("Services.services_contact.title")}
              </h3>
              <p>{t("Services.services_contact.content")}</p>
              <Link className="contact-link" to={"/"}>
                Е{t("Services.services_contact.button")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
