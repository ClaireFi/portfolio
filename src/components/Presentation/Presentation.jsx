import CV from "../../assets/CV.pdf"
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import computerBlue from "../../assets/computer_blue.svg"
import computerWhite from "../../assets/computer_white.svg"
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider"

export default function Presentation() {
  const [text, count] = useTypewriter({
    words : ["mon Portfolio!"],
    loop: true
  })
  const { toggleTheme, darkMode } = useContext(ThemeContext);

  return (
    <section id="presentation" className="flex items-center">

      <div className="content w-[50%]">
        <div className="wrapperText my-4">
          <p className="text-4xl my-6">Bienvenue sur <span className="font-bold text-cyan-600">{text}</span></p>
          <p className="text-2xl my-4">Claire Fichter</p>
          <p className="text-2xl text-cyan-600">Intégratrice Web</p>
          <p className="text-2xl">6 ans d'expérience</p>
        </div>
        <div className="wrapperButton my-10 text-center">
          <a href="https://fr.linkedin.com/in/claire-fichter-1a9672a1" className="mx-4">Linkedin</a>
          <a href={CV} download className="button mx-4">CV</a>
        </div>
      </div>
      <div className="wrapperPicture w-[50%]">
        <img src={`${darkMode ? computerWhite : computerBlue}`} alt="" />
      </div>
    
    </section>
  )
}