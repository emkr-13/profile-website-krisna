import experienceData from "./experience.json";
export const metadata = {
  title: "About",
};
export default function About() {
  return (
    <main className="min-h-screen pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-black text-4xl font-bold mb-8 text-center">
          About Me
        </h1>
        <div className="prose max-w-none">
          <p className="text-black text-lg mb-4 text-justify">
            Halo! Saya Krisna, seorang Fullstack Developer dan
            Data Scientist dengan pengalaman lebih dari 2 tahun di industri
            teknologi. Meski menguasai pengembangan fullstack, saya memiliki
            keahlian khusus dalam backend development dan database management.
            Saya terus mengembangkan kemampuan front-end untuk mempertajam skill
            sebagai developer yang komprehensif.
          </p>
          <p className="text-black text-lg mb-4 text-justify">
            Sebagai Data Scientist, saya berfokus pada pengembangan model dan
            analisis data. Passion saya adalah mengeksplorasi teknologi baru dan
            terus berinovasi dalam dunia digital. Saya percaya bahwa
            pembelajaran berkelanjutan adalah kunci untuk tetap relevan dalam
            industri yang dinamis ini.
          </p>
          <p className="text-black text-lg mb-4 text-justify">
            Kombinasi keahlian dalam software development dan data science
            memungkinkan saya untuk memberikan solusi teknologi yang holistik
            dan berbasis data. Saya selalu antusias untuk menghadapi tantangan
            baru dan berkontribusi dalam proyek-proyek yang inovatif."
          </p>
          <h2 className="text-black text-2xl font-bold mt-8 mb-4">
            Pengalaman
          </h2>
          <ul className="text-black space-y-6">
            {experienceData.experiences.map((exp, index) => (
              <li key={index} className="border-b pb-6 last:border-b-0">
                <h3 className="font-bold text-xl">{exp.title}</h3>
                <p className="text-gray-600 mb-2">{exp.period}</p>
                <p className="mb-3">{exp.description}</p>
                <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="text-gray-800">
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
