import React from "react";

interface ExperienceCardProps {
  title: string;
  period: string;
  description: string;
  responsibilities: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  period,
  description,
  responsibilities,
}) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
      <h3 className="font-bold text-xl text-gray-800 mb-2">{title}</h3>
      <p className="text-blue-600 mb-4 font-medium">{period}</p>
      <p className="mb-6 text-gray-700 leading-relaxed">{description}</p>
      <h4 className="font-semibold mb-4 text-gray-800">
        Key Responsibilities:
      </h4>
      <ul className="list-disc pl-5 space-y-2">
        {responsibilities.map((responsibility, idx) => (
          <li key={idx} className="text-gray-700">
            {responsibility}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
