import React from "react";
import { Helmet } from "react-helmet";

const Layout = ({ children, title, subtitle, link, description }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="max-image-preview:large" />
        <meta property="og:title" content={subtitle} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={link} />
        <meta property="og:site_name" content="Usertech - Digital агенство" />
        <meta property="og:description" content={description} />
      </Helmet>

      <main>{children}</main>
    </div>
  );
};

Layout.defaultProps = {
  title:
    "Usertech - Digital агенство - IT компания по разработке сайтов и приложений для бизнеса , а также их продвижение под ключ.",
  link: "https://usertech.ru/",
  description:
    "Сайт для вашего бизнеса под ключ	МЫ АГЕНСТВО ПОЛНОГО ЦИКЛА для IT продуктов. Создаем простые решения для сложных задач вашего проекта. Разработаем IT продукт, настроим рекламу и построем из этого стабильную систему по привлечению клиентов	",
};

export default Layout;
