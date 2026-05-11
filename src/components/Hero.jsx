import React from "react";
import profilepic from "../assets/profpicture.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { DiReact, DiNodejsSmall, DiMongodb } from "react-icons/di";
import {
  SiTypescript,
  SiDocker,
  SiTerraform,
  SiGithubactions,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { motion } from "framer-motion";
import { scroller } from "react-scroll";

const Hero = () => {
  return (
    <div className="mt-24 max-w-[1200px] mx-auto relative">
      <div className="grid md:grid-cols-2 place-items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "Full-Stack Engineer",
              1500,
              "Backend Developer",
              1500,
              "DevOps Engineer",
              1500,
              "Frontend Developer",
              1500,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-xl md:text-5xl italic mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
          >
            HEY, I AM <br />
            <span className="text-purple-500">Adaobi Okwuosa</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
          >
            Full-stack engineer with 2+ years of experience. I build end-to-end —
            from React interfaces to Node.js APIs and the Docker & CI/CD
            pipelines that ship them.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row flex-wrap items-center gap-4 md:gap-6 my-4 md:mb-0"
          >
            <motion.a
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
              }}
              href="/cv.pdf"
              download="Adaobi_Okwuosa_CV.pdf"
              className="z-10 cursor-pointer font-bold text-gray-200 p-4 border
                         border-purple-400 rounded-xl inline-block"
            >
              Download CV
            </motion.a>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgba(168, 85, 247, 0.4)",
              }}
              onClick={() =>
                scroller.scrollTo("portfolio", {
                  smooth: true,
                  duration: 500,
                  offset: 50,
                })
              }
              className="z-10 cursor-pointer font-bold text-white p-4
                         bg-purple-600 rounded-xl"
            >
              View Projects
            </motion.button>

            <div className="flex gap-6 flex-row text-4xl md:text-5xl text-purple-400 z-20 ml-2">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com/Adaobilynda1234"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <AiOutlineGithub />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/adaobi-okwuosa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <AiOutlineLinkedin />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://x.com/mdaobi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
              >
                <AiOutlineTwitter />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.img
          src={profilepic}
          alt="Adaobi Okwuosa"
          className="w-[300px] md:w-[450px]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-col md:flex-row px-6 md:px-0 w-full justify-center
                   items-center py-16 md:py-24 gap-6 md:gap-8"
      >
        <p className="text-gray-200 text-2xl md:text-3xl">My Tech Stack</p>
        <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-4 text-5xl md:text-6xl">
          <SiTypescript className="text-blue-500" title="TypeScript" />
          <DiReact className="text-blue-400" title="React" />
          <DiNodejsSmall className="text-green-500" title="Node.js" />
          <DiMongodb className="text-green-600" title="MongoDB" />
          <SiDocker className="text-blue-500" title="Docker" />
          <FaAws className="text-orange-500" title="AWS" />
          <SiTerraform className="text-purple-500" title="Terraform" />
          <SiGithubactions className="text-blue-400" title="GitHub Actions" />
        </div>
      </motion.div>

      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;