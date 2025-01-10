"use client";

import { useState } from "react";
import projectsData from "../data/projects.json";

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

// Component untuk Project Card
const ProjectCard = ({
  project,
  onLinkClick,
}: {
  project: Project;
  onLinkClick: (type: LinkType, link: string) => void;
}) => (
  <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
    <h3 className="text-xl font-bold mb-3 text-gray-800">{project.title}</h3>
    <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

    <div className="flex justify-between items-center mb-4">
      <span className="text-gray-500 text-sm">Year: {project.year}</span>
      <div className="flex gap-4">
        <button
          onClick={() => onLinkClick("publish", project.link_publish)}
          className={`text-sm font-medium transition-colors duration-200 flex items-center gap-2 ${
            project.link_publish !== "NONE"
              ? "text-blue-600 hover:text-blue-800"
              : "text-gray-400 cursor-not-allowed"
          }`}
        >
          <img 
            src="https://cdn-icons-png.flaticon.com/512/5956/5956592.png"
            alt="publish icon"
            className="w-4 h-4"
          />
          Publish
        </button>
        <button
          onClick={() => onLinkClick("github", project.link_github)}
          className={`text-sm font-medium transition-colors duration-200 flex items-center gap-2 ${
            project.link_github !== "NONE"
              ? "text-blue-600 hover:text-blue-800"
              : "text-gray-400 cursor-not-allowed"
          }`}
        >
          <img 
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="github icon"
            className="w-4 h-4"
          />
          Github
        </button>
      </div>
    </div>

    <div className="flex flex-wrap gap-2">
      {project.technologies.map((tech) => (
        <span
          key={tech}
          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
        >
          {tech}
        </span>
      ))}
    </div>
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

  return (
    <main className="min-h-screen pt-20 bg-gray-50">
      {showDeployPopup && (
        <Popup message="Tidak di deploy secara Umum" bgColor="bg-blue-500" />
      )}
      {showPrivatePopup && (
        <Popup message="Project Github Code is Private" bgColor="bg-gray-700" />
      )}

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-900">My Projects</h1>
            <p className="text-gray-600 max-w-2xl">
              Project yang saya tampilkan di sini adalah project yang bersifat
              Public untuk umum. Project yang bersifat Private dan Riset saya
              lakukan tidak tampilkan disini.
            </p>
          </div>

          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="px-4 py-2 border rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Years</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: Project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onLinkClick={handleLinkClick}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
