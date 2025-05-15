import Hero from "@/components/Hero";
import Image from "next/image";
import technologies from "./data/technologies.json";
import skills from "./data/skills.json";

export const metadata = {
  title: "Home",
};
export default function Home() {
  return (
    <main className="min-h-screen pt-16 bg-white">
      <Hero />
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-black text-3xl font-bold mb-4">What I Do</h2>
            <p className="text-black text-justify mb-2">
              Saya adalah Web Developer dan Data Scientist yang berpengalaman
              dalam mengembangkan aplikasi web.
            </p>
            <p className="text-black text-justify mb-2">
              Saya memiliki keahlian mendalam dalam teknologi front-end seperti:
              <ul className="list-disc list-inside">
                <li>React</li>
                <li>Next.js</li>
              </ul>
              Dan back-end menggunakan:
              <ul className="list-disc list-inside">
                <li>Node.js</li>
                <li>PHP</li>
              </ul>
            </p>
            <p className="text-black text-justify mb-2">
              Dalam manajemen basis data, saya mahir menggunakan berbagai sistem
              seperti:
              <ul className="list-disc list-inside">
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>SQLite</li>
              </ul>
            </p>
            <p className="text-black text-justify mb-2">
              Sebagai Data Scientist, saya mampu mengembangkan dan
              mengimplementasikan model data menggunakan Python.
            </p>
            <p className="text-black text-justify">
              Saya memiliki hasrat tinggi untuk mengikuti perkembangan teknologi
              terkini dan selalu antusias mempelajari hal-hal baru di dunia Web
              Developer dan Data Scientist.
            </p>
          </div>
          <div>
            <h2 className="text-black text-3xl font-bold mb-4">Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {skills.skills.map((skill, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fade-in"
                >
                  <div className="flex items-center mb-4">
                    <Image
                      src={skill.icon}
                      alt={`${skill.name} icon`}
                      className="w-8 h-8 mr-4"
                      width={32}
                      height={32}
                    />
                    <h3 className="text-lg font-semibold text-black">
                      {skill.name}
                    </h3>
                  </div>
                  <p className="text-gray-600">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bagian teknologi */}
        <div className="mt-12">
          <h2 className="text-black text-3xl font-bold mb-8">
            The Technology I Use
          </h2>
          <div className="overflow-hidden">
            <div className="flex gap-6 animate-marquee">
              {[...technologies.technologies, ...technologies.technologies].map(
                (tech, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <Image
                      src={tech.icon}
                      alt={`${tech.name} icon`}
                      width={50}
                      height={50}
                      unoptimized={true}
                    />
                    <p className="mt-2 text-sm text-gray-700">{tech.name}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
