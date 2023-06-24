import { useTranslation } from "react-i18next";
import "./Algoritm.css";

const AlgoritmJob = () => {
  const { t } = useTranslation();
  return (
    <div className="algoritm-job">
      <div className="section-container">
        <h2 className="title">{t("algoritm-job.title")}</h2>
        <div className="description">
          <p
            className="card-desc"
            dangerouslySetInnerHTML={{
              __html: t("algoritm-job.p-1"),
            }}
          />

          <ul
            className="card-desc"
            dangerouslySetInnerHTML={{
              __html: t("algoritm-job.ul-1"),
            }}
          />

          <h3>{t("algoritm-job.h3")}</h3>
          <p>{t("algoritm-job.p-2")}</p>

          <h4>{t("algoritm-job.h4-1")}</h4>
          <p>{t("algoritm-job.p-3")}</p>
          <h4>{t("algoritm-job.h4-2")}</h4>
          <ul
            className="card-desc"
            dangerouslySetInnerHTML={{
              __html: t("algoritm-job.ul-2"),
            }}
          />
          <p>{t("algoritm-job.p-4")}</p>
          <h4>{t("algoritm-job.h4-3")}</h4>
          <p>{t("algoritm-job.p-5")}</p>
          <ol
            className="card-desc"
            dangerouslySetInnerHTML={{
              __html: t("algoritm-job.ol"),
            }}
          />
          <p>{t("algoritm-job.p-6")}</p>
          <h4>{t("algoritm-job.h4-4")}</h4>
          <p
            className="card-desc"
            dangerouslySetInnerHTML={{
              __html: t("algoritm-job.p-7"),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AlgoritmJob;
