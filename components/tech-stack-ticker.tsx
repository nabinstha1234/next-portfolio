"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface TechTag {
  name: string
  status: "learning" | "experienced" | "exploring"
  color: string
}

const techStack: TechTag[] = [
  { name: "React", status: "experienced", color: "bg-blue-400" },
  { name: "Node.js", status: "experienced", color: "bg-green-400" },
  { name: "TypeScript", status: "experienced", color: "bg-blue-500" },
  { name: "Next.js", status: "experienced", color: "bg-gray-400" },
  { name: "AWS", status: "experienced", color: "bg-yellow-500" },
  { name: "Docker", status: "experienced", color: "bg-blue-600" },
  { name: "Rust", status: "learning", color: "bg-orange-500" },
  { name: "WebAssembly", status: "learning", color: "bg-purple-500" },
  { name: "tRPC", status: "learning", color: "bg-pink-500" },
  { name: "GraphQL", status: "experienced", color: "bg-pink-600" },
  { name: "Kubernetes", status: "exploring", color: "bg-blue-500" },
  { name: "Machine Learning", status: "exploring", color: "bg-green-500" },
]

export default function TechStackTicker() {
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scrollWidth = container.scrollWidth
    const viewportWidth = container.offsetWidth

    if (scrollWidth > viewportWidth) {
      container.style.setProperty("--scroll-width", `${scrollWidth}px`)
    }
  }, [])

  return (
    <section className="section-padding bg-gray-950">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tech Stack & <span className="gradient-text">Learning</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies I work with and what I'm currently learning.
          </p>
        </div>

        <div className="card overflow-hidden">
          <div
            ref={containerRef}
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className={`flex gap-4 py-4 ${isHovered ? "pause-animation" : "animate-scroll"}`}>
              {[...techStack, ...techStack].map((tech, index) => (
                <motion.div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 border border-gray-700">
                    <span className={`w-2 h-2 rounded-full ${tech.color}`} />
                    <span className="text-sm font-medium">{tech.name}</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        tech.status === "learning"
                          ? "bg-yellow-400/10 text-yellow-400"
                          : tech.status === "exploring"
                            ? "bg-purple-400/10 text-purple-400"
                            : "bg-green-400/10 text-green-400"
                      }`}
                    >
                      {tech.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="card">
            <h3 className="text-lg font-semibold mb-4 text-green-400">Experienced</h3>
            <div className="flex flex-wrap gap-2">
              {techStack
                .filter((tech) => tech.status === "experienced")
                .map((tech) => (
                  <span key={tech.name} className="px-3 py-1 text-sm bg-gray-800 rounded-full text-gray-300">
                    {tech.name}
                  </span>
                ))}
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Learning</h3>
            <div className="flex flex-wrap gap-2">
              {techStack
                .filter((tech) => tech.status === "learning")
                .map((tech) => (
                  <span key={tech.name} className="px-3 py-1 text-sm bg-gray-800 rounded-full text-gray-300">
                    {tech.name}
                  </span>
                ))}
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Exploring</h3>
            <div className="flex flex-wrap gap-2">
              {techStack
                .filter((tech) => tech.status === "exploring")
                .map((tech) => (
                  <span key={tech.name} className="px-3 py-1 text-sm bg-gray-800 rounded-full text-gray-300">
                    {tech.name}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

