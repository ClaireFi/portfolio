import Container from "../_Layout/Container/Container";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-14 top-[3em] sm:w-[60%]">
      <Container>
        <ScrollAnimation animateIn='wobble' initiallyVisible={true}>
          <h1 className="text-3xl sm:text-5xl mb-4 sm:mb-12">404 : Page not found.</h1>
        </ScrollAnimation>
        <div className="mb-4 sm:mb-12 text-xl">
          Qui aurait cru que même dans un portfolio bien organisé, une
          page puisse jouer à cache-cache ? On la cherche activement, mais en
          attendant, pourquoi ne pas découvrir les autres projets qui restent bien sagement à leur place ?
        </div>
        <button className="border button">
          <Link to="/#projects">Retour</Link>
        </button>
      </Container>
    </div>
  );
}
