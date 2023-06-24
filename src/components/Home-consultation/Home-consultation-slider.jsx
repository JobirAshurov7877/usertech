import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

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
            src="https://media.istockphoto.com/photos/concept-picture-id1154231467"
            alt=""
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
          <img
            src="https://images.unsplash.com/photo-1656268164012-119304af0c69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"
            alt=""
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
          <img
            src="https://images.unsplash.com/photo-1655745653127-4d6837baf958?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
         
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
          <img
            src="https://images.unsplash.com/photo-1516527653392-602455dd9cf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"
            alt=""
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
          <img
            src="https://images.unsplash.com/photo-1655365225165-8d727fe3a091?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=80"
            alt=""
          />
          
        </div>
      </Carousel>
    </div>
  );
};

export default HomeConsultationSlider;
