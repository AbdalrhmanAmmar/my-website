import Image from "next/image";
import React from "react";
import myPic from "./../../Images/picture.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaBlackTie } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import ThemeSwitch from "./theme/ThemeSwitch";

function Sidebar() {
  return (
    <div className="">
      <Image
        className="w-32 h-32 rounded-full inline"
        src={myPic}
        alt="Abdelrhman Ammar"
      />
      <h1 className="my-4 text-3xl font-medium tracking-wider">
        <span className="font-Playwrite text-green-600">Abdelrhman</span> Ammar
      </h1>
      <p className="px-2 py-1 my-3 rounded-full bg-foreground dark:bg-dark-200 dark:bg-black-500">
        Frontend developer
      </p>
      <a
        className="px-2 py-1 my-3 bg-foreground rounded-full flex flex-row justify-center items-center gap-2 dark:bg-dark-200 dark:bg-black-500"
        href="files/AbdelrhmanAmmar- frontend enwickler.pdf"
        download="frontend enwickler.pdf"
      >
        <FaBlackTie className="w-6 h-6 cursor-pointer " />
        Download Resume
      </a>
      <div className="flex justify-around my-5 text-baseColor ">
        <a href="https://github.com/AbdalrhmanAmmar" target="_blank">
          <FaGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/abdelrahman-ar/" target="_blank">
          <FaLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <SiLeetcode className="w-8 h-8" />
        </a>
      </div>
      <div>
        {/* address */}
        <div
          className="my-5 py-4 bg-foreground space-y-2  dark:bg-dark-200   "
          style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
        >
          <div className="flex items-center justify-center space-x-4 font-bold ">
            <FaLocationDot className="w-6 h-6" />
            <span>Cairo, Egypt</span>
          </div>

          <p>AbdelrhmanAmmarofficial@gmail.com</p>
          <p>+201026786173 / +201017404798</p>
        </div>
      </div>
      <button className="bg-gradient-to-r from-CustomeGreen to-CustomeBlue w-8/12 rounded-full py-2 px-1 text-white my-2 ">
        languages
      </button>
      <button className="bg-gradient-to-r from-CustomeGreen to-CustomeBlue w-8/12 rounded-full py-2 px-1 text-white my-2">
        Email Me
      </button>
      <span className="block m-auto items-center bg-gradient-to-r from-CustomeGreen to-CustomeBlue w-8/12 rounded-full py-2 px-1 text-white my-2 ">
        <ThemeSwitch />
      </span>
    </div>
  );
}

export default Sidebar;
