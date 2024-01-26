import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import Container from "../_Layout/Container/Container";
import ScrollAnimation from "react-animate-on-scroll";
import {calculateYearsExperience} from "../Utils/DateUtils"

export default function Experience() {

  const { toggleTheme, darkMode } = useContext(ThemeContext);
  
  const startDateExperienceSqs = new Date("2018-03-01");
  const yearsSinceStart = calculateYearsExperience(startDateExperienceSqs);

  const experienceData = [
    { 
      title: "Séquoiasoft - Développeuse Web",
      dates: `Mars 2018 à aujourd'hui (${yearsSinceStart} ans)`,
      tasks: [
        "Intégration graphique d'un canal de réservation en ligne",
        "Analyse du cahier des charges, estimations des évolutions",
        "Analyse, reproduction, correction, rattrapage et tests d’incidents de production",
        "Tests manuels et recette",
        "Planification et attribution des demandes au sein de l'équipe",
        "Assistance à l’équipe support et interne au service web"
      ], 
      color: "bg-yellowCustom-500",
      delayAnim : 100
    },
    { 
      title: "Styléo - Intégratrice Web",
      dates: "Décembre 2017 (3 mois)",
      tasks: [
        "Réalisation de sites Wordpress dans une agence Web en respectant les maquettes fournies par les graphistes",
        "Estimation des demandes client",
      ], 
      color: "bg-greenCustom-900",
      delayAnim : 500
    },
    { 
      title: "Ria Création - Stage intégratrice Web",
      dates: "Mai 2017 (6 mois)",
      tasks: [
        "Réalisation de sites Wordpress et Prestashop",
        "Formation client à l'outil Wordpress",
      ], 
      color: "bg-greenCustom-500" ,
      delayAnim : 1000
    },
    { 
      title: "Eurexo - Gestionnaire d'experts",
      dates: "2009-2016 (7 ans)",
      tasks: [
        "Gestion du planning des experts",
        "Facturation des dommages",
        "Rédaction des rapport d'expertise",
        "Création des notes d'honoraires",
        "Phoning, mailing, gestion du courrier, relances et suivi des dossiers",
      ], 
      color: "bg-greenCustom-100" ,
      delayAnim : 1500
    },
  ];



  return (
    
    <div id="experience" className="scroll-smooth bg-greenCustom-100 bg-opacity-15 dark:bg-opacity-10 [transition-property:background-color] duration-500 ease-[ease] delay-[0ms]">
      <Container>
        <h2 className="text-center text-3xl sm:text-5xl">Mes expériences</h2>
        <div className="my:4 sm:my-12">
          <div className=" flex flex-col items-center">
            {
              experienceData.map((item, index) => (
                <ScrollAnimation key={index} delay={item.delayAnim} animateIn='tada' initiallyVisible={true} className={`border ${item.color} text-black rounded-md p-4 my-6 w-[80%] sm:w-[60%] transition hover:-translate-y-3 hover:ease-in`}>
                    <h3 className="text-2xl">{item.title}</h3>
                    <div className="dates font-semibold mb-2">{item.dates}</div>
                    <div className="tasks">
                      <ul>
                        {item.tasks.map((oneTask, index) => 
                          <li key={index} className="italic">- {oneTask}</li>
                        )}
                      </ul>
                    </div>
                </ScrollAnimation>
              ))
            }

          </div>
        </div>


        </Container>
    </div>
  );
}
