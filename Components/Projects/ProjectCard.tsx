import { Iproject } from "@/interfaces";
import Image from "next/image";
import React, { FunctionComponent, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "@/utils/animation";

interface ProjectCardProps {
  project: Iproject;
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({ project }) => {
  const { name, image_path, deployed_url, github_url, description, key_techs } =
    project;

  const [showDetails, setshowDetails] = useState(false);

  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        width={300}
        height={150}
        className="cursor-pointer h-[150px]"
        onClick={() => setshowDetails(!showDetails)}
      />
      <p className="grid md:grid-cols-1">{name}</p>

      {showDetails && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg md:p-10 dark:bg-dark-100 dark:text-gray-100 md:grid-cols-2 gap-x-12 ">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div
              className="border-4 border-gray-100 "
              variants={fadeInUp}
            >
              <Image
                src={image_path}
                alt={name}
                className="overflow-hidden"
                layout="responsive"
                width={300}
                height={150}
              />
              {/* <img src={image_path} alt={name} /> */}
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="flex justify-center my-4 space-x-3"
            >
              {github_url && (
                <a
                  href={github_url}
                  className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200 "
                >
                  <FaGithub /> <span>Github</span>
                </a>
              )}

              <a
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <FaGithub /> <span>Project</span>
              </a>
            </motion.div>
          </motion.div>
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2
              variants={fadeInUp}
              className="mb-3 text-xl font-medium md:text-2xl "
            >
              {name}
            </motion.h2>
            <motion.h3
              variants={fadeInUp}
              className="my-3 text-base font-medium"
            >
              {description}
            </motion.h3>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
            >
              {key_techs.map((value, i) => (
                <span
                  key={i}
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounde-sm"
                >
                  {value}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <button
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
            onClick={() => setshowDetails(false)}
          >
            <IoMdCloseCircleOutline size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
