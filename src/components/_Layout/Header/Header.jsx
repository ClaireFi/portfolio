import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeProvider";
import Navbar from "./Navbar/Navbar";
import ToggleThemeButton from "./ToggleThemeButton/ToggleThemeButton";
import CV from "../../../assets/CV.pdf"


export default function Header() {

  const { toggleTheme, darkMode } = useContext(ThemeContext);

  return (
    <header className="flex flex-col justify-between flex-wrap fixed top-0 w-full bg-opacity-50 backdrop-blur-sm z-20 md:flex-row md:p-4">
      <span className="hidden md:flex items-center text-2xl font-semibold">Claire Fichter</span>
      <div className="flex flex-col items-end md:items-center md:flex-row ">
        <Navbar />
        <div className="flex items-center">
          <a href={CV} download className="button mr-4 border-2 border-white dark:bg-secondary-600">CV</a>
          <ToggleThemeButton />
        </div>
      </div>
    </header>
  );
}
