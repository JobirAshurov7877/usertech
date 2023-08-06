import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import SliderImage_1 from "../../assets/images/Home-image/hqdefault.jpg";
import SliderImage_2 from "../../assets/images/Home-image/hqdefault_2.jpg";
import SliderImage_3 from "../../assets/images/Home-image/hqdefault_3.jpg";
import SliderImage_4 from "../../assets/images/Home-image/hqdefault_4.jpg";
import SliderImage_5 from "../../assets/images/Home-image/hqdefault_5.jpg";

const HomeConsultationSlider = () => {
  return (
    <div className="slider-wrapper">
      <Carousel infiniteLoop>
        <div>
          <iframe
            width=""
            height="400"
            src="https://www.youtube.com/embed/skFxXao2ry4"
            title="ПРОДВИНУТАЯ РАБОТА С МУЛЬТИЯЗЫЧНОСТЬЮ В REACT | i18n"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <img
            className="slider-banner-img"
            src={SliderImage_1}
            alt="slider_img"
          />
        </div>
        <div>
          <iframe
            width="1020"
            height="400"
            src="https://www.youtube.com/embed/skFxXao2ry4"
            title="ПРОДВИНУТАЯ РАБОТА С МУЛЬТИЯЗЫЧНОСТЬЮ В REACT | i18n"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <img src={SliderImage_2} alt="slider_img" />
        </div>
        <div>
          <iframe
            width="1020"
            height="400"
            src="https://www.youtube.com/embed/skFxXao2ry4"
            title="ПРОДВИНУТАЯ РАБОТА С МУЛЬТИЯЗЫЧНОСТЬЮ В REACT | i18n"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <img src={SliderImage_3} alt="slider_img" />
        </div>
        <div>
          <iframe
            width=""
            height="400"
            src="https://www.youtube.com/embed/skFxXao2ry4"
            title="ПРОДВИНУТАЯ РАБОТА С МУЛЬТИЯЗЫЧНОСТЬЮ В REACT | i18n"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <img src={SliderImage_4} alt="slider_img" />
        </div>
        <div>
          <iframe
            width="1020"
            height="400"
            src="https://www.youtube.com/embed/skFxXao2ry4"
            title="ПРОДВИНУТАЯ РАБОТА С МУЛЬТИЯЗЫЧНОСТЬЮ В REACT | i18n"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <img src={SliderImage_5} alt="slider_img" />
        </div>
      </Carousel>
    </div>
  );
};

export default HomeConsultationSlider;
