import "./Home-form.css";
import phone from "../../assets/images/Home-image/phone.gif";
import axios from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const HomeForm = () => {
  const [full_name, setFull_name] = useState("");
  const [phone_num, setPhone_num] = useState("");
  const { t } = useTranslation();

  const fetchData = async (e) => {
    e.preventDefault();
    const data = {
      full_name: full_name,
      phone: phone_num,
    };

    try {
      const response = await axios.post(
        "https://api-usertech.ru/api/sayts/application_post_sayts/",
        data,
        {
          headers: {
            "Accept-Language": "ru",
          },
        }
      );
      setFull_name("");
      setPhone_num("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="home-form">
      <div className="home-form-element">
        <div className="form-wrapper">
          <div className="form-box_l">
            <div className="form-title">
              <h3>{t("home-form.title")}</h3>
            </div>
            <div className="form-card-body">
              <form onSubmit={fetchData}>
                <div className="input-box">
                  <input
                    type="text"
                    required
                    placeholder={t("home-form.input_name")}
                    onChange={(e) => setFull_name(e.target.value)}
                    value={full_name}
                  />
                  <input
                    type="text"
                    required
                    placeholder={t("home-form.input_phone")}
                    onChange={(e) => setPhone_num(e.target.value)}
                    value={phone_num}
                  />
                </div>
                <div className="form-btn">
                  <input type="submit" value={t("home-form.submit_btn")} />
                </div>
                <div className="description">
                  <p>{t("home-form.description")}</p>
                </div>
              </form>
            </div>
          </div>
          <div className="form-box_r">
            <img src={phone} alt="phone-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeForm;
