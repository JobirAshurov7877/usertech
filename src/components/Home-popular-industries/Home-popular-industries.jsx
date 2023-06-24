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

const images = [
  card_img1,
  card_img2,
  card_img3,
  card_img4,
  card_img5,
  card_img6,
  card_img7,
  card_img8,
  card_img9,
  card_img10,
  card_img11,
  card_img12,
];

const HomePopularIndustries = () => {
  const { t } = useTranslation();
  return (
    <div className="homePopularIndustries">
      <div className="section-container">
        <div className="homePopularIndustries_title">
          <h3>{t("homePopularIndustries_title.title")} </h3>
          <div className="homePopularIndustries_content_wrapp">
            <div className="homePopularIndustries__box_l">
              <p>{t("homePopularIndustries_title.text_1")}</p>
              <br />
              <br />
              <p>{t("homePopularIndustries_title.text_2")}</p>
            </div>
            <div className="homePopularIndustries__box_r">
              <div className="homePopularIndustries__box_r__cards_wrapp">
                {images.map((image, i) => (
                  <div className="card" key={i}>
                    <img src={image} alt="img" />
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
