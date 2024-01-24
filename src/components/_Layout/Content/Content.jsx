import Presentation from "../../Presentation/Presentation"
import Skills from "../../Skills/Skills"
import Experience from "../../Experience/Experience"
import Contact from "../../Contact/Contact"
import Projects from "../../Projects/Projects"
import { useContext } from "react"
import { ThemeContext } from "../../../context/ThemeProvider"



export default function Content() {

  const { toggleTheme, darkMode } = useContext(ThemeContext);

  return (
    <main>

      <Presentation />
      <div className="relative top-[100vh] z-10 bg-white dark:bg-[#111]">
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    
    
    </main>
  )
}