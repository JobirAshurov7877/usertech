import "./Home-banner.css";
import HomeBannerSlider from "./Home-banner-slider";
import { HiArrowLongRight } from "react-icons/hi2";
import { useTranslation } from "react-i18next";
import Carousel from "nuka-carousel";

const HomeBanner = () => {
  const { t } = useTranslation();

  return (
    <Carousel
      autoplayInterval={5000}
      autoplay={true}
      wrapAround={true}
      renderBottomCenterControls={false}
      renderCenterLeftControls={false}
      renderCenterRightControls={({ nextSlide }) => (
        <button onClick={nextSlide} className="btn-swiper btn_next">
          <HiArrowLongRight className="btn_next_icon" />
        </button>
      )}
    >
      <HomeBannerSlider
        index={1}
        title={t("Carousel.card1.title")}
        price={t("Carousel.card1.price")}
        widget_data={[
          t("Carousel.card1.li1"),
          t("Carousel.card1.li2"),
          t("Carousel.card1.li3"),
          t("Carousel.card1.li4"),
        ]}
      />

      <HomeBannerSlider
        index={2}
        title={t("Carousel.card2.title")}
        price={t("Carousel.card2.price")}
        widget_data={[
          t("Carousel.card2.li1"),
          t("Carousel.card2.li2"),
          t("Carousel.card2.li3"),
          t("Carousel.card2.li4"),
        ]}
      />

      <HomeBannerSlider
        index={3}
        title={t("Carousel.card3.title")}
        price={t("Carousel.card3.price")}
        widget_data={[
          t("Carousel.card3.li1"),
          t("Carousel.card3.li2"),
          t("Carousel.card3.li3"),
          t("Carousel.card3.li4"),
        ]}
      />
      <HomeBannerSlider
        index={4}
        title={t("Carousel.card4.title")}
        price={t("Carousel.card4.price")}
        widget_data={[
          t("Carousel.card4.li1"),
          t("Carousel.card4.li2"),
          t("Carousel.card4.li3"),
          t("Carousel.card4.li4"),
        ]}
      />

      <HomeBannerSlider
        index={5}
        title={t("Carousel.card5.title")}
        price={t("Carousel.card5.price")}
        widget_data={[
          t("Carousel.card5.li1"),
          t("Carousel.card5.li2"),
          t("Carousel.card5.li3"),
        ]}
      />
    </Carousel>
  );
};

export default HomeBanner;
