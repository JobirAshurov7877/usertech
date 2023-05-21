import Carousel from "framer-motion-carousel";
import "./Home-banner.css";
import bg1 from "../../assets/images/Home-image/banner-bg1.png";
import bg2 from "../../assets/images/Home-image/banner-bg2.png";
import bg3 from "../../assets/images/Home-image/banner-bg3.png";
import radioCheck from '../../assets/images/Home-image/radio-check.png'

const HomeBanner = () => {
  const colors = [bg1, bg2, bg3];
  return (
    <div className="banner-slider">
      <div className="banner-slider-element">
        <div className="element-container">
            <div className="banner-sliderBox-l">
               <h3>Быстрый запуск бизнеса Landing page</h3>
               <h2>от 25 000₽</h2>
            </div>
            <div className="banner-sliderBox-r">
               <img src="#" alt="img" />
            </div>
        </div>
        <div className="banner-slider-widget">
           <div className="box">
            <img src={radioCheck} alt="" />
            <p>Разработка приложений</p>
           </div>
           <div className="box">
            <img src={radioCheck} alt="" />
            <p>Influence-маркетинг</p>
           </div>
           <div className="box">
            <img src={radioCheck} alt="" />
            <p>Криптовалюты и блокчейн</p>
           </div>
           <div className="box">
            <img src={radioCheck} alt="" />
            <p>PR и медиа</p>
           </div>
           
        </div>
        </div>
      </div>
  );
};

export default HomeBanner;
