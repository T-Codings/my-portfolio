import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaRocket, FaStar } from 'react-icons/fa'
import AnimatedBackground from './AnimatedBackground'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-gray-900">
      {/* Running Background Objects */}
      <AnimatedBackground />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#6B7D29] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-[#6B7D29] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-[#0A693A] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Profile Card - Left Side */}
          <div className="flex-shrink-0 animate-scale-in">
            <div className="relative group">
              {/* Decorative elements */}
              
              {/* Profile Photo Card */}
              <div className="relative bg-gray-800 rounded-full shadow-2xl p-3 transform group-hover:scale-105 transition-transform duration-300 ring-4 ring-[#0A693A]/50 shadow-[#0A693A]/50">
                <div className="w-96 h-96 md:w-96 md:h-96 rounded-full overflow-hidden bg-gradient-to-br from-[#0A693A] to-[#6B7D29] shadow-xl">
                  <img 
                    src="/src/assets/Pro img.png" 
                    alt="</T-Codings/> - Portfolio" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#0A693A] to-[#6B7D29] text-white px-6 py-2 rounded-full shadow-lg animate-bounce-slow">
                  <span className="font-bold flex items-center gap-2">
                    <FaStar className="text-yellow-300" /> Available for Work
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Card - Right Side */}
          <div className="flex-1 text-center lg:text-left">
            <div className="space-y-6 animate-slide-up">
              {/* Greeting Badge */}
              <div className="inline-block animate-slide-down">
                <span className="bg-gradient-to-r from-[#6B7D29]/40 to-[#6B7D29]/40 text-[#0A693A] px-6 py-2 rounded-full text-sm font-semibold border border-[#0A693A] shadow-sm">
                  👋 Welcome to my portfolio
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text animate-pulse">
                  Theodorus
                </span>
              </h1>

              <h2 className="text-2xl md:text-4xl font-semibold text-gray-300">
                Junior{' '}
                <span className="text-[#0A693A]">Fullstack Developer</span>
              </h2>

              <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
                Passionate about creating beautiful, functional web experiences with{' '}
                <span className="font-semibold text-[#0A693A]">React</span>,{' '}
                <span className="font-semibold text-[#0A693A]">Tailwind CSS</span> &{' '}
                <span className="font-semibold text-[#0A693A]">WordPress</span>
              </p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 py-4">
                {[
                  { name: 'HTML', icon: <FaCode /> },
                  { name: 'CSS', icon: <FaCode /> },
                  { name: 'JavaScript', icon: <FaCode /> },
                  { name: 'React', icon: <FaRocket /> },
                  { name: 'Tailwind CSS', icon: <FaStar /> },
                  { name: 'WordPress', icon: <FaCode /> }
                ].map((tech, index) => (
                  <span
                    key={tech.name}
                    className="group px-5 py-2 bg-gray-800 text-[#0A693A] rounded-full shadow-md font-medium hover:shadow-xl hover:bg-gradient-to-r hover:from-[#6B7D29] hover:to-[#0A693A] hover:text-white transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-[#0A693A]"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="flex items-center gap-2">
                      {tech.icon}
                      {tech.name}
                    </span>
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Link to="/projects" className="btn-primary group">
                  <span className="flex items-center justify-center gap-2">
                    <FaRocket className="group-hover:animate-bounce" />
                    View My Projects
                  </span>
                </Link>
                <Link to="/contact" className="btn-secondary group">
                  <span className="flex items-center justify-center gap-2">
                    <FaEnvelope className="group-hover:animate-bounce" />
                    Get In Touch
                  </span>
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start gap-4 pt-4">
                <a
                  href="https://github.com/T-Codings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-md hover:shadow-xl hover:bg-gradient-to-r hover:from-[#0A693A] hover:to-[#6B7D29] hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-md hover:shadow-xl hover:bg-gradient-to-r hover:from-[#0A693A] hover:to-[#6B7D29] hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a
                  href="mailto:your.email@example.com"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-md hover:shadow-xl hover:bg-gradient-to-r hover:from-[#0A693A] hover:to-[#6B7D29] hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
                  aria-label="Email"
                >
                  <FaEnvelope className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
