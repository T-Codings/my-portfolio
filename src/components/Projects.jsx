import React from 'react'
import { FaGithub, FaExternalLinkAlt, FaClock, FaCheckCircle, FaStar } from 'react-icons/fa'
import AnimatedBackground from './AnimatedBackground'
import proImg from '../assets/Pro img.png'
import { Notebook } from 'lucide-react'
import chatImg from '../assets/Mingcutechat.png'
import mathewsImg from '../assets/mathews.png'
import NoteBook from  'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'NoteBook Application',
      description: 'A modern web application built with React and Tailwind CSS. Features include responsive design, user authentication, and dynamic content rendering.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
      liveLink: 'https://gorgeous-clafoutis-5ade19.netlify.app/',
      githubLink: 'https://github.com/yourusername/project1',
      status: 'deployed',
      image: null, // Will use Lucide icon
    },
    {
      title: 'Chat Application',
      description: 'An interactive web application showcasing modern frontend development practices. Includes state management and API integration.',
      technologies: ['React', 'CSS', 'REST API'],
      liveLink: 'https://creative-kitsune-24a681.netlify.app/',
      githubLink: 'https://github.com/yourusername/project2',
      status: 'deployed',
      image: chatImg,
    },
    {
      title: 'Mathews Foundation',
      description: 'A professional WordPress website for Mathews Foundation Nursery and Primary School, featuring custom design, responsive layout, and content management system for the institution.',
      technologies: ['WordPress', 'PHP', 'CSS', 'MySQL'],
      liveLink: 'https://mathewsfoundation.com/',
      githubLink: 'https://github.com/yourusername/mathews-foundation-theme',
      status: 'deployed',
      image: mathewsImg,
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Running Background Objects */}
      <AnimatedBackground />
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#6B7D29] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#6B7D29] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work and applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800/30 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/10 hover:border-[#0A693A]/50 animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-56 bg-gradient-to-br from-[#0A693A] to-[#6B7D29] flex items-center justify-center">
                {project.title === 'NoteBook Application' ? (
                  <Notebook size={96} color="#fff" strokeWidth={1.5} className="mx-auto my-auto drop-shadow-lg" />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {project.status === 'in-progress' && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg animate-bounce-slow">
                    <FaClock /> In Progress
                  </div>
                )}
                {project.status === 'deployed' && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-green-400 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                    <FaCheckCircle /> Live
                  </div>
                )}
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaStar className="text-white text-5xl animate-pulse" />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 bg-gray-900/50 backdrop-blur-md">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#0A693A] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => {
                    return (
                      <span
                        key={techIndex}

                        className="px-3 py-1 bg-gradient-to-r from-[#6B7D29]/40 to-[#6B7D29]/40 text-gray-200 text-sm rounded-full font-semibold border border-[#0A693A]"
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex-1 relative overflow-hidden"
                    >
                      <div className="absolute rounded-md inset-0 bg-gradient-to-r from-[#0A693A] via-[#6B7D29] to-[#0A693A] opacity-100 group-hover/btn:opacity-90 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                      <div className="relative flex items-center justify-center gap-2 px-4 py-3 text-white font-bold shadow-lg group-hover/btn:shadow-2xl transform group-hover/btn:-translate-y-1 transition-all duration-300">
                        <FaExternalLinkAlt className="text-sm group-hover/btn:rotate-12 transition-transform duration-300" />
                        <span className="bg-clip-text">Live Demo</span>
                      </div>
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/5 backdrop-blur-sm text-white rounded-xl rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1 border border-white/10"
                    >
                      <FaGithub /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-16 text-center animate-slide-up">
          <div className="inline-block bg-gray-800/30 backdrop-blur-lg px-8 py-4 rounded-2xl border border-white/10 shadow-lg">
            <p className="color-gray-100 font-semibold text-lg flex items-center gap-2">
              <FaStar className="text-yellow-500" />
              More exciting projects coming soon as I continue to learn and build!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
