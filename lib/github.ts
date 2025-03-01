import { GraphQLClient } from "graphql-request"

const GITHUB_TOKEN = process.env.GITHUB_TOKEN

// Default data structure for GitHub stats
export const defaultGitHubData = {
  user: {
    contributionsCollection: {
      contributionCalendar: {
        totalContributions: 0,
        weeks: Array.from({ length: 52 }, () => ({
          contributionDays: Array.from({ length: 7 }, () => ({
            contributionCount: 0,
            date: new Date().toISOString(),
          })),
        })),
      },
    },
    pinnedItems: {
      nodes: [],
    },
  },
}

export const getGitHubStats = async (username: string) => {
  if (!GITHUB_TOKEN) {
    console.warn("GitHub token not found. Please set the GITHUB_TOKEN environment variable.")
    return defaultGitHubData
  }

  const githubClient = new GraphQLClient("https://api.github.com/graphql", {
    headers: {
      authorization: `Bearer ${GITHUB_TOKEN}`,
    },
  })

  const query = `
    query ($username: String!) {
      user(login: $username) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              name
              description
              url
              stargazerCount
              forkCount
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
  `

  try {
    const response = await githubClient.request(query, { username })
    return response
  } catch (error) {
    console.error("Error fetching GitHub stats:", error)
    return defaultGitHubData
  }
}

