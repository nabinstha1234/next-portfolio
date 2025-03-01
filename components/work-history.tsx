"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

const workHistory = [
  {
    id: 1,
    year: "April 2023 - Present",
    company: "Greener Co., Ltd.",
    title: "Full Stack Developer (R&D Engineer)",
    location: "Fukuoka, Japan",
    description:
      "Leading serverless architecture adoption and TypeScript migration while ensuring scalability and security for enterprise-level projects.",
    achievements: [
      "Spearheaded the adoption of serverless architecture using AWS services (Amplify, AppSync, S3, Cognito, SQS, SNS), reducing operational costs by 30%",
      "Led the migration of the codebase from JavaScript to TypeScript, enhancing type safety and reducing runtime errors by 40%",
      "Designed and reviewed system architecture, ensuring scalability and security for enterprise-level projects",
      "Successfully scaled frontend systems to accommodate growing user bases, improving page load times by 35% through performance optimization techniques",
    ],
  },
  {
    id: 2,
    year: "Aug 2022 - March 2023",
    company: "Self-Employed",
    title: "Freelance Software Developer",
    location: "Remote",
    description:
      "Engaged in part-time freelancing for a startup project for Nepal's government transportation management system.",
    achievements: [
      "Worked on Nepal's government transportation management system on an equity basis",
      "Dedicated time to learning the Japanese language and supporting visa processing",
      "Focused on enhancing cultural and linguistic competencies to align with professional requirements",
    ],
  },
  {
    id: 3,
    year: "April 2022 - Aug 2022",
    company: "WesionaryTeam Co.",
    title: "Full Stack Developer",
    location: "Tokyo, Japan (Remote)",
    description: "Led the transition from React.js to Next.js and architected modular UI libraries with Storybook.",
    achievements: [
      "Led the transition from React.js to Next.js, reducing initial load times by 30% using server-side rendering (SSR)",
      "Architected modular UI libraries with Storybook, accelerating development timelines by 25%",
      "Collaborated with UX/UI teams and backend engineers to optimize API interactions, achieving 95% uptime for critical features",
      "Implemented image optimization and lazy loading strategies, decreasing bounce rates by 15% and boosting SEO rankings",
    ],
  },
  {
    id: 4,
    year: "November 2021 - April 2022",
    company: "Gurzu Inc.",
    title: "Software Engineer",
    location: "Kathmandu, Nepal",
    description: "Designed and implemented complex frontend projects while mentoring the frontend team.",
    achievements: [
      "Designed and implemented complex frontend projects, ensuring cross-browser compatibility",
      "Supervised and mentored the frontend team, improving development efficiency and code quality",
      "Collaborated with designers to create user interfaces and prototypes for web-based athlete management systems",
    ],
  },
  {
    id: 5,
    year: "July 2020 - November 2021",
    company: "Insight Workshop Pvt. Ltd.",
    title: "Software Engineer",
    location: "Kathmandu, Nepal",
    description:
      "Specialized in Node.js and React, contributing to robust software development for international clients.",
    achievements: [
      "Specialized in Node.js and React, contributing to robust software development for international clients",
      "Ensured clear communication with USA-based stakeholders to align project deliverables with client expectations",
    ],
  },
]

export default function WorkHistory() {
  const [activeId, setActiveId] = useState(1)

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Over 4 years of professional experience building modern web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Timeline navigation */}
          <div className="lg:col-span-4">
            <div className="relative">
              {workHistory.map((item, index) => (
                <div
                  key={item.id}
                  className={`relative cursor-pointer mb-8 pl-8 border-l-2 ${activeId === item.id ? "border-teal-400" : "border-gray-700"}`}
                  onClick={() => setActiveId(item.id)}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full ${activeId === item.id ? "bg-teal-400" : "bg-gray-700"}`}
                  ></div>

                  <div className="mb-1 text-sm text-gray-500">{item.year}</div>
                  <h3 className={`text-lg font-semibold ${activeId === item.id ? "text-teal-400" : "text-white"}`}>
                    {item.company}
                  </h3>
                  <p className="text-gray-400">{item.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Content area */}
          <div className="lg:col-span-8">
            {workHistory.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: activeId === item.id ? 1 : 0,
                  y: activeId === item.id ? 0 : 20,
                  display: activeId === item.id ? "block" : "none",
                }}
                transition={{ duration: 0.3 }}
                className="card h-full"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">{item.company}</h3>
                    <p className="text-xl text-gray-300">
                      {item.title} <span className="text-gray-500">• {item.location}</span>
                    </p>
                    <p className="text-gray-500">{item.year}</p>
                  </div>

                  <p className="text-gray-300 mb-6">{item.description}</p>

                  <div className="mt-auto">
                    <h4 className="text-lg font-semibold mb-3 text-teal-400">Key Achievements</h4>
                    <ul className="space-y-3">
                      {item.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-teal-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 ml-2">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

