import React from "react";
import project1 from "../assets/lawfirm.png";
import project2 from "../assets/chatapp.jpg";
import project3 from "../assets/ecommerce.png";
import project4 from "../assets/quiz.jpg";

import { AiFillGithub, AiOutlineGithub } from "react-icons/ai";
import Reveal from "./Reveal";

const projects = [
  {
    img: project1,
    title: "Project #1",
    description: "law firm app using React.",
    links: {
      site: "https://sorenksattorneys.vercel.app/",
      github: "https://github.com/Adaobilynda1234/sorenksattorneys",
    },
  },

  {
    img: project2,
    title: "Project #2",
    description: "An Ai chatapp using react and Gemini api",
    links: {
      site: "https://react-ai-chatbot-azure.vercel.app/",
      github: "https://github.com/Adaobilynda1234/react-ai-chatbot",
    },
  },
  {
    img: project3,
    title: "Project #3",
    description:
      "An E-commerce application built with React intergrated with paystack.",
    links: {
      site: "https://ecommerce-omega-nine-50.vercel.app/",
      github: "https://github.com/Adaobilynda1234/ecommerce",
    },
  },
  {
    img: project4,
    title: "Project #4",
    description: "Quiz app  using React.",
    links: {
      site: "https://react-quiz-app-sigma-inky.vercel.app/",
      github: "https://github.com/Adaobilynda1234/React-Quiz-App",
    },
  },
];

const Portfolio = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
      <h2 className="text-3xl font-bold text-gray-200 mb-8">Portfolio</h2>
      {projects.map((project, index) => (
        <Reveal>
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } mb-12`}
          >
            <div className="w-full md:w-1/2 p-4">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.links.site}
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300"
                >
                  View Site
                </a>
                <a
                  href={project.links.github}
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300"
                >
                  <AiOutlineGithub />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Portfolio;
