import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <nav className="fixed px-[130px] py-[30px] w-full bg-primary-black">
        <div className="flex justify-between">
          <div className="text-secondary-gray font-bold text-[25px]">
            Khaaisnt.
          </div>
          <div className="font-medium">
            <a href="#about" className="text-secondary-gray hover:text-white">
              About
            </a>
            <a
              href="#projects"
              className="mx-[18px] text-secondary-gray hover:text-white"
            >
              Projects
            </a>
            <a href="" className="text-secondary-gray hover:text-white">
              Resume
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
