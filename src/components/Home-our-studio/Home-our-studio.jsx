import "./Home-our-studio.css";
import table from "../../assets/images/Home-image/table.png";
import { useTranslation } from "react-i18next";

const HomeOurStudio = () => {
  const { t } = useTranslation();
  return (
    <div className="our-studio">
      <div className="our-studio-element">
        <div className="container-head">
          <h3 className="title">{t("our-studio.title")}</h3>

          <p
            dangerouslySetInnerHTML={{
              __html: t("our-studio.text"),
            }}
          />
        </div>
        <div className="container-body">
          <img className="table" src={table} alt="table" />
        </div>
      </div>
    </div>
  );
};

export default HomeOurStudio;
