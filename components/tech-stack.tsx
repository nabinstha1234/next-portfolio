"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const categories = [
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },
  { id: "database", name: "Databases" },
  { id: "devops", name: "Cloud & DevOps" },
  { id: "other", name: "Other Skills" },
]

const skills = [
  { id: 1, name: "React", category: "frontend", level: 95 },
  { id: 2, name: "Next.js", category: "frontend", level: 90 },
  { id: 3, name: "Redux", category: "frontend", level: 88 },
  { id: 4, name: "TypeScript", category: "frontend", level: 92 },
  { id: 5, name: "Babylon.js", category: "frontend", level: 80 },
  { id: 6, name: "Ant Design", category: "frontend", level: 85 },
  { id: 7, name: "Material-UI", category: "frontend", level: 88 },
  { id: 8, name: "Firebase", category: "frontend", level: 82 },
  { id: 9, name: "Google Maps API", category: "frontend", level: 78 },

  { id: 10, name: "Node.js", category: "backend", level: 92 },
  { id: 11, name: "Express", category: "backend", level: 90 },
  { id: 12, name: "Gin (Golang)", category: "backend", level: 75 },
  { id: 13, name: "GraphQL", category: "backend", level: 85 },
  { id: 14, name: "REST API", category: "backend", level: 95 },

  { id: 15, name: "PostgreSQL", category: "database", level: 88 },
  { id: 16, name: "MySQL", category: "database", level: 85 },
  { id: 17, name: "MongoDB", category: "database", level: 82 },
  { id: 18, name: "DynamoDB", category: "database", level: 78 },

  { id: 19, name: "AWS Amplify", category: "devops", level: 85 },
  { id: 20, name: "AWS AppSync", category: "devops", level: 82 },
  { id: 21, name: "AWS EC2", category: "devops", level: 80 },
  { id: 22, name: "AWS S3", category: "devops", level: 88 },
  { id: 23, name: "AWS Cognito", category: "devops", level: 85 },
  { id: 24, name: "Docker", category: "devops", level: 80 },
  { id: 25, name: "Kubernetes", category: "devops", level: 75 },
  { id: 26, name: "CI/CD", category: "devops", level: 82 },

  { id: 27, name: "Clean Architecture", category: "other", level: 85 },
  { id: 28, name: "Microservices", category: "other", level: 82 },
  { id: 29, name: "Monorepo", category: "other", level: 78 },
  { id: 30, name: "Serverless", category: "other", level: 88 },
  { id: 31, name: "Jest", category: "other", level: 80 },
  { id: 32, name: "Cypress", category: "other", level: 78 },
  { id: 33, name: "React Testing Library", category: "other", level: 82 },
]

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("frontend")

  const filteredSkills = skills.filter((skill) => skill.category === activeCategory)

  return (
    <section id="skills" className="bg-gray-950 section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building scalable, high-performance applications.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-teal-400/20 text-teal-400 border border-teal-400/50"
                  : "bg-gray-900 text-gray-400 border border-gray-800 hover:border-gray-700"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="card group hover:bg-gray-800/50 transition-all"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-4 group-hover:text-teal-400 transition-colors">{skill.name}</h3>

                <div className="mt-auto">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-400">Proficiency</span>
                    <span className="text-sm font-medium text-teal-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <motion.div
                      className="bg-gradient-to-r from-teal-400 to-teal-500 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                    ></motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

