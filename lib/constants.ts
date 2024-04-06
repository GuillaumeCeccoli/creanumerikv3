import { TNavLinks } from "@/types/types";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
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

export const SOCIAL_LINKS: TNavLinks[] = [
  {
    id: "facebook",
    url: "/",
    title: "Facebook",
    icon: FaFacebook,
  },
  {
    id: "instagram",
    url: "/",
    title: "Instagram",
    icon: FaInstagram
  },
  {
    id: "linkedin",
    url: "/",
    title: "LinkedIn",
    icon: FaLinkedin
  },
  {
    id: "github",
    url: "/",
    title: "GitHub",
    icon: FaGithub
  },
]

