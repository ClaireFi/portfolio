import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/_Layout/Header/Header";
import Footer from "./components/_Layout/Footer/Footer";
import Content from "./components/_Layout/Content/Content";
import Presentation from "./components/Presentation/Presentation"
import Skills from "./components/Skills/Skills"
import Experience from "./components/Experience/Experience"
import Contact from "./components/Contact/Contact"
import NotFound from "./components/NotFound/NotFound";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeProvider"

import "./styles/css/App.css";

function App() {
  const { toggleTheme, darkMode } = useContext(ThemeContext);
  return (
    <div className="dark:bg-[#111] dark:text-[#f1f1f1] [transition-property:background-color] duration-500 ease-[ease] delay-[0ms]">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Content />}>          
              <Route path="/#presentation" element ={<Presentation />} ></Route>
              <Route path="/#skills" element ={<Skills />} ></Route>
              <Route path="/#experience" element ={<Experience />} ></Route>
              <Route path="/#contact" element ={<Contact />} ></Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
