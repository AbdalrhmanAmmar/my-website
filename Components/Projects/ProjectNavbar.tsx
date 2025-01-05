import { Iproject, categorydev, categoryuser } from "@/interfaces";
import { FunctionComponent, useState } from "react";
import ToggleCategory from "./ToggleCategory";
import { projectsdata } from "@/utils/data";

const NavItemDev: FunctionComponent<{
  value: categorydev | "All";
  handlefilterCategory: Function;
  Active: string;
}> = ({ value, handlefilterCategory, Active }) => {
  let classNames = "capitalize cursor-pointer hover:text-green-600 ";
  if (Active === value) classNames += "text-white bg-blue-500 px-3 rounded-md";
  return (
    <li className={classNames} onClick={() => handlefilterCategory(value)}>
      <span>{value}</span>
    </li>
  );
};

const NavItemuser: FunctionComponent<{
  value: categoryuser | "All";
  handlefilterCategoryuser: Function;
  Active: string;
}> = ({ value, handlefilterCategoryuser, Active }) => {
  let classNames = "capitalize cursor-pointer hover:text-green-600 ";
  if (Active === value) classNames += "text-green-600";
  return (
    <li className={classNames} onClick={() => handlefilterCategoryuser(value)}>
      {value}
    </li>
  );
};

interface ProjectNavbarProps {
  handlefilterCategory: Function;
  handlefilterCategoryuser: Function;
  setProjects: (value: Iproject[]) => void;
  Active: string;
  setActive: (value: string) => void;
}

const ProjectNavbar: FunctionComponent<ProjectNavbarProps> = ({
  handlefilterCategory,
  handlefilterCategoryuser,
  setProjects,
  Active,
  setActive,
}) => {
  const [isToggleCategory, setToggleCategory] = useState(true);

  return (
    <div className="flex items-center justify-between w-full xs:flex-row   xss:items-center">
      <div className="px-3 py-2 flex space-x-3 overflow-x-auto list-none">
        {isToggleCategory ? (
          <>
            <NavItemDev
              value="All"
              handlefilterCategory={handlefilterCategory}
              Active={Active}
            />
            <NavItemDev
              value="UI UX"
              handlefilterCategory={handlefilterCategory}
              Active={Active}
            />
            <NavItemDev
              value="ReactJs"
              handlefilterCategory={handlefilterCategory}
              Active={Active}
            />
            <NavItemDev
              value="React Native"
              handlefilterCategory={handlefilterCategory}
              Active={Active}
            />
            <NavItemDev
              value="Nextjs"
              handlefilterCategory={handlefilterCategory}
              Active={Active}
            />
            <NavItemDev
              value="Golang"
              handlefilterCategory={handlefilterCategory}
              Active={Active}
            />
          </>
        ) : (
          <>
            <NavItemuser
              value="All"
              handlefilterCategoryuser={handlefilterCategoryuser}
              Active={Active}
            />
            <NavItemuser
              value="Agency"
              handlefilterCategoryuser={handlefilterCategoryuser}
              Active={Active}
            />
            <NavItemuser
              value="landing page"
              handlefilterCategoryuser={handlefilterCategoryuser}
              Active={Active}
            />
            <NavItemuser
              value="Ecommerce"
              handlefilterCategoryuser={handlefilterCategoryuser}
              Active={Active}
            />
          </>
        )}
      </div>
      <ToggleCategory
        onClickToggle={() => {
          setToggleCategory(!isToggleCategory);
          setProjects(projectsdata);
          setActive("All");
        }}
        isToggleCategory={isToggleCategory}
      />
    </div>
  );
};

export default ProjectNavbar;
