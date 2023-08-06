import "./Home-popular-industries.css";
import card_img1 from "../../assets/images/Home-image/production 2.png";
import card_img2 from "../../assets/images/Home-image/social-media 2.png";
import card_img3 from "../../assets/images/Home-image/Group 1321314096.png";
import card_img4 from "../../assets/images/Home-image/Group 1321314097.png";
import card_img5 from "../../assets/images/Home-image/shopping-cart (2) 1 (1).png";
import card_img6 from "../../assets/images/Home-image/house 1.png";
import card_img7 from "../../assets/images/Home-image/tray 1 (1).png";
import card_img8 from "../../assets/images/Home-image/attorney 1.png";
import card_img9 from "../../assets/images/Home-image/flight 1.png";
import card_img10 from "../../assets/images/Home-image/healthcare (1) 1.png";
import card_img11 from "../../assets/images/Home-image/shopping-cart (1) 1.png";
import card_img12 from "../../assets/images/Home-image/online-learning 1.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const HomePopularIndustries = () => {
  const { t } = useTranslation();
  const [content_l, setcontent_l] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const images = [
    { text: t("homePopularIndustries_title.icon_text.0"), img: card_img1 },
    { text: t("homePopularIndustries_title.icon_text.1"), img: card_img2 },
    { text: t("homePopularIndustries_title.icon_text.2"), img: card_img3 },
    { text: t("homePopularIndustries_title.icon_text.3"), img: card_img4 },
    { text: t("homePopularIndustries_title.icon_text.4"), img: card_img5 },
    { text: t("homePopularIndustries_title.icon_text.5"), img: card_img6 },
    { text: t("homePopularIndustries_title.icon_text.6"), img: card_img7 },
    { text: t("homePopularIndustries_title.icon_text.7"), img: card_img8 },
    { text: t("homePopularIndustries_title.icon_text.8"), img: card_img9 },
    {
      text: t("homePopularIndustries_title.icon_text.9"),
      img: card_img10,
    },
    { text: t("homePopularIndustries_title.icon_text.10"), img: card_img11 },
    {
      text: t("homePopularIndustries_title.icon_text.11"),
      img: card_img12,
    },
  ];

  const content = [
    { text: t("homePopularIndustries_title.text_1"), id: 1 },
    { text: t("homePopularIndustries_title.text_2"), id: 2 },
    { text: t("homePopularIndustries_title.text_3"), id: 3 },
    { text: t("homePopularIndustries_title.text_4"), id: 4 },
    { text: t("homePopularIndustries_title.text_5"), id: 5 },
    { text: t("homePopularIndustries_title.text_6"), id: 6 },
    { text: t("homePopularIndustries_title.text_7"), id: 7 },
    { text: t("homePopularIndustries_title.text_8"), id: 8 },
    { text: t("homePopularIndustries_title.text_9"), id: 9 },
    { text: t("homePopularIndustries_title.text_10"), id: 10 },
    { text: t("homePopularIndustries_title.text_11"), id: 11 },
    { text: t("homePopularIndustries_title.text_12"), id: 12 },
  ];

  const changeHandle = (id) => {
    setModalOpen(true);
    content.map((item) => {
      if (id === item.id) {
        setcontent_l(item.text);
      }
    });
  };

  return (
    <div className="homePopularIndustries">
      <div className="section-container">
        <div className="homePopularIndustries_title">
          <h3>{t("homePopularIndustries_title.title")} </h3>
          <div className="homePopularIndustries_content_wrapp">
            <div className="homePopularIndustries__box_l">
              <p>{t("homePopularIndustries_title.text_default")}</p>
              <div
                className="modal_content"
                style={{ display: `${modalOpen ? "flex" : "none"}` }}
              >
                <div className="modal_icon" onClick={() => setModalOpen(false)}>
                  <IoClose style={{ color: "#017BFF" }} />
                </div>
                <p
                  className="card-desc"
                  dangerouslySetInnerHTML={{
                    __html: content_l,
                  }}
                />
              </div>
            </div>
            <div className="homePopularIndustries__box_r">
              <div className="homePopularIndustries__box_r__cards_wrapp">
                {images.map((item, i) => (
                  <div
                    className="card"
                    key={i}
                    onClick={() => changeHandle(i + 1)}
                  >
                    <img src={item?.img} alt="img" />
                    <p>{item?.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePopularIndustries;
