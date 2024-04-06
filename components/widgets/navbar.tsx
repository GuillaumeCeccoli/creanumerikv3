import { NAV_LINKS } from "@/lib/constants";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-72 flex flex-row justify-around items-center mx-auto bg-white rounded-full absolute bottom-10 lg:top-52 xl:left-28 lg:left-5 lg:flex-col lg:w-auto lg:justify-center lg:items-start lg:bg-transparent lg:text-white">
      {NAV_LINKS.map((link) => (
        <Link key={link.id} href={link.url}>
          <div className="flex flex-row items-center justify-center lg:clignotement">
            {
              <link.icon className="w-7 h-7 m-2 lg:w-10 lg:h-10 xl:w-14 xl:h-14" />
            }
            <span className="hidden lg:block lg:text-lg xl:text-xl">
              {link.title}
            </span>
          </div>
        </Link>
      ))}
    </nav>
  );
}

