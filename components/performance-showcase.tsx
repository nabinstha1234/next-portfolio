"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Zap, Clock, Server } from "lucide-react"

const optimizations = [
  {
    id: 1,
    title: "API Response Time Optimization",
    description: "Reduced API response time by implementing caching and query optimization.",
    before: {
      metric: "850ms",
      detail: "Average response time",
    },
    after: {
      metric: "120ms",
      detail: "85% improvement",
    },
    techStack: ["Redis", "PostgreSQL", "Node.js"],
  },
  {
    id: 2,
    title: "Frontend Load Time Reduction",
    description: "Improved initial page load time through code splitting and lazy loading.",
    before: {
      metric: "4.2s",
      detail: "First contentful paint",
    },
    after: {
      metric: "1.1s",
      detail: "74% faster loading",
    },
    techStack: ["React", "Next.js", "Webpack"],
  },
  {
    id: 3,
    title: "Database Query Optimization",
    description: "Enhanced database performance through indexing and query optimization.",
    before: {
      metric: "1.2s",
      detail: "Query execution time",
    },
    after: {
      metric: "200ms",
      detail: "83% faster queries",
    },
    techStack: ["PostgreSQL", "MongoDB"],
  },
]

const LiveCodingDemo = () => {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)

  const processString = (str: string) => {
    // Simple string reversal with optimization visualization
    setIsProcessing(true)
    setTimeout(() => {
      const reversed = str.split("").reverse().join("")
      setOutput(reversed)
      setIsProcessing(false)
    }, 500)
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to process..."
          className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
        />
        <button onClick={() => processString(input)} disabled={!input || isProcessing} className="btn-primary">
          Process
        </button>
      </div>
      <div className="bg-gray-800 p-4 rounded-md">
        <p className="text-sm text-gray-400 mb-2">Output:</p>
        {isProcessing ? (
          <div className="flex items-center gap-2 text-teal-400">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Processing...
          </div>
        ) : (
          <p className="font-mono text-teal-400">{output || "No output yet"}</p>
        )}
      </div>
    </div>
  )
}

export default function PerformanceShowcase() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Performance <span className="gradient-text">Optimizations</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real-world examples of performance improvements and optimizations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {optimizations.map((opt) => (
            <motion.div
              key={opt.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="card"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-teal-400/20 p-3 rounded-lg">
                  {opt.id === 1 ? (
                    <Zap className="h-6 w-6 text-teal-400" />
                  ) : opt.id === 2 ? (
                    <Clock className="h-6 w-6 text-teal-400" />
                  ) : (
                    <Server className="h-6 w-6 text-teal-400" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{opt.title}</h3>
                  <p className="text-gray-400 mb-4">{opt.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <p className="text-sm text-gray-400 mb-1">Before</p>
                      <p className="text-2xl font-bold text-red-400">{opt.before.metric}</p>
                      <p className="text-sm text-gray-500">{opt.before.detail}</p>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <p className="text-sm text-gray-400 mb-1">After</p>
                      <p className="text-2xl font-bold text-green-400">{opt.after.metric}</p>
                      <p className="text-sm text-gray-500">{opt.after.detail}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {opt.techStack.map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs bg-gray-800 rounded-full text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live Coding Demo */}
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">Live Optimization Demo</h3>
            <p className="text-gray-400">Try out our string processing optimization demo</p>
          </div>

          <LiveCodingDemo />
        </div>
      </div>
    </section>
  )
}

