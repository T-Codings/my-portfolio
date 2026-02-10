import React from 'react'
import { Star, Code, Braces, Brackets, Component } from 'lucide-react'

const AnimatedBackground = () => {
  const codeIcons = [
    { component: Star, color: '#0A693A' },
    { component: Code, color: '#6B7D29' },
    { component: Braces, color: '#CD291F' },
    { component: Brackets, color: '#0A693A' },
    { component: Component, color: '#B70E0C' },
    { component: Code, color: '#6B7D29' },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {codeIcons.map((item, index) => {
        const IconComponent = item.component
        return (
          <div
            key={index}
            className={`running-object running-object-${index + 1}`}
            style={{
              fontSize: index % 2 === 0 ? '2.5rem' : '2rem',
            }}
          >
            <IconComponent 
              size={index % 2 === 0 ? 30 : 22} 
              color={item.color}
              strokeWidth={2.5}
            />
          </div>
        )
      })}
    </div>
  )
}

export default AnimatedBackground
