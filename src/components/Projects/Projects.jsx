import React, {useEffect, useState} from "react";
import Container from "../_Layout/Container/Container";
import ScrollAnimation from "react-animate-on-scroll";

export default function Projects() {

   const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
      const handleResize = () => {
         setIsMobile(window.innerWidth <= 768);
      };
      // Vérifie la taille de la fenêtre lors du chargement de la page
      handleResize();

      // Ajout d'un écouteur d'événements pour mettre à jour la variable isMobile lors du redimensionnement de la fenêtre
      window.addEventListener('resize', handleResize);

      return () => {
         window.removeEventListener("resize", handleResize)
      };
   }, []);



  const projectsData = [
    {
      title: "Projet professionnel :",
      subtitle: "Olela",
      content:
        "Habillage de la réservation en ligne d'Olela (à partir de l'étape 1 du tunnel de réservation : options et occupants) et de son espace client",
      link: "https://www.olela.fr/",
      tech: ["CSS", "JS"],
    },
    {
      title: "Projet professionnel :",
      subtitle: "Edenvillages",
      content:
        "Habillage de la réservation en ligne d'Edenvillages (à partir de l'étape 1 du tunnel de réservation : détails de mon séjour) et de son espace client",
      link: "https://www.eden-villages.fr/",
      tech: ["CSS", "JS", "REACT"],
    },
    {
      title: "Projet perso :",
      subtitle: "Amélioration de l'habitat",
      content:
        "Création d'un site vitrine pour la Société Amélioration de l'habitat ",
      link: "",
      tech: ["CSS", "JS", "REACT"],
    },
    {
      title: "Projet perso :",
      subtitle: "Scroll infini",
      content: "Mise en place d'un scroll infini",
      link: "",
      tech: ["CSS", "JS", "REACT"],
    },
    {
      title: "Projet perso :",
      subtitle: "Application prise de notes",
      content: "Création d'une application prise de notes",
      link: "",
      tech: ["CSS", "JS", "REACT"],
    },
    {
      title: "Projet perso :",
      subtitle: "Site e-commerce avec React",
      content: "Mise en place d'un site e-commerce fictif",
      link: "",
      tech: ["CSS", "JS", "REACT"],
    },
  ];

  return (
    <div id="projects" className="scroll-smooth">
      <Container>
        <h2 className="text-center text-3xl mb-4 sm:mb-12 sm:text-5xl">Mes projets</h2>
        <div className="flex flex-wrap">
          {projectsData.map((item, index) => (
            <ScrollAnimation
              animateIn="flipInX"
              className="card group w-full sm:w-[30%] bg-greenCustom-100 rounded-lg text-white p-4 m-4 transition duration-150 ease-out hover:bg-yellowCustom-500 hover:text-secondary-500 hover:-translate-y-3 hover:ease-in sm:h-[310px]"
              key={index}
            >
              <a href={isMobile ? 'javascript:;' : `${item.link}`} {...(!isMobile && {target :'_blank'} )}>
                <div className="project h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl mb-1">{item.title}</h3>
                    <h4 className="text-xl mb-4">{item.subtitle}</h4>
                    <div className="content">{item.content}</div>
                  </div>
                  <div>
                    <div className="my-4 text-center">
                      <button
                        className="button bg-transparent border-white hover:bg-yellow-300 group-hover:text-secondary-500 group-hover:border-secondary-500"
                        {...(isMobile &&  {onClick : () => window.open(item.link, "_blank")})}
                      > 
                        Découvrez le projet
                      </button>
                    </div>

                    <div className="text-right font-bold">
                      {item.tech.join(" ")}
                    </div>
                  </div>
                </div>
              </a>
            </ScrollAnimation>
          ))}
        </div>
      </Container>
    </div>
  );
}
