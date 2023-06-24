import StagesProjectCard from "./Stages-project-card";
import "./Stages-project.css";
import gifRobot from "../../assets/images/Home-image/robot.gif";
import { useTranslation } from "react-i18next";

const StageProject = () => {
  const { t } = useTranslation();
  const cardData = [
    {
      title: t("resources-PR.stagesProject.box_1.title"),
      desc: t("resources-PR.stagesProject.box_1.desc"),
    },
    {
      title: t("resources-PR.stagesProject.box_2.title"),
      desc: t("resources-PR.stagesProject.box_2.desc"),
    },{
      title: t("resources-PR.stagesProject.box_3.title"),
      desc: t("resources-PR.stagesProject.box_3.desc"),
    },{
      title: t("resources-PR.stagesProject.box_4.title"),
      desc: t("resources-PR.stagesProject.box_4.desc"),
    },{
      title: t("resources-PR.stagesProject.box_5.title"),
      desc: t("resources-PR.stagesProject.box_5.desc"),
    },{
      title: t("resources-PR.stagesProject.box_6.title"),
      desc: t("resources-PR.stagesProject.box_6.desc"),
    },
  ];
  return (
    <div className="stagesProject">
      <div className="stagesProject-element">
        <div className="element-container">
          <div className="stagesProject-box_l">
            <div className="title">{t("resources-PR.stagesProject.title")}</div>
            <div className="box">
              {cardData.map((item, i) => (
                <StagesProjectCard
                  title={item.title}
                  description={item.desc}
                />
              ))}
            </div>
          </div>
          <div className="stagesProject-box_r">
            <img src={gifRobot} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StageProject;
