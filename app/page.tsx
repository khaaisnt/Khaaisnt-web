"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-primary-black w-full h-full">
      <Navbar />
      <AboutMe />
      <Projects />
      <Footer />
    </main>
  );
}
