import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        once: true,
        disable: "phone",
        duration: 700,
      });
    }
  }, []);

  return (
    <>
      <div
        className="px-[20px] lg:px-[130px] pb-[20px]"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <p className="text-dark-gray text-[14px]">
          Get in touch{" "}
          <span className="text-blue-400 hover:underline">
            <a href="mailto:rakhaadrian23@gmail.com">rakhaadrian23@gmail.com</a>
          </span>{" "}
        </p>
        <p className="text-dark-gray text-[14px] my-[5px]">
          Made by Rakha Adrian.
        </p>
        <p className="text-dark-gray text-[14px]">
          Last Updated: July 20, 2024
        </p>
      </div>
    </>
  );
}
