import { createContext, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider(props) {
   const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark" ? true : false);

   function toggleTheme(){
      localStorage.setItem("theme", !darkMode === true ? "dark" : "light");
      setDarkMode(!darkMode)
   }

   if (darkMode) document.documentElement.classList.add("dark")
   else document.documentElement.classList.remove("dark")

  return (

    <div>
      <ThemeContext.Provider value={{toggleTheme, darkMode}}>
         {props.children}
      </ThemeContext.Provider>
      
    </div>
  )
}