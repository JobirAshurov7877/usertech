import { useContext, useEffect, useState } from "react";
import "./Services-datail-card.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { LangContext } from "../../context/langContext";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "../../components/Layout/Layout";
import { Pagination } from "@mui/material";
import { useTranslation } from "react-i18next";

const ServicesDetailCard = () => {
  const { id } = useParams();
  const { changeLang, setchangeLang } = useContext(LangContext);
  const [cardData, setCardData] = useState([]);
  const [page, setPage] = useState(0);
  const [pageId, setPageId] = useState(1);
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
          `https://api-usertech.ru/api/sayts/sub_menu_deteiles_views/${id}/?page=${pageId}`,
          config
        );
        setPage(response.data.count);
        setCardData(response.data.results.reverse());
        console.log(cardData);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    AOS.init();
    getData();
  }, [changeLang, id, pageId]);
  return (
    <Layout title={cardData[0]?.id_menu?.name}>
      <div className="services-child">
        <div className="section-container">
          <div className="services-child-head">
            <h3 className="title">{t("Services_detail.title")}</h3>
            <p>={t("Services_detail.content")}</p>
          </div>
          <div className="services-child-card-wrapper">
            {cardData.map((item, index) => (
              <div
                className="services-child-card"
                data-aos="fade-right"
                data-aos-offset={40}
                data-aos-easing="ease-in-sine"
              >
                <div className="card-head">
                  <h4 className="card-title">{item.title}</h4>
                  <p
                    className="card-content"
                    dangerouslySetInnerHTML={{
                      __html: item?.content.slice(0, 112),
                    }}
                  />
                  ..
                </div>
                <div className="card-link_btn">
                  <Link to={`/services/menu_post_deteile/${item.id}/`}>
                  {t("Services_detail.button")}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Pagination
          count={Math.floor(page / 9) + 1}
          onChange={(e, value) => setPageId(value)}
          variant="outlined"
          color="primary"
          sx={{ display: "flex", justifyContent: "end", marginTop: "40px" }}
        />
      </div>
    </Layout>
  );
};

export default ServicesDetailCard;
