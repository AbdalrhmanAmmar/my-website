import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";

import { BsCircleFill } from "react-icons/bs";
import { Iproject, Service, Skill } from "@/interfaces";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Whatever",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Html & Css",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "JavaScript",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "React ",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "React Native",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "React Query",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap & Tailwindcss",
    level: "80",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "postman",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "strapi",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "git & gtihub",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "45",
  },
];

export const projectsdata: Iproject[] = [
  {
    name: "Scale Your Marketing",
    description:
      "Our website offers a range of personalized grooming services to help you look and feel your best. Our experienced barbers and stylists provide haircuts, beard trims, hot towel shaves, coloring, styling, and more. Book your appointment today and experience our expert services at competitive prices.",
    image_path: "/Images/scaleurmarketing.JPG",
    deployed_url: "https://www.scale-your-marketing.com/",
    github_url: "",
    category: ["ReactJs"],
    categoryuser: ["Agency"],
    key_techs: ["Nextjs", "framer-motion", "nodemailer", "react-countup"],
  },
  {
    name: " Tour and Travel",
    description:
      "Our website offers a range of personalized grooming services to help you look and feel your best. Our experienced barbers and stylists provide haircuts, beard trims, hot towel shaves, coloring, styling, and more. Book your appointment today and experience our expert services at competitive prices.",
    image_path: "/barber.png",
    deployed_url: "https://abdalrhmanammar.github.io/BarberShop/",
    github_url: "https://github.com/AbdalrhmanAmmar/BarberShop",
    category: ["ReactJs"],
    categoryuser: ["landing page"],
    key_techs: ["ReactJs", "Css"],
  },
  {
    name: "Transunity Agency",
    description:
      "Built a dynamic translation agency using Next.js and the Next.js theme, optimizing global communication through innovative technology..",
    image_path: "/Images/transunity.JPG",
    deployed_url: "https://transunityofficial.com/",
    github_url: "https://github.com/AbdalrhmanAmmar/Transunity",
    category: ["Nextjs"],
    categoryuser: ["Agency"],
    key_techs: ["Nextjs"],
  },
  {
    name: " Porfoltio",
    description:
      "Our website offers a range of personalized grooming services to help you look and feel your best. Our experienced barbers and stylists provide haircuts, beard trims, hot towel shaves, coloring, styling, and more. Book your appointment today and experience our expert services at competitive prices.",
    image_path: "/Images/portfolios.JPG",
    deployed_url: "https://trainning-one.vercel.app/",
    github_url: "https://github.com/AbdalrhmanAmmar/BarberShop",
    category: ["ReactJs"],
    categoryuser: ["landing page"],
    key_techs: ["ReactJs", "Css"],
  },
  {
    name: " Dashboard",
    description:
      "I You have built a dashboard using ReactJS to display data. The dashboard provides an interface for users to view and interact with the data in a visually appealing and user-friendly way. The project utilizes ReactJS components to create a modular and scalable design, allowing for easy maintenance and future development.",
    image_path: "/Images/dashboards.JPG",
    deployed_url: "https://github.com/AbdalrhmanAmmar/Dashboard",
    github_url: "https://dashboard-eta-lovat.vercel.app/",
    category: ["ReactJs"],
    categoryuser: ["Dashboard"],
    key_techs: ["ReactJs", "Material UI", "react-hook-form", "nivo"],
  },
  {
    name: "Coffee Site",
    description:
      "Our coffee website offers you the finest carefully-roasted coffee beans and unique coffee preparations that cater to all tastes. In addition, we offer some delicious light bites. Visit us now and enjoy a distinctive coffee experience..",
    image_path: "/Images/coffeeshop.JPG",
    deployed_url: "https://abdalrhmanammar.github.io/coffee-website/",
    github_url: "https://github.com/AbdalrhmanAmmar/coffee-website",
    category: ["UI UX"],
    categoryuser: ["landing page"],
    key_techs: ["Html", "Css", "JavaScript", "Bootstrap"],
  },
  {
    name: " Italy Resturant",
    description:
      "Our website offers a range of personalized grooming services to help you look and feel your best. Our experienced barbers and stylists provide haircuts, beard trims, hot towel shaves, coloring, styling, and more. Book your appointment today and experience our expert services at competitive prices.",
    image_path: "/Images/Resturant.JPG",
    deployed_url: "https://abdalrhmanammar.github.io/Resturant/index.html",
    github_url: "https://github.com/AbdalrhmanAmmar/Resturant",
    category: ["UI UX"],
    categoryuser: ["landing page"],
    key_techs: ["Html", "Css", "JavaScript"],
  },
  {
    name: "Photography",
    description:
      "Discover a stunning collection of images on our website, featuring a wide variety of captivating themes and subjects for your viewing pleasure.",
    image_path: "/Images/photograph.JPG",
    deployed_url: "https://abdalrhmanammar.github.io/photography/",
    github_url: "https://github.com/AbdalrhmanAmmar/photography/",
    category: ["UI UX"],
    categoryuser: ["landing page"],
    key_techs: ["Html", "Css", "JavaScript", "bootstrap"],
  },
];
