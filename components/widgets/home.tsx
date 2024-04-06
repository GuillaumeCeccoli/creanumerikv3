import { Separator } from "@/components/ui/separator";
import { SOCIAL_LINKS } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HomePage() {
  return (
    <article className="flex flex-col items-center text-white">
      <h1 className="text-3xl sm:text-5xl">Guillaume Ceccoli</h1>
      <Separator className="my-5 w-3/5 md:w-2/4 lg:w-1/3 xl:w-1/6" />
      <h2 className="text-lg italic sm:text-xl xl:text-2xl">
        Développeur Web - Freelance
      </h2>
      <div className="flex flex-row items-center justify-around w-4/6 mt-10 mb-14 sm:w-52 xl:w-72">
        {SOCIAL_LINKS.map((link, index) => (
          <Link
            key={link.id}
            href={link.url}
            className="text-3xl hover:text-blue-300 transition-colors duration-500 ease-in-out iconAnimation"
            target="_blank"
            style={
              {
                "--animation-delay": `${0.2 + index * 0.2}s`,
              } as React.CSSProperties
            }
          >
            <link.icon className="xl:sizeIcon" />
          </Link>
        ))}
      </div>
      <div className="flex flex-col my-10 items-center md:mb-20 md:flex-row md:justify-between md:gap-20 md:w-4/5 lg:gap-2 lg:w-5/6 lg:mb-0 xl:gap-10 xl:my-28">
        <div className="w-4/5 flex flex-row justify-around relative transition-Y lg:ml-20">
          <Image
            src="/assets/Guillaume.jpeg"
            alt="Guillaume Ceccoli"
            width={200}
            height={200}
            className="rounded-xl shadowImg z-10 2xl:w-[300px]"
          />
          <div className="w-[200px] h-full absolute mt-5 ml-10 rounded-xl border-2 border-white bg-transparent 2xl:w-[300px]"></div>
        </div>
        <p className="w-4/5 transitionX mt-20 pb-20 self-center md:w-5/6 md:mt-0 md:pb-0 lg:w-3/6 xl:text-lg 2xl:text-xl">
          Passionné par le développement et le design, j’aime relever de
          nouveaux défis et sortir de ma zone de confort. Qu’il s’agisse
          d’applications, de sites web sur-mesure ou encore d’une refonte, j’ai
          à coeur de matérialiser vos idées afin de vous aider à réaliser vos
          objectifs.
        </p>
      </div>
    </article>
  );
}

