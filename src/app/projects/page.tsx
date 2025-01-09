"use client"; // Add this at the top to make it a client component

import { useState } from "react";
import projectsData from "../data/projects.json";

export default function Projects() {
  const [selectedYear, setSelectedYear] = useState("all");

  // Get unique years from projects
  const years = [
    ...new Set(projectsData.projects.map((project) => project.year)),
  ];

  // Filter projects based on selected year
  const filteredProjects =
    selectedYear === "all"
      ? projectsData.projects
      : projectsData.projects.filter(
          (project) => project.year === parseInt(selectedYear)
        );

  return (
    <main className="min-h-screen pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-black">My Projects</h1>

          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
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
          {filteredProjects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold mb-2 text-black">
                {project.title}
              </h3>
              <p className="text-black mb-4">{project.description}</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Year: {project.year}</span>
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
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
