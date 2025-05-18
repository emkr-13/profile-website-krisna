"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectHeaderProps {
  title: string;
  description: string;
}

export default function ProjectHeader({
  title,
  description,
}: ProjectHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="space-y-8 mb-12"
    >
      <motion.h1
        className="text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h1>

      <div className="flex flex-col md:flex-row items-center gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-2/5"
        >
          <Image
            src="/images/undraw_project-completed_fwjq.svg"
            alt="Projects"
            width={350}
            height={250}
            className="mx-auto md:mx-0"
          />
        </motion.div>

        <motion.div
          className="w-full md:w-3/5 space-y-4"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-gray-600 text-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}
