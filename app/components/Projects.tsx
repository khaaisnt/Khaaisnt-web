import React, { useEffect } from "react";
import Image from "next/image";
import LansiCare from "/public/LansiCareSection.png";
import Wastain from "/public/WastainSection.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        once: true,
        duration: 1200,
        easing: "ease-out-cubic",
      });
    }
  }, []);

  return (
    <div
      className="px-[20px] lg:px-[130px] w-full pb-[60px] lg:pb-[100px]"
      id="projects"
    >
      <h4 className="text-secondary-gray text-[20px] mb-[20px]">Projects</h4>
      <div className="lg:flex lg:gap-x-[30px] lg:gap-y-0 gap-y-[30px] grid grid-cols-1 lg:justify-between">
        <div
          className="lg:w-[700px] lg:h-[430px] aspect-[16/9] rounded-[20px] overflow-hidden relative transition-all duration-500 group"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <a
            href="https://lansicare-health.vercel.app/homepage"
            target="_blank"
            className="bg-cover w-full h-full bg-center absolute group-hover:scale-110 duration-500 transition-all"
          >
            <Image
              src={LansiCare}
              alt="LansiCare"
              layout="fill"
              objectFit="cover"
            />
          </a>
          <a
            href="https://lansicare-health.vercel.app/homepage"
            target="_blank"
          >
            <div className="group absolute w-full h-full hover:bg-black hover:bg-opacity-50 flex items-center justify-center gap-[20px]">
              <div className="text-white text-[24px] font-bold hidden group-hover:block">
                LansiCare
              </div>
              <div className="text-white text-[14px] hidden group-hover:block hover:underline">
                View Project
              </div>
            </div>
          </a>
        </div>
        <div
          className="lg:w-[700px] lg:h-[430px] aspect-[16/9] rounded-[20px] overflow-hidden relative transition-all duration-500 group"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <a
            href="https://wastain.vercel.app/homepage"
            target="_blank"
            className="bg-cover w-full h-full bg-center absolute group-hover:scale-110 duration-500 transition-all"
          >
            <Image
              src={Wastain}
              alt="Wastain"
              layout="fill"
              objectFit="cover"
            />
          </a>
          <a href="https://wastain.vercel.app/homepage" target="_blank">
            <div className="group absolute w-full h-full hover:bg-black hover:bg-opacity-50 flex items-center justify-center gap-[20px]">
              <div className="text-white text-[24px] font-bold hidden group-hover:block">
                Wastain
              </div>
              <div className="text-white text-[14px] hidden group-hover:block hover:underline">
                View Project
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
