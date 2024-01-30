import {calculateYearsExperience} from "../Utils/DateUtils"
import CV from "../../assets/CV.pdf"
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import computerSun from "../../assets/computer_sun.svg"
import computerMoon from "../../assets/computer_moon.svg"
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider"
import Container from "../_Layout/Container/Container"
import linkedinBlue from "../../assets/linkedin_blue.svg"


export default function Presentation() {
  const [text, count] = useTypewriter({
    words : ["mon Portfolio!"],
    loop: true
  })
  const { toggleTheme, darkMode } = useContext(ThemeContext);

  const startDateExperienceDev = new Date("2017-05-01");
  const yearsSinceStart = calculateYearsExperience(startDateExperienceDev);



  return (
    <div className="fixed w-full">
      <Container>
        <section id="presentation" className="flex items-center flex-col-reverse h-screen scroll-smooth sm:flex-row">
        
          <div className="content w-full sm:w-[50%]">
            <div className="wrapperText my-4">
              <p className="text-2xl sm:text-4xl my-6">Bienvenue sur <span className="font-bold text-cyan-600">{text}</span></p>
              <p className="text-xl sm:text-2xl my-4">Claire Fichter</p>
              <p className="text-xl sm:text-2xl text-cyan-600">Intégratrice Web</p>
              <p className="text-xl sm:text-2xl">{yearsSinceStart} ans d'expérience</p>
            </div>
            <div className="wrapperButton my-10 text-center flex items-end">
              <a href="https://fr.linkedin.com/in/claire-fichter-1a9672a1" target="_blank" className="mr-4"><img src={linkedinBlue} className="w-[35px] inline-block transition-transform transform hover:scale-110" /></a>
              {/* <a href={CV} download className="button ml-4">CV</a> */}
            </div>
          </div>
          <div className="wrapperPicture w-full sm:w-[50%]">
            <img src={`${darkMode ? computerSun : computerMoon}`} alt="" />
          </div>
        
        </section>
      </Container>
    </div>
  )
}