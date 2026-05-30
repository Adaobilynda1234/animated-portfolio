import React from "react";
import project_lawfirm from "../assets/lawfirm.png";
import project_chatapp from "../assets/chatapp.jpg";
import project_ecommerce from "../assets/ecommerce.png";

import { AiOutlineGithub } from "react-icons/ai";
import { SiDocker, SiTerraform, SiPostman } from "react-icons/si";
import Reveal from "./Reveal";

const projects = [
  {
    title: "Student Records API",
    subtitle: "Containerized Full-Stack App with CI/CD",
    description:
      "Dockerized full-stack student records system: Express + MongoDB backend, React frontend served via Nginx, orchestrated with Docker Compose. A GitHub Actions pipeline runs tests, builds both images, and pushes to Docker Hub with `latest` and commit-SHA tags for traceable, rollback-friendly deploys.",
    tech: [
      "Node.js",
      "Express",
      "MongoDB",
      "Docker",
      "Docker Compose",
      "GitHub Actions",
      "Nginx",
    ],
    placeholder: {
      Icon: SiDocker,
      gradient: "from-blue-900/50 via-indigo-900/40 to-purple-900/50",
    },
    links: {
      github: "https://github.com/Adaobilynda1234/STUDENT-RECORD-API",
    },
  },
  {
    title: "AWS Infrastructure as Code",
    subtitle: "Terraform on AWS — EC2, S3, VPC & Security",
    description:
      "Provisioned production-style AWS infrastructure entirely from code: EC2 instances, S3 buckets with versioning for backup recovery, hardened security groups (IP-scoped SSH), and a custom VPC with public subnets, internet gateway, and route tables. Used Terraform resource references for implicit dependency management.",
    tech: ["Terraform", "AWS", "EC2", "S3", "VPC", "IAM", "Linux"],
    placeholder: {
      Icon: SiTerraform,
      gradient: "from-purple-900/60 via-pink-900/30 to-indigo-900/50",
    },
    links: {
      github: "https://github.com/Adaobilynda1234/SCA-Terraform-Classwork",
    },
  },
  {
    title: "Student Performance Analysis API",
    subtitle: "Backend for AI-Driven Education Platform",
    description:
      "Backend powering an AI-driven student performance platform. Implemented JWT-based authentication with multi-step registration, invite verification, and password setup flows. Built CSV bulk-upload endpoints (multipart/form-data) feeding an ML prediction model that recommends personalized improvement strategies.",
    tech: [
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Multer",
      "ML Integration",
    ],
    placeholder: {
      Icon: SiPostman,
      gradient: "from-orange-900/40 via-red-900/30 to-purple-900/50",
    },
    links: {
      docs: "https://documenter.getpostman.com/view/45518060/2sBXcGDz5P",
    },
  },
  {
    img: project_lawfirm,
    title: "SorenksAttorneys",
    subtitle: "Law Firm Website",
    description:
      "Client-facing website for a Nigerian law firm specializing in legal representation and property consultancy. Implemented a consultation booking flow, case-inquiry submission forms, and educational content on common legal issues with a focus on responsive design and accessibility.",
    tech: ["React", "Tailwind CSS", "Vercel"],
    links: {
      site: "https://sorenksattorneys.vercel.app/",
      github: "https://github.com/Adaobilynda1234/sorenksattorneys",
    },
  },

  {
    img: project_ecommerce,
    title: "E-Commerce Platform",
    subtitle: "Online Store with Paystack Integration",
    description:
      "E-commerce application built with React and integrated with Paystack for secure payment processing. Includes product catalog, shopping cart, and checkout flow with payment verification.",
    tech: ["React", "Paystack API", "Tailwind CSS"],
    links: {
      site: "https://ecommerce-omega-nine-50.vercel.app/",
      github: "https://github.com/Adaobilynda1234/ecommerce",
    },
  },
];

const TechChip = ({ children }) => (
  <span className="px-2.5 py-1 text-xs bg-purple-900/30 text-purple-300 border border-purple-700/40 rounded-md">
    {children}
  </span>
);

const PlaceholderImage = ({ Icon, gradient }) => (
  <div
    className={`w-full aspect-video rounded-lg shadow-lg flex items-center justify-center bg-gradient-to-br ${gradient} border border-purple-900/30`}
  >
    <Icon
      className="text-8xl md:text-9xl text-white/40"
      aria-hidden="true"
    />
  </div>
);

const Portfolio = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
      <h2 className="text-3xl font-bold text-gray-200 mb-8">Portfolio</h2>
      {projects.map((project, index) => (
        <Reveal key={index}>
          <div
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } mb-12`}
          >
            <div className="w-full md:w-1/2 p-4">
              {project.img ? (
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full aspect-video object-cover rounded-lg shadow-lg"
                />
              ) : (
                <PlaceholderImage
                  Icon={project.placeholder.Icon}
                  gradient={project.placeholder.gradient}
                />
              )}
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-200 mb-1">
                {project.title}
              </h3>
              {project.subtitle && (
                <p className="text-purple-400 text-sm font-medium mb-3">
                  {project.subtitle}
                </p>
              )}
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t, i) => (
                  <TechChip key={i}>{t}</TechChip>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {project.links.site && (
                  <a
                    href={project.links.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                  >
                    View Site
                  </a>
                )}
                {project.links.docs && (
                  <a
                    href={project.links.docs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                  >
                    API Docs
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} on GitHub`}
                    className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300 flex items-center gap-2"
                  >
                    <AiOutlineGithub /> GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Portfolio;