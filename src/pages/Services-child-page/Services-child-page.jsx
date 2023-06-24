import { useContext, useEffect, useState } from "react";
import "./Services-child-page.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { LangContext } from "../../context/langContext";
import Layout from "../../components/Layout/Layout";
import { useTranslation } from "react-i18next";

const ServicesChildPage = () => {
  const { id } = useParams();
  const { changeLang, setchangeLang } = useContext(LangContext);
  const [menu_post_detail_data, setMenu_post_detail_data] = useState({});
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
          `https://api-usertech.ru/api/sayts/menu_post_deteile/${id}/`,
          config
        );

        setMenu_post_detail_data(response.data[0]);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [changeLang, id]);
  return (
    <Layout
      title={menu_post_detail_data?.title}
      link={`https://usertech.ru/menu_post_deteile/${id}/`}
      subtitle={menu_post_detail_data?.title}
      description={menu_post_detail_data?.content}
    >
      <div className="services-child-page">
        <div className="services-child-page-head">
          <div className="section-container">
            <div className="services-child-page-head-box">
              <div className="services-child-page-headBox_l">
                <h3 className="title">{menu_post_detail_data?.title}</h3>
                <div className="description">
                  <p
                    className="card-desc"
                    dangerouslySetInnerHTML={{
                      __html: menu_post_detail_data?.content,
                    }}
                  />
                </div>
                <div className="headBox_btn">
                  <Link to={"/contact"}>{t("Services_child_button")}</Link>
                </div>
              </div>
              <div className="services-child-page-headBox_r">
                <img src={menu_post_detail_data?.img} alt="img" />
              </div>
            </div>
          </div>
        </div>

        <div className="services-child-page-description">
          <div className="section-container">
            <div className="services-child-page-description-card">
              <div className="card-desc">
                <p
                  className="card-desc"
                  dangerouslySetInnerHTML={{
                    __html: menu_post_detail_data?.content_two,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServicesChildPage;
