import { useTranslation } from "react-i18next";
import "./Home-our-suggestions.css";
import OurSuggestionsCard from "./Our-suggestions-card";

const HomeOurSuggestions = () => {
  const { t } = useTranslation();
  const ourSuggestionsCard = [
    {
      title: t("our-suggestions.box_1.title"),
      description: t("our-suggestions.box_1.content"),
    },
    {
      title: t("our-suggestions.box_2.title"),
      description: t("our-suggestions.box_2.content"),
    },
    {
      title: t("our-suggestions.box_3.title"),
      description: t("our-suggestions.box_3.content"),
    },
    {
      title: t("our-suggestions.box_4.title"),
      description: t("our-suggestions.box_4.content"),
    },
    {
      title: t("our-suggestions.box_5.title"),
      description: t("our-suggestions.box_5.content"),
    },
    {
      title: t("our-suggestions.box_6.title"),
      description: t("our-suggestions.box_6.content"),
    },
  ];

  return (
    <div className="our-suggestions">
      <div className="our-suggestions-element">
        <h3 className="title">{ t("our-suggestions.title")}</h3>
        <div className="cardBox">
          {ourSuggestionsCard.map((item, idx) => (
            <OurSuggestionsCard
              key={idx}
              cardTitle={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeOurSuggestions;
