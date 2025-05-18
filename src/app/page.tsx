"use client";

import Hero from "@/components/Hero";
import technologies from "./data/technologies.json";
import skills from "./data/skills.json";
import AnimatedContent from "@/components/AnimatedContent";

export default function Home() {
  const content = (
    <>
      <p className="text-gray-800 text-justify text-lg">
        Saya adalah Web Developer dan Data Scientist yang berpengalaman dalam
        mengembangkan aplikasi web.
      </p>
      <div>
        <p className="text-gray-800 text-justify mb-2 text-lg">
          Saya memiliki keahlian mendalam dalam teknologi front-end seperti:
        </p>
        <ul className="list-disc list-inside text-gray-800 ml-4 text-lg">
          <li>React</li>
          <li>Next.js</li>
        </ul>
        <p className="text-gray-800 text-justify mt-2 text-lg">
          Dan back-end menggunakan:
        </p>
        <ul className="list-disc list-inside text-gray-800 ml-4 text-lg">
          <li>Node.js</li>
          <li>PHP</li>
          <li>Python</li>
        </ul>
      </div>
      <div>
        <p className="text-gray-800 text-justify mb-2 text-lg">
          Dalam manajemen basis data, saya mahir menggunakan berbagai sistem
          seperti:
        </p>
        <ul className="list-disc list-inside text-gray-800 ml-4 text-lg">
          <li>PostgreSQL</li>
          <li>MySQL</li>
          <li>SQLite</li>
        </ul>
      </div>
      <p className="text-gray-800 text-justify text-lg">
        Sebagai Data Scientist, saya mampu mengembangkan dan mengimplementasikan
        model data menggunakan Python.
      </p>
      <p className="text-gray-800 text-justify text-lg">
        Saya memiliki hasrat tinggi untuk mengikuti perkembangan teknologi
        terkini dan selalu antusias mempelajari hal-hal baru di dunia Web
        Developer dan Data Scientist.
      </p>
    </>
  );

  return (
    <main className="min-h-screen pt-16 bg-white">
      <Hero />
      <AnimatedContent
        skills={skills.skills}
        technologies={technologies.technologies}
      >
        {content}
      </AnimatedContent>
    </main>
  );
}
