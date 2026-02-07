import React from 'react'
import { FaCode, FaLaptopCode, FaRocket, FaHeart, FaLightbulb, FaUsers } from 'react-icons/fa'
import AnimatedBackground from './AnimatedBackground'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Running Background Objects */}
      <AnimatedBackground />
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#6B7D29] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6B7D29] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Passionate about building modern web experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Description */}
          <div className="space-y-6 animate-slide-up">
            <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-[#6B7D29] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#0A693A] to-[#6B7D29] rounded-xl flex items-center justify-center">
                  <FaHeart className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-white">My Journey</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a recently graduated <span className="font-semibold text-[#0A693A]">Fullstack Developer</span> with 
                a strong focus on frontend technologies. I love creating responsive, user-friendly web applications 
                that provide excellent user experiences.
              </p>
            </div>

            <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-[#6B7D29] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#0A693A] to-[#6B7D29] rounded-xl flex items-center justify-center">
                  <FaLightbulb className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-white">My Skills</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey in web development has equipped me with a solid foundation in 
                <span className="font-semibold text-[#0A693A]"> React, JavaScript, HTML, CSS, and Tailwind CSS</span>. 
                I'm also experienced with <span className="font-semibold text-[#0A693A]">WordPress</span> for content 
                management solutions.
              </p>
            </div>

            <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-[#6B7D29] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#0A693A] to-[#6B7D29] rounded-xl flex items-center justify-center">
                  <FaRocket className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-white">My Goal</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                While I'm at the beginning of my professional career, I'm eager to learn, grow, and 
                contribute to meaningful projects. I'm actively seeking opportunities to apply my skills 
                and continue developing as a developer.
              </p>
            </div>
          </div>

          {/* Right Side - Highlights */}
          <div className="space-y-6 animate-slide-up">
            <div className="group bg-gradient-to-br from-[#0A693A] to-[#6B7D29] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
              <div className="text-5xl text-white mb-4 group-hover:animate-bounce">
                <FaCode />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Clean Code</h3>
              <p className="text-green-50">
                Writing maintainable, scalable, and well-documented code following best practices.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-[#6B7D29] to-[#0A693A] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
              <div className="text-5xl text-white mb-4 group-hover:animate-bounce">
                <FaLaptopCode />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Responsive Design</h3>
              <p className="text-green-50">
                Creating mobile-first, responsive designs that work seamlessly across all devices.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-[#0A693A] to-[#6B7D29] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
              <div className="text-5xl text-white mb-4 group-hover:animate-bounce">
                <FaUsers />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Fast Learner</h3>
              <p className="text-green-50">
                Quick to adapt to new technologies and frameworks, always eager to expand my skill set.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
