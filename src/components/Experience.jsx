import React from "react";

const experiences = [
  {
    company: "Wellahealth",
    period: "2024 - Present",
    description:
      "Developed and implemented responsive user interfaces for healthcare fintech applications using React, TypeScript, and Bootstrap. Collaborated with cross-functional teams to enhance user experience, ensuring accessibility and mobile responsiveness across various devices. Optimized application performance by identifying and resolving UI bugs, reducing load time, and improving efficiency. Integrated APIs to display real-time data, enabling better user interaction and seamless navigation within the application. Participated in code reviews and implemented feedback to ensure clean, maintainable, and scalable code.",
  },
  {
    company: "Access Bank",
    period: "2023 - 2024",
    description:
      "Analyzed and visualized data for over 70,000 terminals in different states across Nigeria.Utilized Excel to clean, manipulate, and analyze terminal data to track business performance.Communicated findings and recommendations to stakeholders, resulting in improved decision-making and increased revenue.",
  },
];

const Experience = () => {
  return (
    <div className="p-8 max-w-[600px] mx-auto">
      <h1 className="text-4xl text-gray-200 font-bold text-center mb-12">
        Experience
      </h1>
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="border border-purple-600 p-6 rounded-lg shadow-md hover:shadow-xl  duration-300 bg-purple-700/10 transform hover:scale-105 transition-transform"
          >
            <h2 className="text-gray-100 text-2xl font-semibold">
              {experience.company}
            </h2>
            <p className="text-gray-300">{experience.period}</p>
            <p className="text-gray-400 mt-4">{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
