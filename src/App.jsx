import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/_Layout/Header/Header";
import Footer from "./components/_Layout/Footer/Footer";
import Content from "./components/_Layout/Content/Content";
import Presentation from "./components/Presentation/Presentation"
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience"
import Contact from "./components/Contact/Contact"
import NotFound from "./components/NotFound/NotFound";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeProvider"

import "./styles/css/App.css";

function App() {
  const { toggleTheme, darkMode } = useContext(ThemeContext);
  return (
    <div className="[transition-property:background-color] duration-500 ease-[ease] delay-[0ms] dark:bg-[#111] dark:text-[#f1f1f1]">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/portfolio" />}></Route>
            <Route path="/portfolio" element={<Content />}>          
              <Route path="presentation" element ={<Presentation />} ></Route>
              <Route path="skills" element ={<Skills />} ></Route>
              <Route path="projects" element ={<Projects />} ></Route>
              <Route path="experience" element ={<Experience />} ></Route>
              <Route path="contact" element ={<Contact />} ></Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
