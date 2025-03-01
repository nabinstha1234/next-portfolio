"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Star, GitFork, ExternalLink, AlertCircle } from "lucide-react"
import type { defaultGitHubData } from "@/lib/github"

type GitHubData = typeof defaultGitHubData

interface ContributionDay {
  contributionCount: number
  date: string
}

const ContributionCell = ({ count }: { count: number }) => {
  const getColor = (count: number) => {
    if (count === 0) return "bg-gray-800"
    if (count <= 3) return "bg-teal-900"
    if (count <= 6) return "bg-teal-700"
    if (count <= 9) return "bg-teal-500"
    return "bg-teal-400"
  }

  return (
    <div
      className={`w-3 h-3 rounded-sm ${getColor(count)} transition-colors duration-200 hover:opacity-80`}
      title={`${count} contributions`}
    />
  )
}

export default function GitHubActivity({ initialData }: { initialData: GitHubData }) {
  const [data, setData] = useState<GitHubData>(initialData)
  const hasNoData = data.user.pinnedItems.nodes.length === 0

  return (
    <section className="section-padding bg-gray-950">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            GitHub <span className="gradient-text">Activity</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">My open source contributions and featured projects.</p>
        </div>

        {hasNoData ? (
          <div className="card text-center py-12">
            <AlertCircle className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">GitHub Data Unavailable</h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Unable to fetch GitHub data. This could be due to missing credentials or API limitations. Please check
              back later.
            </p>
          </div>
        ) : (
          <>
            {/* Contribution Graph */}
            <div className="card mb-12 overflow-x-auto">
              <h3 className="text-xl font-semibold mb-6">Contribution Activity</h3>
              <div className="min-w-[800px]">
                <div className="grid grid-cols-52 gap-1">
                  {data.user.contributionsCollection.contributionCalendar.weeks.flatMap((week) =>
                    week.contributionDays.map((day, dayIndex) => (
                      <ContributionCell key={day.date} count={day.contributionCount} />
                    )),
                  )}
                </div>
                <div className="mt-4 flex items-center justify-end gap-2 text-sm text-gray-400">
                  <span>Less</span>
                  <ContributionCell count={0} />
                  <ContributionCell count={3} />
                  <ContributionCell count={6} />
                  <ContributionCell count={9} />
                  <ContributionCell count={12} />
                  <span>More</span>
                </div>
              </div>
            </div>

            {/* Pinned Repositories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.user.pinnedItems.nodes.map((repo, index) => (
                <motion.div
                  key={repo.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="card group hover:border-teal-400/30"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-teal-400 transition-colors">
                      {repo.name}
                    </h3>
                    <p className="text-gray-400 mb-4 flex-grow">{repo.description}</p>

                    <div className="flex items-center gap-4 mt-auto">
                      {repo.primaryLanguage && (
                        <div className="flex items-center gap-1.5">
                          <span
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: repo.primaryLanguage.color }}
                          />
                          <span className="text-sm text-gray-400">{repo.primaryLanguage.name}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-3 ml-auto">
                        <div className="flex items-center gap-1 text-gray-400">
                          <Star size={16} />
                          <span className="text-sm">{repo.stargazerCount}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-400">
                          <GitFork size={16} />
                          <span className="text-sm">{repo.forkCount}</span>
                        </div>
                      </div>
                    </div>

                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 pt-4 border-t border-gray-800 text-teal-400 hover:text-teal-300 transition-colors flex items-center text-sm font-medium"
                    >
                      View Repository
                      <ExternalLink className="ml-1.5 h-4 w-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

