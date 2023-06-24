import React from "react";
import { Helmet } from "react-helmet";

const Layout = ({ children, title }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta
          name="description"
          content={
            "Сайт для вашего бизнеса под ключ	МЫ АГЕНСТВО ПОЛНОГО ЦИКЛА для IT продуктов. Создаем простые решения для сложных задач вашего проекта. Разработаем IT продукт, настроим рекламу и построем из этого стабильную систему по привлечению клиентов"
          }
        />
        <meta name="robots" content="max-image-preview:large" />
        <meta property="og:title" content="Главная" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://usertech.ru/" />
        <meta property="og:site_name" content="Usertech - Digital агенство" />
        <meta
          property="og:description"
          content="Сайт для вашего бизнеса под ключ	МЫ АГЕНСТВО ПОЛНОГО ЦИКЛА для IT продуктов. Создаем простые решения для сложных задач вашего проекта. Разработаем IT продукт, настроим рекламу и построем из этого стабильную систему по привлечению клиентов	"
        />
      </Helmet>

      <main>{children}</main>
    </div>
  );
};

Layout.defaultProps = {
  title:
    "Usertech - Digital агенство - IT компания по разработке сайтов и приложений для бизнеса , а также их продвижение под ключ.",
};

export default Layout;
