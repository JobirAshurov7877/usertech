import { BrowserRouter, Route, Routes } from "react-router-dom";
import  { Home, Studio } from "./pages/";
import { Navbar } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
            <Route path='/' element={<Home />  } />
            <Route path="studio" element={ <Studio /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
