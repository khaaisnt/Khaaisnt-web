import React from "react";
import Image from "next/image";
import Memoji from "@/public/Memoji.png";
import MemojiEye from "@/public/MemojiEye.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutMe() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        once: true,
        duration: 700,
        easing: "ease-out-cubic",
      });
    }
  }, []);

  return (
    <section className="min-h-screen bg-black">
      <div
        className="w-full mx-auto pt-[150px] lg:pt-[180px] px-[20px] lg:px-[130px]"
        data-aos="fade-up"
        id="about"
      >
        {/* Memoji with hover effect */}
        <div className="group relative transition-transform hover:scale-105 duration-300">
          <div className="block group-hover:hidden">
            <Image
              src={Memoji}
              alt="memoji"
              className="w-[200px] drop-shadow-2xl"
            />
          </div>
          <div className="hidden group-hover:block">
            <Image
              src={MemojiEye}
              alt="memoji"
              className="w-[200px] drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Introduction text */}
        <div className="mt-8 lg:mt-12">
          <h1 className="font-bold lg:mb-4 mb-[10px] text-[40px] lg:text-[100px] text-white bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Hey, I{"'"}m Rakha.
          </h1>
          <h5 className="text-white/90 text-[23px] lg:text-[25px] leading-relaxed">
            After seeing global advances in technology, I ventured into Web
            Development and Product Innovation, fueled by a deep passion for
            creating solutions that help others solve real-world problems.
            Explore my work below - let{"'"}s get to know each other. 👋
          </h5>
        </div>

        {/* Social links */}
        <div className="pt-[60px]">
          <h4 className="text-secondary-gray text-[20px] font-medium mb-4">
            Connect
          </h4>
          <div className="flex flex-wrap gap-x-8 gap-y-4 mt-[20px]">
            {[
              { href: "mailto:rakhaadrian23@gmail.com", label: "Email" },
              {
                href: "https://www.linkedin.com/in/rakha-adrian-nur-tanaya/",
                label: "LinkedIn",
              },
              {
                href: "https://www.instagram.com/thokhans/",
                label: "Instagram",
              },
              { href: "https://github.com/khaaisnt", label: "GitHub" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-white text-[20px] font-medium hover:text-blue-400 transition-colors duration-300 
                after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-blue-400 after:left-0 after:-bottom-1 
                after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
