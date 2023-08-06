import React from "react";
import { useTranslation } from "react-i18next";

const SecurityPage = () => {
  const { t } = useTranslation();

  return (
    <div className="polisy" style={{ padding: "10px" }}>
      <div className="section-container">
        <h2 style={{ textAlign: "center" }} className="title">
          {t("security_page.title")}
        </h2>
        <div className="polisy_body">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((item, i) => (
            <p>
              <br /> <br />
              <h4>
                {t(`security_page.contents.${i}.title`)} <br />{" "}
              </h4>
              <p
                style={{ lineHeight: "25px", marginTop: "10px" }}
                dangerouslySetInnerHTML={{
                  __html: t(`security_page.contents.${i}.body`),
                }}
              />
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;
