import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./components/_Layout/Container/Container";
import Header from "./components/_Layout/Header/Header";
import Footer from "./components/_Layout/Footer/Footer";
import Content from "./components/_Layout/Content/Content";
import Presentation from "./components/Presentation/Presentation"
import Skills from "./components/Skills/Skills"
import Experience from "./components/Experience/Experience"
import Contact from "./components/Contact/Contact"
import NotFound from "./components/NotFound/NotFound";



import "./styles/css/App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        
        <Container>
          <Routes>
            <Route path="/" element={<Content />}>          
              <Route path="/#presentation" element ={<Presentation />} ></Route>
              <Route path="/#skills" element ={<Skills />} ></Route>
              <Route path="/#experience" element ={<Experience />} ></Route>
              <Route path="/#contact" element ={<Contact />} ></Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
