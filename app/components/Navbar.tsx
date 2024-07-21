import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface NavbarProps {
  title: string;
  href: string;
}

const link: NavbarProps[] = [
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  {
    title: "Resume",
    href: "https://drive.google.com/file/d/1bCmNXz3BLKjUre8D8U-buN6nuyWwa46B/view?usp=sharing",
  },
];

export default function Navbar() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <nav
        className="fixed z-20 px-[20px] lg:px-[130px] py-[25px] w-full bg-primary-black"
        data-aos="fade-down"
        data-aos-delay="300"
      >
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
              href="https://drive.google.com/file/d/1bCmNXz3BLKjUre8D8U-buN6nuyWwa46B/view?usp=sharing"
              className="text-secondary-gray hover:text-white duration-200"
              target="_blank"
            >
              Resume📄
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
