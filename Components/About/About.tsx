"use client";

import { services } from "@/utils/data";
import ServiceCard from "./ServiceCard";
import { stagger, fadeInUp, routeFade } from "@/utils/animation";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      variants={routeFade}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex flex-col flex-grow px-6 pt-1
     "
    >
      <h6 className="my-3 text-base font-medium">
        Greetings! I'm Abdelrhman, a passionate Front-End Web Developer with
        expertise in HTML, CSS, JavaScript, React.js, TypeScript, and Next.js.
        With one year of hands-on experience, I've honed my skills in crafting
        visually stunning and highly functional web applications that captivate
        users and drive engagement.
      </h6>
      <div
        className=" p-4 mt-5 bg-gray-400 dark:bg-dark-100 pb-28 overflow-hidden  "
        style={{
          marginLeft: "-1.5rem",
          marginRight: "-1.5rem",
        }}
      >
        <h4 className="my-3 text-xl font-semibold tracking-wide mt-4">
          What I am doing
        </h4>

        <motion.div
          className="grid gap-6 my-3 md:grid-cols-2"
          variants={stagger}
          animate="animate"
          initial="initial"
        >
          {}
          {services.map((service) => (
            <motion.div
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
              key={service.title}
              variants={fadeInUp}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
