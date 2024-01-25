import Container from "../_Layout/Container/Container";

export default function Contact() {
  return (
    <Container>
      <div id="contact" className="scroll-smooth">
        <h2 className="text-center text:xl -rotate-3 text-secondary-500 sm:text-5xl sm:mb-12">
          Me contacter
        </h2>
        <div className=" flex justify-center">
          <form
            action="https://formspree.io/f/mqkredav"
            method="POST"
            className="flex flex-col justify-center sm:w-[50%] bg-secondary-500 p-4 rounded-lg text-black -rotate-3"
          >
            <input
              type="text"
              name="name"
              placeholder="Nom"
              required
              className="w-full border-b-2 bg-transparent border-white p-2 my-2 outline-none placeholder:text-white placeholder:italic"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full border-b-2 bg-transparent border-white p-2 my-2 outline-none  placeholder:text-white placeholder:italic"
            />

            <textarea
              name="message"
              placeholder="Veuillez saisir votre message..."
              required
              className="w-full border-2 bg-transparent border-white p-2 mt-12 mb-4 rounded-md resize-none outline-none min-h-[100px] placeholder:text-white placeholder:italic"
            />

            <button
              type="submit"
              className="button w-1/4 self-center m-6 bg-white text-secondary-500"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
}
