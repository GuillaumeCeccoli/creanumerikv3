import { TNavLinks } from "@/types/types";
import { TiBookmark, TiFolder, TiHomeOutline, TiMail } from "react-icons/ti";

export const NAV_LINKS: TNavLinks[] = [
  {
    id: "home",
    url: "/",
    icon: TiHomeOutline,
  },
  {
    id: "skills",
    url: "/",
    icon: TiBookmark,
  },
  {
    id: "projects",
    url: "/",
    icon: TiFolder,
  },
  {
    id: "mail",
    url: "/",
    icon: TiMail,
  }
];

