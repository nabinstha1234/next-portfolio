"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Takahashi Yuki",
    role: "CTO at Greener Co., Ltd.",
    content:
      "Nabin has been an exceptional addition to our team. His expertise in serverless architecture and TypeScript has significantly improved our development process. His ability to optimize performance while maintaining code quality is remarkable.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Lead Developer at WesionaryTeam",
    content:
      "Working with Nabin was a pleasure. His transition of our application from React.js to Next.js resulted in significant performance improvements. He has a keen eye for detail and always delivers high-quality work.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Rajesh Sharma",
    role: "Project Manager at Gurzu Inc.",
    content:
      "Nabin's mentorship of our frontend team was invaluable. He not only improved our development efficiency but also raised the overall quality of our codebase. His technical skills and leadership abilities make him a valuable asset to any team.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-gray-950 section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            What colleagues and clients say about working with me.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial cards */}
          <div className="overflow-hidden relative">
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="w-full flex-shrink-0"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: currentIndex === index ? 1 : 0,
                    x: `${(index - currentIndex) * 100}%`,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 md:p-10 relative">
                    <Quote className="absolute top-6 left-6 h-8 w-8 text-teal-400/20" />

                    <div className="text-center">
                      <p className="text-gray-300 text-lg md:text-xl mb-8 relative z-10">"{testimonial.content}"</p>

                      <div className="flex items-center justify-center">
                        <img
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full border-2 border-teal-400"
                        />
                        <div className="ml-4 text-left">
                          <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                          <p className="text-gray-400">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === index ? "bg-teal-400 scale-125" : "bg-gray-700"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

