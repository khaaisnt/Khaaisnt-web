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
    <footer className="bg-black border-t border-white/10">
      <div className="px-[20px] lg:px-[130px] py-8 mx-auto">
        <div className="flex flex-col gap-6">
          {/* Contact Section */}
          <div className="group">
            <p className="text-white/60 text-[16px] flex items-center gap-2">
              Get in touch
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                <svg
                  className="w-5 h-5 text-blue-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              </span>
              <a 
                href="mailto:rakhaadrian23@gmail.com"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300 
                relative after:content-[''] after:absolute after:w-full after:h-[1px] 
                after:bg-blue-400 after:left-0 after:-bottom-1 after:scale-x-0 
                hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                rakhaadrian23@gmail.com
              </a>
            </p>
          </div>

          {/* Credits & Update Info */}
          <div className="space-y-2">
            <p className="text-white/40 text-[14px]">
              Made by Rakha Adrian.
            </p>
            <p className="text-white/40 text-[14px]">
              Last Updated: Feb 5, 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
