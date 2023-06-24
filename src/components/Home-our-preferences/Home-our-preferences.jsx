import "./Home-our-preferences.css";
import OurPreferencerCard from "./Our-preferencer-card";
import cardImage_1 from "../../assets/images/Home-image/our-preferences-card1.png";
import cardImage_2 from "../../assets/images/Home-image/our-preferences-card2.png";
import cardImage_3 from "../../assets/images/Home-image/our-preferences-card3.png";
import cardImage_4 from "../../assets/images/Home-image/our-preferences-card4.png";
import cardImage_5 from "../../assets/images/Home-image/our-preferences-card5.png";
import { useTranslation } from "react-i18next";

const HomeOurPreferences = () => {
  const { t } = useTranslation();

  const cardData = [
    {
      image: cardImage_1,
      text: t("our-preferences.card_1_text"),
    },
    {
      image: cardImage_2,
      text: t("our-preferences.card_2_text"),
    },
    {
      image: cardImage_3,
      text: t("our-preferences.card_3_text"),
    },
    {
      image: cardImage_4,
      text: t("our-preferences.card_4_text"),
    },
    {
      image: cardImage_5,
      text: t("our-preferences.card_5_text"),
    },
  ];
  return (
    <div className="our-preferences">
      <div className="our-preferences-element">
        <h2 className="title">Наши преимущества</h2>
        <div className="our-preferences-cardBox">
          {cardData.map((item, idx) => (
            <OurPreferencerCard key={idx} image={item.image} text={item.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeOurPreferences;
