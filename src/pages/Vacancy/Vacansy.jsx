import { Link, useParams } from "react-router-dom";
import "./Vacansy.css";
import { useContext, useEffect, useState } from "react";
import { LangContext } from "../../context/langContext";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Vacansy = () => {
  const { changeLang, setchangeLang } = useContext(LangContext);
  const [cardData, setCardData] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const getData = async () => {
      try {
        let config = {
          headers: {
            "Accept-Language": changeLang,
          },
        };
        const response = await axios.get(
          `https://api-usertech.ru/api/sayts/vacansy_all_site_views/`,
          config
        );
        console.log(response.data);
        setCardData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [changeLang]);
  return (
    <div className="vacancy">
      <div className="section-container">
        <div className="vacancy-head">
          <h2 className="vacancy-head-title">{t("Jobs.title")}</h2>
          <p className="desc">{t("Jobs.content")}</p>
        </div>
        <div className="vacancy-card-wrapper">
          {cardData.map((item) => (
            <div key={item?.id} className="vacancy-card">
              <div className="card-head">
                <h4 className="card-title">{item.title}</h4>
                <p dangerouslySetInnerHTML={{ __html: item?.content }} />
              </div>
              <div className="card-link_btn">
                <Link to={'/contact'}>{t("Jobs.button")}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vacansy;
