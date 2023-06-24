import StudioServicesCard from "./Studio-services-card";
import "./Studio-services.css";
import web_dev_icon from "../../../assets/images/Studio-image/icon_1.png";
import promotion_icon from "../../../assets/images/Studio-image/icon_2.png";
import mobile_applications_icon from "../../../assets/images/Studio-image/icon_3.png";
import artificial_intelligence_icon from "../../../assets/images/Studio-image/icon_4.png";
import fintech_icon from "../../../assets/images/Studio-image/icon_5.png";
import { useTranslation } from "react-i18next";

const StudioServices = () => {
  const { t } = useTranslation();
  const studioServicesCard = [
    {
      icon: web_dev_icon,
      title: t("Studio.studio_services.box_1.title"),
      desc: t("Studio.studio_services.box_1.desc"),
    },
    {
      icon: promotion_icon,
      title: t("Studio.studio_services.box_2.title"),
      desc: t("Studio.studio_services.box_2.desc"),
    },
    {
      icon: mobile_applications_icon,
      title: t("Studio.studio_services.box_3.title"),
      desc: t("Studio.studio_services.box_3.desc"),
    },
    {
      icon: artificial_intelligence_icon,
      title: t("Studio.studio_services.box_4.title"),
      desc: t("Studio.studio_services.box_4.desc"),
    },
    {
      icon: fintech_icon,
      title: t("Studio.studio_services.box_5.title"),
      desc: t("Studio.studio_services.box_5.desc"),
    },
  ];
  return (
    <div className="studio-services">
      <div className="section-container">
        <div className="studio-services-wrapper">
          {studioServicesCard.map((item, idx) => (
            <StudioServicesCard
              icon={item.icon}
              title={item.title}
              description={item.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudioServices;
