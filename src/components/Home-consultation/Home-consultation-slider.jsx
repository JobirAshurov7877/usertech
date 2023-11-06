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
          <img
            className="slider-banner-img"
            src={SliderImage_1}
            alt="slider_img"
          />
        </div>
        <div>
          <img src={SliderImage_2} alt="slider_img" />
        </div>
        <div>
          <img src={SliderImage_3} alt="slider_img" />
        </div>
        <div>
          <img src={SliderImage_4} alt="slider_img" />
        </div>
        <div>
          <img src={SliderImage_5} alt="slider_img" />
        </div>
      </Carousel>
    </div>
  );
};

export default HomeConsultationSlider;
