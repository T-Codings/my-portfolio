import React, { useState, useEffect } from 'react'

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 6000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gray-900 animate-fade-in">
      <div className="text-center flex flex-col items-center gap-4">
        {/* Simple Spinner */}
        <div className="w-12 h-12 border-4 border-[#0A693A] border-t-transparent rounded-full animate-spin"></div>
        
        {/* Loading Text */}
        <h2 className="text-2xl font-semibold text-white">
          Loading Portfolio...
        </h2>
      </div>
    </div>
  )
}

export default LoadingScreen
