import { TNavLinks } from "@/types/types";
import { TiBookmark, TiFolder, TiHomeOutline, TiMail } from "react-icons/ti";

export const NAV_LINKS: TNavLinks[] = [
  {
    id: "home",
    url: "/",
    icon: TiHomeOutline,
    title: "Accueil"
  },
  {
    id: "skills",
    url: "/",
    icon: TiBookmark,
    title: "Compétences"
  },
  {
    id: "projects",
    url: "/",
    icon: TiFolder,
    title: "Réalisations"
  },
  {
    id: "mail",
    url: "/",
    icon: TiMail,
    title: "Contact"
  }
];

