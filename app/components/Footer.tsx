import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function Footer() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        once: true,
        duration: 700,
      });
    }
  }, []);

  return (
    <>
      <div className="px-[20px] lg:px-[130px] pb-[20px]">
        <p className="text-dark-gray text-[14px]">
          Get in touch{" "}
          <span>
            <svg
              className="w-6 h-6 text-dark-gray inline-block"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>{" "}
            {""}
          </span>
          <span className="text-blue-400 hover:underline">
            <a href="mailto:rakhaadrian23@gmail.com">rakhaadrian23@gmail.com</a>
          </span>{" "}
        </p>
        <p className="text-dark-gray text-[14px] my-[5px]">
          Made by Rakha Adrian.
        </p>
        <p className="text-dark-gray text-[14px]">Last Updated: Jan 4, 2025</p>
      </div>
    </>
  );
}
