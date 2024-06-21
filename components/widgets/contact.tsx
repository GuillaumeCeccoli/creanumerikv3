import { SOCIAL_LINKS } from "@/lib/constants";
import Link from "next/link";
import { MdOutlineMail } from "react-icons/md";

export default function Contact() {
  return (
    <article id="contact" className="flex flex-col items-center">
      <h2 className="text-white clignotement text-3xl">Contact</h2>
      <div className="flex flex-col items-center my-20 lg:flex-row lg:items-start">
        <div className="flex flex-col items-center">
          <p className="text-white w-4/5 my-6 lg:w-4/6 lg:mt-0 text-center">
            Mon profil vous intéresse ? Vous avez une idée en tête ?
            N&apos;hésitez pas à m&apos;écrire, je vous répondrai rapidement !
          </p>
          <Link
            href="mailto:contact@creanumerik04-gc.fr"
            className="cursor-pointer flex flex-row justify-around items-center w-[220px] bg-gray-300 bg-opacity-50 p-2 rounded-xl my-10 hover:bg-[#6d7f84] transition-colors duration-500 ease-in-out"
          >
            <MdOutlineMail className="text-white text-4xl" />
            <span className="text-white">Me Contacter</span>
          </Link>
        </div>
        <div className="flex flex-col items-center w-full">
          <h3 className="text-white font-bold my-10 underline lg:mt-0">
            Autres liens et réseaux sociaux
          </h3>
          <div className="flex flex-row items-center justify-around w-[300px] text-white bg-gray-300 bg-opacity-50 p-2 rounded-xl hover:bg-[#6d7f84] transition-colors duration-500 ease-in-out cursor-pointer">
            <MdOutlineMail className="text-4xl" />
            <span className="text-[#8dd2ea]">contact@creanumerik04-gc.fr</span>
          </div>
          <div className="flex flex-row justify-between items-center w-[300px] my-10">
            {SOCIAL_LINKS.map((link, index) => (
              <Link
                key={link.id}
                href={link.url}
                className="text-white text-3xl hover:text-blue-300 transition-colors duration-500 ease-in-out"
                target="_blank"
                style={
                  {
                    "--animation-delay": `${0.5 + index * 0.2}s`,
                  } as React.CSSProperties
                }
              >
                <link.icon className="xl:sizeIcon" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

