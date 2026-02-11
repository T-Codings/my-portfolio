import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaHeart, FaRocket, FaCode } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#0A693A] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#6B7D29] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-[#0A693A] to-[#6B7D29] bg-clip-text text-transparent mb-4">
              Portfolio
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Junior Fullstack Developer passionate about creating beautiful and functional web experiences with modern technologies.
            </p>
            <div className="flex items-center gap-2 text-[#0A693A]">
              <FaRocket className="animate-bounce" />
              <span className="font-semibold">Building the future, one line at a time</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FaCode className="text-[#0A693A]" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#0A693A] transition-all duration-300 flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-[#0A693A] group-hover:w-4 transition-all duration-300"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#0A693A] transition-all duration-300 flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-[#0A693A] group-hover:w-4 transition-all duration-300"></span>
                  About
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-gray-300 hover:text-[#0A693A] transition-all duration-300 flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-[#0A693A] group-hover:w-4 transition-all duration-300"></span>
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-[#0A693A] transition-all duration-300 flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-[#0A693A] group-hover:w-4 transition-all duration-300"></span>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#0A693A] transition-all duration-300 flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-[#0A693A] group-hover:w-4 transition-all duration-300"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
            <p className="text-gray-300 mb-6">Let's build something amazing together!</p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/T-Codings"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-gradient-to-r hover:from-[#0A693A] hover:to-[#6B7D29] transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://linkedin.com/in/ndi-theo-a695b43a8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-gradient-to-r hover:from-[#0A693A] hover:to-[#6B7D29] transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
            
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 flex items-center gap-2">
              Made with <FaHeart className="text-blue-500 animate-pulse" /> by Theodore © {currentYear}
            </p>
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-sm">Powered by</span>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                <span className="text-[#0A693A] font-semibold">React</span>
                <span className="text-gray-400">•</span>
                <span className="text-[#0A693A] font-semibold">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
