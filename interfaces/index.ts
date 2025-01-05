import { IconType } from "react-icons";
export interface Service {
  Icon: IconType;
  title: string;
  about: string;
}

export interface Skill {
  Icon: IconType;
  name: string;
  level: string;
}

export interface Iproject {
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url?: string;
  category: categorydev[];
  categoryuser: categoryuser[];
  key_techs: string[];
}

export type categorydev = "UI UX" | "ReactJs" | "React Native" | "Nextjs" | "Golang";

export type categoryuser = "landing page" | "Ecommerce" | "Agency" |"Dashboard | backend";
