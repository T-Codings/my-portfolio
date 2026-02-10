import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import Landing from './pages/Landing'
import AboutPage from './pages/AboutPage'
import SkillsPage from './pages/SkillsPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import AdminDashboard from './pages/AdminDashboard'
import { trackVisitor } from './utils/visitorTracking'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    })
    
    // Track visitor on initial load
    trackVisitor()

    // Set loading complete after 2.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  // Show only loading screen while loading
  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-green-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
