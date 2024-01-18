import Container from "../_Layout/Container/Container";

export default function Skills() {
  return (
    <div className="bg-secondary-500 text-white p-6">
      <Container>
        <h2 className="text-center text:xl sm:text-5xl">Mes compétences</h2>
        <div className="grille-skill flex flex-wrap">
          <div className="range-cont w-[50%]">
            <p className="label-skill">JavaScript</p>
            <p className="number-skill">90%</p>
            <div className="barre-skill b1"></div>
            <div className="barre-grises bg-slate-400 w-full"></div>
          </div>
          <div className="range-cont w-[50%]">
            <p className="label-skill">SEO</p>
            <p className="number-skill">75%</p>
            <div className="barre-skill b2"></div>
            <div className="barre-grises"></div>
          </div>
          <div className="range-cont w-[50%]">
            <p className="label-skill">UI / UX</p>
            <p className="number-skill">70%</p>
            <div className="barre-skill b3"></div>
            <div className="barre-grises"></div>
          </div>

          <div className="range-cont w-[50%]">
            <p className="label-skill">Node JS</p>
            <p className="number-skill">80%</p>
            <div className="barre-skill b4"></div>
            <div className="barre-grises"></div>
          </div>
          <div className="range-cont w-[50%]">
            <p className="label-skill">Wordpress</p>
            <p className="number-skill">70%</p>
            <div className="barre-skill b5"></div>
            <div className="barre-grises"></div>
          </div>
          <div className="range-cont w-[50%]">
            <p className="label-skill">React JS</p>
            <p className="number-skill">80%</p>
            <div className="barre-skill b6"></div>
            <div className="barre-grises"></div>
          </div>
        </div>
      </Container>
    </div>
  );
}
