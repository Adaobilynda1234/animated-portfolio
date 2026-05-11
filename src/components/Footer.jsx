import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="max-w-[1300px] mx-auto px-6 md:px-12 py-10 md:py-16 mt-12 border-t border-purple-900/30">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <h3 className="text-2xl text-gray-200 font-semibold">
            Adaobi Okwuosa
          </h3>
          <p className="text-gray-400 text-sm">
            Full-Stack Engineer • Backend & DevOps
          </p>
          <div className="flex flex-row gap-5 text-gray-400 text-3xl pt-2">
            <a
              href="mailto:adaobilynda1234@gmail.com"
              aria-label="Email"
              className="hover:text-purple-400 transition"
            >
              <HiOutlineMail />
            </a>
            <a
              href="https://www.linkedin.com/in/adaobi-okwuosa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-purple-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Adaobilynda1234"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-purple-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://x.com/mdaobi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="hover:text-purple-400 transition"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
        <p className="text-gray-500 text-sm">
          © {year} Adaobi Okwuosa. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;