export interface LeetCodeStats {
  totalSolved: number
  totalQuestions: number
  easySolved: number
  mediumSolved: number
  hardSolved: number
  acceptanceRate: number
  ranking: number
  contributionPoints: number
  reputation: number
  submissions: {
    title: string
    difficulty: string
    status: string
    timestamp: string
  }[]
}

export const getLeetCodeStats = async (username: string): Promise<LeetCodeStats> => {
  // In a real implementation, you would fetch this data from LeetCode
  // This is mock data for demonstration
  return {
    totalSolved: 387,
    totalQuestions: 2400,
    easySolved: 150,
    mediumSolved: 180,
    hardSolved: 57,
    acceptanceRate: 65.4,
    ranking: 54892,
    contributionPoints: 2456,
    reputation: 1890,
    submissions: [
      {
        title: "Two Sum",
        difficulty: "Easy",
        status: "Accepted",
        timestamp: "2024-02-28",
      },
      {
        title: "LRU Cache",
        difficulty: "Medium",
        status: "Accepted",
        timestamp: "2024-02-27",
      },
      {
        title: "Median of Two Sorted Arrays",
        difficulty: "Hard",
        status: "Accepted",
        timestamp: "2024-02-26",
      },
    ],
  }
}

