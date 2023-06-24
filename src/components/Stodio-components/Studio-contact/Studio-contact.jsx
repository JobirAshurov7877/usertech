import "./Studio-contact.css";
import studio_contact_img from "../../../assets/images/Studio-image/Studio-contact-img.jpeg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const StudioContact = () => {
  const { t } = useTranslation();
  return (
    <div className="studio-contact">
      <div className="section-container">
        <div className="element-container">
          <div className="studio-contact-box-img">
            <img src={studio_contact_img} alt="bg" />
          </div>
          <div className="studio-contact-box-text">
            <h2 className="studio-contact-title">
              {t("Studio.studio_contact.title")}
            </h2>
            <p className="studio-contact-description">
            {t("Studio.studio_contact.content")}
            </p>
            <p className="studio-contact-button">
              <Link> {t("Studio.studio_contact.button")}</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudioContact;
