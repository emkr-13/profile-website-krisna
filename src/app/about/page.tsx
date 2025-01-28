import experienceData from "../data/experience.json";
import Image from "next/image";

export const metadata = {
  title: "About",
};
export default function About() {
  return (
    <main className="min-h-screen pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-black text-7xl font-bold mb-8 text-center">
          About Me
        </h1>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 mb-8">
            {/* Left Column - Profile Image */}
            <div className="lg:w-1/3">
              <div className="w-64 h-64 relative rounded-full overflow-hidden mx-auto">
                <Image
                  src="/images/logo_emkr_crop.png"
                  alt="Profile Picture"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column - Text Content & Download Buttons */}
            <div className="lg:w-2/3">
              <div className="prose max-w-none">
                <p className="text-black text-lg mb-4 text-justify">
                  Halo! Saya Krisna, seorang Fullstack Developer dan Data
                  Scientist dengan pengalaman lebih dari 2 tahun di industri
                  teknologi. Meski menguasai pengembangan fullstack, saya
                  memiliki keahlian khusus dalam backend development dan
                  database management. Saya terus mengembangkan kemampuan
                  front-end untuk mempertajam skill sebagai developer yang
                  komprehensif.
                </p>
                <p className="text-black text-lg mb-4 text-justify">
                  Sebagai Data Scientist, saya berfokus pada pengembangan model
                  dan analisis data. Passion saya adalah mengeksplorasi
                  teknologi baru dan terus berinovasi dalam dunia digital. Saya
                  percaya bahwa pembelajaran berkelanjutan adalah kunci untuk
                  tetap relevan dalam industri yang dinamis ini.
                </p>
                <p className="text-black text-lg mb-4 text-justify">
                  Kombinasi keahlian dalam software development dan data science
                  memungkinkan saya untuk memberikan solusi teknologi yang
                  holistik dan berbasis data. Saya selalu antusias untuk
                  menghadapi tantangan baru dan berkontribusi dalam
                  proyek-proyek yang inovatif.
                </p>
                <p className="text-black text-lg mb-4 text-justify">
                  Maka berikut CV dan Resume jika tertarik untuk melihat lebih
                  detail mengenai saya
                </p>
              </div>

              {/* Download Buttons Card */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex flex-row gap-4">
                  <a
                    href="/pdf/Emmanuel Mathew Krisna Rata_sangat_baru.pdf"
                    download
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center font-medium flex-1"
                  >
                    Download CV
                  </a>
                  <a
                    href="/pdf/resume_krisna.pdf"
                    download
                    className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors text-center font-medium flex-1"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="prose max-w-none">
          <h2 className="text-black text-3xl font-bold mt-8 mb-4">
            Pengalaman
          </h2>

          <div className="relative">
            {/* Garis timeline vertikal */}
            <div className="absolute left-4 h-full w-0.5 bg-gray-200"></div>

            <div className="space-y-8">
              {experienceData.experiences.map((exp, index) => (
                <div key={index} className="relative pl-12">
                  {/* Dot pada timeline */}
                  <div className="absolute left-3 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>

                  {/* Card experience */}
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="font-bold text-xl text-black">
                      {exp.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{exp.period}</p>
                    <p className="mb-3 text-black">{exp.description}</p>

                    <h4 className="font-semibold mb-2 text-black">
                      Key Responsibilities:
                    </h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="text-gray-800">
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
