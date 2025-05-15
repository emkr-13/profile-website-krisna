"use client";

import experienceData from "../data/experience.json";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="min-h-screen pt-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-black text-7xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600"
        >
          About Me
        </motion.h1>

        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 mb-12">
            {/* Left Column - Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/3"
            >
              <div className="w-64 h-64 relative rounded-full overflow-hidden mx-auto shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
                <Image
                  src="/images/logo_emkr_crop.png"
                  alt="Profile Picture"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Right Column - Text Content & Download Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:w-2/3"
            >
              <div className="prose max-w-none">
                <p className="text-gray-800 text-lg mb-6 text-justify leading-relaxed">
                  Halo! Saya Krisna, seorang Fullstack Developer dan Data
                  Scientist dengan pengalaman lebih dari 2 tahun di industri
                  teknologi. Meski menguasai pengembangan fullstack, saya
                  memiliki keahlian khusus dalam backend development dan
                  database management. Saya terus mengembangkan kemampuan
                  front-end untuk mempertajam skill sebagai developer yang
                  komprehensif.
                </p>
                <p className="text-gray-800 text-lg mb-6 text-justify leading-relaxed">
                  Sebagai Data Scientist, saya berfokus pada pengembangan model
                  dan analisis data. Passion saya adalah mengeksplorasi
                  teknologi baru dan terus berinovasi dalam dunia digital. Saya
                  percaya bahwa pembelajaran berkelanjutan adalah kunci untuk
                  tetap relevan dalam industri yang dinamis ini.
                </p>
                <p className="text-gray-800 text-lg mb-6 text-justify leading-relaxed">
                  Kombinasi keahlian dalam software development dan data science
                  memungkinkan saya untuk memberikan solusi teknologi yang
                  holistik dan berbasis data. Saya selalu antusias untuk
                  menghadapi tantangan baru dan berkontribusi dalam
                  proyek-proyek yang inovatif.
                </p>
                <p className="text-gray-800 text-lg mb-6 text-justify leading-relaxed">
                  Maka berikut CV dan Resume jika tertarik untuk melihat lebih
                  detail mengenai saya
                </p>
              </div>

              {/* Download Buttons Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/pdf/Emmanuel Mathew Krisna Rata_sangat_baru.pdf"
                    download
                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-center font-medium flex-1 transform hover:scale-105"
                  >
                    Download CV
                  </a>
                  <a
                    href="/pdf/resume_krisna.pdf"
                    download
                    className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-6 py-3 rounded-lg hover:from-teal-700 hover:to-teal-800 transition-all duration-300 text-center font-medium flex-1 transform hover:scale-105"
                  >
                    Download Resume
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="prose max-w-none"
        >
          <h2 className="text-4xl font-bold mt-12 mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600">
            Pengalaman
          </h2>

          <div className="relative">
            {/* Garis timeline vertikal */}
            <div className="absolute left-4 h-full w-0.5 bg-gradient-to-b from-blue-500 to-teal-500"></div>

            <div className="space-y-8">
              {experienceData.experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
                  className="relative pl-12"
                >
                  {/* Dot pada timeline */}
                  <div className="absolute left-3 -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full border-4 border-white shadow-lg"></div>

                  {/* Card experience */}
                  <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                    <h3 className="font-bold text-xl text-gray-800 mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-blue-600 mb-4 font-medium">
                      {exp.period}
                    </p>
                    <p className="mb-6 text-gray-700 leading-relaxed">
                      {exp.description}
                    </p>

                    <h4 className="font-semibold mb-4 text-gray-800">
                      Key Responsibilities:
                    </h4>
                    <ul className="list-disc pl-5 space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="text-gray-700">
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
