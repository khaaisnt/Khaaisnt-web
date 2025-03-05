"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectDetail } from "@/app/types";
import LansiCare from "@/public/LansiCareSection.png";
import Wastain from "@/public/WastainSection.png";
import Pilketos from "@/public/E-Pilketos.png";
import ZDev from "@/public/ZDev.png";
import Kaliurang from "@/public/GadoKaliurang.png";
import Navbar from "@/app/components/Navbar";

const projectDetails: { [key: string]: ProjectDetail } = {
  lansicare: {
    title: "LansiCare",
    subtitle: "Healthcare Solution for Elderly",
    description:
      "LansiCare is a comprehensive healthcare platform designed specifically for elderly care, providing easy access to medical consultations, medication reminders, and health monitoring.",
    projectType: "Web Application",
    role: "Frontend Developer",
    tools: ["React", "Next.js", "TailwindCSS", "TypeScript"],
    duration: "3 months",
    image: LansiCare,
    url: "https://lansicare-health.vercel.app/homepage",
  },
  wastain: {
    title: "Wastain",
    subtitle: "Waste Management Solution",
    description:
      "Wastain is an innovative platform that helps users manage and track their waste disposal, promoting sustainable practices and environmental awareness.",
    projectType: "Web Application",
    role: "Frontend Developer",
    tools: ["React", "Next.js", "TailwindCSS"],
    duration: "2 months",
    image: Wastain,
    url: "https://wastain.vercel.app/homepage",
  },
};

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = projectDetails[params.slug];

  if (!project) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <Link
              href="/#projects"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              ← Back to Projects
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-black text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#projects"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors"
          >
            ← Back to Projects
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {project.title}
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-400">
              {project.subtitle}
            </h2>
          </div>

          <div className="relative w-full aspect-[21/9] mb-12 rounded-xl overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-gray-400 text-sm mb-2">PROJECT TYPE</h3>
              <p className="font-medium">{project.projectType}</p>
            </div>
            <div>
              <h3 className="text-gray-400 text-sm mb-2">MY ROLE</h3>
              <p className="font-medium">{project.role}</p>
            </div>
            <div>
              <h3 className="text-gray-400 text-sm mb-2">TOOLS</h3>
              <p className="font-medium">{project.tools.join(", ")}</p>
            </div>
            <div>
              <h3 className="text-gray-400 text-sm mb-2">DURATION</h3>
              <p className="font-medium">{project.duration}</p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-12 px-8 py-3 bg-blue-600 hover:bg-blue-700 
            rounded-lg font-medium transition-colors duration-300"
          >
            Visit Project →
          </a>
        </div>
      </section>
    </>
  );
}
