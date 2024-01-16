import Navbar from "./Navbar/Navbar";
import ToggleThemeButton from "./ToggleThemeButton/ToggleThemeButton";
import CV from "../../../assets/CV.pdf"


export default function Header() {


  return (
    <header className="flex flex-col justify-between  fixed top-0 w-full bg-opacity-50 backdrop-blur-sm z-10 sm:flex-row sm:p-4">
      <span className="hidden sm:flex items-center text-2xl font-semibold">Claire Fichter</span>
      <div className="flex flex-col items-end sm:items-center sm:flex-row ">
        <Navbar />
        <div className="flex items-center">
          <a href={CV} download className="button mr-4">CV</a>
          <ToggleThemeButton />
        </div>
     
      </div>
    </header>
  );
}
