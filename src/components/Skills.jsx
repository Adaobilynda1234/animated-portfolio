import React from "react";
import { Link } from "react-scroll";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
} from "react-icons/di";
import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiJsonwebtokens,
  SiPostman,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiGithubactions,
  SiNginx,
  SiGit,
  SiVercel,
  SiPython,
  SiVite,
} from "react-icons/si";
import { FaAws, FaLinux, FaGithub } from "react-icons/fa";
import Reveal from "./Reveal";

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "HTML5", icon: <DiHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <DiCss3 className="text-blue-500" /> },
      {
        name: "JavaScript",
        icon: <DiJavascript1 className="text-yellow-400" />,
      },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "React", icon: <DiReact className="text-cyan-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
    ],
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", icon: <DiNodejsSmall className="text-green-500" /> },
      { name: "Express", icon: <SiExpress className="text-gray-300" /> },
      { name: "MongoDB", icon: <DiMongodb className="text-green-600" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
      { name: "JWT", icon: <SiJsonwebtokens className="text-pink-500" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    ],
  },
  {
    category: "DevOps & Cloud",
    technologies: [
      { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500" /> },
      { name: "AWS", icon: <FaAws className="text-orange-400" /> },
      { name: "Terraform", icon: <SiTerraform className="text-purple-500" /> },
      {
        name: "GitHub Actions",
        icon: <SiGithubactions className="text-blue-400" />,
      },
      { name: "Nginx", icon: <SiNginx className="text-green-500" /> },
    ],
  },
  {
    category: "Tools & Languages",
    technologies: [
      { name: "Git", icon: <SiGit className="text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-gray-200" /> },
      { name: "Linux", icon: <FaLinux className="text-yellow-300" /> },
      { name: "Python", icon: <SiPython className="text-blue-400" /> },
      { name: "Vite", icon: <SiVite className="text-purple-400" /> },
      { name: "Vercel", icon: <SiVercel className="text-gray-200" /> },
    ],
  },
];

const Skills = () => {
  return (
    <div
      className="max-w-[1100px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12"
      id="skills"
    >
      <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-center mb-10 text-gray-300">
          My toolkit across frontend, backend, and DevOps. See it in action in
          my{" "}
          <Link
            to="portfolio"
            smooth={true}
            offset={-50}
            duration={500}
            className="underline cursor-pointer text-purple-400 hover:text-purple-300 transition"
          >
            projects
          </Link>
          .
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg
                         hover:bg-purple-900/30 hover:border-purple-700 transition duration-300"
            >
              <h3 className="text-xl font-bold mb-5 text-center text-purple-300">
                {skill.category}
              </h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                {skill.technologies.map((tech, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-2xl flex-shrink-0">{tech.icon}</span>
                    <span className="text-sm md:text-base">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default Skills;