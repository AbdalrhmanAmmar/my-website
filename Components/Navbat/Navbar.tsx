"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { FunctionComponent, useEffect, useState } from "react";

interface NavItemProps {
  activeItem: string;
  setactiveItem: (item: string) => void;
  name: string;
  router: string;
  className?: string;
}

const NavItem: FunctionComponent<NavItemProps> = ({
  activeItem,
  setactiveItem,
  name,
  router,
  className,
}) => {
  return activeItem !== name ? (
    <Link href={router}>
      <span
        className="hover:text-green-600"
        onClick={() => setactiveItem(name)}
      >
        {name}
      </span>
    </Link>
  ) : null;
};

function Navbar() {
  const [activeItem, setactiveItem] = useState("");

  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") setactiveItem("About");
    if (pathname === "/Projects") setactiveItem("Projects");
    if (pathname === "/Resume") setactiveItem("Resume");
  }, []);

  return (
    <div className="flex items-center justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold border-b-4 md:text-2xl border-green text-green-600">
        {activeItem}
      </span>
      <div className="flex space-x-3 text-3xl font-bold md:text-xl ">
        <NavItem
          activeItem={activeItem}
          setactiveItem={setactiveItem}
          name="About"
          router="/"
        />
        <NavItem
          activeItem={activeItem}
          setactiveItem={setactiveItem}
          name="Projects"
          router="/Projects"
        />
        <NavItem
          activeItem={activeItem}
          setactiveItem={setactiveItem}
          name="Resume"
          router="/Resume"
        />
      </div>
    </div>
  );
}

export default Navbar;
