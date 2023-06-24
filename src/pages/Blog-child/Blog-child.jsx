import { Link, useParams } from "react-router-dom";
import "./Blog-child.css";
import { useContext, useEffect, useState } from "react";
import { LangContext } from "../../context/langContext";
import axios from "axios";
import Layout from "../../components/Layout/Layout";
import { useTranslation } from "react-i18next";

const BlogChild = () => {
  const { id } = useParams();
  const { changeLang, setchangeLang } = useContext(LangContext);
  const [blogDetailCardData, setBlogDetailCardData] = useState([]);
  const [blogDetailBottomCardData, setBlogDetailBottomCardData] = useState([]);
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
          `https://api-usertech.ru/api/sayts/post_deteile_sites_views/${id}/`,
          config
        );
        setBlogDetailCardData(response.data[0]);
      } catch (error) {
        console.log(error);
      }

      try {
        let config = {
          headers: {
            "Accept-Language": changeLang,
          },
        };
        const response = await axios.get(
          `https://api-usertech.ru/api/sayts/post_all_sites_views/`,
          config
        );
        setBlogDetailBottomCardData(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [changeLang, id]);
  return (
    <Layout title={blogDetailCardData.title}>
      <div className="blog-child">
        <div className="section-container">
          <div className="blog-child-head">
            <img src={blogDetailCardData?.img} alt="" />
          </div>
          <div className="blog-child-content">
            <p
              className="card-desc"
              dangerouslySetInnerHTML={{
                __html: blogDetailCardData?.content,
              }}
            />
          </div>
          <div className="blog-child-cards">
            <div className="blog-cards-wrap">
              {blogDetailBottomCardData?.slice(0, 3).map((item) => (
                <div className="blog-card">
                  <div className="card-head">
                    <img src={item?.img} alt="blog-bottom-card-img" />
                  </div>
                  <div className="card-content">
                  <h5>{t("Blog.h5")}</h5>

                    <h3 className="card-title">{item?.title}</h3>

                    <p
                      className="card-desc"
                      dangerouslySetInnerHTML={{
                        __html: item?.content?.slice(0, 60),
                      }}
                    />
                  </div>
                  <div className="card-btn">
                    <Link to={`/blog-detail/${item?.id}`}>{t("Blog.button")}</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </Layout>
  );
};

export default BlogChild;
