import React, { useState } from "react";
import "./Contact.css";
import leftBG from "../../assets/images/Studio-image/studio-bg-left.svg";
import rightBG from "../../assets/images/Studio-image/studio-bg-right.svg";
import users_image from "../../assets/images/Contact-image/users-icon.png";
import money_image from "../../assets/images/Contact-image/monet-icon.png";
import check_image from "../../assets/images/Contact-image/check-icon.png";
import { ContactPageCard, ShapeImg } from "../../components";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { HiMail } from "react-icons/hi";

const ContactPage = () => {
  const [inputRange, setInputRange] = useState("5000");

  console.log(inputRange);

  return (
    <div className="contact-page">
      <h3 className="contact-page-title">Цифры говорят сами за себя</h3>
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
          <p>Есть идеи проекта ?</p>
          <h3 className="contact-page-title">Свяжитесь с нами</h3>
        </div>
        <div className="contact-page-cardBox-wrap">
          <ContactPageCard
            icon={users_image}
            desc_1={"Только самые талантливые"}
            desc_2={"работают в нашей команде"}
          />
          <ContactPageCard
            icon={money_image}
            desc_1={"Мы не завышаем цены,"}
            desc_2={"ведем учет по часам"}
          />
          <ContactPageCard
            icon={check_image}
            desc_1={"Мы всегда делаем"}
            desc_2={"как для себя"}
          />
        </div>
      </div>

      <ShapeImg />

      <div className="contact-form">
        <div className="section-container">
          <form className="contact-form-wrap">
            {/* Text inputBox */}
            <div className="input-box">
              <div className="input-box-card">
                <h4>
                  Ваше имя <span>*</span>
                </h4>
                <div className="input-wrap">
                  <input
                    type="text"
                    id=" name"
                    name="firstname"
                    placeholder="Ваше имя *"
                    required
                  />
                </div>
              </div>

              <div className="input-box-card">
                <div className="input-wrap">
                  <input type="text" placeholder="Ваша фамилия *" required />
                </div>
              </div>

              <div className="input-box-card">
                <div className="input-wrap">
                  <FaPhoneAlt />
                  <input
                    type="text"
                    placeholder="Ваш номер телефона *"
                    required
                  />
                </div>
              </div>

              <div className="input-box-card">
                <div className="input-wrap">
                  <HiMail style={{ fontSize: "22px" }} />
                  <input type="email" placeholder="Email *" required />
                </div>
              </div>

              <div className="input-box-card">
                <div className="input-range">
                  <div className="input-wrap">
                    <input type="text" min={5000} value={inputRange} />
                  </div>
                  <input
                    type="range"
                    min="5000"
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
                    placeholder="Название компании  *"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Checkbox */}
            <div className="check-box">
              <h4>Откуда вы о нас узнали ?</h4>
              <div className="checkbox-wrap">
                <div class="fusion-form-checkbox option-inline">
                  <input
                    tabindex=""
                    id="checkbox-Откуда-вы-о-нас-узнали-?-1-0"
                    type="checkbox"
                    value="Друзья или коллеги"
                  />
                  <label for="checkbox-Откуда-вы-о-нас-узнали-?-1-0">
                    Друзья или коллеги
                  </label>
                </div>
                <div class="fusion-form-checkbox option-inline">
                  <input
                    tabindex=""
                    id="checkbox-Откуда-вы-о-нас-узнали-?-1-0"
                    type="checkbox"
                    value="Друзья или коллеги"
                  />
                  <label for="checkbox-Откуда-вы-о-нас-узнали-?-1-0">
                    Друзья или коллеги
                  </label>
                </div>
                <div class="fusion-form-checkbox option-inline">
                  <input
                    tabindex=""
                    id="checkbox-Откуда-вы-о-нас-узнали-?-1-0"
                    type="checkbox"
                    value="Друзья или коллеги"
                  />
                  <label for="checkbox-Откуда-вы-о-нас-узнали-?-1-0">
                    Друзья или коллеги
                  </label>
                </div>
                <div class="fusion-form-checkbox option-inline">
                  <input
                    tabindex=""
                    id="checkbox-Откуда-вы-о-нас-узнали-?-1-0"
                    type="checkbox"
                    value="Друзья или коллеги"
                  />
                  <label for="checkbox-Откуда-вы-о-нас-узнали-?-1-0">
                    Друзья или коллеги
                  </label>
                </div>
              </div>
            </div>

            {/* Textarea */}
            <div className="textArea-box">
              <h4>Напишите</h4>
              <textarea placeholder="Другое"></textarea>
            </div>

            <div className="btn-box">
              <input type="submit" value="Отправить запрос" />
            </div>
          </form>
        </div>
      </div>

      <div className="contact-map-adress">
        <div className="section-container">
        <div className="map-box">
          <iframe
            src="https://yandex.ru/map-widget/v1/?lang=ru_RU&amp;scroll=true&amp;um=constructor%3A351bd206e81d1977efcfd702319595c687d8abd3b30775dc932caa133de51710"
            frameBorder={0}
            allowFullScreen={true}
            width={"500px"}
            height={"400px"}
            style={{display:"block"}}
          ></iframe>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
