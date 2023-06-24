import React, { useState } from "react";
import "./Contact.css";
import leftBG from "../../assets/images/Studio-image/studio-bg-left.svg";
import rightBG from "../../assets/images/Studio-image/studio-bg-right.svg";
import users_image from "../../assets/images/Contact-image/users-icon.png";
import money_image from "../../assets/images/Contact-image/monet-icon.png";
import check_image from "../../assets/images/Contact-image/check-icon.png";
import { ContactPageCard, ShapeImg } from "../../components";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import axios from "axios";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const [inputRange, setInputRange] = useState("1000");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [price, setPrice] = useState(inputRange);
  const [company, setCompany] = useState("");
  const [about, setAbout] = useState("");
  const [content, setContent] = useState("");
  const { t } = useTranslation();

  if (inputRange < 1000) {
    setInputRange(1000);
  }

  const fetchData = async (e) => {
    e.preventDefault();
    console.log(about);
    const data = {
      first_name: firstName,
      last_name: lastName,
      phone: phone,
      email: email,
      price: price,
      companiya: company,
      about: about,
      content: content,
    };

    try {
      const response = await axios.post(
        "https://api-usertech.ru/api/sayts/forma_post_sayts/",
        data,
        {
          headers: {
            "Accept-Language": "ru",
          },
        }
      );
      setFirstName("");
      setLastName("");
      setPhone("");
      setEmail("");
      setPrice("1000");
      setCompany("");
      setAbout("");
      setContent("");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="contact-page">
      <h3 className="contact-page-title">{t("Contact.title")}</h3>
      <svg
        className="fusion-clouds-candy"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="100%"
        height="100"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ padding: "0" }}
        fill="rgba(2,86,255,1)"
      >
        <path d="M-5 100 Q 0 20 5 100 Z"></path>
        <path d="M0 100 Q 5 0 10 100"></path>
        <path d="M5 100 Q 10 30 15 100"></path>
        <path d="M10 100 Q 15 10 20 100"></path>
        <path d="M15 100 Q 20 30 25 100"></path>
        <path d="M20 100 Q 25 -10 30 100"></path>
        <path d="M25 100 Q 30 10 35 100"></path>
        <path d="M30 100 Q 35 30 40 100"></path>
        <path d="M35 100 Q 40 10 45 100"></path>
        <path d="M40 100 Q 45 50 50 100"></path>
        <path d="M45 100 Q 50 20 55 100"></path>
        <path d="M50 100 Q 55 40 60 100"></path>
        <path d="M55 100 Q 60 60 65 100"></path>
        <path d="M60 100 Q 65 50 70 100"></path>
        <path d="M65 100 Q 70 20 75 100"></path>
        <path d="M70 100 Q 75 45 80 100"></path>
        <path d="M75 100 Q 80 30 85 100"></path>
        <path d="M80 100 Q 85 20 90 100"></path>
        <path d="M85 100 Q 90 50 95 100"></path>
        <path d="M90 100 Q 95 25 100 100"></path>
        <path d="M95 100 Q 100 15 105 100 Z"></path>
      </svg>
      <div className="contact-page-cardBox">
        <div className="contact-page-head">
          <p>{t("Contact.desc")}</p>
          <h3 className="contact-page-title">{t("Contact.card_title")}</h3>
        </div>
        <div className="contact-page-cardBox-wrap">
          <ContactPageCard
            icon={users_image}
            desc_1={t("Contact.card_1.desc_1")}
            desc_2={t("Contact.card_1.desc_2")}
          />
          <ContactPageCard
            icon={money_image}
            desc_1={t("Contact.card_2.desc_1")}
            desc_2={t("Contact.card_2.desc_2")}
          />
          <ContactPageCard
            icon={check_image}
            desc_1={t("Contact.card_3.desc_1")}
            desc_2={t("Contact.card_3.desc_2")}
          />
        </div>
      </div>

      <ShapeImg />

      <div className="contact-form">
        <div className="section-container">
          <form className="contact-form-wrap" onSubmit={fetchData}>
            {/* Text inputBox */}
            <div className="input-box">
              <div className="input-box-card">
                <h4>
                  {t("Contact.form.input_first_name")} <span>*</span>
                </h4>
                <div className="input-wrap">
                  <input
                    type="text"
                    id=" name"
                    name="firstname"
                    placeholder={t("Contact.form.input_first_name")}
                    required
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                  />
                </div>
              </div>

              <div className="input-box-card">
                <div className="input-wrap">
                  <input
                    type="text"
                    placeholder={t("Contact.form.input_last_name")}
                    required
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                  />
                </div>
              </div>

              <div className="input-box-card">
                <div className="input-wrap">
                  <FaPhoneAlt />
                  <input
                    type="text"
                    placeholder={t("Contact.form.input_first_name")}
                    required
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                  />
                </div>
              </div>

              <div className="input-box-card">
                <div className="input-wrap">
                  <HiMail style={{ fontSize: "22px" }} />
                  <input
                    type="email"
                    placeholder={t("Contact.form.input_email")}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
              </div>

              <div className="input-box-card">
                <div className="input-range">
                  <div className="input-wrap">
                    <input
                      type="number"
                      min={1000}
                      max={100000}
                      value={inputRange}
                      onChange={(e) => {
                        setInputRange(e.target.value);
                      }}
                    />
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="100000"
                    onChange={(e) => {
                      setInputRange(e.target.value);
                    }}
                    value={inputRange}
                  />
                </div>
              </div>

              <div className="input-box-card">
                <div className="input-wrap">
                  <input
                    type="text"
                    placeholder={t("Contact.form.input_company")}
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Checkbox */}
            <div className="check-box">
              <h4>{t("Contact.form.input_first_name")}</h4>

              <div className="checkbox-wrap">
                <div className="fusion-form-checkbox option-inline">
                  <input
                    id="checkbox_1"
                    type="radio"
                    name="radio"
                    value="Друзья или коллеги"
                    onChange={(e) => setAbout(e.target.value)}
                  />
                  <label htmlFor="checkbox_1">
                    {t("Contact.form.input_checkbox_1")}
                  </label>
                </div>
                <div className="fusion-form-checkbox option-inline">
                  <input
                    id="checkbox_2"
                    type="radio"
                    name="radio"
                    value=" Радио/ ТВ"
                    onChange={(e) => setAbout(e.target.value)}
                  />
                  <label htmlFor="checkbox_2">
                    {t("Contact.form.input_checkbox_2")}
                  </label>
                </div>
                <div className="fusion-form-checkbox option-inline">
                  <input
                    id="checkbox-Откуда-вы-о-нас-узнали-?-1-2"
                    type="radio"
                    value="Социальные сети"
                    name="radio"
                    onChange={(e) => setAbout(e.target.value)}
                  />
                  <label htmlFor="checkbox-Откуда-вы-о-нас-узнали-?-1-2">
                    {t("Contact.form.input_checkbox_3")}
                  </label>
                </div>
                <div className="fusion-form-checkbox option-inline">
                  <input
                    id="checkbox-Откуда-вы-о-нас-узнали-?-1-3"
                    type="radio"
                    value="Другое"
                    name="radio"
                    onChange={(e) => setAbout(e.target.value)}
                  />
                  <label htmlFor="checkbox-Откуда-вы-о-нас-узнали-?-1-3">
                    {t("Contact.form.input_checkbox_4")}
                  </label>
                </div>
              </div>
            </div>

            {/* Textarea */}
            <div className="textArea-box">
              <h4>{t("Contact.form.input_text")}</h4>
              <textarea
                placeholder={t("Contact.form.input_text_placeholder")}
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>

            <div className="btn-box">
              <input type="submit" value={t("Contact.form.input_button")} />
            </div>
          </form>
        </div>
      </div>

      <div className="contact-map-adress">
        <div className="section-container">
          <div className="map-adress-wrap">
            <div className="map-box">
              <iframe
                src="https://yandex.ru/map-widget/v1/?lang=ru_RU&amp;scroll=true&amp;um=constructor%3A351bd206e81d1977efcfd702319595c687d8abd3b30775dc932caa133de51710"
                frameBorder={0}
                allowFullScreen={true}
                style={{ display: "block" }}
              ></iframe>
            </div>

            <div className="adress">
              <div className="call_btn">
                <a href="#">{t("Contact.map.button")}</a>
              </div>
              <div className="adress-content">{t("Contact.map.location")}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
