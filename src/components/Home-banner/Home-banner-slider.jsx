import React from "react";
import radioCheck from "../../assets/images/Home-image/radio-check.png";
import banner_img from "../../assets/images/Home-image/Yandex_Direct_icon 1.png";

const HomeBannerSlider = ({ index, title, price, widget_data }) => {
  return (
    <div className={`slider-card  slider-card${index}`}>
      <div className="banner-slider-element">
        <div className="element-container">
          <div className="banner-sliderBox-l">
            <h3>{title}</h3>
            <h2>{price}</h2>
          </div>
        </div>
        <div className="banner-slider-widget">
          {widget_data.map((item, index) => (
            <div key={index} className="box">
              <img src={radioCheck} alt="img" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeBannerSlider;
