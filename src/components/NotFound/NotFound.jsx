import Container from "../_Layout/Container/Container";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-14 top-[3em]">
      <Container>
        <h1>404 : Page not found. </h1>
        <div>
          404 : Qui aurait cru que même dans un portfolio bien organisé, une
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
