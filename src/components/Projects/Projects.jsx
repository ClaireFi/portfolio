import Container from "../_Layout/Container/Container"
import ScrollAnimation from "react-animate-on-scroll";


export default function Projects() {
  return (
    <div id="projects" className="scroll-smooth">
      <Container>
         <h2 className="text-center text:xl mb-12 sm:text-5xl">Mes projets</h2>
         <div className="flex flex-wrap">
            <ScrollAnimation animateIn="flipInX">
               <div className="wrapper w-[30%] bg-slate-950 rounded-lg text-white p-4 mx-4">
                  <div className="project">
                     <h3 className="text-2xl mb-2">Projet 1</h3>
                     <div className="content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rem architecto eum repellendus! Esse eveniet odio illum maiores accusantium possimus beatae architecto! Nobis unde ea doloribus tempora veniam iure eos!
                        Optio eligendi laboriosam sint quos unde numquam temporibus cupiditate.
                     </div>
                  </div>
               </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="flipInX" className="w-[30%] bg-slate-950 rounded-lg text-white p-4 mx-4">
               <div className="project">
                  <h3 className="text-2xl mb-2">Projet 1</h3>
                  <div className="content">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rem architecto eum repellendus! Esse eveniet odio illum maiores accusantium possimus beatae architecto! Nobis unde ea doloribus tempora veniam iure eos!
                     Optio eligendi laboriosam sint quos unde numquam temporibus cupiditate.
                  </div>
               </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="flipInX" className="w-[30%] bg-slate-950 rounded-lg text-white p-4 mx-4">
               <div className="project">
                  <h3 className="text-2xl mb-2">Projet 1</h3>
                  <div className="content">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rem architecto eum repellendus! Esse eveniet odio illum maiores accusantium possimus beatae architecto! Nobis unde ea doloribus tempora veniam iure eos!
                     Optio eligendi laboriosam sint quos unde numquam temporibus cupiditate.
                  </div>
               </div>
            </ScrollAnimation>
        </div>

      </Container>
    </div>
  )
}