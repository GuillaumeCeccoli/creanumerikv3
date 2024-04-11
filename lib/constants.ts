import { TNavLinks, TRealisations } from "@/types/types";
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
    id: "projects",
    url: "/realisations",
    icon: TiFolder,
    title: "Réalisations"
  },
  {
    id: "skills",
    url: "/",
    icon: TiBookmark,
    title: "Compétences"
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

export const REALISATIONS: TRealisations[] = [
  {
    id: "p01",
    title: "Site vitrine",
    description: "Site présentant l'activité d'une psychologue aux Pennes-Mirabeau, en remplacement de son ancien site.",
    href: "/",
    image: "/assets/site-delphine.png"
  },
  {
    id:"p02",
    title: "Plateforme d'entraide",
    description: "Ce projet communautaire a pour but de permettre à des personnes de proposer ou de demander de l'aide.",
    href: "/",
    image: "/assets/dev-up.png"
  },
  {
    id: "p03",
    title: "Calculateur d'IMC",
    description: "Calculateur d'IMC (Indice de Masse Corporelle), permettant de connaître sa corpulence.",
    href: "/",
    image: "/assets/imc.png"
  }
]

