import "./Home-partners.css";
import radioCheck from "../../assets/images/Home-image/radio-check.png";
import { useTranslation } from "react-i18next";

const HomePartners = () => {
  const { t } = useTranslation();
  return (
    <div className="partners">
      <div className="partners-element">
        <div className="element-container">
          <div className="partners-box_l">
            <h3>{t("Partner.title1")}</h3>
            <h2>95% </h2>
            <h3>{t("Partner.title2")}</h3>
          </div>
          <div className="partners-box_r">
            <h5>{t("Partner.title3")}</h5>
            <h2 style={{ color: "#9F9F9F" }}>5%</h2>
            <h4 style={{ color: "#9F9F9F" }}>{t("Partner.title4")}</h4>
          </div>
        </div>
        <div className="partners-widget">
          {[0, 1, 2, 3, 4, 5,].map((item,i) => (
            <div className="box" key={i}>
              <img src={radioCheck} alt="img" />
              <p>{t(`Partner.widgets.${i}`)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePartners;
