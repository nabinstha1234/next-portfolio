import HeroSection from "@/components/hero-section";
import ProblemSolution from "@/components/problem-solution";
import WorkHistory from "@/components/work-history";
import TechStack from "@/components/tech-stack";
import GitHubActivity from "@/components/github-activity";
import LeetCodeActivity from "@/components/leetcode-activity";
import TechStackTicker from "@/components/tech-stack-ticker";
import PerformanceShowcase from "@/components/performance-showcase";
import ContactSection from "@/components/contact-section";
import { getGitHubStats } from "@/lib/github";
import { getLeetCodeStats } from "@/lib/leetcode";
import Footer from "@/components/footer";

export default async function Home() {
  const githubData = await getGitHubStats("nabinstha1234");
  const leetcodeStats = await getLeetCodeStats("shresthanabin94");

  return (
    <>
      <HeroSection />
      <ProblemSolution />
      <WorkHistory />
      <TechStack />
      <GitHubActivity initialData={githubData} />
      <LeetCodeActivity stats={leetcodeStats} />
      <TechStackTicker />
      <PerformanceShowcase />
      <ContactSection />
      <Footer />
    </>
  );
}
