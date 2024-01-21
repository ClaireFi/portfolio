import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import hamburger from "../../../../assets/hamburger.svg";
import close from "../../../../assets/close.svg";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);


  return (
    <nav
      className={`${
        showMenu ? " bg-secondary-500 text-white h-screen w-screen" : ""
      } p-4 flex flex-col font-secondary  relative sm:h-auto sm-w-auto sm:bg-none`}
    >
        <div 
          onClick={() => setShowMenu(!showMenu)}
          className={`${showMenu ? "active w-full" : "inactive"} flex contLine w-[40px] justify-end h-[12px] pt-8 pr-8 cursor-pointer relative sm:hidden`}
          >
          <div className="line"></div>
        </div>
    
      <div
        className={`${
          showMenu ? "flex h-screen" : "hidden"
        }  flex-col items-center justify-center w-full top-full pb-5 sm:flex sm:relative sm:flex-row sm:pb-0 sm:mr-8`}
      >
        <Link
          to="/#presentation"
          className="inline-block hover:underline py-2 mx-2 text-lg sm:py-0"
        >
          Présentation
        </Link>
        <Link to="/#skills" className="inline-block hover:underline py-2 mx-2 text-lg sm:py-0">
          Compétences
        </Link>
        <Link
          to="/#experience"
          className="inline-block hover:underline py-2 mx-2 text-lg sm:py-0"
        >
          Expérience
        </Link>
        <Link to="/#contact" className="inline-block hover:underline py-2 mx-2 text-lg sm:py-0">
          Contact
        </Link>
      </div>
    </nav>
  );
}
