import React from "react";
import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoWhatsapp,
  IoMail,
} from "react-icons/io5";

export default function Contact() {
  return (
    <>
      <div className="mt-2">
        <p>
          Fico feliz em saber de seu interesse, aqui estão alguns dos meus
          canais de comunicação Disponiveis:
        </p>
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        <button
          className="p-2 border-black border rounded-xl flex justify-center items-center"
          onClick={() => window.open("https://www.linkedin.com/in/cassio-ra/")}
        >
          <IoLogoLinkedin className="text-black size-6" />
          <p>LinkedIn</p>
        </button>
        <button
          className="p-2 border-black border rounded-xl flex justify-center items-center"
          onClick={() =>
            window.open(
              "mailto:cassio_ra@outlook.com?subject=Interesse%20em%20seu%20Portif%C3%B3lio!",
            )
          }
        >
          <IoMail className="text-black size-6" />
          <p>Email</p>
        </button>
        <button
          className="p-2 border-black border rounded-xl flex justify-center items-center"
          onClick={() => window.open("https://wa.link/522n0i")}
        >
          <IoLogoWhatsapp className="text-black size-6" />
          <p>WhatsApp</p>
        </button>
        <button
          className="p-2 border-black border rounded-xl flex justify-center items-center"
          onClick={() => window.open("https://github.com/Cassio-ra")}
        >
          <IoLogoGithub className="text-black size-6" />
          <p>Github</p>
        </button>
      </div>
    </>
  );
}
