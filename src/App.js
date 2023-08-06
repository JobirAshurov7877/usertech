import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AlgoritmJob,
  Blog,
  BlogChild,
  ContactPage,
  Home,
  PageNotFound,
  SecurityPage,
  ServicesChildPage,
  ServicesDetailCard,
  ServicesPage,
  Studio,
  Vacancy,
} from "./pages/";
import { Footer, Navbar, StickyBtns } from "./components";
import { LangContext } from "./context/langContext";
import { useState } from "react";
import Layout from "./components/Layout/Layout";
import Sitemap from "./sitemap";

function App() {
  const [changeLang, setchangeLang] = useState(
    localStorage.getItem("lang") || "ru"
  );

  return (
    <>
      <BrowserRouter>
        <LangContext.Provider value={{ changeLang, setchangeLang }}>
          <Navbar />
          <StickyBtns />
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
            <Route
              path="/studio"
              element={
                <Layout
                  title={"Студия - Usertech - Digital агенство"}
                  link={"https://usertech.ru/studio"}
                  subtitle={"Студия"}
                  description={
                    "Сайт для вашего бизнеса под ключ	МЫ АГЕНСТВО ПОЛНОГО ЦИКЛА для IT продуктов. Создаем простые решения для сложных задач вашего проекта. Разработаем IT продукт, настроим рекламу и построем из этого стабильную систему по привлечению клиентов	"
                  }
                >
                  <Studio />
                </Layout>
              }
            />
            <Route
              path="/algoritm-job"
              element={
                <Layout
                  title={"Алгоритм работы - Usertech - Digital агенство"}
                  link={"https://usertech.ru/algoritm-job"}
                  subtitle={"Алгоритм работы"}
                  description={
                    "Наш подход к проектам  Можно ли построить долговечный дом без проекта и чертежей? Можно ли оценить стоимость его постройки без сметы? Конечно же нет, скажете вы. Действительно, если речь не о дачной избушке, никому в голову не придёт строить дом без чертежей. В то же время заказчики мобильных и веб-приложений часто упускают такой важный"
                  }
                >
                  <AlgoritmJob />
                </Layout>
              }
            />
            <Route
              path="/services"
              element={
                <Layout
                  title={"Услуги - Usertech - Digital агенство "}
                  link={"https://usertech.ru/services"}
                  subtitle={"Услуги"}
                  description={
                    "Чем мы можем вам помочь? Чем мы можем помочь вам? Разрабатываем веб и мобильные приложения, проводим эффективные маркетинговые кампании. Как разобраться во всем многообразии услуг и понять какой именно набор нужен именно Вам? Давайте начнем с разработки концепции! Web разработка (Сайты) Заказав сайт под ключ у нас,"
                  }
                >
                  <ServicesPage />
                </Layout>
              }
            />
            <Route
              path="/services/sub_menu/:id"
              element={<ServicesDetailCard />}
            />
            <Route
              path="services/menu_post_deteile/:id"
              element={<ServicesChildPage />}
            />
            <Route
              path="/contact"
              element={
                <Layout
                  title={"Наши контакты -  Usertech - Digital агенство"}
                  link={"https://usertech.ru/contact"}
                  subtitle={"Наши контакты"}
                  description={
                    "Цифры говорят сами за себя     Есть идеи проекта ?  Свяжитесь с нами     Только самые талантливыеработают в нашей команде   Мы не завышаем цены,ведем учет по часам   Мы всегда делаемкак для себя"
                  }
                >
                  <ContactPage />
                </Layout>
              }
            />
            <Route
              path="/blog"
              element={
                <Layout
                  title={"Blog news usertech - Usertech - Digital агенство"}
                  link={"https://usertech.ru/blog"}
                  subtitle={"Блог"}
                >
                  <Blog />
                </Layout>
              }
            />
            <Route path="/blog-detail/:id" element={<BlogChild />} />

            <Route
              path="/jobs"
              element={
                <Layout
                  title={"Вакансии -  Usertech - Digital агенство"}
                  link={"https://usertech.ru/jobs"}
                  subtitle={"Вакансии"}
                  description={
                    "ВАКАНСИИ  Мы постоянно ищем лучшие таланты, кто готов улучшать свои навыки в разработке передовых технологий и делиться опытом.     СПЕЦИАЛИЗАЦИЯ: Project management СПЕЦИАЛИЗАЦИЯ: Back-end coding / Architecture СПЕЦИАЛИЗАЦИЯ:Front-end coding СПЕЦИАЛИЗАЦИЯ:Manage email campaigns СПЕЦИАЛИЗАЦИЯ:Experience in B2B sales     геореклама санкт-петербург разработкагеореклама спб под ключгеореклама спб купитьгеореклама спб создатьгеореклама спб разработка геореклама пите"
                  }
                >
                  <Vacancy />
                </Layout>
              }
            />
            <Route
              path="/polisy"
              element={
                <Layout
                  title={"Вакансии -  Usertech - Digital агенство"}
                  link={"https://usertech.ru/polisy"}
                  subtitle={"polisy"}
                  description={
                    "ВАКАНСИИ  Мы постоянно ищем лучшие таланты, кто готов улучшать свои навыки в разработке передовых технологий и делиться опытом.     СПЕЦИАЛИЗАЦИЯ: Project management СПЕЦИАЛИЗАЦИЯ: Back-end coding / Architecture СПЕЦИАЛИЗАЦИЯ:Front-end coding СПЕЦИАЛИЗАЦИЯ:Manage email campaigns СПЕЦИАЛИЗАЦИЯ:Experience in B2B sales     геореклама санкт-петербург разработкагеореклама спб под ключгеореклама спб купитьгеореклама спб создатьгеореклама спб разработка геореклама пите"
                  }
                >
                  <SecurityPage />
                </Layout>
              }
            />
            <Route path="*" element={<PageNotFound />} />

            <Route path="/sitemap.xml" element={<Sitemap />} />
          </Routes>
          <Footer />
        </LangContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
