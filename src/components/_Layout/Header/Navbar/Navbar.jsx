import { useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import hamburger from "../../../../assets/hamburger.svg";
import close from "../../../../assets/close.svg";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="">
      <Link to="/#presentation" className="inline-block py-2 mx-2 text-lg sm:py-0">
        1. Présentation
      </Link>
      <Link to="/#skills" className="inline-block py-2 mx-2 text-lg sm:py-0">
        2. Compétences
      </Link>
      <Link to="/#experience" className="inline-block py-2 mx-2 text-lg sm:py-0">
        3. Expérience
      </Link>
      <Link to="/#contact" className="inline-block py-2 mx-2 text-lg sm:py-0">
        4. Contact
      </Link>

      <button
        onClick={() => setShowMenu(!showMenu)}
        className="ml-auto sm:hidden"
      >
        <img
          className="w-4"
          src={showMenu ? close : hamburger}
          alt={showMenu ? "Cacher le menu" : "Voir le menu"}
        />
      </button>
    </nav>
  );
}
