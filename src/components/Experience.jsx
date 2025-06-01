import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const experiences = [
  {
    company: "Wellahealth",
    period: "2024 - Present",
    description: "Developed and implemented responsive user interfaces for healthcare fintech applications using React, TypeScript, and Bootstrap.
Collaborated with cross-functional teams to enhance user experience, ensuring accessibility and mobile responsiveness across various devices.
Optimized application performance by identifying and resolving UI bugs, reducing load time, and improving efficiency.
Integrated APIs to display real-time data, enabling better user interaction and seamless navigation within the application.
Participated in code reviews and implemented feedback to ensure clean, maintainable, and scalable code.",
  },
  {
    company: "Access Bank",
    period: "2023 - 2024",
    description:"Developed and implemented responsive user interfaces for healthcare fintech applications using React, TypeScript, and Bootstrap.
Collaborated with cross-functional teams to enhance user experience, ensuring accessibility and mobile responsiveness across various devices.
Optimized application performance by identifying and resolving UI bugs, reducing load time, and improving efficiency.
Integrated APIs to display real-time data, enabling better user interaction and seamless navigation within the application.
Participated in code reviews and implemented feedback to ensure clean, maintainable, and scalable code."
  },
];

const Experience = () => {
  return (
    <div className="p-8 max-w-[600px] mx-auto">
      <h1 className="text-4xl text-gray-200 font-bold text-center mb-12">
        Experience
      </h1>
      <motion.div className="space-y-8" initial="hidden" animate="visible">
        {experiences.map((experience, index) => (
          <Reveal>
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className=" border border-purple-600 p-6 rounded-lg shadow-md
                    hover:shadow-xl transition-shadow duration-300 bg-purple-700/10"
            >
              <h2 className="text-gray-100 text-2xl font-semibold">
                {experience.company}
              </h2>
              <p className="text-gray-300">{experience.period}</p>
              <p className="text-gray-400 mt-4">{experience.description}</p>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
