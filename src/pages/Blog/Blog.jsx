import { useContext, useEffect, useState } from "react";
import "./Blog.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { LangContext } from "../../context/langContext";
import { Pagination } from "@mui/material";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const { id } = useParams();
  const { changeLang, setchangeLang } = useContext(LangContext);
  const [blogCardData, setBlogCardData] = useState([]);
  const [page, setPage] = useState(0);
  const [pageId, setPageId] = useState(1);
  const { t } = useTranslation();

  const getData = async () => {
    try {
      let config = {
        headers: {
          "Accept-Language": changeLang,
        },
      };
      const response = await axios.get(
        `https://api-usertech.ru/api/sayts/post_all_sites_views/?page=${pageId}`,
        config
      );
      setPage(response.data.count);
      setBlogCardData(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [changeLang, id, pageId]);


  return (
    <div className="blog">
      <div className="section-container">
        <div className="blog-cards-wrap">
          {blogCardData.map((item) => (
            <div className="blog-card">
              <div className="card-head">
                <img src={item?.img} alt="blogImg" />
              </div>
              <div className="card-content">
                <h5>Blog news usertech</h5>

                <h3 className="card-title">{item?.title}</h3>

                <p
                  className="card-desc"
                  dangerouslySetInnerHTML={{
                    __html: item?.content.slice(0, 60),
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
      <Pagination
        count={Math.floor(page / 9) + 1}
        onChange={(e, value) => setPageId(value)}
        variant="outlined"
        color="primary"
        sx={{display:'flex', justifyContent:'end', marginTop:"40px"}}
      />
    </div>
  );
};

export default Blog;
