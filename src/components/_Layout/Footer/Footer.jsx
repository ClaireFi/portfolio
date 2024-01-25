import Container from "../Container/Container"
import linkedinWhite from "../../../assets/linkedin_white.svg"

export default function Footer() {
  return (
    <footer className="bg-secondary-700 text-white mt-20">
      <Container>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <span>Claire Fichter</span>
          <span><a href="https://fr.linkedin.com/in/claire-fichter-1a9672a1" target="_blank" className="mr-4"><img src={linkedinWhite} className="w-[35px] inline-block" /></a></span>
        </div>
      </Container>
    </footer>
  )
}