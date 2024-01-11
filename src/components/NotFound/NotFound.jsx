import {Link} from "react-router-dom"

export default function NotFound() {
  return (
    <div>
      <h1>Page not found</h1>
      <button className="border"><Link to="/">Retour</Link></button>
    </div>
  );
}
