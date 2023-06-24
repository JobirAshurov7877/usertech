import { useState } from "react";
import HomeConsultationSlider from "./Home-consultation-slider";
import "./Home-consultation.css";
import axios from "axios";
import { useTranslation } from "react-i18next";

const HomeConsultation = () => {
  const [full_name, setFull_name] = useState("");
  const [phone_num, setPhone_num] = useState("");
  const [content, setContent] = useState("");
  const { t } = useTranslation();

  const fetchData = async (e) => {
    e.preventDefault();
    const data = {
      full_name: full_name,
      phone: phone_num,
      content: content,
    };

    try {
      const response = await axios.post(
        "https://api-usertech.ru/api/sayts/consultatsiya_post_sayts/",
        data,
        {
          headers: {
            "Accept-Language": "ru",
          },
        }
      );
      setFull_name("");
      setPhone_num("");
      setContent("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="consultation">
      <div className="consultation-wrap">
        <div className="consultation-form_l">
          <div className="box">
            <div className="form-head">
              <h3 className="form-title">{t("consultation.title")}</h3>
              <p>{t("consultation.text")}</p>
            </div>
            <div className="form-body">
              <form onSubmit={fetchData}>
                <p>
                  <input
                    type="text"
                    placeholder={t("consultation.input_name")}
                    required
                    onChange={(e) => setFull_name(e.target.value)}
                    value={full_name}
                  />
                </p>
                <p>
                  <input
                    type="text"
                    placeholder={t("consultation.input_phone")}
                    required
                    onChange={(e) => setPhone_num(e.target.value)}
                    value={phone_num}
                  />
                </p>
                <p>
                  <textarea
                    placeholder={t("consultation.input_questions")}
                    required
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                  ></textarea>
                </p>
                <p>
                  <div className="form-btn">
                    <input
                      type="submit"
                      value={t("consultation.input_submit")}
                    />
                  </div>
                </p>
                <p className="description">
                  Н{t("consultation.description")}
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="consultation-slider_r">
          <HomeConsultationSlider />
        </div>
      </div>
    </div>
  );
};

export default HomeConsultation;
