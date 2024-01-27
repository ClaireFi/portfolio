import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useContext } from "react";
import { ThemeContext } from "../../../../context/ThemeProvider";

export default function Navbar() {

  const [showMenu, setShowMenu] = useState(false);

  const { toggleTheme, darkMode } = useContext(ThemeContext);

  return (
    <nav
      className={`${
        showMenu ? " bg-secondary-500 text-white h-screen w-screen" : ""
      } p-4 flex flex-col font-secondary  relative sm:h-auto sm-w-auto sm:bg-none`}
    >
        <div 
          onClick={() => setShowMenu(!showMenu)}
          className={`${showMenu ? "active w-full" : "inactive"} flex contLine w-[40px] justify-end h-[12px] pt-8 pr-8 cursor-pointer relative md:hidden`}
          >
          <div className="line dark:bg-white dark:after:bg-white dark:before:bg-white "></div>
        </div>
    
      <div
        className={`${
          showMenu ? "flex h-screen" : "hidden"
        }  flex-col items-center justify-center w-full top-full pb-5 md:flex sm:relative sm:flex-row sm:pb-0 sm:mr-8`}
      >
        <Link
          to="/portfolio/#presentation"
          className="inline-block hover:underline py-2 mx-2 text-lg sm:py-0"
        >
          Présentation
        </Link>
        <Link to="/portfolio//#skills" className="inline-block hover:underline py-2 mx-2 text-lg sm:py-0">
          Compétences
        </Link>
        <Link
          to="/portfolio//#projects"
          className="inline-block hover:underline py-2 mx-2 text-lg sm:py-0"
        >
          Projects
        </Link>
        <Link
          to="/portfolio//#experience"
          className="inline-block hover:underline py-2 mx-2 text-lg sm:py-0"
        >
          Expérience
        </Link>
        <Link to="/portfolio//#contact" className="inline-block hover:underline py-2 mx-2 text-lg sm:py-0">
          Contact
        </Link>
      </div>
    </nav>
  );
}
