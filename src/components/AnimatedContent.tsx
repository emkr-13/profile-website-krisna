"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ReactNode } from "react";

interface AnimatedContentProps {
  children: ReactNode;
  skills: any[];
  technologies: any[];
}

export default function AnimatedContent({
  children,
  skills,
  technologies,
}: AnimatedContentProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <motion.h2 className="text-black text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600">
            What I Do
          </motion.h2>
          <motion.div className="space-y-4">{children}</motion.div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.h2 className="text-black text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600">
            Skills
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4"
            variants={containerVariants}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={skill.icon}
                    alt={`${skill.name} icon`}
                    className="w-8 h-8 mr-4"
                    width={32}
                    height={32}
                  />
                  <h3 className="text-lg font-semibold text-gray-800">
                    {skill.name}
                  </h3>
                </div>
                <p className="text-gray-600">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bagian teknologi */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.h2 className="text-black text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600">
          The Technology I Use
        </motion.h2>
        <div className="overflow-hidden">
          <div className="flex gap-6 animate-marquee">
            {[...technologies, ...technologies].map((tech, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-all duration-300"
              >
                <Image
                  src={tech.icon}
                  alt={`${tech.name} icon`}
                  width={50}
                  height={50}
                  unoptimized={true}
                />
                <p className="mt-2 text-sm text-gray-700">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
