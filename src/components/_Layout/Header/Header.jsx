import Navbar from "./Navbar/Navbar";

export default function Header() {
  return (
    <header className="flex justify-between p-4 fixed top-0 w-full">
      <span>Claire Fichter</span>
      <div className="flex item">
        <Navbar />
        X
      </div>
      
    </header>
  );
}
