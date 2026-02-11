import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaRocket,
  FaStar,
} from "react-icons/fa";
import AnimatedBackground from "./AnimatedBackground";
import profileImg from "../assets/Pro img.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-gray-900 overflow-hidden pt-20 sm:pt-24 mt-4"
    >
      {/* Running Background Objects */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <AnimatedBackground />
      </div>

      {/* Background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-6 sm:top-20 sm:left-10 w-56 h-56 sm:w-72 sm:h-72 bg-[#6B7D29] rounded-full mix-blend-multiply blur-xl opacity-30 animate-pulse-slow" />
        <div className="absolute top-28 right-6 sm:top-40 sm:right-10 w-56 h-56 sm:w-72 sm:h-72 bg-[#6B7D29] rounded-full mix-blend-multiply blur-xl opacity-30 animate-pulse-slow animation-delay-2000" />
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-56 h-56 sm:w-72 sm:h-72 bg-[#0A693A] rounded-full mix-blend-multiply blur-xl opacity-30 animate-pulse-slow animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center">
          <div className="w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Profile - Left */}
            <div className="flex-shrink-0 animate-scale-in">
              <div className="relative group">
                <div className="relative bg-gray-800 rounded-full shadow-2xl p-2 sm:p-3 transform group-hover:scale-105 transition-transform duration-300 ring-4 ring-[#0A693A]/50 shadow-[#0A693A]/50">
                  {/* ✅ Responsive image size */}
                  <div className="w-52 h-52 xs:w-60 xs:h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden bg-gradient-to-br from-[#0A693A] to-[#6B7D29] shadow-xl">
                    <img
                      src={profileImg}
                      alt="</T-Codings/> - Portfolio"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Badge */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#0A693A] to-[#6B7D29] text-white px-4 sm:px-6 py-2 rounded-full shadow-lg animate-bounce-slow whitespace-nowrap">
                    <span className="font-bold flex items-center gap-2 text-sm sm:text-base">
                      <FaStar className="text-yellow-300" /> Available for Work
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content - Right */}
            <div className="flex-1 text-center lg:text-left">
              <div className="space-y-5 sm:space-y-6 animate-slide-up">
                <div className="inline-block animate-slide-down">
                  <span className="bg-gradient-to-r from-[#6B7D29]/40 to-[#6B7D29]/40 text-[#0A693A] px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold border border-[#0A693A] shadow-sm">
                    Welcome to my portfolio
                  </span>
                </div>

                {/* ✅ Responsive headings */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Hi, I&apos;m{" "}
                  <span className="gradient-text animate-pulse">Theodorus</span>
                </h1>

                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300">
                  Junior{" "}
                  <span className="text-[#0A693A]">Fullstack Developer</span>
                </h2>

                <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                  Passionate about creating beautiful, functional web experiences
                  with{" "}
                  <span className="font-semibold text-[#0A693A]">React</span>,{" "}
                  <span className="font-semibold text-[#0A693A]">
                    Tailwind CSS
                  </span>{" "}
                  &{" "}
                  <span className="font-semibold text-[#0A693A]">WordPress</span>
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 py-3 sm:py-4">
                  {[
                    { name: "HTML", icon: <FaCode /> },
                    { name: "CSS", icon: <FaCode /> },
                    { name: "JavaScript", icon: <FaCode /> },
                    { name: "React", icon: <FaRocket /> },
                    { name: "Tailwind CSS", icon: <FaStar /> },
                    { name: "WordPress", icon: <FaCode /> },
                  ].map((tech, index) => (
                    <span
                      key={tech.name}
                      className="group px-4 sm:px-5 py-2 bg-gray-800 text-[#0A693A] rounded-full shadow-md font-medium hover:shadow-xl hover:bg-gradient-to-r hover:from-[#6B7D29] hover:to-[#0A693A] hover:text-white transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-[#0A693A] text-xs sm:text-sm"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="flex items-center gap-2">
                        {tech.icon}
                        {tech.name}
                      </span>
                    </span>
                  ))}
                </div>

                {/* ✅ Buttons stack on mobile */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2 sm:pt-4">
                  <Link to="/projects" className="btn-primary group w-full sm:w-auto">
                    <span className="flex items-center justify-center gap-2">
                      <FaRocket className="group-hover:animate-bounce" />
                      View My Projects
                    </span>
                  </Link>
                  <Link to="/contact" className="btn-secondary group w-full sm:w-auto">
                    <span className="flex items-center justify-center gap-2">
                      <FaEnvelope className="group-hover:animate-bounce" />
                      Get In Touch
                    </span>
                  </Link>
                </div>

                {/* Social links */}
                <div className="flex justify-center lg:justify-start gap-3 sm:gap-4 pt-2 sm:pt-4">
                  <a
                    href="https://github.com/T-Codings"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-md hover:shadow-xl hover:bg-gradient-to-r hover:from-[#0A693A] hover:to-[#6B7D29] hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
                    aria-label="GitHub"
                  >
                    <FaGithub className="text-lg sm:text-xl" />
                  </a>

                  <a
                    href="https://linkedin.com/in/ndi-theo-a695b43a8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-md hover:shadow-xl hover:bg-gradient-to-r hover:from-[#0A693A] hover:to-[#6B7D29] hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="text-lg sm:text-xl" />
                  </a>

                  <a
                    href="mailto:tcodings1111@gmail.com"
                    className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-md hover:shadow-xl hover:bg-gradient-to-r hover:from-[#0A693A] hover:to-[#6B7D29] hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
                    aria-label="Email"
                  >
                    <FaEnvelope className="text-lg sm:text-xl" />
                  </a>
                </div>
              </div>
            </div>
            {/* end content */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
