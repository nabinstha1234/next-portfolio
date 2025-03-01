import { CheckCircle, Zap, TrendingUp } from "lucide-react"

export default function ProblemSolution() {
  return (
    <section className="bg-gray-950 section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Professional</span> Summary
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate about creating efficient, user-centric solutions while mentoring teams and driving technical
            excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">What I Bring to the Table</h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="h-6 w-6 text-teal-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Serverless Architecture</h4>
                  <p className="text-gray-400">
                    Expertise in AWS services (Amplify, AppSync, S3, Cognito, SQS, SNS) for building scalable,
                    cost-effective solutions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Zap className="h-6 w-6 text-teal-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Performance Optimization</h4>
                  <p className="text-gray-400">
                    Proven track record of improving page load times by 35% through advanced optimization techniques.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <TrendingUp className="h-6 w-6 text-teal-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">TypeScript Migration</h4>
                  <p className="text-gray-400">
                    Led successful migrations from JavaScript to TypeScript, reducing runtime errors by 40%.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-2xl font-bold mb-6">Case Study: EcopePro Waste Management System</h3>

            <div className="space-y-4">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-1">The Challenge</h4>
                <p className="text-gray-400 text-sm">
                  A waste management system in Japan requiring optimization for low-end devices with slow user work
                  completion times.
                </p>
              </div>

              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-1">The Solution</h4>
                <p className="text-gray-400 text-sm">
                  Implemented frontend optimizations and comprehensive end-to-end testing with detailed user
                  documentation.
                </p>
              </div>

              <div className="bg-teal-900/20 border border-teal-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-1 text-teal-400">The Results</h4>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li className="flex items-center">
                    <span className="inline-block w-3 h-3 bg-teal-400 rounded-full mr-2"></span>
                    User work completion time reduced by 50%
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-3 h-3 bg-teal-400 rounded-full mr-2"></span>
                    Improved system reliability through testing
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-3 h-3 bg-teal-400 rounded-full mr-2"></span>
                    Enhanced onboarding efficiency with documentation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

