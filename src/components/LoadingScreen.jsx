import React from 'react'
import { FaCode } from 'react-icons/fa'

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 animate-fade-in overflow-hidden">

      <div className="relative text-center flex flex-col items-center gap-6">
        {/* Logo/Brand Icon */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A693A] to-[#6B7D29] rounded-full blur-xl opacity-50 animate-pulse"></div>
          <div className="relative w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full border-4 border-[#0A693A] shadow-2xl">
            <FaCode className="text-3xl text-[#0A693A] animate-pulse" />
          </div>
        </div>

        {/* Dual Spinner */}
        <div className="relative w-14 h-14">
          <div className="absolute inset-0 border-4 border-[#0A693A] border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-4 border-[#6B7D29] border-b-transparent rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
        </div>
        
        {/* Loading Text with Dots Animation */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-2xl font-bold gradient-text">
            Loading Portfolio
          </h2>
          <div className="flex gap-1">
            <span className="w-2 h-2 bg-[#0A693A] rounded-full animate-bounce"></span>
            <span className="w-2 h-2 bg-[#6B7D29] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
            <span className="w-2 h-2 bg-[#0A693A] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
          </div>
        </div>

       
      </div>
    </div>
  )
}

export default LoadingScreen
