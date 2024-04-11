import { SKILLS } from "@/lib/constants";
import { Separator } from "../ui/separator";

export default function Skills() {
  return (
    <article className="flex flex-col items-center text-white">
      <h2 className="textShadow clignotement mb-10 text-2xl">
        Mes compétences
      </h2>
      <p className="text-white w-4/5 text-center lg:w-2/5 my-4">
        Voici les compétejnces que j&apos;ai acquises durant ma formation et mes
        projets ainsi que les outils dont je me sers.
      </p>
      <div className="flex flex-col items-center md:flex-row md:justify-around md:items-start">
        {SKILLS.map((skill, id) => (
          <div
            key={id}
            className="flex flex-col items-center w-4/5 gap-4 border border-gray-300 rounded-lg my-10 p-6 md:w-2/5"
          >
            {skill.icon({ size: 60 })}
            <h3 className="text-lg font-bold underline text-[#8dd2ea]">
              {skill.title}
            </h3>
            <p className="w-11/12 text-sm text-center">{skill.description}</p>
            <Separator className="w-4/5 my-4" />
            <p className="underline text-[#8dd2ea]">{skill.subtitle}</p>
            <ul>
              {skill.tools.map((tool, id) => (
                <li key={id} className="py-1">
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </article>
  );
}

