import "./Our-agency.css";
import helloImg from "../../../assets/images/Home-image/hello-img.png";
import shape_l from "../../../assets/images/Studio-image/studio-bg-left.svg";
import shape_r from "../../../assets/images/Studio-image/studio-bg-right.svg";
import dark_shape from "../../../assets/images/Studio-image/Frame.png";
import ShapeImg from "../../Shape-img/Shape-img";
import { useTranslation } from "react-i18next";

const OurAgency = () => {
  const { t } = useTranslation();

  return (
    <div className="our-agency">
      <div className="section-container">
        <div className="our-agency-text-wrapper">
          <div className="text-head">
            <div className="img-box">
              <img src={helloImg} alt="img" />
            </div>
            <div className="text-box">
              <h4>{t("Studio.hello")}</h4>
            </div>
          </div>
          <h2 className="title">{t("Studio.studio_our_agency_title")}</h2>

          <div className="description">
            <p
              dangerouslySetInnerHTML={{
                __html: t("Studio.studio_our_agency"),
              }}
            />
          </div>
        </div>
      </div>
      <ShapeImg />
    </div>
  );
};

export default OurAgency;
