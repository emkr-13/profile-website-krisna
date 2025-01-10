"use client";

import { useState } from "react";
import projectsData from "../data/projects.json";

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

  const handleLinkClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    type: LinkType,
    link: string
  ): void => {
    e.preventDefault();
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
    <main className="min-h-screen pt-20 bg-white relative">
      {/* Popups */}
      {showDeployPopup && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
          Link Deploy Coming Soon!
        </div>
      )}
      {showPrivatePopup && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-700 text-white px-6 py-3 rounded-lg shadow-lg z-50">
          Project Github Code is Private
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-black">My Projects</h1>

          <select
            value={selectedYear}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setSelectedYear(e.target.value)
            }
            className="text-black px-4 py-2 border rounded-lg"
          >
            <option value="all">All Years</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project: Project) => (
            <div
              key={project.id}
              className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold mb-2 text-black">
                {project.title}
              </h3>
              <p className="text-black mb-4">{project.description}</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Year: {project.year}</span>
                <div className="flex gap-4">
                  <button
                    onClick={(e) =>
                      handleLinkClick(e, "publish", project.link_publish)
                    }
                    className={`text-sm ${
                      project.link_publish !== "NONE"
                        ? "text-blue-500 hover:text-blue-700"
                        : "text-gray-400"
                    }`}
                  >
                    Demo
                  </button>
                  <button
                    onClick={(e) =>
                      handleLinkClick(e, "github", project.link_github)
                    }
                    className={`text-sm ${
                      project.link_github !== "NONE"
                        ? "text-blue-500 hover:text-blue-700"
                        : "text-gray-400"
                    }`}
                  >
                    Github
                  </button>
                </div>
              </div>
              <div className="text-black flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-200 px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
