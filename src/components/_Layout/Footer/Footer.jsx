import { useState } from "react";
import Container from "../Container/Container";
import linkedinWhite from "../../../assets/linkedin_white.svg";
import linkedinBlue from "../../../assets/linkedin_blue.svg";

export default function Footer() {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <footer className="bg-secondary-700 text-white mt-20">
      <Container>
        <div className="flex flex-row justify-between items-center">
          <span>Claire Fichter</span>
          <span>
            <a
              href="https://fr.linkedin.com/in/claire-fichter-1a9672a1"
              target="_blank"
              className="mr-4"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={isHovered ? linkedinBlue : linkedinWhite} className="w-[35px] inline-block transition-transform transform hover:scale-110" />
            </a>
          </span>
        </div>
      </Container>
    </footer>
  );
}
