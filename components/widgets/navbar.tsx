import { NAV_LINKS } from "@/lib/constants";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-72 flex flex-row justify-around items-center mx-auto bg-white rounded-full absolute bottom-10">
      {NAV_LINKS.map((link) => (
        <Link key={link.id} href={link.url}>
          {<link.icon className="w-7 h-7 m-2" />}
        </Link>
      ))}
    </nav>
  );
}

