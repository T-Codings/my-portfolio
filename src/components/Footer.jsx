import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaHeart, FaRocket, FaCode } from "react-icons/fa";

const QUICK_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gray-900 text-white py-12 sm:py-16">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-[#0A693A] rounded-full mix-blend-multiply blur-3xl opacity-10 animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-[#6B7D29] rounded-full mix-blend-multiply blur-3xl opacity-10 animate-pulse-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 mb-10 sm:mb-12">
          {/* About */}
          <section className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#0A693A] to-[#6B7D29] bg-clip-text text-transparent">
              Portfolio
            </h3>

            <p className="text-gray-300 leading-relaxed text-sm sm:text-base max-w-md">
              Junior Fullstack Developer passionate about creating beautiful and
              functional web experiences with modern technologies.
            </p>

            <div className="flex items-center gap-2 text-[#0A693A]">
              <FaRocket className="animate-bounce" />
              <span className="font-semibold text-sm sm:text-base">
                Building the future, one line at a time
              </span>
            </div>
          </section>

          {/* Quick Links */}
          <nav className="sm:ml-16">
            <h3 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6 flex items-center gap-2">
              <FaCode className="text-[#0A693A]" />
              Quick Links
            </h3>

            <ul className="space-y-3">
              {QUICK_LINKS.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-gray-300 hover:text-[#0A693A] transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-[#0A693A] group-hover:w-4 transition-all duration-300" />
                    <span className="text-sm sm:text-base">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <section className="w-full flex flex-col items-center justify-center text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              Connect With Me
            </h3>

            <p className="text-gray-300 mb-5 sm:mb-6 text-sm sm:text-base">
              Let&apos;s build something amazing together!
            </p>

            {/* Column on mobile, row on sm+ */}
            <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href="https://github.com/T-Codings"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-gradient-to-r hover:from-[#0A693A] hover:to-[#6B7D29] transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                aria-label="GitHub"
              >
                <FaGithub className="text-lg sm:text-xl" />
              </a>

              <a
                href="https://linkedin.com/in/ndi-theo-a695b43a8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-gradient-to-r hover:from-[#0A693A] hover:to-[#6B7D29] transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-lg sm:text-xl" />
              </a>
            </div>
          </section>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 sm:pt-8">
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
            <p className="text-gray-300 flex items-center gap-2 text-sm sm:text-base text-center md:text-left">
              Made with <FaHeart className="text-blue-500 animate-pulse" /> by
              Theodore © {currentYear}
            </p>

            <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:justify-end md:gap-3">
              <span className="text-gray-400 text-xs sm:text-sm">
                Powered by
              </span>

              <div className="flex flex-wrap items-center justify-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">
                <span className="text-[#0A693A] font-semibold">React</span>
                <span className="text-gray-400">•</span>
                <span className="text-[#0A693A] font-semibold">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
