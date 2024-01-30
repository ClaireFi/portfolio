import { useContext, useState } from "react";
import { ThemeContext } from "../../../context/ThemeProvider";
import Navbar from "./Navbar/Navbar";
import ToggleThemeButton from "./ToggleThemeButton/ToggleThemeButton";
import CV from "../../../assets/CV.pdf"


export default function Header() {

  const { toggleTheme, darkMode } = useContext(ThemeContext);
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenuChange = (newShowMenuValue) => {
    setShowMenu(newShowMenuValue);
  };


  return (
    <header className="font-primary flex flex-row justify-between items-center flex-wrap fixed top-0 w-full bg-opacity-50 backdrop-blur-sm z-20 md:p-4">
      <span className={`${showMenu && "hidden"} md:flex items-center text-2xl font-semibold p-4`}>Claire Fichter</span>
      <div className={`${showMenu ? "flex-col" : "flex-row-reverse"} flex  items-end md:items-center md:flex-row`}>
        <Navbar onShowMenuChange={handleShowMenuChange} />
        <div className="flex items-center">
          {/* <a href={CV} download className="button mr-4 border-2 border-white dark:bg-secondary-600">CV</a> */}
          <ToggleThemeButton />
        </div>
      </div>
    </header>
  );
}
