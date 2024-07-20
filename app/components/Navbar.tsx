import React from "react";
import Image from "next/image";
import "../globals.css";

export default function Navbar() {
  return (
    <>
      <nav className="fixed px-[20px] lg:px-[130px] py-[25px] w-full bg-primary-black">
        <div className="flex justify-between">
          <div className="text-secondary-gray font-bold text-[25px]">
            Khaaisnt.
          </div>
          <div className="block lg:hidden">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className="block absolute right-4"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
          <div className="font-medium hidden lg:block">
            <a
              href="#about"
              className="text-secondary-gray hover:text-white duration-200"
            >
              About
            </a>
            <a
              href="#projects"
              className="mx-[18px] text-secondary-gray hover:text-white duration-200"
            >
              Projects
            </a>
            <a
              href=""
              className="text-secondary-gray hover:text-white duration-200"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
