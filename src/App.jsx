function App() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution built with React and Node.js",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      link: "#"
    },
    {
      id: 2,
      title: "WordPress Corporate Site",
      description: "Custom WordPress theme development for a corporate client",
      technologies: ["WordPress", "PHP", "JavaScript", "CSS"],
      link: "#"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Responsive task management application with real-time updates",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      link: "#"
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "PHP", "Express", "REST APIs"] },
    { category: "CMS", items: ["WordPress", "Custom Themes", "Plugin Development"] },
    { category: "Tools", items: ["Git", "Vite", "npm", "VS Code"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header/Navigation */}
      <header className="fixed w-full bg-slate-900/80 backdrop-blur-sm z-50 shadow-lg">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Theodorus</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
              <a href="#skills" className="text-gray-300 hover:text-white transition">Skills</a>
              <a href="#projects" className="text-gray-300 hover:text-white transition">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Junior Fullstack Developer
          </h2>
          <p className="text-xl md:text-2xl text-purple-300 mb-8">
            React, Tailwind CSS & WordPress Specialist
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            View my portfolio of deployed web applications and custom websites. Available for hire.
          </p>
          <div className="flex gap-4 justify-center">
            <a 
              href="#projects" 
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition transform hover:scale-105"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="bg-transparent border-2 border-purple-600 hover:bg-purple-600 text-white font-semibold px-8 py-3 rounded-lg transition transform hover:scale-105"
            >
              Hire Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I'm Theodorus, a passionate Junior Fullstack Developer with expertise in modern web technologies. 
            I specialize in building responsive, user-friendly applications using React and Tailwind CSS, 
            and creating custom WordPress solutions for clients.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            With a strong foundation in both frontend and backend development, I deliver complete web solutions 
            from concept to deployment. I'm always eager to learn new technologies and take on challenging projects.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-purple-400 mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, idx) => (
                    <li key={idx} className="text-gray-300 flex items-center">
                      <span className="text-purple-500 mr-2">▹</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-slate-900/50 rounded-lg overflow-hidden backdrop-blur-sm hover:transform hover:scale-105 transition">
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    className="text-purple-400 hover:text-purple-300 font-semibold inline-flex items-center"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Get In Touch</h2>
          <p className="text-xl text-gray-300 mb-8">
            I'm currently available for hire and open to new opportunities. 
            Let's work together to bring your ideas to life!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="mailto:contact@theodorus.dev" 
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition transform hover:scale-105"
            >
              Email Me
            </a>
            <a 
              href="https://github.com/T-Codings" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 hover:bg-slate-700 text-white font-semibold px-8 py-3 rounded-lg transition transform hover:scale-105"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition transform hover:scale-105"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2026 Theodorus. Built with React & Tailwind CSS. Available for hire.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
