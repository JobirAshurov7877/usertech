
import "./Home-banner.css";
import HomeBannerSlider from "./Home-banner-slider";
import { HiArrowLongRight } from 'react-icons/hi2';

// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Pagination, Navigation } from "swiper";
import Carousel from "nuka-carousel"

const HomeBanner = () => {

  return (
    <Carousel autoplayInterval={5000} autoplay={true} wrapAround={true}
      renderBottomCenterControls={false}
      renderCenterLeftControls={false}

      renderCenterRightControls={({ nextSlide }) => (
        <button onClick={nextSlide} className="btn-swiper btn_next">
          <HiArrowLongRight className="btn_next_icon" />
        </button>
      )}>
      <HomeBannerSlider index={1} title={"Быстрый запуск бизнесаLanding page"} price={"от 25 000₽"}
        widget_data={["Высокая конверсия", "Оптимизация под SEO", "Удобство использования", "Легкость тестирования"]} />

      <HomeBannerSlider index={2} title={"Своя электронная лавка - интернет магазины"} price={"от 70 000₽"}
        widget_data={["Большой охват аудитории", "Удобство для клиентов", "Эффективная логистика", "Работа в режиме реального времени"]} />

      <HomeBannerSlider index={3} title={"Разработай свое Яндекс Такси мобильные приложения "} price={"от 150 000₽"}
        widget_data={["Большой охват аудитории", "Удобство для клиентов", "Быстрый доступ ", "Функциональность"]} />
      <HomeBannerSlider index={4} title={"От идеи до первой прибыли комплексное продвижение "} price={"от 30 000₽"}
        widget_data={["Большой охват аудитории", "Целевая аудитория", "Эффективность", "Удобная коммуникация"]} />

      <HomeBannerSlider index={5} title={"Свой в Яндексе настройка Яндекс Директа"} price={"от 15 000₽"}
        widget_data={["Точная настройка таргета", "Большой охват аудитори", "Отслеживание результатов"]} />



    </Carousel>
    // <Swiper
    //   slidesPerView={1}
    //   spaceBetween={30}
    //   loop={true}

    //   navigation={true}
    //   modules={[Pagination, Navigation]}
    //   className="mySwiper"
    // >
    //   <SwiperSlide>
    //     <HomeBannerSlider index={1} title={"Быстрый запуск бизнесаLanding page"} price={"от 25 000₽"}
    //       widget_data={["Высокая конверсия", "Оптимизация под SEO", "Удобство использования", "Легкость тестирования"]} />
    //   </SwiperSlide>

    //   <SwiperSlide><HomeBannerSlider index={2} title={"Своя электронная лавка - интернет магазины"} price={"от 70 000₽"}
    //     widget_data={["Большой охват аудитории", "Удобство для клиентов", "Эффективная логистика", "Работа в режиме реального времени"]} />
    //   </SwiperSlide>

    //   <SwiperSlide><HomeBannerSlider index={3} title={"Разработай свое Яндекс Такси мобильные приложения "} price={"от 150 000₽"}
    //     widget_data={["Большой охват аудитории", "Удобство для клиентов", "Быстрый доступ ", "Функциональность"]} />
    //   </SwiperSlide>

    //   <SwiperSlide><HomeBannerSlider index={4} title={"От идеи до первой прибыли комплексное продвижение "} price={"от 30 000₽"}
    //     widget_data={["Большой охват аудитории", "Целевая аудитория", "Эффективность", "Удобная коммуникация"]} />
    //   </SwiperSlide>

    //   <SwiperSlide><HomeBannerSlider index={5} title={"Свой в Яндексе настройка Яндекс Директа"} price={"от 15 000₽"}
    //     widget_data={["Точная настройка таргета", "Большой охват аудитори", "z", ""]} />
    //   </SwiperSlide>

    // </Swiper>
  );
};

export default HomeBanner;
