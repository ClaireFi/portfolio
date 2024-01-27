import React, { useEffect, useState, useRef } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import Container from "../_Layout/Container/Container";
import ProgressBar from "../ProgressBar/ProgressBar";

export default function Skills() {

  const { toggleTheme, darkMode } = useContext(ThemeContext);

  const skillsData = [
    { label: "CSS", bgcolor: "#0028f2", completed: 80 },
    { label: "Javascript", bgcolor: "#f0db4f", completed: 60 },
    { label: "React", bgcolor: "#61dbfb", completed: 35 },
    { label: "SEO", bgcolor: "#6a1b9a", completed: 40 },
    { label: "Wordpress", bgcolor: "#5ad673", completed: 30 },
    { label: "Accessibilité", bgcolor: "#ef6c00", completed: 40 },
  ];

  const [completed, setCompleted] = useState(Array(skillsData.length).fill(0));

  const skillsRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        skillsData.forEach((_, index) => {
          startSetTimeOut(index);
        });
      }
    });

    observer.observe(skillsRef.current);

    return () => {
      observer.unobserve(skillsRef.current);
    };
  }, [skillsData]);

  const startSetTimeOut = (index) => {

    const intervalId = setTimeout(() => {
      // Utilise la valeur de completed de la compétence sélectionnée
      const skillCompleted = skillsData[index]?.completed || 0;

      setCompleted((prevCompleted) => {
        const newCompleted = [...prevCompleted];
        newCompleted[index] = skillCompleted;
        return newCompleted;
      });
    }, 200);

    return () => {
      clearTimeout(intervalId); 
    };
  };

  return (
    <div className="bg-secondary-500 dark:bg-secondary-00 text-white p-6 scroll-smooth" id="skills">
      <Container>
        <h2 className="text-center text-3xl sm:text-5xl">Mes compétences</h2>
        <div ref={skillsRef} className="grille-skill flex flex-wrap justify-between py-2 sm:p-8">
          {skillsData.map((item, index) => (
            <div key={index} className="w-[100%] sm:w-[45%] my-4 sm:my-8 ">
              <h3 className="text-xl mb-2">{item.label}</h3>
              <ProgressBar bgcolor={item.bgcolor} completed={completed[index]} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
