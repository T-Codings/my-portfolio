import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa';
import Log from '../assets/log.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="fixed w-full bg-[#0A0F0D]/95 backdrop-blur-md shadow-lg z-50 border-b border-[#6B7D29]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center hover:scale-105 transition-transform duration-300">
            <img src={Log} alt="T-Codings log" className="w-[160px] h-[140px] mt-2 mb-2" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-semibold text-lg transition-all duration-300 relative group ${
                  isActive(item.path)
                    ? 'text-[#0D8347]'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#0D8347] to-[#D4AF37] transition-all duration-300 ${
                  isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button onClick={toggleMenu} className="text-[#0D8347] text-2xl hover:scale-110 transition-transform duration-300 hover:text-[#D4AF37]">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1A1F1D]/98 backdrop-blur-md border-t border-[#6B7D29]/30 animate-slide-down shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={toggleMenu}
                className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-white bg-gradient-to-r from-[#0A693A] to-[#6B7D29] font-semibold border-l-4 border-[#D4AF37] shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-[#6B7D29]/20 hover:border-l-4 hover:border-[#0D8347]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
