import { REALISATIONS } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function Realisations() {
  return (
    <article className="flex flex-col items-center">
      <h2 className="text-white text-3xl z-10 clignotement textShadow mb-10">
        Réalisations
      </h2>
      <p className="text-white w-4/5 text-center lg:w-2/5 my-4">
        Voici un petit aperçu de projets réalisés, que ce soit des projets
        personnels, des challenges thématiques ou clients.
      </p>
      <div className="flex flex-col items-center lg:flex-row lg:flex-wrap scaleTo">
        {REALISATIONS.map((realisation, id) => (
          <div
            key={id}
            className="text-white flex flex-col items-center w-4/5 gap-4 my-10 lg:w-2/5 lg:mx-auto border rounded-lg border-gray-400 p-4"
          >
            <h3 className="textShadow text-xl">{realisation.title}</h3>
            <div className="relative z-10 my-5">
              <Image
                src={realisation.image}
                alt={realisation.title}
                width={200}
                height={200}
                className="rounded-xl shadowImg xl:w-[300px]"
              />
              <div className="w-[200px] h-full absolute -z-10 ml-4 mt-5 rounded-xl border-2 border-white bg-transparent top-0 xl:w-[300px]"></div>
            </div>
            <div className="flex flex-col items-center text-center gap-4 w-10/12 py-4 text-sm lg:text-base">
              <p>{realisation.description}</p>
              <Link
                href={realisation.href}
                className="bg-gray-400 bg-opacity-50 my-4 p-2 rounded-lg hover:bg-[#50686f] transition-colors duration-500 ease-in-out"
              >
                Lien du projet
              </Link>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

