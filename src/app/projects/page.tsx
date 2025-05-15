"use client";

import { useState } from "react";
import projectsData from "../data/projects.json";
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
};

type LinkType = "publish" | "github";

// Component untuk Popup
const Popup = ({ message, bgColor }: { message: string; bgColor: string }) => (
  <div
    className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-opacity duration-300`}
  >
    {message}
  </div>
);

export default function Projects() {
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [showDeployPopup, setShowDeployPopup] = useState<boolean>(false);
  const [showPrivatePopup, setShowPrivatePopup] = useState<boolean>(false);

  const years = [
    ...new Set(projectsData.projects.map((project: Project) => project.year)),
  ];

  const filteredProjects =
    selectedYear === "all"
      ? projectsData.projects
      : projectsData.projects.filter(
          (project: Project) => project.year === parseInt(selectedYear)
        );

  const handleLinkClick = (type: LinkType, link: string): void => {
    if (link === "NONE") {
      if (type === "publish") {
        setShowDeployPopup(true);
        setTimeout(() => setShowDeployPopup(false), 3000);
      } else {
        setShowPrivatePopup(true);
        setTimeout(() => setShowPrivatePopup(false), 3000);
      }
    } else {
      window.open(link, "_blank");
    }
  };

  // Animasi varian
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

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

  return (
    <main className="min-h-screen pt-20 bg-gray-50">
      {showDeployPopup && (
        <Popup message="Tidak di deploy secara Umum" bgColor="bg-blue-500" />
      )}
      {showPrivatePopup && (
        <Popup message="Project Github Code is Private" bgColor="bg-gray-700" />
      )}

      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-4 mb-12"
        >
          <motion.h1
            className="text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            My Projects
          </motion.h1>
          <motion.p
            className="text-gray-600 max-w-2xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Project yang saya tampilkan di sini adalah project yang bersifat
            Public untuk umum. Project yang bersifat Private yang dimana nama
            project nya dan jika yang di tampilkan hanya service aja tanpa ada
            link publish dan link github dan Riset saya belum di buat kedalam
            service atau engine seperti Crawling Data,Automasi Website dan
            Mobile, OpenCV untuk Object Detection,Optical Character Recognition
            (OCR), Model Yolo untuk Object Detection. tapi rata sudah bisa semua
            tergantung kebutuhan juga mau bikin service nya atau engine
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12"
        >
          <div></div>
          <motion.select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="px-4 py-2 border rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <option value="all">All Years</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </motion.select>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project: Project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
              }}
              className="border rounded-2xl p-6 shadow-sm bg-white transition-all duration-300 hover:shadow-2xl hover:border-blue-400 group"
            >
              <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-700 transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-5">
                {project.description}
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-500 text-sm font-medium">
                  Year: {project.year}
                </span>
                <div className="flex gap-4">
                  <button
                    onClick={() =>
                      handleLinkClick("publish", project.link_publish)
                    }
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
                    onClick={() =>
                      handleLinkClick("github", project.link_github)
                    }
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
          ))}
        </motion.div>
      </div>
    </main>
  );
}
