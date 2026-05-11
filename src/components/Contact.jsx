import React, { useState, useEffect } from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    textarea: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  // Auto-dismiss status message after 5s
  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => setSubmitStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  // Validation functions
  const validateName = (name) => {
    if (!name.trim()) return "Name is required";
    if (name.trim().length < 2) return "Name must be at least 2 characters";
    if (name.trim().length > 50) return "Name must be less than 50 characters";
    return "";
  };

  const validateEmail = (email) => {
    if (!email.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return "";
  };

  const validateMessage = (message) => {
    if (!message.trim()) return "Message is required";
    if (message.trim().length < 10)
      return "Message must be at least 10 characters";
    if (message.trim().length > 1000)
      return "Message must be less than 1000 characters";
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const messageError = validateMessage(formData.textarea);

    const newErrors = {
      name: nameError,
      email: emailError,
      textarea: messageError,
    };
    setErrors(newErrors);

    if (nameError || emailError || messageError) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://getform.io/f/adrrjmxa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", textarea: "" });
        setSubmitStatus("success");
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBase =
    "w-full rounded-md border bg-transparent py-2 pl-3 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition";

  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center gap-8">
          {/* LEFT: Heading, blurb, stats, social */}
          <div className="w-full">
            <div className="text-gray-300 my-3">
              <h2 className="text-4xl font-semibold mb-5">
                Get In <span>Touch</span>
              </h2>
              <p className="leading-7 w-11/12">
                I'm a full-stack engineer who enjoys building software that
                genuinely helps people — from polished interfaces to the APIs
                and infrastructure behind them. Always happy to talk about new
                opportunities, collaborations, or interesting technical
                problems.
              </p>
            </div>

            <div className="flex mt-8 items-center gap-4 md:gap-6">
              <div className="bg-gray-800/40 px-4 py-3 rounded-lg flex-1 text-center">
                <h3 className="md:text-3xl text-2xl font-semibold text-white">
                  6<span>+</span>
                </h3>
                <p className="text-xs md:text-sm text-purple-400">Projects</p>
              </div>

              <div className="bg-gray-800/40 px-4 py-3 rounded-lg flex-1 text-center">
                <h3 className="md:text-3xl text-2xl font-semibold text-white">
                  2<span>+</span>
                </h3>
                <p className="text-xs md:text-sm text-purple-400">
                  Years Experience
                </p>
              </div>

              <div className="bg-gray-800/40 px-4 py-3 rounded-lg flex-1 text-center">
                <h3 className="md:text-3xl text-2xl font-semibold text-white">
                  5<span>+</span>
                </h3>
                <p className="text-xs md:text-sm text-purple-400">
                  Certifications
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4 text-gray-300">
              <span className="text-sm">Or reach me at:</span>
              <motion.a
                whileHover={{ scale: 1.15 }}
                href="mailto:adaobilynda1234@gmail.com"
                className="text-2xl text-purple-400 hover:text-purple-300 transition"
                aria-label="Email"
              >
                <AiOutlineMail />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15 }}
                href="https://www.linkedin.com/in/adaobi-okwuosa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-purple-400 hover:text-purple-300 transition"
                aria-label="LinkedIn"
              >
                <AiFillLinkedin />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15 }}
                href="https://github.com/Adaobilynda1234"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-purple-400 hover:text-purple-300 transition"
                aria-label="GitHub"
              >
                <AiFillGithub />
              </motion.a>
            </div>
          </div>

          {/* RIGHT: form */}
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md p-5 md:p-8"
            noValidate
          >
            <p className="text-gray-100 font-bold text-xl mb-4">
              Let's connect!
            </p>

            <div className="mb-3">
              <label htmlFor="name" className="sr-only">
                Your name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name ..."
                name="name"
                value={formData.name}
                onChange={handleChange}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={`${inputBase} ${
                  errors.name
                    ? "border-red-500 focus:border-red-400"
                    : "border-purple-600 focus:border-purple-400"
                }`}
              />
              {errors.name && (
                <p id="name-error" className="text-red-400 text-sm mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="sr-only">
                Your email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email ..."
                name="email"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={`${inputBase} ${
                  errors.email
                    ? "border-red-500 focus:border-red-400"
                    : "border-purple-600 focus:border-purple-400"
                }`}
              />
              {errors.email && (
                <p id="email-error" className="text-red-400 text-sm mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="textarea" className="sr-only">
                Your message
              </label>
              <textarea
                name="textarea"
                id="textarea"
                rows="4"
                placeholder="Your Message ..."
                value={formData.textarea}
                onChange={handleChange}
                aria-invalid={!!errors.textarea}
                aria-describedby={errors.textarea ? "msg-error" : undefined}
                className={`${inputBase} ${
                  errors.textarea
                    ? "border-red-500 focus:border-red-400"
                    : "border-purple-600 focus:border-purple-400"
                }`}
              />
              {errors.textarea && (
                <p id="msg-error" className="text-red-400 text-sm mt-1">
                  {errors.textarea}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 rounded-md text-gray-100 font-semibold text-xl transition ${
                isSubmitting
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-primary-color hover:bg-purple-700"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {submitStatus === "success" && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                role="status"
                className="mt-3 text-center text-green-400 text-sm bg-green-900/20 border border-green-700/40 rounded-md py-2"
              >
                Message sent! I'll get back to you soon.
              </motion.p>
            )}
            {submitStatus === "error" && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                role="alert"
                className="mt-3 text-center text-red-400 text-sm bg-red-900/20 border border-red-700/40 rounded-md py-2"
              >
                Something went wrong. Please try again or email me directly.
              </motion.p>
            )}
          </form>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;