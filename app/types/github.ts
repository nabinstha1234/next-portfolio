export type GitHubData = {
  user: {
    contributionsCollection: {
      contributionCalendar: {
        totalContributions: number;
        weeks: {
          contributionDays: {
            contributionCount: number;
            date: string;
          }[];
        }[];
      };
    };
    pinnedItems: {
      nodes: {
        name: string;
        description: string | null;
        url: string;
        stargazerCount: number;
        forkCount: number;
        primaryLanguage: {
          name: string;
          color: string;
        } | null;
      }[];
    };
  };
};
