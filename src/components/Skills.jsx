import React from 'react'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaWordpress, FaGitAlt } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import AnimatedBackground from './AnimatedBackground'

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 />, color: 'from-orange-500 to-red-500', level: 90 },
    { name: 'CSS3', icon: <FaCss3Alt />, color: 'from-blue-500 to-cyan-500', level: 85 },
    { name: 'JavaScript', icon: <FaJsSquare />, color: 'from-yellow-400 to-yellow-600', level: 70 },
    { name: 'React', icon: <FaReact />, color: 'from-cyan-400 to-blue-500', level: 75 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'from-teal-400 to-cyan-600', level: 70 },
    { name: 'WordPress', icon: <FaWordpress />, color: 'from-blue-600 to-indigo-700', level: 70 },
    { name: 'Git', icon: <FaGitAlt />, color: 'from-red-500 to-orange-600', level: 75 },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Running Background Objects */}
      <AnimatedBackground />
      
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#6B7D29] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#6B7D29] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Tools and technologies I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group bg-gray-800 p-8 rounded-2xl shadow-xl border border-[#6B7D29] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className={`text-6xl mr-4 bg-gradient-to-r ${skill.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                  {skill.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{skill.name}</h3>
                  <p className="text-sm text-[#0A693A] font-semibold">Proficiency: {skill.level}%</p>
                </div>
              </div>
              <div className="relative w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 shadow-lg`}
                  style={{ width: `${skill.level}%` }}
                >
                  <div className="h-full w-full bg-white/20 animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center animate-slide-up">
          <h3 className="text-3xl font-bold mb-8">
            Other <span className="gradient-text">Competencies</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Responsive Design',
              'REST APIs',
              'Version Control',
              'Debugging',
              'Problem Solving',
              'Team Collaboration',
            ].map((skill, index) => (
              <span
                key={skill}
                className="group px-6 py-3 bg-gradient-to-r from-[#0A693A] to-[#6B7D29] text-white rounded-full shadow-lg font-semibold hover:shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="flex items-center gap-2">
                  {skill}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
