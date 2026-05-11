import React from "react";

const experiences = [
  {
    type: "work",
    role: "Frontend Developer",
    company: "Wellahealth",
    period: "Aug 2024 - Present",
    bullets: [
      "Build and ship responsive interfaces for a healthcare fintech dashboard (erx.ui) using React, TypeScript, and Bootstrap, serving doctors and pharmacies across a multi-tenant platform.",
      "Engineered a real-time patient-doctor chat feature using SignalR for live messaging, IndexedDB for offline caching, and SWR for data sync, handling reconnection, race conditions, and session state across re-logins.",
      "Integrated REST APIs for real-time data display, resolved cross-browser UI bugs, and contributed to code reviews to maintain a clean, scalable codebase.",
    ],
  },
  {
    type: "training",
    role: "DevOps Engineering Bootcamp",
    company: "SheCode Africa",
    period: "Feb 2026 - May 2026",
    bullets: [
      "Hands-on training in cloud infrastructure and DevOps practices: Linux administration, Bash scripting, Docker, Docker Compose, Kubernetes, AWS (EC2, S3, VPC), Terraform (IaC), Nginx, and GitHub Actions CI/CD.",
      "Built and deployed containerized full-stack applications with automated CI/CD pipelines, and provisioned production-style AWS infrastructure entirely as code.",
    ],
  },
  {
    type: "training",
    role: "Backend Engineering Bootcamp",
    company: "Tech4Dev",
    period: "Sept 2025 - Apr 2026",
    bullets: [
      "Hands-on training in backend development with Node.js, Express, MongoDB and Mongoose, REST API design, JWT authentication, file uploads, and database modeling.",
      "Built the backend for an AI-driven student performance platform (Tech4Dev Group 55) featuring multi-step authentication, invite verification, and CSV bulk-upload endpoints feeding an ML prediction model.",
    ],
  },
  {
    type: "work",
    role: "Data Analyst",
    company: "Access Bank",
    period: "Apr 2023 - Jan 2024",
    bullets: [
      "Analyzed performance data for 70,000+ POS terminals nationwide using Excel and SQL, surfacing patterns in regional transaction volume and downtime.",
      "Delivered dashboards and recommendations to business stakeholders, contributing to operational decisions on terminal allocation and revenue optimization.",
      "Communicated findings clearly across business and technical teams.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="px-6 py-8 max-w-[900px] mx-auto">
      <h2 className="text-4xl text-gray-200 font-bold text-center mb-12">
        Experience
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="border border-purple-600 p-6 rounded-lg bg-purple-700/10 hover:border-purple-500 hover:bg-purple-700/15 transition duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-gray-100 text-xl md:text-2xl font-semibold">
                    {exp.role}
                  </h3>
                  {exp.type === "training" && (
                    <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 bg-purple-900/40 border border-purple-700/60 text-purple-300 rounded-md">
                      Training
                    </span>
                  )}
                </div>
                {exp.company && (
                  <p className="text-purple-400 font-medium mt-1">
                    {exp.company}
                  </p>
                )}
              </div>
              <p className="text-gray-400 text-sm md:text-base md:whitespace-nowrap md:pt-1">
                {exp.period}
              </p>
            </div>
            <ul className="mt-4 space-y-2 text-gray-300 leading-relaxed list-disc list-outside pl-5 marker:text-purple-500">
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;