"use client";

import { useState } from "react";
import projectsData from "../data/projects.json";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from "next/image";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import ProjectHeader from "@/components/ProjectHeader";

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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
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

  // Sort projects by year (newest first) and then filter by selected year
  const sortedProjects = [...projectsData.projects].sort(
    (a, b) => b.year - a.year
  );

  const filteredProjects =
    selectedYear === "all"
      ? sortedProjects
      : sortedProjects.filter(
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

  const projectDescription = 
    "Project yang ditampilkan di sini bersifat publik dan dapat diakses oleh umum. Sementara itu, project yang bersifat rahasia atau internal kantor tidak saya tampilkan secara rinci, termasuk tautan GitHub-nya. Untuk project riset, saya hanya menyertakan deskripsi, tangkapan layar, atau ilustrasi visual yang menggambarkan proses atau hasilnya, tanpa mencantumkan repository kode secara langsung.";


  return (
    <main className="min-h-screen pt-20 bg-gray-50">
      {showDeployPopup && (
        <Popup message="Tidak di deploy secara Umum" bgColor="bg-blue-500" />
      )}
      {showPrivatePopup && (
        <Popup message="Project Github Code is Private" bgColor="bg-gray-700" />
      )}

      <div className="max-w-7xl mx-auto px-4 py-12">
        <ProjectHeader title="My Projects" description={projectDescription} />

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
            <ProjectCard
              key={project.id}
              project={project}
              onLinkClick={handleLinkClick}
            />
          ))}
        </motion.div>
      </div>
    </main>
  );
}
