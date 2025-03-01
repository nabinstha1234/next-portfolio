"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Award, Brain, Target, Trophy } from "lucide-react"
import type { LeetCodeStats } from "@/lib/leetcode"
import { Chart } from "chart.js/auto"

export default function LeetCodeActivity({ stats }: { stats: LeetCodeStats }) {
  const chartRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!chartRef.current) return

    const ctx = chartRef.current.getContext("2d")
    if (!ctx) return

    const total = stats.totalQuestions
    const solved = stats.totalSolved
    const easy = stats.easySolved
    const medium = stats.mediumSolved
    const hard = stats.hardSolved

    const chart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Easy", "Medium", "Hard", "Unsolved"],
        datasets: [
          {
            data: [easy, medium, hard, total - solved],
            backgroundColor: ["#00b8a3", "#ffc01e", "#ff375f", "#2d2d2d"],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              color: "#9ca3af",
              padding: 20,
              font: {
                size: 12,
              },
            },
          },
        },
      },
    })

    return () => chart.destroy()
  }, [stats])

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            LeetCode <span className="gradient-text">Progress</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tracking my problem-solving journey and algorithmic skills.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Stats Overview */}
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-xl font-semibold mb-6">Problem Solving Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="h-5 w-5 text-teal-400" />
                    <span className="font-medium">Total Solved</span>
                  </div>
                  <p className="text-2xl font-bold text-teal-400">{stats.totalSolved}</p>
                  <p className="text-sm text-gray-400">out of {stats.totalQuestions}</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="h-5 w-5 text-teal-400" />
                    <span className="font-medium">Acceptance Rate</span>
                  </div>
                  <p className="text-2xl font-bold text-teal-400">{stats.acceptanceRate}%</p>
                  <p className="text-sm text-gray-400">success rate</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Brain className="h-5 w-5 text-teal-400" />
                    <span className="font-medium">Ranking</span>
                  </div>
                  <p className="text-2xl font-bold text-teal-400">#{stats.ranking}</p>
                  <p className="text-sm text-gray-400">global position</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-5 w-5 text-teal-400" />
                    <span className="font-medium">Reputation</span>
                  </div>
                  <p className="text-2xl font-bold text-teal-400">{stats.reputation}</p>
                  <p className="text-sm text-gray-400">contribution points</p>
                </div>
              </div>
            </div>

            {/* Recent Submissions */}
            <div className="card">
              <h3 className="text-xl font-semibold mb-6">Recent Submissions</h3>
              <div className="space-y-4">
                {stats.submissions.map((submission, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg"
                  >
                    <div>
                      <h4 className="font-medium text-gray-200">{submission.title}</h4>
                      <p className="text-sm text-gray-400">{submission.timestamp}</p>
                    </div>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        submission.difficulty === "Easy"
                          ? "bg-green-400/10 text-green-400"
                          : submission.difficulty === "Medium"
                            ? "bg-yellow-400/10 text-yellow-400"
                            : "bg-red-400/10 text-red-400"
                      }`}
                    >
                      {submission.difficulty}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Problem Distribution Chart */}
          <div className="card">
            <h3 className="text-xl font-semibold mb-6">Problem Distribution</h3>
            <div className="relative h-[400px]">
              <canvas ref={chartRef}></canvas>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <p className="text-2xl font-bold text-[#00b8a3]">{stats.easySolved}</p>
                <p className="text-sm text-gray-400">Easy</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#ffc01e]">{stats.mediumSolved}</p>
                <p className="text-sm text-gray-400">Medium</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#ff375f]">{stats.hardSolved}</p>
                <p className="text-sm text-gray-400">Hard</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

