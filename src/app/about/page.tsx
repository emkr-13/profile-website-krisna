import experienceData from './experience.json';

export default function About() {
  return (
    <main className="min-h-screen pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-black text-4xl font-bold mb-8">About Me</h1>
        <div className="prose max-w-none">
          <p className="text-black text-lg mb-4">
            Hello! I'm Krisna, a passionate web developer with over 2 years of
            experience in creating digital solutions. I love turning complex
            problems into simple, beautiful, and intuitive designs.
          </p>
          <h2 className="text-black text-2xl font-bold mt-8 mb-4">
            Experience
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
