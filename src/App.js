import { BrowserRouter, Route, Routes } from "react-router-dom";
import  { AlgoritmJob, Blog, ContactPage, Home, ServicesChildPage, ServicesVacansyCard, Studio } from "./pages/";
import { Footer, Navbar } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
            <Route path='/' element={<Home />  } />
            <Route path="/studio" element={ <Studio /> } />
            <Route path="/algoritm-job" element={ <AlgoritmJob /> } />
            <Route path="/:id" element={ <ServicesVacansyCard /> } />
            <Route path="services/:id" element={ <ServicesChildPage /> } />
            <Route path="/contact" element={ <ContactPage/> } /> 
            <Route path="/blog" element={ <Blog/> } /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
