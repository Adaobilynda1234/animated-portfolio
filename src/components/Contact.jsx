import React, { useState } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
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

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const messageError = validateMessage(formData.textarea);

    const newErrors = {
      name: nameError,
      email: emailError,
      textarea: messageError,
    };

    setErrors(newErrors);

    // Check if there are any errors
    if (nameError || emailError || messageError) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to getform.io
      const response = await fetch("https://getform.io/f/adrrjmxa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Reset form on success
        setFormData({
          name: "",
          email: "",
          textarea: "",
        });
        alert("Message sent successfully!");
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
          <div>
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                About <span>Me</span>
              </h3>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                I am passionate about building excellent software that improves
                the lives of those around me. I specialize in creating
                AI-powered softwares for clients ranging from individuals and
                small-businesses all the way to large enterprise corporations.
                What would you do if you had a software expert available at your
                fingertips?
              </p>
            </div>

            <div className="flex mt-10 items-center gap-7">
              <div className="bg-gray-800/40 p-4 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  7<span>+</span>
                </h3>
                <p className="text-xs md:text-base text-purple-400">
                  <span>Projects</span>
                </p>
              </div>

              <div className="bg-gray-800/40 p-5 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  1<span>+</span>
                </h3>
                <p className="text-xs md:text-base text-purple-400">
                  <span>years of experience</span>
                </p>
              </div>

              <div className="bg-gray-800/40 p-5 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  5<span>+</span>
                </h3>
                <p className="text-xs md:text-base text-purple-400">
                  <span>happy clients</span>
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="max-w-6xl p-5 md:p-12"
            id="form"
          >
            <p className="text-gray-100 font-bold text-xl mb-2">
              Let´s connect!
            </p>

            <div className="mb-2">
              <input
                type="text"
                id="name"
                placeholder="Your Name ..."
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full rounded-md border py-2 pl-2 pr-4 text-white ${
                  errors.name ? "border-red-500" : "border-purple-600"
                }`}
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div className="mb-2">
              <input
                type="email"
                id="email"
                placeholder="Your Email ..."
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full rounded-md border py-2 pl-2 pr-4 text-white ${
                  errors.email ? "border-red-500" : "border-purple-600"
                }`}
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div className="mb-2">
              <textarea
                name="textarea"
                id="textarea"
                cols="30"
                rows="4"
                placeholder="Your Message ..."
                value={formData.textarea}
                onChange={handleChange}
                className={`w-full rounded-md border py-2 pl-2 pr-4 text-white ${
                  errors.textarea ? "border-red-500" : "border-purple-600"
                }`}
              />
              {errors.textarea && (
                <p className="text-red-400 text-sm mt-1">{errors.textarea}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 rounded-md text-gray-100 font-semibold text-xl ${
                isSubmitting
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-primary-color hover:bg-gray-700"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
