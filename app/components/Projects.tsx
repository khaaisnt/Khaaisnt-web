import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import LansiCare from "/public/LansiCareSection.png";
import Wastain from "/public/WastainSection.png";
import Pilketos from "/public/E-Pilketos.png";
import Beloved from "/public/BelovedOna.png";
import ZDev from "/public/ZDev.png";
import Kaliurang from "/public/GadoKaliurang.png";
import { X } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

interface Project {
  title: string;
  image: StaticImageData;
  url: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  isModal?: boolean;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const allProjectData: Project[] = [
  {
    title: "LansiCare",
    image: LansiCare,
    url: "https://lansicare-health.vercel.app/homepage",
  },
  {
    title: "Wastain",
    image: Wastain,
    url: "https://wastain.vercel.app/homepage",
  },
  {
    title: "E-Pilketos Moklet",
    image: Pilketos,
    url: "https://e-pilketos.moklet.org/",
  },
  {
    title: "ZDev",
    image: ZDev,
    url: "https://zdevloper.vercel.app/",
  },
  {
    title: "Gado-Gado Kaliurang",
    image: Kaliurang,
    url: "https://gadogadokaliurang.vercel.app/",
  },
];

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  isModal = false,
}) => (
  <div
    className={`w-full aspect-[19/12] rounded-[20px] overflow-hidden relative group ${
      !isModal ? "data-aos='zoom-in'" : ""
    }`}
    data-aos-delay={400 + index * 100}
  >
    <Link
      href={`/projects/${project.title.toLowerCase().replace(/\s+/g, "-")}`}
      className="block w-full h-full"
    >
      <div className="w-full h-full relative">
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-colors duration-300 flex items-center justify-center gap-4">
          <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-center">
            <h3 className="text-white text-2xl font-bold mb-2">
              {project.title}
            </h3>
            <span className="text-blue-400 text-sm group-hover:text-blue-300">
              View Details →
            </span>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen px-4 flex items-center justify-center">
        <div className="bg-black/95 rounded-2xl w-full max-w-6xl p-8 relative border border-white/10">
          <button
            onClick={onClose}
            className="absolute right-6 top-6 text-white/60 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>

          <h2 className="text-2xl font-bold mb-8 text-white">All Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-h-[70vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-white/10">
            {allProjectData.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                isModal={true}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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
    <section
      className="px-5 lg:px-32 w-full py-16 lg:py-24 bg-black"
      id="projects"
    >
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-secondary-gray text-xl font-medium">Projects</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-white hover:text-blue-400 transition-colors duration-300 
          relative after:content-[''] after:absolute after:w-full after:h-[2px] 
          after:bg-blue-400 after:left-0 after:-bottom-1 after:scale-x-0 
          hover:after:scale-x-100 after:transition-transform after:duration-300"
        >
          View More Projects
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {allProjectData.slice(0, 4).map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Projects;
