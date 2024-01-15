import sun from "../../../../assets/sun.svg";
import moon from "../../../../assets/moon.svg";
import { useContext } from "react";
import { ThemeContext } from "../../../../context/ThemeProvider";

export default function ToggleThemeButton() {
  const { toggleTheme, darkMode } = useContext(ThemeContext);


  return (
    <div>
      <button onClick={toggleTheme} className="cursor-pointer">
        <img src={`${darkMode ? sun : moon}`} alt="Dark mode" className="w-[40px]" />
      </button>
    </div>
  );
}
