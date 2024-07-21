import React from "react";
import Image from "next/image";
import LansiCare from "/public/LansiCareSection.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        once: true,
        disable: "phone",
        duration: 700,
        easing: "ease-out-cubic",
      });
    }
  }, []);

  return (
    <>
      <div className="px-[20px] lg:px-[130px] w-full pb-[160px]">
        <h4 className="text-secondary-gray text-[20px] mb-[20px]">Projects</h4>
        <div className="flex justify-between">
          <div
            className="bg-slate-400 w-[600px] h-[380px] aspect-[16/9] rounded-[18px] overflow-hidden relative transition-all duration-500 group"
            data-aos="zoom-in"
          >
            <a
              href=""
              className=" bg-cover w-full h-full bg-center absolute group-hover:scale-110 duration-500 transition-all"
            >
              <Image src={LansiCare} alt="LansiCare" />
            </a>
          </div>
          <div
            className="bg-slate-400 w-[600px] h-[380px] aspect-[16/9] rounded-[18px] overflow-hidden relative transition-all duration-500 group"
            data-aos="zoom-in"
          >
            <a
              href=""
              className=" bg-cover w-full h-full bg-center absolute group-hover:scale-110 duration-500 transition-all"
            >
              <Image src={LansiCare} alt="LansiCare" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
