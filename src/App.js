import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AlgoritmJob,
  Blog,
  BlogChild,
  ContactPage,
  Home,
  ServicesChildPage,
  ServicesDetailCard,
  ServicesPage,
  ServicesVacansyCard,
  Studio,
  Vacancy,
} from "./pages/";
import { Footer, Navbar, StickyBtns } from "./components";
import { LangContext } from "./context/langContext";
import { useState } from "react";
import Layout from "./components/Layout/Layout";

function App() {
  const [changeLang, setchangeLang] = useState(localStorage.getItem("lang"));

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
                <Layout title={"Studio"}>
                  <Studio />
                </Layout>
              }
            />
            <Route
              path="/algoritm-job"
              element={
                <Layout title={"Algoritm Job"}>
                  <AlgoritmJob />
                </Layout>
              }
            />
            <Route
              path="/services"
              element={
                <Layout title={"Services"}>
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
              element={
                <Layout title={"Services"}>
                  <ServicesChildPage />
                </Layout>
              }
            />
            <Route
              path="/contact"
              element={
                <Layout title={"Contact"}>
                  <ContactPage />
                </Layout>
              }
            />
            <Route
              path="/blog"
              element={
                <Layout title={"Blog"}>
                  <Blog />
                </Layout>
              }
            />
            <Route
              path="/blog-detail/:id"
              element={
                <Layout title={"Blog id"}>
                  <BlogChild />
                </Layout>
              }
            />
            <Route
              path="/jobs"
              element={
                <Layout title={"Jobs"}>
                  <Vacancy />
                </Layout>
              }
            />
          
          </Routes>
          <Footer />
        </LangContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
