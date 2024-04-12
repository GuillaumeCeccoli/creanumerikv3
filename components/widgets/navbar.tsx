import { NAV_LINKS } from "@/lib/constants";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="z-20 w-[320px] flex flex-row justify-around items-center mx-auto bg-white fixed bottom-0 rounded-t-xl md:absolute md:top-14 md:bottom-auto md:w-4/5 md:bg-transparent md:text-white">
      {NAV_LINKS.map((link) => (
        <Link key={link.id} href={link.url}>
          <div className="flex flex-row items-center justify-center md:clignotement md:w-full">
            {<link.icon className="w-6 h-6 m-2 lg:w-10 md:hidden" />}
            <span className="hidden md:block md:text-lg">{link.title}</span>
          </div>
        </Link>
      ))}
    </nav>
  );
}

