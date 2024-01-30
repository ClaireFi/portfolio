import Presentation from "../../Presentation/Presentation"
import Skills from "../../Skills/Skills"
import Experience from "../../Experience/Experience"
import Contact from "../../Contact/Contact"
import Projects from "../../Projects/Projects"
import { useContext } from "react"
import { ThemeContext } from "../../../context/ThemeProvider"
import Footer from "../Footer/Footer"



export default function Content() {

  const { toggleTheme, darkMode } = useContext(ThemeContext);

  return (
    <main id="main">

      <Presentation />
      <div className="relative top-[100vh] z-10 bg-white dark:bg-[#111] [transition-property:background-color] duration-500 ease-[ease] delay-[0ms]">
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    
    
    </main>
  )
}