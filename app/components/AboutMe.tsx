import React from "react";
import Image from "next/image";
import Memoji from "/public/memoji.png";

export default function AboutMe() {
  return (
    <>
      <div className="w-full pt-[150px] lg:pt-[180px] px-[20px] lg:px-[130px]">
        <Image src={Memoji} alt="memoji" className="w-[200px]" />
        <div>
          <h1 className="font-semibold lg:mb-0 mb-[10px] text-[40px] lg:text-[100px] text-white">
            Hey, I{"'"}m Rakha.
          </h1>
          <h5 className="text-white text-[23px] lg:text-[25px]">
            After seeing global advances in technology, I ventured into Web
            Development and Product Innovation, fueled by a deep passion for
            creating solutions that help others solve real-world problems.
            Explore my work below - let{"'"}s get to know each other. 👋
          </h5>
        </div>
        <div className="py-[60px]">
          <h4 className="text-secondary-gray text-[20px]">Connect</h4>
          <div className="flex gap-x-5 mt-[20px]">
            <a
              href="mailto:rakhaadrian23@gmail.com"
              className="text-white text-[17px] font-medium lg:text-[20px] hover:underline hover:text-blue-600 duration-200"
              target="_blank"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/rakha-adrian-nur-tanaya/"
              className="text-white text-[17px] font-medium lg:text-[20px] hover:underline hover:text-blue-600 duration-200"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/khaadriann/"
              className="text-white text-[17px] font-medium lg:text-[20px] hover:underline hover:text-blue-600 duration-200"
              target="_blank"
            >
              Instagram
            </a>
            <a
              href="https://open.spotify.com/user/gc39l2ei4wr37q66svtik12zy?si=287c44fd68ed4419"
              className="text-white text-[17px] font-medium lg:text-[20px] hover:underline hover:text-blue-600 duration-200"
              target="_blank"
            >
              Spotify
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
