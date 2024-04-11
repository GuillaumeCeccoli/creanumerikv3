import { IconType } from "react-icons";
export type TNavLinks = {
  id: string;
  url: string;
  icon: IconType;
  title?: string;
  size?: number;
}

export type TRealisations = {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export type TSkill = {
  id: string;
  title: string;
  icon: IconType;
  description: string;
  subtitle: string;
  tools: string[];
}