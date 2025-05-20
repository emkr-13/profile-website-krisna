"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ReactNode } from "react";

interface Skill {
  name: string;
  icon: string;
  description: string;
}

interface Technology {
  name: string;
  icon: string;
}

interface AnimatedContentProps {
  children: ReactNode;
  skills: Skill[];
  technologies: Technology[];
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
      {/* What I Do Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-12"
      >
        <motion.h2 className="text-black text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600">
          What I Do
        </motion.h2>

        <motion.div
          className="p-8 bg-transparent flex flex-col md:flex-row gap-8 items-center"
          variants={itemVariants}
        >
          <Image
            src="/images/undraw_web-developer_ggt0_biru.svg"
            alt="Web Developer"
            width={500}
            height={500}
            className="mb-4 md:mb-0"
          />
          <div className="space-y-5 text-lg">{children}</div>
        </motion.div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-12"
      >
        <motion.h2 className="text-black text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600">
          Skills
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  className="w-10 h-10 mr-4"
                  width={40}
                  height={40}
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {skill.name}
                </h3>
              </div>
              <p className="text-gray-600">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Technologies Section */}
      <motion.div
        className="mt-12 overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.h2 className="text-black text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600">
          The Technology I Use
        </motion.h2>
        <motion.div
          className="flex gap-6 animate-marquee"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[...technologies, ...technologies].map((tech, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
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
        </motion.div>
      </motion.div>
    </section>
  );
}
