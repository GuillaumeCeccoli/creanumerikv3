import { TNavLinks, TRealisations, TSkill } from "@/types/types";
import { FaFacebook, FaGithub, FaInstagram, FaLaptopCode, FaLinkedin } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
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
    url: "/#projects",
    icon: TiFolder,
    title: "Réalisations"
  },
  {
    id: "skills",
    url: "/#skills",
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
    url: "https://www.facebook.com/profile.php?id=61557641909717",
    title: "Facebook",
    icon: FaFacebook,
  },
  {
    id: "instagram",
    url: "https://www.instagram.com/creanumerik04/",
    title: "Instagram",
    icon: FaInstagram
  },
  {
    id: "linkedin",
    url: "https://www.linkedin.com/in/guillaume-ceccoli/",
    title: "LinkedIn",
    icon: FaLinkedin
  },
  {
    id: "github",
    url: "https://github.com/GuillaumeCeccoli",
    title: "GitHub",
    icon: FaGithub
  },
]

export const REALISATIONS: TRealisations[] = [
  {
    id: "p01",
    title: "Site vitrine",
    description: "Site présentant l'activité d'une psychologue aux Pennes-Mirabeau, en remplacement de son ancien site.",
    href: "https://www.ceccoli-delphine.fr/",
    image: "/assets/site-delphine.png"
  },
  {
    id:"p02",
    title: "Plateforme d'entraide",
    description: "Plateforme d'entraide pour développeurs. Projet réalisé en équipe toujours en cours de développement.",
    href: "https://dev-up.vercel.app/",
    image: "/assets/dev-up.png"
  },
  {
    id: "p03",
    title: "Calculateur d'IMC",
    description: "Calculateur d'IMC (Indice de Masse Corporelle), permettant de connaître sa corpulence.",
    href: "https://imc-calculator-iota.vercel.app/",
    image: "/assets/imc.png"
  }
]

export const SKILLS: TSkill[] = [
  {
    id: "s01",
    title: "Design",
    icon: MdOutlineDesignServices,
    description: "Créations de maquettes pour sites et applications web. Réalisation de logos.",
    subtitle: "Mes outils",
    tools: ["Figma", "Penpot", "Affinity Designer", "Affinity Photo"]
  },
  {
    id:"s02",
    title: "Developpement Web",
    icon: FaLaptopCode,
    description: "Réalisations d'applications et de sites web responsive, refonte et optimisations, SEO...",
    subtitle: "Mes outils",
    tools: ["HTML/CSS", "JavaScript", "TypeScript", "NextJS", "React", "Tailwind CSS", "Git", "GitHub"]
  }
]

