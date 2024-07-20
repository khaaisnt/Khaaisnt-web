import React from "react";
import Image from "next/image";
import Memoji from "/public/memoji.png";

export default function AboutMe() {
  return (
    <>
      <div className="w-full pt-[180px] px-[130px]">
        <Image src={Memoji} alt="memoji" className="w-[200px]" />
        <div>
          <h1 className="font-semibold text-[100px] text-white">
            Hey, I m Rakha.
          </h1>
          <h5 className="text-white text-[25px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo alias
            blanditiis suscipit tempore perspiciatis iure culpa! Ipsam totam
            aperiam maxime odio, vel neque! Ipsa perspiciatis officia tempora
            adipisci eveniet similique!
          </h5>
        </div>
        <div className="py-[40px]">
          <h4 className="text-secondary-gray text-[20px]">Connect</h4>
          <div className="flex gap-x-5 mt-[20px]">
            <a
              href="mailto:rakhaadrian23@gmail.com"
              className="text-white text-[20px] hover:underline hover:text-blue-600"
              target="_blank"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/rakha-adrian-nur-tanaya/"
              className="text-white text-[20px] hover:underline hover:text-blue-600"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/khaadriann/"
              className="text-white text-[20px] hover:underline hover:text-blue-600"
              target="_blank"
            >
              Instagram
            </a>
            <a
              href="https://open.spotify.com/user/gc39l2ei4wr37q66svtik12zy?si=287c44fd68ed4419"
              className="text-white text-[20px] hover:underline hover:text-blue-600"
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
