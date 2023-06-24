import "./Home-customers.css";
import gifRobot from "../../assets/images/Home-image/robot.gif";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const HomeCustomers = () => {
  const { t } = useTranslation();
  const cardData = [
    {
      title: t("home-customers-card.card1.title"),
      path: "/",
      body: [
        t("home-customers-card.card1.li1"),
        t("home-customers-card.card1.li2"),
        t("home-customers-card.card1.li3"),
        t("home-customers-card.card1.li4"),
        t("home-customers-card.card1.li5"),
        t("home-customers-card.card1.li6"),
        t("home-customers-card.card1.li7"),
        t("home-customers-card.card1.li8"),
      ],
    },
    {
      title: t("home-customers-card.card2.title"),
      path: "/",
      body: [
        t("home-customers-card.card2.li1"),
        t("home-customers-card.card2.li2"),
        t("home-customers-card.card2.li3"),
        t("home-customers-card.card2.li4"),
        t("home-customers-card.card2.li5"),
        t("home-customers-card.card2.li6"),
        t("home-customers-card.card2.li7"),
        t("home-customers-card.card2.li8"),
      ],
    },
    {
      title: t("home-customers-card.card3.title"),
      path: "/",
      body: [
        t("home-customers-card.card3.li1"),
        t("home-customers-card.card3.li2"),
        t("home-customers-card.card3.li3"),
        t("home-customers-card.card3.li4"),
        t("home-customers-card.card3.li5"),
        t("home-customers-card.card3.li6"),
        t("home-customers-card.card3.li7"),
      ],
    },
  ];
  return (
    <div className="customers">
      <div className="customers-wrap">
        <div className="customers-element">
          <div className="element-container">
            <div className="customersBox_l">
              <div className="box-head">
                <h3>{t("customers-wrap.left.title1")}</h3>
                <h3>{t("customers-wrap.left.title2")}</h3>
              </div>
              <div className="box-body">
                <img src={gifRobot} alt="img" />
              </div>
            </div>
            <div className="customersBox_r">
              <ul>
                <h4 className="title">
                  {t("customers-wrap.right.card1.title")}
                </h4>
                <li>{t("customers-wrap.right.card1.li1")}</li>
                <li>{t("customers-wrap.right.card1.li2")}</li>
                <li>{t("customers-wrap.right.card1.li3")}</li>
                <li>{t("customers-wrap.right.card1.li4")}</li>
              </ul>
              <ul>
                <h4 className="title">
                  Был сайт и реклама в интернете, но не получили нужого
                  результата
                </h4>
                <li>{t("customers-wrap.right.card2.li1")}</li>
                <li>{t("customers-wrap.right.card2.li2")}</li>
                <li>{t("customers-wrap.right.card2.li3")}</li>
                <li>{t("customers-wrap.right.card2.li4")}</li>
                <li>{t("customers-wrap.right.card2.li5")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="card-wrap">
        {cardData.map((item, i) => (
          <div key={i} className="home-customers-card">
            <div className="customers-card-head">
              <h3 className="title">{item.title}</h3>
              <ul>
                {item.body.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="customers-card-btn">
              <Link to={"/services/sub_menu/2"}>
                {t("home-customers-card.button_title")}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCustomers;
