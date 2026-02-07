import React, { useState } from 'react'
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Smith',
      role: 'Senior Developer at Tech Corp',
      image: 'https://ui-avatars.com/api/?name=John+Smith&background=9333EA&color=fff&size=200',
      text: 'Theodore is a quick learner with great attention to detail. His passion for web development and willingness to learn new technologies makes him a valuable asset to any team.',
      rating: 5,
    },
    {
      name: 'Sarah Johnson',
      role: 'Project Manager',
      image: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=A855F7&color=fff&size=200',
      text: 'Working with Theodore was a pleasure. He consistently delivered quality work and showed excellent problem-solving skills. His dedication to creating user-friendly interfaces is commendable.',
      rating: 5,
    },
    {
      name: 'Michael Brown',
      role: 'Lead Instructor at Code Academy',
      image: 'https://ui-avatars.com/api/?name=Michael+Brown&background=C084FC&color=fff&size=200',
      text: 'Theodore was one of my best students. He grasped complex concepts quickly and always went the extra mile to perfect his projects. His enthusiasm for learning is truly inspiring.',
      rating: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            What People <span className="gradient-text">Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Feedback from mentors, instructors, and collaborators
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 relative animate-scale-in border border-blue-900">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 text-6xl text-cyan-200 dark:text-blue-900 opacity-50">
              <FaQuoteLeft />
            </div>

            {/* Content */}
            <div className="relative">
              {/* Profile */}
              <div className="flex flex-col items-center mb-8">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 ring-4 ring-cyan-800 shadow-xl">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white">{current.name}</h3>
                <p className="text-cyan-400 font-medium">{current.role}</p>
                
                {/* Rating */}
                <div className="flex gap-1 mt-2">
                  {[...Array(current.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500 text-lg" />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center italic mb-8">
                "{current.text}"
              </p>

              {/* Navigation Buttons */}
              <div className="flex justify-center gap-4">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                  aria-label="Previous testimonial"
                >
                  <FaChevronLeft />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                  aria-label="Next testimonial"
                >
                  <FaChevronRight />
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-cyan-600 w-8'
                        : 'bg-gray-600 hover:bg-cyan-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
