"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Types
type Project = {
  id: number;
  title: string;
  description: string;
  year: number;
  link_publish: string;
  link_github: string;
  technologies: string[];
  image: string;
};

type LinkType = "publish" | "github";

// Animation variants
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

// ProjectCard Component
const ProjectCard = ({
  project,
  onLinkClick,
}: {
  project: Project;
  onLinkClick: (type: LinkType, link: string) => void;
}) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{
        scale: 1.04,
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
      }}
      className="border rounded-2xl p-6 shadow-sm bg-white transition-all duration-300 hover:shadow-2xl hover:border-blue-400 group"
    >
      {project.image !== "NONE" && (
        <Image
          src={project.image}
          alt={`${project.title} image`}
          className="w-full h-48 object-cover rounded-t-lg mb-4"
          width={500}
          height={200}
        />
      )}
      <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-700 transition-colors duration-200">
        {project.title}
      </h3>
      <p className="text-gray-600 mb-4 line-clamp-5">{project.description}</p>
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-500 text-sm font-medium">
          Year: {project.year}
        </span>
        <div className="flex gap-4">
          <button
            onClick={() => onLinkClick("publish", project.link_publish)}
            className={`text-sm font-medium transition-colors duration-200 flex items-center gap-2 ${
              project.link_publish !== "NONE"
                ? "text-blue-600 hover:text-blue-800"
                : "text-gray-400 cursor-not-allowed"
            }`}
          >
            <Image
              src="https://cdn-icons-png.flaticon.com/512/5956/5956592.png"
              alt="publish icon"
              className="w-4 h-4"
              width={32}
              height={32}
            />
            <span className="hidden sm:inline">Publish</span>
          </button>
          <button
            onClick={() => onLinkClick("github", project.link_github)}
            className={`text-sm font-medium transition-colors duration-200 flex items-center gap-2 ${
              project.link_github !== "NONE"
                ? "text-blue-600 hover:text-blue-800"
                : "text-gray-400 cursor-not-allowed"
            }`}
          >
            <Image
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="github icon"
              className="w-4 h-4"
              width={32}
              height={32}
            />
            <span className="hidden sm:inline">Github</span>
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="bg-gradient-to-r from-blue-100 to-teal-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold shadow-sm border border-blue-200 group-hover:from-blue-200 group-hover:to-teal-200 transition-all duration-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
