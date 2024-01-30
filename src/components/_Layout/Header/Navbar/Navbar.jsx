import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useContext } from "react";
import { ThemeContext } from "../../../../context/ThemeProvider";

export default function Navbar(props) {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
    props.onShowMenuChange(!showMenu);
  };


  const { toggleTheme, darkMode } = useContext(ThemeContext);


  return (
    <nav
      className={`${
        showMenu ? " bg-secondary-500 text-white h-screen w-screen" : ""
      } p-4 flex flex-col font-semibold relative sm:h-auto sm-w-auto sm:bg-none`}
    >
      <div
        onClick={handleToggleMenu}
        className={`${
          showMenu ? "active w-full" : "inactive"
        } flex contLine w-[40px] justify-end h-[12px] pt-8 pr-8 cursor-pointer relative md:hidden`}
      >
        <div className="line dark:bg-white dark:after:bg-white dark:before:bg-white transition-none"></div>
      </div>

      <div
        className={`${
          showMenu ? "flex h-screen" : "hidden"
        }  flex-col items-center justify-center w-full top-full pb-5 sm:relative sm:flex-row sm:pb-0 sm:mr-8 md:flex`}
        onClick={showMenu ? handleToggleMenu : undefined}

      >
        <Link
          to="/portfolio/#main"
          className={`${
            showMenu ? "after:bg-white text-2xl" : "after:bg-black text-lg"
          } inline-block mx-2 py-2  sm:py-0 after:content-[''] after:block after:w-0 after:h-[2px] dark:after:bg-white after:rounded-full after:mx-auto after:mt-[5px] after:transition-all after:duration-200 after:ease-out after:hover:w-full`}
          onClick={showMenu ? handleToggleMenu : undefined}
        >
          Présentation
        </Link>
        <Link
          to="/portfolio//#skills"
          className={`${
            showMenu ? "after:bg-white text-2xl my-2" : "after:bg-black text-lg"
          } inline-block mx-2 py-2 sm:py-0 after:content-[''] after:block after:w-0 after:h-[2px] dark:after:bg-white after:rounded-full after:mx-auto after:mt-[5px] after:transition-all after:duration-200 after:ease-out after:hover:w-full`}
          onClick={showMenu ? handleToggleMenu : undefined}
        >
          Compétences
        </Link>
        <Link
          to="/portfolio//#projects"
          className={`${
            showMenu ? "after:bg-white text-2xl my-2" : "after:bg-black text-lg"
          } inline-block mx-2 py-2 sm:py-0 after:content-[''] after:block after:w-0 after:h-[2px] dark:after:bg-white after:rounded-full after:mx-auto after:mt-[5px] after:transition-all after:duration-200 after:ease-out after:hover:w-full`}
          onClick={showMenu ? handleToggleMenu : undefined}
        >
          Projets
        </Link>
        <Link
          to="/portfolio//#experience"
          className={`${
            showMenu ? "after:bg-white text-2xl my-2" : "after:bg-black text-lg"
          } inline-block mx-2 py-2  sm:py-0 after:content-[''] after:block after:w-0 after:h-[2px] dark:after:bg-white after:rounded-full after:mx-auto after:mt-[5px] after:transition-all after:duration-200 after:ease-out after:hover:w-full`}
          onClick={showMenu ? handleToggleMenu : undefined}
        >
          Expérience
        </Link>
        <Link
          to="/portfolio//#contact"
          className={`${
            showMenu ? "after:bg-white text-2xl my-2" : "after:bg-black text-lg"
          } inline-block mx-2 py-2 sm:py-0 after:content-[''] after:block after:w-0 after:h-[2px] dark:after:bg-white after:rounded-full after:mx-auto after:mt-[5px] after:transition-all after:duration-200 after:ease-out after:hover:w-full`}
          onClick={showMenu ? handleToggleMenu : undefined}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
