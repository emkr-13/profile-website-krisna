"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [text, setText] = useState("Full Stack Developer");
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const texts = ["Full Stack Developer", "Sometimes Data Scientist"];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setFade(false); // Start fade out

      setTimeout(() => {
        currentIndex = (currentIndex + 1) % texts.length;
        setText(texts[currentIndex]);
        setFade(true); // Start fade in
      }, 500); // Wait for fade out to complete
    }, 5000); // Change text every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.div
      className="bg-gray-50 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            Hai, I&apos;m Krisna
          </motion.h1>
          <motion.p
            className={`mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: fade ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {text}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
