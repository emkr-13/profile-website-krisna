import Hero from "@/components/Hero";
import Image from "next/image";

export const metadata = {
  title: 'Home',
}
export default function Home() {
  
  const technologies = [
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },

    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Vue.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "PHP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    {
      name: "Laravel",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "SQLite",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
    },
  ];

  return (
    <main className="min-h-screen pt-16 bg-white">
      <Hero />
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-black text-3xl font-bold mb-4">What I Do</h2>
            <p className="text-black text-justify">
              I am a Web Developer and Data Scientist experienced in developing
              modern web applications. I have deep expertise in front-end
              technologies such as React and Next.js, as well as back-end using
              Node.js and PHP. In database management, I am proficient in using
              various database management systems such as PostgreSQL, MySQL, and
              SQLite. As a Data Scientist, I am able to develop and implement
              data models using Python. I have a high passion to keep up with
              the latest technology developments and am always enthusiastic
              about learning new things in the world of web development and data
              science.
            </p>
          </div>
          <div>
            <h2 className="text-black text-3xl font-bold mb-4">Skills</h2>
            <ul className="text-black list-disc list-inside">
              <li>Frontend Development</li>
              <li>Backend Development</li>
              <li>Database Management</li>
              <li>Data Scientist</li>
            </ul>
          </div>
        </div>

        {/* Bagian teknologi */}
        <div className="mt-12">
          <h2 className="text-black text-3xl font-bold mb-8">Technologies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
              >
                {/* Tambahkan next.config.js untuk mengizinkan domain gambar */}
                <Image
                  src={tech.icon}
                  alt={`${tech.name} icon`}
                  width={50}
                  height={50}
                  unoptimized={true} // Untuk gambar dari CDN
                />
                <p className="mt-2 text-sm text-gray-700">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
