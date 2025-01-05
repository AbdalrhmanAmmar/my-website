"use client";
import { projectsdata } from "@/utils/data";
import ProjectCard from "./ProjectCard";
import ProjectNavbar from "./ProjectNavbar";
import { useState } from "react";
import { categorydev, categoryuser } from "@/interfaces";
import { motion } from "framer-motion";
import { fadeInUp, routeFade, stagger } from "@/utils/animation";

function Projects() {
  const [Projects, setProjects] = useState(projectsdata);
  const [Active, setActive] = useState("All");

  const handlefilterCategorydev = (Category: categorydev | "All") => {
    if (Category === "All") {
      setProjects(projectsdata);
      setActive(Category);

      return;
    }
    const NewProjectdata = projectsdata.filter((project) =>
      project.category.includes(Category)
    );
    setProjects(NewProjectdata);
    setActive(Category);
    console.log(Projects);
  };
  const handlefilterCategoryuser = (Categoryuser: categoryuser | "All") => {
    if (Categoryuser === "All") {
      setProjects(projectsdata);
      setActive(Categoryuser);

      return;
    }
    const NewProjectdata = projectsdata.filter((project) =>
      project.categoryuser.includes(Categoryuser)
    );
    setProjects(NewProjectdata);
    setActive(Categoryuser);
    console.log(Projects);
  };

  return (
    <motion.div
      variants={routeFade}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="px-5 py-2 overflow-y-scroll "
      style={{ height: "65vh" }}
    >
      <nav>
        <ProjectNavbar
          Active={Active}
          setActive={setActive}
          setProjects={setProjects}
          handlefilterCategory={handlefilterCategorydev}
          handlefilterCategoryuser={handlefilterCategoryuser}
        />
      </nav>
      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="relative grid grid-cols-12 gap-4 my-3  "
      >
        {Projects.map((project) => (
          <>
            <motion.div
              variants={fadeInUp}
              className="col-span-12 sm:col-span-6 lg:col-span-4 bg-gray-200 dark:bg-dark-200"
            >
              <ProjectCard project={project} key={project.name} />
            </motion.div>
          </>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Projects;
