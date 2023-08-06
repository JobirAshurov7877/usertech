import "./Bottom-sticky-section.css";
import img1 from "../../assets/images/Home-image/comp.png";
import img2 from "../../assets/images/Home-image/phone.png";
import img3 from "../../assets/images/Home-image/users.png";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const cardData = [
  {
    img: img1,
    path: "/services",
  },
  {
    img: img2,
    path: "/contact",
  },
  {
    img: img3,
    path: "/contact",
  },
];

const BottomStickySection = () => {
  const { t } = useTranslation();

  return (
    <div className="bottom-sticky-section">
      <div className="bottom-sticky-section-cards">
        {cardData.map((card, index) => (
          <div className="bottom-sticky-section-card" key={index}>
            <div className="card-container">
              <Link to={card.path}>
                <img src={card.img} alt="img" />
                <p style={{ wordBreak: "break-word", textAlign:"center" }}>
                  {t(`bottom-sticky-section.${index}`)}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomStickySection;
